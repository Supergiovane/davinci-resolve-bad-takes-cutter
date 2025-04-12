# Bad takes cutter
Bad takes cutter for Blackmagic Davinci Resolve and Bitfocus Companion.

![alt text](public/2.jpg)

**ASSETS DOWNLOAD**

- <a id="raw-url" href="https://raw.githubusercontent.com/Supergiovane/davinci-resolve-bad-takes-cutter/master/public/BAD-TAKE.png">BAD-TAKE image</a> (right click and select "download linked file")
- <a id="raw-url" href="https://raw.githubusercontent.com/Supergiovane/davinci-resolve-bad-takes-cutter/master/public/buttons.companionconfig">Companion Buttons</a> (right click and select "download linked file")
 
Load the BAD-TAKE.jpg in the Atem's media pool, in the position #5, using the Atem Control Software. Then, import the Companion Button file into Bitfocus Companion, using the "Import configuration file" button, located in the import/export TAB. You're done.  
[View this youtube VIDEO](https://pages.github.com/), to take a look of the entire process.

## **How it works**:  

Start a take by pressing **TAKE START**. The Atem will start recording.

- If the take is good, press **TAKE ACCEPT**. The Atem will stop recording and accept the take.
- If the take is bad, press **TAKE DISCARD**. The Atem will stop recording and reject the take.

![alt text](public/1.jpg)

Once finished, [GO HERE](https://pages.github.com:3000/) and:

- Upload your .drp project file, taken from the Atem and press "Upload and Process".
- Put the downloaded clean project file into the same folder as the original .drp project file, then double click it. The clean project file contains good takes and gaps where it was bad takes.
- To delete timeline gaps in DaVinci Resolve, Select **all clips (Cmd+A) in the timeline's Edit page**, then go to the **Edit** menu and click **Delete Gaps**. 




