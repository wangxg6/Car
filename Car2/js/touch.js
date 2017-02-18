var eventUtil={
    addHandler:function(a,c,b){
        if(a.addEventListener){
            a.addEventListener(c,b,false)
        }else{
            if(a.attachEvent){
                a.attachEvent("on"+c,b)
            }else{
                a["on"+c]=b
            }
        }
    },
    removeHandler:function(a,c,b){
        if(a.removeEventListener){
            a.removeEventListener(c,b,false)
        }else{
            if(a.detachEvent){
                a.detachEvent("on"+c,b)
            }else{
                a["on"+c]=null
            }
        }
    },
    getEvent:function(a){
        return a?a:window.event
    },
    getTarget:function(a){
        return a.target||a.srcElement
    },
    contains:function(b,a){
        return b.contains?b.contains(a):!!(b.compareDocumentPosition(a)&16)
    },
    mouseEnterLeave:function(e,d,c){
        var b=this;
        var a=d==="mouseenter";
        var g=a?"fromElement":"toElement";
        var f=function(i){
            i=i||window.event;
            var j=i.target||i.srcElement;
            var h=i.relatedTarget||i[g];
            if((e===j||b.contains(e,j))&&!b.contains(e,h)){
                c()
            }
        };
        d=a?"mouseover":"mouseout";
        b.addHandler(e,d,f);
        return f
    }
};

function getAngle(angx,angy){
  return Math.atan2(angy,angx) * 180 /Math.PI;
}

function getDirection(starx,starty,endx,endy){
  var angx = endx - startx;
  var angy = endy - starty;
  if(Math.abs(angx)<2&&Math.abs(angy)<2){
    return 0;
  }
    var angle = getAngle(angx,angy);
    if(angle >= -135 &&angle <= -45){
      return 1;//up
    }
    else if(angle > 45 &&angle<135){
      return 2;//down
    }
    else if((angle >= 135 && angle<=180)||(angle >= -180 <=-135)){
      return 3;//left
    }
    else if(angle>= -45 && angle<=45){
      return 4;//right
    }
}

var startx,starty;

eventUtil.addHandler(document,"touchstart",function(e){
  startx = e.touches[0].pageX;
  starty = e.touches[0].pageY;
});

/*
eventUtil.addHandler(document,"touchend",function(e){
  var endx = e.changedTouches[0].pageX;
  var endy = e.changedTouches[0].pageY;
  var direction = getDirection(startx,starty,endx,endy);
  switch(direction) {
    case 0:
      alert("未滑动");
      break;
    case 1:
      alert("上");
      break;
    case 2:
      alert("下");
      break;
    case 3:
      alert("左");
      break;
    case 4:
      alert("右");
      break;
    default:
  }
});
*/

