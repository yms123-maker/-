define(["parabola","jquery","jquery-cookie"],function(parabola,$){
    function download(){
        $(".main_body1>span").click(function(){
            $(".main_body1>span").css("border-bottom","3px solid transparent")
            $(this).css("border-bottom","3px solid black")

        })
        $(".main_body1>span:nth-child(1)").click(function(){
            $(".main_body2").css("display","none")
            $(".main_body21").css("display","none")
            $(".main_body2").css("display","block")
            $("main_bodybottom>a:nth-child(2)").css("display","block")
            $("main_bodybottom>a:nth-child(3)").css("display","block")
        })
        $(".main_body1>span:nth-child(2)").click(function(){
            $(".main_body2").css("display","none")
            $(".main_body21").css("display","none")
            $(".main_body21").css("display","block")
            $("main_bodybottom>a:nth-child(2)").css("opacity","0")
            $("main_bodybottom>a:nth-child(3)").css("opacity","0")
        })


    }
    return {
        download,
    }
})