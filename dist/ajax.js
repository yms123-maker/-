function $ajax({type="get",url,data,success,error}){
    var xhr=null
    try {
        xhr=new XMLHttpRequest();
    } catch (error) {
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(type==="get" && data){
        url+="?"+querystring(data)
    }
    xhr.open(type,url,true)


    if(type==="get"){
        xhr.send();
    }else{
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(querystring(data));
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                success&&success(xhr.responseText);
            }else{
                error&&error("Error"+xhr.status)
            }
        }
    }
}
function querystring(obj){
    if(!obj){
        return "";
    }
    var str=``;
    for(var attr in obj){
        str+=`${attr}=${obj[attr]}&`;
    }
    return str.substring(0,str.length-1);
}

export default $ajax;