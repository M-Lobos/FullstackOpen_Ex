# New note in single-page application diagram

<p>Excersise 6 part 0. 
Create a diagram that represents the situation where the user creates a new note using the single-page version of the application.
</p>


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

        Note right of browser: Browser executes JavaScript to manage SPA behavior

        browser->>server: GET /data.json
        activate server
        server-->>browser: json data file for notes
        deactivate server

    browser-->>-user: displays a dinamyc page for the user with current notes

    Note right of user: if user interacts with the page, js will update it dinamically
    
    user->>+browser: User types a new note and clicks "Save"in https://studies.cs.helsinki.fi/exampleapp/spa.

        Note right of browser: JavaScript dynamically updates the page without reloading

        browser->>server: POST /new_note (User submits a new note)
        activate server
        server-->>browser: Success response
        deactivate server

        Note right of browser: JavaScript updates notes list locally without full reload

        browser->>server: GET /data.json (fetch latest notes if needed)
        activate server
        server-->>browser: Updated JSON with new note
        deactivate server

        Note right of browser: New note is dynamically displayed without refreshing the page
    
    browser-->>-user: displays a dinamyc page for the user with current notes
    Note right of user: notes can be displayed dinamically without reload the pageS
```

