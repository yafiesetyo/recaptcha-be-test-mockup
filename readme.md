
# RECAPTCHA v3 TEST MOCKUP FOR BACKEND
### By Yafie
----------

##### How to test your recaptcha logic from your backend but you dont have any frontend ? I'm offer the free and effortless solution to you !
----------


##### INSTALL AND USE
**Dont forget to clone first !**

1. Add RECAPTCHA_site_key to :
   - public/index.js on **const SITE_KEY**, example : 
    ```javascript
    const SITE_KEY = "antosukawati123";
    ```
   - views/index.ejs on **render** url key value to your site key, example : 
    ```html
    <script src="https://www.google.com/recaptcha/api.js?render=antosukawati123"></script>
    ```
2. Add your **action** to public/index.js to **const ACTION**, example :
   ```javascript
   const ACTION = "login_admin";
   ```
3. On your terminal, run **npm install** or **npm i**
4. Then, run **npm run start** to start the server
5. After you run the server, open localhost:8000 then check on your page if there any **recaptcha verified** badge on the bottom-left of your screen. If there any error, please check your **recaptcha console**
6. Click the button then check your console to see your token
7. For further info, check https://developers.google.com/recaptcha/docs/v3


----------


