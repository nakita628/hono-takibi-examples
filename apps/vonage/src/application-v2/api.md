<h1 id="application-api">Application API v2.1.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Vonage provides an Application API to allow management of your Vonage Applications.

This API is backwards compatible with version 1. Applications created using version 1 of the API can also be managed using version 2 (this version) of the API.

Base URLs:

* <a href="https://api.nexmo.com/v2/applications">https://api.nexmo.com/v2/applications</a>

Email: <a href="mailto:devrel@nexmo.com">Vonage</a> 
Web: <a href="https://developer.nexmo.com/">Vonage</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="application-api-default">Default</h1>

## List available applications

<a id="opIdlistApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /`

<h3 id="list-available-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|The number of applications per page|
|page|query|integer|false|The current page number (starts at 1)|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "applications": [
      {
        "capabilities": {
          "meetings": {
            "webhooks": {
              "recording_changed": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              },
              "room_changed": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              },
              "session_changed": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              }
            }
          },
          "messages": {
            "version": "string",
            "webhooks": {
              "inbound_url": {
                "address": "https://example.com/webhooks/inbound",
                "http_method": "POST"
              },
              "status_url": {
                "address": "https://example.com/webhooks/status",
                "http_method": "POST"
              }
            }
          },
          "rtc": {
            "leg_persistence_time": 5,
            "signed_callbacks": true,
            "webhooks": {
              "event_url": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              }
            }
          },
          "vbc": {},
          "verify": {
            "version": "v2",
            "webhooks": {
              "status_url": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              }
            }
          },
          "voice": {
            "conversation_ttl": 30,
            "payments": {
              "gateways": [
                {
                  "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
                  "mode": "live",
                  "type": "Stripe"
                }
              ]
            },
            "signed_callbacks": true,
            "webhooks": {
              "answer_url": {
                "address": "https://example.com/webhooks/answer",
                "connection_timeout": 500,
                "http_method": "POST",
                "socket_timeout": 3000
              },
              "event_url": {
                "address": "https://example.com/webhooks/event",
                "connection_timeout": 500,
                "http_method": "POST",
                "socket_timeout": 3000
              },
              "fallback_answer_url": {
                "address": "https://fallback.example.com/webhooks/answer",
                "connection_timeout": 500,
                "http_method": "POST",
                "socket_timeout": 3000
              }
            }
          }
        },
        "id": "78d335fa-323d-0114-9c3d-d6f0d48968cf",
        "name": "My Application",
        "privacy": {
          "improve_ai": true
        }
      }
    ]
  },
  "page": 1,
  "page_size": 10,
  "total_items": 6,
  "total_pages": 1
}
```

> 400 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "page_size",
      "reason": "must be between 1 and 100"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/application#list-validation"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.vonage.com/api-errors#unauthorized"
}
```

> 405 Response

```json
{
  "detail": "Request method 'TRACE' not supported",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Request method not allowed",
  "type": "https://developer.vonage.com/api-errors#wrong-verb"
}
```

> 406 Response

```json
{
  "detail": "Invalid Accept header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Accept header",
  "type": "https://developer.vonage.com/api-errors#accept-header"
}
```

<h3 id="list-available-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationResponseCollection](#schemaapplicationresponsecollection)|
|400|Bad Request|Invalid Request|Inline|
|401|Unauthorized|Credential is missing or invalid|Inline|
|405|Method Not Allowed|Invalid Request Method|Inline|
|406|Not Acceptable|Invalid Accept Header|Inline|

<h3 id="list-available-applications-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|invalid_parameters|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create an application

