var r = document.getElementById('result');

function startConverting() {
    if ('webkitSpeechRecognition' in window) {
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continious = true;
        speechRecognizer.interResults = true;
        speechRecognizer.lang = 'sr-RS';
        speechRecognizer.start();

        var finalTranscripts = '';

        speechRecognizer.onresult = function (e) {
            for (var i = e.resultIndex; i < e.results.length; i++) {
                var transcript = e.results[i][0].transcript;
                transcript.replace('\n', '<br>');
                if (e.results[i].isFinal) {
                    finalTranscripts += transcript;
                }
            }

            if(finalTranscripts === 'najbolji') {
                r.innerHTML = finalTranscripts + ' <span style="color:green">Great! Correct Word!</span>'
            } else {
                r.innerHTML = finalTranscripts + ' <span style="color:red">That is not correct word...<span>';
            }
        };

        speechRecognizer.onerror = function (e) {}

    } else {
        r.innerHTML = 'Your browser is not supported...';
    }
}