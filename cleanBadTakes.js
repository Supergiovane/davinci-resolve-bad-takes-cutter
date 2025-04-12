const fs = require('fs');

function cleanBadTakes(data) {
    console.log('');
    const lines = data.split(/\r?\n/);
    const takes = [];
    let currentTake = [];

    lines.forEach(line => {
        if (line !== '') {
            if (line.includes('{"version":')) {
                if (currentTake.length > 0) {
                    takes.push(currentTake.join("\n"));
                }
                currentTake = [line];
            } else {
                currentTake.push(line);
            }
        }
    });

    if (currentTake.length > 0) {
        takes.push(currentTake.join("\n"));
    }

    console.log(`Trovati ${takes.length} TAKES`);
    console.log('');

    const validTakes = [];

    takes.forEach((take, idx) => {
        const takeLines = take.split(/\r?\n/);
        const objects = [];

        takeLines.forEach((line, li) => {
            try {
                if (line !== null && line !== '') {
                    const obj = JSON.parse(line);
                    objects.push(obj);
                }
            } catch (e) {
                console.log(`TAKE ${idx} riga ${li}: impossibile parsare come JSON, salto questa riga.`);
            }
        });

        let badIndex = null;
        let sourceFound = false;

        for (let index = 0; index < objects.length; index++) {
            const oRiga = objects[index];
            try {
                for (let j = 0; j < oRiga.sources?.length; j++) {
                    const element = oRiga.sources[j];
                    if (element.file && element.file.includes("BAD-TAKE.png")) {
                        badIndex = element._index_;
                        break;
                    }
                }
            } catch (error) {
                badIndex = null;
            }
            if (badIndex !== null) break;
        }

        if (badIndex === null) {
            console.log(`TAKE ${idx}: nessun BAD-TAKE trovato, mantenuto.`);
            validTakes.push(take);
            return;
        }

        for (let index = 0; index < objects.length; index++) {
            const element = objects[index];
            if (element.hasOwnProperty("mixEffectBlocks")) {
                sourceFound = element.mixEffectBlocks.find(a => a.source === badIndex);
                if (sourceFound) break;
            }
        }

        if (sourceFound) {
            console.log(`TAKE ${idx}: eliminato (trovato source uguale a badIndex ${badIndex}).`);
        } else {
            console.log(`TAKE ${idx}: nessun BAD-TAKE trovato, mantenuto.`);
            validTakes.push(take);
        }
    });

    console.log(`Mantenuti ${validTakes.length} TAKES su ${takes.length}`);
    const outputData = validTakes.join("\n");

    console.log('');
    console.log('Per eliminare i gaps sulla timeline di Davinci Resolve, seleziona tutte le clip (cmd+A) della timeline della pagina "Edit", poi menu "edit", voce "delete gaps".');
    console.log('');

    return (outputData);

}

module.exports = cleanBadTakes;
