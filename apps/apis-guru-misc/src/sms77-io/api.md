<h1 id="sms77io-api">sms77.io API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

sms77.io Swagger API. Get your API-Key now at sms77.io.

Base URLs:

* <a href="https://gateway.sms77.io/api">https://gateway.sms77.io/api</a>

<a href="https://sms77.io/en/company/terms/">Terms of service</a>
Email: <a href="mailto:support@sms77.io">Support</a> 
Web: <a href="https://sms77.io/en/company/contact">Support</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Licensed by Apache 2.0</a>

<a href="https://sms77.io/en/docs/gateway/http-api">Find out more about the Sms77.io SMS gateway.</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

<h1 id="sms77io-api-analytics">analytics</h1>

<a href="https://www.sms77.io/en/docs/gateway/http-api/analytics">Retrieve analytics</a>

## Analytics

<a id="opIdAnalytics"></a>

> Code samples

```bash
curl https://example.com/analytics \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /analytics`

<h3 id="analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string|false|Start date of the statistics in the format YYYY-MM-DD. By default, the date of 30 days ago is set.|
|end|query|string|false|End date of the statistics in the format YYYY-MM-DD. By default, the current day.|
|label|query|string|false|Shows only data of a specific label.|
|subaccounts|query|string|false|Receive the data only for the main account, all your (sub-)accounts or only for specific subaccounts.|
|group_by|query|string|false|Defines the grouping of the data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group_by|date|
|group_by|label|
|group_by|subaccount|
|group_by|country|

> Example responses

> 200 Response

```json
{
  "date": "string",
  "direct": 0,
  "economy": 0,
  "hlr": 0,
  "inbound": 0,
  "mnp": 0,
  "usage_eur": 0,
  "voice": 0
}
```

<h3 id="analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="analytics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|none|
|direct|integer|false|none|none|
|economy|integer|false|none|none|
|hlr|integer|false|none|none|
|inbound|integer|false|none|none|
|mnp|integer|false|none|none|
|usage_eur|number(float)|false|none|none|
|voice|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-sms">sms</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/sms-disptach">Send one/multiple SMS</a>

## Sms

<a id="opIdSms"></a>

> Code samples

```bash
curl 'https://example.com/sms?text=string&to=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /sms`

<h3 id="sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|The actual text message to send.|
|to|query|string|true|The recipient number or group name.|
|from|query|string|false|Set a custom sender name.|
|foreign_id|query|string|false|Identifier to return in callbacks.|
|label|query|string|false|A custom label.|
|udh|query|string|false|A custom User Data Header.|
|delay|query|string|false|Date/Time for delayed dispatch.|
|debug|query|number|false|Disable message sending.|
|no_reload|query|number|false|Enable sending of duplicated messages within 180 seconds.|
|unicode|query|number|false|Force unicode encoding. Reduces sms length to 70 chars.|
|flash|query|number|false|Send as flash.|
|utf8|query|number|false|Force UTF8 encoding.|
|details|query|number|false|Attach message details to response.|
|return_msg_id|query|number|false|Attach message ID to second row in a text response.|
|json|query|number|false|Return a detailed JSON response.|
|performance_tracking|query|number|false|Enable performance tracking for found URLs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|debug|1|
|debug|0|
|no_reload|1|
|no_reload|0|
|unicode|1|
|unicode|0|
|flash|1|
|flash|0|
|utf8|1|
|utf8|0|
|details|1|
|details|0|
|return_msg_id|1|
|return_msg_id|0|
|json|1|
|json|0|
|performance_tracking|1|
|performance_tracking|0|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "debug": "string",
  "messages": [
    {
      "encoding": "string",
      "error": "string",
      "error_text": "string",
      "id": "string",
      "messages": [
        "string"
      ],
      "parts": 0,
      "price": 0,
      "recipient": "string",
      "sender": "string",
      "success": true,
      "text": "string"
    }
  ],
  "sms_type": "economy",
  "success": "string",
  "total_price": 0
}
```

<h3 id="sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="sms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number(float)|false|none|none|
|debug|string|false|none|none|
|messages|[object]|false|none|none|
|» encoding|string|false|none|none|
|» error|string|false|none|none|
|» error_text|string|false|none|none|
|» id|string|false|none|none|
|» messages|[string]|false|none|none|
|» parts|integer|false|none|none|
|» price|integer|false|none|none|
|» recipient|string|false|none|none|
|» sender|string|false|none|none|
|» success|boolean|false|none|none|
|» text|string|false|none|none|
|sms_type|string|false|none|none|
|success|string|false|none|none|
|total_price|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sms_type|economy|
|sms_type|direct|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-balance">balance</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/credit-balance">Retrieve account balance</a>

## Balance

<a id="opIdBalance"></a>

> Code samples

```bash
curl https://example.com/balance \
  -H "X-API-Key: ${API_KEY}"
