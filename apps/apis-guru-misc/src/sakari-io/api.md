<h1 id="sakari">Sakari v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction

Welcome to the documentation for the Sakari Messaging REST API. 

Sakari provides an advanced platform to drive large scale customized SMS communication

REST is a web-service protocol that lends itself to rapid development by using everyday HTTP and JSON technology.

To find out more about our product offering, please visit [https://sakari.io](https://sakari.io).

# Quickstart

For your convenience we have created a quickstart guide to get you up and running in 5 minutes. 

[https://sakari.io/blog/sakari-api-quickstart](https://sakari.io/blog/sakari-api-quickstart)

# PostMan Collection

We've created a simple set of examples using [PostMan](https://www.getpostman.com/) Simply click below to import these. You will need to setup three environment variables in PostMan - AccountId, ClientId and ClientSecret. Check out our PostMan blog post for more information

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d616e273edc916a7a6eb)

# Finding your client id, client secret and account id

To authenticate against the API's you will need three key pieces of data
 - client id
 - client secret
 - account id

To retrieve these, simply login into [https://hub.sakari.io](https://hub.sakari.io) and click on the "cog" in the top right corner. In the popup dialog at the bottom you should see your API credentials and account id. If these are not visible you will need to click on "Request Credentials"

# Versioning

With any breaking changes we will introduce a new version of the API. The latest version is v1.

The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break.

# Testing

There are numerous tools available for testing the API's. We will include examples using curl and the client SDKs that we have created. If you would like to see an SDK in a language not currently available, please let us know.

# Throttling / Limits

Our API's have been specifically designed to support bulk messaging in a single API call. We therefore impose limits on the frequency of calling the APIs to prevent abuse or runaway processes. If you feel you need a higher limit, please contact us. If you hit the limit you will get a 429 error code returned from our servers

# Errors

The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:

```
{
  "success": false,
  "error": {
    "code": "CONT-001",
    "message": "Invalid mobile number"
  }
}
```

# Pagination

For performance, most GET calls return a subset of data. This data is paginated for easy access. Most APIs which return collections of data will return a pagination object as such:

```
{
  "pagination": {
    "offset": 0,
    "limit": 10
    "totalCount": 21
  }  
}
```

When making calls to the API, you can adjust the slice of data returned using query parameters such as:

`` https://api.sakari.io/v1/accounts/123/contacts?offset=20&limit=25 ``

This will return 25 contacts with an offset of 20.

Base URLs:

* <a href="https://api.sakari.io">https://api.sakari.io</a> - Sakari Production

<a href="https://sakari.io/terms-service.html">Terms of service</a>
Email: <a href="mailto:support@sakari.io">support@sakari.io</a> 

<a href="https://sakari.io">Find out more about Sakari</a>

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [/oauth2/token](/oauth2/token)

|Scope|Scope Description|
|---|---|
|messages:send|Send messages|

<h1 id="sakari-authentication">authentication</h1>

Sakari uses OAuth2 for authentication. After you have created an account at [https://hub.sakari.io](https://hub.sakari.io), you can retrieve your client id and secret from the 'Account Details' screen (click on the 'cog' icon in the top right corner and scroll down to API Credentials)

Using your client id and secret, you can exchange these for a JWT ([JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token))

The JWT should then be used when accessing any of the core API's. It should be passed in the `Authorization` header.

For example:

``Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImt....``


## Get token for accessing APIs

<a id="opIdauth.token"></a>

> Code samples

```bash
curl https://example.com/oauth2/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "00000000-0000-0000-0000-00000000000",
    "client_secret": "00000000-0000-0000-0000-00000000000",
    "grant_type": "client_credentials"
  }'
```

`POST /oauth2/token`

> Body parameter

```json
{
  "client_id": "00000000-0000-0000-0000-00000000000",
  "client_secret": "00000000-0000-0000-0000-00000000000",
  "grant_type": "client_credentials"
}
```

<h3 id="get-token-for-accessing-apis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenRequest](#schematokenrequest)|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» grant_type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "token_type": "string"
}
```

<h3 id="get-token-for-accessing-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TokenResponse](#schematokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sakari-contacts">contacts</h1>

Create, modify or delete contacts

## Fetch contacts

<a id="opIdcontacts.fetchAll"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/contacts`

<h3 id="fetch-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|offset|query|integer(int64)|false|Results to skip when paginating through a result set|
|limit|query|integer(int64)|false|Maximum number of results to return|
|firstName|query|string|false|Filter by first name or part of|
|lastName|query|string|false|Filter by last name or part of|
|mobile|query|string|false|Filter by mobile or part of|
|email|query|string|false|Filter by email or part of|
|tags|query|string|false|Filter by tag(s)|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      },
      "attributes": {},
      "tags": [
        {
          "tag": "string",
          "visible": true
        }
      ],
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "valid": true
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

> 5XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

<h3 id="fetch-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContactsResponse](#schemacontactsresponse)|
|4XX|Client Error|invalid request|[ErrorResponse](#schemaerrorresponse)|
|5XX|Server Error|invalid request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Create contact

<a id="opIdcontacts.create"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    },
    "attributes": {},
    "tags": [
      {
        "tag": "string",
        "visible": true
      }
    ]
  }'
