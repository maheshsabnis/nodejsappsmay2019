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