  let NavAssessment = document.getElementById('NavAssessment');
  let NavAssignment = document.getElementById('NavAssignment');
  let MainAssessment = document.getElementById('MainAssessment');
  let SampleAssessment = document.getElementById('SampleAssessment');
  let AssessmentContent = document.getElementById('AssessmentContent');
  let AssignmentContent = document.getElementById('AssignmentContent');
  let BootstrapContent = document.getElementById('BootstrapContent');
  let JavaScriptContent = document.getElementById('JavaScriptContent');
  let JQueryContent = document.getElementById('JQueryContent');
  let ModernJsContent= document.getElementById('ModernJsContent');
  let AngularJsContent= document.getElementById('AngularJsContent');

  // NavAssessment assessment
  NavAssessment.addEventListener('click',()=>{
    AssessmentContent.style.display = 'block';
    AssignmentContent.style.display = 'none';
  });

  // NavAssignment assessment
  NavAssignment.addEventListener('click',()=>{
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'block';
  });

//MainAssessment
  document.getElementById('main').addEventListener('click', () => {
    MainAssessment.style.display = 'block';
    SampleAssessment.style.display = 'none';
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'none'
  });

//sampleassesment
  document.getElementById('sample').addEventListener('click', () => {
    SampleAssessment.style.display = 'block';
    MainAssessment.style.display = 'none';
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'none'
  });

//Bootstrap function
  document.getElementById('Bootstrap').addEventListener('click', () => {
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'none';
    BootstrapContent.style.display = 'block'
  });

//javascript function
  document.getElementById('JavaScript').addEventListener('click', () => {
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'none';
    JavaScriptContent.style.display = 'block'
  });

//jquery function
  document.getElementById('JQuery').addEventListener('click', () => {
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'none';
    JQueryContent.style.display = 'block'
  });

//modern Js function
  document.getElementById('Modern').addEventListener('click', () => {
    AssessmentContent.style.display = 'none';
    AssignmentContent.style.display = 'none';
    ModernJsContent.style.display = 'block'
  });

// assessmentBactBtn function
function assessmentBactBtn(){
  MainAssessment.style.display = 'none';  
  SampleAssessment.style.display = 'none';
  AssessmentContent.style.display = 'block'
  AssignmentContent.style.display = 'none'
}

// assignmentBackToBtn function
function assignmentBackToBtn(){
  SampleAssessment.style.display = 'none';
  AssessmentContent.style.display = 'none';
  AssignmentContent.style.display = 'block';
  BootstrapContent.style.display = 'none';
  JavaScriptContent.style.display = 'none'
  JQueryContent.style.display = 'none';
  ModernJsContent.style.display = 'none';
  AngularJsContent.style.display = 'none';
};