<a id="opIdcreateApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "capabilities": {
      "meetings": {
        "webhooks": {
          "recording_changed": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          },
          "room_changed": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          },
          "session_changed": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          }
        }
      },
      "messages": {
        "version": "string",
        "webhooks": {
          "inbound_url": {
            "address": "https://example.com/webhooks/inbound",
            "http_method": "POST"
          },
          "status_url": {
            "address": "https://example.com/webhooks/status",
            "http_method": "POST"
          }
        }
      },
      "rtc": {
        "leg_persistence_time": 5,
        "signed_callbacks": true,
        "webhooks": {
          "event_url": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          }
        }
      },
      "vbc": {},
      "verify": {
        "version": "v2",
        "webhooks": {
          "status_url": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          }
        }
      },
      "voice": {
        "conversation_ttl": 30,
        "payments": {
          "gateways": [
            {
              "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
              "mode": "live",
              "type": "Stripe"
            }
          ]
        },
        "signed_callbacks": true,
        "webhooks": {
          "answer_url": {
            "address": "https://example.com/webhooks/answer",
            "connection_timeout": 500,
            "http_method": "POST",
            "socket_timeout": 3000
          },
          "event_url": {
            "address": "https://example.com/webhooks/event",
            "connection_timeout": 500,
            "http_method": "POST",
            "socket_timeout": 3000
          },
          "fallback_answer_url": {
            "address": "https://fallback.example.com/webhooks/answer",
            "connection_timeout": 500,
            "http_method": "POST",
            "socket_timeout": 3000
          }
        }
      }
    },
    "keys": {
      "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n"
    },
    "name": "Demo Application",
    "privacy": {
      "improve_ai": true
    }
  }'
