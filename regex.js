// var s="Dr. Stephen Strange - ";

// var s=["Dr. test - test 05/24/2021", " - test 05/24/2021", " -", "Dr. Test - 05/24/2021", " - 05/24/2021", "Dr. Test - ", "Dr. Test -"];

// for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//     // var r = s[i].replace(/(^ - +)|( - +$)/, ''); //not working for " -"

//     var reg = new RegExp(/-$|^-/ig);
//     var r = s[i].trim().replace(reg,"").trim();
//     console.log(r);
// }



// var a=["Dr. test - test 05/24/2021", " - test 05/24/2021", " -", "Dr. Test - 05/24/2021", " - 05/24/2021", "Dr. Test - ", "Dr. Test -"];

var a=["Dr. Stephen Strange -", " - COMMUNITY CARE HEALTH NETWORK 05/24/2021", "Dr. Stephen Strange - COMMUNITY CARE HEALTH NETWORK 05\/24\/2021", " -", "Dr. Stephen Strange -  05/24/2021", "Dr. Stephen Strange -  05/24/2021", " -  05/24/2021", "Dr. Stephen Strange -"];

for (let i = 0; i < a.length; i++) {
    let text = a[i];
    const sourceDetails = text.split('-');
    console.log(sourceDetails);

    var b = sourceDetails.filter(function( element ) {
        return element !== '' && element !== ' ';
     });

    const otherSourceDetails = b.join('-');

    console.log("********* string: ");
    console.log(text);
    
    // sourceDetails.filter(e => e);
    // console.log(b);

    console.log(otherSourceDetails);
}

// "Dr. test - test 05/24/2021" => "Dr. test - test 05/24/2021"
// " - test 05/24/2021" => "test 05/24/2021"
// " -" => "" 
// "Dr. Test - 05/24/2021" => "Dr. Test - 05/24/2021"
// " - 05/24/2021" => "05/24/2021" 
// "Dr. Test - " => "Dr. Test"
//  "Dr. Test -" => "Dr. Test"

// var data = [42, 21, '', 50, 40, '', 9];

// data = data.filter(function( element ) {
//    return element !== '';
// });
// console.log(data);