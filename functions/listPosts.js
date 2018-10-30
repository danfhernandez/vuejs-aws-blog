const AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient()

module.exports.index = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient()
    var params = {
        TableName: "aws-vuejs-blog-posts",
        ProjectionExpression: "type, posted, body"
    }
    docClient.scan(params, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data.Items);
        }
    })
}