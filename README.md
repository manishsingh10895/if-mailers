# Mailers for reuse

### Edit html files in /html folder
### edit styles in styles.css
### edit footer in /html/footer.html
### run npx gulp for build 


# How to use

### Commonjs 
> `const Mailer = require('if-mailers').Mailer`;

#### or

> `const Stringer = require('if-mailers').Stringer`;

### ES6
```javascript 
import IFMailers from 'if-mailers';
const Mailer = IFMailers.Mailer;
```     


#### or

 ```javascript 
import IFMailers from 'if-mailers'`;
const Stringer = IFMailers.Stringer;
 ```     

____

## Mailer class
    It gives the options of custimizing certain variables apart from the ones passed as parameter (recommended)

## Striger class
    It returns html string based on only the provided parameter