```

`GET /balance`

<h3 id="balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-contacts">contacts</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/contacts">Retrieve/edit/delete contact(s)</a>

## ContactsGet

<a id="opIdContactsGet"></a>

> Code samples

```bash
curl 'https://example.com/contacts?action=read' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /contacts`

<h3 id="contactsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|Determines the action to execute.|
|json|query|number|false|Defines whether to return the response as JSON or CSV separated by semicolon.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|read|
|json|0|
|json|1|

> Example responses

> 200 Response

```json
"\"1\";\"Tommy Tester\";\"0049179876543210\""
```

<h3 id="contactsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK (CSV)|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## ContactsPOST

<a id="opIdContactsPOST"></a>

> Code samples

```bash
curl 'https://example.com/contacts?action=del' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /contacts`

<h3 id="contactspost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|Determines the action to execute.|
|json|query|number|false|Defines whether to return the response as JSON or CSV separated by semicolon.|
|id|query|string|false|The contact ID for editing/deletion.|
|nick|query|string|false|The contacts name.|
|empfaenger|query|string|false|The contacts phone number.|
|email|query|string|false|The contacts email address.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|del|
|action|write|
|json|0|
|json|1|

> Example responses

> 200 Response

```json
152
```

<h3 id="contactspost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-pricing">pricing</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/pricing">Retrieve pricing information</a>

## Pricing

<a id="opIdPricing"></a>

> Code samples

```bash
curl https://example.com/pricing \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /pricing`

<h3 id="pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|The countries ISO code to get pricings for. Allowed values are de, fr, at. Omit to show pricings for all channels.|
|format|query|string|false|Determines the response format. Allowed values are json and csv. The default value is json.|

> Example responses

> 200 Response

```json
{
  "schema": {
    "properties": {
      "countCountries": {
        "description": "The number if countries in total.",
        "type": "integer"
      },
      "countNetworks": {
        "description": "The number of total networks.",
        "type": "integer"
      },
      "countries": {
        "items": {
          "properties": {
            "countryCode": {
              "description": "The countries ISO code.",
              "type": "string"
            },
            "countryName": {
              "description": "The countries full name.",
              "type": "string"
            },
            "countryPrefix": {
              "description": "The countries number prefix.",
              "type": "string"
            },
            "networks": {
              "items": {
                "properties": {
                  "comment": {
                    "description": "Any information which might be of interest.",
                    "type": "string"
                  },
                  "features": {
                    "description": "The features supported by this network.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "mcc": {
                    "description": "The mobile country code.",
                    "type": "string"
                  },
                  "mncs": {
                    "description": "The mobile network code(s).",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "networkName": {
                    "description": "The full name of the carrier.",
                    "type": "string"
                  },
                  "price": {
                    "format": "float",
                    "type": "number"
                  }
                },
                "type": "object"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "type": "array"
      }
    },
    "type": "object"
  }
}
```

<h3 id="pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-status">status</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/status-reports">Retrieve the status for a sent SMS with the given ID</a>

## Status

<a id="opIdStatus"></a>

> Code samples

```bash
curl 'https://example.com/status?msg_id=string' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /status`

<h3 id="status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|msg_id|query|string|true|The ID from the SMS.|

<h3 id="status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-validateforvoice">validate_for_voice</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/caller-ids">Validate caller ID for voice Voice API</a>

## ValidateForVoice

<a id="opIdValidateForVoice"></a>

> Code samples

```bash
curl 'https://example.com/validate_for_voice?number=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /validate_for_voice`

