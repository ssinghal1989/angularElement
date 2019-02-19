Angular Elements lets you package your Angular components as custom web elements, which are part of the web components set of web platform APIs. Web components are technologies to help create reusable, encapsulated elements. Right now, that includes the shadow DOM, HTML templates, HTML imports, and custom elements. The custom elements technology powers Angular Elements.

Custom elements are reusable, encapsulated HTML tags to use in web pages and web apps. They can be used in any framework or library that uses HTML. In short, you're able to create custom DOM elements that have their own functionality that the rest of the page doesn't need to know anything about.

// Step to creating angular elements

1. ng new <app-name>
2. npm i @angular/elements --save
3. npm i @webcomponents/custom-elements --save // web polyfils

    //import polyfils to polyfills.ts by adding below two lines

    import '@webcomponents/custom-elements/src/native-shim';
    import '@webcomponents/custom-elements/custom-elements.min';

4.  Create a component

5. Now we need to change the way of our application bootStraping. Do the below configuration in your app.module.ts file
    @NgModule({
        declarations: [<OurComponent>],
        imports: [BrowserModule],
        providers: [],
        entryComponents: [<OurComponent>] 
        // This is the change we need to do, it will set the entry component of our application
    })

    Next, we need to create the custom element. This can be done in a few different places, but we'll do it in a ngDoBootstrap function. You'll need to add Injector to the list of @angular/core imports, and you'll need to import createCustomElement from @angular/elements. Once that's done, add the ngDoBootstrap like this:

    export class AppModule {
        constructor(private injector: Injector) {}
        ngDoBootstrap() {
            const el = createCustomElement(MyelementComponent,  {injector: this.injector});
            customElements.define('my-element', el);
        }
    }


6. Now we need to package it up so that it can be used elsewhere with a script tag. This means we need to not only build    the application as we normally would, but concatenate all of the script files that the CLI produces into a single file.

    We will do it through node for that we will need two extra packages (concat AND fs-extra). Run below command.
        
    * npm install --save-dev concat fs-extra

    After that we will create a js called "build-script.js" file which combine all our scripts into a single file.

    Now add below script in package.json

    "build:elements": "ng build --prod --output-hashing none && node build-script.js"

    now run "npm run build:elements" in command line it will create the final script file on below location
        elements/my-element.js

7. Now our custom element is ready please refer to NonAngularWebApp/readme.md to chech how to use this custom element in non angular we application.

    