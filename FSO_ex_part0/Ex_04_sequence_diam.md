# New note sequence diagram 
<p> Excersise 4 part 0. 
Create a similar diagram that describes the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by typing something in the text field and clicking the Save button. </p>
<br>

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server
    
    user->>+browser: User enters https://studies.cs.helsinki.fi/exampleapp/notes
    activate browser

        browser->>server: GET /notes
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET /main.css
        activate server
        server-->>browser: CSS file
        deactivate server

        browser->>server: GET /main.js
        activate server
        server-->>browser: JavaScript file
        deactivate server
    
        Note right of browser: Browser executes JavaScript to fetch existing notes

        browser->>server: GET /data.json
        activate server
        server-->>browser: json data file for notes
        deactivate server

        Note right of browser: Browser processes JSON and renders existing notes

    browser-->>-user: Displays current notes

    Note right of user: Page with current notes is rendered

    user->>+browser: User types a new note and clicks "Save"
   
        browser->>server: POST /new_note with user input
        activate server
            Note right of browser: Browser sends user input to "new_note" endpoint
        server-->>browser: Response received (page reload may occur)
        deactivate server

        Note right of browser: Page reload triggers new requests:

        browser->>server: GET /notes (reload)
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET /main.css (cached if not disabled)
        activate server
        server-->>browser: CSS file (may load from cache)
        deactivate server

        browser->>server: GET /main.js (cached if not disabled)
        activate server
        server-->>browser: JavaScript file (may load from cache)
        deactivate server
    
        browser->>server: GET /data.json
        activate server
        server-->>browser: Updated JSON with new note
        deactivate server

        Note right of browser: Browser updates notes array and renders new note

    browser-->>-user: Displays the new note at the end of the list
    
    Note right of user: Page now includes the new note
```
