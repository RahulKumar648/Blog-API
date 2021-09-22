Step 1:-First, you have to extract the zip file.
Step 2:-start node server write on terminal npm start
Setp 3:- Register with this url  POST(localhost:4000/api/auth/register)
		{
    			"username":"",
   			 "email":"",
  			  "Password":""
              }
	All fields are compulsory to fill while register
Setep 4:-Login rul  POST(localhost:4000/api/auth/login)
		{
    			"username":"",
    			"Password":""
}
Step 5:- create a blog url  POST(localhost:4000/api/posts)
		{
    			"username":"",
   			 "title":",
			category=””
   			 "desc":""
}
Step 5:- updatea blog url PUT(localhost:4000/api/posts/614a0e07146eeab19b7a469b)
		{
    			"username":"r",
   			 "title":"",
   			 "desc":""
}
Step 6:- delete a blog url  DELETE(localhost:4000/api/posts/614a0e07146eeab19b7a469b)
		{
    			"username":"",
   			 "title":"",
   			 "desc":""
}
Step 7:- get a blog url  get(localhost:4000/api/posts/614a0df160cb31c9c4f4e80d)
 
Step 8:- get all blog url  get(localhost:4000/api/posts)
		
Step 9:- get all blog of author url  get(localhost:4000/api/posts?user=authorname)
 
Step 10:- get all blog of author url  get(localhost:4000/api/posts?categoryr=categoryname)
		
 
 
 
 

