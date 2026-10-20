Karima Mursalimova
IT-2502


Part 1: Profile Object, Data Types & Arithmetic

Task 1. The Personal Info Object:

Created a `const` object named `userProfile` that stores different data types:
- `name` (string)
- `birthYear` (number)
- `isDeveloper` (boolean)
- `hobbies` (array)

The object is printed to the browser console.

<img width="444" height="203" alt="image" src="https://github.com/user-attachments/assets/f0502a5b-e83f-43e6-930c-57bf47e06d06" />

<img width="431" height="92" alt="image" src="https://github.com/user-attachments/assets/cd34bf8a-62b2-40a5-97d8-333c6c15c7b9" />

<img width="561" height="147" alt="image" src="https://github.com/user-attachments/assets/723611f2-18be-4400-89db-c6899098d68c" />

Task 2. Arithmetic Calculations:

Calculated the user's age dynamically using the current year and `birthYear`. 
Also calculated additional metrics: total months of life and the number of hobbies. 
The results are output both to the browser console and dynamically displayed on the page.

<img width="812" height="372" alt="image" src="https://github.com/user-attachments/assets/aed3a654-ccf9-4a9a-b281-783900a95981" />

<img width="414" height="170" alt="image" src="https://github.com/user-attachments/assets/53b92262-4681-448b-9ce6-aea255375dee" />

<img width="1366" height="378" alt="image" src="https://github.com/user-attachments/assets/d62d4c85-73a5-4e08-9b4d-56d47d99550b" />


Part 2. Form Input & Event Responses

Task 3. HTML Form Setup:

Created a simple HTML form containing:
- An input field for the username (`type="text"`, required).
- An input field for the birth year (`type="number"`, required).
- A submit button labeled "Create / Update Profile".

The form uses `<label>` tags for accessibility and `id` attributes for DOM manipulation.

<img width="587" height="244" alt="image" src="https://github.com/user-attachments/assets/beb07c28-b22b-4044-b093-76451f54052c" />

<img width="299" height="543" alt="image" src="https://github.com/user-attachments/assets/a6d41742-e65c-4154-b1b8-b6fcaccf6c0c" />

<img width="685" height="334" alt="image" src="https://github.com/user-attachments/assets/359347e3-45d9-49a9-a56b-6af7433a4af4" />


Task 4. Event Listener:

Refactoring note (Task 2 -> Task 4):

Initially, the arithmetic calculations (Task 2) were written directly in the global scope. 
However, when implementing the form submission (Task 4), we needed to recalculate the age dynamically every time the user updates their profile. 
Therefore, the calculation logic was refactored into a reusable function named `displayProfile()`. This function is now called once on page load and then again inside the form's `submit` event listener. This follows the DRY (Don't Repeat Yourself) principle and makes the code much cleaner.

<img width="744" height="424" alt="image" src="https://github.com/user-attachments/assets/29f1e8fe-181b-41a0-b953-2a3be6461270" />

Added an `addEventListener('submit', callback)` to the form. 
When submitted, the script:
1. Uses `event.preventDefault()` to stop the default page reload.
2. Captures input values using `.value`.
3. Converts the birth year string to a number using `Number()`.
4. Updates the `userProfile` object.
5. Calls the `displayProfile()` function to dynamically recalculate and update the UI.

<img width="622" height="322" alt="image" src="https://github.com/user-attachments/assets/73f7dc58-f5ca-41ac-9b68-765f7b505af5" />

<img width="628" height="326" alt="image" src="https://github.com/user-attachments/assets/541515f7-1f18-49cb-a6b1-102386766af7" />

<img width="515" height="43" alt="image" src="https://github.com/user-attachments/assets/9690704d-4e3d-4674-946c-cc35a5719fa6" />

<img width="535" height="148" alt="image" src="https://github.com/user-attachments/assets/39551a9f-5a10-45b7-814a-a93e4b1f3c05" />



Part 3: DOM List Manipulation 

Task 5. Creating & Removing Elements

Created an interactive list (`<ul>`) with dynamic element creation.
- **Add Item:** Uses `document.createElement("li")` and `appendChild()` to safely add new items based on user input. No `innerHTML` is used to prevent XSS vulnerabilities.
- **Remove Item:** Uses `lastElementChild.remove()` to delete the last item in the list.
- Includes validation: `.trim()` prevents adding empty items, and an alert is shown if the user tries to remove from an empty list.

<img width="475" height="474" alt="image" src="https://github.com/user-attachments/assets/99335cd0-e49c-4918-a44c-4819130006fc" />

<img width="361" height="172" alt="image" src="https://github.com/user-attachments/assets/36d05a03-b34f-4519-9145-e916a360019b" />

<img width="568" height="204" alt="image" src="https://github.com/user-attachments/assets/20d9f974-ecb0-4ed8-b06b-f9e4b525f21c" />

<img width="201" height="202" alt="image" src="https://github.com/user-attachments/assets/4f9af992-370a-4f65-93a1-0f269e1b9f64" />

<img width="448" height="146" alt="image" src="https://github.com/user-attachments/assets/5e35a2ee-84d3-4719-8c58-18ec6a083593" />

<img width="656" height="462" alt="image" src="https://github.com/user-attachments/assets/29ff24a1-722c-4b7a-b1f9-9e245453b889" />

<img width="410" height="145" alt="image" src="https://github.com/user-attachments/assets/1fbf283a-9424-49d5-a701-686b6da7692d" />

<img width="405" height="182" alt="image" src="https://github.com/user-attachments/assets/d130adbf-5a22-44ac-865c-d62cacb23323" />

<img width="409" height="135" alt="image" src="https://github.com/user-attachments/assets/928941fb-b504-4a21-b3f4-d69fb8fbc100" />

<img width="454" height="143" alt="image" src="https://github.com/user-attachments/assets/f62c5b25-ab4c-4eaa-b96f-c8ebef354a4b" />







