# Single-page application diagram  
<p> Excersise 5 part 0. 
Create a diagram that describes the situation where the user accesses the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa. </p>
<br>

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>+browser: User enters to https://studies.cs.helsinki.fi/exampleapp/spa.
    activate browser

        browser->>server: GET /notes (initial load)
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

        Note right of browser: JavaScript manages SPA behavior and UI rendering

        browser->>server: GET /data.json
        activate server
        server-->>browser: json data file for notes
        deactivate server
    
    browser-->>-user: displays a dinamyc page for the user with current notes

    Note right of user: if user interacts with the page, js will update it dinamically

```
