
  
let donorregistration= require('../pages/donor-registration-flow');


describe('rudhir website', function () {

    it('rudhir donor registration flow', function () {


       
        

       donorregistration.get('http://devrudh.s3-website.ap-south-1.amazonaws.com/');
        
       console.log("Clicking on Donar Registration Link");
       donorregistration.clickReg();
       browser.sleep(2000);

       console.log("Filling Donor First Name");
      donorregistration.firstname('DonorsFirstName');
      //donorregistration.firstname('DonorsFirstName');
       browser.sleep(2000);

       console.log("Filling Donor Last Name");
       donorregistration.lastname('DonorsLastName');
        browser.sleep(2000);

        console.log("Filling Donor Age");
        donorregistration.age('39');
        browser.sleep(2000);

        console.log("Selecting Donor Blood Group");
        let donorBloodGroup = element(by.name('bloodGroup'));

       donorregistration.selectDropdownbyNum(donorBloodGroup, 0);
       
        donorregistration.selectDropdownbyNum(donorBloodGroup, 1);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 2);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 3);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 4);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 5);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 6);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 7);
       
       donorregistration.selectDropdownbyNum(donorBloodGroup, 8);
       
      donorregistration.selectDropdownbyNum(donorBloodGroup, 4);
        browser.sleep(1000);



    console.log("Last Blood Donation ");
  donorregistration.lastdonationdate('09/11/2006');
    browser.sleep(2000);

    
   
    console.log("Selecting Donor Gender");
    let donorGender = element(by.name('gender'));

   donorregistration.selectDropdownbyNum(donorGender, 0);
   
    donorregistration.selectDropdownbyNum(donorGender, 1);
    
   donorregistration.selectDropdownbyNum(donorGender, 2);
   
   donorregistration.selectDropdownbyNum(donorGender, 3);
   
   donorregistration.selectDropdownbyNum(donorGender, 4);
   
   donorregistration.selectDropdownbyNum(donorGender, 2);
    browser.sleep(1000);

    console.log("Filling Emailid");
    donorregistration.email('testtest@yahoo.com');
    browser.sleep(2000);

    console.log("Filling donor Cell Number ");
   donorregistration.cellnum('9203423334');
  browser.sleep(2000);

  console.log("Filling Society Name");
 donorregistration.society('chitrahar');
  browser.sleep(2000);

  console.log("Filling Area Name");
  donorregistration.area('kothrud');
  browser.sleep(2000);

  console.log("Filling City Name");
 donorregistration.city('pune');
  browser.sleep(2000);

  console.log("Filling Pincode");
       donorregistration.pin(415523);
        browser.sleep(2000);

        console.log("Filling Office Building");
        donorregistration.office('pimpalwade');
        browser.sleep(2000);

        console.log("Filling Office Area");
       donorregistration.officearea('warje');
        browser.sleep(2000);

        console.log("Filling Office City");
        donorregistration.officeCity('pune');
         browser.sleep(2000);

         console.log("Filling Office PinCode");
         donorregistration.officepincode(415520);
          browser.sleep(2000);
 
         // console.log("Accepting Registration T&C Alert");
         
          console.log("Clicking on Registration Button");
          donorregistration.clickregbutton();
          browser.sleep(2000);

          console.log("Accepting Registration T&C Alert");
          browser.sleep(6000);
          donorregistration.closeAlert(true);
   
          browser.sleep(6000);
          donorregistration.closeAlert(true);
   
        //   console.log("Accepting Otp Alert");
        //   browser.sleep(6000);
        //  donorregistration.closeAlert(true);
   
        //  console.log("Filling Patient Otp Number ");
        //  donorregistration.donor_otp('123abc');
        
          console.log("Clicking on Verify");
           donorregistration.verify();
           browser.sleep(2000);
       

          console.log("Donor Registration Completed");

          browser.sleep(2000);

    }, 120000);


});