<h3 id="validateforvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string|true|Determines the recipient. Can only be a number, not a contact from your address book.|
|callback|query|string(uri)|false|The callback URL which gets queried right after validation.|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "error": "string",
  "success": true
}
```

<h3 id="validateforvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="validateforvoice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|error|string|false|none|none|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-voice">voice</h1>

<a href="https://sms77.io/en/docs/gateway/http-api/voice">Issue voice call to phone number</a>

## Voice

<a id="opIdVoice"></a>

> Code samples

```bash
curl 'https://example.com/voice?to=string&text=string' \
  -X POST \
  -H "X-API-Key: ${API_KEY}"
```

`POST /voice`

<h3 id="voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|to|query|string|true|Determines the receiver. Must be a valid phone number or contact from the address book.|
|text|query|string|true|The text to convert to a voice message. Accepts valid XML too.|
|xml|query|number|false|Decides whether the parameter "text" is plain text or XML. The default value is 0.|
|from|query|string|false|Sets the sender. Must be a verified sender. Use an inbound number of yours or one of ours.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|xml|1|
|xml|0|

<h3 id="voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-lookup">lookup</h1>

<a href="https://sms77.io/en/docs/gateway/http-api">Get number format, CNAM,- HLR- or MNP information for given phone number</a>

## Lookup

<a id="opIdLookup"></a>

> Code samples

```bash
curl 'https://example.com/lookup?type=string&number=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /lookup`

<h3 id="lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Allowed values are "cnam", "format", "hlr" and "mnp".|
|number|query|[string]|true|The phone number to look up.|
|json|query|string|false|Determines whether the response shall be returned in JSON format. Does not work with type "format".|

> Example responses

> 200 Response

```json
{
  "schema": {
    "properties": {
      "carrier": {
        "description": "The (former) mobile carrier the number got issued to on initial number release.",
        "type": "string"
      },
      "code": {
        "enum": [
          100,
          202,
          500,
          600
        ],
        "type": "number"
      },
      "country_code": {
        "description": "The area code of the number belonging country. This value is numeric.",
        "type": "string"
      },
      "country_code_iso3": {
        "type": "string"
      },
      "country_iso": {
        "description": "The two digit ISO 3166-1 alpha-2 country code.",
        "type": "string"
      },
      "country_name": {
        "description": "The full english name if the number belonging country.",
        "type": "string"
      },
      "country_prefix": {
        "type": "string"
      },
      "current_carrier": {
        "schema": {
          "$ref": "#/components/schemas/Carrier"
        }
      },
      "international": {
        "description": "The number formatted accordingly to the E.164 standard.",
        "type": "string"
      },
      "international_format_number": {
        "type": "string"
      },
      "international_formatted": {
        "description": "The number formatted accordingly to the E.164 standard in a human readable format.",
        "type": "string"
      },
      "lookup_outcome": {
        "type": "string"
      },
      "lookup_outcome_message": {
        "type": "string"
      },
      "name": {
        "description": "The carrier name",
        "type": "string"
      },
      "national": {
        "description": "The number in a domestic number format.",
        "type": "string"
      },
      "national_format_number": {
        "type": "string"
      },
      "number": {
        "description": "The number formatted accordingly to the E.164 standard in a human readable format.",
        "type": "string"
      },
      "original_carrier": {
        "schema": {
          "$ref": "#/components/schemas/Carrier"
        }
      },
      "ported": {
        "enum": [
          "unknown",
          "ported",
          "not_ported",
          "assumed_not_ported",
          "assumed_ported"
        ],
        "type": "string"
      },
      "reachable": {
        "enum": [
          "unknown",
          "reachable",
          "undeliverable",
          "absent",
          "bad_number",
          "blacklisted"
        ],
        "type": "string"
      },
      "roaming": {
        "schema": {
          "$ref": "#/components/schemas/Roaming"
        }
      },
      "status": {
        "type": "string"
      },
      "success": {
        "description": "Determines if the request was successful.,",
        "type": "boolean"
      },
      "valid_number": {
        "type": "string"
      }
    },
    "type": "object"
  }
}
```

<h3 id="lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## LookupCnam

<a id="opIdLookupCnam"></a>

> Code samples

```bash
curl 'https://example.com/lookup/cnam?number=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /lookup/cnam`

