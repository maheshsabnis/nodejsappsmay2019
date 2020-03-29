# Node.js
https://www.nodejs.org
#=================================================================================
Programming With Node.js
1. Modules
   1. Autonomous Objects that has
      1. Properties
      2. Functions
   2. Help to implement multi-layer server-side JavaScript App targeted to Node
   3. Standard Modules
      1. Installed on Dev. Machine along with Node.js
         1. http/https/http2
         2. fs
         3. path
         4. and so on...
   4. Custom Modules
      1. Created by Developer as per the need
   5. Standard External Modules
      1. Community Provided Utilities targeted to Node.js
      2. https://www.npmjs.com
      3. http-server, express, koa, morgan, body-parser, cors, etc....
2. Node Uses
   1. The 'npm' utility, uses the node.js runtime feature for installing and provided package dependencies to the application
   2. The Node.js runtime to execute and process the Node.js based application. These apps may not use node.js standard modules directly.
   3. Node.js Web Hosting app aka Pure Node.js applications. This provides Server-Side execution 
3. REST APIs    
   1. Using Node.js for Line-of-Business (LOB) integration services to connect to homogeneous or hetro-geneous applcaitons 
4. External Service Communication
   1. Use Node.js as an interface to access external REST APIs in the current apps.
5. Security
   1. Using Tokens to Secure apps.
#=================================================================================
Node.js Programming
1. The 'require()' object
   1. Load and cache the module for the current application
      1. e.g.
         1. var obj = require('<MODULE>')
2. Node.js web server
   1. The 'http' module
      1. The createServer(HttpListener) method
         1. The HttpListener is Request and Response Object
      2. The listen() method to start listening on port
   2. Standard Http Server Modules
      1. http-server
      2. lite-server
      3. Express
      4. Koa
3. Node.js File IO
   1. The 'fs' module
      1. USed for Performing IO Operations for Node.js apps
         1. Read-write files and Directories
            1. Sync methods
               1. ReadFileSync() / WriteFileSync()
            2. Async Methods
               1. ReadFile() / WriteFile()
4. Standard and Custom Modules
   1. Custom Modules
      1. Self-Behavioral JavaScript Objects with logic and exportable functions.
         1. module.export = {...};
            1. JSON based object that contains function to export
         2. exports function func(){....}
            1. The 'exports' keyword will be used to export function object as module.

#=======================================================================================================================
Node + Express App
Use the 'nodemon' package to contineously run the app
1. This is The Node Monitor package
   1. npm install -g nodemon
The Command is as follows
npm install --save-dev express mongoose body-parser cors

1. express --> Node.js MVC Web Application Framework
2. mongoose --> Object-to-Document Mapper (ODM) for MongoDB
3. body-parser --> The Http Post and Put Message Formatter for Express REST APIs to format the Http Request Body Data in the format expected by Express REST APIs
   1. json()
      1. The JSON data
   2. urlEncoded()   
      1. The Data passed through the Http Url Encoded Format
         1. E.g. http://Server/api/url?key1=value1&key2=valu2...
4. cors
   1. Cross-Origin-Resource-Sharing
   2. Configure the Request to be processed by Express REST APIs based on
      1. Origin
         1. The client Domain address
      2. Method
         1. Get/Post/Put/Delete aka HTTP methods
      3. Header 
         1. Http Headers
            1. AUTHORIZATION, etc.
5. Express Methods
   1. Default Constructor to provide an instance of Express
      1. var obj = express();
   2. Middleware Configuration Method
      1. The 'use()' method, e.g. obj.use();
      2. This is used to configure
         1. cors()
         2. bodyParser()
         3. router
         4. ...and so on....
   3. API Methods
      1. get(p1,p2)
      2. post(p1,p2)
      3. put(p1,p2)
      4. delete(p1,p2)
         1. p1 is the string URI for the REST API Endpoint
         2. p2 is the 'RequestHandler' callback function
            1. This has Request and Response objects as parameter
               1. Request object allows to
                  1. Read the URI
                  2. Read URL parameters using 'params' property
                  3. Read Request body using 'body' property   
                     1. This is used in Post and Put Operations
                     2. The 'body' is the Object that is formatted using 'Content-Type' from client. (Npte: The express must use appropriate middleware to parse the body)
                  4. The 'headers' property
                     1. This is is used to parse headers for
                        1. AUTHOPRIZATION
                        2. VERSOIN
                        3. Any other Custom Headers  
      5. express.static()
         1. This method is used to set the static file resources (e.g. JavaScript, Css files, etc.) in Express Host

#=================================================================================
NoSQL Database
1. 27017 port
2. Database
   1. Collections
      1. Document
   2. Mongo Compass
      1. JDK
   3. Mongo CLI
      1. mongod --> Command to start the database service
      2. mongo --> command to start the Mongo CLI for 
         1. Creating database
         2. Creating collections
      3. The 'use <database-name>' command
         1. Create database if not present else open it and return the 'db' object
      4. The 'db' object that represent the current open database
         1. db.<collection>.find()/.insert()/.findOne()/.update()/.delete()

#================================================================================
Using Mongoose Driver
1. Connect to MongoDB database instance using  following uri  
   1. mongodb://<Server>/<Database>
      1. Default to 27017
   2. if the port is change
      1. mongodb://<Server>:<port>/<Database>
2. Mongoose Methods
   1. connect() --> Comnnects to Mongo using Connection String Uri
   2. Schema() --> Used to define Schema for the collection
      1. schema({K:Type})
   3. model() --> Map the schema with the collection in Database, if the collection is not present then it will be created.
      1. Returns the mongo collection object for query
         1. .create()
         2. .find()
         3. .findOne()
         4. .update()
         5. .findAndUpdate()
         6. .findAndDelete() 
      2. The 'promise' property of mongoose object must be set to globale promise
         1. <MongooseObject>.promise = global.promise;

#=======================================================================================================================
Node.js Security
1. Baisc Authentication
   1. Intercept the header
   2. Read the Authorization Key
   3. if found then read its schema (Basic)
      1. Varify the credentials by decrypting crdentials (if required)
      2. Check if the UserName match with Password
         1. if yes then process request further 
         2. else UnAuthorized Error
   4. If username not found then 
      1. Generate Not FOund Error Response
#=================================================================================

Node.js Promises
1. q and bluebird libraries
   1. defer() object
      1. The Promise is under execution
      2. resolve()
         1. The promise is successful
      3. rejected() 
         1. The promise is failed
2. All Express callbacks must be bundled inside the promise
3. All heavy load async operations must be bundled in promise explicitely
   1. function longRunningOperations() {  return new Promise(){.....}}
   2. var promise = longRunningOperations();
      1. promise.then(successCallback, errorCallback).catch(errorCallback).complete(callBack for Promise to close its subscription);
4. npm install --save-dev q or npm install --save-dev bluebird
   1. q.defer(); q.reject(), q.resolve()








