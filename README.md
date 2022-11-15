# TPA-5

# Register 


| **Attribut** | **Tipe Data** | **Deskripsi** |
| ----------- | ----------- | :---------: 
| username | String | Nama akun dan autentifikasi pengguna |
| Password | String | autentifikasi pengguna |
| Email | String | Data diri pengguna | 

- Mentod = Post
- Endpoint = auth/register
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  
      - Body 
      
      ![register body](https://user-images.githubusercontent.com/80299731/201856318-0c72938a-9ffb-400a-af05-a0b1974d0544.JPG)
      
      - Responses
      
      ![register](https://user-images.githubusercontent.com/80299731/201856549-3c12110e-d472-4c12-8bd1-3db00d2d1ae5.JPG)

 &nbsp;
 
# Login

| **Attribut** | **Tipe Data** | **Deskripsi** |
| ----------- | ----------- | :---------: 
| username | String | Nama akun dan autentifikasi pengguna |
| Password | String | autentifikasi pengguna |

- Mentod = Post
- Endpoint = auth/login
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  
      - Body 
      
      ![login body](https://user-images.githubusercontent.com/80299731/201857494-0c30754a-3161-49ae-b48a-4c74f5cd3d67.JPG)

      - Responses
      
      ![login reponses](https://user-images.githubusercontent.com/80299731/201857574-9b0a96d2-6a66-4836-9fc2-5b5fdfe39726.JPG)
   
    &nbsp;
    
# Todo
## Create Todo

| **Attribut** | **Tipe Data** | **Deskripsi** |
| ----------- | ----------- | :---------: 
| Todo | String | Judul todo |
| Detail | String | keterangan |

- Mentod = Post
- Endpoint = todo/createTodo
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  - Authorization : bearer (JWT)
  
      - Body 
      
      ![crete todo body](https://user-images.githubusercontent.com/80299731/201858276-91bfc68f-3c08-457e-9561-e2ba403a3692.JPG)

      
      - Responses
      
      ![crete todo responses](https://user-images.githubusercontent.com/80299731/201858309-7ed2c086-cacf-4690-8e76-9847d893003c.JPG)

&nbsp;

## Get All Todo

- Mentod = Get
- Endpoint = todo/getAllTodo
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  - Authorization : bearer (JWT)
  
      - Body 
      
      ![get ll](https://user-images.githubusercontent.com/80299731/201858969-a68660b5-f93d-4d72-8bfd-563d7fee2ec9.JPG)

      &nbsp;
      
## Get Detail Todo

- Mentod = Get
- Endpoint = todo/getDetailTodo?idTodo=637317820abb719bdc45353a
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  - Authorization : bearer (JWT)
  
      - Responses
      
      ![detil todo](https://user-images.githubusercontent.com/80299731/201859487-3c3822ea-9c0c-4a59-9244-2a0794d15cb0.JPG)

&nbsp;

## Update Todo

- Mentod = Post
- Endpoint = todo/updateTodo?idTodo=637317820abb719bdc45353a
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json

    - Body
    
    ![updte bodey](https://user-images.githubusercontent.com/80299731/201860037-c89fe7a3-1908-4592-b5f0-edaf27317e9d.JPG)
    
    - Responses
    
    ![upte responses](https://user-images.githubusercontent.com/80299731/201860078-02e47520-7b7a-4c0c-93c7-2f6aa58e163b.JPG)

&nbsp;

## Delete Todo

- Mentod = Delete
- Endpoint = todo/deleteTodo?idTodo=637317820abb719bdc45353a
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  - Authorization : bearer (JWT)
  
      - Responses
      
      ![delete](https://user-images.githubusercontent.com/80299731/201860393-19331c78-8114-415b-9a5a-067cc84724fd.JPG)

&nbsp;

## Delete All Todo

- Mentod = Delete
- Endpoint = todo/deleteAllTodo
- Header 
  - Cotent-type : Application/json
  - Accept : Application/json
  - Authorization : bearer (JWT)
  
      - Responses
      
      ![delete ll todo](https://user-images.githubusercontent.com/80299731/201860612-af26cf9f-bb13-40e3-bff6-df86ca77de7d.JPG)