```

`POST /`

> Body parameter

```json
{
  "capabilities": {
    "meetings": {
      "webhooks": {
        "recording_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "room_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "session_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "version": "string",
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "leg_persistence_time": 5,
      "signed_callbacks": true,
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {},
    "verify": {
      "version": "v2",
      "webhooks": {
        "status_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "voice": {
      "conversation_ttl": 30,
      "payments": {
        "gateways": [
          {
            "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            "mode": "live",
            "type": "Stripe"
          }
        ]
      },
      "signed_callbacks": true,
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "fallback_answer_url": {
          "address": "https://fallback.example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        }
      }
    }
  },
  "keys": {
    "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n"
  },
  "name": "Demo Application",
  "privacy": {
    "improve_ai": true
  }
}
```

<h3 id="create-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» capabilities|body|[capabilities](#schemacapabilities)|false|Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.|
|» keys|body|object|false|none|
|» » public_key|body|string|false|Public key|
|» name|body|string|true|Application Name|
|» privacy|body|object|false|Application privacy config|
|» » improve_ai|body|boolean|false|If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.|

> Example responses

> 201 Response

```json
{
  "capabilities": {
    "meetings": {
      "webhooks": {
        "recording_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "room_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "session_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "version": "string",
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "leg_persistence_time": 5,
      "signed_callbacks": true,
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {},
    "verify": {
      "version": "v2",
      "webhooks": {
        "status_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "voice": {
      "conversation_ttl": 30,
      "payments": {
        "gateways": [
          {
            "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            "mode": "live",
            "type": "Stripe"
          }
        ]
      },
      "signed_callbacks": true,
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "fallback_answer_url": {
          "address": "https://fallback.example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        }
      }
    }
  },
  "id": "78d335fa-323d-0114-9c3d-d6f0d48968cf",
  "name": "My Application",
  "privacy": {
    "improve_ai": true
  },
  "keys": {
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFA\nASCBKcwggSjAgEAAoIBAQDEPpvi+3\nRH1efQ\\nkveWzZDrNNoEXmBw61w+O\n0u/N36tJnN5XnYecU64yHzu2ByEr0\n7iIvYbavFnADwl\\nHMTJwqDQakpa3\n8/SFRnTDq3zronvNZ6nOp7S6K7pcZ\nrw/CvrL6hXT1x7cGBZ4jPx\\nqhjqY\nuJPgZD7OVB69oYOV92vIIJ7JLYwqb\n-----END PRIVATE KEY-----\n",
    "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n"
  }
}
```

> 400 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "capabilities.voice.webhooks.answer_url.http_method",
      "reason": "must be one of: GET, POST"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/application#payload-validation"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.vonage.com/api-errors#unauthorized"
}
```

> 405 Response

```json
{
  "detail": "Request method 'TRACE' not supported",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Request method not allowed",
  "type": "https://developer.vonage.com/api-errors#wrong-verb"
}
```

> 406 Response

```json
{
  "detail": "Invalid Accept header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Accept header",
  "type": "https://developer.vonage.com/api-errors#accept-header"
}
```

> 415 Response

```json
{
  "detail": "Unsupported Content-Type header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Unsupported Content-Type header",
  "type": "https://developer.vonage.com/api-errors#content-type-header"
}
```

<h3 id="create-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|Inline|
|400|Bad Request|Invalid Request|Inline|
|401|Unauthorized|Credential is missing or invalid|Inline|
|405|Method Not Allowed|Invalid Request Method|Inline|
|406|Not Acceptable|Invalid Accept Header|Inline|
|415|Unsupported Media Type|Unsupported Content Type Header|Inline|

<h3 id="create-an-application-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[capabilities](#schemacapabilities)|false|none|Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.|
|id|string|false|none|The application's ID|
|name|string|false|none|Friendly identifier for your application. This is not unique|
|privacy|object|false|none|Application privacy config|
|» improve_ai|boolean|false|none|If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.|
|keys|object|false|none|none|
|» private_key|string|false|none|none|
|» public_key|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|invalid_parameters|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **415**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get an application

<a id="opIdgetApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/78d335fa-323d-0114-9c3d-d6f0d48968cf \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{id}`

<h3 id="get-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the application|

> Example responses

> 200 Response

```json
{
  "capabilities": {
    "meetings": {
      "webhooks": {
        "recording_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "room_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "session_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "version": "string",
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "leg_persistence_time": 5,
      "signed_callbacks": true,
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {},
    "verify": {
      "version": "v2",
      "webhooks": {
        "status_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "voice": {
      "conversation_ttl": 30,
      "payments": {
        "gateways": [
          {
            "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            "mode": "live",
            "type": "Stripe"
          }
        ]
      },
      "signed_callbacks": true,
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "fallback_answer_url": {
          "address": "https://fallback.example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        }
      }
    }
  },
  "id": "78d335fa-323d-0114-9c3d-d6f0d48968cf",
  "name": "My Application",
  "privacy": {
    "improve_ai": true
  }
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.vonage.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "ID 'ABC123' does not exist, or you do not have access",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Not Found",
  "type": "https://developer.vonage.com/api-errors#not-found"
}
```

> 405 Response

```json
{
  "detail": "Request method 'TRACE' not supported",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Request method not allowed",
  "type": "https://developer.vonage.com/api-errors#wrong-verb"
}
```

> 406 Response

```json
{
  "detail": "Invalid Accept header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Accept header",
  "type": "https://developer.vonage.com/api-errors#accept-header"
}
```

<h3 id="get-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplicationResponse](#schemaapplicationresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|404|Not Found|Resource Not Found|Inline|
|405|Method Not Allowed|Invalid Request Method|Inline|
|406|Not Acceptable|Invalid Accept Header|Inline|

<h3 id="get-an-application-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update an application

<a id="opIdupdateApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/78d335fa-323d-0114-9c3d-d6f0d48968cf \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "capabilities": {
      "meetings": {
        "webhooks": {
          "recording_changed": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          },
          "room_changed": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          },
          "session_changed": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          }
        }
      },
      "messages": {
        "version": "string",
        "webhooks": {
          "inbound_url": {
            "address": "https://example.com/webhooks/inbound",
            "http_method": "POST"
          },
          "status_url": {
            "address": "https://example.com/webhooks/status",
            "http_method": "POST"
          }
        }
      },
      "rtc": {
        "leg_persistence_time": 5,
        "signed_callbacks": true,
        "webhooks": {
          "event_url": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          }
        }
      },
      "vbc": {},
      "verify": {
        "version": "v2",
        "webhooks": {
          "status_url": {
            "address": "https://example.com/webhooks/event",
            "http_method": "POST"
          }
        }
      },
      "voice": {
        "conversation_ttl": 30,
        "payments": {
          "gateways": [
            {
              "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
              "mode": "live",
              "type": "Stripe"
            }
          ]
        },
        "signed_callbacks": true,
        "webhooks": {
          "answer_url": {
            "address": "https://example.com/webhooks/answer",
            "connection_timeout": 500,
            "http_method": "POST",
            "socket_timeout": 3000
          },
          "event_url": {
            "address": "https://example.com/webhooks/event",
            "connection_timeout": 500,
            "http_method": "POST",
            "socket_timeout": 3000
          },
          "fallback_answer_url": {
            "address": "https://fallback.example.com/webhooks/answer",
            "connection_timeout": 500,
            "http_method": "POST",
            "socket_timeout": 3000
          }
        }
      }
    },
    "keys": {
      "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n"
    },
    "name": "Demo Application",
    "privacy": {
      "improve_ai": true
    }
  }'
