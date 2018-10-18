// /* NUMBER VALIDATION // CURRENTLY NOT IN USE */
// /*----------------------------------------------------------------------------*/
// function valNum(evt, ele) {
//       var theEvent = evt || window.event;
//       var key = theEvent.keyCode || theEvent.which;
//       key = String.fromCharCode( key );
//       var value = ele.value + key;
//
//       var regex = /^[1-9]\d*(\.\d{0,2})?$/;
//       if( !regex.test(value) ) {
//         theEvent.returnValue = false;
//         if(theEvent.preventDefault) theEvent.preventDefault();
//     }
//   }
//
// function forNum(txb){
//
//     var value=document.getElementById(txb.id).value;
//     var valueValue=document.getElementById(txb.id).value.replace(/[,]/g,'');
//         valueValue=valueValue.replace(/[.]/g,',');
//
//
//     var textBeforeComma=value.split('.')[0];
//     var textWithPoints=textBeforeComma;
//
//     if(textBeforeComma.length>3){
//        var position=-3;
//        var loops=0;
//        while(position>-textBeforeComma.length-loops)
//        {textWithPoints = [textWithPoints.slice(0, position), ",", textWithPoints.slice(position)].join('');
//         position = position-4;loops=loops+1;}}
//
//      var newText=textWithPoints;
//      if(value.indexOf('.')>-1)
//      {newText=newText+'.'+value.split('.')[1];}
//      document.getElementById(txb.id).value=newText;
// }
//
// function focNum(val){
//     var value=document.getElementById(val.id).value;
//     var txbWithoutPoints=value.replace(/[,]/g,'');
//     document.getElementById(val.id).value=txbWithoutPoints;
//   };
