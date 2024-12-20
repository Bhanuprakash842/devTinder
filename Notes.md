### 21.Data Sanitation and Schema Validation 

Mongoose consists of the 
- required keyword which means that without entering that field then we will not insert that document into the database.
- unique keyword is used to keep the unique emailId in the database, when we want to enter the same then it gives duplicate key error.
- default keyword is used whenever we want to add default value to the user and we can also add the default photoUrl
- lowercase is used to keep the user entered value into lowercase.
- When the user enters the email id with spaces in front and back we can add *trim* to remove the widespaces.
- minLength is used to give the minimum length to firstName .
- min is used to user enter the min value .
- We can create a custom validation function to validate our required validations.
- validate(value){
    if(!["male","female","Others"].includes(value)){
        throw new Error("Gender data is not valid");
    }
}
-  validate  function runs on only the documents which are being added as new but not on the existing data updation So we should make validation true . In patch API which we have written , then the findByIdAndUpdate contains options runValidators:true

- When we use timeStamps : true when the creation of Schema ,then mongoose will store the date and time of creation.

- We dont want the user to change the emailId because it is the changing of all the identity.So we have to put a API level validation.

- API level validation can be done by writing the logic in the patch API. So we can allow the user to update only the allowed keys of us.

- When the user is giving the emialId same as the name and without @gmail.com . We should validate it by using the external library known as validator in npm
- validator can be used to validate the email,password.

### Encrypting Passwords
- The password which is to be stored into the database should not be seen by anyone.
- the password should be stored in a hash format in the database.
- As our signup should be very perfect as it is entry point => We cannot write req.body.
- So first thing should be the validation of data -> Encrypt the password.
- So we will create a helper/utility function for the logic of the validation of data in utils folder as validation.js
- npm bcrypt js library is used to encrypt the password of the user into the hash format
- We need to create a login api to authenticate the users who have signed up and we will use the bcrypt.compare function to compare the password and the hash password and User.findOne() in order to find the emailId in the DB.