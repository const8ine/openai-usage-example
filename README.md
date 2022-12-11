# OpenAI API usage example
A simple usage example for OpenAI API. This is a middleware based on Node.js, Express and openai library.

```
npm i
```


```
npm run start
```

An app will run on port 8080

---

Before the launch you need to set API key to `OPENAI_API_KEY` environment variable. <br>

To generate an API key go to https://beta.openai.com/account/api-keys, click "Create new secret key" button and copy the token from the field.

## API

Base route: GET `/api` <br>
Query parameters: `q`: string **required**

### Example

**Request:** <br>
GET http://localhost:8080/api?q=%25ultimate%20question%20of%20life%2C%20the%20universe%2C%20and%20everything

**Response:**

```
{
  "answer": "42"
}
```
