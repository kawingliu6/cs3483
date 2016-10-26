    function testFunction(current) {
                debugger;
                var x = current.name;
                var u1 = new SpeechSynthesisUtterance(x);
                u1.lang = 'en-US';
                u1.pitch = 1;
                u1.rate = 1;
                //u1.voice = voices[10];
                u1.voiceURI = 'native';
                u1.volume = 1;
                speechSynthesis.speak(u1);
    }