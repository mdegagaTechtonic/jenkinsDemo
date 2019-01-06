//describe will group your tests together
//describe is a higher order function since it takes in a function
//allows for abstraction
describe('Demo',()=>{
  //TDD - tests drive the software dev
  //BDD - meant to eliminate issues that TDD might cause, will write more verbose tests so the tests are read more like a sentence and so also drives software dev
  //https://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/
  //is a test
  it('Assertion examples', ()=>{
    //assertion examples
    expect(true).to.equal(true)
    assert.typeOf('helloWorld','string','this is indeed a string')
  })

  it('Visiting a site', ()=>{
    //baseurl can be set - cypress commands such as request, and visit can use this argument
    cy.visit('')
  })

  it('Selecting elements on a page', ()=>{
    //**best practices - write selectors that are resilent to change specifically using data-cy in the html to signify that this attribute is only used for testing the html element. Not coupled to style or text which may change. We can target this selector for testing.
    //Selector Playground - Cypress will help determine a unique selector for the html element - demo this. Will also tell you how many elements match the selector.
    cy.get('[data-reactid="43"] > a').click()
    cy.get('#name').type('Hello World')
    cy.get('[data-reactid="168"]').should('be.visible')
    cy.get('#select').should($select => {
      const optionList = $select[0].childNodes
      console.log(optionList);
      optionList.forEach(option => {
        console.log(option.innerText)
      })
    })
  })
})





//pipline - are a suite of plugins in jenkins that support implementing and integrating CD piplines.
//CD - for every successful / working piece of code, the application is released to production
//create a jenkinsfile that will be in the project's repo root directory
//the jenkins file contains a description of the pipline
//there are two kinds of pipeline - declarative and scripted
//The agent directive, which is required, instructs Jenkins to allocate an executor and workspace for the Pipeline
//agent:The agent section specifies where the entire Pipeline, or a specific stage, will execute in the Jenkins environment depending on where the agent section is placed. The section must be defined at the top-level inside the pipeline block, but stage-level usage is optional.
//The stages directive, and steps directives are also required for a valid Declarative Pipeline as they instruct Jenkins what to execute and in which stage it should be executed.
