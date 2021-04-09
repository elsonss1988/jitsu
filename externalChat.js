function meetMe(){
    var radios = document.getElementsByName("palestrante");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
            var nameEvent=radios[i].value
        }
    }    
    //var nameEvent='WebEvent'
    var rand=Math.floor(Math.random()*100)
    const domain = 'meet.jit.si';
    const options = {
        roomName: nameEvent+'/'+rand,
        width: 700,
        height: 700,
        configOverwrite: { startWithAudioMuted: true },
        parentNode: document.querySelector('#meet')
    };
    console.log('https://meet.jit.si/mycompany/static/dialInInfo.html?room='+nameEvent+'/'+rand,)
    console.log('https://api.jitsi.net/phoneNumberList?conference=SuccessivePortsCompeteMeanwhile@conference.meet.jit.si')
const api = new JitsiMeetExternalAPI(domain, options);
api.resizeLargeVideo(width, height);
}