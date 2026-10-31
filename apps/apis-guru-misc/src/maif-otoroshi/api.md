<h1 id="otoroshi-admin-api">Otoroshi Admin API v1.5.0-dev</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Admin API of the Otoroshi reverse proxy

Base URLs:

* <a href="http://otoroshi-api.oto.tools/">http://otoroshi-api.oto.tools/</a>

* <a href="http://maif.local">http://maif.local</a>

Email: <a href="mailto:oss@maif.fr">Otoroshi Team</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://maif.github.io/otoroshi/">Find out more about Otoroshi</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="otoroshi-admin-api-configuration">configuration</h1>

Everything about Otoroshi global configuration

## Get the full configuration of Otoroshi

<a id="opIdglobalConfig"></a>

> Code samples

```bash
curl https://example.com/api/globalconfig \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/globalconfig`

Get the full configuration of Otoroshi

> Example responses

> 200 Response

```json
{
  "alertsEmails": [
    "admin@otoroshi.io"
  ],
  "alertsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "analyticsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "apiReadOnly": true,
  "autoLinkToDefaultGroup": true,
  "backofficeAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "cleverSettings": {
    "consumerKey": "a string value",
    "consumerSecret": "a string value",
    "orgaId": "a string value",
    "secret": "a string value",
    "token": "a string value"
  },
  "elasticReadsConfig": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "elasticWritesConfigs": [
    {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    }
  ],
  "endlessIpAddresses": [
    "192.192.192.192"
  ],
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "limitConcurrentRequests": true,
  "lines": [
    "a string value"
  ],
  "mailerSettings": {
    "apiKey": "a string value",
    "apiKeyPrivate": "a string value",
    "apiKeyPublic": "a string value",
    "domain": "a string value",
    "eu": true,
    "header": {
      "key": "value"
    },
    "type": "a string value",
    "url": "a string value"
  },
  "maxConcurrentRequests": 123,
  "maxHttp10ResponseSize": 123,
  "maxLogsSize": 123123,
  "middleFingers": true,
  "perIpThrottlingQuota": 123,
  "privateAppsAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "streamEntityOnly": true,
  "throttlingQuota": 123,
  "u2fLoginOnly": true,
  "useCircuitBreakers": true
}
```

<h3 id="get-the-full-configuration-of-otoroshi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalConfig](#schemaglobalconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update the global configuration

<a id="opIdputGlobalConfig"></a>

> Code samples

```bash
curl https://example.com/api/globalconfig \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "alertsEmails": [
      "admin@otoroshi.io"
    ],
    "alertsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "analyticsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "apiReadOnly": true,
    "autoLinkToDefaultGroup": true,
    "backofficeAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "cleverSettings": {
      "consumerKey": "a string value",
      "consumerSecret": "a string value",
      "orgaId": "a string value",
      "secret": "a string value",
      "token": "a string value"
    },
    "elasticReadsConfig": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "elasticWritesConfigs": [
      {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      }
    ],
    "endlessIpAddresses": [
      "192.192.192.192"
    ],
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "limitConcurrentRequests": true,
    "lines": [
      "a string value"
    ],
    "mailerSettings": {
      "apiKey": "a string value",
      "apiKeyPrivate": "a string value",
      "apiKeyPublic": "a string value",
      "domain": "a string value",
      "eu": true,
      "header": {
        "key": "value"
      },
      "type": "a string value",
      "url": "a string value"
    },
    "maxConcurrentRequests": 123,
    "maxHttp10ResponseSize": 123,
    "maxLogsSize": 123123,
    "middleFingers": true,
    "perIpThrottlingQuota": 123,
    "privateAppsAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "streamEntityOnly": true,
    "throttlingQuota": 123,
    "u2fLoginOnly": true,
    "useCircuitBreakers": true
  }'
```

`PUT /api/globalconfig`

Update the global configuration

> Body parameter

```json
{
  "alertsEmails": [
    "admin@otoroshi.io"
  ],
  "alertsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "analyticsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "apiReadOnly": true,
  "autoLinkToDefaultGroup": true,
  "backofficeAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "cleverSettings": {
    "consumerKey": "a string value",
    "consumerSecret": "a string value",
    "orgaId": "a string value",
    "secret": "a string value",
    "token": "a string value"
  },
  "elasticReadsConfig": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "elasticWritesConfigs": [
    {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    }
  ],
  "endlessIpAddresses": [
    "192.192.192.192"
  ],
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "limitConcurrentRequests": true,
  "lines": [
    "a string value"
  ],
  "mailerSettings": {
    "apiKey": "a string value",
    "apiKeyPrivate": "a string value",
    "apiKeyPublic": "a string value",
    "domain": "a string value",
    "eu": true,
    "header": {
      "key": "value"
    },
    "type": "a string value",
    "url": "a string value"
  },
  "maxConcurrentRequests": 123,
  "maxHttp10ResponseSize": 123,
  "maxLogsSize": 123123,
  "middleFingers": true,
  "perIpThrottlingQuota": 123,
  "privateAppsAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "streamEntityOnly": true,
  "throttlingQuota": 123,
  "u2fLoginOnly": true,
  "useCircuitBreakers": true
}
```

