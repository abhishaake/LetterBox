function check(){
    console.log("test");
    window.alert("test success");

    const url = "http://localhost:4000/";
    const data = '{"operationName":null,"variables":{},"query":"{  users {   _id   firstName  email    lastName }}"}';

    // const data = '{"operationName":null,"variables":{},"query":"{\n  users {\n    _id\n    firstName\n    email\n    lastName\n  }\n}\n"}';
    const options = {
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        body: data,
        method: "POST"
    };

    // $.post(url,data,function(res,status){
    //     console.log(res + " " + status );
    // })

    $.ajax({
        url: url,
        type: "POST",
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        data: data,
        success: function(res){
            console.log(res);
        },
        error: function(res){
            console.log(res);
        }
    })

    // fetch(url,options).then(data=>{return data}).then(res=>{
    //     console.log(JSON.stringify(res));
    // }).catch(error=>console.log("ERROR--- " + error));
}