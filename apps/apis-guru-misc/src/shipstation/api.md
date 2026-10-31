<h1 id="shipstation">shipstation v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Polls is a simple API allowing consumers to view polls and vote in them.

Base URLs:

* <a href="https://polls.apiblueprint.org">https://polls.apiblueprint.org</a>

<h1 id="shipstation-default">Default</h1>

## List All Questions

<a id="opIdList All Questions"></a>

> Code samples

```bash
curl https://example.com/questions \
  -H 'Accept: application/json'
```

`GET /questions`

> Example responses

> 200 Response

```json
[
  {
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ],
    "published_at": "2015-08-05T08:40:51.620Z",
    "question": "Favourite programming language?"
  }
]
```

<h3 id="list-all-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a New Question

<a id="opIdCreate a New Question"></a>

> Code samples

```bash
curl https://example.com/questions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "choices": [
      "Swift",
      "Python",
      "Objective-C",
      "Ruby"
    ],
    "question": "Favourite programming language?"
  }'
```

`POST /questions`

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

> Body parameter

```json
{
  "choices": [
    "Swift",
    "Python",
    "Objective-C",
    "Ruby"
  ],
  "question": "Favourite programming language?"
}
```

<h3 id="create-a-new-question-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» choices|body|[string]|false|none|
|» question|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "choices": [
    {
      "choice": "Swift",
      "votes": 0
    },
    {
      "choice": "Python",
      "votes": 0
    },
    {
      "choice": "Objective-C",
      "votes": 0
    },
    {
      "choice": "Ruby",
      "votes": 0
    }
  ],
  "published_at": "2015-08-05T08:40:51.620Z",
  "question": "Favourite programming language?"
}
```

<h3 id="create-a-new-question-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Questions_Collection">Questions_Collection</h2>
<!-- backwards compatibility -->
<a id="schemaquestions_collection"></a>
<a id="schema_Questions_Collection"></a>
<a id="tocSquestions_collection"></a>
<a id="tocsquestions_collection"></a>

```json
null
```
