const $ce = e => document.createElement(e);
class Quran extends HTMLElement {
  constructor() {
   super();
    this.root = this;
    this.played = null;
    this.pause = false;
    this.surahs = {
      '001': 'ٱلْفَاتِحَة',
      '002': 'ٱلْبَقَرَة',
      '003': 'آلِ عِمْرَان',
      '004': 'ٱلنِّسَاء',
      '005': 'ٱلْمَائِدَة',
      '006': 'ٱلْأَنْعَام',
      '007': 'ٱلْأَعْرَاف',
      '008': 'ٱلْأَنْفَال',
      '009': 'ٱلتَّوْبَة',
      '010': 'يُونُس',
      '011': 'هُود',
      '012': 'يُوسُف',
      '013': 'ٱلرَّعْد',
      '014': 'إِبْرَاهِيم',
      '015': 'ٱلْحِجْر',
      '016': 'ٱلنَّحْل',
      '017': 'ٱلْإِسْرَاء',
      '018': 'ٱلْكَهْف',
      '019': 'مَرْيَم',
      '020': 'طه',
      '021': 'ٱلْأَنْبِيَاء',
      '022': 'ٱلْحَجّ',
      '023': 'ٱلْمُؤْمِنُون',
      '024': 'ٱلنُّور',
      '025': 'ٱلْفُرْقَان',
      '026': 'ٱلشُّعَرَاء',
      '027': 'ٱلنَّمْل',
      '028': 'ٱلْقَصَص',
      '029': 'ٱلْعَنْكَبُوت',
      '030': 'ٱلرُّوم',
      '031': 'لُقْمَان',
      '032': 'ٱلسَّجْدَة',
      '033': 'ٱلْأَحْزَاب',
      '034': 'سَبَأ',
      '035': 'فَاطِر',
      '036': 'يس',
      '037': 'ٱلصَّافَّات',
      '038': 'ص',
      '039': 'ٱلزُّمَر',
      '040': 'غَافِر',
      '041': 'فُصِّلَت',
      '042': 'ٱلشُّورىٰ',
      '043': 'ٱلْزُّخْرُف',
      '044': 'ٱلدُّخَان',
      '045': 'ٱلْجَاثِيَة',
      '046': 'ٱلْأَحْقَاف',
      '047': 'مُحَمَّد',
      '048': 'ٱلْفَتْح',
      '049': 'ٱلْحُجُرَات',
      '050': 'ق',
      '051': 'ٱلذَّارِيَات',
      '052': 'ٱلطُّور',
      '053': 'ٱلنَّجْم',
      '054': 'ٱلْقَمَر',
      '055': 'ٱلرَّحْمَٰن',
      '056': 'ٱلْوَاقِعَة',
      '057': 'ٱلْحَدِيد',
      '058': 'ٱلْمُجَادِلَة',
      '059': 'ٱلْحَشْر',
      '060': 'ٱلْمُمْتَحَنَة',
      '061': 'ٱلصَّفّ',
      '062': 'ٱلْجُمُعَة',
      '063': 'ٱلْمُنَافِقُون',
      '064': 'ٱلتَّغَابُن',
      '065': 'ٱلطَّلَاق',
      '066': 'ٱلتَّحْرِيم',
      '067': 'ٱلْمُلْك',
      '068': 'ٱلْقَلَم',
      '069': 'ٱلْحَاقَّة',
      '070': 'ٱلْمَعَارِج',
      '071': 'نُوح',
      '072': 'ٱلْجِنّ',
      '073': 'ٱلْمُزَّمِّل',
      '074': 'ٱلْمُدَّثِّر',
      '075': 'ٱلْقِيَامَة',
      '076': 'ٱلْإِنْسَان',
      '077': 'ٱلْمُرْسَلَات',
      '078': 'ٱلنَّبَأ',
      '079': 'ٱلنَّازِعَات',
      '080': 'عَبَسَ',
      '081': 'ٱلتَّكْوِير',
      '082': 'ٱلْإِنْفِطَار',
      '083': 'ٱلْمُطَفِّفِين',
      '084': 'ٱلْإِنْشِقَاق',
      '085': 'ٱلْبُرُوج',
      '086': 'ٱلطَّارِق',
      '087': 'ٱلْأَعْلَىٰ',
      '088': 'ٱلْغَاشِيَة',
      '089': 'ٱلْفَجْر',
      '090': 'ٱلْبَلَد',
      '091': 'ٱلشَّمْس',
      '092': 'ٱللَّيْل',
      '093': 'ٱلضُّحَىٰ',
      '094': 'ٱلشَّرْح',
      '095': 'ٱلتِّين',
      '096': 'ٱلْعَلَق',
      '097': 'ٱلْقَدْر',
      '098': 'ٱلْبَيِّنَة',
      '099': 'ٱلزَّلْرَلَة',
      '100': 'ٱلْعَادِيَات',
      '101': 'ٱلْقَارِعَة',
      '102': 'ٱلتَّكَاثُر',
      '103': 'ٱلْعَصْر',
      '104': 'ٱلْهُمَزَة',
      '105': 'ٱلْفِيل',
      '106': 'قُرَيْش',
      '107': 'ٱلْمَاعُون',
      '108': 'ٱلْكَوْثَر',
      '109': 'ٱلْكَافِرُون',
      '110': 'ٱلنَّصْر',
      '111': 'ٱلْمَسَد',
      '112': 'ٱلْإِخْلَاص',
      '113': 'ٱلْفَلَق',
      '114': 'ٱلنَّاس'

    };
    
    this.checkInput = $ce("input");
    this.playButton = $ce('button');
    this.nextButton = $ce('button');
    this.selectInput = $ce('select');
    this.previousButton = $ce('button');
    this.rangeInput = $ce("input");
    this.currentLabel = $ce("label");
    this.durationLabel = $ce("label");
    this.ayat = $ce('div');
    
    this.durationLabel.className = "duration";
    this.previousButton.className = "changebuttons";
    this.nextButton.className = "changebuttons";
    this.ayat.className = "ayat";
    
    this.checkInput.type = "checkbox";
    this.checkInput.setAttribute('title','التشغيل تلقائيًا');
    this.checkInput.checked = true;
    
    this.playButton.innerHTML = "تشغيل";
    this.playButton.onclick = () => {
        this.play();
    }

    this.previousButton.innerText = '«';
    this.previousButton.onclick = ()=>{
      
      if(this.selectInput.selectedIndex <= 0)
      {
        this.selectInput.selectedIndex = 1;
      }
      
      this.selectInput.selectedIndex -= 1;
      this.selectInput.onchange();
    }

    for (let Q = 0; Q < Object.keys(this.surahs).length; Q++) {
      let optionInput = $ce("option");
      
      optionInput.innerHTML = this.surahs[this.ayatFormatNumber(Q + 1)];
      optionInput.value = this.ayatFormatNumber(Q + 1);
      
      this.selectInput.append(optionInput);
    }

    this.selectInput.onchange = ()=>{
        this.load();
        this.playButton.innerText = "تشغيل";
        this.pause = false;
        this.played.currentTime = 0;
        this.rangeInput.max = 0;
        this.rangeInput.value = 0;
    }

    this.nextButton.innerText = '»';
    this.nextButton.onclick = ()=>{
      if(this.selectInput.selectedIndex == this.selectInput.options.length-1)
      {
        this.selectInput.selectedIndex = this.selectInput.options.length-2;
      }

      this.selectInput.selectedIndex += 1;
      this.selectInput.onchange();
    }

    this.rangeInput.type = "range";
    this.rangeInput.min = 0;
    this.rangeInput.max = 0;
    this.rangeInput.value = 0;
    this.rangeInput.oninput = ()=>{
        this.played.currentTime = this.rangeInput.value;
    };

    this.currentLabel.innerText = "00:00:00";
    this.durationLabel.innerText = "00:00:00";

    this.root.append(this.checkInput, this.playButton, ' ', this.previousButton, this.selectInput, this.nextButton, ' ', this.rangeInput, this.currentLabel, this.durationLabel, this.ayat);
    this.load();
  }