```

`POST /v1/accounts/{accountId}/contacts`

> Body parameter

```json
{
  "email": "chris@sakari.io",
  "firstName": "Chris",
  "id": "string",
  "lastName": "Bloggs",
  "mobile": {
    "country": "string",
    "number": "123-456-7890"
  },
  "attributes": {},
  "tags": [
    {
      "tag": "string",
      "visible": true
    }
  ]
}
```

<h3 id="create-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|mergeStrategy|query|string|false|Determines how existing contacts with matching mobile numbers are treated|
|body|body|[ContactRequest](#schemacontactrequest)|false|none|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» id|body|string|false|none|
|» lastName|body|string|false|none|
|» mobile|body|object|false|none|
|» » country|body|string|false|none|
|» » number|body|string|false|none|
|» attributes|body|object|false|none|
|» tags|body|[[Tag](#schematag)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mergeStrategy|append|
|mergeStrategy|core|
|mergeStrategy|remove|

> Example responses

> 201 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      },
      "attributes": {},
      "tags": [
        {
          "tag": "string",
          "visible": true
        }
      ],
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "valid": true
    }
  ]
}
```

<h3 id="create-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|Inline|

<h3 id="create-contact-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ContactsResponse](#schemacontactsresponse)|false|none|none|
|*oneOf*|[ContactUploadResponse](#schemacontactuploadresponse)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Fetch contact by ID

<a id="opIdcontacts.fetch"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/contacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/contacts/{contactId}`

<h3 id="fetch-contact-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|contactId|path|string|true|ID of contact to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    },
    "attributes": {},
    "tags": [
      {
        "tag": "string",
        "visible": true
      }
    ],
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "error": {
      "code": "CONT-010",
      "description": "Contact has requested no further communication"
    },
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "valid": true
  },
  "success": true
}
```

<h3 id="fetch-contact-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContactResponse](#schemacontactresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Updates a contact

<a id="opIdcontacts.update"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/contacts/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/accounts/{accountId}/contacts/{contactId}`

<h3 id="updates-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|contactId|path|string|true|ID of contact|

> Example responses

> 200 Response

```json
{
  "data": {
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    },
    "attributes": {},
    "tags": [
      {
        "tag": "string",
        "visible": true
      }
    ],
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "error": {
      "code": "CONT-010",
      "description": "Contact has requested no further communication"
    },
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "valid": true
  },
  "success": true
}
```

<h3 id="updates-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContactResponse](#schemacontactresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Deletes a contact

<a id="opIdcontacts.remove"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/contacts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/accounts/{accountId}/contacts/{contactId}`

<h3 id="deletes-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|contactId|path|string|true|Contact id to delete|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletes-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="deletes-a-contact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

<h1 id="sakari-messages">messages</h1>

Send or track messages to one contact, a group of contacts or your entire address book

## Fetch messages

<a id="opIdmessages.fetchAll"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/messages`

<h3 id="fetch-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|offset|query|integer(int64)|false|Results to skip when paginating through a result set|
|limit|query|integer(int64)|false|Maximum number of results to return|
|contactId|query|string|false|ID of contact|
|conversationId|query|string|false|ID of conversation|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "conversation": {
        "id": "string"
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "id": "string",
      "media": [
        {
          "filename": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "message": "string",
      "outgoing": true,
      "phoneNumber": "+1234567890",
      "price": 0,
      "read": true,
      "segments": 0,
      "status": "string",
      "template": "string",
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    }
  ]
}
```

<h3 id="fetch-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MessagesResponse](#schemamessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Send Messages

<a id="opIdmessages.send"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contacts": [
      {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        },
        "attributes": {},
        "tags": [
          {
            "tag": "string",
            "visible": true
          }
        ]
      }
    ],
    "conversationStrategy": "string",
    "conversations": [
      "string"
    ],
    "filters": {
      "attributes": [
        {}
      ],
      "tags": [
        "string"
      ]
    },
    "media": [
      {
        "url": "string"
      }
    ],
    "phoneNumberFilter": {
      "group": {
        "id": "string"
      }
    },
    "template": "string",
    "type": "SMS"
  }'
```

`POST /v1/accounts/{accountId}/messages`

> Body parameter

```json
{
  "contacts": [
    {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      },
      "attributes": {},
      "tags": [
        {
          "tag": "string",
          "visible": true
        }
      ]
    }
  ],
  "conversationStrategy": "string",
  "conversations": [
    "string"
  ],
  "filters": {
    "attributes": [
      {}
    ],
    "tags": [
      "string"
    ]
  },
  "media": [
    {
      "url": "string"
    }
  ],
  "phoneNumberFilter": {
    "group": {
      "id": "string"
    }
  },
  "template": "string",
  "type": "SMS"
}
```

<h3 id="send-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|body|body|[SendMessagesRequest](#schemasendmessagesrequest)|false|none|
|» contacts|body|[[ContactRequest](#schemacontactrequest)]|false|none|
|» conversationStrategy|body|string|false|none|
|» conversations|body|[string]|false|List of conversation ids to send messages to|
|» filters|body|object|false|none|
|» » attributes|body|[object]|false|none|
|» » tags|body|[string]|false|none|
|» media|body|[object]|false|List of media objects to attach to message|
|» » url|body|string|false|none|
|» phoneNumberFilter|body|object|false|none|
|» » group|body|object|false|none|
|» » » id|body|string|false|none|
|» template|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|SMS|
|» type|MMS|

> Example responses

> 200 Response

```json
{
  "data": {
    "estimatedPrice": 0,
    "invalid": [
      {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        },
        "attributes": {},
        "tags": [
          {
            "tag": "string",
            "visible": true
          }
        ],
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "valid": true
      }
    ],
    "jobId": "string",
    "messages": [
      {
        "contact": {
          "email": "chris@sakari.io",
          "firstName": "Chris",
          "id": "string",
          "lastName": "Bloggs",
          "mobile": {
            "country": "string",
            "number": "123-456-7890"
          }
        },
        "conversation": {
          "id": "string"
        },
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "id": "string",
        "media": [
          {
            "filename": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "message": "string",
        "outgoing": true,
        "phoneNumber": "+1234567890",
        "price": 0,
        "read": true,
        "segments": 0,
        "status": "string",
        "template": "string",
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        }
      }
    ],
    "requested": 0,
    "valid": 0
  }
}
```

<h3 id="send-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SendMessagesResponse](#schemasendmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Fetch message by id

<a id="opIdmessages.fetch"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/messages/{messageId}`

