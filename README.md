# Books-api
This an example of Rest framework api built using express.js.
This should be tested with POSTMAN.

# Installation
Assuming you are cloning repository in Desktop and you have Docker installed.
1)  `cd Desktop`
2) `git clone git@github.com:iammohit26/Books-api-docker.git`
3) `cd books-api-docker`
4) `docker-compose up -d`

# Endpoints and their Uses

 1. **GET**: </br>
    **URL** : localhost:3000/books</br>
    **Body**:  Not required</br>
    **Response**:  List of all the books present in the database</br>
	
 2. **POST**:</br>
    **URL**: localhost:3000/books</br>
    **Body**: In postman select body->choose raw option -> Json format.</br>
    Example data to be inserted in the body.</br>
                    ``` {
                        "name" : "name of the book",
                        "price" : "price of that book",
                        "author" : "author of that book"
                    }```</br>
    **Response**: </br>
    ```{ "_id": "unique id generated", name" : "name of the book", "price" : "price of that book", "author" : "author of that book" }```</br>
			
 3. **Patch** (requires book id):</br>
    **URL**: localhost:3000/books/{id}</br>
    **Body**: In postman select body->choose raw option -> Json format.</br>
    Example data to be inserted in the body.</br>
                    ``` {
                        "name" : "name of the book",
                        "price" : "price of that book",
                        "author" : "author of that book"
                    }```(All fields are required during updation too)</br>
						 
 4.  **GET**  (particular book):</br>
    **URL** : localhost:3000/books/{id}</br>
    **Body**:  Not required</br>
    **Response**:  information about that book</br>
 5. **DELETE** (requires book id):</br>
    **URL** : localhost:3000/books/{id}</br>
	**Body**:  Not required

	
