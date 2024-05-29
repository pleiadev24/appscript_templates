function createPresentation() {

  var presentation = SlidesApp.create('New Presentation');
  var presentationId = presentation.getId();
  

  var slides = SlidesApp.openById(presentationId);
  

  var slide = slides.getSlides()[0];
  var title = slide.insertTextBox('Cats');
  title.setText('Welcome to My Presentation');
  title.setFontSize(40);
  

  var subtitle = slide.insertTextBox('Cats are the cutest animals ');
  subtitle.setText('Subtitle Goes Here');
  subtitle.setFontSize(20);
  

  var newSlide = slides.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  var newTitle = newSlide.insertTextBox('Why cats are the best');
  newTitle.setText('Slide Title');
  newTitle.setFontSize(30);
 
  var bodyText = newSlide.insertTextBox('Cats are the best');
  bodyText.setText('cats are great companions');
  bodyText.setFontSize(16);
  
  Logger.log('Presentation created: ' + presentation.getUrl());
}