Returns a single messag

<h3 id="fetch-message-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|messageId|path|string|true|ID of message to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "contact": {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      }
    },
    "conversation": {
      "id": "string"
    },
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "error": {
      "code": "CONT-010",
      "description": "Contact has requested no further communication"
    },
    "id": "string",
    "media": [
      {
        "filename": "string",
        "type": "string",
        "url": "string"
      }
    ],
    "message": "string",
    "outgoing": true,
    "phoneNumber": "+1234567890",
    "price": 0,
    "read": true,
    "segments": 0,
    "status": "string",
    "template": "string",
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    }
  },
  "success": true
}
```

<h3 id="fetch-message-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MessageResponse](#schemamessageresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

<h1 id="sakari-templates">templates</h1>

Define reusable message or web templates

## Fetch templates

<a id="opIdtemplates.fetchAll"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/templates`

<h3 id="fetch-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|offset|query|integer(int64)|false|Results to skip when paginating through a result set|
|limit|query|integer(int64)|false|Maximum number of results to return|
|name|query|string|false|Filter by name or part of|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "name": "string",
      "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
      "type": "SMS",
      "id": "string"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

> 5XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

<h3 id="fetch-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplatesResponse](#schematemplatesresponse)|
|4XX|Client Error|invalid request|[ErrorResponse](#schemaerrorresponse)|
|5XX|Server Error|invalid request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Create template

<a id="opIdtemplates.create"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
    "type": "SMS"
  }'
```

`POST /v1/accounts/{accountId}/templates`

> Body parameter

```json
{
  "name": "string",
  "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
  "type": "SMS"
}
```

<h3 id="create-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|body|body|[TemplateRequest](#schematemplaterequest)|false|none|
|» name|body|string|false|none|
|» template|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|SMS|
|» type|Web|

> Example responses

> 201 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "name": "string",
      "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
      "type": "SMS",
      "id": "string"
    }
  ]
}
```

<h3 id="create-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[TemplatesResponse](#schematemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Fetch template by ID

<a id="opIdtemplates.fetch"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/templates/{templateId}`

<h3 id="fetch-template-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|templateId|path|string|true|ID of template to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
    "type": "SMS",
    "id": "string"
  },
  "success": true
}
```

<h3 id="fetch-template-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateResponse](#schematemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Updates a template

<a id="opIdtemplates.update"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/templates/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/accounts/{accountId}/templates/{templateId}`

<h3 id="updates-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|templateId|path|string|true|ID of template|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
    "type": "SMS",
    "id": "string"
  },
  "success": true
}
```

<h3 id="updates-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateResponse](#schematemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Deletes a template

<a id="opIdtemplates.remove"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/accounts/{accountId}/templates/{templateId}`

<h3 id="deletes-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|templateId|path|string|true|Template id to delete|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletes-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="deletes-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

<h1 id="sakari-campaigns">campaigns</h1>

Define reusable message campaigns with a predefined contact list/filter, template and schedule

## Fetch campaigns

<a id="opIdcampaigns.fetchAll"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/campaigns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/campaigns`

<h3 id="fetch-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|offset|query|integer(int64)|false|Results to skip when paginating through a result set|
|limit|query|integer(int64)|false|Maximum number of results to return|
|name|query|string|false|Filter by name or part of|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "id": "string"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

> 5XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

<h3 id="fetch-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CampaignsResponse](#schemacampaignsresponse)|
|4XX|Client Error|invalid request|[ErrorResponse](#schemaerrorresponse)|
|5XX|Server Error|invalid request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Create campaign

<a id="opIdcampaigns.create"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/campaigns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filters": {
      "attributes": [
        "string"
      ],
      "contacts": [
        "string"
      ],
      "tags": [
        "string"
      ]
    },
    "template": "string",
    "trigger": {
      "code": "M"
    }
  }'
```

`POST /v1/accounts/{accountId}/campaigns`

> Body parameter

```json
{
  "filters": {
    "attributes": [
      "string"
    ],
    "contacts": [
      "string"
    ],
    "tags": [
      "string"
    ]
  },
  "template": "string",
  "trigger": {
    "code": "M"
  }
}
```

<h3 id="create-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|body|body|[CampaignRequest](#schemacampaignrequest)|false|none|
|» filters|body|object|false|none|
|» » attributes|body|[string]|false|none|
|» » contacts|body|[string]|false|none|
|» » tags|body|[string]|false|none|
|» template|body|string|false|none|
|» trigger|body|object|false|none|
|» » code|body|string|false|Campaign type specifies how it sources contacts and what event triggers its execution  Sort order<br>  * `M` - Manual<br>  * `S` - Scheduled<br>  * `FU` - File Upload<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » code|M|
|» » code|S|
|» » code|FU|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string"
  },
  "success": true
}
```

<h3 id="create-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[CampaignResponse](#schemacampaignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Fetch campaign by ID

<a id="opIdcampaigns.fetch"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/campaigns/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/campaigns/{campaignId}`

<h3 id="fetch-campaign-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|campaignId|path|string|true|ID of campaign to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  },
  "success": true
}
```

<h3 id="fetch-campaign-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CampaignResponse](#schemacampaignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Updates a campaign

