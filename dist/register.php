<?php
    header("Content-type:text/html;charset=utf-8");
    $username=$_POST['username'];
    $password=$_POST['password'];
    $repassword=$_POST['repassword'];

    $responseValue=array("code"=>0,"msg"=>"");

    if(!$username){
        $responseValue['code']=1;
        $responseValue['msg']="用户名不能为空";
        echo json_encode($responseValue);
        exit;
    }
    if(!$password){
        $responseValue['code']=2;
        $responseValue['msg']="密码不能为空";
        echo json_encode($responseValue);
        exit;
    }
    if(!$repassword || $repassword!=$password){
        $responseValue['code']=3;
        $responseValue['msg']="两次密码不一致";
        echo json_encode($responseValue);
        exit;
    }
   


    $link=mysql_connect("127.0.0.1","root","123456");
    if(!$link){
        echo "连接失败";
        exit;
    }
    mysql_set_charset("utf-8");

    mysql_select_db("index");

    $sql1="select * from tianmao where username='{$username}'";

    $res1=mysql_query($sql1);

    $row1=mysql_fetch_assoc($res1);

    if($row1){
        $responseValue['code']=4;
        $responseValue['msg']="用户名已存在";
        echo json_encode($responseValue);
        exit;
    }

    $sql2="insert into tianmao(username,password) values('{$username}','{$password}')";
    $res2=mysql_query($sql2);
    
    $responseValue['msg']="注册成功";
    echo json_encode($responseValue);

    mysql_close($link);
?>
