
var parseBody=require("./parseBody");
module.exports= function (options,data,callback) {
    var http=require("http");

//���������������
    var request = http.request(options,function(res){
        parseBody(res, function (result) {
            callback(result);
        })
    })
    request.end(data);
}



