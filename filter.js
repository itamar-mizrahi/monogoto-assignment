[
    {
        "id": "http-in-get",
        "type": "http in",
        "url": "/get-messages",
        "method": "get",
        "swaggerDoc": "",
        "x": 110,
        "y": 100,
        "wires": [
            ["function-filter-messages"]
        ]
    },
    {
        "id": "function-filter-messages",
        "type": "function",
        "name": "Filter messages by sender",
        "func": "let sender = msg.req.query.sender;\nlet filteredMessages = msg.messages.filter(message => message.sender === sender);\nmsg.payload = filteredMessages;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 100,
        "wires": [
            ["http-response"]
        ]
    },
    {
        "id": "http-response",
        "type": "http response",
        "statusCode": "",
        "headers": {},
        "x": 590,
        "y": 100,
        "wires": []
    }
]