```

`PUT /{id}`

> Body parameter

```json
{
  "capabilities": {
    "meetings": {
      "webhooks": {
        "recording_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "room_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "session_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "version": "string",
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "leg_persistence_time": 5,
      "signed_callbacks": true,
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {},
    "verify": {
      "version": "v2",
      "webhooks": {
        "status_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "voice": {
      "conversation_ttl": 30,
      "payments": {
        "gateways": [
          {
            "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            "mode": "live",
            "type": "Stripe"
          }
        ]
      },
      "signed_callbacks": true,
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "fallback_answer_url": {
          "address": "https://fallback.example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        }
      }
    }
  },
  "keys": {
    "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n"
  },
  "name": "Demo Application",
  "privacy": {
    "improve_ai": true
  }
}
```

<h3 id="update-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the application|
|body|body|object|true|none|
|» capabilities|body|[capabilities](#schemacapabilities)|false|Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.|
|» keys|body|object|false|none|
|» » public_key|body|string|false|Public key|
|» name|body|string|true|Application Name|
|» privacy|body|object|false|Application privacy config|
|» » improve_ai|body|boolean|false|If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.|

> Example responses

> 200 Response

```json
{
  "capabilities": {
    "meetings": {
      "webhooks": {
        "recording_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "room_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "session_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "version": "string",
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "leg_persistence_time": 5,
      "signed_callbacks": true,
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {},
    "verify": {
      "version": "v2",
      "webhooks": {
        "status_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "voice": {
      "conversation_ttl": 30,
      "payments": {
        "gateways": [
          {
            "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            "mode": "live",
            "type": "Stripe"
          }
        ]
      },
      "signed_callbacks": true,
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "fallback_answer_url": {
          "address": "https://fallback.example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        }
      }
    }
  },
  "id": "78d335fa-323d-0114-9c3d-d6f0d48968cf",
  "name": "My Application",
  "privacy": {
    "improve_ai": true
  },
  "keys": {
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFA\nASCBKcwggSjAgEAAoIBAQDEPpvi+3\nRH1efQ\\nkveWzZDrNNoEXmBw61w+O\n0u/N36tJnN5XnYecU64yHzu2ByEr0\n7iIvYbavFnADwl\\nHMTJwqDQakpa3\n8/SFRnTDq3zronvNZ6nOp7S6K7pcZ\nrw/CvrL6hXT1x7cGBZ4jPx\\nqhjqY\nuJPgZD7OVB69oYOV92vIIJ7JLYwqb\n-----END PRIVATE KEY-----\n",
    "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n"
  }
}
```

> 400 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "capabilities.voice.webhooks.answer_url.http_method",
      "reason": "must be one of: GET, POST"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/application#payload-validation"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.vonage.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "ID 'ABC123' does not exist, or you do not have access",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Not Found",
  "type": "https://developer.vonage.com/api-errors#not-found"
}
```

> 405 Response

```json
{
  "detail": "Request method 'TRACE' not supported",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Request method not allowed",
  "type": "https://developer.vonage.com/api-errors#wrong-verb"
}
```

> 406 Response

```json
{
  "detail": "Invalid Accept header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Accept header",
  "type": "https://developer.vonage.com/api-errors#accept-header"
}
```

> 415 Response

```json
{
  "detail": "Unsupported Content-Type header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Unsupported Content-Type header",
  "type": "https://developer.vonage.com/api-errors#content-type-header"
}
```

<h3 id="update-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Invalid Request|Inline|
|401|Unauthorized|Credential is missing or invalid|Inline|
|404|Not Found|Resource Not Found|Inline|
|405|Method Not Allowed|Invalid Request Method|Inline|
|406|Not Acceptable|Invalid Accept Header|Inline|
|415|Unsupported Media Type|Unsupported Content Type Header|Inline|

<h3 id="update-an-application-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[capabilities](#schemacapabilities)|false|none|Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.|
|id|string|false|none|The application's ID|
|name|string|false|none|Friendly identifier for your application. This is not unique|
|privacy|object|false|none|Application privacy config|
|» improve_ai|boolean|false|none|If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.|
|keys|object|false|none|none|
|» private_key|string|false|none|none|
|» public_key|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|invalid_parameters|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **415**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete an application

<a id="opIddeleteApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/78d335fa-323d-0114-9c3d-d6f0d48968cf \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /{id}`

Deleting an application **cannot be undone**.

<h3 id="delete-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the application|

> Example responses

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.vonage.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "ID 'ABC123' does not exist, or you do not have access",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Not Found",
  "type": "https://developer.vonage.com/api-errors#not-found"
}
```

> 405 Response

```json
{
  "detail": "Request method 'TRACE' not supported",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Request method not allowed",
  "type": "https://developer.vonage.com/api-errors#wrong-verb"
}
```

> 406 Response

```json
{
  "detail": "Invalid Accept header provided. Must be one of the following: 'application/json'",
  "instance": "797a8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Accept header",
  "type": "https://developer.vonage.com/api-errors#accept-header"
}
```

<h3 id="delete-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Credential is missing or invalid|Inline|
|404|Not Found|Resource Not Found|Inline|
|405|Method Not Allowed|Invalid Request Method|Inline|
|406|Not Acceptable|Invalid Accept Header|Inline|

<h3 id="delete-an-application-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|Instance ID|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_ApplicationResponse">ApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationresponse"></a>
<a id="schema_ApplicationResponse"></a>
<a id="tocSapplicationresponse"></a>
<a id="tocsapplicationresponse"></a>

```json
{
  "capabilities": {
    "meetings": {
      "webhooks": {
        "recording_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "room_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        },
        "session_changed": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "version": "string",
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "leg_persistence_time": 5,
      "signed_callbacks": true,
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {},
    "verify": {
      "version": "v2",
      "webhooks": {
        "status_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "voice": {
      "conversation_ttl": 30,
      "payments": {
        "gateways": [
          {
            "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            "mode": "live",
            "type": "Stripe"
          }
        ]
      },
      "signed_callbacks": true,
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        },
        "fallback_answer_url": {
          "address": "https://fallback.example.com/webhooks/answer",
          "connection_timeout": 500,
          "http_method": "POST",
          "socket_timeout": 3000
        }
      }
    }
  },
  "id": "78d335fa-323d-0114-9c3d-d6f0d48968cf",
  "name": "My Application",
  "privacy": {
    "improve_ai": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[capabilities](#schemacapabilities)|false|none|Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.|
|id|string|false|none|The application's ID|
|name|string|false|none|Friendly identifier for your application. This is not unique|
|privacy|object|false|none|Application privacy config|

<h2 id="tocS_ApplicationResponseCollection">ApplicationResponseCollection</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationresponsecollection"></a>
<a id="schema_ApplicationResponseCollection"></a>
<a id="tocSapplicationresponsecollection"></a>
<a id="tocsapplicationresponsecollection"></a>

```json
{
  "_embedded": {
    "applications": [
      {
        "capabilities": {
          "meetings": {
            "webhooks": {
              "recording_changed": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              },
              "room_changed": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              },
              "session_changed": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              }
            }
          },
          "messages": {
            "version": "string",
            "webhooks": {
              "inbound_url": {
                "address": "https://example.com/webhooks/inbound",
                "http_method": "POST"
              },
              "status_url": {
                "address": "https://example.com/webhooks/status",
                "http_method": "POST"
              }
            }
          },
          "rtc": {
            "leg_persistence_time": 5,
            "signed_callbacks": true,
            "webhooks": {
              "event_url": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              }
            }
          },
          "vbc": {},
          "verify": {
            "version": "v2",
            "webhooks": {
              "status_url": {
                "address": "https://example.com/webhooks/event",
                "http_method": "POST"
              }
            }
          },
          "voice": {
            "conversation_ttl": 30,
            "payments": {
              "gateways": [
                {
                  "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
                  "mode": "live",
                  "type": "Stripe"
                }
              ]
            },
            "signed_callbacks": true,
            "webhooks": {
              "answer_url": {
                "address": "https://example.com/webhooks/answer",
                "connection_timeout": 500,
                "http_method": "POST",
                "socket_timeout": 3000
              },
              "event_url": {
                "address": "https://example.com/webhooks/event",
                "connection_timeout": 500,
                "http_method": "POST",
                "socket_timeout": 3000
              },
              "fallback_answer_url": {
                "address": "https://fallback.example.com/webhooks/answer",
                "connection_timeout": 500,
                "http_method": "POST",
                "socket_timeout": 3000
              }
            }
          }
        },
        "id": "78d335fa-323d-0114-9c3d-d6f0d48968cf",
        "name": "My Application",
        "privacy": {
          "improve_ai": true
        }
      }
    ]
  },
  "page": 1,
  "page_size": 10,
  "total_items": 6,
  "total_pages": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|A list of applications matching your existing filters|
|page|integer|false|none|The current page number (starts at 1)|
|page_size|integer|false|none|The number of applications per page|
|total_items|integer|false|none|The total number of applications|
|total_pages|integer|false|none|The total number of pages returned|

<h2 id="tocS_MeetingsCapability">MeetingsCapability</h2>
<!-- backwards compatibility -->
<a id="schemameetingscapability"></a>
<a id="schema_MeetingsCapability"></a>
<a id="tocSmeetingscapability"></a>
<a id="tocsmeetingscapability"></a>

```json
{
  "webhooks": {
    "recording_changed": {
      "address": "https://example.com/webhooks/event",
      "http_method": "POST"
    },
    "room_changed": {
      "address": "https://example.com/webhooks/event",
      "http_method": "POST"
    },
    "session_changed": {
      "address": "https://example.com/webhooks/event",
      "http_method": "POST"
    }
  }
}
```

Meetings related configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|object|false|none|none|

<h2 id="tocS_MessagesCapability">MessagesCapability</h2>
<!-- backwards compatibility -->
<a id="schemamessagescapability"></a>
<a id="schema_MessagesCapability"></a>
<a id="tocSmessagescapability"></a>
<a id="tocsmessagescapability"></a>

```json
{
  "version": "string",
  "webhooks": {
    "inbound_url": {
      "address": "https://example.com/webhooks/inbound",
      "http_method": "POST"
    },
    "status_url": {
      "address": "https://example.com/webhooks/status",
      "http_method": "POST"
    }
  }
}
```

Messages / Dispatch related configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|If not populated will be set to v1|
|webhooks|object|false|none|none|

<h2 id="tocS_RtcCapability">RtcCapability</h2>
<!-- backwards compatibility -->
<a id="schemartccapability"></a>
<a id="schema_RtcCapability"></a>
<a id="tocSrtccapability"></a>
<a id="tocsrtccapability"></a>

```json
{
  "leg_persistence_time": 5,
  "signed_callbacks": true,
  "webhooks": {
    "event_url": {
      "address": "https://example.com/webhooks/event",
      "http_method": "POST"
    }
  }
}
```

RTC / Conversation Service related configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leg_persistence_time|integer(int32)|false|none|none|
|signed_callbacks|boolean|false|none|none|
|webhooks|object|false|none|none|

<h2 id="tocS_VerifyCapability">VerifyCapability</h2>
<!-- backwards compatibility -->
<a id="schemaverifycapability"></a>
<a id="schema_VerifyCapability"></a>
<a id="tocSverifycapability"></a>
<a id="tocsverifycapability"></a>

```json
{
  "version": "v2",
  "webhooks": {
    "status_url": {
      "address": "https://example.com/webhooks/event",
      "http_method": "POST"
    }
  }
}
```

Two factor authentication related configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Verify current version. If specified must be set to v2|
|webhooks|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|version|v2|

<h2 id="tocS_VoiceCapability">VoiceCapability</h2>
<!-- backwards compatibility -->
<a id="schemavoicecapability"></a>
<a id="schema_VoiceCapability"></a>
<a id="tocSvoicecapability"></a>
<a id="tocsvoicecapability"></a>

```json
{
  "conversation_ttl": 30,
  "payments": {
    "gateways": [
      {
        "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
        "mode": "live",
        "type": "Stripe"
      }
    ]
  },
  "signed_callbacks": true,
  "webhooks": {
    "answer_url": {
      "address": "https://example.com/webhooks/answer",
      "connection_timeout": 500,
      "http_method": "POST",
      "socket_timeout": 3000
    },
    "event_url": {
      "address": "https://example.com/webhooks/event",
      "connection_timeout": 500,
      "http_method": "POST",
      "socket_timeout": 3000
    },
    "fallback_answer_url": {
      "address": "https://fallback.example.com/webhooks/answer",
      "connection_timeout": 500,
      "http_method": "POST",
      "socket_timeout": 3000
    }
  }
}
```

Voice related configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_ttl|integer|false|none|ttl used by the NCCO in case you’re using a conversation action (is set in hours and is 48 by default)|
|payments|object|false|none|encompass all the payment related fields|
|signed_callbacks|boolean|false|none|verify that a request is coming from Vonage servers (a jwt token will be sent on the callback authorization header)|
|webhooks|object|false|none|none|

<h2 id="tocS_capabilities">capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "meetings": {
    "webhooks": {
      "recording_changed": {
        "address": "https://example.com/webhooks/event",
        "http_method": "POST"
      },
      "room_changed": {
        "address": "https://example.com/webhooks/event",
        "http_method": "POST"
      },
      "session_changed": {
        "address": "https://example.com/webhooks/event",
        "http_method": "POST"
      }
    }
  },
  "messages": {
    "version": "string",
    "webhooks": {
      "inbound_url": {
        "address": "https://example.com/webhooks/inbound",
        "http_method": "POST"
      },
      "status_url": {
        "address": "https://example.com/webhooks/status",
        "http_method": "POST"
      }
    }
  },
  "rtc": {
    "leg_persistence_time": 5,
    "signed_callbacks": true,
    "webhooks": {
      "event_url": {
        "address": "https://example.com/webhooks/event",
        "http_method": "POST"
      }
    }
  },
  "vbc": {},
  "verify": {
    "version": "v2",
    "webhooks": {
      "status_url": {
        "address": "https://example.com/webhooks/event",
        "http_method": "POST"
      }
    }
  },
  "voice": {
    "conversation_ttl": 30,
    "payments": {
      "gateways": [
        {
          "credential": "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
          "mode": "live",
          "type": "Stripe"
        }
      ]
    },
    "signed_callbacks": true,
    "webhooks": {
      "answer_url": {
        "address": "https://example.com/webhooks/answer",
        "connection_timeout": 500,
        "http_method": "POST",
        "socket_timeout": 3000
      },
      "event_url": {
        "address": "https://example.com/webhooks/event",
        "connection_timeout": 500,
        "http_method": "POST",
        "socket_timeout": 3000
      },
      "fallback_answer_url": {
        "address": "https://fallback.example.com/webhooks/answer",
        "connection_timeout": 500,
        "http_method": "POST",
        "socket_timeout": 3000
      }
    }
  }
}
```

Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meetings|[MeetingsCapability](#schemameetingscapability)|false|none|Meetings related configuration|
|messages|[MessagesCapability](#schemamessagescapability)|false|none|Messages / Dispatch related configuration|
|rtc|[RtcCapability](#schemartccapability)|false|none|RTC / Conversation Service related configuration|
|vbc|object|false|none|Specify the `vbc` capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object.|
|verify|[VerifyCapability](#schemaverifycapability)|false|none|Two factor authentication related configuration|
|voice|[VoiceCapability](#schemavoicecapability)|false|none|Voice related configuration|
