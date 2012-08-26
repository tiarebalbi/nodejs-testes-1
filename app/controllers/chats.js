var Chats = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {

  	var socket = require("socket.io-client");
  	var conexao = socket.connect("http://localhost:8080");
  	
    this.respond({params: params}); 
  };

};

exports.Chats = Chats;

