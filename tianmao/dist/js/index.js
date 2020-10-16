define(["parabola","jquery","jquery-cookie"],function(parabola,$){
   function downLoad(){
        $("#top_rightfirst").mouseenter(function(){
            $("#top_rightfirstchild").css("display","block")
            $("#top_rightfirstchild").css("z-index","1")
        })
        $("#top_rightfirst,#top_rightfirstchild").mouseleave(function(){
            $("#top_rightfirstchild").css("display","none")
        })
        $("#top_rightfirstchild").mouseenter(function(){
            $(this).css("display","block")
        })

        $("#top_rightthird").mouseenter(function(){
            $("#top_rightthirdchild").css("display","block")
            $("#top_rightthirdchild").css("z-index","1")
        })
        $("#top_rightthird,#top_rightthirdchild").mouseleave(function(){
            $("#top_rightthirdchild").css("display","none")
        })
        $("#top_rightthirdchild").mouseenter(function(){
            $(this).css("display","block")
        })

        $("#top_rightfourth").mouseenter(function(){
            $("#top_rightfourthchild").css("display","block")
            $("#top_rightfourthchild").css("z-index","1")
        })
        $("#top_rightfourth,#top_rightfourthchild").mouseleave(function(){
            $("#top_rightfourthchild").css("display","none")
        })
        $("#top_rightfourthchild").mouseenter(function(){
            $(this).css("display","block")
        })
        
        $("#top_rightsixth").mouseenter(function(){
            $("#top_rightsixthchild").css("display","block")
            $("#top_rightsixthchild").css("z-index","1")
        })
        $("#top_rightsixth,#top_rightsixthchild").mouseleave(function(){
            $("#top_rightsixthchild").css("display","none")
        })
        $("#top_rightsixthchild").mouseenter(function(){
            $(this).css("display","block")
        })
       
        $("#top_rightseventh").mouseenter(function(){
            $("#top_rightseventhchild").css("display","block")
            $("#top_rightseventhchild").css("z-index","1")
        })
        $("#top_rightseventh,#top_rightseventhchild").mouseleave(function(){
            $("#top_rightseventhchild").css("display","none")
        })
        $("#top_rightseventhchild").mouseenter(function(){
            $(this).css("display","block")
        })
        
        // box1划入显示菜单栏事件
        $(".box1_menu").mouseenter(function(ev){
            var e=ev||window.event;
            var target=e.target||window.event.srcElement
            if(target.className=="box1_menulist1"){
                $(".box1_menublock1").css("display","block")
               
                $(target).mouseleave(function(ev){
                        $(".box1_menublock1").css("display","none")
                })
                 $(target).mouseenter(function(ev){
                    $(".box1_menublock1").css("display","block")
                 })
            }
            if(target.className=="box1_menulist2"){
                $(".box1_menublock2").css("display","block")
               
                $(target).mouseleave(function(ev){
                    $(".box1_menublock2").css("display","none")
                }) 
                $(target).mouseenter(function(ev){
                    $(".box1_menublock2").css("display","block")
                 })
            }
            if(target.className=="box1_menulist3"){
                $(".box1_menublock3").css("display","block")
               
                $(target).mouseleave(function(ev){
                        $(".box1_menublock3").css("display","none")
                })
                 $(target).mouseenter(function(ev){
                    $(".box1_menublock3").css("display","block")
                 })
            }
            if(target.className=="box1_menulist4"){
                $(".box1_menublock4").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock4").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock4").css("display","block")
                 })
            }
            if(target.className=="box1_menulist5"){
                $(".box1_menublock5").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock5").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock5").css("display","block")
                 })
            }
            if(target.className=="box1_menulist6"){
                $(".box1_menublock6").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock6").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock6").css("display","block")
                 })
            }
            if(target.className=="box1_menulist7"){
                $(".box1_menublock7").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock7").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock7").css("display","block")
                 })
            }
            if(target.className=="box1_menulist8"){
                $(".box1_menublock8").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock8").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock8").css("display","block")
                 })
            }
            if(target.className=="box1_menulist9"){
                $(".box1_menublock9").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock9").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock9").css("display","block")
                 })
            }
            if(target.className=="box1_menulist10"){
                $(".box1_menublock10").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock10").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock10").css("display","block")
                 })
            }
            if(target.className=="box1_menulist11"){
                $(".box1_menublock11").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock11").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock11").css("display","block")
                 })
            }
            if(target.className=="box1_menulist12"){
                $(".box1_menublock12").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock12").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock12").css("display","block")
                 })
            }
            if(target.className=="box1_menulist13"){
                $(".box1_menublock13").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock13").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock13").css("display","block")
                 })
            }
            if(target.className=="box1_menulist14"){
                $(".box1_menublock14").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock14").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock14").css("display","block")
                 })
            }
            if(target.className=="box1_menulist15"){
                $(".box1_menublock15").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock15").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock15").css("display","block")
                 })
            }
            if(target.className=="box1_menulist16"){
                $(".box1_menublock16").css("display","block")
                $(target).mouseleave(function(ev){
                        $(".box1_menublock16").css("display","none")
                })
                $(target).mouseenter(function(ev){
                    $(".box1_menublock16").css("display","block")
                 })
            }
        })
       
        


        $(".box2_change").mouseenter(function(){
            $(this).find("div").css("display","block")
        })
        $(".box2_change").mouseleave(function(){
            $(this).find("div").css("display","none")
        })

        var current = 0;
        $(".box2_changebtn").on("mouseenter",function(){
            current = (current+90)%360;
            $("#box2_changeanother").css("transform","rotate3D(0,0,1,"+current+"deg)");
        })

        //box1menu的添加
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                   str+=`<li class="box1_menulist${i+1}"><span class="${arr[i].icon}"></span><a href="">${arr[i].title}</a></li>`
                    
                }

                $(".box1_menu").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })
        //box1tab选项卡标题添加的添加

        //list1
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[0].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list1title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list1content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock1>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list1content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[1].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list2title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list2content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock2>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                       
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list2content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[2].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list3title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list3content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock3>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list3content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[3].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list4title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list4content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock4>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list4content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[4].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list5title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list5content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock5>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list5content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[5].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list6title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list6content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock6>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list6content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[6].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list7title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list7content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock7>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list7content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[7].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list8title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list8content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock8>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list8content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[8].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list9title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list9content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock9>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                       
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list9content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
       
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[9].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list10title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list10content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock10>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list10content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[10].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list11title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list11content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock11>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list11content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[11].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list12title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list12content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock12>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list12content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[12].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list13title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list13content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock13>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                       
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list13content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[13].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list14title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list14content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock14>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list14content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[14].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list15title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list15content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock15>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                       
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list15content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })
        $.ajax({
            url:"./data/box1menu.json",
            success:function(arr){
                var str=``;
                var arr1=arr[15].child;
                var arr2
                var str1=``
                for(var i=0;i<arr1.length;i++){
                    str=$(`<tr>
                        <td class="box1_list16title${i+1} tdd">${arr1[i].title}</td>
                        <td class="box1_list16content${i+1} tdd"></td>
                    </tr>`)
                    str.appendTo($(".box1_menublock16>table"))
                    arr2=arr1[i].content
                    for(var k=0;k<arr2.length;k++){
                        
                        str1=$(`<a href="" class="a">${arr2[k].title}</a>`)
                        str1.appendTo($(str.find(`.box1_list16content${i+1}`)))
                    }
                }
            },
            error:function(error){
                console.log(console.error())
            }
        })




        //box3的json加载
        $.ajax({
            url:"./data/box3.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                   str+=` 
                        <li class="box3_content box3_content${i+1}" id="${30+i}">
                            <a href="./product.html?box12#${30+i}">
                                    <img src="${arr[i].img}" alt="">
                                    <p>${arr[i].intro}</p>
                                    <span>${arr[i].price}</span>
                            </a>
                        </li>`
                }
                $(".box3_bottom").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })

        //box6的json加载
        $.ajax({
            url:"./data/box6.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                   str+=` 
                    <li id="${46+i}">
                        <a href="./product.html?box12#${46+i}">
                            <img src="${arr[i].img}" alt="">
                            <p>${arr[i].intro}</p>
                            <span>${arr[i].price}</span>
                        </a>
                    </li>`
                }
                $(".box6_bottom").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })

        $.ajax({
            url:"./data/box7.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                   str+=` 
                    <li id="${54+i}">
                        <a href="./product.html?box12#${54+i}">
                            <img src="${arr[i].img}" alt="">
                            <p>${arr[i].intro}</p>
                            <span>${arr[i].price}</span>
                        </a>
                    </li>`
                }
                $(".box7_bottom").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })

        $.ajax({
            url:"./data/box9.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                   str+=` 
                    <li id="${62+i}">
                        <a href="./product.html?box12#${62+i}">
                            <img src="${arr[i].img}" alt="">
                            <p>${arr[i].intro}</p>
                            <span>${arr[i].price}</span>
                        </a>
                    </li>`
                }
                $(".box9_bottom").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })

        $.ajax({
            url:"./data/box10.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                   str+=` 
                    <li id="${70+i}">
                        <a href="./product.html?box12#${70+i}">
                            <img src="${arr[i].img}" alt="">
                            <p>${arr[i].intro}</p>
                            <span>${arr[i].price}</span>
                        </a>
                    </li>`
                }
                $(".box10_bottom").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })

        $.ajax({
            url:"./data/box12.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<30;i++){
                   str+=` 
                    <li>
                        <a href="./product.html?box12#${i}" id="box12${i}">
                            <img src="${arr[i].img}" alt="">
                            <p>${arr[i].intro}</p>
                            <span>${arr[i].price}</span>
                        </a>
                    </li>`
                }
                $("#box12>.bc").append(str)
            },
            error:function(error){
                console.log(console.error())
            }
        })


        

   }

   function rotation(){
        var timer=null;
        var now=0
        var aBtns=$(document).find(".box1_rotationbtn>li")
        var rotations=$(document).find(".box1_rotation>li")
        $(".box1_rotationbtn>li").click(function(){
            now=$(this).index()
            console.log(now)
            tab()
        })
        $(".box1_rotationbtn>li").mouseenter(function(){
            now=$(this).index()
            console.log(now)
            tab()
        })
        timer=setInterval(function(){
            now++
            tab()
        },2000)
        $(".box1_rotation").mouseenter(function(){
            clearInterval(timer)
        })
        $(".box1_rotationbtn").mouseenter(function(){
            clearInterval(timer)
        })
        $(".box1_rotation").mouseleave(function(){
            timer=setInterval(function(){
                now++
                tab()
            },2000)
        })
        function tab(){
            if(now>=6){
                now=0
            }
            switch(now){
                case 0:$("#box1").css("backgroundColor","#FF5757");
                break;
                case 1:$("#box1").css("backgroundColor","#E8E8E8");
                break;
                case 2:$("#box1").css("backgroundColor","#E8E8E8");
                break;
                case 3:$("#box1").css("backgroundColor","#7493ED");
                break;
                case 4:$("#box1").css("backgroundColor","#65969A");
                break;
                case 5:$("#box1").css("backgroundColor","#EBE5EC");
                break;
            }
            aBtns.removeClass("active").eq(now).addClass("active")
            rotations.removeClass("block").eq(now).addClass("block")
        }
   }



   function changeanother(){
        var current = 0;
        $(".box2_changebtn").on("click",function(){
            current = (current+359)%360;
            $(".box2_change").css("transform","rotate3D(0,1,0,"+current+"deg)");
        })
       
   }


   function box3rotation(){
        var timer=null;
        var now=0
        var aBtns=$(document).find(".box3_bottomrotation>li")
        
        var rotations=$(document).find(".box3_lunbo")
        $(".box3_bottomrotation>li").mouseenter(function(){
            now=$(this).index()
            tab()
        })
        timer=setInterval(function(){
            now++
            tab()
        },2000)
        $(".box3_bottomrotation").mouseenter(function(){
            clearInterval(timer)
        })
        $(".box3_bottomrotation>li").mouseenter(function(){
            clearInterval(timer)
        })
        $(".box3_bottomrotation").mouseleave(function(){
            timer=setInterval(function(){
                now++
                tab()
            },2000)
        })
        function tab(){
            if(now>=2){
                now=0
            }
            if(now==0){
                $(".box3_rotationtext1").html("精选好纸")
            }
            if(now==1){
                $(".box3_rotationtext1").html("奶商伸伸腰")
            }
            aBtns.removeClass("box3_active").eq(now).addClass("box3_active")
            rotations.removeClass("box3_block").eq(now).addClass("box3_block")
        }
   }

   //吸顶效果 加左边侧边栏的切换
   function imbition(){
        var oBox=document.getElementById("xiding")
        var goTop=document.getElementsByClassName("gotop_btn")
        var distance=document.body.scrollTop || document.documentElement.scrollTop
        
        window.onscroll=function(){
            var distance=document.body.scrollTop || document.documentElement.scrollTop
            if(distance>=1000){
                $("#xiding").css("height","50px")
            }else{
                $("#xiding").css("height","0px")
            }
            if(distance>=1000 && distance<=1750){
                $(".aside_list1").css("backgroundColor","green")
            }else{
                $(".aside_list1").css("backgroundColor","none")
            }
            if(distance>1750 && distance<=2500){
                $(".aside_list2").css("backgroundColor","red")
            }else{
                $(".aside_list2").css("backgroundColor","none")
            }
            if(distance>2500 && distance<=3150){
                $(".aside_list3").css("backgroundColor","pink")
            }else{
                $(".aside_list3").css("backgroundColor","none")
            }
            if(distance>3150 && distance<=3950){
                $(".aside_list4").css("backgroundColor","blue")
            }else{
                $(".aside_list4").css("backgroundColor","none")
            }
            if(distance>3950 && distance<=4600){
                $(".aside_list5").css("backgroundColor","green")
            }else{
                $(".aside_list5").css("backgroundColor","none")
            }
            if(distance>4600 && distance<=5300){
                $(".aside_list6").css("backgroundColor","pink")
            }else{
                $(".aside_list6").css("backgroundColor","none")
            }
            if(distance>5300){
                $(".aside_list7").css("backgroundColor","pink")
            }else{
                $(".aside_list7").css("backgroundColor","none")
            }
            var timer=null
            goTop.onclick=function(){
                clearInterval(timer)
                timer=setInterval(function(){
                    if(distance<=0){
                        clearInterval(timer)
                    }
                    distance-=10;
                    document.body.scrollTop = document.documentElement.scrollTop=distance
                },1)
            }
        }
   }



   return {
       downLoad,
       rotation,
       changeanother,
       box3rotation,
       imbition,
   }
})