<a id="opIdcampaigns.update"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/campaigns/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/accounts/{accountId}/campaigns/{campaignId}`

<h3 id="updates-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|campaignId|path|string|true|ID of campaign|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  },
  "success": true
}
```

<h3 id="updates-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CampaignResponse](#schemacampaignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Deletes a campaign

<a id="opIdcampaigns.remove"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/campaigns/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/accounts/{accountId}/campaigns/{campaignId}`

<h3 id="deletes-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|campaignId|path|string|true|Campaign id to delete|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletes-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="deletes-a-campaign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

<h1 id="sakari-conversations">conversations</h1>

Conversations group your message history with each contact into one thread

## Fetch conversations

<a id="opIdconversations.fetchAll"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/conversations`

<h3 id="fetch-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|offset|query|integer(int64)|false|Results to skip when paginating through a result set|
|limit|query|integer(int64)|false|Maximum number of results to return|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "closed": true,
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "id": "string",
      "lastMessage": {
        "contact": {
          "email": "chris@sakari.io",
          "firstName": "Chris",
          "id": "string",
          "lastName": "Bloggs",
          "mobile": {
            "country": "string",
            "number": "123-456-7890"
          }
        },
        "conversation": {
          "id": "string"
        },
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "id": "string",
        "media": [
          {
            "filename": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "message": "string",
        "outgoing": true,
        "phoneNumber": "+1234567890",
        "price": 0,
        "read": true,
        "segments": 0,
        "status": "string",
        "template": "string",
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        }
      },
      "phoneNumber": {
        "active": true,
        "country": "string",
        "number": "string"
      },
      "unread": [
        "string"
      ],
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

> 5XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

<h3 id="fetch-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConversationsResponse](#schemaconversationsresponse)|
|4XX|Client Error|invalid request|[ErrorResponse](#schemaerrorresponse)|
|5XX|Server Error|invalid request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Fetch conversation by ID

<a id="opIdconversations.fetch"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/conversations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/conversations/{conversationId}`

<h3 id="fetch-conversation-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|conversationId|path|string|true|ID of template to return|

> Example responses

> 200 Response

```json
{
  "data": {
    "closed": true,
    "contact": {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      }
    },
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "id": "string",
    "lastMessage": {
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "conversation": {
        "id": "string"
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "id": "string",
      "media": [
        {
          "filename": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "message": "string",
      "outgoing": true,
      "phoneNumber": "+1234567890",
      "price": 0,
      "read": true,
      "segments": 0,
      "status": "string",
      "template": "string",
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    },
    "phoneNumber": {
      "active": true,
      "country": "string",
      "number": "string"
    },
    "unread": [
      "string"
    ],
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    }
  },
  "success": true
}
```

<h3 id="fetch-conversation-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConversationResponse](#schemaconversationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Closes a conversation

<a id="opIdconversations.close"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/conversations/string/close \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/accounts/{accountId}/conversations/{conversationId}/close`

<h3 id="closes-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|conversationId|path|string|true|ID of conversation|

> Example responses

> 200 Response

```json
{
  "data": {
    "closed": true,
    "contact": {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      }
    },
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "id": "string",
    "lastMessage": {
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "conversation": {
        "id": "string"
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "id": "string",
      "media": [
        {
          "filename": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "message": "string",
      "outgoing": true,
      "phoneNumber": "+1234567890",
      "price": 0,
      "read": true,
      "segments": 0,
      "status": "string",
      "template": "string",
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    },
    "phoneNumber": {
      "active": true,
      "country": "string",
      "number": "string"
    },
    "unread": [
      "string"
    ],
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    }
  },
  "success": true
}
```

<h3 id="closes-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConversationResponse](#schemaconversationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

<h1 id="sakari-tools">tools</h1>

Tools to assist with sending and receiving messages, such as file sharing, translation, etc.

## Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

<a id="opIdtools.shareFile"></a>

> Code samples

```bash
curl https://example.com/v1/tools/sharefile \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'media=@/path/to/file'
```

`POST /v1/tools/sharefile`

> Body parameter

```yaml
media: string
```

<h3 id="share-file---use-to-host-a-file-and-generate-a-short-link-to-be-used-directly-in-a-message-or-as-a-link-to-media-for-a-mms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» media|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "expires": "1970-01-01T00:00:00Z",
    "link": "string"
  },
  "success": true
}
```

> 4XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

> 5XX Response

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

<h3 id="share-file---use-to-host-a-file-and-generate-a-short-link-to-be-used-directly-in-a-message-or-as-a-link-to-media-for-a-mms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ShareFileResponse](#schemasharefileresponse)|
|4XX|Client Error|invalid request|[ErrorResponse](#schemaerrorresponse)|
|5XX|Server Error|invalid request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

<h1 id="sakari-webhooks">webhooks</h1>

Webhooks allow your own system to be automatically notified upon certin events, such as a new message received from one of your contacts or a status change notification for your messages

## Fetch active webhooks

<a id="opIdwebhooks.fetchAll"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{accountId}/webhooks`

When messages are acknowledge by carriers, a notification is sent to the specified URL

<h3 id="fetch-active-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "eventTypes": [
        "message-received"
      ],
      "url": "string"
    }
  ]
}
```

<h3 id="fetch-active-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[WebhooksResponse](#schemawebhooksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Subscribe to message events

<a id="opIdwebhooks.subscribe"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "eventTypes": [
      "contact-created"
    ],
    "url": "https://myserver.com/send/callback/here"
  }'
```

`POST /v1/accounts/{accountId}/webhooks`

When messages are acknowledge by carriers, a notification is sent to the specified URL

