<h1 id="vectara-rest-api">Vectara REST API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Vectara is a neural search platform, built for developers to get the most out of their data.

You can sign up for an account at [https://vectara.com](https://vectara.com).

Base URLs:

* <a href="https://api.vectara.io">https://api.vectara.io</a>

<a href="https://vectara.com/legal/online-customer-agreement/">Terms of service</a>
Email: <a href="mailto:support@vectara.com">Vectara Support</a> 
Web: <a href="http://support.vectara.com/">Vectara Support</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **x-api-key**, in: header.

- oAuth2 authentication. OAuth2 access to Vectara

    - Flow: clientCredentials
    - Token URL = [https://vectara-prod-YOUR_VECTARA_CUSTOMER_ID.auth.us-west-2.amazoncognito.com/oauth2/token](https://vectara-prod-YOUR_VECTARA_CUSTOMER_ID.auth.us-west-2.amazoncognito.com/oauth2/token)

<h1 id="vectara-rest-api-adminservice">AdminService</h1>

Administrative services, such as creating or deleting corpora

## CreateCorpus

<a id="opIdCreateCorpus"></a>

> Code samples

```bash
curl https://example.com/v1/create-corpus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'customer-id: 0' \
  -d '{
    "corpus": {
      "customDimensions": [
        {
          "description": "string",
          "indexingDefault": 0,
          "name": "string",
          "servingDefault": 0
        }
      ],
      "description": "string",
      "dtProvision": "string",
      "enabled": true,
      "encoderId": "string",
      "encrypted": true,
      "filterAttributes": [
        {
          "description": "string",
          "indexed": true,
          "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
          "name": "string",
          "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
        }
      ],
      "id": 0,
      "metadataMaxBytes": 0,
      "name": "string",
      "swapIenc": true,
      "swapQenc": true,
      "textless": true
    }
  }'
```

`POST /v1/create-corpus`

Create Corpus

> Body parameter

```json
{
  "corpus": {
    "customDimensions": [
      {
        "description": "string",
        "indexingDefault": 0,
        "name": "string",
        "servingDefault": 0
      }
    ],
    "description": "string",
    "dtProvision": "string",
    "enabled": true,
    "encoderId": "string",
    "encrypted": true,
    "filterAttributes": [
      {
        "description": "string",
        "indexed": true,
        "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
        "name": "string",
        "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
      }
    ],
    "id": 0,
    "metadataMaxBytes": 0,
    "name": "string",
    "swapIenc": true,
    "swapQenc": true,
    "textless": true
  }
}
```

<h3 id="createcorpus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[adminCreateCorpusRequest](#schemaadmincreatecorpusrequest)|true|none|
|» corpus|body|[adminCorpus](#schemaadmincorpus)|false|none|

> Example responses

> 200 Response

```json
{
  "corpusId": 0,
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="createcorpus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[adminCreateCorpusResponse](#schemaadmincreatecorpusresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oAuth
</aside>

## DeleteCorpus

<a id="opIdDeleteCorpus"></a>

> Code samples

```bash
curl https://example.com/v1/delete-corpus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'customer-id: 0' \
  -d '{
    "corpusId": 0,
    "customerId": 0
  }'
```

`POST /v1/delete-corpus`

Delete Corpus

> Body parameter

```json
{
  "corpusId": 0,
  "customerId": 0
}
```

<h3 id="deletecorpus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[adminDeleteCorpusRequest](#schemaadmindeletecorpusrequest)|true|none|
|» corpusId|body|integer(int64)|false|The Corpus ID to be deleted.|
|» customerId|body|integer(int64)|false|The Customer ID that contains the corpus to be deleted.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="deletecorpus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[adminDeleteCorpusResponse](#schemaadmindeletecorpusresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oAuth
</aside>

## ListCorpora

<a id="opIdListCorpora"></a>

> Code samples

```bash
curl https://example.com/v1/list-corpora \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'customer-id: 0' \
  -d '{
    "filter": "string",
    "numResults": 0,
    "pageKey": "string"
  }'
```

`POST /v1/list-corpora`

List Corpora

> Body parameter

```json
{
  "filter": "string",
  "numResults": 0,
  "pageKey": "string"
}
```

<h3 id="listcorpora-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[adminListCorporaRequest](#schemaadminlistcorporarequest)|true|none|
|» filter|body|string|false|A regex to match corpora against.|
|» numResults|body|integer(int64)|false|The maximum results to return.|
|» pageKey|body|string(byte)|false|A key that is passed in to retrieve a specific page of results.|

> Example responses

> 200 Response

```json
{
  "corpus": [
    {
      "customDimensions": [
        {
          "description": "string",
          "indexingDefault": 0,
          "name": "string",
          "servingDefault": 0
        }
      ],
      "description": "string",
      "dtProvision": "string",
      "enabled": true,
      "encoderId": "string",
      "encrypted": true,
      "filterAttributes": [
        {
          "description": "string",
          "indexed": true,
          "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
          "name": "string",
          "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
        }
      ],
      "id": 0,
      "metadataMaxBytes": 0,
      "name": "string",
      "swapIenc": true,
      "swapQenc": true,
      "textless": true
    }
  ],
  "pageKey": "string",
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="listcorpora-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[adminListCorporaResponse](#schemaadminlistcorporaresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oAuth
</aside>

## ResetCorpus

<a id="opIdResetCorpus"></a>

> Code samples

```bash
curl https://example.com/v1/reset-corpus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'customer-id: 0' \
  -d '{
    "corpusId": 0,
    "customerId": 0
  }'
```

`POST /v1/reset-corpus`

Reset Corpus

> Body parameter

```json
{
  "corpusId": 0,
  "customerId": 0
}
```

<h3 id="resetcorpus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[adminResetCorpusRequest](#schemaadminresetcorpusrequest)|true|none|
|» corpusId|body|integer(int64)|false|The Corpus ID to be reset.|
|» customerId|body|integer(int64)|false|The Customer ID that contains the corpus to be reset.|

> Example responses

> 200 Response

```json
{
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="resetcorpus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[adminResetCorpusResponse](#schemaadminresetcorpusresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oAuth
</aside>

<h1 id="vectara-rest-api-indexservice">IndexService</h1>

Indexing operations, such as creating and deleting documents

## Delete

<a id="opIdDelete"></a>

> Code samples

```bash
curl https://example.com/v1/delete-doc \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'customer-id: 0' \
  -d '{
    "corpusId": "string",
    "customerId": "string",
    "documentId": "string"
  }'
```

`POST /v1/delete-doc`

Delete

> Body parameter

```json
{
  "corpusId": "string",
  "customerId": "string",
  "documentId": "string"
}
```

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[vectaraDeleteDocumentRequest](#schemavectaradeletedocumentrequest)|true|none|
|» corpusId|body|string(int64)|false|The Corpus ID that contains the document.|
|» customerId|body|string(int64)|false|The Customer ID to issue the request for.|
|» documentId|body|string|false|The Document ID to be deleted.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[vectaraDeleteDocumentResponse](#schemavectaradeletedocumentresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, oAuth
</aside>

## Index

<a id="opIdIndex"></a>

> Code samples

```bash
curl https://example.com/v1/index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'customer-id: 0' \
  -d '{
    "corpusId": "string",
    "customerId": "string",
    "document": {
      "customDims": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "description": "string",
      "documentId": "string",
      "metadataJson": "string",
      "section": [
        {
          "customDims": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "id": 0,
          "metadataJson": "string",
          "section": [
            {}
          ],
          "text": "string",
          "title": "string"
        }
      ],
      "title": "string"
    }
  }'
