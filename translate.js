[
    {
        "id": "http-in",
        "type": "http in",
        "url": "/messages/translate",
        "method": "get",
        "x": 140,
        "y": 450,
        "wires": [
            [
                "function-translate-messages",
                "http-response"
            ]
        ]
    },
    {
        "id": "function-translate-messages",
        "type": "function",
        "name": "Translate messages",
        "func": "let translatedMessages = [];\n\nfor(let i = 0; i < messages.length; i++) {\n    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${currentLanguage}&dt=t&q=${encodeURI(messages[i].content)}`;\n    let message = messages[i];\n    msg.messages = messages;\n    msg.sender = message.sender;\n    node.send({\n        url: url,\n        messages: messages,\n        sender: message.sender\n    });\n}\n\nmsg.payload = translatedMessages;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 450,
        "wires": [
            [
                "http-response"
            ]
        ]
    },
    {
        "id": "http-response",
        "type": "http response",
        "statusCode": "",
        "headers": {},
        "x": 680,
        "y": 450,
        "wires": []
    }
]
