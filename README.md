# monogoto-assignment

Explanation of the flow:

HTTP In Node: This node will receive the HTTP request for posting the message.
Function Node 1: This node will extract the sender name and content from the HTTP request.
Change Node 1: This node will add the extracted sender name and content to the existing messages array stored in the context.
Function Node 2: This node will return the list of all messages stored in the context.
HTTP Response Node 1: This node will send the list of messages as the response to the HTTP request.
HTTP In Node 2: This node will receive the HTTP request for filtering the messages by sender name.
Function Node 3: This node will extract the sender name parameter from the HTTP request.
Change Node 2: This node will set the sender name parameter as the current sender name filter in the context.
Function Node 4: This node will return the list of messages filtered by the current sender name filter.
HTTP Response Node 2: This node will send the filtered list of messages as the response to the HTTP request.
HTTP In Node 3: This node will receive the HTTP request for translating the messages.
Function Node 5: This node will extract the language parameter from the HTTP request.
Change Node 3: This node will set the language parameter as the current language in the context.
Function Node 6: This node will fetch the translation of all messages from the external translation API based on the current language in the context.
Function Node 7: This node will return the translated list of messages.
HTTP Response Node 3: This node will send the translated list of messages as the response to the HTTP request.