```

`POST /v1/index`

Index

> Body parameter

```json
{
  "corpusId": "string",
  "customerId": "string",
  "document": {
    "customDims": [
      {
        "name": "string",
        "value": 0
      }
    ],
    "description": "string",
    "documentId": "string",
    "metadataJson": "string",
    "section": [
      {
        "customDims": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "id": 0,
        "metadataJson": "string",
        "section": [
          {}
        ],
        "text": "string",
        "title": "string"
      }
    ],
    "title": "string"
  }
}
```

<h3 id="index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[vectaraIndexDocumentRequest](#schemavectaraindexdocumentrequest)|true|none|
|» corpusId|body|string(int64)|false|none|
|» customerId|body|string(int64)|false|none|
|» document|body|[vectaraindexingDocument](#schemavectaraindexingdocument)|false|A document to index.|

> Example responses

> 200 Response

```json
{
  "quotaConsumed": {
    "numChars": "string",
    "numMetadataChars": "string"
  },
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[vectaraIndexDocumentResponse](#schemavectaraindexdocumentresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, oAuth
</aside>

## FileUpload

<a id="opIdFileUpload"></a>

> Code samples

```bash
curl 'https://example.com/v1/upload?c=0&o=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -F 'doc_metadata=string' \
  -F 'file=@/path/to/file'
```

`POST /v1/upload`

File Upload

> Body parameter

```yaml
doc_metadata: string
file: string
```

<h3 id="fileupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|c|query|integer|true|Customer ID|
|o|query|integer|true|Corpus ID|
|d|query|boolean|false|If true, the server returns the extracted document that was indexed|
|body|body|object|false|none|
|» doc_metadata|body|string|false|A JSON string of any additional metadata you want attached to the file.|
|» file|body|string(binary)|false|The file to be indexed into Vectara.|

> Example responses

> 200 Response

```json
{
  "response": {
    "quotaConsumed": {
      "numChars": "string",
      "numMetadataChars": "string"
    },
    "status": {}
  }
}
```

> 400 Response

```json
{
  "httpCode": 0
}
```

<h3 id="fileupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|Inline|
|400|Bad Request|An invalid request was sent.  e.g. one or more parameters was missing, or the corpus does not exist.|Inline|
|401|Unauthorized|The request was not authenticated|None|
|403|Forbidden|The caller is not authorized to add documents to the corpus|None|
|409|Conflict|A document already exists in the corpus with the same document ID, yet the contents of the indexed document are different than the file being uploaded.<br>Since the indexer is idempotent, the same document (identified by the document ID) can be uploaded multiple times.<br>The indexer does not support updates yet, so an error is returned when a different document is uploaded for the same document ID<br>Note that when a raw file is uploaded, the file name is used as the document ID.|None|
|507|Insufficient Storage|There is no more indexing quota left for the corpus or customer to index more documents.  Upgrade your account, add a credit card, or contact sales.|None|

<h3 id="fileupload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|none|
|» quotaConsumed|object|false|none|none|
|» » numChars|string|false|none|The number of characters Vectara indexed from the file uploaded.|
|» » numMetadataChars|string|false|none|The number of metadata characters Vectara indexed from the file uploaded.|
|» status|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpCode|integer|false|none|Returned HTTP code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, oAuth
</aside>

<h1 id="vectara-rest-api-queryservice">QueryService</h1>

Query operations, such as performing a standard search

## Query

<a id="opIdQuery"></a>

> Code samples

```bash
curl https://example.com/v1/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'customer-id: 0' \
  -d '{
    "query": [
      {
        "corpusKey": [
          {
            "corpusId": 0,
            "customerId": 0,
            "dim": [
              {
                "name": "string",
                "weight": 0
              }
            ],
            "metadataFilter": "string",
            "semantics": "DEFAULT"
          }
        ],
        "numResults": 0,
        "query": "string",
        "rerankingConfig": {
          "rerankerId": 0
        },
        "start": 0
      }
    ]
  }'
```

`POST /v1/query`

Query

> Body parameter

```json
{
  "query": [
    {
      "corpusKey": [
        {
          "corpusId": 0,
          "customerId": 0,
          "dim": [
            {
              "name": "string",
              "weight": 0
            }
          ],
          "metadataFilter": "string",
          "semantics": "DEFAULT"
        }
      ],
      "numResults": 0,
      "query": "string",
      "rerankingConfig": {
        "rerankerId": 0
      },
      "start": 0
    }
  ]
}
```

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[servingBatchQueryRequest](#schemaservingbatchqueryrequest)|true|none|
|» query|body|[[servingQueryRequest](#schemaservingqueryrequest)]|false|none|

> Example responses

> 200 Response

```json
{
  "metrics": {
    "queryEncodeMs": 0,
    "rerankMs": 0,
    "retrievalMs": 0,
    "userdataRetrievalMs": 0
  },
  "responseSet": [
    {
      "document": [
        {
          "id": "string",
          "metadata": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "response": [
        {
          "corpusKey": {
            "corpusId": 0,
            "customerId": 0,
            "dim": [
              {
                "name": "string",
                "weight": 0
              }
            ],
            "metadataFilter": "string",
            "semantics": "DEFAULT"
          },
          "documentIndex": 0,
          "metadata": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "text": "string"
        }
      ],
      "status": [
        {
          "code": "OK",
          "statusDetail": "string"
        }
      ]
    }
  ],
  "status": [
    {
      "code": "OK",
      "statusDetail": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[servingBatchQueryResponse](#schemaservingbatchqueryresponse)|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, oAuth
</aside>

## StreamQuery

<a id="opIdStreamQuery"></a>

> Code samples

```bash
curl https://example.com/v1/stream-query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H 'customer-id: 0' \
  -d '{
    "query": [
      {
        "corpusKey": [
          {
            "corpusId": 0,
            "customerId": 0,
            "dim": [
              {
                "name": "string",
                "weight": 0
              }
            ],
            "metadataFilter": "string",
            "semantics": "DEFAULT"
          }
        ],
        "numResults": 0,
        "query": "string",
        "rerankingConfig": {
          "rerankerId": 0
        },
        "start": 0
      }
    ]
  }'
```

`POST /v1/stream-query`

Stream Query

> Body parameter

```json
{
  "query": [
    {
      "corpusKey": [
        {
          "corpusId": 0,
          "customerId": 0,
          "dim": [
            {
              "name": "string",
              "weight": 0
            }
          ],
          "metadataFilter": "string",
          "semantics": "DEFAULT"
        }
      ],
      "numResults": 0,
      "query": "string",
      "rerankingConfig": {
        "rerankerId": 0
      },
      "start": 0
    }
  ]
}
```

<h3 id="streamquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer-id|header|integer|true|The Customer ID to use for the request.|
|body|body|[servingBatchQueryRequest](#schemaservingbatchqueryrequest)|true|none|
|» query|body|[[servingQueryRequest](#schemaservingqueryrequest)]|false|none|

> Example responses

> 200 Response

```json
{
  "error": {
    "code": 0,
    "details": [
      {
        "typeUrl": "string",
        "value": "string"
      }
    ],
    "message": "string"
  },
  "result": {
    "document": [
      {
        "id": "string",
        "metadata": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      }
    ],
    "response": [
      {
        "corpusKey": {
          "corpusId": 0,
          "customerId": 0,
          "dim": [
            {
              "name": "string",
              "weight": 0
            }
          ],
          "metadataFilter": "string",
          "semantics": "DEFAULT"
        },
        "documentIndex": 0,
        "metadata": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "score": 0,
        "text": "string"
      }
    ],
    "status": [
      {
        "code": "OK",
        "statusDetail": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="streamquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.(streaming responses)|Inline|
|default|Default|An unexpected error response.|[googlerpcStatus](#schemagooglerpcstatus)|

<h3 id="streamquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[googlerpcStatus](#schemagooglerpcstatus)|false|none|none|
|result|[servingResponseSet](#schemaservingresponseset)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, oAuth
</aside>

# Schemas

<h2 id="tocS_CorpusKeySemantics">CorpusKeySemantics</h2>
<!-- backwards compatibility -->
<a id="schemacorpuskeysemantics"></a>
<a id="schema_CorpusKeySemantics"></a>
<a id="tocScorpuskeysemantics"></a>
<a id="tocscorpuskeysemantics"></a>

```json
"DEFAULT"
```

Semantics controls the interpretation of the query string by the
server, and can be used to override the default semantics assigned
in the corpus definition.




 - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.
 - QUERY: Use query semantics.  This is also common.
 - RESPONSE: Use response semantics.  Usage of this is rare.

<h2 id="tocS_QueryRequestRerankingConfig">QueryRequestRerankingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequestrerankingconfig"></a>
<a id="schema_QueryRequestRerankingConfig"></a>
<a id="tocSqueryrequestrerankingconfig"></a>
<a id="tocsqueryrequestrerankingconfig"></a>

```json
{
  "rerankerId": 0
}
```

Configuration options to apply to the reranking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rerankerId|integer(int64)|false|none|none|

<h2 id="tocS_adminCorpus">adminCorpus</h2>
<!-- backwards compatibility -->
<a id="schemaadmincorpus"></a>
<a id="schema_adminCorpus"></a>
<a id="tocSadmincorpus"></a>
<a id="tocsadmincorpus"></a>

```json
{
  "customDimensions": [
    {
      "description": "string",
      "indexingDefault": 0,
      "name": "string",
      "servingDefault": 0
    }
  ],
  "description": "string",
  "dtProvision": "string",
  "enabled": true,
  "encoderId": "string",
  "encrypted": true,
  "filterAttributes": [
    {
      "description": "string",
      "indexed": true,
      "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
      "name": "string",
      "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
    }
  ],
  "id": 0,
  "metadataMaxBytes": 0,
  "name": "string",
  "swapIenc": true,
  "swapQenc": true,
  "textless": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDimensions|[[adminDimension](#schemaadmindimension)]|false|none|none|
|description|string|false|none|A description for the corpus.|
|dtProvision|string(int64)|false|none|The time at which the corpus was provisioned.|
|enabled|boolean|false|none|Whether the corpus is enabled for use or not.|
|encoderId|string(uint64)|false|none|This is an advanced setting for changing the underlying model type.  The<br>default value is "1", which is Vectara's high-performing global model.<br>Underlying models may be swapped for some paying customers by contacting<br>our support team.|
|encrypted|boolean|false|none|Encryption is on by default and cannot be turned off.|
|filterAttributes|[[adminFilterAttribute](#schemaadminfilterattribute)]|false|none|none|
|id|integer(int64)|false|none|The Corpus ID.|
|metadataMaxBytes|integer(int64)|false|none|An optional maximum size of the metadata that each document can contain.|
|name|string|false|none|The name of the corpus.|
|swapIenc|boolean|false|none|The default query encoder is designed for normal question-answering types<br>of queries when the text contains the answer.  Swapping the index encoder<br>is generally rare, but can be used to help directly match questions to<br>questions.  This can be useful if you have a FAQ dataset and you want to<br>directly match the user question to the question in the FAQ.|
|swapQenc|boolean|false|none|none|
|textless|boolean|false|none|When a corpus is "textless", Vectara does not store the original text.<br>Instead, Vectara converts the text to vectors and only retains metadata.|

<h2 id="tocS_adminCreateCorpusRequest">adminCreateCorpusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreatecorpusrequest"></a>
<a id="schema_adminCreateCorpusRequest"></a>
<a id="tocSadmincreatecorpusrequest"></a>
<a id="tocsadmincreatecorpusrequest"></a>

```json
{
  "corpus": {
    "customDimensions": [
      {
        "description": "string",
        "indexingDefault": 0,
        "name": "string",
        "servingDefault": 0
      }
    ],
    "description": "string",
    "dtProvision": "string",
    "enabled": true,
    "encoderId": "string",
    "encrypted": true,
    "filterAttributes": [
      {
        "description": "string",
        "indexed": true,
        "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
        "name": "string",
        "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
      }
    ],
    "id": 0,
    "metadataMaxBytes": 0,
    "name": "string",
    "swapIenc": true,
    "swapQenc": true,
    "textless": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpus|[adminCorpus](#schemaadmincorpus)|false|none|none|

<h2 id="tocS_adminCreateCorpusResponse">adminCreateCorpusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreatecorpusresponse"></a>
<a id="schema_adminCreateCorpusResponse"></a>
<a id="tocSadmincreatecorpusresponse"></a>
<a id="tocsadmincreatecorpusresponse"></a>

```json
{
  "corpusId": 0,
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusId|integer(int64)|false|none|The Corpus ID that was created.|
|status|[comvectaraStatus](#schemacomvectarastatus)|false|none|none|

<h2 id="tocS_adminDeleteCorpusRequest">adminDeleteCorpusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindeletecorpusrequest"></a>
<a id="schema_adminDeleteCorpusRequest"></a>
<a id="tocSadmindeletecorpusrequest"></a>
<a id="tocsadmindeletecorpusrequest"></a>

```json
{
  "corpusId": 0,
  "customerId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusId|integer(int64)|false|none|The Corpus ID to be deleted.|
|customerId|integer(int64)|false|none|The Customer ID that contains the corpus to be deleted.|

<h2 id="tocS_adminDeleteCorpusResponse">adminDeleteCorpusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmindeletecorpusresponse"></a>
<a id="schema_adminDeleteCorpusResponse"></a>
<a id="tocSadmindeletecorpusresponse"></a>
<a id="tocsadmindeletecorpusresponse"></a>

```json
{
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[comvectaraStatus](#schemacomvectarastatus)|false|none|none|

<h2 id="tocS_adminDimension">adminDimension</h2>
<!-- backwards compatibility -->
<a id="schemaadmindimension"></a>
<a id="schema_adminDimension"></a>
<a id="tocSadmindimension"></a>
<a id="tocsadmindimension"></a>

```json
{
  "description": "string",
  "indexingDefault": 0,
  "name": "string",
  "servingDefault": 0
}
```

A custom dimension is additional numeric metadata that you want to affect
Vectara's scoring.  For example, these could be "number of stars" ratings,
or other business metrics like a product's margins that you want to use
to boost where a result is in the list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description for the custom dimension.|
|indexingDefault|number(double)|false|none|The default value to give to documents for this custom dimension.|
|name|string|false|none|The name of the custom dimension.  The maximum length of the name is<br>8 characters.|
|servingDefault|number(double)|false|none|The default weight to give this dimension when running queries. A value of<br>0.0, for example, gives it no weight at all.|

<h2 id="tocS_adminFilterAttribute">adminFilterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaadminfilterattribute"></a>
<a id="schema_adminFilterAttribute"></a>
<a id="tocSadminfilterattribute"></a>
<a id="tocsadminfilterattribute"></a>

```json
{
  "description": "string",
  "indexed": true,
  "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
  "name": "string",
  "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
}
```

Defines metadata fields that can be used in predicate queries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description.|
|indexed|boolean|false|none|Whether the field is indexed for maximum query speed.|
|level|[adminFilterAttributeLevel](#schemaadminfilterattributelevel)|false|none|none|
|name|string|false|none|Name of the field, as seen in metadata.|
|type|[adminFilterAttributeType](#schemaadminfilterattributetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|FILTER_ATTRIBUTE_LEVEL__UNDEFINED|
|level|FILTER_ATTRIBUTE_LEVEL__DOCUMENT|
|level|FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART|
|type|FILTER_ATTRIBUTE_TYPE__UNDEFINED|
|type|FILTER_ATTRIBUTE_TYPE__INTEGER|
|type|FILTER_ATTRIBUTE_TYPE__INTEGER_LIST|
|type|FILTER_ATTRIBUTE_TYPE__REAL|
|type|FILTER_ATTRIBUTE_TYPE__REAL_LIST|
|type|FILTER_ATTRIBUTE_TYPE__TEXT|
|type|FILTER_ATTRIBUTE_TYPE__TEXT_LIST|

<h2 id="tocS_adminFilterAttributeLevel">adminFilterAttributeLevel</h2>
<!-- backwards compatibility -->
<a id="schemaadminfilterattributelevel"></a>
<a id="schema_adminFilterAttributeLevel"></a>
<a id="tocSadminfilterattributelevel"></a>
<a id="tocsadminfilterattributelevel"></a>

```json
"FILTER_ATTRIBUTE_LEVEL__UNDEFINED"
```

<h2 id="tocS_adminFilterAttributeType">adminFilterAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaadminfilterattributetype"></a>
<a id="schema_adminFilterAttributeType"></a>
<a id="tocSadminfilterattributetype"></a>
<a id="tocsadminfilterattributetype"></a>

```json
"FILTER_ATTRIBUTE_TYPE__UNDEFINED"
```

<h2 id="tocS_adminListCorporaRequest">adminListCorporaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistcorporarequest"></a>
<a id="schema_adminListCorporaRequest"></a>
<a id="tocSadminlistcorporarequest"></a>
<a id="tocsadminlistcorporarequest"></a>

```json
{
  "filter": "string",
  "numResults": 0,
  "pageKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|A regex to match corpora against.|
|numResults|integer(int64)|false|none|The maximum results to return.|
|pageKey|string(byte)|false|none|A key that is passed in to retrieve a specific page of results.|

<h2 id="tocS_adminListCorporaResponse">adminListCorporaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistcorporaresponse"></a>
<a id="schema_adminListCorporaResponse"></a>
<a id="tocSadminlistcorporaresponse"></a>
<a id="tocsadminlistcorporaresponse"></a>

```json
{
  "corpus": [
    {
      "customDimensions": [
        {
          "description": "string",
          "indexingDefault": 0,
          "name": "string",
          "servingDefault": 0
        }
      ],
      "description": "string",
      "dtProvision": "string",
      "enabled": true,
      "encoderId": "string",
      "encrypted": true,
      "filterAttributes": [
        {
          "description": "string",
          "indexed": true,
          "level": "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
          "name": "string",
          "type": "FILTER_ATTRIBUTE_TYPE__UNDEFINED"
        }
      ],
      "id": 0,
      "metadataMaxBytes": 0,
      "name": "string",
      "swapIenc": true,
      "swapQenc": true,
      "textless": true
    }
  ],
  "pageKey": "string",
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpus|[[adminCorpus](#schemaadmincorpus)]|false|none|none|
|pageKey|string(byte)|false|none|A key that is passed into a subsequent result in order to<br>retrieve the next page of results.|
|status|[comvectaraStatus](#schemacomvectarastatus)|false|none|none|

<h2 id="tocS_adminResetCorpusRequest">adminResetCorpusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminresetcorpusrequest"></a>
<a id="schema_adminResetCorpusRequest"></a>
<a id="tocSadminresetcorpusrequest"></a>
<a id="tocsadminresetcorpusrequest"></a>

```json
{
  "corpusId": 0,
  "customerId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusId|integer(int64)|false|none|The Corpus ID to be reset.|
|customerId|integer(int64)|false|none|The Customer ID that contains the corpus to be reset.|

<h2 id="tocS_adminResetCorpusResponse">adminResetCorpusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminresetcorpusresponse"></a>
<a id="schema_adminResetCorpusResponse"></a>
<a id="tocSadminresetcorpusresponse"></a>
<a id="tocsadminresetcorpusresponse"></a>

```json
{
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[comvectaraStatus](#schemacomvectarastatus)|false|none|none|

<h2 id="tocS_comvectaraStatus">comvectaraStatus</h2>
<!-- backwards compatibility -->
<a id="schemacomvectarastatus"></a>
<a id="schema_comvectaraStatus"></a>
<a id="tocScomvectarastatus"></a>
<a id="tocscomvectarastatus"></a>

```json
{
  "code": "OK",
  "statusDetail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[vectaraStatusCode](#schemavectarastatuscode)|false|none|none|
|statusDetail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|OK|
|code|FAILURE|
|code|UNKNOWN|
|code|INVALID_ARGUMENT|
|code|DEADLINE_EXCEEDED|
|code|ALREADY_EXISTS|
|code|PERMISSION_DENIED|
|code|RESOURCE_EXHAUSTED|
|code|FAILED_PRECONDITION|
|code|ABORTED|
|code|OUT_OF_RANGE|
|code|UNIMPLEMENTED|
|code|INTERNAL|
|code|UNAVAILABLE|
|code|DATA_LOSS|
|code|UNAUTHENTICATED|
|code|BAD_REQUEST|
|code|UNAUTHORIZED|
|code|FORBIDDEN|
|code|NOT_FOUND|
|code|METHOD_NOT_ALLOWED|
|code|CONFLICT|
|code|UNSUPPORTED_MEDIA_TYPE|
|code|TOO_MANY_REQUESTS|
|code|INTERNAL_SERVER_ERROR|
|code|NOT_IMPLEMENTED|
|code|SERVICE_UNAVAILABLE|
|code|INSUFFICIENT_STORAGE|
|code|UNPARSEABLE_RESPONSE|
|code|DISABLED_CUSTOMER|
|code|INVALID_CUSTOMER_ID|
|code|DISABLED_CORPUS|
|code|INVALID_CORPUS_ID|
|code|DISABLED_API_KEY|
|code|EXPIRED_API_KEY|
|code|INVALID_API_KEY|
|code|CMK_INACCESSIBLE|
|code|QRY__DISABLED_CORPUS|
|code|QRY__DOCUMENT_DB_FAILURE|
|code|QRY__ENCODER_FAILURE|
|code|QRY__INTERRUPTED|
|code|QRY__INVALID_CORPUS|
|code|QRY__INVALID_START|
|code|QRY__INVALID_NUM_RESULTS|
|code|QRY__INVALID_CONTEXT|
|code|QRY__MISSING_QUERY|
|code|QRY__MISSING_CORPUS|
|code|QRY__TIMEOUT|
|code|QRY__TOO_MANY_CORPORA|
|code|QRY__TOO_MANY_QUERIES|
|code|QRY__VECTOR_INDEX_FAILURE|
|code|QRY__INVALID_DIMENSION|
|code|QRY__INVALID_CLIENTKEY|
|code|QRY__DECRYPTION_FAILURE|
|code|QRY__INVALID_RERANKER|
|code|QRY__PARTIAL_RERANK|
|code|QRY__RERANK_FAILURE|
|code|QRY__TOO_MANY_RESULT_ROWS|
|code|QRY__PARTIAL_RETRIEVAL|
|code|CX_SPECS__INVALID_JSON|
|code|CX_SPECS__UNREGISTERED_TYPE|
|code|CX_SPECS__MISSING_SPEC|
|code|CX_SPECS__MISSING_TYPE|
|code|CX_SPECS__UNPARSEABLE_SPEC|
|code|ADM__INVALID_CUSTOMER_ID|
|code|ADM__INVALID_CORPUS_ID|
|code|ADM__INVALID_ENCODER_ID|
|code|ADM__INVALID_ROLE_ID|
|code|ADM__ROLE_ALREADY_EXISTS|
|code|ADM__ONLY_ONE_OWNER_SUPPORTED|
|code|ADM__INVALID_PERMISSION|
|code|ADM__ROLECREATION_FAILURE|
|code|ADM__USER_EMAIL_NOT_AVAIALBLE|
|code|ADM__USERNAME_NOT_AVAILABLE|
|code|ADM__SIGNUP_MISSING_NAME|
|code|ADM__SIGNUP_MISSING_ORG|
|code|ADM__SIGNUP_MISSING_EMAIL|
|code|ADM__SIGNUP_MISSING_PAYMENT|
|code|ADM__SIGNUP_MISSING_PLAN|
|code|ADM__SIGNUP_MISSING_PASSWORD|
|code|ADM__SIGNUP_INVALID_NAME|
|code|ADM__SIGNUP_INVALID_ORG|
|code|ADM__SIGNUP_INVALID_EMAIL|
|code|ADM__SIGNUP_INVALID_PAYMENT|
|code|ADM__SIGNUP_INVALID_PLAN|
|code|ADM__SIGNUP_INVALID_PASSWORD|
|code|ADM__SIGNUP_INVALID_ACCOUNT_ALIAS|
|code|ADM__SIGNUP_INVALID_EMAIL_VALIDATION_CODE|
|code|ADM__SIGNUP_MISSING_COUNTRY_CODE|
|code|ADM__SIGNUP_ROOT_EMAIL_NOT_AVAILABLE|
|code|ADM__CUST_MARK_DELETE_FAILED|
|code|ADM__CUST_FAISS_DEALLOC_FAILED|
|code|ADM__CORPUS_LIMIT_REACHED|
|code|ADM__STRIPE_CARD_DECLINED|
|code|ADM__STRIPE_PROCESSING_ERROR|
|code|ADM__EMAIL_VALIDATION_REQUEST_NOT_FOUND|
|code|ADM__EMAIL_NOT_VALIDATED|
|code|ADM__CHANGE_PLAN__NO_CURRENT_PLAN|
|code|ADM__CHANGE_PLAN__REQUIRES_MANUAL_CHANGE|
|code|ADM__CHANGE_PLAN__INVALID_PLAN_ID|
|code|ADM__CHANGE_PLAN__NO_PAYMENT_SOURCE|
|code|ADM__CHANGE_PLAN__INVALID_EFFECTIVE_DATE|
|code|ADM__CHANGE_PLAN__CONFLICTING_CHANGE|
|code|SCM__MISCONFIGURED_CONNECTION|
|code|STATS_DB_READ_FAILURE|
|code|VDB__TEXT_READ_FAILURE|
|code|REBUILD__LOW_RECALL|
|code|REBUILD__INDEX_UPLOAD_FAILURE|
|code|REBUILD__UPDATE_JOURNAL_FAILURE|
|code|REBUILD__UPDATE_FAISSPARAMS_FAILURE|
|code|REBUILD__NO_DATA|
|code|REBUILD__EVALUATION|
|code|IDX__TRANSIENT_PARTIAL_DELETION_FAILURE|
|code|IDX__PERMANENT_PARTIAL_DELETION_FAILURE|

<h2 id="tocS_googlerpcStatus">googlerpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_googlerpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "typeUrl": "string",
      "value": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|details|[[protobufAny](#schemaprotobufany)]|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_indexingSection">indexingSection</h2>
<!-- backwards compatibility -->
<a id="schemaindexingsection"></a>
<a id="schema_indexingSection"></a>
<a id="tocSindexingsection"></a>
<a id="tocsindexingsection"></a>

```json
{
  "customDims": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "id": 0,
  "metadataJson": "string",
  "section": [
    {
      "customDims": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "id": 0,
      "metadataJson": "string",
      "section": [
        {}
      ],
      "text": "string",
      "title": "string"
    }
  ],
  "text": "string",
  "title": "string"
}
```

A section within a structured document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDims|[[vectaraindexingCustomDimension](#schemavectaraindexingcustomdimension)]|false|none|A list of custom dimension values that are included in the generated<br>representation of all subsections (i.e. sections contains by this section).|
|id|integer(int32)|false|none|Optionally, the unique ID of this section. If set, it will be returned as<br>metadata in query results.|
|metadataJson|string|false|none|Metadata about this section. This should be a json string. It is passed<br>through the system, without being used at indexing time. It can be<br>retrieved at query time.|
|section|[[indexingSection](#schemaindexingsection)]|false|none|A list of subsections.|
|text|string|false|none|The text of the section. This should never be empty.|
|title|string|false|none|Optionally, the title of the section. This may be empty.|

<h2 id="tocS_protobufAny">protobufAny</h2>
<!-- backwards compatibility -->
<a id="schemaprotobufany"></a>
<a id="schema_protobufAny"></a>
<a id="tocSprotobufany"></a>
<a id="tocsprotobufany"></a>

```json
{
  "typeUrl": "string",
  "value": "string"
}
```

`Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.




    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.




    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

Example 3: Pack and unpack a message in Python.




    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

Example 4: Pack and unpack a message in Go




     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON

The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:




    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):




    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeUrl|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br><br><br><br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br><br><br><br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|value|string(byte)|false|none|Must be a valid serialized protocol buffer of the above specified type.|

<h2 id="tocS_servingAttribute">servingAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaservingattribute"></a>
<a id="schema_servingAttribute"></a>
<a id="tocSservingattribute"></a>
<a id="tocsservingattribute"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_servingBatchQueryRequest">servingBatchQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaservingbatchqueryrequest"></a>
<a id="schema_servingBatchQueryRequest"></a>
<a id="tocSservingbatchqueryrequest"></a>
<a id="tocsservingbatchqueryrequest"></a>

```json
{
  "query": [
    {
      "corpusKey": [
        {
          "corpusId": 0,
          "customerId": 0,
          "dim": [
            {
              "name": "string",
              "weight": 0
            }
          ],
          "metadataFilter": "string",
          "semantics": "DEFAULT"
        }
      ],
      "numResults": 0,
      "query": "string",
      "rerankingConfig": {
        "rerankerId": 0
      },
      "start": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[[servingQueryRequest](#schemaservingqueryrequest)]|false|none|none|

<h2 id="tocS_servingBatchQueryResponse">servingBatchQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaservingbatchqueryresponse"></a>
<a id="schema_servingBatchQueryResponse"></a>
<a id="tocSservingbatchqueryresponse"></a>
<a id="tocsservingbatchqueryresponse"></a>

```json
{
  "metrics": {
    "queryEncodeMs": 0,
    "rerankMs": 0,
    "retrievalMs": 0,
    "userdataRetrievalMs": 0
  },
  "responseSet": [
    {
      "document": [
        {
          "id": "string",
          "metadata": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "response": [
        {
          "corpusKey": {
            "corpusId": 0,
            "customerId": 0,
            "dim": [
              {
                "name": "string",
                "weight": 0
              }
            ],
            "metadataFilter": "string",
            "semantics": "DEFAULT"
          },
          "documentIndex": 0,
          "metadata": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "text": "string"
        }
      ],
      "status": [
        {
          "code": "OK",
          "statusDetail": "string"
        }
      ]
    }
  ],
  "status": [
    {
      "code": "OK",
      "statusDetail": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[servingPerformanceMetrics](#schemaservingperformancemetrics)|false|none|Basic performance metrics that can be attached to a server response.|
|responseSet|[[servingResponseSet](#schemaservingresponseset)]|false|none|none|
|status|[[comvectaraStatus](#schemacomvectarastatus)]|false|none|none|

<h2 id="tocS_servingCorpusKey">servingCorpusKey</h2>
<!-- backwards compatibility -->
<a id="schemaservingcorpuskey"></a>
<a id="schema_servingCorpusKey"></a>
<a id="tocSservingcorpuskey"></a>
<a id="tocsservingcorpuskey"></a>

```json
{
  "corpusId": 0,
  "customerId": 0,
  "dim": [
    {
      "name": "string",
      "weight": 0
    }
  ],
  "metadataFilter": "string",
  "semantics": "DEFAULT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusId|integer(int64)|false|none|The Corpus ID.|
|customerId|integer(int64)|false|none|The Customer ID.|
|dim|[[vectaraservingCustomDimension](#schemavectaraservingcustomdimension)]|false|none|Weights on custom dimensions for the corpus.|
|metadataFilter|string|false|none|none|
|semantics|[CorpusKeySemantics](#schemacorpuskeysemantics)|false|none|Semantics controls the interpretation of the query string by the<br>server, and can be used to override the default semantics assigned<br>in the corpus definition.<br><br><br><br><br> - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.<br> - QUERY: Use query semantics.  This is also common.<br> - RESPONSE: Use response semantics.  Usage of this is rare.|

#### Enumerated Values

|Property|Value|
|---|---|
|semantics|DEFAULT|
|semantics|QUERY|
|semantics|RESPONSE|

<h2 id="tocS_servingPerformanceMetrics">servingPerformanceMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaservingperformancemetrics"></a>
<a id="schema_servingPerformanceMetrics"></a>
<a id="tocSservingperformancemetrics"></a>
<a id="tocsservingperformancemetrics"></a>

```json
{
  "queryEncodeMs": 0,
  "rerankMs": 0,
  "retrievalMs": 0,
  "userdataRetrievalMs": 0
}
```

Basic performance metrics that can be attached to a server response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryEncodeMs|integer(int64)|false|none|How long it took to encode the query.|
|rerankMs|integer(int64)|false|none|How long it took to rerank the results.|
|retrievalMs|integer(int64)|false|none|How long it took to retrieve relevant results.|
|userdataRetrievalMs|integer(int64)|false|none|How long it took to retrieve user data.|

<h2 id="tocS_servingQueryRequest">servingQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaservingqueryrequest"></a>
<a id="schema_servingQueryRequest"></a>
<a id="tocSservingqueryrequest"></a>
<a id="tocsservingqueryrequest"></a>

```json
{
  "corpusKey": [
    {
      "corpusId": 0,
      "customerId": 0,
      "dim": [
        {
          "name": "string",
          "weight": 0
        }
      ],
      "metadataFilter": "string",
      "semantics": "DEFAULT"
    }
  ],
  "numResults": 0,
  "query": "string",
  "rerankingConfig": {
    "rerankerId": 0
  },
  "start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusKey|[[servingCorpusKey](#schemaservingcorpuskey)]|false|none|none|
|numResults|integer(int64)|false|none|The number of results to return.|
|query|string|false|none|The query text to use from the end user.|
|rerankingConfig|[QueryRequestRerankingConfig](#schemaqueryrequestrerankingconfig)|false|none|Configuration options to apply to the reranking.|
|start|integer(int64)|false|none|none|

<h2 id="tocS_servingResponse">servingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaservingresponse"></a>
<a id="schema_servingResponse"></a>
<a id="tocSservingresponse"></a>
<a id="tocsservingresponse"></a>

```json
{
  "corpusKey": {
    "corpusId": 0,
    "customerId": 0,
    "dim": [
      {
        "name": "string",
        "weight": 0
      }
    ],
    "metadataFilter": "string",
    "semantics": "DEFAULT"
  },
  "documentIndex": 0,
  "metadata": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "score": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusKey|[servingCorpusKey](#schemaservingcorpuskey)|false|none|none|
|documentIndex|integer(int64)|false|none|Use this ID to find the document in the ResponseSet.|
|metadata|[[servingAttribute](#schemaservingattribute)]|false|none|none|
|score|number(float)|false|none|The score used for ranking results.  The higher the score, the better the match.|
|text|string|false|none|none|

<h2 id="tocS_servingResponseSet">servingResponseSet</h2>
<!-- backwards compatibility -->
<a id="schemaservingresponseset"></a>
<a id="schema_servingResponseSet"></a>
<a id="tocSservingresponseset"></a>
<a id="tocsservingresponseset"></a>

```json
{
  "document": [
    {
      "id": "string",
      "metadata": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "response": [
    {
      "corpusKey": {
        "corpusId": 0,
        "customerId": 0,
        "dim": [
          {
            "name": "string",
            "weight": 0
          }
        ],
        "metadataFilter": "string",
        "semantics": "DEFAULT"
      },
      "documentIndex": 0,
      "metadata": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "text": "string"
    }
  ],
  "status": [
    {
      "code": "OK",
      "statusDetail": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[[servingResponseSetDocument](#schemaservingresponsesetdocument)]|false|none|none|
|response|[[servingResponse](#schemaservingresponse)]|false|none|none|
|status|[[comvectaraStatus](#schemacomvectarastatus)]|false|none|Potentially multiple warnings.|

<h2 id="tocS_servingResponseSetDocument">servingResponseSetDocument</h2>
<!-- backwards compatibility -->
<a id="schemaservingresponsesetdocument"></a>
<a id="schema_servingResponseSetDocument"></a>
<a id="tocSservingresponsesetdocument"></a>
<a id="tocsservingresponsesetdocument"></a>

```json
{
  "id": "string",
  "metadata": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|metadata|[[servingAttribute](#schemaservingattribute)]|false|none|none|

<h2 id="tocS_vectaraDeleteDocumentRequest">vectaraDeleteDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemavectaradeletedocumentrequest"></a>
<a id="schema_vectaraDeleteDocumentRequest"></a>
<a id="tocSvectaradeletedocumentrequest"></a>
<a id="tocsvectaradeletedocumentrequest"></a>

```json
{
  "corpusId": "string",
  "customerId": "string",
  "documentId": "string"
}
```

Request to delete a document from an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusId|string(int64)|false|none|The Corpus ID that contains the document.|
|customerId|string(int64)|false|none|The Customer ID to issue the request for.|
|documentId|string|false|none|The Document ID to be deleted.|

<h2 id="tocS_vectaraDeleteDocumentResponse">vectaraDeleteDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemavectaradeletedocumentresponse"></a>
<a id="schema_vectaraDeleteDocumentResponse"></a>
<a id="tocSvectaradeletedocumentresponse"></a>
<a id="tocsvectaradeletedocumentresponse"></a>

```json
{}
```

<h2 id="tocS_vectaraIndexDocumentRequest">vectaraIndexDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemavectaraindexdocumentrequest"></a>
<a id="schema_vectaraIndexDocumentRequest"></a>
<a id="tocSvectaraindexdocumentrequest"></a>
<a id="tocsvectaraindexdocumentrequest"></a>

```json
{
  "corpusId": "string",
  "customerId": "string",
  "document": {
    "customDims": [
      {
        "name": "string",
        "value": 0
      }
    ],
    "description": "string",
    "documentId": "string",
    "metadataJson": "string",
    "section": [
      {
        "customDims": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "id": 0,
        "metadataJson": "string",
        "section": [
          {}
        ],
        "text": "string",
        "title": "string"
      }
    ],
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpusId|string(int64)|false|none|none|
|customerId|string(int64)|false|none|none|
|document|[vectaraindexingDocument](#schemavectaraindexingdocument)|false|none|A document to index.|

<h2 id="tocS_vectaraIndexDocumentResponse">vectaraIndexDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemavectaraindexdocumentresponse"></a>
<a id="schema_vectaraIndexDocumentResponse"></a>
<a id="tocSvectaraindexdocumentresponse"></a>
<a id="tocsvectaraindexdocumentresponse"></a>

```json
{
  "quotaConsumed": {
    "numChars": "string",
    "numMetadataChars": "string"
  },
  "status": {
    "code": "OK",
    "statusDetail": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotaConsumed|[vectaraStorageQuota](#schemavectarastoragequota)|false|none|none|
|status|[comvectaraStatus](#schemacomvectarastatus)|false|none|none|

<h2 id="tocS_vectaraStatusCode">vectaraStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemavectarastatuscode"></a>
<a id="schema_vectaraStatusCode"></a>
<a id="tocSvectarastatuscode"></a>
<a id="tocsvectarastatuscode"></a>

```json
"OK"
```

<h2 id="tocS_vectaraStorageQuota">vectaraStorageQuota</h2>
<!-- backwards compatibility -->
<a id="schemavectarastoragequota"></a>
<a id="schema_vectaraStorageQuota"></a>
<a id="tocSvectarastoragequota"></a>
<a id="tocsvectarastoragequota"></a>

```json
{
  "numChars": "string",
  "numMetadataChars": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numChars|string(int64)|false|none|The number of chars from the document that consumed the storage quota.|
|numMetadataChars|string(int64)|false|none|The number of chars in the metadata of the document that consumed the<br>storage quota.|

<h2 id="tocS_vectaraindexingCustomDimension">vectaraindexingCustomDimension</h2>
<!-- backwards compatibility -->
<a id="schemavectaraindexingcustomdimension"></a>
<a id="schema_vectaraindexingCustomDimension"></a>
<a id="tocSvectaraindexingcustomdimension"></a>
<a id="tocsvectaraindexingcustomdimension"></a>

```json
{
  "name": "string",
  "value": 0
}
```

The value of a custom dimension. A valid list of custom dimensions is defined ahead of time for a corpus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the dimension.|
|value|number(double)|false|none|The value of the dimension.|

<h2 id="tocS_vectaraindexingDocument">vectaraindexingDocument</h2>
<!-- backwards compatibility -->
<a id="schemavectaraindexingdocument"></a>
<a id="schema_vectaraindexingDocument"></a>
<a id="tocSvectaraindexingdocument"></a>
<a id="tocsvectaraindexingdocument"></a>

```json
{
  "customDims": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "description": "string",
  "documentId": "string",
  "metadataJson": "string",
  "section": [
    {
      "customDims": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "id": 0,
      "metadataJson": "string",
      "section": [
        {}
      ],
      "text": "string",
      "title": "string"
    }
  ],
  "title": "string"
}
```

A document to index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDims|[[vectaraindexingCustomDimension](#schemavectaraindexingcustomdimension)]|false|none|A list of custom dimension values that are included in the generated<br>representation of all sections.|
|description|string|false|none|An optional description for the document.|
|documentId|string|false|none|Client assigned document ID to this document.|
|metadataJson|string|false|none|Metadata about the document. This should be a json string, and it can be<br>retrieved at query time.|
|section|[[indexingSection](#schemaindexingsection)]|false|none|The actual content of the document, structured as a repeating list<br>of sections.|
|title|string|false|none|The title of the document.|

<h2 id="tocS_vectaraservingCustomDimension">vectaraservingCustomDimension</h2>
<!-- backwards compatibility -->
<a id="schemavectaraservingcustomdimension"></a>
<a id="schema_vectaraservingCustomDimension"></a>
<a id="tocSvectaraservingcustomdimension"></a>
<a id="tocsvectaraservingcustomdimension"></a>

```json
{
  "name": "string",
  "weight": 0
}
```

Defined the weight of a custom dimension at query time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|weight|number(double)|false|none|none|