  play(){
    try{
        this.played.pause();
    } catch(e){  }

    if(this.played == null){
        this.load();
    }
    this.played.play();
    if(this.pause == false){
      this.playButton.innerText = "ايقاف";
      this.played.play();
      this.pause = true;
    } else {
      this.playButton.innerText = "استئناف";      
      this.played.pause();
      this.pause = true;
    }
  }
  load(){
    let url = "https://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/" + this.selectInput.value + ".mp3";
    let ayat = "https://xlmnxp.github.io/quran-data/quran/"+ this.selectInput.value +".txt";
    
    fetch(ayat)
    .then(result => result.text())
    .then(ayats => {
      this.ayat.innerHTML = ayats;
    })
    .catch(() =>{
      alert('لا يمكن تحميل الأيات')
    });
    
    try{
        this.played.pause();
    }catch(e){  }
    
    this.played = new Audio(url);
    
    this.played.addEventListener('canplaythrough', () =>{
        if(this.checkInput.checked){
          this.pause == false;
          if(this.pause == false){
            this.playButton.innerText = "ايقاف";
            this.played.play();
            this.pause = true;
          }else{
            this.playButton.innerText = "استئناف";      
            this.played.pause();
            this.pause = false;
          }
        }

        this.currentLabel.innerText = this.fancyTimeFormat(this.played.currentTime);
        this.durationLabel.innerText = this.fancyTimeFormat(this.played.duration);
        this.rangeInput.max = ~~this.played.duration;
        this.rangeInput.value = ~~this.played.currentTime;
        setInterval(() => {
            this.currentLabel.innerText = this.fancyTimeFormat(this.played.currentTime);
            this.durationLabel.innerText = this.fancyTimeFormat(this.played.duration);
            
            this.rangeInput.value = ~~this.played.currentTime;
        },800);
    }, false);
  }

  fancyTimeFormat(time) {
    // Hours, minutes and seconds
    let hrs = ~~(time / 3600);
    let mins = ~~((time % 3600) / 60);
    let secs = ~~(time % 60);

    // Result like "1:01" or "4:03:59" or "123:03:59"
    let timer = "";

    if (hrs > 0) {
        timer += (hrs < 10 ? "0" : "");
        timer += "" + hrs + ":";
    } else {
        timer += "00:";
    }

    timer += (mins < 10 ? "0" : "");
    timer += "" + mins + ":" + (secs < 10 ? "0" : "");
    timer += "" + secs;
    return timer;
  }

  ayatFormatNumber(Q) {
    let m = "000";
    let stn = Q.toString();
    m = m.substring(0, m.length - stn.length);
    m += stn;

    return m;
  }
}
customElements.define("quran-kareed", Quran);
