$(document).ready(function() {

  // Hide tabbed sections on page load
  $('#projectList').hide();
  $('#otherLinks').hide();
  $('#mobileAboutMe').hide();
  $('#mobileProjectList').hide();
  $('#mobileOtherLinks').hide();

  // Reaveal projecList element & hide other elements, with click on Project List tab
  $('#projectListTab').click(function() {
    $('#aboutMe').hide();
    $('#otherLinks').hide();
    $('#projectList').show();
    $('#aboutMeTab').removeClass('active');
    $('#otherLinksTab').removeClass('active');
    $('#projectListTab').addClass('active');
  });

  // Reaveal otherLinks element & hide other elements, with click on Other Links tab
  $('#otherLinksTab').click(function() {
    $('#aboutMe').hide();
    $('#projectList').hide();
    $('#otherLinks').show();
    $('#aboutMeTab').removeClass('active');
    $('#projectListTab').removeClass('active');
    $('#otherLinksTab').addClass('active');
  });


  // Reaveal aboutMe element & hide other elements, with click on About Me tab
  $('#aboutMeTab').click(function() {
    $('#otherLinks').hide();
    $('#projectList').hide();
    $('#aboutMe').show();
    $('#otherLinksTab').removeClass('active');
    $('#projectListTab').removeClass('active');
    $('#aboutMeTab').addClass('active');
  });


  // Controls for mobile buttons

  // Reveal aboutMe element 'Close' button,
  // and hide other buttons, with click on About Me button
  $('#mobileAboutClick').click(function(){
    $('#choiceButtons').hide()
    $('#mobileAboutMe').show();
  });

  // Hide About Me section and show Choice Buttons, when 'Close' button is clicked
  $('#closeMobileAbout').click(function(){
    $('#mobileAboutMe').hide();
    $('#choiceButtons').show();
  })

  // Reveal projectList element and 'Close' button,
  // and hide other buttons, with click on Projects button
  $('#mobileProjectsClick').click(function(){
    $('#choiceButtons').hide();
    $('#mobileProjectList').show();
  });

  // Hide Projecs section and show Choice Buttons, when 'Close' button is clicked
  $('#closeProjectListTop').click(function(){
    $('#mobileProjectList').hide();
    $('#choiceButtons').show();
  });
  $('#closeProjectListBottom').click(function(){
    $('#mobileProjectList').hide();
    $('#choiceButtons').show();
  });

  // Reveal otherLinks element and 'Close' button,
  // and hide other button, with click on Other Links button
  $('#mobileLinksClick').click(function() {
    $('#choiceButtons').hide();
    $('#mobileOtherLinks').show();
  });

  // Hide Other Links section and show Choice Buttons, when 'Close' button is clicked
  $('#closeOtherLinksTop').click(function(){
    $('#mobileOtherLinks').hide();
    $('#choiceButtons').show();
  });
  $('#closeOtherLinksBottom').click(function(){
    $('#mobileOtherLinks').hide();
    $('#choiceButtons').show();
  });

});