<h3 id="lookupcnam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|[string]|true|The phone number to look up.|

> Example responses

> 200 Response

```json
{
  "schema": {
    "properties": {
      "code": {
        "description": "The API status code",
        "enum": [
          100
        ],
        "type": "number"
      },
      "name": {
        "description": "The country for given phone number",
        "type": "string"
      },
      "number": {
        "description": "The phone number that was looked up",
        "type": "string"
      },
      "success": {
        "description": "Whether the request was successful or not",
        "enum": [
          true,
          false
        ],
        "type": "string"
      }
    },
    "type": "object"
  }
}
```

<h3 id="lookupcnam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## LookupFormat

<a id="opIdLookupFormat"></a>

> Code samples

```bash
curl 'https://example.com/lookup/format?number=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /lookup/format`

<h3 id="lookupformat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|[string]|true|The phone number to look up.|

> Example responses

> 200 Response

```json
{
  "schema": {
    "properties": {
      "carrier": {
        "description": "Network operator to whom the call number was originally assigned.",
        "type": "string"
      },
      "country_code": {
        "description": "Country code of the queried number – international without leading “00”.",
        "type": "string"
      },
      "country_iso": {
        "description": "Country code of the phone number in the format ISO 3166-1 alpha-2 (two letters).",
        "type": "string"
      },
      "country_name": {
        "description": "The full name of the country of the queried phone number in English.",
        "type": "string"
      },
      "international": {
        "description": "International E.164 format of the queried phone number.",
        "type": "string"
      },
      "international_formatted": {
        "description": "The international number.",
        "type": "string"
      },
      "national": {
        "description": "National format of the queried phone number.",
        "type": "string"
      },
      "network_type": {
        "description": "The type of network for the requested number.",
        "type": "string"
      },
      "success": {
        "description": "Whether the request was successful or not.",
        "type": "boolean"
      }
    },
    "type": "object"
  }
}
```

<h3 id="lookupformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## LookupHlr

<a id="opIdLookupHlr"></a>

> Code samples

```bash
curl 'https://example.com/lookup/hlr?number=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /lookup/hlr`

<h3 id="lookuphlr-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|[string]|true|The phone number to look up.|

> Example responses

> 200 Response

```json
{
  "schema": {
    "properties": {
      "country_code": {
        "description": "The area code of the number belonging country. This value is numeric.",
        "type": "string"
      },
      "country_code_iso3": {
        "type": "string"
      },
      "country_name": {
        "description": "The full english name if the number belonging country.",
        "type": "string"
      },
      "country_prefix": {
        "type": "string"
      },
      "current_carrier": {
        "schema": {
          "$ref": "#/components/schemas/Carrier"
        }
      },
      "gsm_code": {
        "type": "string"
      },
      "gsm_message": {
        "type": "string"
      },
      "international_format_number": {
        "type": "string"
      },
      "international_formatted": {
        "description": "The number formatted accordingly to the E.164 standard in a human readable format.",
        "type": "string"
      },
      "lookup_outcome": {
        "type": "string"
      },
      "lookup_outcome_message": {
        "type": "string"
      },
      "national_format_number": {
        "type": "string"
      },
      "original_carrier": {
        "schema": {
          "$ref": "#/components/schemas/Carrier"
        }
      },
      "ported": {
        "enum": [
          "unknown",
          "ported",
          "not_ported",
          "assumed_not_ported",
          "assumed_ported"
        ],
        "type": "string"
      },
      "reachable": {
        "enum": [
          "unknown",
          "reachable",
          "undeliverable",
          "absent",
          "bad_number",
          "blacklisted"
        ],
        "type": "string"
      },
      "roaming": {
        "schema": {
          "$ref": "#/components/schemas/Roaming"
        }
      },
      "status": {
        "type": "boolean"
      },
      "status_message": {
        "type": "string"
      },
      "valid_number": {
        "type": "string"
      }
    },
    "type": "object"
  }
}
```

<h3 id="lookuphlr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## LookupMnp

<a id="opIdLookupMnp"></a>

> Code samples

```bash
curl 'https://example.com/lookup/mnp?number=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /lookup/mnp`

