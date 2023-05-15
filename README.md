# Password Generator
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Description:

- This app generates passwords.

- There should be a 'Generate Password' button which the user can click to show a new password using all letters and different characters.

- By default, the password generated should use mixed cases (both lowercase and uppercase).

Create a password generator WebApp with the following instructions:

1. Don't change `index.html`, work in `js/index.js`

2. Use the constant "charset" in your function (move it there). It contains all characters to use.

```javascript
const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_';
```

3. Your function should have 2 arguments:

   - length (Number) The length of the password
   - mixedCase (Boolean) Whether or not to use mixed cases (lowercase + uppercase)

4. If the second argument is true, use uppercase for every third character.

5. Use the function `getRandomInt()` to generate random numbers where you need them.

6. Create a `form` element and add an **input** `id="length"` field inside it to define the length of the password the default value is "*20*".

7. Add a **checkbox** `id="mixedCases"` in the form to define if the password should use mixed cases the default value is `true` (mixed cases).

8. Register an *submit* form event for the *form* to generate a new password.

9. Update the generated password inside of the **div** `id="output"` element.

10. Generate the first password as soon as the page is loaded, using a default length of 20 .

Examples for generated passwords: - 876FocMkcCv98teXc(Ov - %lfXcrLt-#ke3r6R5§-? - Nd1Z\$yRx

> Hint: Refer to the representation below, for an idea of what your result should look like.

![demo](demo.gif)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Generate Password

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Valid password is generated when page loads |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Generated password is 20 characters long |

### New Password on submit

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | When form is submitted, a new password is generated |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Generated password has length defined by user |

### Cases

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | If "Use mixed cases" is not checked, the generated password should be lowercase |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-PasswordGenerator)


[//]: # (autograding info end)