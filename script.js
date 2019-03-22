$(".anais").hide();
$(".gumball").hide();
$(".darwin").hide();
$(".nicole").hide();
$(".principalBrown").hide();
$(".simian").hide();
$(".bananaJoe").hide();
$(".richard").hide();
$(".tina").hide();

$("button").click(function(){
    var iq = $(".iq").val();
    var gender = $(".gender").val();
    var color = $(".color").val();

    if(iq <= parseInt("8") && gender === "Girl" && color === "Pink"){
        $(".anais").show();
        console.log("ioo");
    }else if((iq <= parseInt("3") && iq <= parseInt("7")) && gender === "Boy" && color === "Blue"){
            $(".gumball").show();
            console.log("ioo");
    }else if((iq <= parseInt("4") && iq <= parseInt("8")) && gender === "Boy" && color === "Orange"){
            $(".darwin").show();
    }else if((iq <= parseInt("6") && iq <= parseInt("10")) && gender === "Girl" && color === "Blue"){
            $(".nicole").show();
    }else if((iq <= parseInt("1") && iq <= parseInt("3")) && gender === "Boy" && color === "Pink"){
            $(".richard").show();
    }else if((iq <= parseInt("3") && iq <= parseInt("10")) && gender === "Boy" && color === "Brown"){
            $(".principalBrown").show();
    }else if((iq <= parseInt("1") && iq <= parseInt("10")) && gender === "Girl" && color === "Black" || color === "Gray"){
            $(".simian").show();
    }else if((iq <= parseInt("1") && iq <= parseInt("10"))&& gender === "Boy" && color === "Yellow"){
            $(".bananaJoe").show();
    }else if((iq <= parseInt("1") && iq <= parseInt("10")) && gender === "Girl" && color === "Green"){
            $(".tina").show();
                }else{
            alert("Oof, try again");}
});