<h3 id="lookupmnp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|[string]|true|The phone number to look up.|
|json|query|string|false|Determines whether the response shall be returned in JSON format.|

> Example responses

> 200 Response

```json
{
  "schema": {
    "properties": {
      "code": {
        "enum": [
          100,
          202,
          500,
          600
        ],
        "type": "number"
      },
      "mnp": {
        "schema": {
          "$ref": "#/components/schemas/Mnp"
        }
      },
      "price": {
        "type": "float"
      },
      "success": {
        "description": "Determines if the request was successful.,",
        "type": "boolean"
      }
    },
    "type": "object"
  }
}
```

<h3 id="lookupmnp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="sms77io-api-hooks">hooks</h1>

<a href="https://www.sms77.io/en/docs/gateway/http-api/webhooks/">Create, view and delete webhooks</a>

## HooksGet

<a id="opIdHooksGet"></a>

> Code samples

```bash
curl 'https://example.com/hooks?action=read' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /hooks`

<h3 id="hooksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|Determines the action to execute.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|read|

> Example responses

> 200 Response

```json
{
  "hooks": [
    {
      "created": "string",
      "event_type": "string",
      "id": "string",
      "request_method": "string",
      "target_url": "string"
    }
  ],
  "success": true
}
```

<h3 id="hooksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="hooksget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hooks|[object]|false|none|none|
|» created|string|false|none|none|
|» event_type|string|false|none|none|
|» id|string|false|none|none|
|» request_method|string|false|none|none|
|» target_url|string|false|none|none|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## HooksPOST

<a id="opIdHooksPOST"></a>

> Code samples

```bash
curl 'https://example.com/hooks?action=subscribe' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /hooks`

<h3 id="hookspost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|Determines the action to execute.|
|id|query|integer|false|The Webhook ID you wish to unsubscribe.|
|target_url|query|string|false|Target URL of your Webhook.|
|event_type|query|string|false|Type of event for which you would like to receive a webhook.|
|request_method|query|string|false|Request method in which you want to receive the webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|subscribe|
|action|unsubscribe|
|event_type|all|
|event_type|sms_mo|
|event_type|dlr|
|event_type|voice_status|
|request_method|POST|
|request_method|JSON|
|request_method|GET|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "success": true
}
```

<h3 id="hookspost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Hook subscribed|Inline|

<h3 id="hookspost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Carrier">Carrier</h2>
<!-- backwards compatibility -->
<a id="schemacarrier"></a>
<a id="schema_Carrier"></a>
<a id="tocScarrier"></a>
<a id="tocscarrier"></a>

```json
{
  "country": "string",
  "name": "string",
  "network_code": "string",
  "network_type": "fixed_line"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|name|string|false|none|none|
|network_code|string|false|none|none|
|network_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|network_type|fixed_line|
|network_type|fixed_line_or_mobile|
|network_type|mobile|
|network_type|pager|
|network_type|personal_number|
|network_type|premium_rate|
|network_type|shared_cost|
|network_type|toll_free|
|network_type|uan|
|network_type|unknown|
|network_type|voicemail|
|network_type|voip|

<h2 id="tocS_Mnp">Mnp</h2>
<!-- backwards compatibility -->
<a id="schemamnp"></a>
<a id="schema_Mnp"></a>
<a id="tocSmnp"></a>
<a id="tocsmnp"></a>

```json
{
  "country": "string",
  "international_formatted": "string",
  "isPorted": true,
  "mccmnc": "string",
  "national_format": "string",
  "network": "string",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|international_formatted|string|false|none|none|
|isPorted|boolean|false|none|none|
|mccmnc|string|false|none|none|
|national_format|string|false|none|none|
|network|string|false|none|none|
|number|string|false|none|none|

<h2 id="tocS_Roaming">Roaming</h2>
<!-- backwards compatibility -->
<a id="schemaroaming"></a>
<a id="schema_Roaming"></a>
<a id="tocSroaming"></a>
<a id="tocsroaming"></a>

```json
{
  "roaming_country_code": "string",
  "roaming_network_code": "string",
  "roaming_network_name": "string",
  "status": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roaming_country_code|string|false|none|none|
|roaming_network_code|string|false|none|none|
|roaming_network_name|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unknown|
|status|roaming|
|status|not_roaming|