> Body parameter

```json
{
  "eventTypes": [
    "contact-created"
  ],
  "url": "https://myserver.com/send/callback/here"
}
```

<h3 id="subscribe-to-message-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|body|body|object|true|none|
|» eventTypes|body|[string]|false|none|
|» url|body|string(uri)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventTypes|contact-created|
|» eventTypes|contact-updated|
|» eventTypes|contact-removed|
|» eventTypes|message-received|
|» eventTypes|message-sent|
|» eventTypes|message-status|
|» eventTypes|conversation-started|
|» eventTypes|contact-opt-out|
|» eventTypes|contact-opt-in|
|» eventTypes|list-opt-out|
|» eventTypes|list-opt-in|

> Example responses

> 200 Response

```json
{
  "data": {
    "eventTypes": [
      "message-received"
    ],
    "url": "string"
  },
  "success": true
}
```

<h3 id="subscribe-to-message-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[WebhookResponse](#schemawebhookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

## Unsubscribe to message events

<a id="opIdwebhooks.unsubscribe"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/string/webhooks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/accounts/{accountId}/webhooks/{url}`

Delete subscription for receiving notifications

<h3 id="unsubscribe-to-message-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to apply operations to|
|url|path|string|true|Account to apply operations to|

<h3 id="unsubscribe-to-message-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<h3 id="unsubscribe-to-message-events-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|event|{$request.body#/callbackUrl}|POST|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sakari_auth
</aside>

# Schemas

<h2 id="tocS_AccountEvent">AccountEvent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountevent"></a>
<a id="schema_AccountEvent"></a>
<a id="tocSaccountevent"></a>
<a id="tocsaccountevent"></a>

```json
{
  "accountId": "string",
  "type": "message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|false|none|none|
|type|[EventType](#schemaeventtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|
|type|messageStatus|
|type|messageIncoming|

<h2 id="tocS_AccountEventPayload">AccountEventPayload</h2>
<!-- backwards compatibility -->
<a id="schemaaccounteventpayload"></a>
<a id="schema_AccountEventPayload"></a>
<a id="tocSaccounteventpayload"></a>
<a id="tocsaccounteventpayload"></a>

```json
{
  "balance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number(double)|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AttributeFilter">AttributeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaattributefilter"></a>
<a id="schema_AttributeFilter"></a>
<a id="tocSattributefilter"></a>
<a id="tocsattributefilter"></a>

```json
{
  "comparator": "=",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|string|false|none|none|
|name|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|=|
|comparator|<|
|comparator|<=|
|comparator|>|
|comparator|>=|
|comparator|!=|

<h2 id="tocS_Campaign">Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacampaign"></a>
<a id="schema_Campaign"></a>
<a id="tocScampaign"></a>
<a id="tocscampaign"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_CampaignRequest">CampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemacampaignrequest"></a>
<a id="schema_CampaignRequest"></a>
<a id="tocScampaignrequest"></a>
<a id="tocscampaignrequest"></a>

```json
{
  "filters": {
    "attributes": [
      "string"
    ],
    "contacts": [
      "string"
    ],
    "tags": [
      "string"
    ]
  },
  "template": "string",
  "trigger": {
    "code": "M"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|template|string|false|none|none|
|trigger|object|false|none|none|

<h2 id="tocS_CampaignResponse">CampaignResponse</h2>
<!-- backwards compatibility -->
<a id="schemacampaignresponse"></a>
<a id="schema_CampaignResponse"></a>
<a id="tocScampaignresponse"></a>
<a id="tocscampaignresponse"></a>

```json
{
  "data": {
    "id": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Campaign](#schemacampaign)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_CampaignsResponse">CampaignsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacampaignsresponse"></a>
<a id="schema_CampaignsResponse"></a>
<a id="tocScampaignsresponse"></a>
<a id="tocscampaignsresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|
|data|[[Campaign](#schemacampaign)]|false|none|none|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "chris@sakari.io",
  "firstName": "Chris",
  "id": "string",
  "lastName": "Bloggs",
  "mobile": {
    "country": "string",
    "number": "123-456-7890"
  },
  "attributes": {},
  "tags": [
    {
      "tag": "string",
      "visible": true
    }
  ],
  "created": {
    "at": "1970-01-01T00:00:00Z",
    "by": {
      "firstName": "Joe",
      "id": "string",
      "lastName": "Bloggs"
    }
  },
  "error": {
    "code": "CONT-010",
    "description": "Contact has requested no further communication"
  },
  "updated": {
    "at": "1970-01-01T00:00:00Z",
    "by": {
      "firstName": "Joe",
      "id": "string",
      "lastName": "Bloggs"
    }
  },
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|mobile|object|false|none|none|
|attributes|object|false|none|none|
|tags|[[Tag](#schematag)]|false|none|none|
|created|[Updated](#schemaupdated)|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|updated|[Updated](#schemaupdated)|false|none|none|
|valid|boolean|false|none|none|

<h2 id="tocS_ContactIdentifiers">ContactIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemacontactidentifiers"></a>
<a id="schema_ContactIdentifiers"></a>
<a id="tocScontactidentifiers"></a>
<a id="tocscontactidentifiers"></a>

```json
{
  "email": "chris@sakari.io",
  "firstName": "Chris",
  "id": "string",
  "lastName": "Bloggs",
  "mobile": {
    "country": "string",
    "number": "123-456-7890"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|mobile|object|false|none|none|

<h2 id="tocS_ContactRequest">ContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontactrequest"></a>
<a id="schema_ContactRequest"></a>
<a id="tocScontactrequest"></a>
<a id="tocscontactrequest"></a>

```json
{
  "email": "chris@sakari.io",
  "firstName": "Chris",
  "id": "string",
  "lastName": "Bloggs",
  "mobile": {
    "country": "string",
    "number": "123-456-7890"
  },
  "attributes": {},
  "tags": [
    {
      "tag": "string",
      "visible": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|mobile|object|false|none|none|
|attributes|object|false|none|none|
|tags|[[Tag](#schematag)]|false|none|none|

<h2 id="tocS_ContactResponse">ContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactresponse"></a>
<a id="schema_ContactResponse"></a>
<a id="tocScontactresponse"></a>
<a id="tocscontactresponse"></a>

```json
{
  "data": {
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    },
    "attributes": {},
    "tags": [
      {
        "tag": "string",
        "visible": true
      }
    ],
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "error": {
      "code": "CONT-010",
      "description": "Contact has requested no further communication"
    },
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "valid": true
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Contact](#schemacontact)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_ContactUploadResponse">ContactUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactuploadresponse"></a>
<a id="schema_ContactUploadResponse"></a>
<a id="tocScontactuploadresponse"></a>
<a id="tocscontactuploadresponse"></a>

```json
{
  "data": {
    "contacts": [
      {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        },
        "attributes": {},
        "tags": [
          {
            "tag": "string",
            "visible": true
          }
        ],
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "valid": true
      }
    ],
    "errors": [
      {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        },
        "attributes": {},
        "tags": [
          {
            "tag": "string",
            "visible": true
          }
        ],
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "valid": true
      }
    ],
    "inserted": 0,
    "submitted": 0,
    "success": 0,
    "updated": 0
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_ContactsResponse">ContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactsresponse"></a>
<a id="schema_ContactsResponse"></a>
<a id="tocScontactsresponse"></a>
<a id="tocscontactsresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      },
      "attributes": {},
      "tags": [
        {
          "tag": "string",
          "visible": true
        }
      ],
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "valid": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|
|data|[[Contact](#schemacontact)]|false|none|none|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "closed": true,
  "contact": {
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    }
  },
  "created": {
    "at": "1970-01-01T00:00:00Z",
    "by": {
      "firstName": "Joe",
      "id": "string",
      "lastName": "Bloggs"
    }
  },
  "id": "string",
  "lastMessage": {
    "contact": {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      }
    },
    "conversation": {
      "id": "string"
    },
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "error": {
      "code": "CONT-010",
      "description": "Contact has requested no further communication"
    },
    "id": "string",
    "media": [
      {
        "filename": "string",
        "type": "string",
        "url": "string"
      }
    ],
    "message": "string",
    "outgoing": true,
    "phoneNumber": "+1234567890",
    "price": 0,
    "read": true,
    "segments": 0,
    "status": "string",
    "template": "string",
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    }
  },
  "phoneNumber": {
    "active": true,
    "country": "string",
    "number": "string"
  },
  "unread": [
    "string"
  ],
  "updated": {
    "at": "1970-01-01T00:00:00Z",
    "by": {
      "firstName": "Joe",
      "id": "string",
      "lastName": "Bloggs"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed|boolean|false|none|none|
|contact|[ContactIdentifiers](#schemacontactidentifiers)|false|none|none|
|created|[Updated](#schemaupdated)|false|none|none|
|id|string|false|none|none|
|lastMessage|[Message](#schemamessage)|false|none|none|
|phoneNumber|[PhoneNumber](#schemaphonenumber)|false|none|none|
|unread|[string]|false|none|none|
|updated|[Updated](#schemaupdated)|false|none|none|

<h2 id="tocS_ConversationResponse">ConversationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationresponse"></a>
<a id="schema_ConversationResponse"></a>
<a id="tocSconversationresponse"></a>
<a id="tocsconversationresponse"></a>

```json
{
  "data": {
    "closed": true,
    "contact": {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      }
    },
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "id": "string",
    "lastMessage": {
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "conversation": {
        "id": "string"
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "id": "string",
      "media": [
        {
          "filename": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "message": "string",
      "outgoing": true,
      "phoneNumber": "+1234567890",
      "price": 0,
      "read": true,
      "segments": 0,
      "status": "string",
      "template": "string",
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    },
    "phoneNumber": {
      "active": true,
      "country": "string",
      "number": "string"
    },
    "unread": [
      "string"
    ],
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Conversation](#schemaconversation)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_ConversationsResponse">ConversationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationsresponse"></a>
<a id="schema_ConversationsResponse"></a>
<a id="tocSconversationsresponse"></a>
<a id="tocsconversationsresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "closed": true,
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "id": "string",
      "lastMessage": {
        "contact": {
          "email": "chris@sakari.io",
          "firstName": "Chris",
          "id": "string",
          "lastName": "Bloggs",
          "mobile": {
            "country": "string",
            "number": "123-456-7890"
          }
        },
        "conversation": {
          "id": "string"
        },
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "id": "string",
        "media": [
          {
            "filename": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "message": "string",
        "outgoing": true,
        "phoneNumber": "+1234567890",
        "price": 0,
        "read": true,
        "segments": 0,
        "status": "string",
        "template": "string",
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        }
      },
      "phoneNumber": {
        "active": true,
        "country": "string",
        "number": "string"
      },
      "unread": [
        "string"
      ],
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|
|data|[[Conversation](#schemaconversation)]|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "CONT-010",
  "description": "Contact has requested no further communication"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "code": "CONV-001",
    "message": "Invalid conversation id"
  },
  "success": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "accountId": "string",
  "data": {
    "balance": 0
  },
  "eventId": "string",
  "type": "message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|[AccountId](#schemaaccountid)|false|none|none|
|data|[AccountEventPayload](#schemaaccounteventpayload) \| [MessageEventPayload](#schemamessageeventpayload)|false|none|none|
|eventId|string|false|none|none|
|type|[EventType](#schemaeventtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|
|type|messageStatus|
|type|messageIncoming|

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"message"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "contact": {
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    }
  },
  "conversation": {
    "id": "string"
  },
  "created": {
    "at": "1970-01-01T00:00:00Z",
    "by": {
      "firstName": "Joe",
      "id": "string",
      "lastName": "Bloggs"
    }
  },
  "error": {
    "code": "CONT-010",
    "description": "Contact has requested no further communication"
  },
  "id": "string",
  "media": [
    {
      "filename": "string",
      "type": "string",
      "url": "string"
    }
  ],
  "message": "string",
  "outgoing": true,
  "phoneNumber": "+1234567890",
  "price": 0,
  "read": true,
  "segments": 0,
  "status": "string",
  "template": "string",
  "updated": {
    "at": "1970-01-01T00:00:00Z",
    "by": {
      "firstName": "Joe",
      "id": "string",
      "lastName": "Bloggs"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|[ContactIdentifiers](#schemacontactidentifiers)|false|none|none|
|conversation|object|false|none|none|
|created|[Updated](#schemaupdated)|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|id|string|false|none|none|
|media|[object]|false|none|List of media objects attached to message|
|message|string|false|none|none|
|outgoing|boolean|false|none|none|
|phoneNumber|string|false|none|none|
|price|number|false|none|none|
|read|boolean|false|none|none|
|segments|number|false|none|none|
|status|string|false|none|none|
|template|string|false|none|none|
|updated|[Updated](#schemaupdated)|false|none|none|

<h2 id="tocS_MessageEventPayload">MessageEventPayload</h2>
<!-- backwards compatibility -->
<a id="schemamessageeventpayload"></a>
<a id="schema_MessageEventPayload"></a>
<a id="tocSmessageeventpayload"></a>
<a id="tocsmessageeventpayload"></a>

```json
{
  "contact": {
    "email": "chris@sakari.io",
    "firstName": "Chris",
    "id": "string",
    "lastName": "Bloggs",
    "mobile": {
      "country": "string",
      "number": "123-456-7890"
    }
  },
  "error": "string",
  "message": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|[ContactIdentifiers](#schemacontactidentifiers)|false|none|none|
|error|string|false|none|none|
|message|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_MessageResponse">MessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponse"></a>
<a id="schema_MessageResponse"></a>
<a id="tocSmessageresponse"></a>
<a id="tocsmessageresponse"></a>

```json
{
  "data": {
    "contact": {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      }
    },
    "conversation": {
      "id": "string"
    },
    "created": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    },
    "error": {
      "code": "CONT-010",
      "description": "Contact has requested no further communication"
    },
    "id": "string",
    "media": [
      {
        "filename": "string",
        "type": "string",
        "url": "string"
      }
    ],
    "message": "string",
    "outgoing": true,
    "phoneNumber": "+1234567890",
    "price": 0,
    "read": true,
    "segments": 0,
    "status": "string",
    "template": "string",
    "updated": {
      "at": "1970-01-01T00:00:00Z",
      "by": {
        "firstName": "Joe",
        "id": "string",
        "lastName": "Bloggs"
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Message](#schemamessage)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_MessagesResponse">MessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagesresponse"></a>
<a id="schema_MessagesResponse"></a>
<a id="tocSmessagesresponse"></a>
<a id="tocsmessagesresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "contact": {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        }
      },
      "conversation": {
        "id": "string"
      },
      "created": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      },
      "error": {
        "code": "CONT-010",
        "description": "Contact has requested no further communication"
      },
      "id": "string",
      "media": [
        {
          "filename": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "message": "string",
      "outgoing": true,
      "phoneNumber": "+1234567890",
      "price": 0,
      "read": true,
      "segments": 0,
      "status": "string",
      "template": "string",
      "updated": {
        "at": "1970-01-01T00:00:00Z",
        "by": {
          "firstName": "Joe",
          "id": "string",
          "lastName": "Bloggs"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|
|data|[[Message](#schemamessage)]|false|none|none|

<h2 id="tocS_PaginatedResponse">PaginatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponse"></a>
<a id="schema_PaginatedResponse"></a>
<a id="tocSpaginatedresponse"></a>
<a id="tocspaginatedresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "active": true,
  "country": "string",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|country|string|false|none|none|
|number|string|false|none|none|

<h2 id="tocS_SendMessagesRequest">SendMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagesrequest"></a>
<a id="schema_SendMessagesRequest"></a>
<a id="tocSsendmessagesrequest"></a>
<a id="tocssendmessagesrequest"></a>

```json
{
  "contacts": [
    {
      "email": "chris@sakari.io",
      "firstName": "Chris",
      "id": "string",
      "lastName": "Bloggs",
      "mobile": {
        "country": "string",
        "number": "123-456-7890"
      },
      "attributes": {},
      "tags": [
        {
          "tag": "string",
          "visible": true
        }
      ]
    }
  ],
  "conversationStrategy": "string",
  "conversations": [
    "string"
  ],
  "filters": {
    "attributes": [
      {}
    ],
    "tags": [
      "string"
    ]
  },
  "media": [
    {
      "url": "string"
    }
  ],
  "phoneNumberFilter": {
    "group": {
      "id": "string"
    }
  },
  "template": "string",
  "type": "SMS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[[ContactRequest](#schemacontactrequest)]|false|none|none|
|conversationStrategy|string|false|none|none|
|conversations|[string]|false|none|List of conversation ids to send messages to|
|filters|object|false|none|none|
|media|[object]|false|none|List of media objects to attach to message|
|phoneNumberFilter|object|false|none|none|
|template|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SMS|
|type|MMS|

<h2 id="tocS_SendMessagesResponse">SendMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagesresponse"></a>
<a id="schema_SendMessagesResponse"></a>
<a id="tocSsendmessagesresponse"></a>
<a id="tocssendmessagesresponse"></a>

```json
{
  "data": {
    "estimatedPrice": 0,
    "invalid": [
      {
        "email": "chris@sakari.io",
        "firstName": "Chris",
        "id": "string",
        "lastName": "Bloggs",
        "mobile": {
          "country": "string",
          "number": "123-456-7890"
        },
        "attributes": {},
        "tags": [
          {
            "tag": "string",
            "visible": true
          }
        ],
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "valid": true
      }
    ],
    "jobId": "string",
    "messages": [
      {
        "contact": {
          "email": "chris@sakari.io",
          "firstName": "Chris",
          "id": "string",
          "lastName": "Bloggs",
          "mobile": {
            "country": "string",
            "number": "123-456-7890"
          }
        },
        "conversation": {
          "id": "string"
        },
        "created": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        },
        "error": {
          "code": "CONT-010",
          "description": "Contact has requested no further communication"
        },
        "id": "string",
        "media": [
          {
            "filename": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "message": "string",
        "outgoing": true,
        "phoneNumber": "+1234567890",
        "price": 0,
        "read": true,
        "segments": 0,
        "status": "string",
        "template": "string",
        "updated": {
          "at": "1970-01-01T00:00:00Z",
          "by": {
            "firstName": "Joe",
            "id": "string",
            "lastName": "Bloggs"
          }
        }
      }
    ],
    "requested": 0,
    "valid": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_ShareFileResponse">ShareFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemasharefileresponse"></a>
<a id="schema_ShareFileResponse"></a>
<a id="tocSsharefileresponse"></a>
<a id="tocssharefileresponse"></a>

```json
{
  "data": {
    "expires": "1970-01-01T00:00:00Z",
    "link": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "tag": "string",
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|none|
|visible|boolean|false|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "name": "string",
  "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
  "type": "SMS",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|template|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SMS|
|type|Web|

<h2 id="tocS_TemplateRequest">TemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplaterequest"></a>
<a id="schema_TemplateRequest"></a>
<a id="tocStemplaterequest"></a>
<a id="tocstemplaterequest"></a>

```json
{
  "name": "string",
  "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
  "type": "SMS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|template|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SMS|
|type|Web|

<h2 id="tocS_TemplateResponse">TemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponse"></a>
<a id="schema_TemplateResponse"></a>
<a id="tocStemplateresponse"></a>
<a id="tocstemplateresponse"></a>

```json
{
  "data": {
    "name": "string",
    "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
    "type": "SMS",
    "id": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_TemplatesResponse">TemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesresponse"></a>
<a id="schema_TemplatesResponse"></a>
<a id="tocStemplatesresponse"></a>
<a id="tocstemplatesresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "name": "string",
      "template": "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes",
      "type": "SMS",
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|
|data|[[Template](#schematemplate)]|false|none|none|

<h2 id="tocS_TokenRequest">TokenRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenrequest"></a>
<a id="schema_TokenRequest"></a>
<a id="tocStokenrequest"></a>
<a id="tocstokenrequest"></a>

```json
{
  "client_id": "00000000-0000-0000-0000-00000000000",
  "client_secret": "00000000-0000-0000-0000-00000000000",
  "grant_type": "client_credentials"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|
|grant_type|string|false|none|none|

<h2 id="tocS_TokenResponse">TokenResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenresponse"></a>
<a id="schema_TokenResponse"></a>
<a id="tocStokenresponse"></a>
<a id="tocstokenresponse"></a>

```json
{
  "access_token": "string",
  "token_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|token_type|string|false|none|none|

<h2 id="tocS_Updated">Updated</h2>
<!-- backwards compatibility -->
<a id="schemaupdated"></a>
<a id="schema_Updated"></a>
<a id="tocSupdated"></a>
<a id="tocsupdated"></a>

```json
{
  "at": "1970-01-01T00:00:00Z",
  "by": {
    "firstName": "Joe",
    "id": "string",
    "lastName": "Bloggs"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at|string(date-time)|false|none|none|
|by|object|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "eventTypes": [
    "message-received"
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|[string]|false|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventTypes|message-received|
|eventTypes|message-status|
|eventTypes|message-sent|
|eventTypes|conversation-closed|
|eventTypes|contact-created|
|eventTypes|contact-updated|
|eventTypes|contact-removed|

<h2 id="tocS_WebhookResponse">WebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhookresponse"></a>
<a id="schema_WebhookResponse"></a>
<a id="tocSwebhookresponse"></a>
<a id="tocswebhookresponse"></a>

```json
{
  "data": {
    "eventTypes": [
      "message-received"
    ],
    "url": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Webhook](#schemawebhook)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_WebhooksResponse">WebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksresponse"></a>
<a id="schema_WebhooksResponse"></a>
<a id="tocSwebhooksresponse"></a>
<a id="tocswebhooksresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "pagination": {
    "limit": 0,
    "offset": 0,
    "totalCount": 0
  },
  "success": true,
  "data": [
    {
      "eventTypes": [
        "message-received"
      ],
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|pagination|object|false|none|none|
|success|boolean|false|none|none|
|data|[[Webhook](#schemawebhook)]|false|none|none|
