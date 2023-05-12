<div align="center">

<h3 align="center"> Sellix API with React.js</h3>

  <p align="center">
    Using the Sellix API which also has built-in seamless back-end functionality, just link everything to your Sellix Account and it's that easy!
Our Frameworks are React.js and Bootstrap
  </p>
</div>

## A project made as an Assessment for my Diploma
### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

## Features

* Working Light/Dark Mode - saves preference to Local Storage for next time.
* Save a name for the user via Local Storage also
* Pull Data from your Sellix Store and Display it as you please
* Use Sellix's Back-End by using their 'Modal'.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Get a free API Key at [(https://developers.sellix.io/)](https://developers.sellix.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/damonwindsor97/Sellix-API-with-React.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `products.js`
   ```js
   const sellix = require("@sellix/node-sdk")("ENTER-YOUR-API-KEY-HERE ")
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Known Bugs

* Routes will stuff up if going to any page, from any page that is NOT the Home page.
* Request Form is not linked to anything (not really a bug)


### HTML, CSS, SCSS, JavaScript, React, Bootstrap

![game4you](https://user-images.githubusercontent.com/98252803/229354709-c5d194ba-97d2-48eb-9e6e-ace84de8f54d.jpg)
![image](https://user-images.githubusercontent.com/98252803/229685239-7c4f7415-2970-4e8a-ac82-e5add614d258.png)




[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
