var React = require("react");

var Body = React.createClass({
  render: function() {
    return (

        <div className="container">    
            
            <div id="inputcontainer">
                        <form>
                            <label>Enter City 1</label>
                            <select type="text" id="city-input" name="city-input">
                                <option value="">
                                </option>
                            </select>

                            <label>Enter City 2</label>
                            <select type="text" id="city-input2" name="city-input2">
                                <option value="">
                                </option>
                            </select>

                            <button id="firstbutton"> Submit </button>
                        </form>
                            <button id="clearbutton"> Clear </button>
            </div>
                    
            <section className="second-w3ls">
                <div className="container-fluid">
                    <div className="col-lg-12 col-md-12 tab-w3layouts">
                        <section className="tabs">
                            <input id="tab-1" type="radio" name="radio-set" className="tab-selector-1" defaultChecked="true" />
                            <label htmlFor="tab-1" className="tab-label-1">Compare</label>
                            <input id="tab-2" type="radio" name="radio-set" className="tab-selector-2" />
                            <label htmlFor="tab-2" className="tab-label-2">Career</label>
                            <input id="tab-3" type="radio" name="radio-set" className="tab-selector-3" />
                            <label htmlFor="tab-3" className="tab-label-3">Residence</label>
                            <input id="tab-4" type="radio" name="radio-set" className="tab-selector-4" />
                            <label htmlFor="tab-4" className="tab-label-4">Preferences</label>
                            <div className="clear-shadow"></div>
                            <div className="content">
                                <div className="content-1">
                                    
                                    <h3>Compare Cities</h3>
                                    <button id="salaries" type="submit"> Salaries </button>
                                    <button id="general" type="submit"> Overall Ratings </button>
                                    <button id="rent" type="submit"> Average Prices </button>
                                    <button id="air" type="submit"> Pollution </button>
                                    <button id="crime" type="submit"> Crime </button>
                                    <button id="weather" type="submit"> Weather </button>
                                    <button id="traffic" type="submit"> Traffic </button>
                                    <br />
                                    <br />
                                    <p id="city-div"></p>
                                    <p id="city-div2"></p>
                                </div>
                                
                                <div className="content-2">
                                    
                                        <li>
                                            <h3 id="findJobs">Find Jobs</h3>
                                            <form>
                                                <h5 className="jobSearchFormTitles">With these words:</h5>
                                                <br />
                                                <input type="text" id="jobTitle" name="jobTitle" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <input type="text" id="jobTitle2" name="jobTitle2" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <br />
                                                <h5 className="jobSearchFormTitles">Of this job type:</h5>
                                                <br />
                                                <select type="text" id="jobType" name="jobType" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="all">All job types</option>
                                                    <option value="parttime">Part-time</option>
                                                    <option value="fulltime">Full-time</option>
                                                    <option value="internship">Internship</option>
                                                    <option value="contract">Contract</option>
                                                    <option value="temporary">Temporary</option>
                                                    <option value="commission">Commission</option>
                                                </select>
                                                <select type="text" id="jobType2" name="jobType2" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="all">All job types</option>
                                                    <option value="parttime">Part-time</option>
                                                    <option value="fulltime">Full-time</option>
                                                    <option value="internship">Internship</option>
                                                    <option value="contract">Contract</option>
                                                    <option value="temporary">Temporary</option>
                                                    <option value="commission">Commission</option>
                                                </select>
                                                <h5 className="jobSearchFormTitles">From these job sites:</h5>
                                                <br />
                                                <select type="text" id="jobSite" name="jobSite" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="">All web sites</option>
                                                    <option value="jobsite">Job boards only</option>
                                                    <option value="employer">Employer web sites only</option>
                                                </select>
                                                <select type="text" id="jobSite2" name="jobSite2" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="">All web sites</option>
                                                    <option value="jobsite">Job boards only</option>
                                                    <option value="employer">Employer web sites only</option>
                                                </select>
                                                <h5 className="jobSearchFormTitles">That pay this amount: (e.g. $50,000 or $40K-$90K)</h5>
                                                <br />
                                                <input type="text" id="jobSalary" name="jobSalary" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <input type="text" id="jobSalary2" name="jobSalary2" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <h5 className="jobSearchFormTitles">Within this distance of the city:</h5>
                                                <br />
                                                <select type="text" id="jobDistance" name="jobDistance" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            width: '173px',
                                            height: '26px'}}>
                                                    <option value="0">only within the city</option>
                                                    <option value="5">within 5 miles</option>
                                                    <option value="10">within 10 miles</option>
                                                    <option value="15">within 15 miles</option>
                                                    <option value="25">within 25 miles</option>
                                                    <option value="50">within 50 miles</option>
                                                    <option value="100">within 100 miles</option>
                                                </select>
                                                <select type="text" id="jobDistance2" name="jobDistance2" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            width: '173px',
                                            height: '26px'}}>
                                                    <option value="0">only within the city</option>
                                                    <option value="5">within 5 miles</option>
                                                    <option value="10">within 10 miles</option>
                                                    <option value="15">within 15 miles</option>
                                                    <option value="25">within 25 miles</option>
                                                    <option value="50">within 50 miles</option>
                                                    <option value="100">within 100 miles</option>
                                                </select>
                                                <button type="submit" value="submit" id="submit">Submit</button>
                                                <div id="search-results" style={{    
                                            position: 'relative',
                                            maxWidth: '47%',
                                            width: '380px',
                                            maxHeight: '50%',
                                            height: '100px',
                                            margin: '30px 20px 0px 0px',
                                            padding: '0px 0px 0px 0px',
                                            display: 'inline-block',
                                            zIndex: '1001',
                                            /*backgroundColor: #e7e7e7,*/
                                            opacity: 1}}></div>
                                                <div id="search-results2" style={{    
                                            position: 'relative',
                                            maxWidth: '43%',
                                            width: '380px',
                                            maxHeight: '50%',
                                            height: '100px',
                                            margin: '30px 0px 0px 0px',
                                            padding: '0px 0px 0px 0px',
                                            display: 'inline-block',
                                            zIndex: '1001',
                                            /*backgroundColor: #e7e7e7,*/
                                            opacity: 1}}></div>
                                            </form>
                                        </li>  
                                </div>

                                <div className="content-3">
                                    <h3>Real Estate Stuff</h3>
                                </div>
                                <div className="content-4">
                                    <h3>How important are the following city qualities to you?</h3>
                                    <h4 id="suggestedCity">Best Match: </h4>
                                    <p>Public Transportation
                                        <li>
                                            <select id="question1">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Mild Weather
                                        <li>
                                            <select id="question2">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Sports
                                        <li>
                                            <select id="question3">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Live Music
                                        <li>
                                            <select id="question4">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Outdoor Acitvity and Parks
                                        <li>
                                            <select id="question5">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Public Schools
                                        <li>
                                            <select id="question6">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Fitness and Health
                                        <li>
                                            <select id="question7">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Safety or Lack of Crime
                                        <li>
                                            <select id="question8">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Nightlife and Bars
                                        <li>
                                            <select id="question9">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Low Population Density
                                        <li>
                                            <select id="question10">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>

    );
  }
});

// Export the component back htmlFor use in other files
module.exports = Body;
