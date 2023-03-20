[
    {
        "id": "http-in",
        "type": "http in",
        "url": "/messages/language",
        "method": "post",
        "x": 140,
        "y": 350,
        "wires": [
            [
                "function-update-language",
                "http-response"
            ]
        ]
    },
    {
        "id": "function-update-language",
        "type": "function",
        "name": "Update language parameter",
        "func": "let newLanguage = msg.payload.language;\n\nif(translateLanguages.includes(newLanguage)) {\n    currentLanguage = newLanguage;\n    let translatedMessages = [];\n\n    for(let i = 0; i < messages.length; i++) {\n        let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${currentLanguage}&dt=t&q=${encodeURI(messages[i].content)}`;\n        let message = messages[i];\n        msg.messages = messages;\n        msg.sender = message.sender;\n        node.send({\n            url: url,\n            messages: messages,\n            sender: message.sender\n        });\n    }\n} else {\n    msg.payload = { error: 'Invalid language parameter' };\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 350,
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
        "y": 350,
        "wires": []
    }
]