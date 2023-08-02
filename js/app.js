$(document).ready(function () {
  $(document).foundation(); // Initialize Foundation.js components

  /* ----------Index Page Starts Here---------------*/
  
  const formSubmitButton = $("#formSubmitBtn"); 
  const formResetButton = $("#formResetButton"); 
  const inputForm = $("#inputForm");

  let formValues = {
    fullNameValue: "",
    startDestinationValue: "",
    endDestinationValue: "",
    travelDateValue: "",
    travelTimeValue: "",
  };
  formSubmitButton.click(() => {
    /*Submit the form when the button is clicked*/
    inputForm.submit(); 
  });

  // this runs when the form is submitted
  inputForm.submit(function (event) {
    // changes the default behaviour of form submission
    // It doesn't reload the page when we click the submit btn
    event.preventDefault();

    //STORING DATA 
    // Getting the input values and store it into a variable
    formValues = {
      fullNameValue: $("#fullName").val(),
      startDestinationValue: $("#startDestination").val(),
      endDestinationValue: $("#endDestination").val(),
      travelDateValue: $("#travelDate").val(),
    };
    //Displaying Input Messages (Fade In/Out)
    inputForm.fadeOut(400, function () {
      $("#fullNameAns").text("Hi, " + formValues.fullNameValue);

      $("#destinationAns").text(
        "Your destination is: " + formValues.endDestinationValue
        );
      $("#startPointAns").text(
        "You will travel from: " + formValues.startDestinationValue
        );
      $("#dateAns").text(
        "Your date of travel is on: " + formValues.travelDateValue
        );

      $("#successMessage").fadeIn(400); 
    });
  });
  
  formResetButton.click(() => {
    $("#successMessage").fadeOut(400, function () {
      inputForm.fadeIn(400);
    });
  });

  const landingContent = $(".landing-main-left");
  landingContent.slideDown(2000);

  /*-------Index Page Ends Here--------------------------*/

  /*--------Service Page Starts Here--------------------------*/
  let showMoreContent = false;
  
  const viewMoreBtnService = $("#viewMoreBtnService"); 
  
  $("#viewMoreDetailedData").find("*").css("color", "black"); 


  viewMoreBtnService.click(function () {
    showMoreContent = !showMoreContent;
    /*Checking the condition for displaying the content*/
    if (showMoreContent==true) {
      /*Changing the button text*/
      viewMoreBtnService.text("View less");
      $("#viewMoreDetailedData").slideDown(400);
    } else {
      viewMoreBtnService.text("View More");
      $("#viewMoreDetailedData").slideUp(400);
    }
  });
  /*---------Service Page Ends Here-----------------*/

  /*-----------Fair Pass Page Starts Here ------------------*/
  
  const passesTableElement = $(".passes-table");
  passesTableElement.find("tr").hover(
    function () {
      //Changing color when hover to pink
      $(this).css("background-color", "pink"); 
    },
    function () {
      // After moving out mouse, go to original color
      $(this).css("background-color", "unset"); 
    }
    );
  //Getting reference to "Load you Presto"
  const loadBtnElement = $(".loadBtn"); 
  // Displaying a message on the screen
  loadBtnElement.click(function () {
    // Show the success message using slideDown animation and after 2 seconds slideout again
    $(".prestoLoadSuccessMessage").slideDown(1000).delay(2000).slideUp(1000);
  });

  /*----Fair Pass Page Ends Here--------------------------*/

  /*----------Lost and Fount Page Starts Here------------------------*/
  
  const logBtn = $("#logBtn"); 
  const claimBtn = $("#claimBtn"); 
  const claimForm = $("#claimForm"); 
  const logForm = $("#logForm"); 

  logBtn.click(() => {
    //Hiding claim form and fading in Log form
    claimForm.fadeOut(200, function () {
      logForm.fadeIn(400);
    });
  });

  claimBtn.click(() => {
    logForm.fadeOut(200, function () {
      claimForm.fadeIn(400);
    });
  });

  /*----------Lost and Fount Page Ends Here----------------------------*/

  /*----------Accessibility Page Starts Here--------------------------*/
  //Animation for Paragraph Part
  const accessibilityMainContainer = $(".accessibility-paragraph");
  accessibilityMainContainer.slideDown(2000);
  //Adding animation to the buttons
  const accessibilityButtons = $(".accessibility-main").find(".button"); 
  accessibilityButtons.css("transition", "0.5s ease"); 
  accessibilityButtons.hover(
    function () {
      //Increasing button size by 1.2 both horizontally and vertically
      $(this).css("transform", "scale(1.2)"); 
    },
    function () {
      $(this).css("transform", "scale(1)"); 
    }
    );
  /*------------Accessibility Page Ends Here--------------------------*/

  /*------------Customer Supporte Starts Here------------------------*/
  const contactMainContainer = $(".contact-main");
  contactMainContainer.fadeIn(3000);
  /* ---------Customer Supporte Ends Here--------------------------*/

  /*-------------------About Us Page Starts Here-----------*/
  const aboutUsMainContainer = $(".about-us-main");
  const aboutUsButtons = aboutUsMainContainer.find(".button-expand"); 
  aboutUsButtons.css("transition", "1s ease");
  aboutUsButtons.hover(
    function () {
      aboutUsButtons.find("p").slideDown(300); 
    },
    function () {
      aboutUsButtons.find("p").slideUp(300); 
    }
    );

  const aboutUsTitleDescription = aboutUsMainContainer.find(".about-us-desc"); 
  aboutUsTitleDescription.css("transition", "0.3s ease");
  aboutUsTitleDescription.hover(
    function () {
      $(this).css("color", "pink");
      $(this).css("transform", "scale(1.1)");
    },
    function () {
      $(this).css("color", "white");
      $(this).css("transform", "scale(1)");
    }
    );
  /*-------------------About Us Page Ends Here-----------*/

  /*---------------------------Error Page--------------------------*/
  const errorPageContainer = $(".error-page-main");
  errorPageContainer.fadeIn(4000); 

  const errorPageImage = errorPageContainer.find("img");

  errorPageImage.css("transition", "0.5s ease");
  errorPageImage.hover(
    function () {
      $(this).css("filter", "blur(0)");
    },
    function () {
      $(this).css("filter", "blur(5px)");
    }
    );
  /*----------------------Error Page Ends Here---------------------*/
});
