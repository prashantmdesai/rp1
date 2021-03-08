let patient_registration = require("../pages/patient_registration");
const { blood_units } = require("../pages/patient_registration");






describe('rudhir website', function () {

  it('rudhir patient registration', function () {

   

    


    console.log("Navigating to landing page");

    patient_registration.get('http://devrudh.s3-website.ap-south-1.amazonaws.com/');
    

    console.log("Clicking on Patient Registration Link");
    patient_registration.patientRegistrationLinkClick();
    

    console.log("Filling Patient First Name");
    patient_registration.patientFirstName('Neptune1');
    

    console.log("Filling Patient Last Name");
    patient_registration.patientLastName('Alien1');
    

    console.log("Filling Patient Appeal");
    patient_registration.patient_appeal('You guys are awesome');
   

    console.log("Filling Patient Age");
    patient_registration.patient_age('100');
   

    console.log("Selecting Patient Blood Group");
    let patientBloodGroup = element(by.id('bloodGroup'));

    patient_registration.selectDropdownbyNum(patientBloodGroup, 0);   

    patient_registration.selectDropdownbyNum(patientBloodGroup, 1);
    
    patient_registration.selectDropdownbyNum(patientBloodGroup, 2);   

    patient_registration.selectDropdownbyNum(patientBloodGroup, 3);   

    patient_registration.selectDropdownbyNum(patientBloodGroup, 4);
    
    patient_registration.selectDropdownbyNum(patientBloodGroup, 5);    

    patient_registration.selectDropdownbyNum(patientBloodGroup, 6);    

    patient_registration.selectDropdownbyNum(patientBloodGroup, 7);
    
    patient_registration.selectDropdownbyNum(patientBloodGroup, 8);    

    patient_registration.selectDropdownbyNum(patientBloodGroup, 4);
    

    console.log("Filling Units Required ");
    patient_registration.blood_units('2');
    


     console.log("Selecting Patient Gender");
    let patientGender = element(by.id('gender'));

    patient_registration.selectDropdownbyNum(patientGender, 0);
   
    patient_registration.selectDropdownbyNum(patientGender, 1);   

    patient_registration.selectDropdownbyNum(patientGender, 2);    

    patient_registration.selectDropdownbyNum(patientGender, 3);  

    patient_registration.selectDropdownbyNum(patientGender, 4);    

    patient_registration.selectDropdownbyNum(patientGender, 3);
    


    console.log("Filling Valid Till ");
    patient_registration.valid_till('12/11/2011');
    

    console.log("Filling Patient Cell Number ");
    patient_registration.patient_cellno('2890050789');
   

    console.log("Filling Relative First Name ");
    patient_registration.relative_firstName('Chanda');
    

    console.log("Filling Relative Last Name  ");
    patient_registration.relative_lastName('mama');
   

    console.log("Filling Relative Cell Number ");
    patient_registration.relative_cellNumber('2890090002');
   

    console.log("Filling Hospital Coordinator Name ");
    patient_registration.hc_name('Elon Musk');
    

    console.log("Filling Hospital Coordinator Cell Number ");
    patient_registration.hc_cellNumber('2893222325');
    

    console.log("Filling Hospital Name ");
    patient_registration.hospital_name('International Space Hospital');
    

    console.log("Filling Hospital Area/Locality ");   
    patient_registration.hospital_area('Banyan tree locality');
    

    console.log("Filling Hospital City ");
    patient_registration.hospital_city('Zebulon');
   

    console.log("Filling Hospital Pin Code");
    patient_registration.hospital_pin('920232');
   

    console.log("Clicking on Register");
    patient_registration.register_button();
   
    console.log("Accepting Otp Alert");
    browser.sleep(3000);
    patient_registration.closeAlert(true);

    console.log("Filling Patient Otp Number ");
    patient_registration.patient_otp('123abc');
   

    console.log("Clicking on Verify");
    patient_registration.verify_button();
    

    console.log("Patient Registration Completed");

    browser.sleep(1000);

  }, 130000);

});