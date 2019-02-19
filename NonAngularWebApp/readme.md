// This is an example of angular element implementation

Running the application

Open AngularElement.html file using chrome.

<------------------------------------------------------------------------------------------------------->

There are two files 

1.  my-element.js // compiled angular project file which expose a custom html element which can be integrated into any web application ( built on any technology)

    // Below are the syntax for using this custom element into any other web app
    <my-element type="<type of what functionality we want to render>" data="<required data to execute or render our own created element>"></my-element>


    <my-element type="simpleDiv" data="This is a simple message"></my-element>
    above line will render simple div with provided data. 

2.  AngularElement.html // Simple html file where our custom element is used
<------------------------------------------------------------------------------------------------------->

Our created custom element can render 3 kind of components on the basis of what type and data we are passing into it. 

1.) simple div 
    <my-element type="simpleDiv" data="This is a simple message"></my-element>

2.) graph 
    <my-element type="bargraph" data="data"></my-element>

    where data = { "labels": ["Facebook", "Google", "Sapient", "IBM"], "datasets": [{ "label": "Stock Price Data", "data": [110, 45, 67, 98], "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"], "borderColor": ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"], "borderWidth": 1 }] };

3>) Stock Order Form
    <my-element type="form"></my-element>

    No data property is required for 'Stock Order Form'