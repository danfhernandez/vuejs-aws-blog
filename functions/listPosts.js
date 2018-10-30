const AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient()

module.exports.index = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient()
    var params = {
        TableName: "aws-vuejs-blog-posts",
        ProjectionExpression: "#t, posted, body",
        ExpressionAttributeNames:{"#t": "type"}
    }
    console.log("starting dynamodb scan")
    docClient.scan(params, function(err, data){
        if(err){
            console.log("error with calling dynamo db")
            callback(err, null);
        }else{
            console.log("no error calling dynamo db calling callback with items")
            console.log(data.Items)
            callback(null, {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data.Items)
            })
            console.log("after call back success")
        }
    })
}