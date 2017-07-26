<b>Build micro:bit step counter with GPS tracking</b>

https://youtu.be/jM_6_iQYBj4

How it works:
Everytime you walk (shake) the micro:bit, it will send the bluetooth event notification to Android smartphone. The Android smartphone will then record and write the GPS location (latitude and longitude) to the Google Firebase database. 
User can track their location from the web based app. The location information can be removed when it is no longer needed.

Source code:
- Cordova FireBase Android App on Github: https://github.com/ferrygun/microbit-stepometer
- Microsoft micro:bit code editor: https://makecode.microbit.org/_g3iL7dbDJP9b

Compile the Cordova Android App and install .apk file on your Android smartphone:
https://github.com/…/microbit…/blob/master/android-debug.apk

Copy .hex file to micro:bit:
https://github.com/…/mi…/blob/master/microbit-stepometer.hex

Track the GPS location:
Open the map.html from your browser:
https://github.com/…/microbit-stepomet…/blob/master/map.html

How to use:
- Launch the app on Android smartphone (tested on Samsung Android 6) and connect to micro:bit
- Walk around your block. Do some exercises !!
- Check the current location from web app: map.html
