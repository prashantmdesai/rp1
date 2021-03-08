let patient_registration=function(){

    let patientRegistrationLink = element(by.id('nav-patient-register'));
    let FirstName = element(by.id('patientFirstName'));
    let LastName = element(by.id('patientLastName'));
    let patientAppeal = element(by.id('patientAppeal'));
    let patientAge = element(by.id('age'));
    let bloodUnits = element(by.css('[ng-reflect-name="bloodUnits"]'));
    let validTill = element(by.id('validTill'));
    let patientCellNumber = element(by.id('patientCellNumber'));
    let relativeFirstName = element(by.id('relativeFirstName'));
    let relativeLastName = element(by.id('relativeLastName'));
    let relativeCellNumber = element(by.id('relativeCellNumber'));
    let hcname = element(by.id('hcname'));
    let hcellnumber = element(by.id('hcellnumber'));
    let hname = element(by.id('hname'));
    let harea = element(by.id('harea'));
    let hcity = element(by.id('hcity'));
    let hpinCode = element(by.id('hpinCode'));
    let registerButton = element(by.className('btn btn-primary btn-lg'));
    let patientOtp = element(by.css('[placeholder = "Enter your OTP"]'));
    let verifyButton = element(by.className('btn btn-primary'));
    let patientBloodGroup = element(by.id('bloodGroup'));
    let patientGender = element(by.id('gender'));
    
    this.get =function(url){
        browser.get(url);
    }; 

    this.patientRegistrationLinkClick=function(){
        patientRegistrationLink.click();
        browser.sleep(1000);
    };

   this.patientFirstName=function(first_name){
       FirstName.sendKeys(first_name);
       browser.sleep(1000);
   };

   this.patientLastName=function(last_name){
    LastName.sendKeys(last_name);
    browser.sleep(1000);
   };

   this.patient_appeal=function(appeal){
    patientAppeal.sendKeys(appeal);
    browser.sleep(1000);
   };

   this.patient_age=function(age){
    patientAge.sendKeys(age);
    browser.sleep(1000);
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
  

   this.selectDropdownbyNum = function (element, optionNum) {
    if (optionNum) {
      var options = element.all(by.tagName('option'))
        .then(function (options) {
          options[optionNum].click();
        });
    }
    var arr=["Select Your Blood Group","A+","B+","AB+","O+","A-","B-","AB-","O-"];
    var arr1=["Select Gender","Male","Female","Other","Unspecified"];
    if(element=='patientBloodGroup')
   { 
       expect(patientBloodGroup.$('option:checked').getText()).toEqual(arr[optionNum]);
    }
   if(element=='patientGender')
    {
        expect(patientGender.$('option:checked').getText()).toEqual(arr1[optionNum]);
    }

    browser.sleep(1000);
  };



   this.blood_units=function(units){
    bloodUnits.clear();
    bloodUnits.sendKeys(units);
    browser.sleep(1000);
   };


   this.valid_till=function(validity_date){
    validTill.clear();
    validTill.sendKeys(validity_date);
    browser.sleep(1000);
   };

   this.patient_cellno=function(cell_number){
    patientCellNumber.clear();
    patientCellNumber.sendKeys(cell_number);
    browser.sleep(1000);
   };

   this.relative_firstName=function(rfirst_name){
    relativeFirstName.clear();
    relativeFirstName.sendKeys(rfirst_name);
    browser.sleep(1000);
   };

   this.relative_lastName=function(rlast_name){
    relativeLastName.clear();
    relativeLastName.sendKeys(rlast_name);
    browser.sleep(1000);
   };
   
   this.relative_cellNumber=function(rcell_number){
    relativeCellNumber.clear();
    relativeCellNumber.sendKeys(rcell_number);
    browser.sleep(1000);
   };
  
   this.hc_name=function(name){
    hcname.clear();
    hcname.sendKeys(name);
    browser.sleep(1000);
   };

   this.hc_cellNumber=function(hccell_number){
    hcellnumber.clear();
    hcellnumber.sendKeys(hccell_number);
    browser.sleep(1000);
   };

   this.hospital_name=function(hosName){
    hname.clear();
    hname.sendKeys(hosName);
    browser.sleep(1000);
   };

   this.hospital_area=function(hosArea){
    harea.clear();
    harea.sendKeys(hosArea);
    browser.sleep(1000);
   };

   this.hospital_city=function(hosCity){
    hcity.clear();
    hcity.sendKeys(hosCity);
    browser.sleep(1000);
   };

   this.hospital_pin=function(hosPin){
    hpinCode.clear();
    hpinCode.sendKeys(hosPin);
    browser.sleep(1000);
   };

   this.hospital_pin=function(hosPin){
    hpinCode.clear();
    hpinCode.sendKeys(hosPin);
    browser.sleep(1000);
   };

   this.register_button=function(){
    registerButton.click();
   };

   this.patient_otp=function(p_otp){
    patientOtp.clear(p_otp);
    patientOtp.sendKeys();
    browser.sleep(1000);
   };
   
   this.verify_button=function(p_otp){
    verifyButton.click();
   };
   
  


};
module.exports =new patient_registration();