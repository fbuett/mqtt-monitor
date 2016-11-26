var mqtt = require('mqtt');

var client = mqtt.connect({host: 'sensobox.io', port: 1883, protocolId: 'MQIsdp', protocolVersion: 3});

var i=0;

client.on('connect', function () {
	console.log("connected");
	client.subscribe('/sensor/#');
});

client.on('error', function (err) {
        console.log(err);
});

client.on('message', function (topic, message) {
  console.log("["+i+"] "+new Date()+" from "+topic.toString());
  var msg = JSON.parse(message);
  console.log(msg);
  ++i;
});
