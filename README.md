
# Polling API

API to create questions, add options to it and add votes to the options


## Features

- Create a question
- Add options to the question
- Add a vote to an option of question
- View a question with it’s options and the votes given to it
- Delete a question (A question can’t be deleted if one of it’s options has votes)
- Delete an option (An option can’t be deleted if it has even one vote given to it)




## Authors

- [@paragambekar](https://www.github.com/paragambekar)





## Run Locally

Clone the project

```bash
  git clone https://github.com/paragambekar/polling-api
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Documentation

- To create a question
            
     https://[your-domain-name]/api/v1/questions/create

    Method : POST

    Body : key : question
    value : [Your Question]


- To view a question 
        
    https://[your-domain-name]/api/v1/questions

    Method : GET

- Add option to a question

    https://[your-domain-name]/api/v1/options/[id-of-question-you-want-to-add-options-to]/create

    Method : POST

    Body : key : option
    value : [option-to-add]

- Add vote to an option

    https://[your-domain-name]/api/v1/options/[id-of-option-you-want-to-add-vote-to]/add_vote

    Method : GET

- Delete an option

    https://[your-domain-name]/api/v1/options/[id-of-option-you-want-to-add-delete-to]/delete

    Method : GET

- Delete a question

    https://[your-domain-name]/api/v1/options/[id-of-question-you-want-to-delete]/delete

    Method : GET








