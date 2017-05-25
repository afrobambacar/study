(function(w, d){
  var text = ['청기 올려', '청기 내려', '백기 올려', '백기 내려'],
    msg = d.querySelector('.msg'),
    blueFlag = d.querySelector('.flag .blue'),
    whiteFlag = d.querySelector('.flag .white'),
    btn = d.querySelectorAll('.btn button'),
    blueBtn = d.querySelector('.btn .btn_blue'),
    whiteBtn = d.querySelector('.btn .btn_white');
  
  function stage() {
    var random = Math.floor(Math.random() * 4);
    msg.innerHTML = text[random];

    
    blueBtn.ontouchstart = function(){
        var btnType = 'blue';
        btnAction(event, btnType);
    }
    whiteBtn.ontouchstart = function(){
        var btnType = 'white';
        btnAction(event, btnType);
    }

    function btnAction(event, btnType) {
      var current = event.touches[0].pageY,
        gap;
      d.ontouchmove = function(event) {
        var move = event.touches[0].pageY;
        event.preventDefault();
        gap = move - current;

      };
      d.ontouchend = function(event) {
        d.ontouchmove = null;
        d.ontouchend = null;
        btnResult(gap, btnType);
      };
    };

    function btnResult(gap, btnType) {
      var upDown = (gap < 0) ? "올려" : "내려",
        flagType = (btnType === 'blue') ? "청기" : "백기",
        result = flagType + ' ' + upDown;
      if (result === text[random]) {
        alert('맞췄다!!');
      } else {
        alert('틀렸다!!');
      }
      stage();
    }
  }
  stage();
  
}(window, document));
