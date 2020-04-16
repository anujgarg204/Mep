import React, { Component } from 'react';

class Layout extends Component {
    state = { 
        url:""
     }

     onchangeHandler = (e) =>{
         this.setState({
             url:e.target.value
         })
     }

     onClickHandler = (e) => {
         e.preventDefault();
        //  console.log(this.state.url);
         console.log('Hello');
     }

    render() { 
        return ( 
            <div>
                <h2>Sample punchout tester</h2>
                <p>This test will put an OCI shop on trial. Upon entering all required data, we will issue an OCI submission to the shop. You then start shopping and at some point decide to post back the shopping cart. The Meplato Validator will then intercept your response and check the returned OCI for possible sources of errors and problems.

Before you start the test consider the following:

Add at least 2 but no more than 20 items to the shopping cart. The more items, the more confidence in the results. The less items, the faster the test.
Make sure you read the customer-specific documentation for the project. This test only checks general OCI rules. Customers may have more precise requirements.
The request will always be UTF-8 encoded.</p>
            <h1>URL: <input value={this.state.url} onChange={this.onchangeHandler.bind(this)}/></h1>
            <button onClick={this.onClickHandler}>Check it out</button>
            </div>
         );
    }
}
 


export default Layout;