<h3 id="update-the-global-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalConfig](#schemaglobalconfig)|false|none|
|» alertsEmails|body|[string(email)]|true|Email addresses that will receive all Otoroshi alert events|
|» alertsWebhooks|body|[[Webhook](#schemawebhook)]|true|Webhook that will receive all Otoroshi alert events|
|» analyticsWebhooks|body|[[Webhook](#schemawebhook)]|true|Webhook that will receive all internal Otoroshi events|
|» apiReadOnly|body|boolean|true|If enabled, Admin API won't be able to write/update/delete entities|
|» autoLinkToDefaultGroup|body|boolean|true|If not defined, every new service descriptor will be added to the default group|
|» backofficeAuth0Config|body|[Auth0Config](#schemaauth0config)|false|Optional configuration for the backoffice Auth0 domain|
|» cleverSettings|body|[CleverSettings](#schemacleversettings)|false|Optional CleverCloud configuration|
|» elasticReadsConfig|body|[ElasticConfig](#schemaelasticconfig)|false|Config. for elastic reads|
|» elasticWritesConfigs|body|[[ElasticConfig](#schemaelasticconfig)]|false|Configs. for Elastic writes|
|» endlessIpAddresses|body|[string(ipv4)]|true|IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros|
|» ipFiltering|body|[IpFiltering](#schemaipfiltering)|true|The filtering configuration block for a service of globally.|
|» limitConcurrentRequests|body|boolean|true|If enabled, Otoroshi will reject new request if too much at the same time|
|» lines|body|[string]|false|Possibles lines for Otoroshi|
|» mailerSettings|body|[MailerSettings](#schemamailersettings)|false|Optional mailer configuration|
|» maxConcurrentRequests|body|integer(int64)|true|The number of authorized request processed at the same time|
|» maxHttp10ResponseSize|body|integer(int64)|false|The max size in bytes of an HTTP 1.0 response|
|» maxLogsSize|body|integer(int32)|false|Number of events kept locally|
|» middleFingers|body|boolean|false|Use middle finger emoji as a response character for endless HTTP responses|
|» perIpThrottlingQuota|body|integer(int64)|true|Authorized number of calls per second globally per IP address, measured on 10 seconds|
|» privateAppsAuth0Config|body|[Auth0Config](#schemaauth0config)|false|Optional configuration for the private apps Auth0 domain|
|» streamEntityOnly|body|boolean|true|HTTP will be streamed only. Doesn't work with old browsers|
|» throttlingQuota|body|integer(int64)|true|Authorized number of calls per second globally, measured on 10 seconds|
|» u2fLoginOnly|body|boolean|true|If enabled, login to backoffice through Auth0 will be disabled|
|» useCircuitBreakers|body|boolean|true|If enabled, services will be authorized to use circuit breakers|

> Example responses

> 200 Response

```json
{
  "alertsEmails": [
    "admin@otoroshi.io"
  ],
  "alertsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "analyticsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "apiReadOnly": true,
  "autoLinkToDefaultGroup": true,
  "backofficeAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "cleverSettings": {
    "consumerKey": "a string value",
    "consumerSecret": "a string value",
    "orgaId": "a string value",
    "secret": "a string value",
    "token": "a string value"
  },
  "elasticReadsConfig": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "elasticWritesConfigs": [
    {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    }
  ],
  "endlessIpAddresses": [
    "192.192.192.192"
  ],
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "limitConcurrentRequests": true,
  "lines": [
    "a string value"
  ],
  "mailerSettings": {
    "apiKey": "a string value",
    "apiKeyPrivate": "a string value",
    "apiKeyPublic": "a string value",
    "domain": "a string value",
    "eu": true,
    "header": {
      "key": "value"
    },
    "type": "a string value",
    "url": "a string value"
  },
  "maxConcurrentRequests": 123,
  "maxHttp10ResponseSize": 123,
  "maxLogsSize": 123123,
  "middleFingers": true,
  "perIpThrottlingQuota": 123,
  "privateAppsAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "streamEntityOnly": true,
  "throttlingQuota": 123,
  "u2fLoginOnly": true,
  "useCircuitBreakers": true
}
```

<h3 id="update-the-global-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalConfig](#schemaglobalconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update the global configuration with a diff

<a id="opIdpatchGlobalConfig"></a>

> Code samples

```bash
curl https://example.com/api/globalconfig \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/globalconfig`

Update the global configuration with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-the-global-configuration-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "alertsEmails": [
    "admin@otoroshi.io"
  ],
  "alertsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "analyticsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "apiReadOnly": true,
  "autoLinkToDefaultGroup": true,
  "backofficeAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "cleverSettings": {
    "consumerKey": "a string value",
    "consumerSecret": "a string value",
    "orgaId": "a string value",
    "secret": "a string value",
    "token": "a string value"
  },
  "elasticReadsConfig": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "elasticWritesConfigs": [
    {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    }
  ],
  "endlessIpAddresses": [
    "192.192.192.192"
  ],
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "limitConcurrentRequests": true,
  "lines": [
    "a string value"
  ],
  "mailerSettings": {
    "apiKey": "a string value",
    "apiKeyPrivate": "a string value",
    "apiKeyPublic": "a string value",
    "domain": "a string value",
    "eu": true,
    "header": {
      "key": "value"
    },
    "type": "a string value",
    "url": "a string value"
  },
  "maxConcurrentRequests": 123,
  "maxHttp10ResponseSize": 123,
  "maxLogsSize": 123123,
  "middleFingers": true,
  "perIpThrottlingQuota": 123,
  "privateAppsAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "streamEntityOnly": true,
  "throttlingQuota": 123,
  "u2fLoginOnly": true,
  "useCircuitBreakers": true
}
```

<h3 id="update-the-global-configuration-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalConfig](#schemaglobalconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-import">import</h1>

Everything about Otoroshi import/export

## Import the full state of Otoroshi as a file

<a id="opIdfullImportFromFile"></a>

> Code samples

```bash
curl https://example.com/api/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "admins": [
      {
        "createdAt": 123,
        "label": "a string value",
        "password": "a string value",
        "registration": {
          "key": "value"
        },
        "username": "a string value"
      }
    ],
    "apiKeys": [
      {
        "authorizedEntities": [
          "a string value"
        ],
        "clientId": "a string value",
        "clientName": "a string value",
        "clientSecret": "a string value",
        "dailyQuota": 123,
        "enabled": true,
        "metadata": {
          "key": "value"
        },
        "monthlyQuota": 123,
        "throttlingQuota": 123
      }
    ],
    "appConfig": {
      "key": "value"
    },
    "config": {
      "alertsEmails": [
        "admin@otoroshi.io"
      ],
      "alertsWebhooks": [
        {
          "headers": {
            "key": "value"
          },
          "url": "http://www.google.com"
        }
      ],
      "analyticsWebhooks": [
        {
          "headers": {
            "key": "value"
          },
          "url": "http://www.google.com"
        }
      ],
      "apiReadOnly": true,
      "autoLinkToDefaultGroup": true,
      "backofficeAuth0Config": {
        "callbackUrl": "a string value",
        "clientId": "a string value",
        "clientSecret": "a string value",
        "domain": "a string value"
      },
      "cleverSettings": {
        "consumerKey": "a string value",
        "consumerSecret": "a string value",
        "orgaId": "a string value",
        "secret": "a string value",
        "token": "a string value"
      },
      "elasticReadsConfig": {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      },
      "elasticWritesConfigs": [
        {
          "clusterUri": "a string value",
          "headers": {
            "key": "value"
          },
          "index": "a string value",
          "password": "a string value",
          "type": "a string value",
          "user": "a string value"
        }
      ],
      "endlessIpAddresses": [
        "192.192.192.192"
      ],
      "ipFiltering": {
        "blacklist": [
          "192.192.192.192"
        ],
        "whitelist": [
          "192.192.192.192"
        ]
      },
      "limitConcurrentRequests": true,
      "lines": [
        "a string value"
      ],
      "mailerSettings": {
        "apiKey": "a string value",
        "apiKeyPrivate": "a string value",
        "apiKeyPublic": "a string value",
        "domain": "a string value",
        "eu": true,
        "header": {
          "key": "value"
        },
        "type": "a string value",
        "url": "a string value"
      },
      "maxConcurrentRequests": 123,
      "maxHttp10ResponseSize": 123,
      "maxLogsSize": 123123,
      "middleFingers": true,
      "perIpThrottlingQuota": 123,
      "privateAppsAuth0Config": {
        "callbackUrl": "a string value",
        "clientId": "a string value",
        "clientSecret": "a string value",
        "domain": "a string value"
      },
      "streamEntityOnly": true,
      "throttlingQuota": 123,
      "u2fLoginOnly": true,
      "useCircuitBreakers": true
    },
    "date": "2017-07-21T17:32:28Z",
    "dateRaw": 123,
    "errorTemplates": [
      {
        "messages": {
          "key": "value"
        },
        "serviceId": "a string value",
        "template40x": "a string value",
        "template50x": "a string value",
        "templateBuild": "a string value",
        "templateMaintenance": "a string value"
      }
    ],
    "label": "a string value",
    "serviceDescriptors": [
      {
        "Canary": {
          "enabled": true,
          "root": "a string value",
          "targets": [
            {
              "host": "www.google.com",
              "scheme": "a string value"
            }
          ],
          "traffic": 123123
        },
        "additionalHeaders": {
          "key": "value"
        },
        "api": {
          "exposeApi": true,
          "openApiDescriptorUrl": "http://www.google.com"
        },
        "authConfigRef": "a string value",
        "buildMode": true,
        "chaosConfig": {
          "badResponsesFaultConfig": {
            "ratio": 42.2,
            "responses": [
              {
                "body": "a string value",
                "headers": {
                  "key": "value"
                },
                "status": 123123
              }
            ]
          },
          "enabled": true,
          "largeRequestFaultConfig": {
            "additionalRequestSize": 123123,
            "ratio": 42.2
          },
          "largeResponseFaultConfig": {
            "additionalRequestSize": 123123,
            "ratio": 42.2
          },
          "latencyInjectionFaultConfig": {
            "from": 123123,
            "ratio": 42.2,
            "to": 123123
          }
        },
        "clientConfig": {
          "backoffFactor": 123123,
          "callTimeout": 123123,
          "globalTimeout": 123123,
          "maxErrors": 123123,
          "retries": 123123,
          "retryInitialDelay": 123123,
          "sampleInterval": 123123,
          "useCircuitBreaker": true
        },
        "clientValidatorRef": "a string value",
        "cors": {
          "allowCredentials": true,
          "allowHeaders": [
            "a string value"
          ],
          "allowMethods": [
            "a string value"
          ],
          "allowOrigin": "a string value",
          "enabled": true,
          "excludedPatterns": [
            "a string value"
          ],
          "exposeHeaders": [
            "a string value"
          ],
          "maxAge": 123123
        },
        "domain": "a string value",
        "enabled": true,
        "enforceSecureCommunication": true,
        "env": "a string value",
        "forceHttps": true,
        "groups": [
          "a string value"
        ],
        "gzip": {
          "blackList": [
            "a string value"
          ],
          "bufferSize": 123,
          "chunkedThreshold": 123,
          "compressionLevel": 123123,
          "enabled": true,
          "excludedPatterns": [
            "a string value"
          ],
          "whiteList": [
            "a string value"
          ]
        },
        "headersVerification": {
          "key": "value"
        },
        "healthCheck": {
          "enabled": true,
          "url": "http://www.google.com"
        },
        "id": "110e8400-e29b-11d4-a716-446655440000",
        "ipFiltering": {
          "blacklist": [
            "192.192.192.192"
          ],
          "whitelist": [
            "192.192.192.192"
          ]
        },
        "jwtVerifier": {
          "algoSettings": {
            "secret": "a string value",
            "size": 123123,
            "type": "a string value"
          },
          "enabled": true,
          "source": {
            "name": "a string value",
            "type": "a string value"
          },
          "strategy": {
            "type": "a string value",
            "verificationSettings": {
              "fields": {
                "key": "value"
              },
              "mappingSettings": {
                "map": {
                  "key": "value"
                },
                "remove": [
                  "a string value"
                ],
                "values": {
                  "key": "value"
                }
              }
            }
          },
          "strict": true,
          "type": "a string value"
        },
        "localHost": "a string value",
        "localScheme": "a string value",
        "maintenanceMode": true,
        "matchingHeaders": {
          "key": "value"
        },
        "matchingRoot": "a string value",
        "metadata": {
          "key": "value"
        },
        "name": "a string value",
        "overrideHost": true,
        "privateApp": true,
        "privatePatterns": [
          "a string value"
        ],
        "publicPatterns": [
          "a string value"
        ],
        "redirectToLocal": true,
        "redirection": {
          "code": 123123,
          "enabled": true,
          "to": "a string value"
        },
        "root": "a string value",
        "secComExcludedPatterns": [
          "a string value"
        ],
        "secComSettings": {
          "secret": "a string value",
          "size": 123123,
          "type": "a string value"
        },
        "sendOtoroshiHeadersBack": true,
        "statsdConfig": {
          "datadog": true,
          "host": "a string value",
          "port": 123123
        },
        "subdomain": "a string value",
        "targets": [
          {
            "host": "www.google.com",
            "scheme": "a string value"
          }
        ],
        "transformerRef": "a string value",
        "userFacing": true,
        "xForwardedHeaders": true
      }
    ],
    "serviceGroups": [
      {
        "description": "a string value",
        "id": "a string value",
        "name": "a string value"
      }
    ],
    "simpleAdmins": [
      {
        "createdAt": 123,
        "label": "a string value",
        "password": "a string value",
        "username": "a string value"
      }
    ],
    "stats": {
      "calls": 123,
      "dataIn": 123,
      "dataOut": 123
    }
  }'
```

`POST /api/import`

Import the full state of Otoroshi as a file

> Body parameter

```json
{
  "admins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "registration": {
        "key": "value"
      },
      "username": "a string value"
    }
  ],
  "apiKeys": [
    {
      "authorizedEntities": [
        "a string value"
      ],
      "clientId": "a string value",
      "clientName": "a string value",
      "clientSecret": "a string value",
      "dailyQuota": 123,
      "enabled": true,
      "metadata": {
        "key": "value"
      },
      "monthlyQuota": 123,
      "throttlingQuota": 123
    }
  ],
  "appConfig": {
    "key": "value"
  },
  "config": {
    "alertsEmails": [
      "admin@otoroshi.io"
    ],
    "alertsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "analyticsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "apiReadOnly": true,
    "autoLinkToDefaultGroup": true,
    "backofficeAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "cleverSettings": {
      "consumerKey": "a string value",
      "consumerSecret": "a string value",
      "orgaId": "a string value",
      "secret": "a string value",
      "token": "a string value"
    },
    "elasticReadsConfig": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "elasticWritesConfigs": [
      {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      }
    ],
    "endlessIpAddresses": [
      "192.192.192.192"
    ],
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "limitConcurrentRequests": true,
    "lines": [
      "a string value"
    ],
    "mailerSettings": {
      "apiKey": "a string value",
      "apiKeyPrivate": "a string value",
      "apiKeyPublic": "a string value",
      "domain": "a string value",
      "eu": true,
      "header": {
        "key": "value"
      },
      "type": "a string value",
      "url": "a string value"
    },
    "maxConcurrentRequests": 123,
    "maxHttp10ResponseSize": 123,
    "maxLogsSize": 123123,
    "middleFingers": true,
    "perIpThrottlingQuota": 123,
    "privateAppsAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "streamEntityOnly": true,
    "throttlingQuota": 123,
    "u2fLoginOnly": true,
    "useCircuitBreakers": true
  },
  "date": "2017-07-21T17:32:28Z",
  "dateRaw": 123,
  "errorTemplates": [
    {
      "messages": {
        "key": "value"
      },
      "serviceId": "a string value",
      "template40x": "a string value",
      "template50x": "a string value",
      "templateBuild": "a string value",
      "templateMaintenance": "a string value"
    }
  ],
  "label": "a string value",
  "serviceDescriptors": [
    {
      "Canary": {
        "enabled": true,
        "root": "a string value",
        "targets": [
          {
            "host": "www.google.com",
            "scheme": "a string value"
          }
        ],
        "traffic": 123123
      },
      "additionalHeaders": {
        "key": "value"
      },
      "api": {
        "exposeApi": true,
        "openApiDescriptorUrl": "http://www.google.com"
      },
      "authConfigRef": "a string value",
      "buildMode": true,
      "chaosConfig": {
        "badResponsesFaultConfig": {
          "ratio": 42.2,
          "responses": [
            {
              "body": "a string value",
              "headers": {
                "key": "value"
              },
              "status": 123123
            }
          ]
        },
        "enabled": true,
        "largeRequestFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "largeResponseFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "latencyInjectionFaultConfig": {
          "from": 123123,
          "ratio": 42.2,
          "to": 123123
        }
      },
      "clientConfig": {
        "backoffFactor": 123123,
        "callTimeout": 123123,
        "globalTimeout": 123123,
        "maxErrors": 123123,
        "retries": 123123,
        "retryInitialDelay": 123123,
        "sampleInterval": 123123,
        "useCircuitBreaker": true
      },
      "clientValidatorRef": "a string value",
      "cors": {
        "allowCredentials": true,
        "allowHeaders": [
          "a string value"
        ],
        "allowMethods": [
          "a string value"
        ],
        "allowOrigin": "a string value",
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "exposeHeaders": [
          "a string value"
        ],
        "maxAge": 123123
      },
      "domain": "a string value",
      "enabled": true,
      "enforceSecureCommunication": true,
      "env": "a string value",
      "forceHttps": true,
      "groups": [
        "a string value"
      ],
      "gzip": {
        "blackList": [
          "a string value"
        ],
        "bufferSize": 123,
        "chunkedThreshold": 123,
        "compressionLevel": 123123,
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "whiteList": [
          "a string value"
        ]
      },
      "headersVerification": {
        "key": "value"
      },
      "healthCheck": {
        "enabled": true,
        "url": "http://www.google.com"
      },
      "id": "110e8400-e29b-11d4-a716-446655440000",
      "ipFiltering": {
        "blacklist": [
          "192.192.192.192"
        ],
        "whitelist": [
          "192.192.192.192"
        ]
      },
      "jwtVerifier": {
        "algoSettings": {
          "secret": "a string value",
          "size": 123123,
          "type": "a string value"
        },
        "enabled": true,
        "source": {
          "name": "a string value",
          "type": "a string value"
        },
        "strategy": {
          "type": "a string value",
          "verificationSettings": {
            "fields": {
              "key": "value"
            },
            "mappingSettings": {
              "map": {
                "key": "value"
              },
              "remove": [
                "a string value"
              ],
              "values": {
                "key": "value"
              }
            }
          }
        },
        "strict": true,
        "type": "a string value"
      },
      "localHost": "a string value",
      "localScheme": "a string value",
      "maintenanceMode": true,
      "matchingHeaders": {
        "key": "value"
      },
      "matchingRoot": "a string value",
      "metadata": {
        "key": "value"
      },
      "name": "a string value",
      "overrideHost": true,
      "privateApp": true,
      "privatePatterns": [
        "a string value"
      ],
      "publicPatterns": [
        "a string value"
      ],
      "redirectToLocal": true,
      "redirection": {
        "code": 123123,
        "enabled": true,
        "to": "a string value"
      },
      "root": "a string value",
      "secComExcludedPatterns": [
        "a string value"
      ],
      "secComSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "sendOtoroshiHeadersBack": true,
      "statsdConfig": {
        "datadog": true,
        "host": "a string value",
        "port": 123123
      },
      "subdomain": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "transformerRef": "a string value",
      "userFacing": true,
      "xForwardedHeaders": true
    }
  ],
  "serviceGroups": [
    {
      "description": "a string value",
      "id": "a string value",
      "name": "a string value"
    }
  ],
  "simpleAdmins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "username": "a string value"
    }
  ],
  "stats": {
    "calls": 123,
    "dataIn": 123,
    "dataOut": 123
  }
}
```

<h3 id="import-the-full-state-of-otoroshi-as-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportExport](#schemaimportexport)|false|none|
|» admins|body|[object]|true|Current U2F admin at the time of export|
|» » createdAt|body|integer(int64)|true|The creation date of the user|
|» » label|body|string|true|The label for the user|
|» » password|body|string|true|The hashed password of the user|
|» » registration|body|object|true|The U2F registration slug|
|» » » **additionalProperties**|body|string|false|none|
|» » username|body|string|true|The email address of the user|
|» apiKeys|body|[object]|true|Current apik keys at the time of export|
|» » authorizedEntities|body|[string]|true|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|» » clientId|body|string|true|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|» » clientName|body|string|true|The name of the api key, for humans ;-)|
|» » clientSecret|body|string|true|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|» » dailyQuota|body|integer(int64)|false|Authorized number of calls per day|
|» » enabled|body|boolean|true|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|» » metadata|body|object|false|Bunch of metadata for the key|
|» » » **additionalProperties**|body|string|false|none|
|» » monthlyQuota|body|integer(int64)|false|Authorized number of calls per month|
|» » throttlingQuota|body|integer(int64)|false|Authorized number of calls per second, measured on 10 seconds|
|» appConfig|body|object|false|Current env variables at the time of export|
|» » **additionalProperties**|body|string|false|none|
|» config|body|[GlobalConfig](#schemaglobalconfig)|true|Current global config at the time of export|
|» date|body|string(date-time)|true|none|
|» dateRaw|body|integer(int64)|true|none|
|» errorTemplates|body|[object]|true|Current error templates at the time of export|
|» » messages|body|object|true|Map for custom messages|
|» » » **additionalProperties**|body|string|false|none|
|» » serviceId|body|string|true|The Id of the service for which the error template is enabled|
|» » template40x|body|string|true|The html template for 40x errors|
|» » template50x|body|string|true|The html template for 50x errors|
|» » templateBuild|body|string|true|The html template for build page|
|» » templateMaintenance|body|string|true|The html template for maintenance page|
|» label|body|string|true|none|
|» serviceDescriptors|body|[object]|true|Current service descriptors at the time of export|
|» » Canary|body|[Canary](#schemacanary)|false|The configuration of the canary mode for a service descriptor|
|» » additionalHeaders|body|object|false|Specify headers that will be added to each client request. Useful to add authentication|
|» » » **additionalProperties**|body|string|false|none|
|» » api|body|[ExposedApi](#schemaexposedapi)|false|The Open API configuration for your service (if one)|
|» » authConfigRef|body|string|false|A reference to a global auth module config|
|» » buildMode|body|boolean|true|Display a construction page when a user try to use the service|
|» » chaosConfig|body|[ChaosConfig](#schemachaosconfig)|false|Configuration for the faults that can be injected in requests|
|» » clientConfig|body|[ClientConfig](#schemaclientconfig)|false|The configuration of the circuit breaker for a service descriptor|
|» » clientValidatorRef|body|string|false|A reference to validation authority|
|» » cors|body|[CorsSettings](#schemacorssettings)|false|The configuration for cors support|
|» » domain|body|string|true|The domain on which the service is available.|
|» » enabled|body|boolean|true|Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist|
|» » enforceSecureCommunication|body|boolean|true|When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside|
|» » env|body|string|true|The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'|
|» » forceHttps|body|boolean|true|Will force redirection to https:// if not present|
|» » groups|body|[string]|true|Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group|
|» » gzip|body|[Gzip](#schemagzip)|false|Configuration for gzip of service responses|
|» » headersVerification|body|object|false|Specify headers that will be verified after routing.|
|» » » **additionalProperties**|body|string|false|none|
|» » healthCheck|body|[HealthCheck](#schemahealthcheck)|false|The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive|
|» » id|body|string(uuid)|true|A unique random string to identify your service|
|» » ipFiltering|body|[IpFiltering](#schemaipfiltering)|false|The filtering configuration block for a service of globally.|
|» » jwtVerifier|body|[LocalJwtVerifier](#schemalocaljwtverifier) \| [RefJwtVerifier](#schemarefjwtverifier)|false|none|
|» » » *oneOf*|body|[LocalJwtVerifier](#schemalocaljwtverifier)|false|A JWT verifier used only for the current service descriptor|
|» » » *oneOf*|body|[RefJwtVerifier](#schemarefjwtverifier)|false|Reference to a global JWT verifier|
|» » localHost|body|string|false|The host used localy, mainly localhost:xxxx|
|» » localScheme|body|string|false|The scheme used localy, mainly http|
|» » maintenanceMode|body|boolean|true|Display a maintainance page when a user try to use the service|
|» » matchingHeaders|body|object|false|Specify headers that MUST be present on client request to route it. Useful to implement versioning|
|» » » **additionalProperties**|body|string|false|none|
|» » matchingRoot|body|string|false|The root path on which the service is available|
|» » metadata|body|object|false|Just a bunch of random properties|
|» » » **additionalProperties**|body|string|false|none|
|» » name|body|string|true|The name of your service. Only for debug and human readability purposes|
|» » overrideHost|body|boolean|false|Host header will be overriden with Host of the target|
|» » privateApp|body|boolean|true|When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain|
|» » privatePatterns|body|[string]|false|If you define a public pattern that is a little bit too much, you can make some of public URL private again|
|» » publicPatterns|body|[string]|false|By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'|
|» » redirectToLocal|body|boolean|false|If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests|
|» » redirection|body|[RedirectionSettings](#schemaredirectionsettings)|false|The configuration for redirection per service|
|» » root|body|string|true|Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar|
|» » secComExcludedPatterns|body|[string]|false|URI patterns excluded from secured communications|
|» » secComSettings|body|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|false|none|
|» » » *oneOf*|body|[HSAlgoSettings](#schemahsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » » *oneOf*|body|[RSAlgoSettings](#schemarsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » » *oneOf*|body|[ESAlgoSettings](#schemaesalgosettings)|false|Settings for an EC + SHA signing algorithm|
|» » » *oneOf*|body|[JWKSAlgoSettings](#schemajwksalgosettings)|false|Settings for a JWK set|
|» » sendOtoroshiHeadersBack|body|boolean|false|When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...|
|» » statsdConfig|body|[StatsdConfig](#schemastatsdconfig)|false|The configuration for statsd metrics push|
|» » subdomain|body|string|true|The subdomain on which the service is available|
|» » targets|body|[[Target](#schematarget)]|true|The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures|
|» » transformerRef|body|string|false|A reference to a request transformer|
|» » userFacing|body|boolean|false|The fact that this service will be seen by users and cannot be impacted by the Snow Monkey|
|» » xForwardedHeaders|body|boolean|false|Send X-Forwarded-* headers|
|» serviceGroups|body|[object]|true|Current service groups at the time of export|
|» » description|body|string|false|The descriptoin of the group|
|» » id|body|string|true|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|» » name|body|string|true|The name of the group|
|» simpleAdmins|body|[object]|true|Current simple admins at the time of export|
|» » createdAt|body|integer(int64)|true|The creation date of the user|
|» » label|body|string|true|The label for the user|
|» » password|body|string|true|The hashed password of the user|
|» » username|body|string|true|The email address of the user|
|» stats|body|[ImportExportStats](#schemaimportexportstats)|true|Current global stats at the time of export|

> Example responses

> 200 Response

```json
{
  "done": true
}
```

<h3 id="import-the-full-state-of-otoroshi-as-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Done](#schemadone)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Export the full state of Otoroshi

<a id="opIdfullExport"></a>

> Code samples

```bash
curl https://example.com/api/otoroshi.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/otoroshi.json`

Export the full state of Otoroshi

> Example responses

> 200 Response

```json
{
  "admins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "registration": {
        "key": "value"
      },
      "username": "a string value"
    }
  ],
  "apiKeys": [
    {
      "authorizedEntities": [
        "a string value"
      ],
      "clientId": "a string value",
      "clientName": "a string value",
      "clientSecret": "a string value",
      "dailyQuota": 123,
      "enabled": true,
      "metadata": {
        "key": "value"
      },
      "monthlyQuota": 123,
      "throttlingQuota": 123
    }
  ],
  "appConfig": {
    "key": "value"
  },
  "config": {
    "alertsEmails": [
      "admin@otoroshi.io"
    ],
    "alertsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "analyticsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "apiReadOnly": true,
    "autoLinkToDefaultGroup": true,
    "backofficeAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "cleverSettings": {
      "consumerKey": "a string value",
      "consumerSecret": "a string value",
      "orgaId": "a string value",
      "secret": "a string value",
      "token": "a string value"
    },
    "elasticReadsConfig": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "elasticWritesConfigs": [
      {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      }
    ],
    "endlessIpAddresses": [
      "192.192.192.192"
    ],
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "limitConcurrentRequests": true,
    "lines": [
      "a string value"
    ],
    "mailerSettings": {
      "apiKey": "a string value",
      "apiKeyPrivate": "a string value",
      "apiKeyPublic": "a string value",
      "domain": "a string value",
      "eu": true,
      "header": {
        "key": "value"
      },
      "type": "a string value",
      "url": "a string value"
    },
    "maxConcurrentRequests": 123,
    "maxHttp10ResponseSize": 123,
    "maxLogsSize": 123123,
    "middleFingers": true,
    "perIpThrottlingQuota": 123,
    "privateAppsAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "streamEntityOnly": true,
    "throttlingQuota": 123,
    "u2fLoginOnly": true,
    "useCircuitBreakers": true
  },
  "date": "2017-07-21T17:32:28Z",
  "dateRaw": 123,
  "errorTemplates": [
    {
      "messages": {
        "key": "value"
      },
      "serviceId": "a string value",
      "template40x": "a string value",
      "template50x": "a string value",
      "templateBuild": "a string value",
      "templateMaintenance": "a string value"
    }
  ],
  "label": "a string value",
  "serviceDescriptors": [
    {
      "Canary": {
        "enabled": true,
        "root": "a string value",
        "targets": [
          {
            "host": "www.google.com",
            "scheme": "a string value"
          }
        ],
        "traffic": 123123
      },
      "additionalHeaders": {
        "key": "value"
      },
      "api": {
        "exposeApi": true,
        "openApiDescriptorUrl": "http://www.google.com"
      },
      "authConfigRef": "a string value",
      "buildMode": true,
      "chaosConfig": {
        "badResponsesFaultConfig": {
          "ratio": 42.2,
          "responses": [
            {
              "body": "a string value",
              "headers": {
                "key": "value"
              },
              "status": 123123
            }
          ]
        },
        "enabled": true,
        "largeRequestFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "largeResponseFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "latencyInjectionFaultConfig": {
          "from": 123123,
          "ratio": 42.2,
          "to": 123123
        }
      },
      "clientConfig": {
        "backoffFactor": 123123,
        "callTimeout": 123123,
        "globalTimeout": 123123,
        "maxErrors": 123123,
        "retries": 123123,
        "retryInitialDelay": 123123,
        "sampleInterval": 123123,
        "useCircuitBreaker": true
      },
      "clientValidatorRef": "a string value",
      "cors": {
        "allowCredentials": true,
        "allowHeaders": [
          "a string value"
        ],
        "allowMethods": [
          "a string value"
        ],
        "allowOrigin": "a string value",
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "exposeHeaders": [
          "a string value"
        ],
        "maxAge": 123123
      },
      "domain": "a string value",
      "enabled": true,
      "enforceSecureCommunication": true,
      "env": "a string value",
      "forceHttps": true,
      "groups": [
        "a string value"
      ],
      "gzip": {
        "blackList": [
          "a string value"
        ],
        "bufferSize": 123,
        "chunkedThreshold": 123,
        "compressionLevel": 123123,
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "whiteList": [
          "a string value"
        ]
      },
      "headersVerification": {
        "key": "value"
      },
      "healthCheck": {
        "enabled": true,
        "url": "http://www.google.com"
      },
      "id": "110e8400-e29b-11d4-a716-446655440000",
      "ipFiltering": {
        "blacklist": [
          "192.192.192.192"
        ],
        "whitelist": [
          "192.192.192.192"
        ]
      },
      "jwtVerifier": {
        "algoSettings": {
          "secret": "a string value",
          "size": 123123,
          "type": "a string value"
        },
        "enabled": true,
        "source": {
          "name": "a string value",
          "type": "a string value"
        },
        "strategy": {
          "type": "a string value",
          "verificationSettings": {
            "fields": {
              "key": "value"
            },
            "mappingSettings": {
              "map": {
                "key": "value"
              },
              "remove": [
                "a string value"
              ],
              "values": {
                "key": "value"
              }
            }
          }
        },
        "strict": true,
        "type": "a string value"
      },
      "localHost": "a string value",
      "localScheme": "a string value",
      "maintenanceMode": true,
      "matchingHeaders": {
        "key": "value"
      },
      "matchingRoot": "a string value",
      "metadata": {
        "key": "value"
      },
      "name": "a string value",
      "overrideHost": true,
      "privateApp": true,
      "privatePatterns": [
        "a string value"
      ],
      "publicPatterns": [
        "a string value"
      ],
      "redirectToLocal": true,
      "redirection": {
        "code": 123123,
        "enabled": true,
        "to": "a string value"
      },
      "root": "a string value",
      "secComExcludedPatterns": [
        "a string value"
      ],
      "secComSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "sendOtoroshiHeadersBack": true,
      "statsdConfig": {
        "datadog": true,
        "host": "a string value",
        "port": 123123
      },
      "subdomain": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "transformerRef": "a string value",
      "userFacing": true,
      "xForwardedHeaders": true
    }
  ],
  "serviceGroups": [
    {
      "description": "a string value",
      "id": "a string value",
      "name": "a string value"
    }
  ],
  "simpleAdmins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "username": "a string value"
    }
  ],
  "stats": {
    "calls": 123,
    "dataIn": 123,
    "dataOut": 123
  }
}
```

<h3 id="export-the-full-state-of-otoroshi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ImportExport](#schemaimportexport)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Import the full state of Otoroshi

<a id="opIdfullImport"></a>

> Code samples

```bash
curl https://example.com/api/otoroshi.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "admins": [
      {
        "createdAt": 123,
        "label": "a string value",
        "password": "a string value",
        "registration": {
          "key": "value"
        },
        "username": "a string value"
      }
    ],
    "apiKeys": [
      {
        "authorizedEntities": [
          "a string value"
        ],
        "clientId": "a string value",
        "clientName": "a string value",
        "clientSecret": "a string value",
        "dailyQuota": 123,
        "enabled": true,
        "metadata": {
          "key": "value"
        },
        "monthlyQuota": 123,
        "throttlingQuota": 123
      }
    ],
    "appConfig": {
      "key": "value"
    },
    "config": {
      "alertsEmails": [
        "admin@otoroshi.io"
      ],
      "alertsWebhooks": [
        {
          "headers": {
            "key": "value"
          },
          "url": "http://www.google.com"
        }
      ],
      "analyticsWebhooks": [
        {
          "headers": {
            "key": "value"
          },
          "url": "http://www.google.com"
        }
      ],
      "apiReadOnly": true,
      "autoLinkToDefaultGroup": true,
      "backofficeAuth0Config": {
        "callbackUrl": "a string value",
        "clientId": "a string value",
        "clientSecret": "a string value",
        "domain": "a string value"
      },
      "cleverSettings": {
        "consumerKey": "a string value",
        "consumerSecret": "a string value",
        "orgaId": "a string value",
        "secret": "a string value",
        "token": "a string value"
      },
      "elasticReadsConfig": {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      },
      "elasticWritesConfigs": [
        {
          "clusterUri": "a string value",
          "headers": {
            "key": "value"
          },
          "index": "a string value",
          "password": "a string value",
          "type": "a string value",
          "user": "a string value"
        }
      ],
      "endlessIpAddresses": [
        "192.192.192.192"
      ],
      "ipFiltering": {
        "blacklist": [
          "192.192.192.192"
        ],
        "whitelist": [
          "192.192.192.192"
        ]
      },
      "limitConcurrentRequests": true,
      "lines": [
        "a string value"
      ],
      "mailerSettings": {
        "apiKey": "a string value",
        "apiKeyPrivate": "a string value",
        "apiKeyPublic": "a string value",
        "domain": "a string value",
        "eu": true,
        "header": {
          "key": "value"
        },
        "type": "a string value",
        "url": "a string value"
      },
      "maxConcurrentRequests": 123,
      "maxHttp10ResponseSize": 123,
      "maxLogsSize": 123123,
      "middleFingers": true,
      "perIpThrottlingQuota": 123,
      "privateAppsAuth0Config": {
        "callbackUrl": "a string value",
        "clientId": "a string value",
        "clientSecret": "a string value",
        "domain": "a string value"
      },
      "streamEntityOnly": true,
      "throttlingQuota": 123,
      "u2fLoginOnly": true,
      "useCircuitBreakers": true
    },
    "date": "2017-07-21T17:32:28Z",
    "dateRaw": 123,
    "errorTemplates": [
      {
        "messages": {
          "key": "value"
        },
        "serviceId": "a string value",
        "template40x": "a string value",
        "template50x": "a string value",
        "templateBuild": "a string value",
        "templateMaintenance": "a string value"
      }
    ],
    "label": "a string value",
    "serviceDescriptors": [
      {
        "Canary": {
          "enabled": true,
          "root": "a string value",
          "targets": [
            {
              "host": "www.google.com",
              "scheme": "a string value"
            }
          ],
          "traffic": 123123
        },
        "additionalHeaders": {
          "key": "value"
        },
        "api": {
          "exposeApi": true,
          "openApiDescriptorUrl": "http://www.google.com"
        },
        "authConfigRef": "a string value",
        "buildMode": true,
        "chaosConfig": {
          "badResponsesFaultConfig": {
            "ratio": 42.2,
            "responses": [
              {
                "body": "a string value",
                "headers": {
                  "key": "value"
                },
                "status": 123123
              }
            ]
          },
          "enabled": true,
          "largeRequestFaultConfig": {
            "additionalRequestSize": 123123,
            "ratio": 42.2
          },
          "largeResponseFaultConfig": {
            "additionalRequestSize": 123123,
            "ratio": 42.2
          },
          "latencyInjectionFaultConfig": {
            "from": 123123,
            "ratio": 42.2,
            "to": 123123
          }
        },
        "clientConfig": {
          "backoffFactor": 123123,
          "callTimeout": 123123,
          "globalTimeout": 123123,
          "maxErrors": 123123,
          "retries": 123123,
          "retryInitialDelay": 123123,
          "sampleInterval": 123123,
          "useCircuitBreaker": true
        },
        "clientValidatorRef": "a string value",
        "cors": {
          "allowCredentials": true,
          "allowHeaders": [
            "a string value"
          ],
          "allowMethods": [
            "a string value"
          ],
          "allowOrigin": "a string value",
          "enabled": true,
          "excludedPatterns": [
            "a string value"
          ],
          "exposeHeaders": [
            "a string value"
          ],
          "maxAge": 123123
        },
        "domain": "a string value",
        "enabled": true,
        "enforceSecureCommunication": true,
        "env": "a string value",
        "forceHttps": true,
        "groups": [
          "a string value"
        ],
        "gzip": {
          "blackList": [
            "a string value"
          ],
          "bufferSize": 123,
          "chunkedThreshold": 123,
          "compressionLevel": 123123,
          "enabled": true,
          "excludedPatterns": [
            "a string value"
          ],
          "whiteList": [
            "a string value"
          ]
        },
        "headersVerification": {
          "key": "value"
        },
        "healthCheck": {
          "enabled": true,
          "url": "http://www.google.com"
        },
        "id": "110e8400-e29b-11d4-a716-446655440000",
        "ipFiltering": {
          "blacklist": [
            "192.192.192.192"
          ],
          "whitelist": [
            "192.192.192.192"
          ]
        },
        "jwtVerifier": {
          "algoSettings": {
            "secret": "a string value",
            "size": 123123,
            "type": "a string value"
          },
          "enabled": true,
          "source": {
            "name": "a string value",
            "type": "a string value"
          },
          "strategy": {
            "type": "a string value",
            "verificationSettings": {
              "fields": {
                "key": "value"
              },
              "mappingSettings": {
                "map": {
                  "key": "value"
                },
                "remove": [
                  "a string value"
                ],
                "values": {
                  "key": "value"
                }
              }
            }
          },
          "strict": true,
          "type": "a string value"
        },
        "localHost": "a string value",
        "localScheme": "a string value",
        "maintenanceMode": true,
        "matchingHeaders": {
          "key": "value"
        },
        "matchingRoot": "a string value",
        "metadata": {
          "key": "value"
        },
        "name": "a string value",
        "overrideHost": true,
        "privateApp": true,
        "privatePatterns": [
          "a string value"
        ],
        "publicPatterns": [
          "a string value"
        ],
        "redirectToLocal": true,
        "redirection": {
          "code": 123123,
          "enabled": true,
          "to": "a string value"
        },
        "root": "a string value",
        "secComExcludedPatterns": [
          "a string value"
        ],
        "secComSettings": {
          "secret": "a string value",
          "size": 123123,
          "type": "a string value"
        },
        "sendOtoroshiHeadersBack": true,
        "statsdConfig": {
          "datadog": true,
          "host": "a string value",
          "port": 123123
        },
        "subdomain": "a string value",
        "targets": [
          {
            "host": "www.google.com",
            "scheme": "a string value"
          }
        ],
        "transformerRef": "a string value",
        "userFacing": true,
        "xForwardedHeaders": true
      }
    ],
    "serviceGroups": [
      {
        "description": "a string value",
        "id": "a string value",
        "name": "a string value"
      }
    ],
    "simpleAdmins": [
      {
        "createdAt": 123,
        "label": "a string value",
        "password": "a string value",
        "username": "a string value"
      }
    ],
    "stats": {
      "calls": 123,
      "dataIn": 123,
      "dataOut": 123
    }
  }'
```

`POST /api/otoroshi.json`

Import the full state of Otoroshi

> Body parameter

```json
{
  "admins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "registration": {
        "key": "value"
      },
      "username": "a string value"
    }
  ],
  "apiKeys": [
    {
      "authorizedEntities": [
        "a string value"
      ],
      "clientId": "a string value",
      "clientName": "a string value",
      "clientSecret": "a string value",
      "dailyQuota": 123,
      "enabled": true,
      "metadata": {
        "key": "value"
      },
      "monthlyQuota": 123,
      "throttlingQuota": 123
    }
  ],
  "appConfig": {
    "key": "value"
  },
  "config": {
    "alertsEmails": [
      "admin@otoroshi.io"
    ],
    "alertsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "analyticsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "apiReadOnly": true,
    "autoLinkToDefaultGroup": true,
    "backofficeAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "cleverSettings": {
      "consumerKey": "a string value",
      "consumerSecret": "a string value",
      "orgaId": "a string value",
      "secret": "a string value",
      "token": "a string value"
    },
    "elasticReadsConfig": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "elasticWritesConfigs": [
      {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      }
    ],
    "endlessIpAddresses": [
      "192.192.192.192"
    ],
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "limitConcurrentRequests": true,
    "lines": [
      "a string value"
    ],
    "mailerSettings": {
      "apiKey": "a string value",
      "apiKeyPrivate": "a string value",
      "apiKeyPublic": "a string value",
      "domain": "a string value",
      "eu": true,
      "header": {
        "key": "value"
      },
      "type": "a string value",
      "url": "a string value"
    },
    "maxConcurrentRequests": 123,
    "maxHttp10ResponseSize": 123,
    "maxLogsSize": 123123,
    "middleFingers": true,
    "perIpThrottlingQuota": 123,
    "privateAppsAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "streamEntityOnly": true,
    "throttlingQuota": 123,
    "u2fLoginOnly": true,
    "useCircuitBreakers": true
  },
  "date": "2017-07-21T17:32:28Z",
  "dateRaw": 123,
  "errorTemplates": [
    {
      "messages": {
        "key": "value"
      },
      "serviceId": "a string value",
      "template40x": "a string value",
      "template50x": "a string value",
      "templateBuild": "a string value",
      "templateMaintenance": "a string value"
    }
  ],
  "label": "a string value",
  "serviceDescriptors": [
    {
      "Canary": {
        "enabled": true,
        "root": "a string value",
        "targets": [
          {
            "host": "www.google.com",
            "scheme": "a string value"
          }
        ],
        "traffic": 123123
      },
      "additionalHeaders": {
        "key": "value"
      },
      "api": {
        "exposeApi": true,
        "openApiDescriptorUrl": "http://www.google.com"
      },
      "authConfigRef": "a string value",
      "buildMode": true,
      "chaosConfig": {
        "badResponsesFaultConfig": {
          "ratio": 42.2,
          "responses": [
            {
              "body": "a string value",
              "headers": {
                "key": "value"
              },
              "status": 123123
            }
          ]
        },
        "enabled": true,
        "largeRequestFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "largeResponseFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "latencyInjectionFaultConfig": {
          "from": 123123,
          "ratio": 42.2,
          "to": 123123
        }
      },
      "clientConfig": {
        "backoffFactor": 123123,
        "callTimeout": 123123,
        "globalTimeout": 123123,
        "maxErrors": 123123,
        "retries": 123123,
        "retryInitialDelay": 123123,
        "sampleInterval": 123123,
        "useCircuitBreaker": true
      },
      "clientValidatorRef": "a string value",
      "cors": {
        "allowCredentials": true,
        "allowHeaders": [
          "a string value"
        ],
        "allowMethods": [
          "a string value"
        ],
        "allowOrigin": "a string value",
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "exposeHeaders": [
          "a string value"
        ],
        "maxAge": 123123
      },
      "domain": "a string value",
      "enabled": true,
      "enforceSecureCommunication": true,
      "env": "a string value",
      "forceHttps": true,
      "groups": [
        "a string value"
      ],
      "gzip": {
        "blackList": [
          "a string value"
        ],
        "bufferSize": 123,
        "chunkedThreshold": 123,
        "compressionLevel": 123123,
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "whiteList": [
          "a string value"
        ]
      },
      "headersVerification": {
        "key": "value"
      },
      "healthCheck": {
        "enabled": true,
        "url": "http://www.google.com"
      },
      "id": "110e8400-e29b-11d4-a716-446655440000",
      "ipFiltering": {
        "blacklist": [
          "192.192.192.192"
        ],
        "whitelist": [
          "192.192.192.192"
        ]
      },
      "jwtVerifier": {
        "algoSettings": {
          "secret": "a string value",
          "size": 123123,
          "type": "a string value"
        },
        "enabled": true,
        "source": {
          "name": "a string value",
          "type": "a string value"
        },
        "strategy": {
          "type": "a string value",
          "verificationSettings": {
            "fields": {
              "key": "value"
            },
            "mappingSettings": {
              "map": {
                "key": "value"
              },
              "remove": [
                "a string value"
              ],
              "values": {
                "key": "value"
              }
            }
          }
        },
        "strict": true,
        "type": "a string value"
      },
      "localHost": "a string value",
      "localScheme": "a string value",
      "maintenanceMode": true,
      "matchingHeaders": {
        "key": "value"
      },
      "matchingRoot": "a string value",
      "metadata": {
        "key": "value"
      },
      "name": "a string value",
      "overrideHost": true,
      "privateApp": true,
      "privatePatterns": [
        "a string value"
      ],
      "publicPatterns": [
        "a string value"
      ],
      "redirectToLocal": true,
      "redirection": {
        "code": 123123,
        "enabled": true,
        "to": "a string value"
      },
      "root": "a string value",
      "secComExcludedPatterns": [
        "a string value"
      ],
      "secComSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "sendOtoroshiHeadersBack": true,
      "statsdConfig": {
        "datadog": true,
        "host": "a string value",
        "port": 123123
      },
      "subdomain": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "transformerRef": "a string value",
      "userFacing": true,
      "xForwardedHeaders": true
    }
  ],
  "serviceGroups": [
    {
      "description": "a string value",
      "id": "a string value",
      "name": "a string value"
    }
  ],
  "simpleAdmins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "username": "a string value"
    }
  ],
  "stats": {
    "calls": 123,
    "dataIn": 123,
    "dataOut": 123
  }
}
```

<h3 id="import-the-full-state-of-otoroshi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportExport](#schemaimportexport)|false|none|
|» admins|body|[object]|true|Current U2F admin at the time of export|
|» » createdAt|body|integer(int64)|true|The creation date of the user|
|» » label|body|string|true|The label for the user|
|» » password|body|string|true|The hashed password of the user|
|» » registration|body|object|true|The U2F registration slug|
|» » » **additionalProperties**|body|string|false|none|
|» » username|body|string|true|The email address of the user|
|» apiKeys|body|[object]|true|Current apik keys at the time of export|
|» » authorizedEntities|body|[string]|true|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|» » clientId|body|string|true|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|» » clientName|body|string|true|The name of the api key, for humans ;-)|
|» » clientSecret|body|string|true|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|» » dailyQuota|body|integer(int64)|false|Authorized number of calls per day|
|» » enabled|body|boolean|true|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|» » metadata|body|object|false|Bunch of metadata for the key|
|» » » **additionalProperties**|body|string|false|none|
|» » monthlyQuota|body|integer(int64)|false|Authorized number of calls per month|
|» » throttlingQuota|body|integer(int64)|false|Authorized number of calls per second, measured on 10 seconds|
|» appConfig|body|object|false|Current env variables at the time of export|
|» » **additionalProperties**|body|string|false|none|
|» config|body|[GlobalConfig](#schemaglobalconfig)|true|Current global config at the time of export|
|» date|body|string(date-time)|true|none|
|» dateRaw|body|integer(int64)|true|none|
|» errorTemplates|body|[object]|true|Current error templates at the time of export|
|» » messages|body|object|true|Map for custom messages|
|» » » **additionalProperties**|body|string|false|none|
|» » serviceId|body|string|true|The Id of the service for which the error template is enabled|
|» » template40x|body|string|true|The html template for 40x errors|
|» » template50x|body|string|true|The html template for 50x errors|
|» » templateBuild|body|string|true|The html template for build page|
|» » templateMaintenance|body|string|true|The html template for maintenance page|
|» label|body|string|true|none|
|» serviceDescriptors|body|[object]|true|Current service descriptors at the time of export|
|» » Canary|body|[Canary](#schemacanary)|false|The configuration of the canary mode for a service descriptor|
|» » additionalHeaders|body|object|false|Specify headers that will be added to each client request. Useful to add authentication|
|» » » **additionalProperties**|body|string|false|none|
|» » api|body|[ExposedApi](#schemaexposedapi)|false|The Open API configuration for your service (if one)|
|» » authConfigRef|body|string|false|A reference to a global auth module config|
|» » buildMode|body|boolean|true|Display a construction page when a user try to use the service|
|» » chaosConfig|body|[ChaosConfig](#schemachaosconfig)|false|Configuration for the faults that can be injected in requests|
|» » clientConfig|body|[ClientConfig](#schemaclientconfig)|false|The configuration of the circuit breaker for a service descriptor|
|» » clientValidatorRef|body|string|false|A reference to validation authority|
|» » cors|body|[CorsSettings](#schemacorssettings)|false|The configuration for cors support|
|» » domain|body|string|true|The domain on which the service is available.|
|» » enabled|body|boolean|true|Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist|
|» » enforceSecureCommunication|body|boolean|true|When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside|
|» » env|body|string|true|The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'|
|» » forceHttps|body|boolean|true|Will force redirection to https:// if not present|
|» » groups|body|[string]|true|Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group|
|» » gzip|body|[Gzip](#schemagzip)|false|Configuration for gzip of service responses|
|» » headersVerification|body|object|false|Specify headers that will be verified after routing.|
|» » » **additionalProperties**|body|string|false|none|
|» » healthCheck|body|[HealthCheck](#schemahealthcheck)|false|The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive|
|» » id|body|string(uuid)|true|A unique random string to identify your service|
|» » ipFiltering|body|[IpFiltering](#schemaipfiltering)|false|The filtering configuration block for a service of globally.|
|» » jwtVerifier|body|[LocalJwtVerifier](#schemalocaljwtverifier) \| [RefJwtVerifier](#schemarefjwtverifier)|false|none|
|» » » *oneOf*|body|[LocalJwtVerifier](#schemalocaljwtverifier)|false|A JWT verifier used only for the current service descriptor|
|» » » *oneOf*|body|[RefJwtVerifier](#schemarefjwtverifier)|false|Reference to a global JWT verifier|
|» » localHost|body|string|false|The host used localy, mainly localhost:xxxx|
|» » localScheme|body|string|false|The scheme used localy, mainly http|
|» » maintenanceMode|body|boolean|true|Display a maintainance page when a user try to use the service|
|» » matchingHeaders|body|object|false|Specify headers that MUST be present on client request to route it. Useful to implement versioning|
|» » » **additionalProperties**|body|string|false|none|
|» » matchingRoot|body|string|false|The root path on which the service is available|
|» » metadata|body|object|false|Just a bunch of random properties|
|» » » **additionalProperties**|body|string|false|none|
|» » name|body|string|true|The name of your service. Only for debug and human readability purposes|
|» » overrideHost|body|boolean|false|Host header will be overriden with Host of the target|
|» » privateApp|body|boolean|true|When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain|
|» » privatePatterns|body|[string]|false|If you define a public pattern that is a little bit too much, you can make some of public URL private again|
|» » publicPatterns|body|[string]|false|By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'|
|» » redirectToLocal|body|boolean|false|If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests|
|» » redirection|body|[RedirectionSettings](#schemaredirectionsettings)|false|The configuration for redirection per service|
|» » root|body|string|true|Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar|
|» » secComExcludedPatterns|body|[string]|false|URI patterns excluded from secured communications|
|» » secComSettings|body|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|false|none|
|» » » *oneOf*|body|[HSAlgoSettings](#schemahsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » » *oneOf*|body|[RSAlgoSettings](#schemarsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » » *oneOf*|body|[ESAlgoSettings](#schemaesalgosettings)|false|Settings for an EC + SHA signing algorithm|
|» » » *oneOf*|body|[JWKSAlgoSettings](#schemajwksalgosettings)|false|Settings for a JWK set|
|» » sendOtoroshiHeadersBack|body|boolean|false|When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...|
|» » statsdConfig|body|[StatsdConfig](#schemastatsdconfig)|false|The configuration for statsd metrics push|
|» » subdomain|body|string|true|The subdomain on which the service is available|
|» » targets|body|[[Target](#schematarget)]|true|The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures|
|» » transformerRef|body|string|false|A reference to a request transformer|
|» » userFacing|body|boolean|false|The fact that this service will be seen by users and cannot be impacted by the Snow Monkey|
|» » xForwardedHeaders|body|boolean|false|Send X-Forwarded-* headers|
|» serviceGroups|body|[object]|true|Current service groups at the time of export|
|» » description|body|string|false|The descriptoin of the group|
|» » id|body|string|true|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|» » name|body|string|true|The name of the group|
|» simpleAdmins|body|[object]|true|Current simple admins at the time of export|
|» » createdAt|body|integer(int64)|true|The creation date of the user|
|» » label|body|string|true|The label for the user|
|» » password|body|string|true|The hashed password of the user|
|» » username|body|string|true|The email address of the user|
|» stats|body|[ImportExportStats](#schemaimportexportstats)|true|Current global stats at the time of export|

> Example responses

> 200 Response

```json
{
  "done": true
}
```

<h3 id="import-the-full-state-of-otoroshi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Done](#schemadone)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-templates">templates</h1>

Everything about Otoroshi entities templates

## Get a template of an Otoroshi Api Key

<a id="opIdinitiateApiKey"></a>

> Code samples

```bash
curl https://example.com/new/apikey \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /new/apikey`

Get a template of an Otoroshi Api Key. The generated entity is not persisted

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="get-a-template-of-an-otoroshi-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a template of an Otoroshi service group

<a id="opIdinitiateServiceGroup"></a>

> Code samples

```bash
curl https://example.com/new/group \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /new/group`

Get a template of an Otoroshi service group. The generated entity is not persisted

> Example responses

> 200 Response

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="get-a-template-of-an-otoroshi-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Group](#schemagroup)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a template of an Otoroshi service descriptor

<a id="opIdinitiateService"></a>

> Code samples

```bash
curl https://example.com/new/service \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /new/service`

Get a template of an Otoroshi service descriptor. The generated entity is not persisted

> Example responses

> 200 Response

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="get-a-template-of-an-otoroshi-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Service](#schemaservice)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-environments">environments</h1>

Everything about Otoroshi Environments

## Get all environments

<a id="opIdallLines"></a>

> Code samples

```bash
curl https://example.com/lines \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /lines`

Get all environments provided by the current Otoroshi instance

> Example responses

> 200 Response

```json
"prod"
```

<h3 id="get-all-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Environment](#schemaenvironment)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get all services for an environment

<a id="opIdservicesForALine"></a>

> Code samples

```bash
curl https://example.com/lines/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /lines/{line}/services`

Get all services for an environment provided by the current Otoroshi instance

<h3 id="get-all-services-for-an-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|line|path|string|true|The environment where to find services|

> Example responses

> 200 Response

```json
[
  {
    "Canary": {
      "enabled": true,
      "root": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "traffic": 123123
    },
    "additionalHeaders": {
      "key": "value"
    },
    "api": {
      "exposeApi": true,
      "openApiDescriptorUrl": "http://www.google.com"
    },
    "authConfigRef": "a string value",
    "buildMode": true,
    "chaosConfig": {
      "badResponsesFaultConfig": {
        "ratio": 42.2,
        "responses": [
          {
            "body": "a string value",
            "headers": {
              "key": "value"
            },
            "status": 123123
          }
        ]
      },
      "enabled": true,
      "largeRequestFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "largeResponseFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "latencyInjectionFaultConfig": {
        "from": 123123,
        "ratio": 42.2,
        "to": 123123
      }
    },
    "clientConfig": {
      "backoffFactor": 123123,
      "callTimeout": 123123,
      "globalTimeout": 123123,
      "maxErrors": 123123,
      "retries": 123123,
      "retryInitialDelay": 123123,
      "sampleInterval": 123123,
      "useCircuitBreaker": true
    },
    "clientValidatorRef": "a string value",
    "cors": {
      "allowCredentials": true,
      "allowHeaders": [
        "a string value"
      ],
      "allowMethods": [
        "a string value"
      ],
      "allowOrigin": "a string value",
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "exposeHeaders": [
        "a string value"
      ],
      "maxAge": 123123
    },
    "domain": "a string value",
    "enabled": true,
    "enforceSecureCommunication": true,
    "env": "a string value",
    "forceHttps": true,
    "groups": [
      "a string value"
    ],
    "gzip": {
      "blackList": [
        "a string value"
      ],
      "bufferSize": 123,
      "chunkedThreshold": 123,
      "compressionLevel": 123123,
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "whiteList": [
        "a string value"
      ]
    },
    "headersVerification": {
      "key": "value"
    },
    "healthCheck": {
      "enabled": true,
      "url": "http://www.google.com"
    },
    "id": "110e8400-e29b-11d4-a716-446655440000",
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "jwtVerifier": {
      "algoSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "enabled": true,
      "source": {
        "name": "a string value",
        "type": "a string value"
      },
      "strategy": {
        "type": "a string value",
        "verificationSettings": {
          "fields": {
            "key": "value"
          },
          "mappingSettings": {
            "map": {
              "key": "value"
            },
            "remove": [
              "a string value"
            ],
            "values": {
              "key": "value"
            }
          }
        }
      },
      "strict": true,
      "type": "a string value"
    },
    "localHost": "a string value",
    "localScheme": "a string value",
    "maintenanceMode": true,
    "matchingHeaders": {
      "key": "value"
    },
    "matchingRoot": "a string value",
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "overrideHost": true,
    "privateApp": true,
    "privatePatterns": [
      "a string value"
    ],
    "publicPatterns": [
      "a string value"
    ],
    "redirectToLocal": true,
    "redirection": {
      "code": 123123,
      "enabled": true,
      "to": "a string value"
    },
    "root": "a string value",
    "secComExcludedPatterns": [
      "a string value"
    ],
    "secComSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "sendOtoroshiHeadersBack": true,
    "statsdConfig": {
      "datadog": true,
      "host": "a string value",
      "port": 123123
    },
    "subdomain": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "transformerRef": "a string value",
    "userFacing": true,
    "xForwardedHeaders": true
  }
]
```

<h3 id="get-all-services-for-an-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-services-for-an-environment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-groups">groups</h1>

Everything about Otoroshi service groups

## Get all service groups

<a id="opIdallServiceGroups"></a>

> Code samples

```bash
curl https://example.com/api/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/groups`

Get all service groups

> Example responses

> 200 Response

```json
[
  {
    "description": "a string value",
    "id": "a string value",
    "name": "a string value"
  }
]
```

<h3 id="get-all-service-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-service-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Group](#schemagroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new service group

<a id="opIdcreateGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "a string value",
    "id": "a string value",
    "name": "a string value"
  }'
```

`POST /api/groups`

Create a new service group

> Body parameter

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="create-a-new-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|The descriptoin of the group|
|» id|body|string|true|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|» name|body|string|true|The name of the group|

> Example responses

> 200 Response

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="create-a-new-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Group](#schemagroup)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a service group

<a id="opIdserviceGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/groups/{serviceGroupId}`

Get a service group

<h3 id="get-a-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceGroupId|path|string|true|The service group id|

> Example responses

> 200 Response

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="get-a-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Group](#schemagroup)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a service group

<a id="opIdupdateGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "a string value",
    "id": "a string value",
    "name": "a string value"
  }'
```

`PUT /api/groups/{serviceGroupId}`

Update a service group

> Body parameter

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-a-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceGroupId|path|string|true|The service group id|
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|The descriptoin of the group|
|» id|body|string|true|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|» name|body|string|true|The name of the group|

> Example responses

> 200 Response

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-a-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Group](#schemagroup)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a service group

<a id="opIddeleteGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/groups/{serviceGroupId}`

Delete a service group

<h3 id="delete-a-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceGroupId|path|string|true|The service group id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-a-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a service group with a diff

<a id="opIdpatchGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/groups/{serviceGroupId}`

Update a service group with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-a-service-group-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceGroupId|path|string|true|The service group id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-a-service-group-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Group](#schemagroup)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-apikeys">apikeys</h1>

Everything about Otoroshi api keys

## Get all api keys

<a id="opIdallApiKeys"></a>

> Code samples

```bash
curl https://example.com/api/apikeys \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/apikeys`

Get all api keys

> Example responses

> 200 Response

```json
[
  {
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }
]
```

<h3 id="get-all-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKey](#schemaapikey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get all api keys for the group of a service

<a id="opIdapiKeysFromGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/groups/{groupId}/apikeys`

Get all api keys for the group of a service

<h3 id="get-all-api-keys-for-the-group-of-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|

> Example responses

> 200 Response

```json
[
  {
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }
]
```

<h3 id="get-all-api-keys-for-the-group-of-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-api-keys-for-the-group-of-a-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKey](#schemaapikey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new api key for a group

<a id="opIdcreateApiKeyFromGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }'
```

`POST /api/groups/{groupId}/apikeys`

Create a new api key for a group

> Body parameter

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="create-a-new-api-key-for-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|body|body|[ApiKey](#schemaapikey)|false|none|
|» authorizedEntities|body|[string]|true|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|» clientId|body|string|true|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|» clientName|body|string|true|The name of the api key, for humans ;-)|
|» clientSecret|body|string|true|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|» dailyQuota|body|integer(int64)|false|Authorized number of calls per day|
|» enabled|body|boolean|true|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|» metadata|body|object|false|Bunch of metadata for the key|
|» » **additionalProperties**|body|string|false|none|
|» monthlyQuota|body|integer(int64)|false|Authorized number of calls per month|
|» throttlingQuota|body|integer(int64)|false|Authorized number of calls per second, measured on 10 seconds|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="create-a-new-api-key-for-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get an api key

<a id="opIdapiKeyFromGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/groups/{groupId}/apikeys/{clientId}`

Get an api key for a specified service group

<h3 id="get-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="get-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update an api key

<a id="opIdupdateApiKeyFromGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }'
```

`PUT /api/groups/{groupId}/apikeys/{clientId}`

Update an api key for a specified service group

> Body parameter

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="update-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|clientId|path|string|true|the api key id|
|body|body|[ApiKey](#schemaapikey)|false|none|
|» authorizedEntities|body|[string]|true|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|» clientId|body|string|true|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|» clientName|body|string|true|The name of the api key, for humans ;-)|
|» clientSecret|body|string|true|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|» dailyQuota|body|integer(int64)|false|Authorized number of calls per day|
|» enabled|body|boolean|true|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|» metadata|body|object|false|Bunch of metadata for the key|
|» » **additionalProperties**|body|string|false|none|
|» monthlyQuota|body|integer(int64)|false|Authorized number of calls per month|
|» throttlingQuota|body|integer(int64)|false|Authorized number of calls per second, measured on 10 seconds|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="update-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete an api key

<a id="opIddeleteApiKeyFromGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/groups/{groupId}/apikeys/{clientId}`

Delete an api key for a specified service group

<h3 id="delete-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update an api key with a diff

<a id="opIdpatchApiKeyFromGroup"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/groups/{groupId}/apikeys/{clientId}`

Update an api key for a specified service descriptor with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-an-api-key-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|clientId|path|string|true|the api key id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="update-an-api-key-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get the quota state of an api key

<a id="opIdapiKeyFromGroupQuotas"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys/string/quotas \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/groups/{groupId}/apikeys/{clientId}/quotas`

Get the quota state of an api key

<h3 id="get-the-quota-state-of-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "authorizedCallsPerDay": 123,
  "authorizedCallsPerMonth": 123,
  "authorizedCallsPerSec": 123,
  "currentCallsPerDay": 123,
  "currentCallsPerMonth": 123,
  "currentCallsPerSec": 123,
  "remainingCallsPerDay": 123,
  "remainingCallsPerMonth": 123,
  "remainingCallsPerSec": 123
}
```

<h3 id="get-the-quota-state-of-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Quotas](#schemaquotas)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Reset the quota state of an api key

<a id="opIdresetApiKeyFromGroupQuotas"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/apikeys/string/quotas \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/groups/{groupId}/apikeys/{clientId}/quotas`

Reset the quota state of an api key

<h3 id="reset-the-quota-state-of-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The api key group id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "authorizedCallsPerDay": 123,
  "authorizedCallsPerMonth": 123,
  "authorizedCallsPerSec": 123,
  "currentCallsPerDay": 123,
  "currentCallsPerMonth": 123,
  "currentCallsPerSec": 123,
  "remainingCallsPerDay": 123,
  "remainingCallsPerMonth": 123,
  "remainingCallsPerSec": 123
}
```

<h3 id="reset-the-quota-state-of-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Quotas](#schemaquotas)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get all api keys for the group of a service

<a id="opIdapiKeys"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}/apikeys`

Get all api keys for the group of a service

<h3 id="get-all-api-keys-for-the-group-of-a-service-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|

> Example responses

> 200 Response

```json
[
  {
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }
]
```

<h3 id="get-all-api-keys-for-the-group-of-a-service-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-api-keys-for-the-group-of-a-service-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKey](#schemaapikey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new api key for a service

<a id="opIdcreateApiKey"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }'
```

`POST /api/services/{serviceId}/apikeys`

> Body parameter

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="create-a-new-api-key-for-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|body|body|[ApiKey](#schemaapikey)|false|none|
|» authorizedEntities|body|[string]|true|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|» clientId|body|string|true|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|» clientName|body|string|true|The name of the api key, for humans ;-)|
|» clientSecret|body|string|true|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|» dailyQuota|body|integer(int64)|false|Authorized number of calls per day|
|» enabled|body|boolean|true|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|» metadata|body|object|false|Bunch of metadata for the key|
|» » **additionalProperties**|body|string|false|none|
|» monthlyQuota|body|integer(int64)|false|Authorized number of calls per month|
|» throttlingQuota|body|integer(int64)|false|Authorized number of calls per second, measured on 10 seconds|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="create-a-new-api-key-for-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get an api key

<a id="opIdapiKey"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}/apikeys/{clientId}`

Get an api key for a specified service descriptor

<h3 id="get-an-api-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="get-an-api-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update an api key

<a id="opIdupdateApiKey"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }'
```

`PUT /api/services/{serviceId}/apikeys/{clientId}`

Update an api key for a specified service descriptor

> Body parameter

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="update-an-api-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|
|body|body|[ApiKey](#schemaapikey)|false|none|
|» authorizedEntities|body|[string]|true|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|» clientId|body|string|true|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|» clientName|body|string|true|The name of the api key, for humans ;-)|
|» clientSecret|body|string|true|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|» dailyQuota|body|integer(int64)|false|Authorized number of calls per day|
|» enabled|body|boolean|true|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|» metadata|body|object|false|Bunch of metadata for the key|
|» » **additionalProperties**|body|string|false|none|
|» monthlyQuota|body|integer(int64)|false|Authorized number of calls per month|
|» throttlingQuota|body|integer(int64)|false|Authorized number of calls per second, measured on 10 seconds|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="update-an-api-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete an api key

<a id="opIddeleteApiKey"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/services/{serviceId}/apikeys/{clientId}`

Delete an api key for a specified service descriptor

<h3 id="delete-an-api-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-an-api-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update an api key with a diff

<a id="opIdpatchApiKey"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/services/{serviceId}/apikeys/{clientId}`

Update an api key for a specified service descriptor with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-an-api-key-with-a-diff-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

<h3 id="update-an-api-key-with-a-diff-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get the group of an api key

<a id="opIdapiKeyGroup"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string/group \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}/apikeys/{clientId}/group`

Get the group of an api key

<h3 id="get-the-group-of-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="get-the-group-of-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Group](#schemagroup)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get the quota state of an api key

<a id="opIdapiKeyQuotas"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string/quotas \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}/apikeys/{clientId}/quotas`

Get the quota state of an api key

<h3 id="get-the-quota-state-of-an-api-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "authorizedCallsPerDay": 123,
  "authorizedCallsPerMonth": 123,
  "authorizedCallsPerSec": 123,
  "currentCallsPerDay": 123,
  "currentCallsPerMonth": 123,
  "currentCallsPerSec": 123,
  "remainingCallsPerDay": 123,
  "remainingCallsPerMonth": 123,
  "remainingCallsPerSec": 123
}
```

<h3 id="get-the-quota-state-of-an-api-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Quotas](#schemaquotas)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Reset the quota state of an api key

<a id="opIdresetApiKeyQuotas"></a>

> Code samples

```bash
curl https://example.com/api/services/string/apikeys/string/quotas \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/services/{serviceId}/apikeys/{clientId}/quotas`

Reset the quota state of an api key

<h3 id="reset-the-quota-state-of-an-api-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The api key service id|
|clientId|path|string|true|the api key id|

> Example responses

> 200 Response

```json
{
  "authorizedCallsPerDay": 123,
  "authorizedCallsPerMonth": 123,
  "authorizedCallsPerSec": 123,
  "currentCallsPerDay": 123,
  "currentCallsPerMonth": 123,
  "currentCallsPerSec": 123,
  "remainingCallsPerDay": 123,
  "remainingCallsPerMonth": 123,
  "remainingCallsPerSec": 123
}
```

<h3 id="reset-the-quota-state-of-an-api-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Quotas](#schemaquotas)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-services">services</h1>

Everything about Otoroshi service descriptors

## Get all services descriptor for a group

<a id="opIdserviceGroupServices"></a>

> Code samples

```bash
curl https://example.com/api/groups/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/groups/{serviceGroupId}/services`

Get all services descriptor for a group

<h3 id="get-all-services-descriptor-for-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceGroupId|path|string|true|The service group id|

> Example responses

> 200 Response

```json
[
  {
    "authorizedEntities": [
      "a string value"
    ],
    "clientId": "a string value",
    "clientName": "a string value",
    "clientSecret": "a string value",
    "dailyQuota": 123,
    "enabled": true,
    "metadata": {
      "key": "value"
    },
    "monthlyQuota": 123,
    "throttlingQuota": 123
  }
]
```

<h3 id="get-all-services-descriptor-for-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-services-descriptor-for-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKey](#schemaapikey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get all services

<a id="opIdallServices"></a>

> Code samples

```bash
curl https://example.com/api/services \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services`

Get all services

> Example responses

> 200 Response

```json
[
  {
    "Canary": {
      "enabled": true,
      "root": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "traffic": 123123
    },
    "additionalHeaders": {
      "key": "value"
    },
    "api": {
      "exposeApi": true,
      "openApiDescriptorUrl": "http://www.google.com"
    },
    "authConfigRef": "a string value",
    "buildMode": true,
    "chaosConfig": {
      "badResponsesFaultConfig": {
        "ratio": 42.2,
        "responses": [
          {
            "body": "a string value",
            "headers": {
              "key": "value"
            },
            "status": 123123
          }
        ]
      },
      "enabled": true,
      "largeRequestFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "largeResponseFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "latencyInjectionFaultConfig": {
        "from": 123123,
        "ratio": 42.2,
        "to": 123123
      }
    },
    "clientConfig": {
      "backoffFactor": 123123,
      "callTimeout": 123123,
      "globalTimeout": 123123,
      "maxErrors": 123123,
      "retries": 123123,
      "retryInitialDelay": 123123,
      "sampleInterval": 123123,
      "useCircuitBreaker": true
    },
    "clientValidatorRef": "a string value",
    "cors": {
      "allowCredentials": true,
      "allowHeaders": [
        "a string value"
      ],
      "allowMethods": [
        "a string value"
      ],
      "allowOrigin": "a string value",
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "exposeHeaders": [
        "a string value"
      ],
      "maxAge": 123123
    },
    "domain": "a string value",
    "enabled": true,
    "enforceSecureCommunication": true,
    "env": "a string value",
    "forceHttps": true,
    "groups": [
      "a string value"
    ],
    "gzip": {
      "blackList": [
        "a string value"
      ],
      "bufferSize": 123,
      "chunkedThreshold": 123,
      "compressionLevel": 123123,
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "whiteList": [
        "a string value"
      ]
    },
    "headersVerification": {
      "key": "value"
    },
    "healthCheck": {
      "enabled": true,
      "url": "http://www.google.com"
    },
    "id": "110e8400-e29b-11d4-a716-446655440000",
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "jwtVerifier": {
      "algoSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "enabled": true,
      "source": {
        "name": "a string value",
        "type": "a string value"
      },
      "strategy": {
        "type": "a string value",
        "verificationSettings": {
          "fields": {
            "key": "value"
          },
          "mappingSettings": {
            "map": {
              "key": "value"
            },
            "remove": [
              "a string value"
            ],
            "values": {
              "key": "value"
            }
          }
        }
      },
      "strict": true,
      "type": "a string value"
    },
    "localHost": "a string value",
    "localScheme": "a string value",
    "maintenanceMode": true,
    "matchingHeaders": {
      "key": "value"
    },
    "matchingRoot": "a string value",
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "overrideHost": true,
    "privateApp": true,
    "privatePatterns": [
      "a string value"
    ],
    "publicPatterns": [
      "a string value"
    ],
    "redirectToLocal": true,
    "redirection": {
      "code": 123123,
      "enabled": true,
      "to": "a string value"
    },
    "root": "a string value",
    "secComExcludedPatterns": [
      "a string value"
    ],
    "secComSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "sendOtoroshiHeadersBack": true,
    "statsdConfig": {
      "datadog": true,
      "host": "a string value",
      "port": 123123
    },
    "subdomain": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "transformerRef": "a string value",
    "userFacing": true,
    "xForwardedHeaders": true
  }
]
```

<h3 id="get-all-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new service descriptor

<a id="opIdcreateService"></a>

> Code samples

```bash
curl https://example.com/api/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "Canary": {
      "enabled": true,
      "root": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "traffic": 123123
    },
    "additionalHeaders": {
      "key": "value"
    },
    "api": {
      "exposeApi": true,
      "openApiDescriptorUrl": "http://www.google.com"
    },
    "authConfigRef": "a string value",
    "buildMode": true,
    "chaosConfig": {
      "badResponsesFaultConfig": {
        "ratio": 42.2,
        "responses": [
          {
            "body": "a string value",
            "headers": {
              "key": "value"
            },
            "status": 123123
          }
        ]
      },
      "enabled": true,
      "largeRequestFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "largeResponseFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "latencyInjectionFaultConfig": {
        "from": 123123,
        "ratio": 42.2,
        "to": 123123
      }
    },
    "clientConfig": {
      "backoffFactor": 123123,
      "callTimeout": 123123,
      "globalTimeout": 123123,
      "maxErrors": 123123,
      "retries": 123123,
      "retryInitialDelay": 123123,
      "sampleInterval": 123123,
      "useCircuitBreaker": true
    },
    "clientValidatorRef": "a string value",
    "cors": {
      "allowCredentials": true,
      "allowHeaders": [
        "a string value"
      ],
      "allowMethods": [
        "a string value"
      ],
      "allowOrigin": "a string value",
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "exposeHeaders": [
        "a string value"
      ],
      "maxAge": 123123
    },
    "domain": "a string value",
    "enabled": true,
    "enforceSecureCommunication": true,
    "env": "a string value",
    "forceHttps": true,
    "groups": [
      "a string value"
    ],
    "gzip": {
      "blackList": [
        "a string value"
      ],
      "bufferSize": 123,
      "chunkedThreshold": 123,
      "compressionLevel": 123123,
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "whiteList": [
        "a string value"
      ]
    },
    "headersVerification": {
      "key": "value"
    },
    "healthCheck": {
      "enabled": true,
      "url": "http://www.google.com"
    },
    "id": "110e8400-e29b-11d4-a716-446655440000",
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "jwtVerifier": {
      "algoSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "enabled": true,
      "source": {
        "name": "a string value",
        "type": "a string value"
      },
      "strategy": {
        "type": "a string value",
        "verificationSettings": {
          "fields": {
            "key": "value"
          },
          "mappingSettings": {
            "map": {
              "key": "value"
            },
            "remove": [
              "a string value"
            ],
            "values": {
              "key": "value"
            }
          }
        }
      },
      "strict": true,
      "type": "a string value"
    },
    "localHost": "a string value",
    "localScheme": "a string value",
    "maintenanceMode": true,
    "matchingHeaders": {
      "key": "value"
    },
    "matchingRoot": "a string value",
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "overrideHost": true,
    "privateApp": true,
    "privatePatterns": [
      "a string value"
    ],
    "publicPatterns": [
      "a string value"
    ],
    "redirectToLocal": true,
    "redirection": {
      "code": 123123,
      "enabled": true,
      "to": "a string value"
    },
    "root": "a string value",
    "secComExcludedPatterns": [
      "a string value"
    ],
    "secComSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "sendOtoroshiHeadersBack": true,
    "statsdConfig": {
      "datadog": true,
      "host": "a string value",
      "port": 123123
    },
    "subdomain": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "transformerRef": "a string value",
    "userFacing": true,
    "xForwardedHeaders": true
  }'
```

`POST /api/services`

Create a new service descriptor

> Body parameter

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="create-a-new-service-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Service](#schemaservice)|false|none|
|» Canary|body|[Canary](#schemacanary)|false|The configuration of the canary mode for a service descriptor|
|» additionalHeaders|body|object|false|Specify headers that will be added to each client request. Useful to add authentication|
|» » **additionalProperties**|body|string|false|none|
|» api|body|[ExposedApi](#schemaexposedapi)|false|The Open API configuration for your service (if one)|
|» authConfigRef|body|string|false|A reference to a global auth module config|
|» buildMode|body|boolean|true|Display a construction page when a user try to use the service|
|» chaosConfig|body|[ChaosConfig](#schemachaosconfig)|false|Configuration for the faults that can be injected in requests|
|» clientConfig|body|[ClientConfig](#schemaclientconfig)|false|The configuration of the circuit breaker for a service descriptor|
|» clientValidatorRef|body|string|false|A reference to validation authority|
|» cors|body|[CorsSettings](#schemacorssettings)|false|The configuration for cors support|
|» domain|body|string|true|The domain on which the service is available.|
|» enabled|body|boolean|true|Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist|
|» enforceSecureCommunication|body|boolean|true|When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside|
|» env|body|string|true|The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'|
|» forceHttps|body|boolean|true|Will force redirection to https:// if not present|
|» groups|body|[string]|true|Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group|
|» gzip|body|[Gzip](#schemagzip)|false|Configuration for gzip of service responses|
|» headersVerification|body|object|false|Specify headers that will be verified after routing.|
|» » **additionalProperties**|body|string|false|none|
|» healthCheck|body|[HealthCheck](#schemahealthcheck)|false|The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive|
|» id|body|string(uuid)|true|A unique random string to identify your service|
|» ipFiltering|body|[IpFiltering](#schemaipfiltering)|false|The filtering configuration block for a service of globally.|
|» jwtVerifier|body|[LocalJwtVerifier](#schemalocaljwtverifier) \| [RefJwtVerifier](#schemarefjwtverifier)|false|none|
|» » *oneOf*|body|[LocalJwtVerifier](#schemalocaljwtverifier)|false|A JWT verifier used only for the current service descriptor|
|» » *oneOf*|body|[RefJwtVerifier](#schemarefjwtverifier)|false|Reference to a global JWT verifier|
|» localHost|body|string|false|The host used localy, mainly localhost:xxxx|
|» localScheme|body|string|false|The scheme used localy, mainly http|
|» maintenanceMode|body|boolean|true|Display a maintainance page when a user try to use the service|
|» matchingHeaders|body|object|false|Specify headers that MUST be present on client request to route it. Useful to implement versioning|
|» » **additionalProperties**|body|string|false|none|
|» matchingRoot|body|string|false|The root path on which the service is available|
|» metadata|body|object|false|Just a bunch of random properties|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|The name of your service. Only for debug and human readability purposes|
|» overrideHost|body|boolean|false|Host header will be overriden with Host of the target|
|» privateApp|body|boolean|true|When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain|
|» privatePatterns|body|[string]|false|If you define a public pattern that is a little bit too much, you can make some of public URL private again|
|» publicPatterns|body|[string]|false|By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'|
|» redirectToLocal|body|boolean|false|If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests|
|» redirection|body|[RedirectionSettings](#schemaredirectionsettings)|false|The configuration for redirection per service|
|» root|body|string|true|Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar|
|» secComExcludedPatterns|body|[string]|false|URI patterns excluded from secured communications|
|» secComSettings|body|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|false|none|
|» » *oneOf*|body|[HSAlgoSettings](#schemahsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[RSAlgoSettings](#schemarsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[ESAlgoSettings](#schemaesalgosettings)|false|Settings for an EC + SHA signing algorithm|
|» » *oneOf*|body|[JWKSAlgoSettings](#schemajwksalgosettings)|false|Settings for a JWK set|
|» sendOtoroshiHeadersBack|body|boolean|false|When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...|
|» statsdConfig|body|[StatsdConfig](#schemastatsdconfig)|false|The configuration for statsd metrics push|
|» subdomain|body|string|true|The subdomain on which the service is available|
|» targets|body|[[Target](#schematarget)]|true|The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures|
|» transformerRef|body|string|false|A reference to a request transformer|
|» userFacing|body|boolean|false|The fact that this service will be seen by users and cannot be impacted by the Snow Monkey|
|» xForwardedHeaders|body|boolean|false|Send X-Forwarded-* headers|

> Example responses

> 200 Response

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="create-a-new-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Service](#schemaservice)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a service descriptor

<a id="opIdservice"></a>

> Code samples

```bash
curl https://example.com/api/services/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}`

Get a service descriptor

<h3 id="get-a-service-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|

> Example responses

> 200 Response

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="get-a-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Service](#schemaservice)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a service descriptor

<a id="opIdupdateService"></a>

> Code samples

```bash
curl https://example.com/api/services/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "Canary": {
      "enabled": true,
      "root": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "traffic": 123123
    },
    "additionalHeaders": {
      "key": "value"
    },
    "api": {
      "exposeApi": true,
      "openApiDescriptorUrl": "http://www.google.com"
    },
    "authConfigRef": "a string value",
    "buildMode": true,
    "chaosConfig": {
      "badResponsesFaultConfig": {
        "ratio": 42.2,
        "responses": [
          {
            "body": "a string value",
            "headers": {
              "key": "value"
            },
            "status": 123123
          }
        ]
      },
      "enabled": true,
      "largeRequestFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "largeResponseFaultConfig": {
        "additionalRequestSize": 123123,
        "ratio": 42.2
      },
      "latencyInjectionFaultConfig": {
        "from": 123123,
        "ratio": 42.2,
        "to": 123123
      }
    },
    "clientConfig": {
      "backoffFactor": 123123,
      "callTimeout": 123123,
      "globalTimeout": 123123,
      "maxErrors": 123123,
      "retries": 123123,
      "retryInitialDelay": 123123,
      "sampleInterval": 123123,
      "useCircuitBreaker": true
    },
    "clientValidatorRef": "a string value",
    "cors": {
      "allowCredentials": true,
      "allowHeaders": [
        "a string value"
      ],
      "allowMethods": [
        "a string value"
      ],
      "allowOrigin": "a string value",
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "exposeHeaders": [
        "a string value"
      ],
      "maxAge": 123123
    },
    "domain": "a string value",
    "enabled": true,
    "enforceSecureCommunication": true,
    "env": "a string value",
    "forceHttps": true,
    "groups": [
      "a string value"
    ],
    "gzip": {
      "blackList": [
        "a string value"
      ],
      "bufferSize": 123,
      "chunkedThreshold": 123,
      "compressionLevel": 123123,
      "enabled": true,
      "excludedPatterns": [
        "a string value"
      ],
      "whiteList": [
        "a string value"
      ]
    },
    "headersVerification": {
      "key": "value"
    },
    "healthCheck": {
      "enabled": true,
      "url": "http://www.google.com"
    },
    "id": "110e8400-e29b-11d4-a716-446655440000",
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "jwtVerifier": {
      "algoSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "enabled": true,
      "source": {
        "name": "a string value",
        "type": "a string value"
      },
      "strategy": {
        "type": "a string value",
        "verificationSettings": {
          "fields": {
            "key": "value"
          },
          "mappingSettings": {
            "map": {
              "key": "value"
            },
            "remove": [
              "a string value"
            ],
            "values": {
              "key": "value"
            }
          }
        }
      },
      "strict": true,
      "type": "a string value"
    },
    "localHost": "a string value",
    "localScheme": "a string value",
    "maintenanceMode": true,
    "matchingHeaders": {
      "key": "value"
    },
    "matchingRoot": "a string value",
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "overrideHost": true,
    "privateApp": true,
    "privatePatterns": [
      "a string value"
    ],
    "publicPatterns": [
      "a string value"
    ],
    "redirectToLocal": true,
    "redirection": {
      "code": 123123,
      "enabled": true,
      "to": "a string value"
    },
    "root": "a string value",
    "secComExcludedPatterns": [
      "a string value"
    ],
    "secComSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "sendOtoroshiHeadersBack": true,
    "statsdConfig": {
      "datadog": true,
      "host": "a string value",
      "port": 123123
    },
    "subdomain": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "transformerRef": "a string value",
    "userFacing": true,
    "xForwardedHeaders": true
  }'
```

`PUT /api/services/{serviceId}`

Update a service descriptor

> Body parameter

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="update-a-service-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|
|body|body|[Service](#schemaservice)|false|none|
|» Canary|body|[Canary](#schemacanary)|false|The configuration of the canary mode for a service descriptor|
|» additionalHeaders|body|object|false|Specify headers that will be added to each client request. Useful to add authentication|
|» » **additionalProperties**|body|string|false|none|
|» api|body|[ExposedApi](#schemaexposedapi)|false|The Open API configuration for your service (if one)|
|» authConfigRef|body|string|false|A reference to a global auth module config|
|» buildMode|body|boolean|true|Display a construction page when a user try to use the service|
|» chaosConfig|body|[ChaosConfig](#schemachaosconfig)|false|Configuration for the faults that can be injected in requests|
|» clientConfig|body|[ClientConfig](#schemaclientconfig)|false|The configuration of the circuit breaker for a service descriptor|
|» clientValidatorRef|body|string|false|A reference to validation authority|
|» cors|body|[CorsSettings](#schemacorssettings)|false|The configuration for cors support|
|» domain|body|string|true|The domain on which the service is available.|
|» enabled|body|boolean|true|Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist|
|» enforceSecureCommunication|body|boolean|true|When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside|
|» env|body|string|true|The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'|
|» forceHttps|body|boolean|true|Will force redirection to https:// if not present|
|» groups|body|[string]|true|Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group|
|» gzip|body|[Gzip](#schemagzip)|false|Configuration for gzip of service responses|
|» headersVerification|body|object|false|Specify headers that will be verified after routing.|
|» » **additionalProperties**|body|string|false|none|
|» healthCheck|body|[HealthCheck](#schemahealthcheck)|false|The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive|
|» id|body|string(uuid)|true|A unique random string to identify your service|
|» ipFiltering|body|[IpFiltering](#schemaipfiltering)|false|The filtering configuration block for a service of globally.|
|» jwtVerifier|body|[LocalJwtVerifier](#schemalocaljwtverifier) \| [RefJwtVerifier](#schemarefjwtverifier)|false|none|
|» » *oneOf*|body|[LocalJwtVerifier](#schemalocaljwtverifier)|false|A JWT verifier used only for the current service descriptor|
|» » *oneOf*|body|[RefJwtVerifier](#schemarefjwtverifier)|false|Reference to a global JWT verifier|
|» localHost|body|string|false|The host used localy, mainly localhost:xxxx|
|» localScheme|body|string|false|The scheme used localy, mainly http|
|» maintenanceMode|body|boolean|true|Display a maintainance page when a user try to use the service|
|» matchingHeaders|body|object|false|Specify headers that MUST be present on client request to route it. Useful to implement versioning|
|» » **additionalProperties**|body|string|false|none|
|» matchingRoot|body|string|false|The root path on which the service is available|
|» metadata|body|object|false|Just a bunch of random properties|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|The name of your service. Only for debug and human readability purposes|
|» overrideHost|body|boolean|false|Host header will be overriden with Host of the target|
|» privateApp|body|boolean|true|When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain|
|» privatePatterns|body|[string]|false|If you define a public pattern that is a little bit too much, you can make some of public URL private again|
|» publicPatterns|body|[string]|false|By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'|
|» redirectToLocal|body|boolean|false|If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests|
|» redirection|body|[RedirectionSettings](#schemaredirectionsettings)|false|The configuration for redirection per service|
|» root|body|string|true|Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar|
|» secComExcludedPatterns|body|[string]|false|URI patterns excluded from secured communications|
|» secComSettings|body|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|false|none|
|» » *oneOf*|body|[HSAlgoSettings](#schemahsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[RSAlgoSettings](#schemarsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[ESAlgoSettings](#schemaesalgosettings)|false|Settings for an EC + SHA signing algorithm|
|» » *oneOf*|body|[JWKSAlgoSettings](#schemajwksalgosettings)|false|Settings for a JWK set|
|» sendOtoroshiHeadersBack|body|boolean|false|When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...|
|» statsdConfig|body|[StatsdConfig](#schemastatsdconfig)|false|The configuration for statsd metrics push|
|» subdomain|body|string|true|The subdomain on which the service is available|
|» targets|body|[[Target](#schematarget)]|true|The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures|
|» transformerRef|body|string|false|A reference to a request transformer|
|» userFacing|body|boolean|false|The fact that this service will be seen by users and cannot be impacted by the Snow Monkey|
|» xForwardedHeaders|body|boolean|false|Send X-Forwarded-* headers|

> Example responses

> 200 Response

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="update-a-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Service](#schemaservice)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a service descriptor

<a id="opIddeleteService"></a>

> Code samples

```bash
curl https://example.com/api/services/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/services/{serviceId}`

Delete a service descriptor

<h3 id="delete-a-service-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-a-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a service descriptor with a diff

<a id="opIdpatchService"></a>

> Code samples

```bash
curl https://example.com/api/services/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/services/{serviceId}`

Update a service descriptor with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-a-service-descriptor-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

<h3 id="update-a-service-descriptor-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Service](#schemaservice)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a service descriptor targets

<a id="opIdserviceTargets"></a>

> Code samples

```bash
curl https://example.com/api/services/string/targets \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}/targets`

Get a service descriptor targets

<h3 id="get-a-service-descriptor-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|

> Example responses

> 200 Response

```json
[
  {
    "host": "www.google.com",
    "scheme": "a string value"
  }
]
```

<h3 id="get-a-service-descriptor-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-a-service-descriptor-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Target](#schematarget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Add a target to a service descriptor

<a id="opIdserviceAddTarget"></a>

> Code samples

```bash
curl https://example.com/api/services/string/targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "host": "www.google.com",
    "scheme": "a string value"
  }'
```

`POST /api/services/{serviceId}/targets`

Add a target to a service descriptor

> Body parameter

```json
{
  "host": "www.google.com",
  "scheme": "a string value"
}
```

<h3 id="add-a-target-to-a-service-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|
|body|body|[Target](#schematarget)|false|none|
|» host|body|string(hostname)|true|The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port|
|» scheme|body|string|true|The protocol used for communication. Can be http or https|

> Example responses

> 200 Response

```json
[
  {
    "host": "www.google.com",
    "scheme": "a string value"
  }
]
```

<h3 id="add-a-target-to-a-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="add-a-target-to-a-service-descriptor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Target](#schematarget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a service descriptor target

<a id="opIdserviceDeleteTarget"></a>

> Code samples

```bash
curl https://example.com/api/services/string/targets \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/services/{serviceId}/targets`

Delete a service descriptor target

<h3 id="delete-a-service-descriptor-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|

> Example responses

> 200 Response

```json
[
  {
    "host": "www.google.com",
    "scheme": "a string value"
  }
]
```

<h3 id="delete-a-service-descriptor-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="delete-a-service-descriptor-target-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Target](#schematarget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a service descriptor targets

<a id="opIdupdateServiceTargets"></a>

> Code samples

```bash
curl https://example.com/api/services/string/targets \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/services/{serviceId}/targets`

Update a service descriptor targets

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-a-service-descriptor-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
[
  {
    "host": "www.google.com",
    "scheme": "a string value"
  }
]
```

<h3 id="update-a-service-descriptor-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="update-a-service-descriptor-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Target](#schematarget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a service descriptor error template

<a id="opIdserviceTemplate"></a>

> Code samples

```bash
curl https://example.com/api/services/string/template \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/services/{serviceId}/template`

Get a service descriptor error template

<h3 id="get-a-service-descriptor-error-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|

> Example responses

> 200 Response

```json
{
  "messages": {
    "key": "value"
  },
  "serviceId": "a string value",
  "template40x": "a string value",
  "template50x": "a string value",
  "templateBuild": "a string value",
  "templateMaintenance": "a string value"
}
```

<h3 id="get-a-service-descriptor-error-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ErrorTemplate](#schemaerrortemplate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update an error template to a service descriptor

<a id="opIdupdateServiceTemplate"></a>

> Code samples

```bash
curl https://example.com/api/services/string/template \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": {
      "key": "value"
    },
    "serviceId": "a string value",
    "template40x": "a string value",
    "template50x": "a string value",
    "templateBuild": "a string value",
    "templateMaintenance": "a string value"
  }'
```

`PUT /api/services/{serviceId}/template`

Update an error template to a service descriptor

> Body parameter

```json
{
  "messages": {
    "key": "value"
  },
  "serviceId": "a string value",
  "template40x": "a string value",
  "template50x": "a string value",
  "templateBuild": "a string value",
  "templateMaintenance": "a string value"
}
```

<h3 id="update-an-error-template-to-a-service-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|
|body|body|[ErrorTemplate](#schemaerrortemplate)|false|none|
|» messages|body|object|true|Map for custom messages|
|» » **additionalProperties**|body|string|false|none|
|» serviceId|body|string|true|The Id of the service for which the error template is enabled|
|» template40x|body|string|true|The html template for 40x errors|
|» template50x|body|string|true|The html template for 50x errors|
|» templateBuild|body|string|true|The html template for build page|
|» templateMaintenance|body|string|true|The html template for maintenance page|

> Example responses

> 200 Response

```json
{
  "messages": {
    "key": "value"
  },
  "serviceId": "a string value",
  "template40x": "a string value",
  "template50x": "a string value",
  "templateBuild": "a string value",
  "templateMaintenance": "a string value"
}
```

<h3 id="update-an-error-template-to-a-service-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ErrorTemplate](#schemaerrortemplate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a service descriptor error template

<a id="opIdcreateServiceTemplate"></a>

> Code samples

```bash
curl https://example.com/api/services/string/template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": {
      "key": "value"
    },
    "serviceId": "a string value",
    "template40x": "a string value",
    "template50x": "a string value",
    "templateBuild": "a string value",
    "templateMaintenance": "a string value"
  }'
```

`POST /api/services/{serviceId}/template`

Update a service descriptor targets

> Body parameter

```json
{
  "messages": {
    "key": "value"
  },
  "serviceId": "a string value",
  "template40x": "a string value",
  "template50x": "a string value",
  "templateBuild": "a string value",
  "templateMaintenance": "a string value"
}
```

<h3 id="create-a-service-descriptor-error-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|
|body|body|[ErrorTemplate](#schemaerrortemplate)|false|none|
|» messages|body|object|true|Map for custom messages|
|» » **additionalProperties**|body|string|false|none|
|» serviceId|body|string|true|The Id of the service for which the error template is enabled|
|» template40x|body|string|true|The html template for 40x errors|
|» template50x|body|string|true|The html template for 50x errors|
|» templateBuild|body|string|true|The html template for build page|
|» templateMaintenance|body|string|true|The html template for maintenance page|

> Example responses

> 200 Response

```json
{
  "messages": {
    "key": "value"
  },
  "serviceId": "a string value",
  "template40x": "a string value",
  "template50x": "a string value",
  "templateBuild": "a string value",
  "templateMaintenance": "a string value"
}
```

<h3 id="create-a-service-descriptor-error-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ErrorTemplate](#schemaerrortemplate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a service descriptor error template

<a id="opIddeleteServiceTemplate"></a>

> Code samples

```bash
curl https://example.com/api/services/string/template \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/services/{serviceId}/template`

Delete a service descriptor error template

<h3 id="delete-a-service-descriptor-error-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The service id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-a-service-descriptor-error-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-stats">stats</h1>

Everything about Otoroshi stats

## Get global otoroshi stats

<a id="opIdglobalLiveStats"></a>

> Code samples

```bash
curl https://example.com/api/live \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/live`

Get global otoroshi stats

> Example responses

> 200 Response

```json
{
  "calls": 123,
  "concurrentHandledRequests": 123,
  "dataIn": 123,
  "dataInRate": 42.2,
  "dataOut": 123,
  "dataOutRate": 42.2,
  "duration": 42.2,
  "overhead": 42.2,
  "rate": 42.2
}
```

<h3 id="get-global-otoroshi-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Stats](#schemastats)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get live feed of otoroshi stats

<a id="opIdserviceLiveStats"></a>

> Code samples

```bash
curl https://example.com/api/live/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/live/{id}`

Get live feed of global otoroshi stats (global) or for a service {id}

<h3 id="get-live-feed-of-otoroshi-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The service id or global for otoroshi stats|

> Example responses

> 200 Response

```json
{
  "calls": 123,
  "concurrentHandledRequests": 123,
  "dataIn": 123,
  "dataInRate": 42.2,
  "dataOut": 123,
  "dataOutRate": 42.2,
  "duration": 42.2,
  "overhead": 42.2,
  "rate": 42.2
}
```

<h3 id="get-live-feed-of-otoroshi-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Stats](#schemastats)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-snowmonkey">snowmonkey</h1>

Everything about Otoroshi Snow Monkey

## Start the Snow Monkey

<a id="opIdstartSnowMonkey"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/_start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/snowmonkey/_start`

Start the Snow Monkey

> Example responses

> 200 Response

```json
{
  "done": true
}
```

<h3 id="start-the-snow-monkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Done](#schemadone)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Stop the Snow Monkey

<a id="opIdstopSnowMonkey"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/_stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/snowmonkey/_stop`

Stop the Snow Monkey

> Example responses

> 200 Response

```json
{
  "done": true
}
```

<h3 id="stop-the-snow-monkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Done](#schemadone)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get current Snow Monkey config

<a id="opIdgetSnowMonkeyConfig"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/snowmonkey/config`

Get current Snow Monkey config

> Example responses

> 200 Response

```json
{
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "dryRun": true,
  "enabled": true,
  "includeUserFacingDescriptors": true,
  "outageDurationFrom": 123123,
  "outageDurationTo": 123123,
  "outageStrategy": "OneServicePerGroup",
  "startTime": "17:32:28.000",
  "stopTime": "17:32:28.000",
  "targetGroups": [
    "a string value"
  ],
  "timesPerDay": 123123
}
```

<h3 id="get-current-snow-monkey-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SnowMonkeyConfig](#schemasnowmonkeyconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update current Snow Monkey config

<a id="opIdupdateSnowMonkey"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "a string value",
    "id": "a string value",
    "name": "a string value"
  }'
```

`PUT /api/snowmonkey/config`

Update current Snow Monkey config

> Body parameter

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-current-snow-monkey-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|The descriptoin of the group|
|» id|body|string|true|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|» name|body|string|true|The name of the group|

> Example responses

> 200 Response

```json
{
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "dryRun": true,
  "enabled": true,
  "includeUserFacingDescriptors": true,
  "outageDurationFrom": 123123,
  "outageDurationTo": 123123,
  "outageStrategy": "OneServicePerGroup",
  "startTime": "17:32:28.000",
  "stopTime": "17:32:28.000",
  "targetGroups": [
    "a string value"
  ],
  "timesPerDay": 123123
}
```

<h3 id="update-current-snow-monkey-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SnowMonkeyConfig](#schemasnowmonkeyconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update current Snow Monkey config

<a id="opIdpatchSnowMonkey"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/config \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "a string value",
    "id": "a string value",
    "name": "a string value"
  }'
```

`PATCH /api/snowmonkey/config`

Update current Snow Monkey config

> Body parameter

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-current-snow-monkey-config-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|The descriptoin of the group|
|» id|body|string|true|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|» name|body|string|true|The name of the group|

> Example responses

> 200 Response

```json
{
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "dryRun": true,
  "enabled": true,
  "includeUserFacingDescriptors": true,
  "outageDurationFrom": 123123,
  "outageDurationTo": 123123,
  "outageStrategy": "OneServicePerGroup",
  "startTime": "17:32:28.000",
  "stopTime": "17:32:28.000",
  "targetGroups": [
    "a string value"
  ],
  "timesPerDay": 123123
}
```

<h3 id="update-current-snow-monkey-config-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SnowMonkeyConfig](#schemasnowmonkeyconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get all current Snow Monkey ourages

<a id="opIdgetSnowMonkeyOutages"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/outages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/snowmonkey/outages`

Get all current Snow Monkey ourages

> Example responses

> 200 Response

```json
[
  {
    "descriptorId": "a string value",
    "descriptorName": "a string value",
    "duration": 123123,
    "until": "17:32:28.000"
  }
]
```

<h3 id="get-all-current-snow-monkey-ourages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-current-snow-monkey-ourages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Outage](#schemaoutage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Reset Snow Monkey Outages for the day

<a id="opIdresetSnowMonkey"></a>

> Code samples

```bash
curl https://example.com/api/snowmonkey/outages \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/snowmonkey/outages`

Reset Snow Monkey Outages for the day

> Example responses

> 200 Response

```json
{
  "done": true
}
```

<h3 id="reset-snow-monkey-outages-for-the-day-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Done](#schemadone)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-health">health</h1>

Everything about Otoroshi health status

## Return current Otoroshi health

<a id="opIdhealth"></a>

> Code samples

```bash
curl https://example.com/health \
  -H 'Accept: application/json'
```

`GET /health`

Import the full state of Otoroshi as a file

> Example responses

> 200 Response

```json
{
  "datastore": "healthy",
  "otoroshi": "healthy"
}
```

<h3 id="return-current-otoroshi-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OtoroshiHealth](#schemaotoroshihealth)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="otoroshi-admin-api-jwt-verifiers">jwt-verifiers</h1>

Everything about Otoroshi global JWT token verifiers

## Get all global JWT verifiers

<a id="opIdfindAllGlobalJwtVerifiers"></a>

> Code samples

```bash
curl https://example.com/api/verifiers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/verifiers`

Get all global JWT verifiers

> Example responses

> 200 Response

```json
[
  {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "desc": "a string value",
    "enabled": true,
    "id": "a string value",
    "name": "a string value",
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true
  }
]
```

<h3 id="get-all-global-jwt-verifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-global-jwt-verifiers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GlobalJwtVerifier](#schemaglobaljwtverifier)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create one global JWT verifiers

<a id="opIdcreateGlobalJwtVerifier"></a>

> Code samples

```bash
curl https://example.com/api/verifiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "desc": "a string value",
    "enabled": true,
    "id": "a string value",
    "name": "a string value",
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true
  }'
```

`POST /api/verifiers`

Create one global JWT verifiers

> Body parameter

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

<h3 id="create-one-global-jwt-verifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalJwtVerifier](#schemaglobaljwtverifier)|false|none|
|» algoSettings|body|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|true|none|
|» » *oneOf*|body|[HSAlgoSettings](#schemahsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[RSAlgoSettings](#schemarsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[ESAlgoSettings](#schemaesalgosettings)|false|Settings for an EC + SHA signing algorithm|
|» » *oneOf*|body|[JWKSAlgoSettings](#schemajwksalgosettings)|false|Settings for a JWK set|
|» desc|body|string|true|Verifier description|
|» enabled|body|boolean|true|Is it enabled|
|» id|body|string|true|Verifier id|
|» name|body|string|true|Verifier name|
|» source|body|[InQueryParam](#schemainqueryparam) \| [InHeader](#schemainheader) \| [InCookie](#schemaincookie)|true|none|
|» » *oneOf*|body|[InQueryParam](#schemainqueryparam)|false|JWT location in a query param|
|» » *oneOf*|body|[InHeader](#schemainheader)|false|JWT location in a header|
|» » *oneOf*|body|[InCookie](#schemaincookie)|false|JWT location in a cookie|
|» strategy|body|[PassThrough](#schemapassthrough) \| [Sign](#schemasign) \| [Transform](#schematransform)|true|none|
|» » *oneOf*|body|[PassThrough](#schemapassthrough)|false|Strategy where only signature and field values are verified|
|» » *oneOf*|body|[Sign](#schemasign)|false|Strategy where signature and field values are verified, and then token si re-signed|
|» » *oneOf*|body|[Transform](#schematransform)|false|Strategy where signature and field values are verified, trasnformed and then token si re-signed|
|» strict|body|boolean|true|Does it fail if JWT not found|

> Example responses

> 200 Response

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

<h3 id="create-one-global-jwt-verifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalJwtVerifier](#schemaglobaljwtverifier)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get one global JWT verifiers

<a id="opIdfindGlobalJwtVerifiersById"></a>

> Code samples

```bash
curl https://example.com/api/verifiers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/verifiers/{verifierId}`

Get one global JWT verifiers

<h3 id="get-one-global-jwt-verifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|verifierId|path|string|true|The jwt verifier id|

> Example responses

> 200 Response

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

<h3 id="get-one-global-jwt-verifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalJwtVerifier](#schemaglobaljwtverifier)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one global JWT verifiers

<a id="opIdupdateGlobalJwtVerifier"></a>

> Code samples

```bash
curl https://example.com/api/verifiers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "desc": "a string value",
    "enabled": true,
    "id": "a string value",
    "name": "a string value",
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true
  }'
```

`PUT /api/verifiers/{verifierId}`

Update one global JWT verifiers

> Body parameter

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

<h3 id="update-one-global-jwt-verifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|verifierId|path|string|true|The jwt verifier id|
|body|body|[GlobalJwtVerifier](#schemaglobaljwtverifier)|false|none|
|» algoSettings|body|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|true|none|
|» » *oneOf*|body|[HSAlgoSettings](#schemahsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[RSAlgoSettings](#schemarsalgosettings)|false|Settings for an HMAC + SHA signing algorithm|
|» » *oneOf*|body|[ESAlgoSettings](#schemaesalgosettings)|false|Settings for an EC + SHA signing algorithm|
|» » *oneOf*|body|[JWKSAlgoSettings](#schemajwksalgosettings)|false|Settings for a JWK set|
|» desc|body|string|true|Verifier description|
|» enabled|body|boolean|true|Is it enabled|
|» id|body|string|true|Verifier id|
|» name|body|string|true|Verifier name|
|» source|body|[InQueryParam](#schemainqueryparam) \| [InHeader](#schemainheader) \| [InCookie](#schemaincookie)|true|none|
|» » *oneOf*|body|[InQueryParam](#schemainqueryparam)|false|JWT location in a query param|
|» » *oneOf*|body|[InHeader](#schemainheader)|false|JWT location in a header|
|» » *oneOf*|body|[InCookie](#schemaincookie)|false|JWT location in a cookie|
|» strategy|body|[PassThrough](#schemapassthrough) \| [Sign](#schemasign) \| [Transform](#schematransform)|true|none|
|» » *oneOf*|body|[PassThrough](#schemapassthrough)|false|Strategy where only signature and field values are verified|
|» » *oneOf*|body|[Sign](#schemasign)|false|Strategy where signature and field values are verified, and then token si re-signed|
|» » *oneOf*|body|[Transform](#schematransform)|false|Strategy where signature and field values are verified, trasnformed and then token si re-signed|
|» strict|body|boolean|true|Does it fail if JWT not found|

> Example responses

> 200 Response

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

<h3 id="update-one-global-jwt-verifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalJwtVerifier](#schemaglobaljwtverifier)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete one global JWT verifiers

<a id="opIddeleteGlobalJwtVerifier"></a>

> Code samples

```bash
curl https://example.com/api/verifiers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/verifiers/{verifierId}`

Delete one global JWT verifiers

<h3 id="delete-one-global-jwt-verifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|verifierId|path|string|true|The jwt verifier id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-one-global-jwt-verifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one global JWT verifiers

<a id="opIdpatchGlobalJwtVerifier"></a>

> Code samples

```bash
curl https://example.com/api/verifiers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/verifiers/{verifierId}`

Update one global JWT verifiers

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-one-global-jwt-verifiers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|verifierId|path|string|true|The jwt verifier id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

<h3 id="update-one-global-jwt-verifiers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalJwtVerifier](#schemaglobaljwtverifier)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-auth-config">auth-config</h1>

Everything about Otoroshi global auth. module config

## Get all global auth. module configs

<a id="opIdfindAllGlobalAuthModules"></a>

> Code samples

```bash
curl https://example.com/api/auths \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/auths`

Get all global auth. module configs

> Example responses

> 200 Response

```json
[
  {
    "adminPassword": "a string value",
    "adminUsername": "a string value",
    "desc": "a string value",
    "emailField": "a string value",
    "groupFilter": "a string value",
    "id": "a string value",
    "name": "a string value",
    "nameField": "a string value",
    "otoroshiDataField": "a string value",
    "searchBase": "a string value",
    "searchFilter": "a string value",
    "serverUrl": "a string value",
    "sessionMaxAge": 123123,
    "type": "a string value",
    "userBase": "a string value"
  }
]
```

<h3 id="get-all-global-auth-module-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-global-auth-module-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LdapAuthModuleConfig](#schemaldapauthmoduleconfig) \| [InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig) \| [GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)]|false|none|none|
|» *oneOf*|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|
|» *oneOf*|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|none|Settings to authenticate users using the in memory user store|
|» *oneOf*|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create one global auth. module config

<a id="opIdcreateGlobalAuthModule"></a>

> Code samples

```bash
curl https://example.com/api/auths \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "adminPassword": "a string value",
    "adminUsername": "a string value",
    "desc": "a string value",
    "emailField": "a string value",
    "groupFilter": "a string value",
    "id": "a string value",
    "name": "a string value",
    "nameField": "a string value",
    "otoroshiDataField": "a string value",
    "searchBase": "a string value",
    "searchFilter": "a string value",
    "serverUrl": "a string value",
    "sessionMaxAge": 123123,
    "type": "a string value",
    "userBase": "a string value"
  }'
```

`POST /api/auths`

Create one global auth. module config

> Body parameter

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

<h3 id="create-one-global-auth-module-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig) \| [InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig) \| [GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|
|» *oneOf*|body|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|Settings to authenticate users using a generic OAuth2 provider|
|» *oneOf*|body|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|Settings to authenticate users using the in memory user store|
|» *oneOf*|body|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|Settings to authenticate users using a generic OAuth2 provider|

> Example responses

> 200 Response

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

<h3 id="create-one-global-auth-module-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="create-one-global-auth-module-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|
|*oneOf*|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|none|Settings to authenticate users using the in memory user store|
|*oneOf*|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get one global auth. module configs

<a id="opIdfindGlobalAuthModuleById"></a>

> Code samples

```bash
curl https://example.com/api/auths/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/auths/{id}`

Get one global auth. module configs

<h3 id="get-one-global-auth-module-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The auth. config id|

> Example responses

> 200 Response

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

<h3 id="get-one-global-auth-module-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-one-global-auth-module-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|
|*oneOf*|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|none|Settings to authenticate users using the in memory user store|
|*oneOf*|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one global auth. module config

<a id="opIdupdateGlobalAuthModule"></a>

> Code samples

```bash
curl https://example.com/api/auths/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "adminPassword": "a string value",
    "adminUsername": "a string value",
    "desc": "a string value",
    "emailField": "a string value",
    "groupFilter": "a string value",
    "id": "a string value",
    "name": "a string value",
    "nameField": "a string value",
    "otoroshiDataField": "a string value",
    "searchBase": "a string value",
    "searchFilter": "a string value",
    "serverUrl": "a string value",
    "sessionMaxAge": 123123,
    "type": "a string value",
    "userBase": "a string value"
  }'
```

`PUT /api/auths/{id}`

Update one global auth. module config

> Body parameter

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

<h3 id="update-one-global-auth-module-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The auth. config id|
|body|body|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig) \| [InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig) \| [GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|
|» *oneOf*|body|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|Settings to authenticate users using a generic OAuth2 provider|
|» *oneOf*|body|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|Settings to authenticate users using the in memory user store|
|» *oneOf*|body|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|Settings to authenticate users using a generic OAuth2 provider|

> Example responses

> 200 Response

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

<h3 id="update-one-global-auth-module-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="update-one-global-auth-module-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|
|*oneOf*|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|none|Settings to authenticate users using the in memory user store|
|*oneOf*|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete one global auth. module config

<a id="opIddeleteGlobalAuthModule"></a>

> Code samples

```bash
curl https://example.com/api/auths/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/auths/{id}`

Delete one global auth. module config

<h3 id="delete-one-global-auth-module-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The auth. config id id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-one-global-auth-module-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one global auth. module config

<a id="opIdpatchGlobalAuthModule"></a>

> Code samples

```bash
curl https://example.com/api/auths/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/auths/{id}`

Update one global auth. module config

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-one-global-auth-module-config-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The auth. config id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

<h3 id="update-one-global-auth-module-config-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="update-one-global-auth-module-config-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LdapAuthModuleConfig](#schemaldapauthmoduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|
|*oneOf*|[InMemoryAuthModuleConfig](#schemainmemoryauthmoduleconfig)|false|none|Settings to authenticate users using the in memory user store|
|*oneOf*|[GenericOauth2ModuleConfig](#schemagenericoauth2moduleconfig)|false|none|Settings to authenticate users using a generic OAuth2 provider|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-scripts">scripts</h1>

Everything about Otoroshi request transformer scripts

## Get all scripts

<a id="opIdfindAllScripts"></a>

> Code samples

```bash
curl https://example.com/api/scripts \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/scripts`

Get all scripts

> Example responses

> 200 Response

```json
[
  {
    "code": {
      "key": "value"
    },
    "desc": {
      "key": "value"
    },
    "id": "a string value",
    "name": "a string value"
  }
]
```

<h3 id="get-all-scripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-scripts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Script](#schemascript)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new script

<a id="opIdcreateScript"></a>

> Code samples

```bash
curl https://example.com/api/scripts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "code": {
      "key": "value"
    },
    "desc": {
      "key": "value"
    },
    "id": "a string value",
    "name": "a string value"
  }'
```

`POST /api/scripts`

Create a new script

> Body parameter

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="create-a-new-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Script](#schemascript)|false|none|
|» code|body|object|true|The code of the script|
|» » **additionalProperties**|body|string|false|none|
|» desc|body|object|true|The description of the script|
|» » **additionalProperties**|body|string|false|none|
|» id|body|string|true|The id of the script|
|» name|body|string|true|The name of the script|

> Example responses

> 200 Response

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="create-a-new-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Script](#schemascript)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Compile a script

<a id="opIdcompileScript"></a>

> Code samples

```bash
curl https://example.com/api/scripts/_compile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "code": {
      "key": "value"
    },
    "desc": {
      "key": "value"
    },
    "id": "a string value",
    "name": "a string value"
  }'
```

`POST /api/scripts/_compile`

Compile a script

> Body parameter

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="compile-a-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Script](#schemascript)|false|none|
|» code|body|object|true|The code of the script|
|» » **additionalProperties**|body|string|false|none|
|» desc|body|object|true|The description of the script|
|» » **additionalProperties**|body|string|false|none|
|» id|body|string|true|The id of the script|
|» name|body|string|true|The name of the script|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "column": "a string value",
    "file": {
      "key": "value"
    },
    "line": "a string value",
    "message": {
      "key": "value"
    },
    "rawMessage": {
      "key": "value"
    }
  }
}
```

<h3 id="compile-a-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ScriptCompilationResult](#schemascriptcompilationresult)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a script

<a id="opIdfindScriptById"></a>

> Code samples

```bash
curl https://example.com/api/scripts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/scripts/{scriptId}`

Get a script

<h3 id="get-a-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script id|

> Example responses

> 200 Response

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="get-a-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Script](#schemascript)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a script

<a id="opIdupdateScript"></a>

> Code samples

```bash
curl https://example.com/api/scripts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "code": {
      "key": "value"
    },
    "desc": {
      "key": "value"
    },
    "id": "a string value",
    "name": "a string value"
  }'
```

`PUT /api/scripts/{scriptId}`

Update a script

> Body parameter

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-a-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script id|
|body|body|[Script](#schemascript)|false|none|
|» code|body|object|true|The code of the script|
|» » **additionalProperties**|body|string|false|none|
|» desc|body|object|true|The description of the script|
|» » **additionalProperties**|body|string|false|none|
|» id|body|string|true|The id of the script|
|» name|body|string|true|The name of the script|

> Example responses

> 200 Response

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-a-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Script](#schemascript)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a script

<a id="opIddeleteScript"></a>

> Code samples

```bash
curl https://example.com/api/scripts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/scripts/{scriptId}`

Delete a script

<h3 id="delete-a-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-a-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a script with a diff

<a id="opIdpatchScript"></a>

> Code samples

```bash
curl https://example.com/api/scripts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/scripts/{scriptId}`

Update a script with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-a-script-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

<h3 id="update-a-script-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Script](#schemascript)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-certificates">certificates</h1>

Everything about Otoroshi SSL/TLS certificates

## Get all certificates

<a id="opIdallCerts"></a>

> Code samples

```bash
curl https://example.com/api/certificates \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/certificates`

Get all certificates

> Example responses

> 200 Response

```json
[
  {
    "autoRenew": "a string value",
    "ca": "a string value",
    "caRef": "a string value",
    "chain": "a string value",
    "domain": "a string value",
    "from": "a string value",
    "id": "a string value",
    "privateKey": "a string value",
    "selfSigned": "a string value",
    "subject": "a string value",
    "to": "a string value",
    "valid": "a string value"
  }
]
```

<h3 id="get-all-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-certificates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Certificate](#schemacertificate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create one certificate

<a id="opIdcreateCert"></a>

> Code samples

```bash
curl https://example.com/api/certificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "autoRenew": "a string value",
    "ca": "a string value",
    "caRef": "a string value",
    "chain": "a string value",
    "domain": "a string value",
    "from": "a string value",
    "id": "a string value",
    "privateKey": "a string value",
    "selfSigned": "a string value",
    "subject": "a string value",
    "to": "a string value",
    "valid": "a string value"
  }'
```

`POST /api/certificates`

Create one certificate

> Body parameter

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

<h3 id="create-one-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Certificate](#schemacertificate)|false|none|
|» autoRenew|body|string|true|Allow Otoroshi to renew the certificate (if self signed)|
|» ca|body|string|true|Certificate is a CA (read only)|
|» caRef|body|string|true|Reference for a CA certificate in otoroshi|
|» chain|body|string|true|Certificate chain of trust in PEM format|
|» domain|body|string|true|Domain of the certificate (read only)|
|» from|body|string|true|Start date of validity|
|» id|body|string|true|Id of the certificate|
|» privateKey|body|string|true|PKCS8 private key in PEM format|
|» selfSigned|body|string|true|Certificate is self signed  read only)|
|» subject|body|string|true|Subject of the certificate (read only)|
|» to|body|string|true|End date of validity|
|» valid|body|string|true|Certificate is valid (read only)|

> Example responses

> 200 Response

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

<h3 id="create-one-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Certificate](#schemacertificate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get one certificate by id

<a id="opIdoneCert"></a>

> Code samples

```bash
curl https://example.com/api/certificates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/certificates/{id}`

Get one certificate by id

<h3 id="get-one-certificate-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The auth. config id|

> Example responses

> 200 Response

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

<h3 id="get-one-certificate-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Certificate](#schemacertificate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one certificate by id

<a id="opIdputCert"></a>

> Code samples

```bash
curl https://example.com/api/certificates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "autoRenew": "a string value",
    "ca": "a string value",
    "caRef": "a string value",
    "chain": "a string value",
    "domain": "a string value",
    "from": "a string value",
    "id": "a string value",
    "privateKey": "a string value",
    "selfSigned": "a string value",
    "subject": "a string value",
    "to": "a string value",
    "valid": "a string value"
  }'
```

`PUT /api/certificates/{id}`

Update one certificate by id

> Body parameter

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

<h3 id="update-one-certificate-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The certificate id|
|body|body|[Certificate](#schemacertificate)|false|none|
|» autoRenew|body|string|true|Allow Otoroshi to renew the certificate (if self signed)|
|» ca|body|string|true|Certificate is a CA (read only)|
|» caRef|body|string|true|Reference for a CA certificate in otoroshi|
|» chain|body|string|true|Certificate chain of trust in PEM format|
|» domain|body|string|true|Domain of the certificate (read only)|
|» from|body|string|true|Start date of validity|
|» id|body|string|true|Id of the certificate|
|» privateKey|body|string|true|PKCS8 private key in PEM format|
|» selfSigned|body|string|true|Certificate is self signed  read only)|
|» subject|body|string|true|Subject of the certificate (read only)|
|» to|body|string|true|End date of validity|
|» valid|body|string|true|Certificate is valid (read only)|

> Example responses

> 200 Response

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

<h3 id="update-one-certificate-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Certificate](#schemacertificate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete one certificate by id

<a id="opIddeleteCert"></a>

> Code samples

```bash
curl https://example.com/api/certificates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/certificates/{id}`

Delete one certificate by id

<h3 id="delete-one-certificate-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The certificate id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-one-certificate-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one certificate by id

<a id="opIdpatchCert"></a>

> Code samples

```bash
curl https://example.com/api/certificates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/certificates/{id}`

Update one certificate by id

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-one-certificate-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The certificate id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

<h3 id="update-one-certificate-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Certificate](#schemacertificate)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-validation-authorities">validation-authorities</h1>

Everything about Otoroshi validation authorities

## Get all validation authoritiess

<a id="opIdfindAllClientValidators"></a>

> Code samples

```bash
curl https://example.com/api/client-validators \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/client-validators`

Get all validation authoritiess

> Example responses

> 200 Response

```json
[
  {
    "alwaysValid": true,
    "badTtl": 123,
    "description": "a string value",
    "goodTtl": 123,
    "headers": {
      "key": "value"
    },
    "host": "a string value",
    "id": "a string value",
    "method": "a string value",
    "name": "a string value",
    "noCache": true,
    "path": "a string value",
    "timeout": 123,
    "url": "a string value"
  }
]
```

<h3 id="get-all-validation-authoritiess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-validation-authoritiess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ValidationAuthority](#schemavalidationauthority)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create one validation authorities

<a id="opIdcreateClientValidator"></a>

> Code samples

```bash
curl https://example.com/api/client-validators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "alwaysValid": true,
    "badTtl": 123,
    "description": "a string value",
    "goodTtl": 123,
    "headers": {
      "key": "value"
    },
    "host": "a string value",
    "id": "a string value",
    "method": "a string value",
    "name": "a string value",
    "noCache": true,
    "path": "a string value",
    "timeout": 123,
    "url": "a string value"
  }'
```

`POST /api/client-validators`

Create one validation authorities

> Body parameter

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

<h3 id="create-one-validation-authorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidationAuthority](#schemavalidationauthority)|false|none|
|» alwaysValid|body|boolean|true|Bypass http calls, every certificates are valids|
|» badTtl|body|integer(int64)|true|The TTL for invalid access response caching|
|» description|body|string|true|The description of the settings|
|» goodTtl|body|integer(int64)|true|The TTL for valid access response caching|
|» headers|body|object|true|HTTP call headers|
|» » **additionalProperties**|body|string|false|none|
|» host|body|string|true|The host of the server|
|» id|body|string|true|The id of the settings|
|» method|body|string|true|The HTTP method|
|» name|body|string|true|The name of the settings|
|» noCache|body|boolean|true|Avoid caching responses|
|» path|body|string|true|The URL path|
|» timeout|body|integer(int64)|true|The call timeout|
|» url|body|string|true|The URL of the server|

> Example responses

> 200 Response

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

<h3 id="create-one-validation-authorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ValidationAuthority](#schemavalidationauthority)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get one validation authorities by id

<a id="opIdfindClientValidatorById"></a>

> Code samples

```bash
curl https://example.com/api/client-validators/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/client-validators/{id}`

Get one validation authorities by id

<h3 id="get-one-validation-authorities-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The auth. config id|

> Example responses

> 200 Response

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

<h3 id="get-one-validation-authorities-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ValidationAuthority](#schemavalidationauthority)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one validation authorities by id

<a id="opIdupdateClientValidator"></a>

> Code samples

```bash
curl https://example.com/api/client-validators/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "alwaysValid": true,
    "badTtl": 123,
    "description": "a string value",
    "goodTtl": 123,
    "headers": {
      "key": "value"
    },
    "host": "a string value",
    "id": "a string value",
    "method": "a string value",
    "name": "a string value",
    "noCache": true,
    "path": "a string value",
    "timeout": 123,
    "url": "a string value"
  }'
```

`PUT /api/client-validators/{id}`

Update one validation authorities by id

> Body parameter

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

<h3 id="update-one-validation-authorities-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The validation authorities id|
|body|body|[ValidationAuthority](#schemavalidationauthority)|false|none|
|» alwaysValid|body|boolean|true|Bypass http calls, every certificates are valids|
|» badTtl|body|integer(int64)|true|The TTL for invalid access response caching|
|» description|body|string|true|The description of the settings|
|» goodTtl|body|integer(int64)|true|The TTL for valid access response caching|
|» headers|body|object|true|HTTP call headers|
|» » **additionalProperties**|body|string|false|none|
|» host|body|string|true|The host of the server|
|» id|body|string|true|The id of the settings|
|» method|body|string|true|The HTTP method|
|» name|body|string|true|The name of the settings|
|» noCache|body|boolean|true|Avoid caching responses|
|» path|body|string|true|The URL path|
|» timeout|body|integer(int64)|true|The call timeout|
|» url|body|string|true|The URL of the server|

> Example responses

> 200 Response

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

<h3 id="update-one-validation-authorities-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ValidationAuthority](#schemavalidationauthority)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete one validation authorities by id

<a id="opIddeleteClientValidator"></a>

> Code samples

```bash
curl https://example.com/api/client-validators/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/client-validators/{id}`

Delete one validation authorities by id

<h3 id="delete-one-validation-authorities-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The validation authorities id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-one-validation-authorities-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update one validation authorities by id

<a id="opIdpatchClientValidator"></a>

> Code samples

```bash
curl https://example.com/api/client-validators/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/client-validators/{id}`

Update one validation authorities by id

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-one-validation-authorities-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The validation authorities id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

<h3 id="update-one-validation-authorities-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ValidationAuthority](#schemavalidationauthority)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

<h1 id="otoroshi-admin-api-data-exporter-configs">data-exporter-configs</h1>

Everything about Otoroshi data exporters

## Get all data exporter configs

<a id="opIdfindAllDataExporters"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/data-exporter-configs`

Get all data exporter configs

> Example responses

> 200 Response

```json
[
  {
    "bufferSize": 123123,
    "config": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "desc": "a string value",
    "enabled": "a string value",
    "filtering": {
      "exclude": [
        {
          "key": "value"
        }
      ],
      "include": [
        {
          "key": "value"
        }
      ]
    },
    "groupDuration": 123,
    "groupSize": 123123,
    "id": "a string value",
    "jsonWorkers": 123123,
    "location": {
      "teams": [
        {
          "key": "value"
        }
      ],
      "tenant": "a string value"
    },
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "projection": {
      "key": "value"
    },
    "sendWorkers": 123123,
    "typ": "kafka"
  }
]
```

<h3 id="get-all-data-exporter-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="get-all-data-exporter-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DataExporterConfig](#schemadataexporterconfig)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new data exporter config

<a id="opIdcreateDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bufferSize": 123123,
    "config": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "desc": "a string value",
    "enabled": "a string value",
    "filtering": {
      "exclude": [
        {
          "key": "value"
        }
      ],
      "include": [
        {
          "key": "value"
        }
      ]
    },
    "groupDuration": 123,
    "groupSize": 123123,
    "id": "a string value",
    "jsonWorkers": 123123,
    "location": {
      "teams": [
        {
          "key": "value"
        }
      ],
      "tenant": "a string value"
    },
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "projection": {
      "key": "value"
    },
    "sendWorkers": 123123,
    "typ": "kafka"
  }'
```

`POST /api/data-exporter-configs`

Create a new data exporter config

> Body parameter

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="create-a-new-data-exporter-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataExporterConfig](#schemadataexporterconfig)|false|none|
|» bufferSize|body|integer(int32)|false|buffer size|
|» config|body|[ElasticConfig](#schemaelasticconfig) \| [KafkaConfig](#schemakafkaconfig) \| [PulsarDataExporterConfig](#schemapulsardataexporterconfig) \| [FileDataExporterConfig](#schemafiledataexporterconfig) \| [MailerGenericExporterConfig](#schemamailergenericexporterconfig) \| [MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig) \| [MailerMailgunExporterConfig](#schemamailermailgunexporterconfig) \| [MailerMailjetExporterConfig](#schemamailermailjetexporterconfig) \| [MailerSendgridExporterConfig](#schemamailersendgridexporterconfig) \| [ConsoleDataExporterConfig](#schemaconsoledataexporterconfig) \| [CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|Data Exporter config|
|» » *oneOf*|body|[ElasticConfig](#schemaelasticconfig)|false|The configuration for elastic access|
|» » *oneOf*|body|[KafkaConfig](#schemakafkaconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[PulsarDataExporterConfig](#schemapulsardataexporterconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[FileDataExporterConfig](#schemafiledataexporterconfig)|false|none|
|» » *oneOf*|body|[MailerGenericExporterConfig](#schemamailergenericexporterconfig)|false|none|
|» » *oneOf*|body|[MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailgunExporterConfig](#schemamailermailgunexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailjetExporterConfig](#schemamailermailjetexporterconfig)|false|none|
|» » *oneOf*|body|[MailerSendgridExporterConfig](#schemamailersendgridexporterconfig)|false|none|
|» » *oneOf*|body|[ConsoleDataExporterConfig](#schemaconsoledataexporterconfig)|false|none|
|» » *oneOf*|body|[CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|none|
|» desc|body|string|false|Description|
|» enabled|body|string|false|Boolean|
|» filtering|body|[Filtering](#schemafiltering)|false|filtering|
|» groupDuration|body|integer(int64)|false|duration|
|» groupSize|body|integer(int32)|false|Group size|
|» id|body|string|false|Id|
|» jsonWorkers|body|integer(int32)|false|nb workers|
|» location|body|[Location](#schemalocation)|false|location|
|» metadata|body|object|false|Metadata|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Name|
|» projection|body|object|false|projection|
|» » **additionalProperties**|body|string|false|none|
|» sendWorkers|body|integer(int32)|false|send workers|
|» typ|body|string|false|Type of data exporter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» typ|kafka|
|» typ|pulsar|
|» typ|file|
|» typ|mailer|
|» typ|elastic|
|» typ|console|
|» typ|custom|

> Example responses

> 200 Response

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="create-a-new-data-exporter-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DataExporterConfig](#schemadataexporterconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a data exporter configs

<a id="opIdupdateBulkDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/_bulk \
  -X PUT \
  -H 'Content-Type: application/ndjson' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"bufferSize":123123,"config":{"clusterUri":"a string value","headers":{"key":"value"},"index":"a string value","password":"a string value","type":"a string value","user":"a string value"},"desc":"a string value","enabled":"a string value","filtering":{"exclude":[{"key":"value"}],"include":[{"key":"value"}]},"groupDuration":123,"groupSize":123123,"id":"a string value","jsonWorkers":123123,"location":{"teams":[{"key":"value"}],"tenant":"a string value"},"metadata":{"key":"value"},"name":"a string value","projection":{"key":"value"},"sendWorkers":123123,"typ":"kafka"}'
```

`PUT /api/data-exporter-configs/_bulk`

Update a data exporter configs

> Body parameter

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="update-a-data-exporter-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataExporterConfig](#schemadataexporterconfig)|false|none|
|» bufferSize|body|integer(int32)|false|buffer size|
|» config|body|[ElasticConfig](#schemaelasticconfig) \| [KafkaConfig](#schemakafkaconfig) \| [PulsarDataExporterConfig](#schemapulsardataexporterconfig) \| [FileDataExporterConfig](#schemafiledataexporterconfig) \| [MailerGenericExporterConfig](#schemamailergenericexporterconfig) \| [MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig) \| [MailerMailgunExporterConfig](#schemamailermailgunexporterconfig) \| [MailerMailjetExporterConfig](#schemamailermailjetexporterconfig) \| [MailerSendgridExporterConfig](#schemamailersendgridexporterconfig) \| [ConsoleDataExporterConfig](#schemaconsoledataexporterconfig) \| [CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|Data Exporter config|
|» » *oneOf*|body|[ElasticConfig](#schemaelasticconfig)|false|The configuration for elastic access|
|» » *oneOf*|body|[KafkaConfig](#schemakafkaconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[PulsarDataExporterConfig](#schemapulsardataexporterconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[FileDataExporterConfig](#schemafiledataexporterconfig)|false|none|
|» » *oneOf*|body|[MailerGenericExporterConfig](#schemamailergenericexporterconfig)|false|none|
|» » *oneOf*|body|[MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailgunExporterConfig](#schemamailermailgunexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailjetExporterConfig](#schemamailermailjetexporterconfig)|false|none|
|» » *oneOf*|body|[MailerSendgridExporterConfig](#schemamailersendgridexporterconfig)|false|none|
|» » *oneOf*|body|[ConsoleDataExporterConfig](#schemaconsoledataexporterconfig)|false|none|
|» » *oneOf*|body|[CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|none|
|» desc|body|string|false|Description|
|» enabled|body|string|false|Boolean|
|» filtering|body|[Filtering](#schemafiltering)|false|filtering|
|» groupDuration|body|integer(int64)|false|duration|
|» groupSize|body|integer(int32)|false|Group size|
|» id|body|string|false|Id|
|» jsonWorkers|body|integer(int32)|false|nb workers|
|» location|body|[Location](#schemalocation)|false|location|
|» metadata|body|object|false|Metadata|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Name|
|» projection|body|object|false|projection|
|» » **additionalProperties**|body|string|false|none|
|» sendWorkers|body|integer(int32)|false|send workers|
|» typ|body|string|false|Type of data exporter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» typ|kafka|
|» typ|pulsar|
|» typ|file|
|» typ|mailer|
|» typ|elastic|
|» typ|console|
|» typ|custom|

> Example responses

> 200 Response

```json
[
  {
    "id": true,
    "status": "200",
    "updated": true
  }
]
```

<h3 id="update-a-data-exporter-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="update-a-data-exporter-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|boolean|false|none|Data exporter id|
|» status|string|false|none|Status|
|» updated|boolean|false|none|Whether the action was carried out correctly or not|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|200|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Create a new data exporter configs

<a id="opIdcreateBulkDataExporterConfigs"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/_bulk \
  -X POST \
  -H 'Content-Type: application/ndjson' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"bufferSize":123123,"config":{"clusterUri":"a string value","headers":{"key":"value"},"index":"a string value","password":"a string value","type":"a string value","user":"a string value"},"desc":"a string value","enabled":"a string value","filtering":{"exclude":[{"key":"value"}],"include":[{"key":"value"}]},"groupDuration":123,"groupSize":123123,"id":"a string value","jsonWorkers":123123,"location":{"teams":[{"key":"value"}],"tenant":"a string value"},"metadata":{"key":"value"},"name":"a string value","projection":{"key":"value"},"sendWorkers":123123,"typ":"kafka"}'
```

`POST /api/data-exporter-configs/_bulk`

Create a new data exporter configs

> Body parameter

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="create-a-new-data-exporter-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataExporterConfig](#schemadataexporterconfig)|false|none|
|» bufferSize|body|integer(int32)|false|buffer size|
|» config|body|[ElasticConfig](#schemaelasticconfig) \| [KafkaConfig](#schemakafkaconfig) \| [PulsarDataExporterConfig](#schemapulsardataexporterconfig) \| [FileDataExporterConfig](#schemafiledataexporterconfig) \| [MailerGenericExporterConfig](#schemamailergenericexporterconfig) \| [MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig) \| [MailerMailgunExporterConfig](#schemamailermailgunexporterconfig) \| [MailerMailjetExporterConfig](#schemamailermailjetexporterconfig) \| [MailerSendgridExporterConfig](#schemamailersendgridexporterconfig) \| [ConsoleDataExporterConfig](#schemaconsoledataexporterconfig) \| [CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|Data Exporter config|
|» » *oneOf*|body|[ElasticConfig](#schemaelasticconfig)|false|The configuration for elastic access|
|» » *oneOf*|body|[KafkaConfig](#schemakafkaconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[PulsarDataExporterConfig](#schemapulsardataexporterconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[FileDataExporterConfig](#schemafiledataexporterconfig)|false|none|
|» » *oneOf*|body|[MailerGenericExporterConfig](#schemamailergenericexporterconfig)|false|none|
|» » *oneOf*|body|[MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailgunExporterConfig](#schemamailermailgunexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailjetExporterConfig](#schemamailermailjetexporterconfig)|false|none|
|» » *oneOf*|body|[MailerSendgridExporterConfig](#schemamailersendgridexporterconfig)|false|none|
|» » *oneOf*|body|[ConsoleDataExporterConfig](#schemaconsoledataexporterconfig)|false|none|
|» » *oneOf*|body|[CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|none|
|» desc|body|string|false|Description|
|» enabled|body|string|false|Boolean|
|» filtering|body|[Filtering](#schemafiltering)|false|filtering|
|» groupDuration|body|integer(int64)|false|duration|
|» groupSize|body|integer(int32)|false|Group size|
|» id|body|string|false|Id|
|» jsonWorkers|body|integer(int32)|false|nb workers|
|» location|body|[Location](#schemalocation)|false|location|
|» metadata|body|object|false|Metadata|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Name|
|» projection|body|object|false|projection|
|» » **additionalProperties**|body|string|false|none|
|» sendWorkers|body|integer(int32)|false|send workers|
|» typ|body|string|false|Type of data exporter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» typ|kafka|
|» typ|pulsar|
|» typ|file|
|» typ|mailer|
|» typ|elastic|
|» typ|console|
|» typ|custom|

> Example responses

> 200 Response

```json
[
  {
    "created": true,
    "id": true,
    "status": "201"
  }
]
```

<h3 id="create-a-new-data-exporter-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="create-a-new-data-exporter-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» created|boolean|false|none|Whether the action was carried out correctly or not|
|» id|boolean|false|none|Data exporter id|
|» status|string|false|none|Status|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|201|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a data exporter config

<a id="opIddeletebulkDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/_bulk \
  -X DELETE \
  -H 'Content-Type: application/ndjson' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[{"op":"add","path":"a string value","value":null}]'
```

`DELETE /api/data-exporter-configs/_bulk`

Delete a data exporter config

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="delete-a-data-exporter-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
[
  {
    "deleted": true,
    "id": true,
    "status": "200"
  }
]
```

<h3 id="delete-a-data-exporter-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="delete-a-data-exporter-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» deleted|boolean|false|none|Whether the action was carried out correctly or not|
|» id|boolean|false|none|Data exporter id|
|» status|string|false|none|Status|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|200|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a data exporter configs with a diff

<a id="opIdpatchBulkDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/_bulk \
  -X PATCH \
  -H 'Content-Type: application/ndjson' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[{"op":"add","path":"a string value","value":null}]'
```

`PATCH /api/data-exporter-configs/_bulk`

Update a data exporter configs with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-a-data-exporter-configs-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
[
  {
    "id": true,
    "status": "200",
    "updated": true
  }
]
```

<h3 id="update-a-data-exporter-configs-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<h3 id="update-a-data-exporter-configs-with-a-diff-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|boolean|false|none|Data exporter id|
|» status|string|false|none|Status|
|» updated|boolean|false|none|Whether the action was carried out correctly or not|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|200|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get all data exporter configs

<a id="opIdDataExporterTemplate"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/_template \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/data-exporter-configs/_template`

Get all data exporter configs

<h3 id="get-all-data-exporter-configs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|The data exporter config type|

> Example responses

> 200 Response

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="get-all-data-exporter-configs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DataExporterConfig](#schemadataexporterconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Get a data exporter config

<a id="opIdfindDataExporterConfigById"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/data-exporter-configs/{dataExporterConfigId}`

Get a data exporter config

<h3 id="get-a-data-exporter-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataExporterConfigId|path|string|true|The data exporter config id|

> Example responses

> 200 Response

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="get-a-data-exporter-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DataExporterConfig](#schemadataexporterconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a data exporter config

<a id="opIdupdateDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bufferSize": 123123,
    "config": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "desc": "a string value",
    "enabled": "a string value",
    "filtering": {
      "exclude": [
        {
          "key": "value"
        }
      ],
      "include": [
        {
          "key": "value"
        }
      ]
    },
    "groupDuration": 123,
    "groupSize": 123123,
    "id": "a string value",
    "jsonWorkers": 123123,
    "location": {
      "teams": [
        {
          "key": "value"
        }
      ],
      "tenant": "a string value"
    },
    "metadata": {
      "key": "value"
    },
    "name": "a string value",
    "projection": {
      "key": "value"
    },
    "sendWorkers": 123123,
    "typ": "kafka"
  }'
```

`PUT /api/data-exporter-configs/{dataExporterConfigId}`

Update a data exporter config

> Body parameter

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="update-a-data-exporter-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataExporterConfigId|path|string|true|The data exporter config id|
|body|body|[DataExporterConfig](#schemadataexporterconfig)|false|none|
|» bufferSize|body|integer(int32)|false|buffer size|
|» config|body|[ElasticConfig](#schemaelasticconfig) \| [KafkaConfig](#schemakafkaconfig) \| [PulsarDataExporterConfig](#schemapulsardataexporterconfig) \| [FileDataExporterConfig](#schemafiledataexporterconfig) \| [MailerGenericExporterConfig](#schemamailergenericexporterconfig) \| [MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig) \| [MailerMailgunExporterConfig](#schemamailermailgunexporterconfig) \| [MailerMailjetExporterConfig](#schemamailermailjetexporterconfig) \| [MailerSendgridExporterConfig](#schemamailersendgridexporterconfig) \| [ConsoleDataExporterConfig](#schemaconsoledataexporterconfig) \| [CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|Data Exporter config|
|» » *oneOf*|body|[ElasticConfig](#schemaelasticconfig)|false|The configuration for elastic access|
|» » *oneOf*|body|[KafkaConfig](#schemakafkaconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[PulsarDataExporterConfig](#schemapulsardataexporterconfig)|false|The configuration for kafka access|
|» » *oneOf*|body|[FileDataExporterConfig](#schemafiledataexporterconfig)|false|none|
|» » *oneOf*|body|[MailerGenericExporterConfig](#schemamailergenericexporterconfig)|false|none|
|» » *oneOf*|body|[MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailgunExporterConfig](#schemamailermailgunexporterconfig)|false|none|
|» » *oneOf*|body|[MailerMailjetExporterConfig](#schemamailermailjetexporterconfig)|false|none|
|» » *oneOf*|body|[MailerSendgridExporterConfig](#schemamailersendgridexporterconfig)|false|none|
|» » *oneOf*|body|[ConsoleDataExporterConfig](#schemaconsoledataexporterconfig)|false|none|
|» » *oneOf*|body|[CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|none|
|» desc|body|string|false|Description|
|» enabled|body|string|false|Boolean|
|» filtering|body|[Filtering](#schemafiltering)|false|filtering|
|» groupDuration|body|integer(int64)|false|duration|
|» groupSize|body|integer(int32)|false|Group size|
|» id|body|string|false|Id|
|» jsonWorkers|body|integer(int32)|false|nb workers|
|» location|body|[Location](#schemalocation)|false|location|
|» metadata|body|object|false|Metadata|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Name|
|» projection|body|object|false|projection|
|» » **additionalProperties**|body|string|false|none|
|» sendWorkers|body|integer(int32)|false|send workers|
|» typ|body|string|false|Type of data exporter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» typ|kafka|
|» typ|pulsar|
|» typ|file|
|» typ|mailer|
|» typ|elastic|
|» typ|console|
|» typ|custom|

> Example responses

> 200 Response

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="update-a-data-exporter-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DataExporterConfig](#schemadataexporterconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Delete a data exporter config

<a id="opIddeleteDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/data-exporter-configs/{dataExporterConfigId}`

Delete a data exporter config

<h3 id="delete-a-data-exporter-config-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataExporterConfigId|path|string|true|The data exporter config id|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-a-data-exporter-config-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Deleted](#schemadeleted)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

## Update a data exporter config with a diff

<a id="opIdpatchDataExporterConfig"></a>

> Code samples

```bash
curl https://example.com/api/data-exporter-configs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "a string value",
      "value": null
    }
  ]'
```

`PATCH /api/data-exporter-configs/{dataExporterConfigId}`

Update a data exporter config with a diff

> Body parameter

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

<h3 id="update-a-data-exporter-config-with-a-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataExporterConfigId|path|string|true|The data exporter config id|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|replace|
|» op|remove|
|» op|copy|
|» op|test|

> Example responses

> 200 Response

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

<h3 id="update-a-data-exporter-config-with-a-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DataExporterConfig](#schemadataexporterconfig)|
|400|Bad Request|Bad resource format. Take another look to the swagger, or open an issue :)|None|
|401|Unauthorized|You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication|None|
|404|Not Found|Resource not found or does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
otoroshi_auth
</aside>

# Schemas

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "authorizedEntities": [
    "a string value"
  ],
  "clientId": "a string value",
  "clientName": "a string value",
  "clientSecret": "a string value",
  "dailyQuota": 123,
  "enabled": true,
  "metadata": {
    "key": "value"
  },
  "monthlyQuota": 123,
  "throttlingQuota": 123
}
```

An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizedEntities|[string]|true|none|The group/service ids (prefixed by group_ or service_ on which the key is authorized|
|clientId|string|true|none|The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything|
|clientName|string|true|none|The name of the api key, for humans ;-)|
|clientSecret|string|true|none|The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything|
|dailyQuota|integer(int64)|false|none|Authorized number of calls per day|
|enabled|boolean|true|none|Whether or not the key is enabled. If disabled, resources won't be available to calls using this key|
|metadata|object|false|none|Bunch of metadata for the key|
|monthlyQuota|integer(int64)|false|none|Authorized number of calls per month|
|throttlingQuota|integer(int64)|false|none|Authorized number of calls per second, measured on 10 seconds|

<h2 id="tocS_Auth0Config">Auth0Config</h2>
<!-- backwards compatibility -->
<a id="schemaauth0config"></a>
<a id="schema_Auth0Config"></a>
<a id="tocSauth0config"></a>
<a id="tocsauth0config"></a>

```json
{
  "callbackUrl": "a string value",
  "clientId": "a string value",
  "clientSecret": "a string value",
  "domain": "a string value"
}
```

Configuration for Auth0 domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|true|none|Auth0 callback URL|
|clientId|string|true|none|Auth0 client id|
|clientSecret|string|true|none|Auth0 client secret|
|domain|string|true|none|Auth0 domain|

<h2 id="tocS_BadResponse">BadResponse</h2>
<!-- backwards compatibility -->
<a id="schemabadresponse"></a>
<a id="schema_BadResponse"></a>
<a id="tocSbadresponse"></a>
<a id="tocsbadresponse"></a>

```json
{
  "body": "a string value",
  "headers": {
    "key": "value"
  },
  "status": 123123
}
```

An HTTP response that is not supposed to be returned by a service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|The body of the HTTP response|
|headers|object|true|none|The HTTP headers of the response|
|status|integer(int32)|true|none|The HTTP status for the response|

<h2 id="tocS_BadResponsesFaultConfig">BadResponsesFaultConfig</h2>
<!-- backwards compatibility -->
<a id="schemabadresponsesfaultconfig"></a>
<a id="schema_BadResponsesFaultConfig"></a>
<a id="tocSbadresponsesfaultconfig"></a>
<a id="tocsbadresponsesfaultconfig"></a>

```json
{
  "ratio": 42.2,
  "responses": [
    {
      "body": "a string value",
      "headers": {
        "key": "value"
      },
      "status": 123123
    }
  ]
}
```

Config for bad requests injection fault

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ratio|number(double)|true|none|The percentage of requests affected by this fault. Value should be between 0.0 and 1.0|
|responses|[[BadResponse](#schemabadresponse)]|true|none|The possibles responses|

<h2 id="tocS_Canary">Canary</h2>
<!-- backwards compatibility -->
<a id="schemacanary"></a>
<a id="schema_Canary"></a>
<a id="tocScanary"></a>
<a id="tocscanary"></a>

```json
{
  "enabled": true,
  "root": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "traffic": 123123
}
```

The configuration of the canary mode for a service descriptor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Use canary mode for this service|
|root|string|true|none|Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar|
|targets|[[Target](#schematarget)]|true|none|The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures|
|traffic|integer(int32)|true|none|Ratio of traffic that will be sent to canary targets.|

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "autoRenew": "a string value",
  "ca": "a string value",
  "caRef": "a string value",
  "chain": "a string value",
  "domain": "a string value",
  "from": "a string value",
  "id": "a string value",
  "privateKey": "a string value",
  "selfSigned": "a string value",
  "subject": "a string value",
  "to": "a string value",
  "valid": "a string value"
}
```

A SSL/TLS X509 certificate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenew|string|true|none|Allow Otoroshi to renew the certificate (if self signed)|
|ca|string|true|none|Certificate is a CA (read only)|
|caRef|string|true|none|Reference for a CA certificate in otoroshi|
|chain|string|true|none|Certificate chain of trust in PEM format|
|domain|string|true|none|Domain of the certificate (read only)|
|from|string|true|none|Start date of validity|
|id|string|true|none|Id of the certificate|
|privateKey|string|true|none|PKCS8 private key in PEM format|
|selfSigned|string|true|none|Certificate is self signed  read only)|
|subject|string|true|none|Subject of the certificate (read only)|
|to|string|true|none|End date of validity|
|valid|string|true|none|Certificate is valid (read only)|

<h2 id="tocS_ChaosConfig">ChaosConfig</h2>
<!-- backwards compatibility -->
<a id="schemachaosconfig"></a>
<a id="schema_ChaosConfig"></a>
<a id="tocSchaosconfig"></a>
<a id="tocschaosconfig"></a>

```json
{
  "badResponsesFaultConfig": {
    "ratio": 42.2,
    "responses": [
      {
        "body": "a string value",
        "headers": {
          "key": "value"
        },
        "status": 123123
      }
    ]
  },
  "enabled": true,
  "largeRequestFaultConfig": {
    "additionalRequestSize": 123123,
    "ratio": 42.2
  },
  "largeResponseFaultConfig": {
    "additionalRequestSize": 123123,
    "ratio": 42.2
  },
  "latencyInjectionFaultConfig": {
    "from": 123123,
    "ratio": 42.2,
    "to": 123123
  }
}
```

Configuration for the faults that can be injected in requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badResponsesFaultConfig|[BadResponsesFaultConfig](#schemabadresponsesfaultconfig)|false|none|Config for bad requests injection fault|
|enabled|boolean|true|none|Whether or not this config is enabled|
|largeRequestFaultConfig|[LargeRequestFaultConfig](#schemalargerequestfaultconfig)|false|none|Config for large request injection fault|
|largeResponseFaultConfig|[LargeResponseFaultConfig](#schemalargeresponsefaultconfig)|false|none|Config for large response injection fault|
|latencyInjectionFaultConfig|[LatencyInjectionFaultConfig](#schemalatencyinjectionfaultconfig)|false|none|Config for large latency injection fault|

<h2 id="tocS_CleverSettings">CleverSettings</h2>
<!-- backwards compatibility -->
<a id="schemacleversettings"></a>
<a id="schema_CleverSettings"></a>
<a id="tocScleversettings"></a>
<a id="tocscleversettings"></a>

```json
{
  "consumerKey": "a string value",
  "consumerSecret": "a string value",
  "orgaId": "a string value",
  "secret": "a string value",
  "token": "a string value"
}
```

Configuration for CleverCloud client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerKey|string|true|none|CleverCloud consumer key|
|consumerSecret|string|true|none|CleverCloud consumer token|
|orgaId|string|true|none|CleverCloud organization id|
|secret|string|true|none|CleverCloud oauth secret|
|token|string|true|none|CleverCloud oauth token|

<h2 id="tocS_ClientConfig">ClientConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclientconfig"></a>
<a id="schema_ClientConfig"></a>
<a id="tocSclientconfig"></a>
<a id="tocsclientconfig"></a>

```json
{
  "backoffFactor": 123123,
  "callTimeout": 123123,
  "globalTimeout": 123123,
  "maxErrors": 123123,
  "retries": 123123,
  "retryInitialDelay": 123123,
  "sampleInterval": 123123,
  "useCircuitBreaker": true
}
```

The configuration of the circuit breaker for a service descriptor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backoffFactor|integer(int32)|true|none|Specify the factor to multiply the delay for each retry|
|callTimeout|integer(int32)|true|none|Specify how long each call should last at most in milliseconds|
|globalTimeout|integer(int32)|true|none|Specify how long the global call (with retries) should last at most in milliseconds|
|maxErrors|integer(int32)|true|none|Specify how many errors can pass before opening the circuit breaker|
|retries|integer(int32)|true|none|Specify how many times the client will try to fetch the result of the request after an error before giving up.|
|retryInitialDelay|integer(int32)|true|none|Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor|
|sampleInterval|integer(int32)|true|none|Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted|
|useCircuitBreaker|boolean|true|none|Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended !|

<h2 id="tocS_ConsoleDataExporterConfig">ConsoleDataExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconsoledataexporterconfig"></a>
<a id="schema_ConsoleDataExporterConfig"></a>
<a id="tocSconsoledataexporterconfig"></a>
<a id="tocsconsoledataexporterconfig"></a>

```json
{}
```

<h2 id="tocS_CorsSettings">CorsSettings</h2>
<!-- backwards compatibility -->
<a id="schemacorssettings"></a>
<a id="schema_CorsSettings"></a>
<a id="tocScorssettings"></a>
<a id="tocscorssettings"></a>

```json
{
  "allowCredentials": true,
  "allowHeaders": [
    "a string value"
  ],
  "allowMethods": [
    "a string value"
  ],
  "allowOrigin": "a string value",
  "enabled": true,
  "excludedPatterns": [
    "a string value"
  ],
  "exposeHeaders": [
    "a string value"
  ],
  "maxAge": 123123
}
```

The configuration for cors support

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowCredentials|boolean|true|none|Allow to pass credentials|
|allowHeaders|[string]|true|none|The cors allowed headers|
|allowMethods|[string]|true|none|The cors allowed methods|
|allowOrigin|string|true|none|The cors allowed origin|
|enabled|boolean|true|none|Whether or not cors is enabled|
|excludedPatterns|[string]|true|none|The cors excluded patterns|
|exposeHeaders|[string]|true|none|The cors exposed header|
|maxAge|integer(int32)|true|none|Cors max age|

<h2 id="tocS_CustomDataExporterConfig">CustomDataExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemacustomdataexporterconfig"></a>
<a id="schema_CustomDataExporterConfig"></a>
<a id="tocScustomdataexporterconfig"></a>
<a id="tocscustomdataexporterconfig"></a>

```json
{
  "config": {
    "key": "value"
  },
  "ref": "a string value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|Custom data exporter config|
|ref|string|true|none|Script Ref|

<h2 id="tocS_DataExporterConfig">DataExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemadataexporterconfig"></a>
<a id="schema_DataExporterConfig"></a>
<a id="tocSdataexporterconfig"></a>
<a id="tocsdataexporterconfig"></a>

```json
{
  "bufferSize": 123123,
  "config": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "desc": "a string value",
  "enabled": "a string value",
  "filtering": {
    "exclude": [
      {
        "key": "value"
      }
    ],
    "include": [
      {
        "key": "value"
      }
    ]
  },
  "groupDuration": 123,
  "groupSize": 123123,
  "id": "a string value",
  "jsonWorkers": 123123,
  "location": {
    "teams": [
      {
        "key": "value"
      }
    ],
    "tenant": "a string value"
  },
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "projection": {
    "key": "value"
  },
  "sendWorkers": 123123,
  "typ": "kafka"
}
```

Settings to export Otorshi events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bufferSize|integer(int32)|false|none|buffer size|
|config|[ElasticConfig](#schemaelasticconfig) \| [KafkaConfig](#schemakafkaconfig) \| [PulsarDataExporterConfig](#schemapulsardataexporterconfig) \| [FileDataExporterConfig](#schemafiledataexporterconfig) \| [MailerGenericExporterConfig](#schemamailergenericexporterconfig) \| [MailerConsoleExporterConfig](#schemamailerconsoleexporterconfig) \| [MailerMailgunExporterConfig](#schemamailermailgunexporterconfig) \| [MailerMailjetExporterConfig](#schemamailermailjetexporterconfig) \| [MailerSendgridExporterConfig](#schemamailersendgridexporterconfig) \| [ConsoleDataExporterConfig](#schemaconsoledataexporterconfig) \| [CustomDataExporterConfig](#schemacustomdataexporterconfig)|false|none|Data Exporter config|
|desc|string|false|none|Description|
|enabled|string|false|none|Boolean|
|filtering|[Filtering](#schemafiltering)|false|none|filtering|
|groupDuration|integer(int64)|false|none|duration|
|groupSize|integer(int32)|false|none|Group size|
|id|string|false|none|Id|
|jsonWorkers|integer(int32)|false|none|nb workers|
|location|[Location](#schemalocation)|false|none|location|
|metadata|object|false|none|Metadata|
|name|string|false|none|Name|
|projection|object|false|none|projection|
|sendWorkers|integer(int32)|false|none|send workers|
|typ|string|false|none|Type of data exporter|

#### Enumerated Values

|Property|Value|
|---|---|
|typ|kafka|
|typ|pulsar|
|typ|file|
|typ|mailer|
|typ|elastic|
|typ|console|
|typ|custom|

<h2 id="tocS_Deleted">Deleted</h2>
<!-- backwards compatibility -->
<a id="schemadeleted"></a>
<a id="schema_Deleted"></a>
<a id="tocSdeleted"></a>
<a id="tocsdeleted"></a>

```json
{
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|none|

<h2 id="tocS_Done">Done</h2>
<!-- backwards compatibility -->
<a id="schemadone"></a>
<a id="schema_Done"></a>
<a id="tocSdone"></a>
<a id="tocsdone"></a>

```json
{
  "done": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|true|none|none|

<h2 id="tocS_ESAlgoSettings">ESAlgoSettings</h2>
<!-- backwards compatibility -->
<a id="schemaesalgosettings"></a>
<a id="schema_ESAlgoSettings"></a>
<a id="tocSesalgosettings"></a>
<a id="tocsesalgosettings"></a>

```json
{
  "privateKey": "a string value",
  "publicKey": "a string value",
  "size": 123123,
  "type": "a string value"
}
```

Settings for an EC + SHA signing algorithm

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateKey|string|false|none|The private key for the RSA function|
|publicKey|string|true|none|The public key for the RSA function|
|size|integer(int32)|true|none|Size for SHA function. can be 256, 384 or 512|
|type|string|true|none|String with value ESAlgoSettings|

<h2 id="tocS_ElasticConfig">ElasticConfig</h2>
<!-- backwards compatibility -->
<a id="schemaelasticconfig"></a>
<a id="schema_ElasticConfig"></a>
<a id="tocSelasticconfig"></a>
<a id="tocselasticconfig"></a>

```json
{
  "clusterUri": "a string value",
  "headers": {
    "key": "value"
  },
  "index": "a string value",
  "password": "a string value",
  "type": "a string value",
  "user": "a string value"
}
```

The configuration for elastic access

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterUri|string|true|none|URL of the elastic cluster|
|headers|object|true|none|Additionnal http headers|
|index|string|true|none|Index for events. Default is otoroshi-events|
|password|string|true|none|Optional password|
|type|string|true|none|Type of events. Default is event|
|user|string|true|none|Optional user|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
"prod"
```

The name of the environment for service descriptors

<h2 id="tocS_ErrorTemplate">ErrorTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaerrortemplate"></a>
<a id="schema_ErrorTemplate"></a>
<a id="tocSerrortemplate"></a>
<a id="tocserrortemplate"></a>

```json
{
  "messages": {
    "key": "value"
  },
  "serviceId": "a string value",
  "template40x": "a string value",
  "template50x": "a string value",
  "templateBuild": "a string value",
  "templateMaintenance": "a string value"
}
```

Error templates for a service descriptor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|true|none|Map for custom messages|
|serviceId|string|true|none|The Id of the service for which the error template is enabled|
|template40x|string|true|none|The html template for 40x errors|
|template50x|string|true|none|The html template for 50x errors|
|templateBuild|string|true|none|The html template for build page|
|templateMaintenance|string|true|none|The html template for maintenance page|

<h2 id="tocS_ExposedApi">ExposedApi</h2>
<!-- backwards compatibility -->
<a id="schemaexposedapi"></a>
<a id="schema_ExposedApi"></a>
<a id="tocSexposedapi"></a>
<a id="tocsexposedapi"></a>

```json
{
  "exposeApi": true,
  "openApiDescriptorUrl": "http://www.google.com"
}
```

The Open API configuration for your service (if one)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exposeApi|boolean|true|none|Whether or not the current service expose an API with an Open API descriptor|
|openApiDescriptorUrl|string(uri)|false|none|The URL of the Open API descriptor|

<h2 id="tocS_FileDataExporterConfig">FileDataExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemafiledataexporterconfig"></a>
<a id="schema_FileDataExporterConfig"></a>
<a id="tocSfiledataexporterconfig"></a>
<a id="tocsfiledataexporterconfig"></a>

```json
{
  "path": "a string value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|Path to file|

<h2 id="tocS_Filtering">Filtering</h2>
<!-- backwards compatibility -->
<a id="schemafiltering"></a>
<a id="schema_Filtering"></a>
<a id="tocSfiltering"></a>
<a id="tocsfiltering"></a>

```json
{
  "exclude": [
    {
      "key": "value"
    }
  ],
  "include": [
    {
      "key": "value"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|[object]|false|none|Excluding pattern|
|include|[object]|false|none|Including pattern|

<h2 id="tocS_GenericOauth2ModuleConfig">GenericOauth2ModuleConfig</h2>
<!-- backwards compatibility -->
<a id="schemagenericoauth2moduleconfig"></a>
<a id="schema_GenericOauth2ModuleConfig"></a>
<a id="tocSgenericoauth2moduleconfig"></a>
<a id="tocsgenericoauth2moduleconfig"></a>

```json
{
  "accessTokenField": "a string value",
  "authorizeUrl": "a string value",
  "callbackUrl": "a string value",
  "claims": "a string value",
  "clientId": "a string value",
  "clientSecret": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "id": "a string value",
  "jwtVerifier": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "loginUrl": "a string value",
  "logoutUrl": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "oidConfig": "a string value",
  "otoroshiDataField": "a string value",
  "readProfileFromToken": true,
  "scope": "a string value",
  "sessionMaxAge": 123123,
  "tokenUrl": "a string value",
  "type": "a string value",
  "useCookies": true,
  "useJson": true,
  "userInfoUrl": "a string value"
}
```

Settings to authenticate users using a generic OAuth2 provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessTokenField|string|true|none|Field name to get access token|
|authorizeUrl|string|true|none|OAuth authorize URL|
|callbackUrl|string|true|none|Otoroshi callback URL|
|claims|string|false|none|The claims of the token|
|clientId|string|true|none|OAuth Client id|
|clientSecret|string|true|none|OAuth Client secret|
|desc|string|true|none|Description of the config|
|emailField|string|true|none|Field name to get email from user profile|
|id|string|true|none|Unique id of the config|
|jwtVerifier|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|false|none|Algo. settings to verify JWT token|
|loginUrl|string|true|none|OAuth login URL|
|logoutUrl|string|true|none|OAuth logout URL|
|name|string|true|none|Name of the config|
|nameField|string|true|none|Field name to get name from user profile|
|oidConfig|string|false|none|URL of the OIDC config. file|
|otoroshiDataField|string|true|none|Field name to get otoroshi metadata from. You can specify sub fields using \| as separator|
|readProfileFromToken|boolean|false|none|The user profile will be read from the JWT token in id_token|
|scope|string|false|none|The scope of the token|
|sessionMaxAge|integer(int32)|true|none|Max age of the session|
|tokenUrl|string|true|none|OAuth token URL|
|type|string|true|none|Type of settings. value is oauth2|
|useCookies|boolean|false|none|Use for redirection to actual service|
|useJson|boolean|false|none|Use JSON or URL Form Encoded as payload with the OAuth provider|
|userInfoUrl|string|true|none|OAuth userinfo to get user profile|

<h2 id="tocS_GlobalConfig">GlobalConfig</h2>
<!-- backwards compatibility -->
<a id="schemaglobalconfig"></a>
<a id="schema_GlobalConfig"></a>
<a id="tocSglobalconfig"></a>
<a id="tocsglobalconfig"></a>

```json
{
  "alertsEmails": [
    "admin@otoroshi.io"
  ],
  "alertsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "analyticsWebhooks": [
    {
      "headers": {
        "key": "value"
      },
      "url": "http://www.google.com"
    }
  ],
  "apiReadOnly": true,
  "autoLinkToDefaultGroup": true,
  "backofficeAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "cleverSettings": {
    "consumerKey": "a string value",
    "consumerSecret": "a string value",
    "orgaId": "a string value",
    "secret": "a string value",
    "token": "a string value"
  },
  "elasticReadsConfig": {
    "clusterUri": "a string value",
    "headers": {
      "key": "value"
    },
    "index": "a string value",
    "password": "a string value",
    "type": "a string value",
    "user": "a string value"
  },
  "elasticWritesConfigs": [
    {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    }
  ],
  "endlessIpAddresses": [
    "192.192.192.192"
  ],
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "limitConcurrentRequests": true,
  "lines": [
    "a string value"
  ],
  "mailerSettings": {
    "apiKey": "a string value",
    "apiKeyPrivate": "a string value",
    "apiKeyPublic": "a string value",
    "domain": "a string value",
    "eu": true,
    "header": {
      "key": "value"
    },
    "type": "a string value",
    "url": "a string value"
  },
  "maxConcurrentRequests": 123,
  "maxHttp10ResponseSize": 123,
  "maxLogsSize": 123123,
  "middleFingers": true,
  "perIpThrottlingQuota": 123,
  "privateAppsAuth0Config": {
    "callbackUrl": "a string value",
    "clientId": "a string value",
    "clientSecret": "a string value",
    "domain": "a string value"
  },
  "streamEntityOnly": true,
  "throttlingQuota": 123,
  "u2fLoginOnly": true,
  "useCircuitBreakers": true
}
```

The global config object of Otoroshi, used to customize settings of the current Otoroshi instance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertsEmails|[string(email)]|true|none|Email addresses that will receive all Otoroshi alert events|
|alertsWebhooks|[[Webhook](#schemawebhook)]|true|none|Webhook that will receive all Otoroshi alert events|
|analyticsWebhooks|[[Webhook](#schemawebhook)]|true|none|Webhook that will receive all internal Otoroshi events|
|apiReadOnly|boolean|true|none|If enabled, Admin API won't be able to write/update/delete entities|
|autoLinkToDefaultGroup|boolean|true|none|If not defined, every new service descriptor will be added to the default group|
|backofficeAuth0Config|[Auth0Config](#schemaauth0config)|false|none|Optional configuration for the backoffice Auth0 domain|
|cleverSettings|[CleverSettings](#schemacleversettings)|false|none|Optional CleverCloud configuration|
|elasticReadsConfig|[ElasticConfig](#schemaelasticconfig)|false|none|Config. for elastic reads|
|elasticWritesConfigs|[[ElasticConfig](#schemaelasticconfig)]|false|none|Configs. for Elastic writes|
|endlessIpAddresses|[string(ipv4)]|true|none|IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros|
|ipFiltering|[IpFiltering](#schemaipfiltering)|true|none|The filtering configuration block for a service of globally.|
|limitConcurrentRequests|boolean|true|none|If enabled, Otoroshi will reject new request if too much at the same time|
|lines|[string]|false|none|Possibles lines for Otoroshi|
|mailerSettings|[MailerSettings](#schemamailersettings)|false|none|Optional mailer configuration|
|maxConcurrentRequests|integer(int64)|true|none|The number of authorized request processed at the same time|
|maxHttp10ResponseSize|integer(int64)|false|none|The max size in bytes of an HTTP 1.0 response|
|maxLogsSize|integer(int32)|false|none|Number of events kept locally|
|middleFingers|boolean|false|none|Use middle finger emoji as a response character for endless HTTP responses|
|perIpThrottlingQuota|integer(int64)|true|none|Authorized number of calls per second globally per IP address, measured on 10 seconds|
|privateAppsAuth0Config|[Auth0Config](#schemaauth0config)|false|none|Optional configuration for the private apps Auth0 domain|
|streamEntityOnly|boolean|true|none|HTTP will be streamed only. Doesn't work with old browsers|
|throttlingQuota|integer(int64)|true|none|Authorized number of calls per second globally, measured on 10 seconds|
|u2fLoginOnly|boolean|true|none|If enabled, login to backoffice through Auth0 will be disabled|
|useCircuitBreakers|boolean|true|none|If enabled, services will be authorized to use circuit breakers|

<h2 id="tocS_GlobalJwtVerifier">GlobalJwtVerifier</h2>
<!-- backwards compatibility -->
<a id="schemaglobaljwtverifier"></a>
<a id="schema_GlobalJwtVerifier"></a>
<a id="tocSglobaljwtverifier"></a>
<a id="tocsglobaljwtverifier"></a>

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "desc": "a string value",
  "enabled": true,
  "id": "a string value",
  "name": "a string value",
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true
}
```

A JWT verifier used by multiple service descriptor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algoSettings|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|true|none|none|
|desc|string|true|none|Verifier description|
|enabled|boolean|true|none|Is it enabled|
|id|string|true|none|Verifier id|
|name|string|true|none|Verifier name|
|source|[InQueryParam](#schemainqueryparam) \| [InHeader](#schemainheader) \| [InCookie](#schemaincookie)|true|none|none|
|strategy|[PassThrough](#schemapassthrough) \| [Sign](#schemasign) \| [Transform](#schematransform)|true|none|none|
|strict|boolean|true|none|Does it fail if JWT not found|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "description": "a string value",
  "id": "a string value",
  "name": "a string value"
}
```

An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The descriptoin of the group|
|id|string|true|none|The unique id of the group. Usually 64 random alpha numerical characters, but can be anything|
|name|string|true|none|The name of the group|

<h2 id="tocS_Gzip">Gzip</h2>
<!-- backwards compatibility -->
<a id="schemagzip"></a>
<a id="schema_Gzip"></a>
<a id="tocSgzip"></a>
<a id="tocsgzip"></a>

```json
{
  "blackList": [
    "a string value"
  ],
  "bufferSize": 123,
  "chunkedThreshold": 123,
  "compressionLevel": 123123,
  "enabled": true,
  "excludedPatterns": [
    "a string value"
  ],
  "whiteList": [
    "a string value"
  ]
}
```

Configuration for gzip of service responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blackList|[string]|true|none|Blacklisted mime types. Wildcard supported|
|bufferSize|integer(int64)|true|none|Size of the GZip buffer|
|chunkedThreshold|integer(int64)|true|none|Threshold for chunking data|
|compressionLevel|integer(int32)|true|none|Compression level. From 0 to 9|
|enabled|boolean|true|none|Whether gzip compression is enabled or not|
|excludedPatterns|[string]|true|none|Patterns that are excluded from gzipping|
|whiteList|[string]|true|none|Whitelisted mime types. Wildcard supported|

<h2 id="tocS_HSAlgoSettings">HSAlgoSettings</h2>
<!-- backwards compatibility -->
<a id="schemahsalgosettings"></a>
<a id="schema_HSAlgoSettings"></a>
<a id="tocShsalgosettings"></a>
<a id="tocshsalgosettings"></a>

```json
{
  "secret": "a string value",
  "size": 123123,
  "type": "a string value"
}
```

Settings for an HMAC + SHA signing algorithm

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|true|none|The secret value for the HMAC function|
|size|integer(int32)|true|none|Size for SHA function. can be 256, 384 or 512|
|type|string|true|none|String with value HSAlgoSettings|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "enabled": true,
  "url": "http://www.google.com"
}
```

The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether or not healthcheck is enabled on the current service descriptor|
|url|string(uri)|false|none|The URL to check|

<h2 id="tocS_ImportExport">ImportExport</h2>
<!-- backwards compatibility -->
<a id="schemaimportexport"></a>
<a id="schema_ImportExport"></a>
<a id="tocSimportexport"></a>
<a id="tocsimportexport"></a>

```json
{
  "admins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "registration": {
        "key": "value"
      },
      "username": "a string value"
    }
  ],
  "apiKeys": [
    {
      "authorizedEntities": [
        "a string value"
      ],
      "clientId": "a string value",
      "clientName": "a string value",
      "clientSecret": "a string value",
      "dailyQuota": 123,
      "enabled": true,
      "metadata": {
        "key": "value"
      },
      "monthlyQuota": 123,
      "throttlingQuota": 123
    }
  ],
  "appConfig": {
    "key": "value"
  },
  "config": {
    "alertsEmails": [
      "admin@otoroshi.io"
    ],
    "alertsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "analyticsWebhooks": [
      {
        "headers": {
          "key": "value"
        },
        "url": "http://www.google.com"
      }
    ],
    "apiReadOnly": true,
    "autoLinkToDefaultGroup": true,
    "backofficeAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "cleverSettings": {
      "consumerKey": "a string value",
      "consumerSecret": "a string value",
      "orgaId": "a string value",
      "secret": "a string value",
      "token": "a string value"
    },
    "elasticReadsConfig": {
      "clusterUri": "a string value",
      "headers": {
        "key": "value"
      },
      "index": "a string value",
      "password": "a string value",
      "type": "a string value",
      "user": "a string value"
    },
    "elasticWritesConfigs": [
      {
        "clusterUri": "a string value",
        "headers": {
          "key": "value"
        },
        "index": "a string value",
        "password": "a string value",
        "type": "a string value",
        "user": "a string value"
      }
    ],
    "endlessIpAddresses": [
      "192.192.192.192"
    ],
    "ipFiltering": {
      "blacklist": [
        "192.192.192.192"
      ],
      "whitelist": [
        "192.192.192.192"
      ]
    },
    "limitConcurrentRequests": true,
    "lines": [
      "a string value"
    ],
    "mailerSettings": {
      "apiKey": "a string value",
      "apiKeyPrivate": "a string value",
      "apiKeyPublic": "a string value",
      "domain": "a string value",
      "eu": true,
      "header": {
        "key": "value"
      },
      "type": "a string value",
      "url": "a string value"
    },
    "maxConcurrentRequests": 123,
    "maxHttp10ResponseSize": 123,
    "maxLogsSize": 123123,
    "middleFingers": true,
    "perIpThrottlingQuota": 123,
    "privateAppsAuth0Config": {
      "callbackUrl": "a string value",
      "clientId": "a string value",
      "clientSecret": "a string value",
      "domain": "a string value"
    },
    "streamEntityOnly": true,
    "throttlingQuota": 123,
    "u2fLoginOnly": true,
    "useCircuitBreakers": true
  },
  "date": "2017-07-21T17:32:28Z",
  "dateRaw": 123,
  "errorTemplates": [
    {
      "messages": {
        "key": "value"
      },
      "serviceId": "a string value",
      "template40x": "a string value",
      "template50x": "a string value",
      "templateBuild": "a string value",
      "templateMaintenance": "a string value"
    }
  ],
  "label": "a string value",
  "serviceDescriptors": [
    {
      "Canary": {
        "enabled": true,
        "root": "a string value",
        "targets": [
          {
            "host": "www.google.com",
            "scheme": "a string value"
          }
        ],
        "traffic": 123123
      },
      "additionalHeaders": {
        "key": "value"
      },
      "api": {
        "exposeApi": true,
        "openApiDescriptorUrl": "http://www.google.com"
      },
      "authConfigRef": "a string value",
      "buildMode": true,
      "chaosConfig": {
        "badResponsesFaultConfig": {
          "ratio": 42.2,
          "responses": [
            {
              "body": "a string value",
              "headers": {
                "key": "value"
              },
              "status": 123123
            }
          ]
        },
        "enabled": true,
        "largeRequestFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "largeResponseFaultConfig": {
          "additionalRequestSize": 123123,
          "ratio": 42.2
        },
        "latencyInjectionFaultConfig": {
          "from": 123123,
          "ratio": 42.2,
          "to": 123123
        }
      },
      "clientConfig": {
        "backoffFactor": 123123,
        "callTimeout": 123123,
        "globalTimeout": 123123,
        "maxErrors": 123123,
        "retries": 123123,
        "retryInitialDelay": 123123,
        "sampleInterval": 123123,
        "useCircuitBreaker": true
      },
      "clientValidatorRef": "a string value",
      "cors": {
        "allowCredentials": true,
        "allowHeaders": [
          "a string value"
        ],
        "allowMethods": [
          "a string value"
        ],
        "allowOrigin": "a string value",
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "exposeHeaders": [
          "a string value"
        ],
        "maxAge": 123123
      },
      "domain": "a string value",
      "enabled": true,
      "enforceSecureCommunication": true,
      "env": "a string value",
      "forceHttps": true,
      "groups": [
        "a string value"
      ],
      "gzip": {
        "blackList": [
          "a string value"
        ],
        "bufferSize": 123,
        "chunkedThreshold": 123,
        "compressionLevel": 123123,
        "enabled": true,
        "excludedPatterns": [
          "a string value"
        ],
        "whiteList": [
          "a string value"
        ]
      },
      "headersVerification": {
        "key": "value"
      },
      "healthCheck": {
        "enabled": true,
        "url": "http://www.google.com"
      },
      "id": "110e8400-e29b-11d4-a716-446655440000",
      "ipFiltering": {
        "blacklist": [
          "192.192.192.192"
        ],
        "whitelist": [
          "192.192.192.192"
        ]
      },
      "jwtVerifier": {
        "algoSettings": {
          "secret": "a string value",
          "size": 123123,
          "type": "a string value"
        },
        "enabled": true,
        "source": {
          "name": "a string value",
          "type": "a string value"
        },
        "strategy": {
          "type": "a string value",
          "verificationSettings": {
            "fields": {
              "key": "value"
            },
            "mappingSettings": {
              "map": {
                "key": "value"
              },
              "remove": [
                "a string value"
              ],
              "values": {
                "key": "value"
              }
            }
          }
        },
        "strict": true,
        "type": "a string value"
      },
      "localHost": "a string value",
      "localScheme": "a string value",
      "maintenanceMode": true,
      "matchingHeaders": {
        "key": "value"
      },
      "matchingRoot": "a string value",
      "metadata": {
        "key": "value"
      },
      "name": "a string value",
      "overrideHost": true,
      "privateApp": true,
      "privatePatterns": [
        "a string value"
      ],
      "publicPatterns": [
        "a string value"
      ],
      "redirectToLocal": true,
      "redirection": {
        "code": 123123,
        "enabled": true,
        "to": "a string value"
      },
      "root": "a string value",
      "secComExcludedPatterns": [
        "a string value"
      ],
      "secComSettings": {
        "secret": "a string value",
        "size": 123123,
        "type": "a string value"
      },
      "sendOtoroshiHeadersBack": true,
      "statsdConfig": {
        "datadog": true,
        "host": "a string value",
        "port": 123123
      },
      "subdomain": "a string value",
      "targets": [
        {
          "host": "www.google.com",
          "scheme": "a string value"
        }
      ],
      "transformerRef": "a string value",
      "userFacing": true,
      "xForwardedHeaders": true
    }
  ],
  "serviceGroups": [
    {
      "description": "a string value",
      "id": "a string value",
      "name": "a string value"
    }
  ],
  "simpleAdmins": [
    {
      "createdAt": 123,
      "label": "a string value",
      "password": "a string value",
      "username": "a string value"
    }
  ],
  "stats": {
    "calls": 123,
    "dataIn": 123,
    "dataOut": 123
  }
}
```

The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admins|[object]|true|none|Current U2F admin at the time of export|
|apiKeys|[object]|true|none|Current apik keys at the time of export|
|appConfig|object|false|none|Current env variables at the time of export|
|config|[GlobalConfig](#schemaglobalconfig)|true|none|Current global config at the time of export|
|date|string(date-time)|true|none|none|
|dateRaw|integer(int64)|true|none|none|
|errorTemplates|[object]|true|none|Current error templates at the time of export|
|label|string|true|none|none|
|serviceDescriptors|[object]|true|none|Current service descriptors at the time of export|
|serviceGroups|[object]|true|none|Current service groups at the time of export|
|simpleAdmins|[object]|true|none|Current simple admins at the time of export|
|stats|[ImportExportStats](#schemaimportexportstats)|true|none|Current global stats at the time of export|

<h2 id="tocS_ImportExportStats">ImportExportStats</h2>
<!-- backwards compatibility -->
<a id="schemaimportexportstats"></a>
<a id="schema_ImportExportStats"></a>
<a id="tocSimportexportstats"></a>
<a id="tocsimportexportstats"></a>

```json
{
  "calls": 123,
  "dataIn": 123,
  "dataOut": 123
}
```

Global stats for the current Otoroshi instances

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|integer(int64)|true|none|Number of calls to Otoroshi globally|
|dataIn|integer(int64)|true|none|The amount of data sent to Otoroshi globally|
|dataOut|integer(int64)|true|none|The amount of data sent from Otoroshi globally|

<h2 id="tocS_InCookie">InCookie</h2>
<!-- backwards compatibility -->
<a id="schemaincookie"></a>
<a id="schema_InCookie"></a>
<a id="tocSincookie"></a>
<a id="tocsincookie"></a>

```json
{
  "name": "a string value",
  "type": "a string value"
}
```

JWT location in a cookie

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the cookie|
|type|string|true|none|String with value InCookie|

<h2 id="tocS_InHeader">InHeader</h2>
<!-- backwards compatibility -->
<a id="schemainheader"></a>
<a id="schema_InHeader"></a>
<a id="tocSinheader"></a>
<a id="tocsinheader"></a>

```json
{
  "name": "a string value",
  "remove": "a string value",
  "type": "a string value"
}
```

JWT location in a header

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the header|
|remove|string|true|none|Remove regex inside the value, like 'Bearer '|
|type|string|true|none|String with value InHeader|

<h2 id="tocS_InMemoryAuthModuleConfig">InMemoryAuthModuleConfig</h2>
<!-- backwards compatibility -->
<a id="schemainmemoryauthmoduleconfig"></a>
<a id="schema_InMemoryAuthModuleConfig"></a>
<a id="tocSinmemoryauthmoduleconfig"></a>
<a id="tocsinmemoryauthmoduleconfig"></a>

```json
{
  "desc": "a string value",
  "id": "a string value",
  "name": "a string value",
  "sessionMaxAge": "a string value",
  "type": "a string value",
  "users": [
    {
      "email": "a string value",
      "metadata": {
        "key": "value"
      },
      "name": "a string value",
      "password": "a string value"
    }
  ]
}
```

Settings to authenticate users using the in memory user store

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|string|true|none|Description of the config|
|id|string|true|none|Unique id of the config|
|name|string|true|none|Name of the config|
|sessionMaxAge|string|true|none|Max age of the session|
|type|string|true|none|Type of settings. value is basic|
|users|[[InMemoryUser](#schemainmemoryuser)]|true|none|List of users|

<h2 id="tocS_InMemoryUser">InMemoryUser</h2>
<!-- backwards compatibility -->
<a id="schemainmemoryuser"></a>
<a id="schema_InMemoryUser"></a>
<a id="tocSinmemoryuser"></a>
<a id="tocsinmemoryuser"></a>

```json
{
  "email": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "password": "a string value"
}
```

A user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email of the user|
|metadata|object|true|none|Metadata of the user|
|name|string|true|none|Name of the user|
|password|string|true|none|Password of the user (BCrypt hash)|

<h2 id="tocS_InQueryParam">InQueryParam</h2>
<!-- backwards compatibility -->
<a id="schemainqueryparam"></a>
<a id="schema_InQueryParam"></a>
<a id="tocSinqueryparam"></a>
<a id="tocsinqueryparam"></a>

```json
{
  "name": "a string value",
  "type": "a string value"
}
```

JWT location in a query param

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the query param|
|type|string|true|none|String with value InQueryParam|

<h2 id="tocS_IpFiltering">IpFiltering</h2>
<!-- backwards compatibility -->
<a id="schemaipfiltering"></a>
<a id="schema_IpFiltering"></a>
<a id="tocSipfiltering"></a>
<a id="tocsipfiltering"></a>

```json
{
  "blacklist": [
    "192.192.192.192"
  ],
  "whitelist": [
    "192.192.192.192"
  ]
}
```

The filtering configuration block for a service of globally.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blacklist|[string(ipv4)]|true|none|Blacklisted IP addresses|
|whitelist|[string(ipv4)]|true|none|Whitelisted IP addresses|

<h2 id="tocS_JWKSAlgoSettings">JWKSAlgoSettings</h2>
<!-- backwards compatibility -->
<a id="schemajwksalgosettings"></a>
<a id="schema_JWKSAlgoSettings"></a>
<a id="tocSjwksalgosettings"></a>
<a id="tocsjwksalgosettings"></a>

```json
{
  "headers": {
    "key": "value"
  },
  "kty": "a string value",
  "timeout": 123,
  "ttl": 123,
  "type": "a string value",
  "url": "a string value"
}
```

Settings for a JWK set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|The headers for the http call|
|kty|string|false|none|The type of key: RSA or EC|
|timeout|integer(int64)|false|none|The timeout of the http call|
|ttl|integer(int64)|false|none|The ttl of the keyset|
|type|string|true|none|String with value JWKSAlgoSettings|
|url|string|false|none|The url for the http call|

<h2 id="tocS_KafkaConfig">KafkaConfig</h2>
<!-- backwards compatibility -->
<a id="schemakafkaconfig"></a>
<a id="schema_KafkaConfig"></a>
<a id="tocSkafkaconfig"></a>
<a id="tocskafkaconfig"></a>

```json
{
  "keyPass": "a string value",
  "keyStore": "a string value",
  "servers": [
    "a string value"
  ],
  "topic": "a string value",
  "trustore": "a string value"
}
```

The configuration for kafka access

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPass|string|false|none|Optional keypass|
|keyStore|string|false|none|Optional path to keystore|
|servers|[string]|true|none|URLs of the kafka servers|
|topic|string|false|none|Optional kafka topic (otoroshi-events by default)|
|trustore|string|false|none|Optional path to trustore|

<h2 id="tocS_LargeRequestFaultConfig">LargeRequestFaultConfig</h2>
<!-- backwards compatibility -->
<a id="schemalargerequestfaultconfig"></a>
<a id="schema_LargeRequestFaultConfig"></a>
<a id="tocSlargerequestfaultconfig"></a>
<a id="tocslargerequestfaultconfig"></a>

```json
{
  "additionalRequestSize": 123123,
  "ratio": 42.2
}
```

Config for large request injection fault

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalRequestSize|integer(int32)|true|none|The size added to the request body in bytes. Added payload will be spaces only.|
|ratio|number(double)|true|none|The percentage of requests affected by this fault. Value should be between 0.0 and 1.0|

<h2 id="tocS_LargeResponseFaultConfig">LargeResponseFaultConfig</h2>
<!-- backwards compatibility -->
<a id="schemalargeresponsefaultconfig"></a>
<a id="schema_LargeResponseFaultConfig"></a>
<a id="tocSlargeresponsefaultconfig"></a>
<a id="tocslargeresponsefaultconfig"></a>

```json
{
  "additionalRequestSize": 123123,
  "ratio": 42.2
}
```

Config for large response injection fault

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalRequestSize|integer(int32)|false|none|The size added to the response body in bytes. Added payload will be spaces only.|
|ratio|number(double)|true|none|The percentage of requests affected by this fault. Value should be between 0.0 and 1.0|

<h2 id="tocS_LatencyInjectionFaultConfig">LatencyInjectionFaultConfig</h2>
<!-- backwards compatibility -->
<a id="schemalatencyinjectionfaultconfig"></a>
<a id="schema_LatencyInjectionFaultConfig"></a>
<a id="tocSlatencyinjectionfaultconfig"></a>
<a id="tocslatencyinjectionfaultconfig"></a>

```json
{
  "from": 123123,
  "ratio": 42.2,
  "to": 123123
}
```

Config for large latency injection fault

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|integer(int32)|true|none|The start range of latency added to the request|
|ratio|number(double)|true|none|The percentage of requests affected by this fault. Value should be between 0.0 and 1.0|
|to|integer(int32)|true|none|The end range of latency added to the request|

<h2 id="tocS_LdapAuthModuleConfig">LdapAuthModuleConfig</h2>
<!-- backwards compatibility -->
<a id="schemaldapauthmoduleconfig"></a>
<a id="schema_LdapAuthModuleConfig"></a>
<a id="tocSldapauthmoduleconfig"></a>
<a id="tocsldapauthmoduleconfig"></a>

```json
{
  "adminPassword": "a string value",
  "adminUsername": "a string value",
  "desc": "a string value",
  "emailField": "a string value",
  "groupFilter": "a string value",
  "id": "a string value",
  "name": "a string value",
  "nameField": "a string value",
  "otoroshiDataField": "a string value",
  "searchBase": "a string value",
  "searchFilter": "a string value",
  "serverUrl": "a string value",
  "sessionMaxAge": 123123,
  "type": "a string value",
  "userBase": "a string value"
}
```

Settings to authenticate users using a generic OAuth2 provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminPassword|string|true|none|The admin password|
|adminUsername|string|true|none|The admin username|
|desc|string|true|none|Description of the config|
|emailField|string|true|none|Field name to get email from user profile|
|groupFilter|string|true|none|Filter for groups|
|id|string|true|none|Unique id of the config|
|name|string|true|none|Name of the config|
|nameField|string|true|none|Field name to get name from user profile|
|otoroshiDataField|string|false|none|Field name to get otoroshi metadata from. You can specify sub fields using \| as separator|
|searchBase|string|true|none|LDAP search base|
|searchFilter|string|true|none|Filter for users|
|serverUrl|string|true|none|URL of the ldap server|
|sessionMaxAge|integer(int32)|true|none|Max age of the session|
|type|string|true|none|Type of settings. value is ldap|
|userBase|string|true|none|LDAP user base DN|

<h2 id="tocS_LdapUser">LdapUser</h2>
<!-- backwards compatibility -->
<a id="schemaldapuser"></a>
<a id="schema_LdapUser"></a>
<a id="tocSldapuser"></a>
<a id="tocsldapuser"></a>

```json
{
  "email": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value"
}
```

A user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email of the user|
|metadata|object|true|none|Metadata of the user|
|name|string|true|none|Name of the user|

<h2 id="tocS_LocalJwtVerifier">LocalJwtVerifier</h2>
<!-- backwards compatibility -->
<a id="schemalocaljwtverifier"></a>
<a id="schema_LocalJwtVerifier"></a>
<a id="tocSlocaljwtverifier"></a>
<a id="tocslocaljwtverifier"></a>

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "enabled": true,
  "source": {
    "name": "a string value",
    "type": "a string value"
  },
  "strategy": {
    "type": "a string value",
    "verificationSettings": {
      "fields": {
        "key": "value"
      },
      "mappingSettings": {
        "map": {
          "key": "value"
        },
        "remove": [
          "a string value"
        ],
        "values": {
          "key": "value"
        }
      }
    }
  },
  "strict": true,
  "type": "a string value"
}
```

A JWT verifier used only for the current service descriptor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algoSettings|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|true|none|none|
|enabled|boolean|true|none|Is it enabled|
|source|[InQueryParam](#schemainqueryparam) \| [InHeader](#schemainheader) \| [InCookie](#schemaincookie)|true|none|none|
|strategy|[PassThrough](#schemapassthrough) \| [Sign](#schemasign) \| [Transform](#schematransform)|true|none|none|
|strict|boolean|true|none|Does it fail if JWT not found|
|type|string|true|none|A string with value 'local'|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "teams": [
    {
      "key": "value"
    }
  ],
  "tenant": "a string value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teams|[object]|true|none|Team ids|
|tenant|string|true|none|Tenant id|

<h2 id="tocS_MailerConsoleExporterConfig">MailerConsoleExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemamailerconsoleexporterconfig"></a>
<a id="schema_MailerConsoleExporterConfig"></a>
<a id="tocSmailerconsoleexporterconfig"></a>
<a id="tocsmailerconsoleexporterconfig"></a>

```json
{
  "type": "generic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of mailer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|generic|

<h2 id="tocS_MailerGenericExporterConfig">MailerGenericExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemamailergenericexporterconfig"></a>
<a id="schema_MailerGenericExporterConfig"></a>
<a id="tocSmailergenericexporterconfig"></a>
<a id="tocsmailergenericexporterconfig"></a>

```json
{
  "headers": {
    "key": "value"
  },
  "to": [
    "a string value"
  ],
  "type": "generic",
  "url": "a string value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|Optional headers|
|to|[string]|false|none|Email adresses of recipents|
|type|string|true|none|Type of mailer|
|url|string|false|none|Url of mailer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|generic|

<h2 id="tocS_MailerMailgunExporterConfig">MailerMailgunExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemamailermailgunexporterconfig"></a>
<a id="schema_MailerMailgunExporterConfig"></a>
<a id="tocSmailermailgunexporterconfig"></a>
<a id="tocsmailermailgunexporterconfig"></a>

```json
{
  "apiKey": "a string value",
  "domain": "a string value",
  "eu": true,
  "to": [
    "admin@otoroshi.io"
  ],
  "type": "mailgun"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|Mailgun apiKey|
|domain|string|false|none|Mailgun domain|
|eu|boolean|false|none|Whether the mailgun server is european|
|to|[string(email)]|false|none|Email adresses of recipents|
|type|string|true|none|Type of mailer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailgun|

<h2 id="tocS_MailerMailjetExporterConfig">MailerMailjetExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemamailermailjetexporterconfig"></a>
<a id="schema_MailerMailjetExporterConfig"></a>
<a id="tocSmailermailjetexporterconfig"></a>
<a id="tocsmailermailjetexporterconfig"></a>

```json
{
  "apiKeyPrivate": "a string value",
  "apiKeyPublic": "a string value",
  "to": [
    "admin@otoroshi.io"
  ],
  "type": "mailjet"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyPrivate|string|false|none|Mailjet private apiKey|
|apiKeyPublic|string|false|none|Mailjet public apiKey|
|to|[string(email)]|false|none|Email adresses of recipents|
|type|string|true|none|Type of mailer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailjet|

<h2 id="tocS_MailerSendgridExporterConfig">MailerSendgridExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemamailersendgridexporterconfig"></a>
<a id="schema_MailerSendgridExporterConfig"></a>
<a id="tocSmailersendgridexporterconfig"></a>
<a id="tocsmailersendgridexporterconfig"></a>

```json
{
  "apiKeyPublic": "a string value",
  "to": [
    "admin@otoroshi.io"
  ],
  "type": "sendgrid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyPublic|string|false|none|Sendgrid apiKey|
|to|[string(email)]|false|none|Email adresses of recipents|
|type|string|true|none|Type of mailer|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sendgrid|

<h2 id="tocS_MailerSettings">MailerSettings</h2>
<!-- backwards compatibility -->
<a id="schemamailersettings"></a>
<a id="schema_MailerSettings"></a>
<a id="tocSmailersettings"></a>
<a id="tocsmailersettings"></a>

```json
{
  "apiKey": "a string value",
  "apiKeyPrivate": "a string value",
  "apiKeyPublic": "a string value",
  "domain": "a string value",
  "eu": true,
  "header": {
    "key": "value"
  },
  "type": "a string value",
  "url": "a string value"
}
```

Configuration for mailgun api client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|true|none|Mailgun mailer api key|
|apiKeyPrivate|string|false|none|Mailjet mailer private api key|
|apiKeyPublic|string|false|none|Mailjet mailer public api key|
|domain|string|true|none|Mailgun mailer domain|
|eu|boolean|false|none|Mailgun mailer, use EU tenant api|
|header|object|false|none|Generic mailer headers|
|type|string|false|none|Type of the mailer: console, generic, mailgun, mailjet|
|url|string|false|none|Generic mailer url|

<h2 id="tocS_MappingSettings">MappingSettings</h2>
<!-- backwards compatibility -->
<a id="schemamappingsettings"></a>
<a id="schema_MappingSettings"></a>
<a id="tocSmappingsettings"></a>
<a id="tocsmappingsettings"></a>

```json
{
  "map": {
    "key": "value"
  },
  "remove": [
    "a string value"
  ],
  "values": {
    "key": "value"
  }
}
```

Settings to change fields of a JWT token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|map|object|true|none|Fields to rename|
|remove|[string]|true|none|Fields to remove|
|values|object|true|none|Fields to set|

<h2 id="tocS_OtoroshiHealth">OtoroshiHealth</h2>
<!-- backwards compatibility -->
<a id="schemaotoroshihealth"></a>
<a id="schema_OtoroshiHealth"></a>
<a id="tocSotoroshihealth"></a>
<a id="tocsotoroshihealth"></a>

```json
{
  "datastore": "healthy",
  "otoroshi": "healthy"
}
```

The structure that represent current Otoroshi health

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastore|string|true|none|none|
|otoroshi|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|datastore|healthy|
|datastore|unhealthy|
|datastore|unreachable|
|otoroshi|healthy|
|otoroshi|unhealthy|
|otoroshi|down|

<h2 id="tocS_Outage">Outage</h2>
<!-- backwards compatibility -->
<a id="schemaoutage"></a>
<a id="schema_Outage"></a>
<a id="tocSoutage"></a>
<a id="tocsoutage"></a>

```json
{
  "descriptorId": "a string value",
  "descriptorName": "a string value",
  "duration": 123123,
  "until": "17:32:28.000"
}
```

An outage by the Snow Monkey on a service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptorId|string|true|none|The service impacted by outage|
|descriptorName|string|true|none|The name of service impacted by outage|
|duration|integer(int32)|true|none|The duration of the outage|
|until|string(time)|true|none|The end of the outage|

<h2 id="tocS_OutageStrategy">OutageStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaoutagestrategy"></a>
<a id="schema_OutageStrategy"></a>
<a id="tocSoutagestrategy"></a>
<a id="tocsoutagestrategy"></a>

```json
"OneServicePerGroup"
```

<h2 id="tocS_PassThrough">PassThrough</h2>
<!-- backwards compatibility -->
<a id="schemapassthrough"></a>
<a id="schema_PassThrough"></a>
<a id="tocSpassthrough"></a>
<a id="tocspassthrough"></a>

```json
{
  "type": "a string value",
  "verificationSettings": {
    "fields": {
      "key": "value"
    },
    "mappingSettings": {
      "map": {
        "key": "value"
      },
      "remove": [
        "a string value"
      ],
      "values": {
        "key": "value"
      }
    }
  }
}
```

Strategy where only signature and field values are verified

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|String with value PassThrough|
|verificationSettings|[VerificationSettings](#schemaverificationsettings)|true|none|Settings to verify the value of JWT token fields|

<h2 id="tocS_Patch">Patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_Patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
[
  {
    "op": "add",
    "path": "a string value",
    "value": null
  }
]
```

A set of changes described in JSON Patch format: http://jsonpatch.com/ (RFC 6902)

<h2 id="tocS_PulsarDataExporterConfig">PulsarDataExporterConfig</h2>
<!-- backwards compatibility -->
<a id="schemapulsardataexporterconfig"></a>
<a id="schema_PulsarDataExporterConfig"></a>
<a id="tocSpulsardataexporterconfig"></a>
<a id="tocspulsardataexporterconfig"></a>

```json
{
  "namespace": "a string value",
  "tenant": "a string value",
  "topic": "a string value",
  "uri": [
    "a string value"
  ]
}
```

The configuration for kafka access

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|true|none|Namespace|
|tenant|string|true|none|Tenant|
|topic|string|true|none|Topic|
|uri|[string]|true|none|URI of the pulsar server|

<h2 id="tocS_Quotas">Quotas</h2>
<!-- backwards compatibility -->
<a id="schemaquotas"></a>
<a id="schema_Quotas"></a>
<a id="tocSquotas"></a>
<a id="tocsquotas"></a>

```json
{
  "authorizedCallsPerDay": 123,
  "authorizedCallsPerMonth": 123,
  "authorizedCallsPerSec": 123,
  "currentCallsPerDay": 123,
  "currentCallsPerMonth": 123,
  "currentCallsPerSec": 123,
  "remainingCallsPerDay": 123,
  "remainingCallsPerMonth": 123,
  "remainingCallsPerSec": 123
}
```

Quotas state for an api key on a service group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizedCallsPerDay|integer(int64)|true|none|The number of authorized calls per day|
|authorizedCallsPerMonth|integer(int64)|true|none|The number of authorized calls per month|
|authorizedCallsPerSec|integer(int64)|true|none|The number of authorized calls per second|
|currentCallsPerDay|integer(int64)|true|none|The current number of calls per day|
|currentCallsPerMonth|integer(int64)|true|none|The current number of calls per month|
|currentCallsPerSec|integer(int64)|true|none|The current number of calls per second|
|remainingCallsPerDay|integer(int64)|true|none|The remaining number of calls per day|
|remainingCallsPerMonth|integer(int64)|true|none|The number of authorized calls per month|
|remainingCallsPerSec|integer(int64)|true|none|The remaining number of calls per second|

<h2 id="tocS_RSAlgoSettings">RSAlgoSettings</h2>
<!-- backwards compatibility -->
<a id="schemarsalgosettings"></a>
<a id="schema_RSAlgoSettings"></a>
<a id="tocSrsalgosettings"></a>
<a id="tocsrsalgosettings"></a>

```json
{
  "privateKey": "a string value",
  "publicKey": "a string value",
  "size": 123123,
  "type": "a string value"
}
```

Settings for an HMAC + SHA signing algorithm

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateKey|string|false|none|The private key for the RSA function|
|publicKey|string|true|none|The public key for the RSA function|
|size|integer(int32)|true|none|Size for SHA function. can be 256, 384 or 512|
|type|string|true|none|String with value RSAlgoSettings|

<h2 id="tocS_RedirectionSettings">RedirectionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaredirectionsettings"></a>
<a id="schema_RedirectionSettings"></a>
<a id="tocSredirectionsettings"></a>
<a id="tocsredirectionsettings"></a>

```json
{
  "code": 123123,
  "enabled": true,
  "to": "a string value"
}
```

The configuration for redirection per service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|The http redirect code|
|enabled|boolean|true|none|Whether or not redirection is enabled|
|to|string|true|none|The location for redirection|

<h2 id="tocS_RefJwtVerifier">RefJwtVerifier</h2>
<!-- backwards compatibility -->
<a id="schemarefjwtverifier"></a>
<a id="schema_RefJwtVerifier"></a>
<a id="tocSrefjwtverifier"></a>
<a id="tocsrefjwtverifier"></a>

```json
{
  "enabled": true,
  "id": "a string value",
  "type": "a string value"
}
```

Reference to a global JWT verifier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Is it enabled|
|id|string|true|none|The id of the GlobalJWTVerifier|
|type|string|true|none|A string with value 'ref'|

<h2 id="tocS_Script">Script</h2>
<!-- backwards compatibility -->
<a id="schemascript"></a>
<a id="schema_Script"></a>
<a id="tocSscript"></a>
<a id="tocsscript"></a>

```json
{
  "code": {
    "key": "value"
  },
  "desc": {
    "key": "value"
  },
  "id": "a string value",
  "name": "a string value"
}
```

A script to transformer otoroshi requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|The code of the script|
|desc|object|true|none|The description of the script|
|id|string|true|none|The id of the script|
|name|string|true|none|The name of the script|

<h2 id="tocS_ScriptCompilationError">ScriptCompilationError</h2>
<!-- backwards compatibility -->
<a id="schemascriptcompilationerror"></a>
<a id="schema_ScriptCompilationError"></a>
<a id="tocSscriptcompilationerror"></a>
<a id="tocsscriptcompilationerror"></a>

```json
{
  "column": "a string value",
  "file": {
    "key": "value"
  },
  "line": "a string value",
  "message": {
    "key": "value"
  },
  "rawMessage": {
    "key": "value"
  }
}
```

The error of the compilation of a Script

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|The column of the error|
|file|object|true|none|The file where the error is located|
|line|string|true|none|The line of the error|
|message|object|true|none|The message to display for the error|
|rawMessage|object|true|none|The raw message from the compiler|

<h2 id="tocS_ScriptCompilationResult">ScriptCompilationResult</h2>
<!-- backwards compatibility -->
<a id="schemascriptcompilationresult"></a>
<a id="schema_ScriptCompilationResult"></a>
<a id="tocSscriptcompilationresult"></a>
<a id="tocsscriptcompilationresult"></a>

```json
{
  "done": true,
  "error": {
    "column": "a string value",
    "file": {
      "key": "value"
    },
    "line": "a string value",
    "message": {
      "key": "value"
    },
    "rawMessage": {
      "key": "value"
    }
  }
}
```

The result of the compilation of a Script

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|true|none|Is the task done or not|
|error|[ScriptCompilationError](#schemascriptcompilationerror)|false|none|The error of the compilation of a Script|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "Canary": {
    "enabled": true,
    "root": "a string value",
    "targets": [
      {
        "host": "www.google.com",
        "scheme": "a string value"
      }
    ],
    "traffic": 123123
  },
  "additionalHeaders": {
    "key": "value"
  },
  "api": {
    "exposeApi": true,
    "openApiDescriptorUrl": "http://www.google.com"
  },
  "authConfigRef": "a string value",
  "buildMode": true,
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "clientConfig": {
    "backoffFactor": 123123,
    "callTimeout": 123123,
    "globalTimeout": 123123,
    "maxErrors": 123123,
    "retries": 123123,
    "retryInitialDelay": 123123,
    "sampleInterval": 123123,
    "useCircuitBreaker": true
  },
  "clientValidatorRef": "a string value",
  "cors": {
    "allowCredentials": true,
    "allowHeaders": [
      "a string value"
    ],
    "allowMethods": [
      "a string value"
    ],
    "allowOrigin": "a string value",
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "exposeHeaders": [
      "a string value"
    ],
    "maxAge": 123123
  },
  "domain": "a string value",
  "enabled": true,
  "enforceSecureCommunication": true,
  "env": "a string value",
  "forceHttps": true,
  "groups": [
    "a string value"
  ],
  "gzip": {
    "blackList": [
      "a string value"
    ],
    "bufferSize": 123,
    "chunkedThreshold": 123,
    "compressionLevel": 123123,
    "enabled": true,
    "excludedPatterns": [
      "a string value"
    ],
    "whiteList": [
      "a string value"
    ]
  },
  "headersVerification": {
    "key": "value"
  },
  "healthCheck": {
    "enabled": true,
    "url": "http://www.google.com"
  },
  "id": "110e8400-e29b-11d4-a716-446655440000",
  "ipFiltering": {
    "blacklist": [
      "192.192.192.192"
    ],
    "whitelist": [
      "192.192.192.192"
    ]
  },
  "jwtVerifier": {
    "algoSettings": {
      "secret": "a string value",
      "size": 123123,
      "type": "a string value"
    },
    "enabled": true,
    "source": {
      "name": "a string value",
      "type": "a string value"
    },
    "strategy": {
      "type": "a string value",
      "verificationSettings": {
        "fields": {
          "key": "value"
        },
        "mappingSettings": {
          "map": {
            "key": "value"
          },
          "remove": [
            "a string value"
          ],
          "values": {
            "key": "value"
          }
        }
      }
    },
    "strict": true,
    "type": "a string value"
  },
  "localHost": "a string value",
  "localScheme": "a string value",
  "maintenanceMode": true,
  "matchingHeaders": {
    "key": "value"
  },
  "matchingRoot": "a string value",
  "metadata": {
    "key": "value"
  },
  "name": "a string value",
  "overrideHost": true,
  "privateApp": true,
  "privatePatterns": [
    "a string value"
  ],
  "publicPatterns": [
    "a string value"
  ],
  "redirectToLocal": true,
  "redirection": {
    "code": 123123,
    "enabled": true,
    "to": "a string value"
  },
  "root": "a string value",
  "secComExcludedPatterns": [
    "a string value"
  ],
  "secComSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "sendOtoroshiHeadersBack": true,
  "statsdConfig": {
    "datadog": true,
    "host": "a string value",
    "port": 123123
  },
  "subdomain": "a string value",
  "targets": [
    {
      "host": "www.google.com",
      "scheme": "a string value"
    }
  ],
  "transformerRef": "a string value",
  "userFacing": true,
  "xForwardedHeaders": true
}
```

An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Canary|[Canary](#schemacanary)|false|none|The configuration of the canary mode for a service descriptor|
|additionalHeaders|object|false|none|Specify headers that will be added to each client request. Useful to add authentication|
|api|[ExposedApi](#schemaexposedapi)|false|none|The Open API configuration for your service (if one)|
|authConfigRef|string|false|none|A reference to a global auth module config|
|buildMode|boolean|true|none|Display a construction page when a user try to use the service|
|chaosConfig|[ChaosConfig](#schemachaosconfig)|false|none|Configuration for the faults that can be injected in requests|
|clientConfig|[ClientConfig](#schemaclientconfig)|false|none|The configuration of the circuit breaker for a service descriptor|
|clientValidatorRef|string|false|none|A reference to validation authority|
|cors|[CorsSettings](#schemacorssettings)|false|none|The configuration for cors support|
|domain|string|true|none|The domain on which the service is available.|
|enabled|boolean|true|none|Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist|
|enforceSecureCommunication|boolean|true|none|When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside|
|env|string|true|none|The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'|
|forceHttps|boolean|true|none|Will force redirection to https:// if not present|
|groups|[string]|true|none|Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group|
|gzip|[Gzip](#schemagzip)|false|none|Configuration for gzip of service responses|
|headersVerification|object|false|none|Specify headers that will be verified after routing.|
|healthCheck|[HealthCheck](#schemahealthcheck)|false|none|The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive|
|id|string(uuid)|true|none|A unique random string to identify your service|
|ipFiltering|[IpFiltering](#schemaipfiltering)|false|none|The filtering configuration block for a service of globally.|
|jwtVerifier|[LocalJwtVerifier](#schemalocaljwtverifier) \| [RefJwtVerifier](#schemarefjwtverifier)|false|none|none|
|localHost|string|false|none|The host used localy, mainly localhost:xxxx|
|localScheme|string|false|none|The scheme used localy, mainly http|
|maintenanceMode|boolean|true|none|Display a maintainance page when a user try to use the service|
|matchingHeaders|object|false|none|Specify headers that MUST be present on client request to route it. Useful to implement versioning|
|matchingRoot|string|false|none|The root path on which the service is available|
|metadata|object|false|none|Just a bunch of random properties|
|name|string|true|none|The name of your service. Only for debug and human readability purposes|
|overrideHost|boolean|false|none|Host header will be overriden with Host of the target|
|privateApp|boolean|true|none|When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain|
|privatePatterns|[string]|false|none|If you define a public pattern that is a little bit too much, you can make some of public URL private again|
|publicPatterns|[string]|false|none|By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'|
|redirectToLocal|boolean|false|none|If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests|
|redirection|[RedirectionSettings](#schemaredirectionsettings)|false|none|The configuration for redirection per service|
|root|string|true|none|Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar|
|secComExcludedPatterns|[string]|false|none|URI patterns excluded from secured communications|
|secComSettings|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|false|none|none|
|sendOtoroshiHeadersBack|boolean|false|none|When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...|
|statsdConfig|[StatsdConfig](#schemastatsdconfig)|false|none|The configuration for statsd metrics push|
|subdomain|string|true|none|The subdomain on which the service is available|
|targets|[[Target](#schematarget)]|true|none|The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures|
|transformerRef|string|false|none|A reference to a request transformer|
|userFacing|boolean|false|none|The fact that this service will be seen by users and cannot be impacted by the Snow Monkey|
|xForwardedHeaders|boolean|false|none|Send X-Forwarded-* headers|

<h2 id="tocS_Sign">Sign</h2>
<!-- backwards compatibility -->
<a id="schemasign"></a>
<a id="schema_Sign"></a>
<a id="tocSsign"></a>
<a id="tocssign"></a>

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "type": "a string value",
  "verificationSettings": {
    "fields": {
      "key": "value"
    },
    "mappingSettings": {
      "map": {
        "key": "value"
      },
      "remove": [
        "a string value"
      ],
      "values": {
        "key": "value"
      }
    }
  }
}
```

Strategy where signature and field values are verified, and then token si re-signed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algoSettings|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|true|none|none|
|type|string|true|none|String with value Sign|
|verificationSettings|[VerificationSettings](#schemaverificationsettings)|true|none|Settings to verify the value of JWT token fields|

<h2 id="tocS_SimpleAdmin">SimpleAdmin</h2>
<!-- backwards compatibility -->
<a id="schemasimpleadmin"></a>
<a id="schema_SimpleAdmin"></a>
<a id="tocSsimpleadmin"></a>
<a id="tocssimpleadmin"></a>

```json
{
  "createdAt": 123,
  "label": "a string value",
  "password": "a string value",
  "username": "a string value"
}
```

Administrator using just login/password tuple to access Otoroshi

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|integer(int64)|true|none|The creation date of the user|
|label|string|true|none|The label for the user|
|password|string|true|none|The hashed password of the user|
|username|string|true|none|The email address of the user|

<h2 id="tocS_SnowMonkeyConfig">SnowMonkeyConfig</h2>
<!-- backwards compatibility -->
<a id="schemasnowmonkeyconfig"></a>
<a id="schema_SnowMonkeyConfig"></a>
<a id="tocSsnowmonkeyconfig"></a>
<a id="tocssnowmonkeyconfig"></a>

```json
{
  "chaosConfig": {
    "badResponsesFaultConfig": {
      "ratio": 42.2,
      "responses": [
        {
          "body": "a string value",
          "headers": {
            "key": "value"
          },
          "status": 123123
        }
      ]
    },
    "enabled": true,
    "largeRequestFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "largeResponseFaultConfig": {
      "additionalRequestSize": 123123,
      "ratio": 42.2
    },
    "latencyInjectionFaultConfig": {
      "from": 123123,
      "ratio": 42.2,
      "to": 123123
    }
  },
  "dryRun": true,
  "enabled": true,
  "includeUserFacingDescriptors": true,
  "outageDurationFrom": 123123,
  "outageDurationTo": 123123,
  "outageStrategy": "OneServicePerGroup",
  "startTime": "17:32:28.000",
  "stopTime": "17:32:28.000",
  "targetGroups": [
    "a string value"
  ],
  "timesPerDay": 123123
}
```

Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chaosConfig|[ChaosConfig](#schemachaosconfig)|true|none|Configuration for the faults that can be injected in requests|
|dryRun|boolean|true|none|Whether or not outages will actualy impact requests|
|enabled|boolean|true|none|Whether or not this config is enabled|
|includeUserFacingDescriptors|boolean|true|none|Whether or not user facing apps. will be impacted by Snow Monkey|
|outageDurationFrom|integer(int32)|true|none|Start of outage duration range|
|outageDurationTo|integer(int32)|true|none|End of outage duration range|
|outageStrategy|[OutageStrategy](#schemaoutagestrategy)|true|none|none|
|startTime|string(time)|true|none|Start time of Snow Monkey each day|
|stopTime|string(time)|true|none|Stop time of Snow Monkey each day|
|targetGroups|[string]|true|none|Groups impacted by Snow Monkey. If empty, all groups will be impacted|
|timesPerDay|integer(int32)|true|none|Number of time per day each service will be outage|

#### Enumerated Values

|Property|Value|
|---|---|
|outageStrategy|OneServicePerGroup|
|outageStrategy|AllServicesPerGroup|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "calls": 123,
  "concurrentHandledRequests": 123,
  "dataIn": 123,
  "dataInRate": 42.2,
  "dataOut": 123,
  "dataOutRate": 42.2,
  "duration": 42.2,
  "overhead": 42.2,
  "rate": 42.2
}
```

Live stats for a service or globally

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|integer(int64)|true|none|Number of calls on the specified service or globally|
|concurrentHandledRequests|integer(int64)|true|none|The number of concurrent request currently|
|dataIn|integer(int64)|true|none|The amount of data sent to the specified service or Otoroshi globally|
|dataInRate|number(double)|true|none|The rate of data sent to the specified service or Otoroshi globally|
|dataOut|integer(int64)|true|none|The amount of data sent from the specified service or Otoroshi globally|
|dataOutRate|number(double)|true|none|The rate of data sent from the specified service or Otoroshi globally|
|duration|number(double)|true|none|The average duration for a call|
|overhead|number(double)|true|none|The average overhead time induced by Otoroshi for each call|
|rate|number(double)|true|none|The rate of data sent from and to the specified service or Otoroshi globally|

<h2 id="tocS_StatsdConfig">StatsdConfig</h2>
<!-- backwards compatibility -->
<a id="schemastatsdconfig"></a>
<a id="schema_StatsdConfig"></a>
<a id="tocSstatsdconfig"></a>
<a id="tocsstatsdconfig"></a>

```json
{
  "datadog": true,
  "host": "a string value",
  "port": 123123
}
```

The configuration for statsd metrics push

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datadog|boolean|true|none|Datadog agent|
|host|string|true|none|The host of the StatsD agent|
|port|integer(int32)|true|none|The port of the StatsD agent|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "host": "www.google.com",
  "scheme": "a string value"
}
```

A Target is where an HTTP call will be forwarded in the end from a service domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string(hostname)|true|none|The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port|
|scheme|string|true|none|The protocol used for communication. Can be http or https|

<h2 id="tocS_Transform">Transform</h2>
<!-- backwards compatibility -->
<a id="schematransform"></a>
<a id="schema_Transform"></a>
<a id="tocStransform"></a>
<a id="tocstransform"></a>

```json
{
  "algoSettings": {
    "secret": "a string value",
    "size": 123123,
    "type": "a string value"
  },
  "transformSettings": {
    "location": {
      "name": "a string value",
      "type": "a string value"
    },
    "mappingSettings": {
      "map": {
        "key": "value"
      },
      "remove": [
        "a string value"
      ],
      "values": {
        "key": "value"
      }
    }
  },
  "type": "a string value",
  "verificationSettings": {
    "fields": {
      "key": "value"
    },
    "mappingSettings": {
      "map": {
        "key": "value"
      },
      "remove": [
        "a string value"
      ],
      "values": {
        "key": "value"
      }
    }
  }
}
```

Strategy where signature and field values are verified, trasnformed and then token si re-signed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algoSettings|[HSAlgoSettings](#schemahsalgosettings) \| [RSAlgoSettings](#schemarsalgosettings) \| [ESAlgoSettings](#schemaesalgosettings) \| [JWKSAlgoSettings](#schemajwksalgosettings)|true|none|none|
|transformSettings|[TransformSettings](#schematransformsettings)|false|none|Settings to transform a JWT token and its location|
|type|string|true|none|String with value Transform|
|verificationSettings|[VerificationSettings](#schemaverificationsettings)|true|none|Settings to verify the value of JWT token fields|

<h2 id="tocS_TransformSettings">TransformSettings</h2>
<!-- backwards compatibility -->
<a id="schematransformsettings"></a>
<a id="schema_TransformSettings"></a>
<a id="tocStransformsettings"></a>
<a id="tocstransformsettings"></a>

```json
{
  "location": {
    "name": "a string value",
    "type": "a string value"
  },
  "mappingSettings": {
    "map": {
      "key": "value"
    },
    "remove": [
      "a string value"
    ],
    "values": {
      "key": "value"
    }
  }
}
```

Settings to transform a JWT token and its location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[InQueryParam](#schemainqueryparam) \| [InHeader](#schemainheader) \| [InCookie](#schemaincookie)|true|none|none|
|mappingSettings|[MappingSettings](#schemamappingsettings)|true|none|Settings to change fields of a JWT token|

<h2 id="tocS_U2FAdmin">U2FAdmin</h2>
<!-- backwards compatibility -->
<a id="schemau2fadmin"></a>
<a id="schema_U2FAdmin"></a>
<a id="tocSu2fadmin"></a>
<a id="tocsu2fadmin"></a>

```json
{
  "createdAt": 123,
  "label": "a string value",
  "password": "a string value",
  "registration": {
    "key": "value"
  },
  "username": "a string value"
}
```

Administrator using FIDO U2F device to access Otoroshi

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|integer(int64)|true|none|The creation date of the user|
|label|string|true|none|The label for the user|
|password|string|true|none|The hashed password of the user|
|registration|object|true|none|The U2F registration slug|
|username|string|true|none|The email address of the user|

<h2 id="tocS_ValidationAuthority">ValidationAuthority</h2>
<!-- backwards compatibility -->
<a id="schemavalidationauthority"></a>
<a id="schema_ValidationAuthority"></a>
<a id="tocSvalidationauthority"></a>
<a id="tocsvalidationauthority"></a>

```json
{
  "alwaysValid": true,
  "badTtl": 123,
  "description": "a string value",
  "goodTtl": 123,
  "headers": {
    "key": "value"
  },
  "host": "a string value",
  "id": "a string value",
  "method": "a string value",
  "name": "a string value",
  "noCache": true,
  "path": "a string value",
  "timeout": 123,
  "url": "a string value"
}
```

Settings to access a validation authority server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alwaysValid|boolean|true|none|Bypass http calls, every certificates are valids|
|badTtl|integer(int64)|true|none|The TTL for invalid access response caching|
|description|string|true|none|The description of the settings|
|goodTtl|integer(int64)|true|none|The TTL for valid access response caching|
|headers|object|true|none|HTTP call headers|
|host|string|true|none|The host of the server|
|id|string|true|none|The id of the settings|
|method|string|true|none|The HTTP method|
|name|string|true|none|The name of the settings|
|noCache|boolean|true|none|Avoid caching responses|
|path|string|true|none|The URL path|
|timeout|integer(int64)|true|none|The call timeout|
|url|string|true|none|The URL of the server|

<h2 id="tocS_VerificationSettings">VerificationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsettings"></a>
<a id="schema_VerificationSettings"></a>
<a id="tocSverificationsettings"></a>
<a id="tocsverificationsettings"></a>

```json
{
  "fields": {
    "key": "value"
  },
  "mappingSettings": {
    "map": {
      "key": "value"
    },
    "remove": [
      "a string value"
    ],
    "values": {
      "key": "value"
    }
  }
}
```

Settings to verify the value of JWT token fields

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|true|none|Fields to verify with their values|
|mappingSettings|[MappingSettings](#schemamappingsettings)|false|none|Settings to change fields of a JWT token|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "headers": {
    "key": "value"
  },
  "url": "http://www.google.com"
}
```

A callback URL where events are posted

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|true|none|Headers to authorize the call or whatever|
|url|string(uri)|true|none|The URL where events are posted|

<h2 id="tocS_whebhookConfig">whebhookConfig</h2>
<!-- backwards compatibility -->
<a id="schemawhebhookconfig"></a>
<a id="schema_whebhookConfig"></a>
<a id="tocSwhebhookconfig"></a>
<a id="tocswhebhookconfig"></a>

```json
{
  "headers": {
    "key": "value"
  },
  "url": [
    "a string value"
  ]
}
```

The configuration for webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|Optional headers|
|url|[string]|false|none|URLs of the webhook|
