let donorregistration= function(){
   
    //we will add all object locators and functions
    let donarRegistrationLink = element(by.xpath("//h6[contains(text(),'Donor Registration')]"));
    let donorFirstName = element(by.css('input[name="firstName"]'));
    let donorLastName = element(by.css('input[name="lastName"]'));
    let donorAge = element(by.css('select[name="age"]'));
    let lastDonation = element(by.name('lastDonationDate'));
   let donorEmailID = element(by.name('emailId'));
   let donorCellNumber = element(by.css('input[name="cellNumber"]'));
   let donarSocietyName = element(by.css('input[name="society"]'));
   let donarAreaName = element(by.css('input[name="area"]'));
   let donorBloodGroup = element(by.css('select[name="bloodGroup"]'));
   let donarCityName = element(by.css('input[name="city"]'));
   let donorGender = element(by.name('gender'));
    let donarPinCode = element(by.css('input[name="pin"]'));
   let donarOfficeBuilding = element(by.css('input[name="officeBuilding"]'));  
   let donarOfficeArea = element(by.css('input[name="officeArea"]'));
   let donarOfficeCity = element(by.css('input[name="officeCity"]'));
   let donarOfficePinCode = element(by.css('input[name="officePin"]'));
   let registerButton = element(by.className('btn btn-primary btn-lg'));
   let verifyButton = element(by.className('btn btn-primary'));
   //let donorOtp = element(by.css('[placeholder = "Enter your OTP"]'));
        



    this.get= function(url){
        browser.get(url);
         };

this.clickReg= function(){
    donarRegistrationLink.click();
};

this.firstname=function(name){
donorFirstName.sendKeys(name);
expect(name).toEqual('DonorsFirstName');//checking string
};

this.lastname=function(lname){
    donorLastName.sendKeys(lname);
    };

    this.age=function(age){
        donorAge.sendKeys(age);
        };

        this.selectDropdownbyNum = function (element, optionNum) {
            if (optionNum) {
              var options = element.all(by.tagName('option'))
                .then(function (options) {
                  options[optionNum].click();
                });
            }
            var arr=["Select Your Blood Group","A+","B+","AB+","O+","A-","B-","AB-","O-"];
            var arr1=["Select Gender","Male","Female","Other","Unspecified"];
            if(element=='donorBloodGroup')
           { 
               expect(donorBloodGroup.$('option:checked').getText()).toEqual(arr[optionNum]);
            }
           if(element=='donorGender')
            {
                expect(donorGender.$('option:checked').getText()).toEqual(arr1[optionNum]);
            }
        
            browser.sleep(1000);
          };
        
            
      
        this.lastdonationdate=function(date){
            lastDonation.clear();
            lastDonation.sendKeys(date)
        };
        this.donorsgender=function(gender){
            donorGender.sendKeys(gender)
        };

        this.email=function(email){
             donorEmailID.clear();
            donorEmailID.sendKeys(email)
        };
        this.cellnum=function(cell){
            donorCellNumber.clear();
           donorCellNumber.sendKeys(cell)
       };
       this.society= function(society)
       {
           donarSocietyName.sendKeys(society);
       };
this.area=function(area)
{
    donarAreaName.sendKeys(area);
};
this.city=function(city)
{
    donarCityName.sendKeys(city);
};
this.pin=function(pin)
{
    donarPinCode.sendKeys(pin);
};

this.office=function(office){
donarOfficeBuilding.sendKeys(office);
};


this.officearea=function(officearea){
    donarOfficeArea.sendKeys(officearea);
};
this.officeCity=function(officecity)
{
donarOfficeCity.sendKeys(officecity);
};

this.officepincode=function(officepin)
{
    donarOfficePinCode.sendKeys(officepin);
};
this.closeAlert = async function (acceptAlert) {
    try {
      let otpAlert = await browser.switchTo().alert();
      if (acceptAlert) {
        return otpAlert.accept();
      }

      return otpAlert.dismiss();
    } catch (e) { console.log("Exception caught" + e); }
  };

//   this.donor_otp=function(d_otp){
//     donorOtp.clear(d_otp);
//     donorOtp.sendKeys(d_otp);
//     browser.sleep(1000);
//    };

this.clickregbutton= function(){
    registerButton.click();
};

   
this.verify= function(){
    verifyButton.click();
};









































};  
    module.exports= new donorregistration();//this 