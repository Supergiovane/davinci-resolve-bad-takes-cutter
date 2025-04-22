# Bad takes cutter
*Bad takes cutter* is a tool to automatically remove bad clips.  
If you're a video content creator, you often find yourself to re-record some clips because of any sort of error you made (mistakes, stammering, forgetfulness, etc.).
This tool helps you mark the "bad" clips while you're recording using a pushbutton on your Streamdeck, allowing the tool to automatically process your project file and remove such bad clips, avoiding manually find those clips in the timeline and delete it.
It works in conjunction with [Bitfocus Companion](https://bitfocus.io/companion), Davinci Resolve and Atem Mini ISO.
The Atem Mini ISO creates a project file compatible with Davinci Resolve, together with all video and audio files. This file contains all the clips you're recorded whenever you pressed RECORD on the Atem.   

## Workflow

You record your clips (bad and good ones) **->>** END **->>** You upload the project file created by your Atem into the *Bad takes cutter*'s web page **->>** You download the purged project file to be directly imported into Davinci Resolve.

## Web site: http://casacorte.ddns.net:3000

![alt text](public/2.jpg)

**ASSETS DOWNLOAD**

- <a id="raw-url" href="https://github.com/Supergiovane/davinci-resolve-bad-takes-cutter/releases/download/1.0.0/BAD-TAKE.png">BAD-TAKE image</a>
- <a id="raw-url" href="https://github.com/Supergiovane/davinci-resolve-bad-takes-cutter/releases/download/1.0.0/buttons.companionconfig">Companion Buttons</a>

Load the BAD-TAKE.jpg in the Atem's media pool, in the position #5, using the Atem Control Software. Then, import the Companion Button file into Bitfocus Companion, using the "Import configuration file" button, located in the import/export TAB. You're done.  
[View this youtube VIDEO](https://youtu.be/9UiCROFJnt0), to take a look of the entire process (there is a naming mistake in the video. TAKE START means **START CLIP**, TAKE ACCEPT means **ACCEPT CLIP**, TAKE DISCARD means **DISCARD CLIP** )

## **How it works**:  

- Start recording by pressing **START CLIP**. The Atem will start recording.
- If the clip is good, press **ACCEPT CLIP**. The Atem will stop recording and accept the clip.
- If the clip is bad, press **DISCARD CLIP**. The Atem will stop recording and mark the clip as rejected.
- Repeat again, until you fihished your video.

![alt text](public/1.jpg)

Once done with your video, [GO HERE](http://casacorte.ddns.net:3000) and:

- Upload your .drp project file, taken from the Atem and press "Upload and Process".
- Put the downloaded clean project file into the same folder as the original .drp project file, then double click it. The clean project file contains good clips and gaps where it was bad clips.
- To delete timeline gaps in DaVinci Resolve, Select **all clips (Cmd+A or ctrl+A) in the timeline's Edit page**, then go to the **Edit** menu and click **Delete Gaps**.  
  
You can either use the online service provided by the developer (myself), or download this repository and set up the service on your own. Alternatively, if you're familiar with JavaScript, you can modify the <code>cleanBadTakes.js</code> file and create your own script to run within DaVinci Resolve.  
If you use the online service provided by the developer, please consider a little donation to support the development. 
<div class="paypal-button">
    <a href="https://www.paypal.com/donate/?hosted_button_id=S8SKPUBSPK758" target="_blank">
    <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate with PayPal button" />
    </a>
</div>



![Made in Italy](public/madeinitaly.png)

