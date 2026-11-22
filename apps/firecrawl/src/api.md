<h1 id="firecrawl-api">Firecrawl API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for interacting with Firecrawl services to perform web scraping and crawling tasks.

Base URLs:

* <a href="https://api.firecrawl.dev/v2">https://api.firecrawl.dev/v2</a>

Email: <a href="mailto:support@firecrawl.dev">Firecrawl Support</a> 
Web: <a href="https://firecrawl.dev/support">Firecrawl Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="firecrawl-api-monitoring">Monitoring</h1>

## List monitors

<a id="opIdlistMonitors"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /monitor`

<h3 id="list-monitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "status": "active",
      "schedule": {
        "cron": "string",
        "timezone": "string"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "lastRunAt": "1970-01-01T00:00:00Z",
      "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targets": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "scrape",
          "urls": [
            "http://example.com"
          ],
          "scrapeOptions": {
            "formats": [
              "markdown"
            ],
            "onlyMainContent": true,
            "onlyCleanContent": false,
            "includeTags": [
              "string"
            ],
            "excludeTags": [
              "string"
            ],
            "maxAge": 172800000,
            "minAge": 0,
            "headers": {},
            "waitFor": 0,
            "mobile": false,
            "skipTlsVerification": true,
            "timeout": 60000,
            "parsers": [
              "pdf",
              "image"
            ],
            "actions": [
              {
                "type": "wait",
                "milliseconds": 1
              }
            ],
            "location": {
              "country": "US",
              "languages": [
                "en-US"
              ]
            },
            "removeBase64Images": true,
            "blockAds": true,
            "proxy": "auto",
            "storeInCache": true,
            "lockdown": false,
            "checkPromptInjection": false,
            "redactPII": false,
            "profile": {
              "name": "string",
              "saveChanges": true
            },
            "threatProtection": {
              "mode": "off",
              "riskScoreThreshold": 75,
              "blacklist": [
                "string"
              ],
              "whitelist": [
                "string"
              ],
              "blockedTlds": [
                "string"
              ],
              "failurePolicy": "open"
            },
            "auditMetadata": {
              "username": "string"
            }
          }
        }
      ],
      "webhook": {
        "url": "http://example.com",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "metadata": {},
        "events": [
          "monitor.page"
        ]
      },
      "notification": {
        "email": {
          "enabled": false,
          "recipients": [
            "user@example.com"
          ],
          "includeDiffs": false
        }
      },
      "retentionDays": 0,
      "estimatedCreditsPerMonth": 0,
      "lastCheckSummary": {
        "totalPages": 0,
        "same": 0,
        "changed": 0,
        "new": 0,
        "removed": 0,
        "error": 0
      },
      "goal": "string",
      "judgeEnabled": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-monitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitors|[MonitorListResponse](#schemamonitorlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a monitor

<a id="opIdcreateMonitor"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Blog monitor",
    "schedule": {
      "text": "every 30 minutes",
      "timezone": "UTC"
    },
    "goal": "Notify me when a new blog post is published or the headline changes",
    "notification": {
      "email": {
        "enabled": true,
        "recipients": [
          "alerts@example.com"
        ],
        "includeDiffs": true
      }
    },
    "targets": [
      {
        "type": "scrape",
        "urls": [
          "https://example.com/blog"
        ]
      }
    ]
  }'
```

`POST /monitor`

> Body parameter

```json
{
  "name": "Blog monitor",
  "schedule": {
    "text": "every 30 minutes",
    "timezone": "UTC"
  },
  "goal": "Notify me when a new blog post is published or the headline changes",
  "notification": {
    "email": {
      "enabled": true,
      "recipients": [
        "alerts@example.com"
      ],
      "includeDiffs": true
    }
  },
  "targets": [
    {
      "type": "scrape",
      "urls": [
        "https://example.com/blog"
      ]
    }
  ]
}
```

<h3 id="create-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MonitorCreateRequest](#schemamonitorcreaterequest)|true|none|
|» name|body|string|true|none|
|» schedule|body|[MonitorSchedule](#schemamonitorschedule)|true|Schedule for monitor checks. Provide either `cron` or `text`.|
|» webhook|body|[MonitorWebhook](#schemamonitorwebhook)|false|Webhook destination for monitor page and check completion events.|
|» notification|body|[MonitorNotification](#schemamonitornotification)|false|none|
|» targets|body|[[MonitorTarget](#schemamonitortarget)]|true|none|
|» retentionDays|body|integer|false|none|
|» goal|body|string \| null|false|Plain-language goal used to judge whether changed pages are meaningful. If provided and `judgeEnabled` is omitted, judging is enabled automatically. Required (non-empty) when any target is a `search` target, unless `judgeEnabled` is `false`.|
|» judgeEnabled|body|boolean|false|Whether to judge changed pages against `goal`. Requires a non-empty `goal` to run.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "status": "active",
    "schedule": {
      "cron": "string",
      "timezone": "string"
    },
    "nextRunAt": "1970-01-01T00:00:00Z",
    "lastRunAt": "1970-01-01T00:00:00Z",
    "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "targets": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "scrape",
        "urls": [
          "http://example.com"
        ],
        "scrapeOptions": {
          "formats": [
            "markdown"
          ],
          "onlyMainContent": true,
          "onlyCleanContent": false,
          "includeTags": [
            "string"
          ],
          "excludeTags": [
            "string"
          ],
          "maxAge": 172800000,
          "minAge": 0,
          "headers": {},
          "waitFor": 0,
          "mobile": false,
          "skipTlsVerification": true,
          "timeout": 60000,
          "parsers": [
            "pdf",
            "image"
          ],
          "actions": [
            {
              "type": "wait",
              "milliseconds": 1
            }
          ],
          "location": {
            "country": "US",
            "languages": [
              "en-US"
            ]
          },
          "removeBase64Images": true,
          "blockAds": true,
          "proxy": "auto",
          "storeInCache": true,
          "lockdown": false,
          "checkPromptInjection": false,
          "redactPII": false,
          "profile": {
            "name": "string",
            "saveChanges": true
          },
          "threatProtection": {
            "mode": "off",
            "riskScoreThreshold": 75,
            "blacklist": [
              "string"
            ],
            "whitelist": [
              "string"
            ],
            "blockedTlds": [
              "string"
            ],
            "failurePolicy": "open"
          },
          "auditMetadata": {
            "username": "string"
          }
        }
      }
    ],
    "webhook": {
      "url": "http://example.com",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "monitor.page"
      ]
    },
    "notification": {
      "email": {
        "enabled": false,
        "recipients": [
          "user@example.com"
        ],
        "includeDiffs": false
      }
    },
    "retentionDays": 0,
    "estimatedCreditsPerMonth": 0,
    "lastCheckSummary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "goal": "string",
    "judgeEnabled": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor created|[MonitorResponse](#schemamonitorresponse)|
|400|Bad Request|Invalid monitor request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a monitor

<a id="opIdgetMonitor"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /monitor/{monitorId}`

<h3 id="get-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitorId|path|string(uuid)|true|The monitor ID|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "status": "active",
    "schedule": {
      "cron": "string",
      "timezone": "string"
    },
    "nextRunAt": "1970-01-01T00:00:00Z",
    "lastRunAt": "1970-01-01T00:00:00Z",
    "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "targets": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "scrape",
        "urls": [
          "http://example.com"
        ],
        "scrapeOptions": {
          "formats": [
            "markdown"
          ],
          "onlyMainContent": true,
          "onlyCleanContent": false,
          "includeTags": [
            "string"
          ],
          "excludeTags": [
            "string"
          ],
          "maxAge": 172800000,
          "minAge": 0,
          "headers": {},
          "waitFor": 0,
          "mobile": false,
          "skipTlsVerification": true,
          "timeout": 60000,
          "parsers": [
            "pdf",
            "image"
          ],
          "actions": [
            {
              "type": "wait",
              "milliseconds": 1
            }
          ],
          "location": {
            "country": "US",
            "languages": [
              "en-US"
            ]
          },
          "removeBase64Images": true,
          "blockAds": true,
          "proxy": "auto",
          "storeInCache": true,
          "lockdown": false,
          "checkPromptInjection": false,
          "redactPII": false,
          "profile": {
            "name": "string",
            "saveChanges": true
          },
          "threatProtection": {
            "mode": "off",
            "riskScoreThreshold": 75,
            "blacklist": [
              "string"
            ],
            "whitelist": [
              "string"
            ],
            "blockedTlds": [
              "string"
            ],
            "failurePolicy": "open"
          },
          "auditMetadata": {
            "username": "string"
          }
        }
      }
    ],
    "webhook": {
      "url": "http://example.com",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "monitor.page"
      ]
    },
    "notification": {
      "email": {
        "enabled": false,
        "recipients": [
          "user@example.com"
        ],
        "includeDiffs": false
      }
    },
    "retentionDays": 0,
    "estimatedCreditsPerMonth": 0,
    "lastCheckSummary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "goal": "string",
    "judgeEnabled": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="get-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor details|[MonitorResponse](#schemamonitorresponse)|
|404|Not Found|Monitor not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a monitor

<a id="opIddeleteMonitor"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /monitor/{monitorId}`

<h3 id="delete-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitorId|path|string(uuid)|true|The monitor ID|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="delete-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor deleted|[SuccessResponse](#schemasuccessresponse)|
|404|Not Found|Monitor not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a monitor

<a id="opIdupdateMonitor"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schedule": {
      "text": "every 15 minutes starting at :07"
    },
    "status": "active"
  }'
```

`PATCH /monitor/{monitorId}`

> Body parameter

```json
{
  "schedule": {
    "text": "every 15 minutes starting at :07"
  },
  "status": "active"
}
```

<h3 id="update-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitorId|path|string(uuid)|true|The monitor ID|
|body|body|[MonitorUpdateRequest](#schemamonitorupdaterequest)|true|none|
|» name|body|string|false|none|
|» schedule|body|[MonitorSchedule](#schemamonitorschedule)|false|Schedule for monitor checks. Provide either `cron` or `text`.|
|» webhook|body|[MonitorWebhook](#schemamonitorwebhook)|false|Webhook destination for monitor page and check completion events.|
|» notification|body|[MonitorNotification](#schemamonitornotification)|false|none|
|» targets|body|[[MonitorTarget](#schemamonitortarget)]|false|none|
|» retentionDays|body|integer|false|none|
|» goal|body|string \| null|false|Plain-language goal used to judge whether changed pages are meaningful. If provided and `judgeEnabled` is omitted, judging is enabled automatically. Required (non-empty) when any target is a `search` target, unless `judgeEnabled` is `false`.|
|» judgeEnabled|body|boolean|false|Whether to judge changed pages against `goal`. Requires a non-empty `goal` to run.|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|paused|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "status": "active",
    "schedule": {
      "cron": "string",
      "timezone": "string"
    },
    "nextRunAt": "1970-01-01T00:00:00Z",
    "lastRunAt": "1970-01-01T00:00:00Z",
    "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "targets": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "scrape",
        "urls": [
          "http://example.com"
        ],
        "scrapeOptions": {
          "formats": [
            "markdown"
          ],
          "onlyMainContent": true,
          "onlyCleanContent": false,
          "includeTags": [
            "string"
          ],
          "excludeTags": [
            "string"
          ],
          "maxAge": 172800000,
          "minAge": 0,
          "headers": {},
          "waitFor": 0,
          "mobile": false,
          "skipTlsVerification": true,
          "timeout": 60000,
          "parsers": [
            "pdf",
            "image"
          ],
          "actions": [
            {
              "type": "wait",
              "milliseconds": 1
            }
          ],
          "location": {
            "country": "US",
            "languages": [
              "en-US"
            ]
          },
          "removeBase64Images": true,
          "blockAds": true,
          "proxy": "auto",
          "storeInCache": true,
          "lockdown": false,
          "checkPromptInjection": false,
          "redactPII": false,
          "profile": {
            "name": "string",
            "saveChanges": true
          },
          "threatProtection": {
            "mode": "off",
            "riskScoreThreshold": 75,
            "blacklist": [
              "string"
            ],
            "whitelist": [
              "string"
            ],
            "blockedTlds": [
              "string"
            ],
            "failurePolicy": "open"
          },
          "auditMetadata": {
            "username": "string"
          }
        }
      }
    ],
    "webhook": {
      "url": "http://example.com",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "monitor.page"
      ]
    },
    "notification": {
      "email": {
        "enabled": false,
        "recipients": [
          "user@example.com"
        ],
        "includeDiffs": false
      }
    },
    "retentionDays": 0,
    "estimatedCreditsPerMonth": 0,
    "lastCheckSummary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "goal": "string",
    "judgeEnabled": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="update-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor updated|[MonitorResponse](#schemamonitorresponse)|
|404|Not Found|Monitor not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Run a monitor

<a id="opIdrunMonitor"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor/497f6eca-6276-4993-bfeb-53cbbbba6f08/run \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /monitor/{monitorId}/run`

<h3 id="run-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitorId|path|string(uuid)|true|The monitor ID|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "queued",
    "trigger": "scheduled",
    "scheduledFor": "1970-01-01T00:00:00Z",
    "startedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "estimatedCredits": 0,
    "reservedCredits": 0,
    "actualCredits": 0,
    "billingStatus": "string",
    "summary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "targetResults": [],
    "notificationStatus": {},
    "error": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="run-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor check queued|[MonitorRunResponse](#schemamonitorrunresponse)|
|409|Conflict|A monitor check is already running|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List monitor checks

<a id="opIdlistMonitorChecks"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor/497f6eca-6276-4993-bfeb-53cbbbba6f08/checks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /monitor/{monitorId}/checks`

<h3 id="list-monitor-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitorId|path|string(uuid)|true|The monitor ID|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|status|query|string|false|Filter checks by status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|running|
|status|completed|
|status|failed|
|status|partial|
|status|skipped_overlap|
|status|skipped_no_credits|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "queued",
      "trigger": "scheduled",
      "scheduledFor": "1970-01-01T00:00:00Z",
      "startedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "estimatedCredits": 0,
      "reservedCredits": 0,
      "actualCredits": 0,
      "billingStatus": "string",
      "summary": {
        "totalPages": 0,
        "same": 0,
        "changed": 0,
        "new": 0,
        "removed": 0,
        "error": 0
      },
      "targetResults": [],
      "notificationStatus": {},
      "error": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-monitor-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor checks|[MonitorCheckListResponse](#schemamonitorchecklistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a monitor check

<a id="opIdgetMonitorCheck"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/monitor/497f6eca-6276-4993-bfeb-53cbbbba6f08/checks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /monitor/{monitorId}/checks/{checkId}`

<h3 id="get-a-monitor-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|monitorId|path|string(uuid)|true|The monitor ID|
|checkId|path|string(uuid)|true|The monitor check ID|
|limit|query|integer|false|none|
|skip|query|integer|false|Number of page results to skip. Use the `next` URL from the previous response for pagination.|
|status|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|same|
|status|new|
|status|changed|
|status|removed|
|status|error|

> Example responses

> 200 Response

```json
{
  "success": true,
  "next": "string",
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "queued",
    "trigger": "scheduled",
    "scheduledFor": "1970-01-01T00:00:00Z",
    "startedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "estimatedCredits": 0,
    "reservedCredits": 0,
    "actualCredits": 0,
    "billingStatus": "string",
    "summary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "targetResults": [],
    "notificationStatus": {},
    "error": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "pages": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetId": "string",
        "url": "http://example.com",
        "status": "same",
        "previousScrapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "currentScrapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "statusCode": 0,
        "error": "string",
        "metadata": {},
        "judgment": {
          "meaningful": true,
          "confidence": "high",
          "reason": "string",
          "meaningfulChanges": [
            {
              "type": "added",
              "before": "string",
              "after": "string",
              "reason": "string"
            }
          ]
        },
        "diff": {
          "text": "string",
          "json": {}
        },
        "snapshot": {
          "json": {}
        },
        "createdAt": "1970-01-01T00:00:00Z"
      }
    ],
    "next": "string"
  }
}
```

<h3 id="get-a-monitor-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Monitor check details|[MonitorCheckDetailResponse](#schemamonitorcheckdetailresponse)|
|404|Not Found|Monitor check not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-scraping">Scraping</h1>

## Scrape a single URL and optionally extract information using an LLM

<a id="opIdscrapeAndExtractFromUrl"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/scrape \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://example.com",
    "formats": [
      "markdown"
    ]
  }'
```

`POST /scrape`

> Body parameter

```json
{
  "url": "https://example.com",
  "formats": [
    "markdown"
  ]
}
```

<h3 id="scrape-a-single-url-and-optionally-extract-information-using-an-llm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The URL to scrape|
|» formats|body|[Formats](#schemaformats)|false|Output formats to include in the response. You can specify one or more formats, either as strings (e.g., `'markdown'`) or as objects with additional options (e.g., `{ type: 'json', schema: {...} }`). Some formats require specific options to be set. Example: `['markdown', { type: 'json', schema: {...} }]`.|
|» onlyMainContent|body|boolean|false|Only return the main content of the page excluding headers, navs, footers, etc. This is a deterministic HTML-level filter applied before markdown is generated; no LLM is involved.|
|» onlyCleanContent|body|boolean|false|Beta. Run an additional LLM-based pass over the generated markdown to remove residual boilerplate that `onlyMainContent` can miss (cookie banners, ad blocks, social share widgets, breadcrumbs, newsletter signups, comment sections, related-article lists). Headings, lists, tables, code blocks, image references, and inline links are preserved. Can be combined with `onlyMainContent` (the most common setup) or used on its own. Skipped with a warning when the markdown exceeds the cleaning model's output token limit (the original markdown is preserved). Not supported on zero-data-retention requests.|
|» includeTags|body|[string]|false|Tags to include in the output.|
|» excludeTags|body|[string]|false|Tags to exclude from the output.|
|» maxAge|body|integer|false|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 2 days.|
|» minAge|body|integer|false|When set, the request only checks the cache and never triggers a fresh scrape. The value is in milliseconds and specifies the minimum age the cached data must be. If matching cached data exists, it is returned instantly. If no cached data is found, a 404 with error code SCRAPE_NO_CACHED_DATA is returned. Set to 1 to accept any cached data regardless of age.|
|» headers|body|object|false|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|» waitFor|body|integer|false|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load. This waiting time is in addition to Firecrawl's smart wait feature.|
|» mobile|body|boolean|false|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|» skipTlsVerification|body|boolean|false|Skip TLS certificate verification when making requests.|
|» timeout|body|integer|false|Timeout in milliseconds for the request. Minimum is 1000 (1 second). Default is 60000 (60 seconds). Maximum is 300000 (300 seconds).|
|» parsers|body|[string \| object]|false|Controls how files are processed during scraping. Each item is a parser name (`"pdf"` or `"image"`) or a parser object. Both parsers are on by default.<br><br> - **pdf**: PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page).<br> - **image**: Raster images (PNG, JPEG, JPEG 2000, TIFF, GIF, BMP, WebP, AVIF) are OCR'd as one-page documents and converted to markdown. SVG and HEIC are not supported.<br><br>If you pass a list, parsers that are not in the list are off. For example, `["pdf"]` turns off image OCR, so image URLs fail as unsupported files. When an empty array is passed, the PDF file is returned in base64 encoding with a flat rate of 1 credit for the entire PDF.|
|» » *oneOf*|body|string|false|Shorthand for a parser object with default options. `"pdf"` is the same as `{ "type": "pdf" }`.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » mode|body|string|false|PDF parsing mode. "fast": text-based extraction only (embedded text, fastest). "auto" (default): attempts fast extraction first, falls back to OCR if needed. "ocr": forces OCR parsing on every page.|
|» » maxPages|body|integer|false|Maximum number of pages to parse from the PDF. Must be a positive integer up to 10000.|
|» » pages|body|boolean|false|Include physical per-page markdown alongside the document markdown. Populates the `pages` field on the document as an array of { pageNumber, markdown }. No additional cost.|
|» » blocks|body|boolean|false|Include per-page typed layout blocks alongside the document markdown. Populates the `blocks` field on the document: typed blocks (title, section_header, text, table, formula, figure, caption, ...) with normalized bounding boxes, reading order, character-span links into the markdown, and per-block confidence. No additional cost.|
|» » pageMarkers|body|boolean|false|Annotate page breaks in the document markdown: pages are joined with `\n\n---\n\n<!-- page N -->\n\n`, where N is the 1-based physical page of the content that follows. Markers appear between pages only (no leading marker for page 1), and numbering may skip pages merged across a page break — use `pages: true` when every physical page is needed. No new response field; no additional cost.|
|» » *oneOf*|body|object|false|Image OCR parser. It has no options. The PDF options (`mode`, `maxPages`, `pages`, `blocks`, `pageMarkers`) do not apply to images.|
|» » type|body|string|true|none|
|» actions|body|[object]|false|Actions to perform on the page before grabbing the content|
|» » *oneOf*|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Wait for a specified amount of milliseconds|
|» » milliseconds|body|integer|true|Number of milliseconds to wait|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Wait for a specific element to appear|
|» » selector|body|string|true|CSS selector to wait for|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Take a screenshot. The links will be in the response's `actions.screenshots` array.|
|» » fullPage|body|boolean|false|Whether to capture a full-page screenshot (ignores viewport.height) or limit to the current viewport.|
|» » quality|body|integer|false|The quality of the screenshot, from 1 to 100. 100 is the highest quality.|
|» » viewport|body|object|false|none|
|» » » width|body|integer|true|The width of the viewport in pixels|
|» » » height|body|integer|true|The height of the viewport in pixels|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Click on an element|
|» » selector|body|string|true|Query selector to find the element by|
|» » all|body|boolean|false|Clicks all elements matched by the selector, not just the first one. Does not throw an error if no elements match the selector.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input.|
|» » text|body|string|true|Text to type|
|» » *oneOf*|body|object|false|Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes.|
|» » type|body|string|true|Press a key on the page|
|» » key|body|string|true|Key to press|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scroll the page or a specific element|
|» » direction|body|string|false|Direction to scroll|
|» » selector|body|string|false|Query selector for the element to scroll|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scrape the current page content, returns the url and the html.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Execute JavaScript code on the page|
|» » script|body|string|true|JavaScript code to execute|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Generate a PDF of the current page. The PDF will be returned in the `actions.pdfs` array of the response.|
|» » format|body|string|false|The page size of the resulting PDF|
|» » landscape|body|boolean|false|Whether to generate the PDF in landscape orientation|
|» » scale|body|number|false|The scale multiplier of the resulting PDF|
|» location|body|object|false|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|» » country|body|string|false|ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')|
|» » languages|body|[string]|false|Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language|
|» removeBase64Images|body|boolean|false|Removes all base 64 images from the markdown output, which may be overwhelmingly long. This does not affect html or rawHtml formats. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|» blockAds|body|boolean|false|Enables ad-blocking and cookie popup blocking.|
|» proxy|body|string|false|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.|
|» storeInCache|body|boolean|false|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (e.g. actions, headers) will force this parameter to be false.|
|» lockdown|body|boolean|false|If true, serves the request from Firecrawl's cache only and never makes an outbound request to the target URL. Designed for compliance-constrained or air-gapped environments where the scrape request itself could leak sensitive information. On cache miss, returns a 404 with error code SCRAPE_LOCKDOWN_CACHE_MISS (the URL is never logged on miss). Lockdown requests are treated as zero data retention. Default maxAge is extended to 2 years so existing cached pages remain eligible. Billed at 5 credits on hit, 1 credit on cache miss.|
|» checkPromptInjection|body|boolean|false|When enabled, scans the page content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. Works with any format except rawBase64. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the scrape continues with a warning and the check is not billed.|
|» redactPII|body|boolean \| [RedactPIIOptions](#schemaredactpiioptions)|false|Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[RedactPIIOptions](#schemaredactpiioptions)|false|Tuning options for PII redaction.|
|» profile|body|object|false|Enable persistent browser storage across scrape and interact sessions. Pass a profile when scraping to preserve cookies, localStorage, and session data. Sessions with the same profile name share browser state.|
|» » name|body|string|true|A name for the profile. Scrapes with the same name share browser state (cookies, localStorage, sessions).|
|» » saveChanges|body|boolean|false|When true, browser state is saved back to the profile when the interact session stops. Set to false to load existing data without writing. Only one saving session is allowed at a time.|
|» threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|
|» auditMetadata|body|[AuditMetadata](#schemaauditmetadata)|false|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|
|» zeroDataRetention|body|boolean|false|If true, this will enable zero data retention for this scrape. To enable this feature, please contact help@firecrawl.dev|
|» alexandria|body|[AlexandriaCall](#schemaalexandriacall) \| [[AlexandriaCall](#schemaalexandriacall)]|false|Execute one or more catalogued provider tools instead of scraping a URL. Cannot be combined with `url`, `formats`, or other scrape options (400); the only allowed sibling keys are `timeout`, `origin`, and `integration`. Use the `x-request-id` request header as a client-chosen idempotency key (1 to 128 characters of letters, digits, `.`, `_`, `:`, `-`) — it is echoed back, and a completed request with the same key replays its original response and `scrape_id` instead of re-executing. To browse the catalogue and read tool contracts for free, call Find Tools: set `provider` to `firecrawl`, `capability` to `find-tools`, and `options` to a `FindToolsOptions` object. The result `data` is a `FindToolsData` page.|
|» » *oneOf*|body|[AlexandriaCall](#schemaalexandriacall)|false|A single provider tool to execute from the Alexandria catalogue.|
|» » *oneOf*|body|[[AlexandriaCall](#schemaalexandriacall)]|false|none|
|» domainTools|body|boolean|false|When true on an ordinary URL scrape, `data.tools` lists tool contracts matched to the scraped page's domain (same `DiscoveredTool` shape as search). Requires the team's Alexandria access to be enabled and no zero data retention (403 otherwise). Free.|
|» toolDetail|body|string|false|How much of each tool contract to return in `data.tools` when `domainTools` is true. `compact` returns only `provider`, `capability`, and `description`. `summary` returns the full tool entry without `options` and `response`. `full` also returns `options`, `response`, and `examples`. If you omit it, tools are returned as with `summary`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|pdf|
|» » *oneOf*|image|
|» » type|pdf|
|» » mode|fast|
|» » mode|auto|
|» » mode|ocr|
|» » type|image|
|» » type|wait|
|» » type|wait|
|» » type|screenshot|
|» » type|click|
|» » type|write|
|» » type|press|
|» » type|scroll|
|» » direction|up|
|» » direction|down|
|» » type|scrape|
|» » type|executeJavascript|
|» » type|pdf|
|» » format|A0|
|» » format|A1|
|» » format|A2|
|» » format|A3|
|» » format|A4|
|» » format|A5|
|» » format|A6|
|» » format|Letter|
|» » format|Legal|
|» » format|Tabloid|
|» » format|Ledger|
|» proxy|basic|
|» proxy|enhanced|
|» proxy|auto|
|» toolDetail|compact|
|» toolDetail|summary|
|» toolDetail|full|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "markdown": "string",
    "pages": [
      {
        "pageNumber": 0,
        "markdown": "string"
      }
    ],
    "blocks": [
      {
        "pageNumber": 0,
        "width": 0,
        "height": 0,
        "status": "string",
        "items": [
          {
            "id": "string",
            "type": "string",
            "label": "string",
            "bbox": [
              0,
              0,
              0,
              0
            ],
            "content": "string",
            "markdownSpan": [
              0,
              0
            ],
            "readingOrder": 0,
            "source": "string",
            "confidence": {
              "layout": 0,
              "ocr": 0
            }
          }
        ]
      }
    ],
    "summary": "string",
    "html": "string",
    "rawHtml": "string",
    "rawBase64": "string",
    "screenshot": "string",
    "audio": "string",
    "video": "string",
    "answer": "string",
    "highlights": "string",
    "links": [
      "string"
    ],
    "attributes": [
      {
        "selector": "string",
        "attribute": "string",
        "values": [
          "string"
        ]
      }
    ],
    "actions": {
      "screenshots": [
        "http://example.com"
      ],
      "scrapes": [
        {
          "url": "string",
          "html": "string"
        }
      ],
      "javascriptReturns": [
        {
          "type": "string",
          "value": null
        }
      ],
      "pdfs": [
        "string"
      ]
    },
    "metadata": {
      "title": "string",
      "description": "string",
      "language": "string",
      "sourceURL": "http://example.com",
      "url": "http://example.com",
      "keywords": "string",
      "ogLocaleAlternate": [
        "string"
      ],
      "<any other metadata> ": "string",
      "statusCode": 0,
      "numPages": 0,
      "totalPages": 0,
      "contentType": "string",
      "error": "string",
      "concurrencyLimited": true,
      "concurrencyQueueDurationMs": 0,
      "provider": {
        "id": "string",
        "creditsCost": 0,
        "steps": [
          {
            "provider": "string",
            "status": "matched",
            "creditsCost": 0
          }
        ]
      }
    },
    "warning": "string",
    "changeTracking": {
      "previousScrapeAt": "1970-01-01T00:00:00Z",
      "changeStatus": "new",
      "visibility": "visible",
      "diff": "string",
      "json": {}
    },
    "branding": {
      "colorScheme": "light",
      "logo": "string",
      "colors": {
        "primary": "string",
        "secondary": "string",
        "accent": "string",
        "background": "string",
        "textPrimary": "string",
        "textSecondary": "string",
        "link": "string",
        "success": "string",
        "warning": "string",
        "error": "string"
      },
      "fonts": [
        {
          "family": "string"
        }
      ],
      "typography": {
        "fontFamilies": {
          "primary": "string",
          "heading": "string",
          "code": "string"
        },
        "fontSizes": {
          "h1": "string",
          "h2": "string",
          "h3": "string",
          "body": "string"
        },
        "fontWeights": {
          "light": 0,
          "regular": 0,
          "medium": 0,
          "bold": 0
        },
        "lineHeights": {
          "heading": "string",
          "body": "string"
        }
      },
      "spacing": {
        "baseUnit": 0,
        "borderRadius": "string",
        "padding": {},
        "margins": {}
      },
      "components": {
        "buttonPrimary": {
          "background": "string",
          "textColor": "string",
          "borderRadius": "string"
        },
        "buttonSecondary": {
          "background": "string",
          "textColor": "string",
          "borderColor": "string",
          "borderRadius": "string"
        },
        "input": {}
      },
      "icons": {},
      "images": {
        "logo": "string",
        "favicon": "string",
        "ogImage": "string"
      },
      "animations": {},
      "layout": {},
      "personality": {}
    },
    "product": {
      "title": "string",
      "brand": "string",
      "category": "string",
      "url": "string",
      "description": "string",
      "variants": [
        {
          "id": "string",
          "sku": "string",
          "title": "string",
          "values": {
            "property1": "string",
            "property2": "string"
          },
          "price": {
            "amount": 0,
            "currency": "string",
            "formatted": "string"
          },
          "sale": {
            "originalPrice": {
              "amount": 0,
              "currency": "string",
              "formatted": "string"
            }
          },
          "availability": {
            "inStock": true,
            "text": "string"
          },
          "images": [
            {
              "url": "string",
              "alt": "string"
            }
          ]
        }
      ]
    },
    "menu": {
      "isMenu": true,
      "confidence": 0,
      "merchant": {
        "name": "string",
        "type": "string"
      },
      "currency": "string",
      "sections": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "items": [
            {
              "id": "string",
              "name": "string",
              "description": "string",
              "images": [
                {
                  "url": "string",
                  "alt": "string"
                }
              ],
              "price": {
                "amount": 0,
                "currency": "string",
                "formatted": "string"
              },
              "availability": {
                "inStock": true,
                "text": "string"
              },
              "dietary": [
                "string"
              ],
              "calories": 0,
              "optionGroups": [
                {}
              ],
              "identifiers": {
                "merchantItemId": "string"
              },
              "url": "string",
              "sourceUrl": "string"
            }
          ]
        }
      ],
      "sourceUrl": "string"
    },
    "tools": [
      {
        "id": "string",
        "provider": "string",
        "capability": "string",
        "name": "string",
        "description": "string",
        "creditsCost": 0,
        "perRecord": true,
        "options": [
          {
            "name": "string",
            "type": "string"
          }
        ],
        "response": {
          "about": "string",
          "key": "string",
          "fields": [
            {}
          ]
        },
        "matchedBy": [
          "semantic"
        ],
        "matchedUrls": [
          "string"
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Bad request. `alexandria` cannot be combined with `url`, `formats`, or other scrape options, and only recognizes `provider`, `capability`, and `options`.",
  "code": "string",
  "chargeId": "string"
}
```

> 402 Response

```json
{
  "success": false,
  "error": "Payment required to access this resource.",
  "code": "insufficient_credits",
  "chargeId": "string"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "string",
  "code": "THIRD_PARTY_DATA_TERMS_REQUIRED",
  "requiresAction": {
    "type": "accept_terms",
    "terms": "string",
    "version": "string",
    "url": "http://example.com"
  },
  "chargeId": "string"
}
```

> 404 Response

```json
{
  "success": false,
  "error": "string",
  "code": "unknown_provider",
  "chargeId": "string"
}
```

> 409 Response

```json
{
  "success": false,
  "error": "string",
  "code": "duplicate_request",
  "chargeId": "string"
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "success": false,
  "code": "UNKNOWN_ERROR",
  "error": "An unexpected error occurred on the server."
}
```

> 503 Response

```json
{
  "success": false,
  "error": "string",
  "code": "request_unresolved",
  "chargeId": "string"
}
```

<h3 id="scrape-a-single-url-and-optionally-extract-information-using-an-llm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad request|Inline|
|402|Payment Required|Payment required. Also returned as `insufficient_credits` when the team lacks the credits to execute an `alexandria` request; in that case nothing is executed.|Inline|
|403|Forbidden|Forbidden. Returned when `alexandria` execution or `domainTools` is not enabled for the team, when zero data retention is active, or when third-party data terms have not been accepted (`THIRD_PARTY_DATA_TERMS_REQUIRED`, which includes `requiresAction`).|Inline|
|404|Not Found|Not found. Returned as `unknown_provider` when an `alexandria` call references a provider or capability that does not exist; nothing is executed.|Inline|
|409|Conflict|Conflict. Returned as `duplicate_request` or `request_in_flight` when the same `x-request-id` is reused while the original request is still being processed or was already completed with different parameters.|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|
|503|Service Unavailable|Service unavailable. Returned as `request_unresolved` when the outcome of an in-flight `alexandria` request with this `x-request-id` could not be determined — keep the same `x-request-id` and retry rather than issuing a new request. Also returned as `billing_unavailable` when credits could not be charged.|Inline|

<h3 id="scrape-a-single-url-and-optionally-extract-information-using-an-llm-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ScrapeResponse](#schemascraperesponse)|false|none|none|
|*oneOf*|[AlexandriaScrapeResponse](#schemaalexandriascraperesponse)|false|none|Response returned when the request executed Alexandria provider tools instead of scraping a URL.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|code|string|false|none|none|
|chargeId|string|false|none|none|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|code|string|false|none|none|
|chargeId|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|code|string|false|none|none|
|requiresAction|object|false|none|Present with `THIRD_PARTY_DATA_TERMS_REQUIRED`. Tells you which provider terms an organization admin must accept before you retry this request.|
|» type|string|true|none|The action to take. Always `accept_terms`.|
|» terms|string|true|none|The provider whose terms must be accepted.|
|» version|string|true|none|The version of the provider's terms that must be accepted.|
|» url|string(uri)|true|none|The dashboard page where a human (an organization admin) accepts the terms. Send this URL to a person; do not accept the terms automatically.|
|chargeId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|accept_terms|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|code|string|false|none|none|
|chargeId|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|code|string|false|none|none|
|chargeId|string|false|none|The charge ID of the in-flight or original request.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|code|string|false|none|none|
|error|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|code|string|false|none|none|
|chargeId|string|false|none|The charge ID of the unresolved request. Reuse the same `x-request-id` to retry; do not create a new request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Interact with the browser session associated with a scrape job

<a id="opIdinteractWithScrapeBrowserSession"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08/interact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string",
    "language": "node",
    "timeout": 30,
    "origin": "string"
  }'
```

`POST /scrape/{jobId}/interact`

> Body parameter

```json
{
  "code": "string",
  "language": "node",
  "timeout": 30,
  "origin": "string"
}
```

<h3 id="interact-with-the-browser-session-associated-with-a-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|The scrape job ID|
|body|body|object|true|none|
|» code|body|string|true|Code to execute in the scrape-bound browser sandbox|
|» language|body|string|false|Language of the code to execute. Use `node` for JavaScript or `bash` for agent-browser CLI commands.|
|» timeout|body|integer|false|Execution timeout in seconds|
|» origin|body|string|false|Optional origin label used for execution telemetry|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|python|
|» language|node|
|» language|bash|

> Example responses

> 200 Response

```json
{
  "success": true,
  "cdpUrl": "string",
  "liveViewUrl": "string",
  "interactiveLiveViewUrl": "string",
  "output": "string",
  "stdout": "string",
  "result": "string",
  "stderr": "string",
  "exitCode": 0,
  "killed": true,
  "error": "string"
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid job ID format."
}
```

> 402 Response

```json
{
  "success": false,
  "error": "Payment required to access this resource."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Forbidden."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Job not found."
}
```

> 409 Response

```json
{
  "success": false,
  "error": "Replay context is unavailable for this scrape job. Please rerun the scrape."
}
```

> 410 Response

```json
{
  "success": false,
  "error": "Browser session has been destroyed."
}
```

> 429 Response

```json
{
  "success": false,
  "error": "You have reached the maximum number of active browser sessions."
}
```

> 502 Response

```json
{
  "success": false,
  "error": "Failed to execute code in browser session."
}
```

<h3 id="interact-with-the-browser-session-associated-with-a-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Code executed successfully|Inline|
|400|Bad Request|Invalid job ID|Inline|
|402|Payment Required|Payment required|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Scrape job not found|Inline|
|409|Conflict|Scrape replay context is unavailable or session could not be initialized|Inline|
|410|Gone|Scrape browser session has already been destroyed|Inline|
|429|Too Many Requests|Too many active browser sessions|Inline|
|502|Bad Gateway|Failed to communicate with browser service|Inline|

<h3 id="interact-with-the-browser-session-associated-with-a-scrape-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|cdpUrl|string \| null|false|none|Raw Chrome DevTools Protocol (CDP) WebSocket URL for the browser session. Use it to connect directly with Playwright, Puppeteer, or any CDP client.|
|liveViewUrl|string \| null|false|none|Read-only live view URL for the browser session|
|interactiveLiveViewUrl|string \| null|false|none|Interactive live view URL (viewers can control the browser)|
|output|string \| null|false|none|AI agent's final response (only present when using prompt)|
|stdout|string \| null|false|none|Standard output from the code execution|
|result|string \| null|false|none|Standard output (alias for stdout)|
|stderr|string \| null|false|none|Standard error output from the code execution|
|exitCode|integer \| null|false|none|Exit code of the executed process|
|killed|boolean|false|none|Whether the process was killed due to timeout|
|error|string \| null|false|none|Error message if the code raised an exception|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **410**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Stop the interactive browser session associated with a scrape job

<a id="opIdstopInteractiveScrapeBrowserSession"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08/interact \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scrape/{jobId}/interact`

<h3 id="stop-the-interactive-browser-session-associated-with-a-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|The scrape job ID|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Forbidden."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Browser session not found."
}
```

<h3 id="stop-the-interactive-browser-session-associated-with-a-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Interactive scrape browser session stopped successfully|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Interactive scrape browser session not found|Inline|

<h3 id="stop-the-interactive-browser-session-associated-with-a-scrape-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload and parse a file

<a id="opIdparseFile"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/parse \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file' \
  -F 'options={"formats":["markdown"],"onlyMainContent":true,"includeTags":["string"],"excludeTags":["string"],"headers":{},"timeout":30000,"parsers":["pdf"],"skipTlsVerification":true,"removeBase64Images":true,"blockAds":true,"checkPromptInjection":false,"redactPII":false,"proxy":"basic","origin":"api","integration":"string","auditMetadata":{"username":"string"},"zeroDataRetention":false}'
```

`POST /parse`

> Body parameter

```yaml
file: string
options:
  formats:
    - markdown
  onlyMainContent: true
  includeTags:
    - string
  excludeTags:
    - string
  headers: {}
  timeout: 30000
  parsers:
    - pdf
  skipTlsVerification: true
  removeBase64Images: true
  blockAds: true
  checkPromptInjection: false
  redactPII: false
  proxy: basic
  origin: api
  integration: string
  auditMetadata:
    username: string
  zeroDataRetention: false
```

<h3 id="upload-and-parse-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The file bytes to parse. Supported extensions: .html, .htm, .xhtml, .pdf, .docx, .doc, .docm, .odt, .ods, .odp, .rtf, .xlsx, .xls, .xlsm, .xlsb, .pptx, .ppt, .pptm, .epub, .csv.|
|» options|body|[ParseOptions](#schemaparseoptions)|false|Optional parse options sent as JSON in the multipart `options` field.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "markdown": "string",
    "pages": [
      {
        "pageNumber": 0,
        "markdown": "string"
      }
    ],
    "blocks": [
      {
        "pageNumber": 0,
        "width": 0,
        "height": 0,
        "status": "string",
        "items": [
          {
            "id": "string",
            "type": "string",
            "label": "string",
            "bbox": [
              0,
              0,
              0,
              0
            ],
            "content": "string",
            "markdownSpan": [
              0,
              0
            ],
            "readingOrder": 0,
            "source": "string",
            "confidence": {
              "layout": 0,
              "ocr": 0
            }
          }
        ]
      }
    ],
    "summary": "string",
    "html": "string",
    "rawHtml": "string",
    "rawBase64": "string",
    "screenshot": "string",
    "audio": "string",
    "video": "string",
    "answer": "string",
    "highlights": "string",
    "links": [
      "string"
    ],
    "attributes": [
      {
        "selector": "string",
        "attribute": "string",
        "values": [
          "string"
        ]
      }
    ],
    "actions": {
      "screenshots": [
        "http://example.com"
      ],
      "scrapes": [
        {
          "url": "string",
          "html": "string"
        }
      ],
      "javascriptReturns": [
        {
          "type": "string",
          "value": null
        }
      ],
      "pdfs": [
        "string"
      ]
    },
    "metadata": {
      "title": "string",
      "description": "string",
      "language": "string",
      "sourceURL": "http://example.com",
      "url": "http://example.com",
      "keywords": "string",
      "ogLocaleAlternate": [
        "string"
      ],
      "<any other metadata> ": "string",
      "statusCode": 0,
      "numPages": 0,
      "totalPages": 0,
      "contentType": "string",
      "error": "string",
      "concurrencyLimited": true,
      "concurrencyQueueDurationMs": 0,
      "provider": {
        "id": "string",
        "creditsCost": 0,
        "steps": [
          {
            "provider": "string",
            "status": "matched",
            "creditsCost": 0
          }
        ]
      }
    },
    "warning": "string",
    "changeTracking": {
      "previousScrapeAt": "1970-01-01T00:00:00Z",
      "changeStatus": "new",
      "visibility": "visible",
      "diff": "string",
      "json": {}
    },
    "branding": {
      "colorScheme": "light",
      "logo": "string",
      "colors": {
        "primary": "string",
        "secondary": "string",
        "accent": "string",
        "background": "string",
        "textPrimary": "string",
        "textSecondary": "string",
        "link": "string",
        "success": "string",
        "warning": "string",
        "error": "string"
      },
      "fonts": [
        {
          "family": "string"
        }
      ],
      "typography": {
        "fontFamilies": {
          "primary": "string",
          "heading": "string",
          "code": "string"
        },
        "fontSizes": {
          "h1": "string",
          "h2": "string",
          "h3": "string",
          "body": "string"
        },
        "fontWeights": {
          "light": 0,
          "regular": 0,
          "medium": 0,
          "bold": 0
        },
        "lineHeights": {
          "heading": "string",
          "body": "string"
        }
      },
      "spacing": {
        "baseUnit": 0,
        "borderRadius": "string",
        "padding": {},
        "margins": {}
      },
      "components": {
        "buttonPrimary": {
          "background": "string",
          "textColor": "string",
          "borderRadius": "string"
        },
        "buttonSecondary": {
          "background": "string",
          "textColor": "string",
          "borderColor": "string",
          "borderRadius": "string"
        },
        "input": {}
      },
      "icons": {},
      "images": {
        "logo": "string",
        "favicon": "string",
        "ogImage": "string"
      },
      "animations": {},
      "layout": {},
      "personality": {}
    },
    "product": {
      "title": "string",
      "brand": "string",
      "category": "string",
      "url": "string",
      "description": "string",
      "variants": [
        {
          "id": "string",
          "sku": "string",
          "title": "string",
          "values": {
            "property1": "string",
            "property2": "string"
          },
          "price": {
            "amount": 0,
            "currency": "string",
            "formatted": "string"
          },
          "sale": {
            "originalPrice": {
              "amount": 0,
              "currency": "string",
              "formatted": "string"
            }
          },
          "availability": {
            "inStock": true,
            "text": "string"
          },
          "images": [
            {
              "url": "string",
              "alt": "string"
            }
          ]
        }
      ]
    },
    "menu": {
      "isMenu": true,
      "confidence": 0,
      "merchant": {
        "name": "string",
        "type": "string"
      },
      "currency": "string",
      "sections": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "items": [
            {
              "id": "string",
              "name": "string",
              "description": "string",
              "images": [
                {
                  "url": "string",
                  "alt": "string"
                }
              ],
              "price": {
                "amount": 0,
                "currency": "string",
                "formatted": "string"
              },
              "availability": {
                "inStock": true,
                "text": "string"
              },
              "dietary": [
                "string"
              ],
              "calories": 0,
              "optionGroups": [
                {}
              ],
              "identifiers": {
                "merchantItemId": "string"
              },
              "url": "string",
              "sourceUrl": "string"
            }
          ]
        }
      ],
      "sourceUrl": "string"
    },
    "tools": [
      {
        "id": "string",
        "provider": "string",
        "capability": "string",
        "name": "string",
        "description": "string",
        "creditsCost": 0,
        "perRecord": true,
        "options": [
          {
            "name": "string",
            "type": "string"
          }
        ],
        "response": {
          "about": "string",
          "key": "string",
          "fields": [
            {}
          ]
        },
        "matchedBy": [
          "semantic"
        ],
        "matchedUrls": [
          "string"
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "success": false,
  "code": "BAD_REQUEST",
  "error": "Invalid multipart form-data request."
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "success": false,
  "code": "UNKNOWN_ERROR",
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="upload-and-parse-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScrapeResponse](#schemascraperesponse)|
|400|Bad Request|Bad request|Inline|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="upload-and-parse-a-file-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|code|string|false|none|none|
|error|string|false|none|none|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|code|string|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List file formats supported by /parse

<a id="opIdgetParseFormats"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/parse/formats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /parse/formats`

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "formats": [
      {
        "format": "docx",
        "kind": "document",
        "extensions": [
          ".docx"
        ],
        "mimeTypes": [
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ],
        "available": true
      }
    ]
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "Unauthorized: Invalid token"
}
```

<h3 id="list-file-formats-supported-by-parse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Supported formats. Responses can be cached for up to an hour (`Cache-Control: private, max-age=3600`).|Inline|
|401|Unauthorized|Missing or invalid API key|Inline|

<h3 id="list-file-formats-supported-by-parse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» formats|[object]|false|none|none|
|» » format|string|false|none|Short name of the format, the canonical extension without the dot.|
|» » kind|string|false|none|Whether the format is parsed as a document or OCR'd as an image.|
|» » extensions|[string]|false|none|File extensions accepted for this format, canonical first.|
|» » mimeTypes|[string]|false|none|MIME types accepted for this format.|
|» » available|boolean|false|none|Whether `/parse` accepts this format for your requests right now. Always `true` for documents; image formats are `false` where image OCR is not enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » kind|document|
|» » kind|image|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Scrape multiple URLs and optionally extract information using an LLM

<a id="opIdscrapeAndExtractFromUrls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/batch/scrape \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "urls": [
      "http://example.com"
    ],
    "webhook": {
      "url": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "completed"
      ]
    },
    "maxConcurrency": 0,
    "ignoreInvalidURLs": true,
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "onlyCleanContent": false,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 172800000,
    "minAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": true,
    "timeout": 60000,
    "parsers": [
      "pdf",
      "image"
    ],
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "auto",
    "storeInCache": true,
    "lockdown": false,
    "checkPromptInjection": false,
    "redactPII": false,
    "profile": {
      "name": "string",
      "saveChanges": true
    },
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    },
    "auditMetadata": {
      "username": "string"
    },
    "zeroDataRetention": false
  }'
```

`POST /batch/scrape`

> Body parameter

```json
{
  "urls": [
    "http://example.com"
  ],
  "webhook": {
    "url": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "completed"
    ]
  },
  "maxConcurrency": 0,
  "ignoreInvalidURLs": true,
  "formats": [
    "markdown"
  ],
  "onlyMainContent": true,
  "onlyCleanContent": false,
  "includeTags": [
    "string"
  ],
  "excludeTags": [
    "string"
  ],
  "maxAge": 172800000,
  "minAge": 0,
  "headers": {},
  "waitFor": 0,
  "mobile": false,
  "skipTlsVerification": true,
  "timeout": 60000,
  "parsers": [
    "pdf",
    "image"
  ],
  "actions": [
    {
      "type": "wait",
      "milliseconds": 1
    }
  ],
  "location": {
    "country": "US",
    "languages": [
      "en-US"
    ]
  },
  "removeBase64Images": true,
  "blockAds": true,
  "proxy": "auto",
  "storeInCache": true,
  "lockdown": false,
  "checkPromptInjection": false,
  "redactPII": false,
  "profile": {
    "name": "string",
    "saveChanges": true
  },
  "threatProtection": {
    "mode": "off",
    "riskScoreThreshold": 75,
    "blacklist": [
      "string"
    ],
    "whitelist": [
      "string"
    ],
    "blockedTlds": [
      "string"
    ],
    "failurePolicy": "open"
  },
  "auditMetadata": {
    "username": "string"
  },
  "zeroDataRetention": false
}
```

<h3 id="scrape-multiple-urls-and-optionally-extract-information-using-an-llm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» urls|body|[string(uri)]|true|none|
|» webhook|body|object|false|A webhook specification object.|
|» » url|body|string|true|The URL to send the webhook to. This will trigger for batch scrape started (batch_scrape.started), every page scraped (batch_scrape.page) and when the batch scrape is completed (batch_scrape.completed or batch_scrape.failed). The response will be the same as the `/scrape` endpoint.|
|» » headers|body|object|false|Headers to send to the webhook URL.|
|» » » **additionalProperties**|body|string|false|none|
|» » metadata|body|object|false|Custom metadata that will be included in all webhook payloads for this crawl|
|» » events|body|[string]|false|Type of events that should be sent to the webhook URL. (default: all)|
|» maxConcurrency|body|integer|false|Maximum number of concurrent scrapes. This parameter allows you to set a concurrency limit for this batch scrape. If not specified, the batch scrape adheres to your team's concurrency limit.|
|» ignoreInvalidURLs|body|boolean|false|If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, a batch scrape using the remaining valid URLs will be created, and the invalid URLs will be returned in the invalidURLs field of the response.|
|» formats|body|[Formats](#schemaformats)|false|Output formats to include in the response. You can specify one or more formats, either as strings (e.g., `'markdown'`) or as objects with additional options (e.g., `{ type: 'json', schema: {...} }`). Some formats require specific options to be set. Example: `['markdown', { type: 'json', schema: {...} }]`.|
|» onlyMainContent|body|boolean|false|Only return the main content of the page excluding headers, navs, footers, etc. This is a deterministic HTML-level filter applied before markdown is generated; no LLM is involved.|
|» onlyCleanContent|body|boolean|false|Beta. Run an additional LLM-based pass over the generated markdown to remove residual boilerplate that `onlyMainContent` can miss (cookie banners, ad blocks, social share widgets, breadcrumbs, newsletter signups, comment sections, related-article lists). Headings, lists, tables, code blocks, image references, and inline links are preserved. Can be combined with `onlyMainContent` (the most common setup) or used on its own. Skipped with a warning when the markdown exceeds the cleaning model's output token limit (the original markdown is preserved). Not supported on zero-data-retention requests.|
|» includeTags|body|[string]|false|Tags to include in the output.|
|» excludeTags|body|[string]|false|Tags to exclude from the output.|
|» maxAge|body|integer|false|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 2 days.|
|» minAge|body|integer|false|When set, the request only checks the cache and never triggers a fresh scrape. The value is in milliseconds and specifies the minimum age the cached data must be. If matching cached data exists, it is returned instantly. If no cached data is found, a 404 with error code SCRAPE_NO_CACHED_DATA is returned. Set to 1 to accept any cached data regardless of age.|
|» headers|body|object|false|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|» waitFor|body|integer|false|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load. This waiting time is in addition to Firecrawl's smart wait feature.|
|» mobile|body|boolean|false|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|» skipTlsVerification|body|boolean|false|Skip TLS certificate verification when making requests.|
|» timeout|body|integer|false|Timeout in milliseconds for the request. Minimum is 1000 (1 second). Default is 60000 (60 seconds). Maximum is 300000 (300 seconds).|
|» parsers|body|[string \| object]|false|Controls how files are processed during scraping. Each item is a parser name (`"pdf"` or `"image"`) or a parser object. Both parsers are on by default.<br><br> - **pdf**: PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page).<br> - **image**: Raster images (PNG, JPEG, JPEG 2000, TIFF, GIF, BMP, WebP, AVIF) are OCR'd as one-page documents and converted to markdown. SVG and HEIC are not supported.<br><br>If you pass a list, parsers that are not in the list are off. For example, `["pdf"]` turns off image OCR, so image URLs fail as unsupported files. When an empty array is passed, the PDF file is returned in base64 encoding with a flat rate of 1 credit for the entire PDF.|
|» » *oneOf*|body|string|false|Shorthand for a parser object with default options. `"pdf"` is the same as `{ "type": "pdf" }`.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » mode|body|string|false|PDF parsing mode. "fast": text-based extraction only (embedded text, fastest). "auto" (default): attempts fast extraction first, falls back to OCR if needed. "ocr": forces OCR parsing on every page.|
|» » maxPages|body|integer|false|Maximum number of pages to parse from the PDF. Must be a positive integer up to 10000.|
|» » pages|body|boolean|false|Include physical per-page markdown alongside the document markdown. Populates the `pages` field on the document as an array of { pageNumber, markdown }. No additional cost.|
|» » blocks|body|boolean|false|Include per-page typed layout blocks alongside the document markdown. Populates the `blocks` field on the document: typed blocks (title, section_header, text, table, formula, figure, caption, ...) with normalized bounding boxes, reading order, character-span links into the markdown, and per-block confidence. No additional cost.|
|» » pageMarkers|body|boolean|false|Annotate page breaks in the document markdown: pages are joined with `\n\n---\n\n<!-- page N -->\n\n`, where N is the 1-based physical page of the content that follows. Markers appear between pages only (no leading marker for page 1), and numbering may skip pages merged across a page break — use `pages: true` when every physical page is needed. No new response field; no additional cost.|
|» » *oneOf*|body|object|false|Image OCR parser. It has no options. The PDF options (`mode`, `maxPages`, `pages`, `blocks`, `pageMarkers`) do not apply to images.|
|» » type|body|string|true|none|
|» actions|body|[object]|false|Actions to perform on the page before grabbing the content|
|» » *oneOf*|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Wait for a specified amount of milliseconds|
|» » milliseconds|body|integer|true|Number of milliseconds to wait|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Wait for a specific element to appear|
|» » selector|body|string|true|CSS selector to wait for|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Take a screenshot. The links will be in the response's `actions.screenshots` array.|
|» » fullPage|body|boolean|false|Whether to capture a full-page screenshot (ignores viewport.height) or limit to the current viewport.|
|» » quality|body|integer|false|The quality of the screenshot, from 1 to 100. 100 is the highest quality.|
|» » viewport|body|object|false|none|
|» » » width|body|integer|true|The width of the viewport in pixels|
|» » » height|body|integer|true|The height of the viewport in pixels|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Click on an element|
|» » selector|body|string|true|Query selector to find the element by|
|» » all|body|boolean|false|Clicks all elements matched by the selector, not just the first one. Does not throw an error if no elements match the selector.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input.|
|» » text|body|string|true|Text to type|
|» » *oneOf*|body|object|false|Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes.|
|» » type|body|string|true|Press a key on the page|
|» » key|body|string|true|Key to press|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scroll the page or a specific element|
|» » direction|body|string|false|Direction to scroll|
|» » selector|body|string|false|Query selector for the element to scroll|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Scrape the current page content, returns the url and the html.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Execute JavaScript code on the page|
|» » script|body|string|true|JavaScript code to execute|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|Generate a PDF of the current page. The PDF will be returned in the `actions.pdfs` array of the response.|
|» » format|body|string|false|The page size of the resulting PDF|
|» » landscape|body|boolean|false|Whether to generate the PDF in landscape orientation|
|» » scale|body|number|false|The scale multiplier of the resulting PDF|
|» location|body|object|false|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|» » country|body|string|false|ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')|
|» » languages|body|[string]|false|Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language|
|» removeBase64Images|body|boolean|false|Removes all base 64 images from the markdown output, which may be overwhelmingly long. This does not affect html or rawHtml formats. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|» blockAds|body|boolean|false|Enables ad-blocking and cookie popup blocking.|
|» proxy|body|string|false|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.|
|» storeInCache|body|boolean|false|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (e.g. actions, headers) will force this parameter to be false.|
|» lockdown|body|boolean|false|If true, serves the request from Firecrawl's cache only and never makes an outbound request to the target URL. Designed for compliance-constrained or air-gapped environments where the scrape request itself could leak sensitive information. On cache miss, returns a 404 with error code SCRAPE_LOCKDOWN_CACHE_MISS (the URL is never logged on miss). Lockdown requests are treated as zero data retention. Default maxAge is extended to 2 years so existing cached pages remain eligible. Billed at 5 credits on hit, 1 credit on cache miss.|
|» checkPromptInjection|body|boolean|false|When enabled, scans the page content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. Works with any format except rawBase64. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the scrape continues with a warning and the check is not billed.|
|» redactPII|body|boolean \| [RedactPIIOptions](#schemaredactpiioptions)|false|Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[RedactPIIOptions](#schemaredactpiioptions)|false|Tuning options for PII redaction.|
|» profile|body|object|false|Enable persistent browser storage across scrape and interact sessions. Pass a profile when scraping to preserve cookies, localStorage, and session data. Sessions with the same profile name share browser state.|
|» » name|body|string|true|A name for the profile. Scrapes with the same name share browser state (cookies, localStorage, sessions).|
|» » saveChanges|body|boolean|false|When true, browser state is saved back to the profile when the interact session stops. Set to false to load existing data without writing. Only one saving session is allowed at a time.|
|» threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|
|» auditMetadata|body|[AuditMetadata](#schemaauditmetadata)|false|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|
|» zeroDataRetention|body|boolean|false|If true, this will enable zero data retention for this batch scrape. To enable this feature, please contact help@firecrawl.dev|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » events|completed|
|» » events|page|
|» » events|failed|
|» » events|started|
|» » *oneOf*|pdf|
|» » *oneOf*|image|
|» » type|pdf|
|» » mode|fast|
|» » mode|auto|
|» » mode|ocr|
|» » type|image|
|» » type|wait|
|» » type|wait|
|» » type|screenshot|
|» » type|click|
|» » type|write|
|» » type|press|
|» » type|scroll|
|» » direction|up|
|» » direction|down|
|» » type|scrape|
|» » type|executeJavascript|
|» » type|pdf|
|» » format|A0|
|» » format|A1|
|» » format|A2|
|» » format|A3|
|» » format|A4|
|» » format|A5|
|» » format|A6|
|» » format|Letter|
|» » format|Legal|
|» » format|Tabloid|
|» » format|Ledger|
|» proxy|basic|
|» proxy|enhanced|
|» proxy|auto|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com",
  "invalidURLs": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="scrape-multiple-urls-and-optionally-extract-information-using-an-llm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchScrapeResponseObj](#schemabatchscraperesponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="scrape-multiple-urls-and-optionally-extract-information-using-an-llm-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status of a batch scrape job

<a id="opIdgetBatchScrapeStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/batch/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batch/scrape/{id}`

<h3 id="get-the-status-of-a-batch-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the batch scrape job|

> Example responses

> 200 Response

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "duration": 0,
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "pages": [
        {
          "pageNumber": 0,
          "markdown": "string"
        }
      ],
      "blocks": [
        {
          "pageNumber": 0,
          "width": 0,
          "height": 0,
          "status": "string",
          "items": [
            {
              "id": "string",
              "type": "string",
              "label": "string",
              "bbox": [
                0,
                0,
                0,
                0
              ],
              "content": "string",
              "markdownSpan": [
                0,
                0
              ],
              "readingOrder": 0,
              "source": "string",
              "confidence": {
                "layout": 0,
                "ocr": 0
              }
            }
          ]
        }
      ],
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "url": "http://example.com",
        "keywords": "string",
        "ogLocaleAlternate": [
          "string"
        ],
        "<any other metadata> ": "string",
        "statusCode": 0,
        "numPages": 0,
        "totalPages": 0,
        "error": "string",
        "concurrencyLimited": true,
        "concurrencyQueueDurationMs": 0
      }
    }
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-status-of-a-batch-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchScrapeStatusResponseObj](#schemabatchscrapestatusresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-status-of-a-batch-scrape-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a batch scrape job

<a id="opIdcancelBatchScrape"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/batch/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /batch/scrape/{id}`

<h3 id="cancel-a-batch-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the batch scrape job|

> Example responses

> 200 Response

```json
{
  "status": "cancelled"
}
```

> 404 Response

```json
{
  "error": "Batch scrape job not found."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="cancel-a-batch-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful cancellation|Inline|
|404|Not Found|Batch scrape job not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="cancel-a-batch-scrape-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the errors of a batch scrape job

<a id="opIdgetBatchScrapeErrors"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/batch/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08/errors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batch/scrape/{id}/errors`

<h3 id="get-the-errors-of-a-batch-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the batch scrape job|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "id": "string",
      "timestamp": "string",
      "url": "string",
      "error": "string"
    }
  ],
  "robotsBlocked": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-errors-of-a-batch-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlErrorsResponseObj](#schemacrawlerrorsresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-errors-of-a-batch-scrape-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status of a scrape job

<a id="opIdgetScrapeStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/scrape/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scrape/{jobId}`

<h3 id="get-the-status-of-a-scrape-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|The ID of the job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "markdown": "string",
    "pages": [
      {
        "pageNumber": 0,
        "markdown": "string"
      }
    ],
    "blocks": [
      {
        "pageNumber": 0,
        "width": 0,
        "height": 0,
        "status": "string",
        "items": [
          {
            "id": "string",
            "type": "string",
            "label": "string",
            "bbox": [
              0,
              0,
              0,
              0
            ],
            "content": "string",
            "markdownSpan": [
              0,
              0
            ],
            "readingOrder": 0,
            "source": "string",
            "confidence": {
              "layout": 0,
              "ocr": 0
            }
          }
        ]
      }
    ],
    "summary": "string",
    "html": "string",
    "rawHtml": "string",
    "rawBase64": "string",
    "screenshot": "string",
    "audio": "string",
    "video": "string",
    "answer": "string",
    "highlights": "string",
    "links": [
      "string"
    ],
    "attributes": [
      {
        "selector": "string",
        "attribute": "string",
        "values": [
          "string"
        ]
      }
    ],
    "actions": {
      "screenshots": [
        "http://example.com"
      ],
      "scrapes": [
        {
          "url": "string",
          "html": "string"
        }
      ],
      "javascriptReturns": [
        {
          "type": "string",
          "value": null
        }
      ],
      "pdfs": [
        "string"
      ]
    },
    "metadata": {
      "title": "string",
      "description": "string",
      "language": "string",
      "sourceURL": "http://example.com",
      "url": "http://example.com",
      "keywords": "string",
      "ogLocaleAlternate": [
        "string"
      ],
      "<any other metadata> ": "string",
      "statusCode": 0,
      "numPages": 0,
      "totalPages": 0,
      "contentType": "string",
      "error": "string",
      "concurrencyLimited": true,
      "concurrencyQueueDurationMs": 0,
      "provider": {
        "id": "string",
        "creditsCost": 0,
        "steps": [
          {
            "provider": "string",
            "status": "matched",
            "creditsCost": 0
          }
        ]
      }
    },
    "warning": "string",
    "changeTracking": {
      "previousScrapeAt": "1970-01-01T00:00:00Z",
      "changeStatus": "new",
      "visibility": "visible",
      "diff": "string",
      "json": {}
    },
    "branding": {
      "colorScheme": "light",
      "logo": "string",
      "colors": {
        "primary": "string",
        "secondary": "string",
        "accent": "string",
        "background": "string",
        "textPrimary": "string",
        "textSecondary": "string",
        "link": "string",
        "success": "string",
        "warning": "string",
        "error": "string"
      },
      "fonts": [
        {
          "family": "string"
        }
      ],
      "typography": {
        "fontFamilies": {
          "primary": "string",
          "heading": "string",
          "code": "string"
        },
        "fontSizes": {
          "h1": "string",
          "h2": "string",
          "h3": "string",
          "body": "string"
        },
        "fontWeights": {
          "light": 0,
          "regular": 0,
          "medium": 0,
          "bold": 0
        },
        "lineHeights": {
          "heading": "string",
          "body": "string"
        }
      },
      "spacing": {
        "baseUnit": 0,
        "borderRadius": "string",
        "padding": {},
        "margins": {}
      },
      "components": {
        "buttonPrimary": {
          "background": "string",
          "textColor": "string",
          "borderRadius": "string"
        },
        "buttonSecondary": {
          "background": "string",
          "textColor": "string",
          "borderColor": "string",
          "borderRadius": "string"
        },
        "input": {}
      },
      "icons": {},
      "images": {
        "logo": "string",
        "favicon": "string",
        "ogImage": "string"
      },
      "animations": {},
      "layout": {},
      "personality": {}
    },
    "product": {
      "title": "string",
      "brand": "string",
      "category": "string",
      "url": "string",
      "description": "string",
      "variants": [
        {
          "id": "string",
          "sku": "string",
          "title": "string",
          "values": {
            "property1": "string",
            "property2": "string"
          },
          "price": {
            "amount": 0,
            "currency": "string",
            "formatted": "string"
          },
          "sale": {
            "originalPrice": {
              "amount": 0,
              "currency": "string",
              "formatted": "string"
            }
          },
          "availability": {
            "inStock": true,
            "text": "string"
          },
          "images": [
            {
              "url": "string",
              "alt": "string"
            }
          ]
        }
      ]
    },
    "menu": {
      "isMenu": true,
      "confidence": 0,
      "merchant": {
        "name": "string",
        "type": "string"
      },
      "currency": "string",
      "sections": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "items": [
            {
              "id": "string",
              "name": "string",
              "description": "string",
              "images": [
                {
                  "url": "string",
                  "alt": "string"
                }
              ],
              "price": {
                "amount": 0,
                "currency": "string",
                "formatted": "string"
              },
              "availability": {
                "inStock": true,
                "text": "string"
              },
              "dietary": [
                "string"
              ],
              "calories": 0,
              "optionGroups": [
                {}
              ],
              "identifiers": {
                "merchantItemId": "string"
              },
              "url": "string",
              "sourceUrl": "string"
            }
          ]
        }
      ],
      "sourceUrl": "string"
    },
    "tools": [
      {
        "id": "string",
        "provider": "string",
        "capability": "string",
        "name": "string",
        "description": "string",
        "creditsCost": 0,
        "perRecord": true,
        "options": [
          {
            "name": "string",
            "type": "string"
          }
        ],
        "response": {
          "about": "string",
          "key": "string",
          "fields": [
            {}
          ]
        },
        "matchedBy": [
          "semantic"
        ],
        "matchedUrls": [
          "string"
        ]
      }
    ]
  }
}
```

> 402 Response

```json
{
  "success": false,
  "error": "string"
}
```

> 429 Response

```json
{
  "success": false,
  "error": "string"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "string"
}
```

<h3 id="get-the-status-of-a-scrape-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scrape job status|[ScrapeResponse](#schemascraperesponse)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-status-of-a-scrape-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-crawling">Crawling</h1>

## Get the status of a crawl job

<a id="opIdgetCrawlStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/crawl/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crawl/{id}`

<h3 id="get-the-status-of-a-crawl-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the crawl job|

> Example responses

> 200 Response

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "duration": 0,
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "pages": [
        {
          "pageNumber": 0,
          "markdown": "string"
        }
      ],
      "blocks": [
        {
          "pageNumber": 0,
          "width": 0,
          "height": 0,
          "status": "string",
          "items": [
            {
              "id": "string",
              "type": "string",
              "label": "string",
              "bbox": [
                0,
                0,
                0,
                0
              ],
              "content": "string",
              "markdownSpan": [
                0,
                0
              ],
              "readingOrder": 0,
              "source": "string",
              "confidence": {
                "layout": 0,
                "ocr": 0
              }
            }
          ]
        }
      ],
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "url": "http://example.com",
        "keywords": "string",
        "ogLocaleAlternate": [
          "string"
        ],
        "<any other metadata> ": "string",
        "statusCode": 0,
        "numPages": 0,
        "totalPages": 0,
        "error": "string",
        "concurrencyLimited": true,
        "concurrencyQueueDurationMs": 0
      }
    }
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-status-of-a-crawl-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlStatusResponseObj](#schemacrawlstatusresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-status-of-a-crawl-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a crawl job

<a id="opIdcancelCrawl"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/crawl/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crawl/{id}`

<h3 id="cancel-a-crawl-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the crawl job|

> Example responses

> 200 Response

```json
{
  "status": "cancelled"
}
```

> 404 Response

```json
{
  "error": "Crawl job not found."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="cancel-a-crawl-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful cancellation|Inline|
|404|Not Found|Crawl job not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="cancel-a-crawl-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the errors of a crawl job

<a id="opIdgetCrawlErrors"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/crawl/497f6eca-6276-4993-bfeb-53cbbbba6f08/errors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crawl/{id}/errors`

<h3 id="get-the-errors-of-a-crawl-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the crawl job|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "id": "string",
      "timestamp": "string",
      "url": "string",
      "error": "string"
    }
  ],
  "robotsBlocked": [
    "string"
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-the-errors-of-a-crawl-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlErrorsResponseObj](#schemacrawlerrorsresponseobj)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-the-errors-of-a-crawl-job-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Crawl multiple URLs based on options

<a id="opIdcrawlUrls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/crawl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "prompt": "string",
    "excludePaths": [
      "string"
    ],
    "includePaths": [
      "string"
    ],
    "maxDiscoveryDepth": 0,
    "sitemap": "include",
    "ignoreQueryParameters": false,
    "regexOnFullURL": false,
    "limit": 10000,
    "crawlEntireDomain": false,
    "allowExternalLinks": false,
    "allowSubdomains": false,
    "ignoreRobotsTxt": false,
    "robotsUserAgent": "string",
    "delay": 0,
    "maxConcurrency": 0,
    "webhook": {
      "url": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "completed"
      ]
    },
    "scrapeOptions": {
      "formats": [
        "markdown"
      ],
      "onlyMainContent": true,
      "onlyCleanContent": false,
      "includeTags": [
        "string"
      ],
      "excludeTags": [
        "string"
      ],
      "maxAge": 172800000,
      "minAge": 0,
      "headers": {},
      "waitFor": 0,
      "mobile": false,
      "skipTlsVerification": true,
      "timeout": 60000,
      "parsers": [
        "pdf",
        "image"
      ],
      "actions": [
        {
          "type": "wait",
          "milliseconds": 1
        }
      ],
      "location": {
        "country": "US",
        "languages": [
          "en-US"
        ]
      },
      "removeBase64Images": true,
      "blockAds": true,
      "proxy": "auto",
      "storeInCache": true,
      "lockdown": false,
      "checkPromptInjection": false,
      "redactPII": false,
      "profile": {
        "name": "string",
        "saveChanges": true
      },
      "threatProtection": {
        "mode": "off",
        "riskScoreThreshold": 75,
        "blacklist": [
          "string"
        ],
        "whitelist": [
          "string"
        ],
        "blockedTlds": [
          "string"
        ],
        "failurePolicy": "open"
      },
      "auditMetadata": {
        "username": "string"
      }
    },
    "zeroDataRetention": false
  }'
```

`POST /crawl`

> Body parameter

```json
{
  "url": "http://example.com",
  "prompt": "string",
  "excludePaths": [
    "string"
  ],
  "includePaths": [
    "string"
  ],
  "maxDiscoveryDepth": 0,
  "sitemap": "include",
  "ignoreQueryParameters": false,
  "regexOnFullURL": false,
  "limit": 10000,
  "crawlEntireDomain": false,
  "allowExternalLinks": false,
  "allowSubdomains": false,
  "ignoreRobotsTxt": false,
  "robotsUserAgent": "string",
  "delay": 0,
  "maxConcurrency": 0,
  "webhook": {
    "url": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "completed"
    ]
  },
  "scrapeOptions": {
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "onlyCleanContent": false,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 172800000,
    "minAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": true,
    "timeout": 60000,
    "parsers": [
      "pdf",
      "image"
    ],
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "auto",
    "storeInCache": true,
    "lockdown": false,
    "checkPromptInjection": false,
    "redactPII": false,
    "profile": {
      "name": "string",
      "saveChanges": true
    },
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    },
    "auditMetadata": {
      "username": "string"
    }
  },
  "zeroDataRetention": false
}
```

<h3 id="crawl-multiple-urls-based-on-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The base URL to start crawling from|
|» prompt|body|string|false|A prompt to use to generate the crawler options (all the parameters below) from natural language. Explicitly set parameters will override the generated equivalents.|
|» excludePaths|body|[string]|false|URL pathname regex patterns that exclude matching URLs from the crawl. For example, if you set "excludePaths": ["blog/.*"] for the base URL firecrawl.dev, any results matching that pattern will be excluded, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap. Patterns use Rust regex (RE2-style) syntax: look-around and backreferences are not supported, and a pattern that does not compile is rejected with a 400. Each field accepts at most 1000 patterns of at most 2000 characters each, and includePaths and excludePaths together may contain at most 1000 patterns and 100,000 characters in total. For keyword-style filtering, send one short pattern per term rather than combining terms into a single long alternation.|
|» includePaths|body|[string]|false|URL pathname regex patterns that include matching URLs in the crawl. Only the paths that match the specified patterns will be included in the response. Note: the starting URL is also checked against these patterns — if it does not match, the crawl may return 0 pages. For example, if you set "includePaths": ["blog/.*"] for the base URL firecrawl.dev/blog, only pages under /blog/ will be included in the results, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap. Patterns use Rust regex (RE2-style) syntax: look-around and backreferences are not supported, and a pattern that does not compile is rejected with a 400. Each field accepts at most 1000 patterns of at most 2000 characters each, and includePaths and excludePaths together may contain at most 1000 patterns and 100,000 characters in total. For keyword-style filtering, send one short pattern per term rather than combining terms into a single long alternation.|
|» maxDiscoveryDepth|body|integer|false|Maximum depth to crawl based on discovery order. The root site and sitemapped pages has a discovery depth of 0. For example, if you set it to 1, and you set `sitemap: 'skip'`, you will only crawl the entered URL and all URLs that are linked on that page.|
|» sitemap|body|string|false|Sitemap mode when crawling. If you set it to 'skip', the crawler will ignore the website sitemap and only crawl the entered URL and discover pages from there onwards. If you set it to 'only', the crawler will only crawl URLs from the sitemap (plus the start URL) and will not discover links from HTML.|
|» ignoreQueryParameters|body|boolean|false|Do not re-scrape the same path with different (or none) query parameters|
|» regexOnFullURL|body|boolean|false|When true, includePaths and excludePaths regex patterns are matched against the full URL (including query parameters) instead of just the URL pathname. Useful when you need to filter URLs based on query strings.|
|» limit|body|integer|false|Maximum number of pages to crawl. Default limit is 10000.|
|» crawlEntireDomain|body|boolean|false|Allows the crawler to follow internal links to sibling or parent URLs, not just child paths.<br><br>false: Only crawls deeper (child) URLs.<br>→ e.g. /features/feature-1 → /features/feature-1/tips ✅<br>→ Won't follow /pricing or / ❌<br><br>true: Crawls any internal links, including siblings and parents.<br>→ e.g. /features/feature-1 → /pricing, /, etc. ✅<br><br>Use true for broader internal coverage beyond nested paths.|
|» allowExternalLinks|body|boolean|false|Allows the crawler to follow links to external websites. External links are followed one hop (the links found on those external pages are not crawled). Links pointing to an external site's homepage (a root URL with no path) are skipped and reported in Get Crawl Errors with the code EXTERNAL_LINK; redirects to an external homepage are skipped for the same reason.|
|» allowSubdomains|body|boolean|false|Allows the crawler to follow links to subdomains of the main domain.|
|» ignoreRobotsTxt|body|boolean|false|Ignore the website's robots.txt rules. Enterprise only — contact support@firecrawl.com to enable.|
|» robotsUserAgent|body|string|false|Custom User-Agent string for robots.txt evaluation. When set, robots.txt is fetched with this User-Agent and allow/disallow rules are matched against it instead of the default. Enterprise only — contact support@firecrawl.com to enable.|
|» delay|body|number|false|Delay in seconds between scrapes. This helps respect website rate limits. Setting this forces concurrency to 1.|
|» maxConcurrency|body|integer|false|Maximum number of concurrent scrapes. This parameter allows you to set a concurrency limit for this crawl. If not specified, the crawl adheres to your team's concurrency limit.|
|» webhook|body|object|false|A webhook specification object.|
|» » url|body|string|true|The URL to send the webhook to. This will trigger for crawl started (crawl.started), every page crawled (crawl.page) and when the crawl is completed (crawl.completed or crawl.failed). The response will be the same as the `/scrape` endpoint.|
|» » headers|body|object|false|Headers to send to the webhook URL.|
|» » » **additionalProperties**|body|string|false|none|
|» » metadata|body|object|false|Custom metadata that will be included in all webhook payloads for this crawl|
|» » events|body|[string]|false|Type of events that should be sent to the webhook URL. (default: all)|
|» scrapeOptions|body|[ScrapeOptions](#schemascrapeoptions)|false|none|
|» zeroDataRetention|body|boolean|false|If true, this will enable zero data retention for this crawl. To enable this feature, please contact help@firecrawl.dev|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sitemap|skip|
|» sitemap|include|
|» sitemap|only|
|» » events|completed|
|» » events|page|
|» » events|failed|
|» » events|started|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com"
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="crawl-multiple-urls-based-on-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CrawlResponse](#schemacrawlresponse)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="crawl-multiple-urls-based-on-options-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Preview crawl parameters generated from natural language prompt

<a id="opIdcrawlParamsPreview"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/crawl/params-preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "prompt": "string"
  }'
```

`POST /crawl/params-preview`

> Body parameter

```json
{
  "url": "http://example.com",
  "prompt": "string"
}
```

<h3 id="preview-crawl-parameters-generated-from-natural-language-prompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The URL to crawl|
|» prompt|body|string|true|Natural language prompt describing what you want to crawl|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "url": "http://example.com",
    "includePaths": [
      "string"
    ],
    "excludePaths": [
      "string"
    ],
    "maxDepth": 0,
    "maxDiscoveryDepth": 0,
    "crawlEntireDomain": true,
    "allowExternalLinks": true,
    "allowSubdomains": true,
    "sitemap": "skip",
    "ignoreQueryParameters": true,
    "ignoreRobotsTxt": true,
    "robotsUserAgent": "string",
    "deduplicateSimilarURLs": true,
    "delay": 0,
    "limit": 0
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid request parameters"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "Unauthorized"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Failed to process natural language prompt"
}
```

<h3 id="preview-crawl-parameters-generated-from-natural-language-prompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with generated crawl parameters|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="preview-crawl-parameters-generated-from-natural-language-prompt-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» url|string(uri)|false|none|The URL to crawl|
|» includePaths|[string]|false|none|URL patterns to include|
|» excludePaths|[string]|false|none|URL patterns to exclude|
|» maxDepth|integer|false|none|Maximum crawl depth|
|» maxDiscoveryDepth|integer|false|none|Maximum discovery depth|
|» crawlEntireDomain|boolean|false|none|Whether to crawl the entire domain|
|» allowExternalLinks|boolean|false|none|Whether to allow external links|
|» allowSubdomains|boolean|false|none|Whether to allow subdomains|
|» sitemap|string|false|none|Sitemap handling strategy|
|» ignoreQueryParameters|boolean|false|none|Whether to ignore query parameters|
|» ignoreRobotsTxt|boolean|false|none|Whether robots.txt rules are ignored|
|» robotsUserAgent|string|false|none|Custom User-Agent string used for robots.txt evaluation|
|» deduplicateSimilarURLs|boolean|false|none|Whether to deduplicate similar URLs|
|» delay|number|false|none|Delay between requests in milliseconds|
|» limit|integer|false|none|Maximum number of pages to crawl|

#### Enumerated Values

|Property|Value|
|---|---|
|» sitemap|skip|
|» sitemap|include|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all active crawls for the authenticated team

<a id="opIdgetActiveCrawls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/crawl/active \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crawl/active`

> Example responses

> 200 Response

```json
{
  "success": true,
  "crawls": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teamId": "string",
      "url": "http://example.com",
      "options": {
        "scrapeOptions": {
          "formats": [
            "markdown"
          ],
          "onlyMainContent": true,
          "onlyCleanContent": false,
          "includeTags": [
            "string"
          ],
          "excludeTags": [
            "string"
          ],
          "maxAge": 172800000,
          "minAge": 0,
          "headers": {},
          "waitFor": 0,
          "mobile": false,
          "skipTlsVerification": true,
          "timeout": 60000,
          "parsers": [
            "pdf",
            "image"
          ],
          "actions": [
            {
              "type": "wait",
              "milliseconds": 1
            }
          ],
          "location": {
            "country": "US",
            "languages": [
              "en-US"
            ]
          },
          "removeBase64Images": true,
          "blockAds": true,
          "proxy": "auto",
          "storeInCache": true,
          "lockdown": false,
          "checkPromptInjection": false,
          "redactPII": false,
          "profile": {
            "name": "string",
            "saveChanges": true
          },
          "threatProtection": {
            "mode": "off",
            "riskScoreThreshold": 75,
            "blacklist": [
              "string"
            ],
            "whitelist": [
              "string"
            ],
            "blockedTlds": [
              "string"
            ],
            "failurePolicy": "open"
          },
          "auditMetadata": {
            "username": "string"
          }
        }
      }
    }
  ]
}
```

> 402 Response

```json
{
  "success": false,
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "success": false,
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "success": false,
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="get-all-active-crawls-for-the-authenticated-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-all-active-crawls-for-the-authenticated-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|crawls|[object]|false|none|none|
|» id|string(uuid)|true|none|The unique identifier of the crawl|
|» teamId|string|true|none|The ID of the team that owns the crawl|
|» url|string(uri)|true|none|The origin URL of the crawl|
|» options|object|true|none|The crawler options used for this crawl|
|» » scrapeOptions|[ScrapeOptions](#schemascrapeoptions)|false|none|none|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-mapping">Mapping</h1>

## Map multiple URLs based on options

<a id="opIdmapUrls"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/map \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "<string>",
    "search": "<string>",
    "sitemap": "include",
    "includeSubdomains": true,
    "ignoreQueryParameters": true,
    "ignoreCache": false,
    "limit": 5000,
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "timeout": 60000
  }'
```

`POST /map`

> Body parameter

```json
{
  "url": "<string>",
  "search": "<string>",
  "sitemap": "include",
  "includeSubdomains": true,
  "ignoreQueryParameters": true,
  "ignoreCache": false,
  "limit": 5000,
  "location": {
    "country": "US",
    "languages": [
      "en-US"
    ]
  },
  "timeout": 60000
}
```

<h3 id="map-multiple-urls-based-on-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string(uri)|true|The base URL to start crawling from|
|» search|body|string|false|Specify a search query to order the results by relevance. Example: 'blog' will return URLs that contain the word 'blog' in the URL ordered by relevance.|
|» sitemap|body|string|false|Sitemap mode when mapping. If you set it to `skip`, the sitemap won't be used to find URLs. If you set it to `only`, only URLs that are in the sitemap will be returned. By default (`include`), the sitemap and other methods will be used together to find URLs.|
|» includeSubdomains|body|boolean|false|Include subdomains of the website|
|» ignoreQueryParameters|body|boolean|false|Do not return URLs with query parameters|
|» ignoreCache|body|boolean|false|Bypass the sitemap cache to retrieve fresh URLs. Sitemap data is cached for up to 7 days; use this parameter when your sitemap has been recently updated.|
|» limit|body|integer|false|Maximum number of links to return|
|» timeout|body|integer|false|Timeout in milliseconds. There is no timeout by default.|
|» location|body|object|false|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|» » country|body|string|false|ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')|
|» » languages|body|[string]|false|Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language|
|» auditMetadata|body|[AuditMetadata](#schemaauditmetadata)|false|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|
|» threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sitemap|skip|
|» sitemap|include|
|» sitemap|only|

> Example responses

> 200 Response

```json
{
  "success": true,
  "links": [
    {
      "url": "http://example.com",
      "title": "string",
      "description": "string"
    }
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 429 Response

```json
{
  "error": "Request rate limit exceeded. Please wait and try again later."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="map-multiple-urls-based-on-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MapResponse](#schemamapresponse)|
|402|Payment Required|Payment required|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="map-multiple-urls-based-on-options-responseschema">Response Schema</h3>

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-extraction">Extraction</h1>

## Extract structured data from pages using LLMs

<a id="opIdextractData"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/extract \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "urls": [
      "http://example.com"
    ],
    "prompt": "string",
    "schema": {},
    "enableWebSearch": false,
    "ignoreSitemap": false,
    "includeSubdomains": true,
    "showSources": false,
    "scrapeOptions": {
      "formats": [
        "markdown"
      ],
      "onlyMainContent": true,
      "onlyCleanContent": false,
      "includeTags": [
        "string"
      ],
      "excludeTags": [
        "string"
      ],
      "maxAge": 172800000,
      "minAge": 0,
      "headers": {},
      "waitFor": 0,
      "mobile": false,
      "skipTlsVerification": true,
      "timeout": 60000,
      "parsers": [
        "pdf",
        "image"
      ],
      "actions": [
        {
          "type": "wait",
          "milliseconds": 1
        }
      ],
      "location": {
        "country": "US",
        "languages": [
          "en-US"
        ]
      },
      "removeBase64Images": true,
      "blockAds": true,
      "proxy": "auto",
      "storeInCache": true,
      "lockdown": false,
      "checkPromptInjection": false,
      "redactPII": false,
      "profile": {
        "name": "string",
        "saveChanges": true
      },
      "threatProtection": {
        "mode": "off",
        "riskScoreThreshold": 75,
        "blacklist": [
          "string"
        ],
        "whitelist": [
          "string"
        ],
        "blockedTlds": [
          "string"
        ],
        "failurePolicy": "open"
      },
      "auditMetadata": {
        "username": "string"
      }
    },
    "ignoreInvalidURLs": true,
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    }
  }'
```

`POST /extract`

> Body parameter

```json
{
  "urls": [
    "http://example.com"
  ],
  "prompt": "string",
  "schema": {},
  "enableWebSearch": false,
  "ignoreSitemap": false,
  "includeSubdomains": true,
  "showSources": false,
  "scrapeOptions": {
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "onlyCleanContent": false,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 172800000,
    "minAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": true,
    "timeout": 60000,
    "parsers": [
      "pdf",
      "image"
    ],
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "auto",
    "storeInCache": true,
    "lockdown": false,
    "checkPromptInjection": false,
    "redactPII": false,
    "profile": {
      "name": "string",
      "saveChanges": true
    },
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    },
    "auditMetadata": {
      "username": "string"
    }
  },
  "ignoreInvalidURLs": true,
  "threatProtection": {
    "mode": "off",
    "riskScoreThreshold": 75,
    "blacklist": [
      "string"
    ],
    "whitelist": [
      "string"
    ],
    "blockedTlds": [
      "string"
    ],
    "failurePolicy": "open"
  }
}
```

<h3 id="extract-structured-data-from-pages-using-llms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» urls|body|[string(uri)]|true|none|
|» prompt|body|string|false|Prompt to guide the extraction process|
|» schema|body|object|false|Schema to define the structure of the extracted data. Must conform to [JSON Schema](https://json-schema.org/).|
|» enableWebSearch|body|boolean|false|When true, the extraction will use web search to find additional data|
|» ignoreSitemap|body|boolean|false|When true, sitemap.xml files will be ignored during website scanning|
|» includeSubdomains|body|boolean|false|When true, subdomains of the provided URLs will also be scanned|
|» showSources|body|boolean|false|When true, the sources used to extract the data will be included in the response as `sources` key|
|» scrapeOptions|body|[ScrapeOptions](#schemascrapeoptions)|false|none|
|» ignoreInvalidURLs|body|boolean|false|If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, an extract using the remaining valid URLs will be performed, and the invalid URLs will be returned in the invalidURLs field of the response.|
|» threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "invalidURLs": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "error": "Invalid input data."
}
```

> 500 Response

```json
{
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="extract-structured-data-from-pages-using-llms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful extraction|[ExtractResponse](#schemaextractresponse)|
|400|Bad Request|Invalid request|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="extract-structured-data-from-pages-using-llms-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status of an extract job

<a id="opIdgetExtractStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/extract/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extract/{id}`

<h3 id="get-the-status-of-an-extract-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the extract job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {},
  "status": "completed",
  "expiresAt": "1970-01-01T00:00:00Z",
  "tokensUsed": 0
}
```

<h3 id="get-the-status-of-an-extract-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExtractStatusResponse](#schemaextractstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-agent">Agent</h1>

## List agent runs

<a id="opIdlistAgents"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/agent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent`

<h3 id="list-agent-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|before|query|integer|false|Only return agent runs created before this unix millisecond timestamp. Pages are fixed at 20 runs; use the `before` value from the previous page's `next` URL to fetch the next page.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "agents": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "createdAt": "1970-01-01T00:00:00Z",
      "targetHint": "string",
      "origin": "string",
      "integration": "string",
      "settings": {
        "hidden": true,
        "starred": true,
        "label": "string"
      },
      "status": "processing",
      "options": {
        "urls": [
          "http://example.com"
        ],
        "prompt": "string",
        "schema": {},
        "model": "spark-2",
        "effort": "low"
      }
    }
  ],
  "next": "string"
}
```

> 400 Response

```json
{
  "error": "Invalid before timestamp."
}
```

<h3 id="list-agent-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of agent runs, most recent first|Inline|
|400|Bad Request|Bad request — the before timestamp is invalid.|Inline|

<h3 id="list-agent-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|agents|[object]|false|none|none|
|» id|string(uuid)|false|none|none|
|» createdAt|string(date-time)|false|none|none|
|» targetHint|string|false|none|Short hint describing the run's target (first URL or prompt)|
|» origin|string|false|none|Origin of the run (e.g. "api")|
|» integration|string|false|none|Integration identifier, if the run was started with one|
|» settings|object|false|none|none|
|» » hidden|boolean|false|none|none|
|» » starred|boolean|false|none|none|
|» » label|string|false|none|none|
|» status|string|false|none|none|
|» options|object|false|none|Options the run was started with|
|» » urls|[string(uri)]|false|none|none|
|» » prompt|string|false|none|none|
|» » schema|object|false|none|none|
|» » model|string|false|none|Model preset used for the agent run. Every new run executes on spark-2; Spark 1 names only appear on legacy runs.|
|» » effort|string|false|none|Reasoning budget used for the agent run (only present for runs that set effort)|
|next|string|false|none|Absolute URL of the next page. Only present when more pages exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|processing|
|» status|completed|
|» status|failed|
|» » model|spark-2|
|» » model|spark-1-pro|
|» » model|spark-1-mini|
|» » effort|low|
|» » effort|medium|
|» » effort|high|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Start an agent task for agentic data extraction

<a id="opIdstartAgent"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/agent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "urls": [
      "http://example.com"
    ],
    "prompt": "string",
    "schema": {},
    "maxCredits": 0,
    "strictConstrainToURLs": true,
    "model": "spark-2",
    "effort": "low",
    "webhook": {
      "url": "http://example.com",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "events": [
        "started",
        "action",
        "completed",
        "failed",
        "cancelled"
      ]
    },
    "auditMetadata": {
      "username": "string"
    },
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    },
    "threadId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "mode": "extract",
    "exchange": {
      "enabled": true,
      "toolkits": [
        "string"
      ],
      "maxCalls": 16,
      "requireApproval": false,
      "approve": {
        "approvalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "callIds": [
          "string"
        ],
        "always": false
      },
      "decline": {
        "approvalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "onTermsRequired": "skip"
    }
  }'
```

`POST /agent`

> Body parameter

```json
{
  "urls": [
    "http://example.com"
  ],
  "prompt": "string",
  "schema": {},
  "maxCredits": 0,
  "strictConstrainToURLs": true,
  "model": "spark-2",
  "effort": "low",
  "webhook": {
    "url": "http://example.com",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "events": [
      "started",
      "action",
      "completed",
      "failed",
      "cancelled"
    ]
  },
  "auditMetadata": {
    "username": "string"
  },
  "threatProtection": {
    "mode": "off",
    "riskScoreThreshold": 75,
    "blacklist": [
      "string"
    ],
    "whitelist": [
      "string"
    ],
    "blockedTlds": [
      "string"
    ],
    "failurePolicy": "open"
  },
  "threadId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "mode": "extract",
  "exchange": {
    "enabled": true,
    "toolkits": [
      "string"
    ],
    "maxCalls": 16,
    "requireApproval": false,
    "approve": {
      "approvalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "callIds": [
        "string"
      ],
      "always": false
    },
    "decline": {
      "approvalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "onTermsRequired": "skip"
  }
}
```

<h3 id="start-an-agent-task-for-agentic-data-extraction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» urls|body|[string(uri)]|false|Optional list of URLs to constrain the agent to|
|» prompt|body|string|true|The prompt describing what data to extract|
|» schema|body|object|false|Optional JSON schema to structure the extracted data|
|» maxCredits|body|number|false|Maximum credits to spend on this agent task. Defaults to 2500 if not set. Values above 2,500 are always billed as paid requests.|
|» strictConstrainToURLs|body|boolean|false|If true, agent will only visit URLs provided in the urls array|
|» model|body|string|false|The model to use for the agent task. spark-2 is the default and the model every run executes on. The Spark 1 model names remain accepted for backwards compatibility but are deprecated and route to spark-2.|
|» effort|body|string|false|Reasoning budget for the agent task. Every run executes on spark-2, so effort can be sent with or without model.|
|» webhook|body|object|false|A webhook specification object. Subscribes to agent lifecycle events (agent.started, agent.action, agent.completed, agent.failed, agent.cancelled).|
|» » url|body|string(uri)|true|The URL to send webhook events to.|
|» » headers|body|object|false|Headers to send to the webhook URL.|
|» » » **additionalProperties**|body|string|false|none|
|» » metadata|body|object|false|Custom metadata that will be included in all webhook payloads for this agent job.|
|» » » **additionalProperties**|body|string|false|none|
|» » events|body|[string]|false|The events to send to the webhook URL. Defaults to all events.|
|» auditMetadata|body|[AuditMetadata](#schemaauditmetadata)|false|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|
|» threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|
|» threadId|body|string(uuid)|false|Continue an existing thread: pass the `threadId` an earlier run returned, and this request runs as that thread's next turn. Omitted `urls`, `schema`, `effort`, `mode` and `exchange` settings carry over from the previous turn. Omit `threadId` to start a new thread.|
|» mode|body|string|false|`extract` returns the complete structured result in `data` every turn. `chat` lets a follow-up that asks for no new data get a short reply in `message` instead of a re-run. `exchange.requireApproval` needs `chat` on the same request. Omitted on a follow-up turn keeps the thread's mode.|
|» exchange|body|object|false|Let the agent call your team's [Alexandria](https://docs.firecrawl.dev/features/alexandria) data providers during the run. Without this object the run uses the web only (a follow-up turn inherits the previous turn's settings). See [Use your connected Alexandria tools](https://docs.firecrawl.dev/features/agent#use-your-connected-alexandria-tools).|
|» » enabled|body|boolean|false|Let the agent call Alexandria providers. Defaults to `true` once `exchange` is sent; send `false` to turn providers off for a turn of a thread.|
|» » toolkits|body|[string]|false|Pin up to 5 providers by slug, for example `["apollo"]`. The agent then uses only those. Empty or omitted means every provider your team can use.|
|» » maxCalls|body|integer|false|Most provider calls the agent may make in this turn.|
|» » requireApproval|body|boolean|false|Before any paid provider call, end the turn with a `pendingApproval` of kind `calls` that you approve or decline on the next turn. Requires `mode: "chat"` on the same request, including on a follow-up.|
|» » approve|body|object|false|Answer yes to the `pendingApproval` the previous turn of this thread ended on. Needs `threadId`.|
|» » » approvalId|body|string(uuid)|true|The `pendingApproval.id` to answer.|
|» » » callIds|body|[string]|false|Run only these calls from the approval. Defaults to all of them. Ignored on a `terms` approval.|
|» » » always|body|boolean|false|Stop asking for approval for the rest of the thread. Ignored on a `terms` approval.|
|» » decline|body|object|false|Answer no to the `pendingApproval` the previous turn of this thread ended on. Needs `threadId`. A declined `terms` offer keeps its providers out of the rest of the thread.|
|» » » approvalId|body|string(uuid)|true|The `pendingApproval.id` to answer.|
|» » onTermsRequired|body|string|false|What to do when a provider the agent would use needs data terms your team has not accepted. Such providers are never called. `skip` answers with accepted providers and lists the others in `exchange.skippedProviders`; `ask` also ends the turn with a `terms` `pendingApproval` and `exchange.requiresAction`. Omitted on a follow-up turn keeps the previous turn's value. See [Data providers that need terms](https://docs.firecrawl.dev/features/agent#data-providers-that-need-terms).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» model|spark-2|
|» model|spark-1-mini|
|» model|spark-1-pro|
|» effort|low|
|» effort|medium|
|» effort|high|
|» » events|started|
|» » events|action|
|» » events|completed|
|» » events|failed|
|» » events|cancelled|
|» mode|extract|
|» mode|chat|
|» » onTermsRequired|skip|
|» » onTermsRequired|ask|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "threadId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "threadTurn": 0
}
```

> 400 Response

```json
{
  "error": "Invalid JSON schema: ..."
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

> 403 Response

```json
{
  "error": "This URL (https://example.com) is blocked by your organization's threat protection policy (rule: blocklist). If you believe this is a mistake, contact your organization administrator to adjust the policy (e.g. whitelist the domain)."
}
```

> 429 Response

```json
{
  "error": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "error": "Failed to passthrough agent request."
}
```

<h3 id="start-an-agent-task-for-agentic-data-extraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent task started successfully|Inline|
|400|Bad Request|Bad request — the request body failed validation (for example an invalid JSON schema).|Inline|
|402|Payment Required|Payment required|Inline|
|403|Forbidden|Forbidden — a provided URL is blocked by the team's threat protection policy.|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error — the agent service could not be reached.|Inline|

<h3 id="start-an-agent-task-for-agentic-data-extraction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|threadId|string(uuid)|false|none|The thread this run belongs to. Pass it as `threadId` to continue the thread.|
|threadTurn|integer|false|none|This run's turn in the thread, starting at 1.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the status of an agent job

<a id="opIdgetAgentStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/agent/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent/{jobId}`

<h3 id="get-the-status-of-an-agent-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|The ID of the agent job|

> Example responses

> 200 Response

```json
{
  "success": true,
  "status": "processing",
  "data": {},
  "partial": null,
  "partialSchemaValid": true,
  "stopReason": "credit_limit_reached",
  "message": "string",
  "model": "spark-2",
  "effort": "low",
  "error": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "creditsUsed": 0,
  "threadId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "threadTurn": 0,
  "mode": "extract",
  "suggestions": [
    {
      "label": "string",
      "prompt": "string"
    }
  ],
  "pendingApproval": {
    "id": "string",
    "kind": "calls",
    "reason": "string",
    "calls": [
      {
        "id": "string",
        "provider": "string",
        "capability": "string",
        "input": {},
        "more": [
          {}
        ],
        "creditsEstimate": 0
      }
    ],
    "terms": [
      {
        "provider": "string",
        "name": "string",
        "capability": "string",
        "adds": "string",
        "version": "string",
        "digest": "string",
        "url": "string"
      }
    ],
    "resolution": {
      "approved": true,
      "callIds": [
        "string"
      ],
      "always": true,
      "byRunId": "string"
    }
  },
  "exchange": {
    "enabled": true,
    "toolkits": [
      "string"
    ],
    "requireApproval": true,
    "onTermsRequired": "skip",
    "paidCalls": 0,
    "creditsUsed": 0,
    "skippedProviders": [
      {
        "provider": "string",
        "name": "string",
        "capability": "string",
        "adds": "string",
        "reason": "terms_required",
        "version": "string",
        "termsUrl": "string"
      }
    ],
    "requiresAction": {
      "type": "accept_terms",
      "approvalId": "string",
      "providers": [
        {
          "provider": "string",
          "name": "string",
          "capability": "string",
          "adds": "string",
          "version": "string",
          "digest": "string",
          "url": "string",
          "show": {},
          "accept": {}
        }
      ]
    }
  }
}
```

> 400 Response

```json
{
  "error": "Invalid job ID format. Job ID must be a valid UUID."
}
```

> 404 Response

```json
{
  "error": "Agent job not found"
}
```

<h3 id="get-the-status-of-an-agent-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad request — the job ID is not a valid UUID.|Inline|
|404|Not Found|Agent job not found|Inline|

<h3 id="get-the-status-of-an-agent-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|status|string|false|none|none|
|data|object|false|none|The extracted data (only present when status is completed). Never set on a failed run, including one that stopped at its credit limit.|
|partial|object|false|none|Best-effort JSON recovered from an incomplete run. Only present on some failed runs, such as one that reached `maxCredits`; never present while the run is processing. It may be missing rows or fields, so do not treat it as a completed result.|
|partialSchemaValid|boolean|false|none|Whether `partial` validates against the request's JSON schema. Only present when `partial` is present and the request included a `schema`.|
|stopReason|string|false|none|Why a failed run stopped early. `credit_limit_reached` means the run hit its `maxCredits` limit. Only present when status is failed.|
|message|string|false|none|A note from the agent about the result. In `chat` mode, a follow-up that asks for no new data is answered here instead of in `data`. On a failed credit-limit stop, it may explain what is incomplete.|
|model|string|false|none|Model preset used for the agent run. Every new run executes on spark-2; Spark 1 names only appear on legacy runs.|
|effort|string|false|none|Reasoning budget used for the agent run (only present for runs that set effort)|
|error|string|false|none|Error message (only present when status is failed)|
|expiresAt|string(date-time)|false|none|none|
|creditsUsed|number|false|none|none|
|threadId|string(uuid)|false|none|The thread this run belongs to.|
|threadTurn|integer|false|none|This run's turn in the thread, starting at 1.|
|mode|string|false|none|none|
|suggestions|[object]|false|none|Follow-ups the agent offers for the next turn of the thread.|
|» label|string|false|none|none|
|» prompt|string|false|none|none|
|pendingApproval|[AgentPendingApproval](#schemaagentpendingapproval)|false|none|What the turn stopped to ask. Answer it on the next turn of the thread with `exchange.approve` or `exchange.decline`.|
|exchange|[AgentExchangeSummary](#schemaagentexchangesummary)|false|none|What the run did with Alexandria. `toolkits` and `requireApproval` are what the run resolved to after thread inheritance.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|
|status|completed|
|status|failed|
|stopReason|credit_limit_reached|
|model|spark-2|
|model|spark-1-pro|
|model|spark-1-mini|
|effort|low|
|effort|medium|
|effort|high|
|mode|extract|
|mode|chat|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel an agent job

<a id="opIdcancelAgent"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/agent/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /agent/{jobId}`

<h3 id="cancel-an-agent-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|The ID of the agent job|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": "Invalid job ID format. Job ID must be a valid UUID."
}
```

> 404 Response

```json
{
  "error": "Agent job not found"
}
```

> 409 Response

```json
{
  "error": "Agent already finished"
}
```

<h3 id="cancel-an-agent-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent job cancelled successfully|Inline|
|400|Bad Request|Bad request — the job ID is not a valid UUID.|Inline|
|404|Not Found|Agent job not found|Inline|
|409|Conflict|Conflict — the agent job has already finished or has already been cancelled.|Inline|

<h3 id="cancel-an-agent-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the execution trace of an agent job

<a id="opIdgetAgentTrace"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/agent/497f6eca-6276-4993-bfeb-53cbbbba6f08/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent/{jobId}/trace`

<h3 id="get-the-execution-trace-of-an-agent-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveView|query|string|false|If "true", include the currently active browser sessions with live view URLs.|
|jobId|path|string(uuid)|true|The ID of the agent job|

#### Enumerated Values

|Parameter|Value|
|---|---|
|liveView|true|
|liveView|false|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "events": [
    {
      "schemaVersion": 1,
      "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "runId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "occurredAt": "1970-01-01T00:00:00Z",
      "producerSequence": 0,
      "agent": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "role": "orchestrator",
        "name": "string",
        "parentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "type": "run.started"
    }
  ],
  "creditsUsed": 0,
  "activeBrowserSessions": [
    {
      "id": "string",
      "liveViewUrl": "string",
      "viewport": {
        "width": 0,
        "height": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Trace is only available for Spark 2 extracts"
}
```

> 404 Response

```json
{
  "error": "Agent job not found"
}
```

<h3 id="get-the-execution-trace-of-an-agent-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad request — the job ID is not a valid UUID, or the job did not run on spark-2 (traces are only available for spark-2 agent jobs).|Inline|
|404|Not Found|Agent job not found|Inline|

<h3 id="get-the-execution-trace-of-an-agent-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|events|[[AgentTraceEvent](#schemaagenttraceevent)]|false|none|Canonical execution events for the run; group by agent.id, then order each group by producerSequence, which is monotonic per emitting agent. artifact.updated events carry the snapshotId values used by the snapshots endpoint.|
|creditsUsed|number|false|none|Credits consumed so far, capped at maxCredits if one was set.|
|activeBrowserSessions|[object]|false|none|Currently active browser sessions (only present when liveView=true).|
|» id|string|false|none|none|
|» liveViewUrl|string|false|none|none|
|» viewport|object|false|none|none|
|» » width|number|false|none|none|
|» » height|number|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get an output snapshot of an agent job

<a id="opIdgetAgentSnapshot"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/agent/497f6eca-6276-4993-bfeb-53cbbbba6f08/snapshots/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent/{jobId}/snapshots/{snapshotId}`

<h3 id="get-an-output-snapshot-of-an-agent-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|The ID of the agent job|
|snapshotId|path|string(uuid)|true|The ID of the snapshot, from an artifact.updated trace event|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "snapshotId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "snapshot": "string"
}
```

> 400 Response

```json
{
  "error": "Snapshots are only available for Spark 2 extracts"
}
```

> 404 Response

```json
{
  "error": "Agent job not found"
}
```

<h3 id="get-an-output-snapshot-of-an-agent-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad request — the job ID or snapshot ID is not a valid UUID, or the job did not run on spark-2 (snapshots are only available for spark-2 agent jobs).|Inline|
|404|Not Found|Agent job not found|Inline|

<h3 id="get-an-output-snapshot-of-an-agent-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|snapshotId|string(uuid)|false|none|none|
|snapshot|string|false|none|The snapshot content as a JSON-encoded string — the agent's working output artifact at that point in the run.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-billing">Billing</h1>

## Get remaining credits for the authenticated team

<a id="opIdgetCreditUsage"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/credit-usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/credit-usage`

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "remainingCredits": 1000,
    "planCredits": 500000,
    "billingPeriodStart": "2025-01-01T00:00:00Z",
    "billingPeriodEnd": "2025-01-31T23:59:59Z"
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Could not find credit usage information"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Internal server error while fetching credit usage"
}
```

<h3 id="get-remaining-credits-for-the-authenticated-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|Credit usage information not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-remaining-credits-for-the-authenticated-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» remainingCredits|number|false|none|Number of credits remaining for the team|
|» planCredits|number|false|none|Number of credits in the plan. This does not include coupon credits or credits added by pay-as-you-go.|
|» billingPeriodStart|string(date-time) \| null|false|none|Start date of the current billing period.|
|» billingPeriodEnd|string(date-time) \| null|false|none|End date of the current billing period.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get historical credit usage for the authenticated team

<a id="opIdgetHistoricalCreditUsage"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/credit-usage/historical \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/credit-usage/historical`

<h3 id="get-historical-credit-usage-for-the-authenticated-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|byApiKey|query|boolean|false|Get historical credit usage by API key|

> Example responses

> 200 Response

```json
{
  "success": true,
  "periods": [
    {
      "startDate": "2025-01-01T00:00:00Z",
      "endDate": "2025-01-31T23:59:59Z",
      "apiKey": "string",
      "totalCredits": 1000
    }
  ]
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Internal server error while fetching historical credit usage"
}
```

<h3 id="get-historical-credit-usage-for-the-authenticated-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-historical-credit-usage-for-the-authenticated-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|periods|[object]|false|none|none|
|» startDate|string(date-time)|false|none|Start date of the billing period|
|» endDate|string(date-time)|false|none|End date of the billing period|
|» apiKey|string \| null|false|none|Name of the API key used for the billing period. null if byApiKey is false (default)|
|» totalCredits|integer|false|none|Total number of credits used in the billing period|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get remaining tokens for the authenticated team (Extract only)

<a id="opIdgetTokenUsage"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/token-usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/token-usage`

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "remainingTokens": 1000,
    "planTokens": 500000,
    "billingPeriodStart": "2025-01-01T00:00:00Z",
    "billingPeriodEnd": "2025-01-31T23:59:59Z"
  }
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Could not find token usage information"
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Internal server error while fetching token usage"
}
```

<h3 id="get-remaining-tokens-for-the-authenticated-team-extract-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|Token usage information not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-remaining-tokens-for-the-authenticated-team-extract-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» remainingTokens|number|false|none|Number of tokens remaining for the team|
|» planTokens|number|false|none|Number of tokens in the plan. This does not include coupon tokens.|
|» billingPeriodStart|string(date-time) \| null|false|none|Start date of the current billing period.|
|» billingPeriodEnd|string(date-time) \| null|false|none|End date of the current billing period.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get historical token usage for the authenticated team (Extract only)

<a id="opIdgetHistoricalTokenUsage"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/token-usage/historical \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/token-usage/historical`

<h3 id="get-historical-token-usage-for-the-authenticated-team-extract-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|byApiKey|query|boolean|false|Get historical token usage by API key|

> Example responses

> 200 Response

```json
{
  "success": true,
  "periods": [
    {
      "startDate": "2025-01-01T00:00:00Z",
      "endDate": "2025-01-31T23:59:59Z",
      "apiKey": "string",
      "totalTokens": 1000
    }
  ]
}
```

> 500 Response

```json
{
  "success": false,
  "error": "Internal server error while fetching historical token usage"
}
```

<h3 id="get-historical-token-usage-for-the-authenticated-team-extract-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="get-historical-token-usage-for-the-authenticated-team-extract-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|periods|[object]|false|none|none|
|» startDate|string(date-time)|false|none|Start date of the billing period|
|» endDate|string(date-time)|false|none|End date of the billing period|
|» apiKey|string \| null|false|none|Name of the API key used for the billing period. null if byApiKey is false (default)|
|» totalTokens|integer|false|none|Total number of tokens used in the billing period|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-miscellaneous">Miscellaneous</h1>

## Metrics about your team's scrape queue

<a id="opIdgetQueueStatus"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/queue-status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/queue-status`

> Example responses

> 200 Response

```json
{
  "success": true,
  "jobsInQueue": 0,
  "activeJobsInQueue": 0,
  "waitingJobsInQueue": 0,
  "maxConcurrency": 0,
  "mostRecentSuccess": "1970-01-01T00:00:00Z"
}
```

<h3 id="metrics-about-your-teams-scrape-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|

<h3 id="metrics-about-your-teams-scrape-queue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|jobsInQueue|number|false|none|Number of jobs currently in your queue|
|activeJobsInQueue|number|false|none|Number of jobs currently active|
|waitingJobsInQueue|number|false|none|Number of jobs currently waiting|
|maxConcurrency|number|false|none|Maximum number of concurrent active jobs based on your plan|
|mostRecentSuccess|string(date-time) \| null|false|none|Timestamp of the most recent successful job|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-account">Account</h1>

## List recent API activity

<a id="opIdgetActivity"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/activity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/activity`

Lists your team's recent API activity from the last 24 hours. Returns metadata about each job including the job ID, which can be used with the corresponding GET endpoint (e.g. GET /crawl/{id}) to retrieve full results. Supports cursor-based pagination and filtering by endpoint.

<h3 id="list-recent-api-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpoint|query|string|false|Filter by endpoint|
|limit|query|integer|false|Maximum number of results per page|
|cursor|query|string|false|Cursor for pagination. Use the cursor value from the previous response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|endpoint|scrape|
|endpoint|crawl|
|endpoint|batch_scrape|
|endpoint|search|
|endpoint|extract|
|endpoint|llmstxt|
|endpoint|deep_research|
|endpoint|map|
|endpoint|agent|
|endpoint|browser|
|endpoint|interact|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "endpoint": "scrape",
      "api_version": "v1",
      "created_at": "1970-01-01T00:00:00Z",
      "target": "string"
    }
  ],
  "cursor": "string",
  "has_more": true
}
```

<h3 id="list-recent-api-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|

<h3 id="list-recent-api-activity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[object]|false|none|none|
|» id|string|false|none|The job ID. Use this with the corresponding GET endpoint to retrieve results.|
|» endpoint|string|false|none|The endpoint used for this job|
|» api_version|string|false|none|The API version used for this request|
|» created_at|string(date-time)|false|none|When the job was created|
|» target|string \| null|false|none|The URL or query that was submitted|
|cursor|string \| null|false|none|Cursor to use for the next page. Null if there are no more results.|
|has_more|boolean|false|none|Whether there are more results available|

#### Enumerated Values

|Property|Value|
|---|---|
|» endpoint|scrape|
|» endpoint|crawl|
|» endpoint|batch_scrape|
|» endpoint|search|
|» endpoint|extract|
|» endpoint|llmstxt|
|» endpoint|deep_research|
|» endpoint|map|
|» endpoint|agent|
|» endpoint|browser|
|» endpoint|interact|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-search">Search</h1>

## Search and optionally scrape search results

<a id="opIdsearchAndScrape"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "string",
    "limit": 10,
    "sources": [
      "web"
    ],
    "domainTools": true,
    "toolDetail": "compact",
    "categories": [
      {
        "type": "developer"
      }
    ],
    "includeDomains": [
      "example.com"
    ],
    "excludeDomains": [
      "example.com"
    ],
    "tbs": "string",
    "location": "string",
    "country": "US",
    "safe": true,
    "timeout": 60000,
    "ignoreInvalidURLs": false,
    "highlights": true,
    "enterprise": [
      "anon"
    ],
    "scrapeOptions": {},
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    }
  }'
```

`POST /search`

> Body parameter

```json
{
  "query": "string",
  "limit": 10,
  "sources": [
    "web"
  ],
  "domainTools": true,
  "toolDetail": "compact",
  "categories": [
    {
      "type": "developer"
    }
  ],
  "includeDomains": [
    "example.com"
  ],
  "excludeDomains": [
    "example.com"
  ],
  "tbs": "string",
  "location": "string",
  "country": "US",
  "safe": true,
  "timeout": 60000,
  "ignoreInvalidURLs": false,
  "highlights": true,
  "enterprise": [
    "anon"
  ],
  "scrapeOptions": {},
  "threatProtection": {
    "mode": "off",
    "riskScoreThreshold": 75,
    "blacklist": [
      "string"
    ],
    "whitelist": [
      "string"
    ],
    "blockedTlds": [
      "string"
    ],
    "failurePolicy": "open"
  }
}
```

<h3 id="search-and-optionally-scrape-search-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|The search query|
|» limit|body|integer|false|Maximum number of results to return (per source type when using multiple sources)|
|» sources|body|[object]|false|Sources to search. Will determine the arrays available in the response. Defaults to ['web']. The plain string form (e.g. `["web", "alexandria"]`) is also accepted. The `alexandria` source returns tool contracts discovered from the Alexandria catalogue in `data.tools` instead of search results; it is free and is never counted in `creditsUsed`. Requires the team's Alexandria access to be enabled (403 otherwise).|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » tbs|body|string|false|Time-based search parameter. Supports predefined time ranges (`qdr:h`, `qdr:d`, `qdr:w`, `qdr:m`, `qdr:y`), custom date ranges (`cdr:1,cd_min:MM/DD/YYYY,cd_max:MM/DD/YYYY`), and sort by date (`sbd:1`). Values can be combined, e.g. `sbd:1,qdr:w`.|
|» » location|body|string|false|Location parameter for search results|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» domainTools|body|boolean|false|Include tool contracts whose provider matches the domains of the returned web results. Defaults to on when `alexandria` is among the sources; set `false` to disable, or `true` alone to add domain-matched tools beside ordinary web results. Free.|
|» toolDetail|body|string|false|How much of each tool contract to return in `data.tools`. `compact` returns only `provider`, `capability`, and `description`. `summary` returns the full tool entry without `options` and `response`. `full` also returns `options`, `response`, and `examples`.|
|» categories|body|[object]|false|Categories to filter results by. Defaults to [], which means results will not be filtered by any categories.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» includeDomains|body|[string(hostname)]|false|Restricts search results to the specified domains. Domains should be hostnames only, without protocol or path. Cannot be used with excludeDomains.|
|» excludeDomains|body|[string(hostname)]|false|Excludes search results from the specified domains. Domains should be hostnames only, without protocol or path. Cannot be used with includeDomains.|
|» tbs|body|string|false|Time-based search parameter. Supports predefined time ranges (`qdr:h`, `qdr:d`, `qdr:w`, `qdr:m`, `qdr:y`), custom date ranges (`cdr:1,cd_min:MM/DD/YYYY,cd_max:MM/DD/YYYY`), and sort by date (`sbd:1`). Values can be combined, e.g. `sbd:1,qdr:w`.|
|» location|body|string|false|Location parameter for search results (e.g. `San Francisco,California,United States`). For best results, set both this and the `country` parameter.|
|» country|body|string|false|ISO country code for geo-targeting search results (e.g. `US`). For best results, set both this and the `location` parameter.|
|» safe|body|boolean|false|When `true`, filters explicit content from search results (SafeSearch). Omit to keep the default behavior, which does not apply the filter.|
|» timeout|body|integer|false|Timeout in milliseconds|
|» ignoreInvalidURLs|body|boolean|false|Excludes URLs from the search results that are invalid for other Firecrawl endpoints. This helps reduce errors if you are piping data from search into other Firecrawl API endpoints.|
|» highlights|body|boolean|false|Generate query-relevant highlights for search results. Set to false to return provider descriptions or snippets without highlighting.|
|» enterprise|body|[string]|false|Enterprise search options for Zero Data Retention (ZDR). Use `["zdr"]` for end-to-end ZDR (10 credits / 10 results) or `["anon"]` for anonymized ZDR (2 credits / 10 results). Must be enabled for your team.|
|» scrapeOptions|body|object|false|Options for scraping search results|
|» » formats|body|[Formats](#schemaformats)|false|Output formats to include in the response. You can specify one or more formats, either as strings (e.g., `'markdown'`) or as objects with additional options (e.g., `{ type: 'json', schema: {...} }`). Some formats require specific options to be set. Example: `['markdown', { type: 'json', schema: {...} }]`.|
|» » onlyMainContent|body|boolean|false|Only return the main content of the page excluding headers, navs, footers, etc. This is a deterministic HTML-level filter applied before markdown is generated; no LLM is involved.|
|» » onlyCleanContent|body|boolean|false|Beta. Run an additional LLM-based pass over the generated markdown to remove residual boilerplate that `onlyMainContent` can miss (cookie banners, ad blocks, social share widgets, breadcrumbs, newsletter signups, comment sections, related-article lists). Headings, lists, tables, code blocks, image references, and inline links are preserved. Can be combined with `onlyMainContent` (the most common setup) or used on its own. Skipped with a warning when the markdown exceeds the cleaning model's output token limit (the original markdown is preserved). Not supported on zero-data-retention requests.|
|» » includeTags|body|[string]|false|Tags to include in the output.|
|» » excludeTags|body|[string]|false|Tags to exclude from the output.|
|» » maxAge|body|integer|false|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 2 days.|
|» » minAge|body|integer|false|When set, the request only checks the cache and never triggers a fresh scrape. The value is in milliseconds and specifies the minimum age the cached data must be. If matching cached data exists, it is returned instantly. If no cached data is found, a 404 with error code SCRAPE_NO_CACHED_DATA is returned. Set to 1 to accept any cached data regardless of age.|
|» » headers|body|object|false|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|» » waitFor|body|integer|false|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load. This waiting time is in addition to Firecrawl's smart wait feature.|
|» » mobile|body|boolean|false|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|» » skipTlsVerification|body|boolean|false|Skip TLS certificate verification when making requests.|
|» » timeout|body|integer|false|Timeout in milliseconds for the request. Minimum is 1000 (1 second). Default is 60000 (60 seconds). Maximum is 300000 (300 seconds).|
|» » parsers|body|[string \| object]|false|Controls how files are processed during scraping. Each item is a parser name (`"pdf"` or `"image"`) or a parser object. Both parsers are on by default.<br><br> - **pdf**: PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page).<br> - **image**: Raster images (PNG, JPEG, JPEG 2000, TIFF, GIF, BMP, WebP, AVIF) are OCR'd as one-page documents and converted to markdown. SVG and HEIC are not supported.<br><br>If you pass a list, parsers that are not in the list are off. For example, `["pdf"]` turns off image OCR, so image URLs fail as unsupported files. When an empty array is passed, the PDF file is returned in base64 encoding with a flat rate of 1 credit for the entire PDF.|
|» » » *oneOf*|body|string|false|Shorthand for a parser object with default options. `"pdf"` is the same as `{ "type": "pdf" }`.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|none|
|» » » mode|body|string|false|PDF parsing mode. "fast": text-based extraction only (embedded text, fastest). "auto" (default): attempts fast extraction first, falls back to OCR if needed. "ocr": forces OCR parsing on every page.|
|» » » maxPages|body|integer|false|Maximum number of pages to parse from the PDF. Must be a positive integer up to 10000.|
|» » » pages|body|boolean|false|Include physical per-page markdown alongside the document markdown. Populates the `pages` field on the document as an array of { pageNumber, markdown }. No additional cost.|
|» » » blocks|body|boolean|false|Include per-page typed layout blocks alongside the document markdown. Populates the `blocks` field on the document: typed blocks (title, section_header, text, table, formula, figure, caption, ...) with normalized bounding boxes, reading order, character-span links into the markdown, and per-block confidence. No additional cost.|
|» » » pageMarkers|body|boolean|false|Annotate page breaks in the document markdown: pages are joined with `\n\n---\n\n<!-- page N -->\n\n`, where N is the 1-based physical page of the content that follows. Markers appear between pages only (no leading marker for page 1), and numbering may skip pages merged across a page break — use `pages: true` when every physical page is needed. No new response field; no additional cost.|
|» » » *oneOf*|body|object|false|Image OCR parser. It has no options. The PDF options (`mode`, `maxPages`, `pages`, `blocks`, `pageMarkers`) do not apply to images.|
|» » » type|body|string|true|none|
|» » actions|body|[object]|false|Actions to perform on the page before grabbing the content|
|» » » *oneOf*|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Wait for a specified amount of milliseconds|
|» » » milliseconds|body|integer|true|Number of milliseconds to wait|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Wait for a specific element to appear|
|» » » selector|body|string|true|CSS selector to wait for|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Take a screenshot. The links will be in the response's `actions.screenshots` array.|
|» » » fullPage|body|boolean|false|Whether to capture a full-page screenshot (ignores viewport.height) or limit to the current viewport.|
|» » » quality|body|integer|false|The quality of the screenshot, from 1 to 100. 100 is the highest quality.|
|» » » viewport|body|object|false|none|
|» » » » width|body|integer|true|The width of the viewport in pixels|
|» » » » height|body|integer|true|The height of the viewport in pixels|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Click on an element|
|» » » selector|body|string|true|Query selector to find the element by|
|» » » all|body|boolean|false|Clicks all elements matched by the selector, not just the first one. Does not throw an error if no elements match the selector.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input.|
|» » » text|body|string|true|Text to type|
|» » » *oneOf*|body|object|false|Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes.|
|» » » type|body|string|true|Press a key on the page|
|» » » key|body|string|true|Key to press|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Scroll the page or a specific element|
|» » » direction|body|string|false|Direction to scroll|
|» » » selector|body|string|false|Query selector for the element to scroll|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Scrape the current page content, returns the url and the html.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Execute JavaScript code on the page|
|» » » script|body|string|true|JavaScript code to execute|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|true|Generate a PDF of the current page. The PDF will be returned in the `actions.pdfs` array of the response.|
|» » » format|body|string|false|The page size of the resulting PDF|
|» » » landscape|body|boolean|false|Whether to generate the PDF in landscape orientation|
|» » » scale|body|number|false|The scale multiplier of the resulting PDF|
|» » location|body|object|false|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|» » » country|body|string|false|ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')|
|» » » languages|body|[string]|false|Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language|
|» » removeBase64Images|body|boolean|false|Removes all base 64 images from the markdown output, which may be overwhelmingly long. This does not affect html or rawHtml formats. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|» » blockAds|body|boolean|false|Enables ad-blocking and cookie popup blocking.|
|» » proxy|body|string|false|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.|
|» » storeInCache|body|boolean|false|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (e.g. actions, headers) will force this parameter to be false.|
|» » lockdown|body|boolean|false|If true, serves the request from Firecrawl's cache only and never makes an outbound request to the target URL. Designed for compliance-constrained or air-gapped environments where the scrape request itself could leak sensitive information. On cache miss, returns a 404 with error code SCRAPE_LOCKDOWN_CACHE_MISS (the URL is never logged on miss). Lockdown requests are treated as zero data retention. Default maxAge is extended to 2 years so existing cached pages remain eligible. Billed at 5 credits on hit, 1 credit on cache miss.|
|» » checkPromptInjection|body|boolean|false|When enabled, scans the page content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. Works with any format except rawBase64. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the scrape continues with a warning and the check is not billed.|
|» » redactPII|body|boolean \| [RedactPIIOptions](#schemaredactpiioptions)|false|Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|[RedactPIIOptions](#schemaredactpiioptions)|false|Tuning options for PII redaction.|
|» » profile|body|object|false|Enable persistent browser storage across scrape and interact sessions. Pass a profile when scraping to preserve cookies, localStorage, and session data. Sessions with the same profile name share browser state.|
|» » » name|body|string|true|A name for the profile. Scrapes with the same name share browser state (cookies, localStorage, sessions).|
|» » » saveChanges|body|boolean|false|When true, browser state is saved back to the profile when the interact session stops. Set to false to load existing data without writing. Only one saving session is allowed at a time.|
|» » threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|
|» » auditMetadata|body|[AuditMetadata](#schemaauditmetadata)|false|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|
|» threatProtection|body|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|web|
|» » type|images|
|» » type|news|
|» » type|alexandria|
|» toolDetail|compact|
|» toolDetail|summary|
|» toolDetail|full|
|» » type|developer|
|» » type|gov|
|» » type|research|
|» » type|pdf|
|» enterprise|anon|
|» enterprise|zdr|
|» » » *oneOf*|pdf|
|» » » *oneOf*|image|
|» » » type|pdf|
|» » » mode|fast|
|» » » mode|auto|
|» » » mode|ocr|
|» » » type|image|
|» » » type|wait|
|» » » type|wait|
|» » » type|screenshot|
|» » » type|click|
|» » » type|write|
|» » » type|press|
|» » » type|scroll|
|» » » direction|up|
|» » » direction|down|
|» » » type|scrape|
|» » » type|executeJavascript|
|» » » type|pdf|
|» » » format|A0|
|» » » format|A1|
|» » » format|A2|
|» » » format|A3|
|» » » format|A4|
|» » » format|A5|
|» » » format|A6|
|» » » format|Letter|
|» » » format|Legal|
|» » » format|Tabloid|
|» » » format|Ledger|
|» » proxy|basic|
|» » proxy|enhanced|
|» » proxy|auto|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "web": [
      {
        "title": "string",
        "description": "string",
        "url": "string",
        "markdown": "string",
        "html": "string",
        "rawHtml": "string",
        "links": [
          "string"
        ],
        "screenshot": "string",
        "audio": "string",
        "video": "string",
        "metadata": {
          "title": "string",
          "description": "string",
          "sourceURL": "string",
          "url": "string",
          "statusCode": 0,
          "numPages": 0,
          "totalPages": 0,
          "error": "string"
        }
      }
    ],
    "images": [
      {
        "title": "string",
        "imageUrl": "string",
        "imageWidth": 0,
        "imageHeight": 0,
        "url": "string",
        "position": 0
      }
    ],
    "news": [
      {
        "title": "string",
        "snippet": "string",
        "url": "string",
        "date": "string",
        "imageUrl": "string",
        "position": 0,
        "markdown": "string",
        "html": "string",
        "rawHtml": "string",
        "links": [
          "string"
        ],
        "screenshot": "string",
        "audio": "string",
        "video": "string",
        "metadata": {
          "title": "string",
          "description": "string",
          "sourceURL": "string",
          "url": "string",
          "statusCode": 0,
          "numPages": 0,
          "totalPages": 0,
          "error": "string"
        }
      }
    ],
    "tools": [
      {
        "id": "string",
        "provider": "string",
        "capability": "string",
        "name": "string",
        "description": "string",
        "creditsCost": 0,
        "perRecord": true,
        "options": [
          {
            "name": "string",
            "type": "string"
          }
        ],
        "response": {
          "about": "string",
          "key": "string",
          "fields": [
            {}
          ]
        },
        "matchedBy": [
          "semantic"
        ],
        "matchedUrls": [
          "string"
        ]
      }
    ]
  },
  "warning": "string",
  "id": "string",
  "creditsUsed": 0
}
```

> 408 Response

```json
{
  "success": false,
  "error": "Request timed out"
}
```

> 500 Response

```json
{
  "success": false,
  "code": "UNKNOWN_ERROR",
  "error": "An unexpected error occurred on the server."
}
```

<h3 id="search-and-optionally-scrape-search-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|408|Request Timeout|Request timeout|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="search-and-optionally-scrape-search-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|The search results. The arrays available will depend on the sources you specified in the request. By default, the `web` array will be returned.|
|» web|[object]|false|none|none|
|» » title|string|false|none|Title from search result|
|» » description|string|false|none|Description from search result|
|» » url|string|false|none|URL of the search result|
|» » markdown|string \| null|false|none|Markdown content if scraping was requested|
|» » html|string \| null|false|none|HTML content if requested in formats|
|» » rawHtml|string \| null|false|none|Raw HTML content if requested in formats|
|» » links|[string]|false|none|Links found if requested in formats|
|» » screenshot|string \| null|false|none|Screenshot URL if requested in formats. Screenshots expire after 24 hours and can no longer be downloaded.|
|» » audio|string \| null|false|none|Signed URL to the extracted MP3 audio file if `audio` is in `formats`. The signed URL expires after 1 hour.|
|» » video|string \| null|false|none|Signed URL to the extracted video file if `video` is in `formats`. The signed URL expires after 1 hour.|
|» » metadata|object|false|none|none|
|» » » title|string|false|none|none|
|» » » description|string|false|none|none|
|» » » sourceURL|string|false|none|The original URL that was requested. May differ from the page's final URL if redirects occurred.|
|» » » url|string|false|none|The final URL of the page after all redirects have been followed.|
|» » » statusCode|integer|false|none|none|
|» » » numPages|integer|false|none|For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).|
|» » » totalPages|integer|false|none|For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.|
|» » » error|string \| null|false|none|none|
|» images|[object]|false|none|none|
|» » title|string|false|none|Title from search result|
|» » imageUrl|string|false|none|URL of the image|
|» » imageWidth|integer|false|none|Width of the image|
|» » imageHeight|integer|false|none|Height of the image|
|» » url|string|false|none|URL of the search result|
|» » position|integer|false|none|Position of the search result|
|» news|[object]|false|none|none|
|» » title|string|false|none|Title of the article|
|» » snippet|string|false|none|Snippet from the article|
|» » url|string|false|none|URL of the article|
|» » date|string|false|none|Date of the article|
|» » imageUrl|string|false|none|Image URL of the article|
|» » position|integer|false|none|Position of the article|
|» » markdown|string \| null|false|none|Markdown content if scraping was requested|
|» » html|string \| null|false|none|HTML content if requested in formats|
|» » rawHtml|string \| null|false|none|Raw HTML content if requested in formats|
|» » links|[string]|false|none|Links found if requested in formats|
|» » screenshot|string \| null|false|none|Screenshot URL if requested in formats. Screenshots expire after 24 hours and can no longer be downloaded.|
|» » audio|string \| null|false|none|Signed URL to the extracted MP3 audio file if `audio` is in `formats`. The signed URL expires after 1 hour.|
|» » video|string \| null|false|none|Signed URL to the extracted video file if `video` is in `formats`. The signed URL expires after 1 hour.|
|» » metadata|object|false|none|none|
|» » » title|string|false|none|none|
|» » » description|string|false|none|none|
|» » » sourceURL|string|false|none|The original URL that was requested. May differ from the page's final URL if redirects occurred.|
|» » » url|string|false|none|The final URL of the page after all redirects have been followed.|
|» » » statusCode|integer|false|none|none|
|» » » numPages|integer|false|none|For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).|
|» » » totalPages|integer|false|none|For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.|
|» » » error|string \| null|false|none|none|
|» tools|[[DiscoveredTool](#schemadiscoveredtool)]|false|none|Tool contracts discovered from the Alexandria catalogue. Present when `alexandria` is among the sources or when `domainTools` was requested; up to `limit` results per discovery source (semantic matches from the `alexandria` source, domain matches from `domainTools`).|
|warning|string \| null|false|none|Warning message if any issues occurred. Includes `Some tool discovery results are unavailable.` when Alexandria or domain tool discovery partially failed.|
|id|string|false|none|The ID of the search job|
|creditsUsed|integer|false|none|The number of credits used for the search|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|code|string|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Submit feedback for a search job

<a id="opIdsubmitSearchFeedback"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/search/497f6eca-6276-4993-bfeb-53cbbbba6f08/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rating": "good",
    "valuableSources": [
      {
        "url": "http://example.com",
        "reason": "string"
      }
    ],
    "missingContent": [
      {
        "topic": "string",
        "description": "string"
      }
    ],
    "querySuggestions": "string",
    "origin": "api",
    "integration": "string"
  }'
```

`POST /search/{jobId}/feedback`

> Body parameter

```json
{
  "rating": "good",
  "valuableSources": [
    {
      "url": "http://example.com",
      "reason": "string"
    }
  ],
  "missingContent": [
    {
      "topic": "string",
      "description": "string"
    }
  ],
  "querySuggestions": "string",
  "origin": "api",
  "integration": "string"
}
```

<h3 id="submit-feedback-for-a-search-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string(uuid)|true|Search job id returned by /search.|
|body|body|[SearchFeedbackRequest](#schemasearchfeedbackrequest)|true|none|
|» rating|body|string|true|none|
|» valuableSources|body|[object]|false|none|
|» » url|body|string(uri)|true|none|
|» » reason|body|string|false|none|
|» missingContent|body|[object]|false|none|
|» » topic|body|string|true|none|
|» » description|body|string|false|none|
|» querySuggestions|body|string|false|none|
|» origin|body|string|false|none|
|» integration|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rating|good|
|» rating|partial|
|» rating|bad|

> Example responses

> 200 Response

```json
{
  "success": true,
  "feedbackId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "creditsRefunded": 0,
  "alreadySubmitted": true,
  "dailyCapReached": true,
  "creditsRefundedToday": 0,
  "dailyRefundCap": 0,
  "warning": "string"
}
```

> 400 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 403 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 404 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 409 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 500 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

<h3 id="submit-feedback-for-a-search-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Feedback recorded|[FeedbackResponse](#schemafeedbackresponse)|
|400|Bad Request|Invalid request body|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|403|Forbidden|Feedback is not available for this team|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|404|Not Found|Search not found for this team|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|409|Conflict|Feedback cannot be recorded for this search|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|500|Internal Server Error|Server error|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-interact">Interact</h1>

## List interact sessions

<a id="opIdlistBrowserSessions"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/interact \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /interact`

<h3 id="list-interact-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter sessions by status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|destroyed|

> Example responses

> 200 Response

```json
{
  "success": true,
  "sessions": [
    {
      "id": "string",
      "status": "active",
      "cdpUrl": "string",
      "liveViewUrl": "string",
      "interactiveLiveViewUrl": "string",
      "streamWebView": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "lastActivity": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

<h3 id="list-interact-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of interact sessions|Inline|
|402|Payment Required|Payment required|Inline|

<h3 id="list-interact-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|sessions|[object]|false|none|none|
|» id|string|false|none|none|
|» status|string|false|none|none|
|» cdpUrl|string|false|none|none|
|» liveViewUrl|string|false|none|none|
|» interactiveLiveViewUrl|string|false|none|URL to interact with the interact session in real time (click, type, scroll)|
|» streamWebView|boolean|false|none|none|
|» createdAt|string(date-time)|false|none|none|
|» lastActivity|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|active|
|» status|destroyed|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an interact session

<a id="opIdcreateBrowserSession"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/interact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ttl": 300,
    "activityTtl": 10,
    "streamWebView": true,
    "blockAds": true,
    "profile": {
      "name": "string",
      "saveChanges": true
    },
    "location": {
      "country": "GB"
    }
  }'
```

`POST /interact`

> Body parameter

```json
{
  "ttl": 300,
  "activityTtl": 10,
  "streamWebView": true,
  "blockAds": true,
  "profile": {
    "name": "string",
    "saveChanges": true
  },
  "location": {
    "country": "GB"
  }
}
```

<h3 id="create-an-interact-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» ttl|body|integer|false|Total time-to-live in seconds for the interact session|
|» activityTtl|body|integer|false|Time in seconds before the session is destroyed due to inactivity|
|» streamWebView|body|boolean|false|Whether to stream a live view of the browser|
|» blockAds|body|boolean|false|Enable ad and cookie popup blocking, as in scrape. Sessions started from a scrape with interact use the scrape's blockAds.|
|» profile|body|object|false|Enable persistent storage across interact sessions. Data saved in one session can be loaded in a later session using the same name.|
|» » name|body|string|true|A name for the profile. Sessions with the same name share storage.|
|» » saveChanges|body|boolean|false|When true, browser state is saved back to the profile on close. Set to false to load existing data without writing. Multiple non-saving sessions are allowed but only one saving session at a time.|
|» location|body|object|false|Country the session browses from. Defaults to the US. Sessions started from a scrape with interact use the scrape's location.|
|» » country|body|string|true|ISO 3166-1 alpha-2 country code, such as `GB` or `DE`. Case-insensitive.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "string",
  "cdpUrl": "string",
  "liveViewUrl": "string",
  "interactiveLiveViewUrl": "string",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

<h3 id="create-an-interact-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Interact session created successfully|Inline|
|402|Payment Required|Payment required|Inline|

<h3 id="create-an-interact-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|The unique session identifier|
|cdpUrl|string|false|none|WebSocket URL for Chrome DevTools Protocol access|
|liveViewUrl|string|false|none|URL to view the interact session in real time|
|interactiveLiveViewUrl|string|false|none|URL to interact with the interact session in real time (click, type, scroll)|
|expiresAt|string(date-time)|false|none|When the session will expire based on TTL|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Execute code in an interact session

<a id="opIdexecuteBrowserCode"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/interact/string/execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string",
    "language": "node",
    "timeout": 1
  }'
```

`POST /interact/{sessionId}/execute`

> Body parameter

```json
{
  "code": "string",
  "language": "node",
  "timeout": 1
}
```

<h3 id="execute-code-in-an-interact-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|The interact session ID|
|body|body|object|true|none|
|» code|body|string|true|Code to execute in the browser sandbox|
|» language|body|string|false|Language of the code to execute. Use `node` for JavaScript or `bash` for agent-browser CLI commands.|
|» timeout|body|integer|false|Execution timeout in seconds|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|python|
|» language|node|
|» language|bash|

> Example responses

> 200 Response

```json
{
  "success": true,
  "stdout": "string",
  "result": "string",
  "stderr": "string",
  "exitCode": 0,
  "killed": true,
  "error": "string"
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

<h3 id="execute-code-in-an-interact-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Code executed successfully|Inline|
|402|Payment Required|Payment required|Inline|

<h3 id="execute-code-in-an-interact-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|stdout|string \| null|false|none|Standard output from the code execution|
|result|string \| null|false|none|Standard output (alias for stdout)|
|stderr|string \| null|false|none|Standard error output from the code execution|
|exitCode|integer \| null|false|none|Exit code of the executed process|
|killed|boolean|false|none|Whether the process was killed due to timeout|
|error|string \| null|false|none|Error message if the code raised an exception|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an interact session

<a id="opIddeleteBrowserSession"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/interact/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /interact/{sessionId}`

<h3 id="delete-an-interact-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|The interact session ID|

> Example responses

> 200 Response

```json
{
  "success": true,
  "sessionDurationMs": 0,
  "creditsBilled": 0
}
```

> 402 Response

```json
{
  "error": "Payment required to access this resource."
}
```

<h3 id="delete-an-interact-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Interact session deleted successfully|Inline|
|402|Payment Required|Payment required|Inline|

<h3 id="delete-an-interact-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|sessionDurationMs|integer|false|none|Total session duration in milliseconds|
|creditsBilled|number|false|none|Number of credits billed for the session|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-support">Support</h1>

## Ask the Firecrawl support agent

<a id="opIdaskSupportAgent"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/support/ask \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "question": "string",
    "rationale": "string"
  }'
```

`POST /support/ask`

Diagnose Firecrawl job, account, and API usage issues with an AI support agent.

> Body parameter

```json
{
  "question": "string",
  "rationale": "string"
}
```

<h3 id="ask-the-firecrawl-support-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupportAskRequest](#schemasupportaskrequest)|true|none|
|» question|body|string|true|Question or issue for the support agent to diagnose.|
|» rationale|body|string|false|Optional context about what the end user is trying to accomplish.|

> Example responses

> 200 Response

```json
{
  "answer": "string",
  "confidence": "high",
  "fixParameters": {},
  "validation": {},
  "feedback": {},
  "durationMs": 0
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "error": "string"
}
```

> 503 Response

```json
{
  "error": "string"
}
```

> 504 Response

```json
{
  "error": "string"
}
```

<h3 id="ask-the-firecrawl-support-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Support agent answer|[SupportAskResponse](#schemasupportaskresponse)|
|400|Bad Request|Invalid request|[SupportProxyErrorResponse](#schemasupportproxyerrorresponse)|
|401|Unauthorized|Missing or invalid bearer token|[SupportProxyErrorResponse](#schemasupportproxyerrorresponse)|
|503|Service Unavailable|Support agent unavailable|[SupportProxyErrorResponse](#schemasupportproxyerrorresponse)|
|504|Gateway Timeout|Support agent timeout|[SupportProxyErrorResponse](#schemasupportproxyerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-research">Research</h1>

## Search papers

<a id="opIdresearchSearchPapers"></a>

> Code samples

```bash
curl 'https://api.firecrawl.dev/v2/search/research/papers?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/research/papers`

<h3 id="search-papers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Natural-language paper search query.|
|k|query|integer|false|Maximum number of ranked papers to return.|
|authors|query|string|false|Author substring filter. Repeat or pass a comma-separated value; all filters must match.|
|categories|query|string|false|Paper category filter. Repeat or pass a comma-separated value; all filters must match.|
|from|query|string(date)|false|Inclusive lower bound on created/updated date.|
|to|query|string(date)|false|Inclusive upper bound on created/updated date.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "results": [
    {
      "paperId": "2014215642691656232",
      "primaryId": "arxiv:2105.05233",
      "ids": {
        "arxiv": [
          "2105.05233"
        ]
      },
      "title": "Diffusion Models Beat GANs on Image Synthesis",
      "abstract": "We show that diffusion models can achieve image sample quality superior to the current state-of-the-art generative models...",
      "score": 0.0163934
    }
  ]
}
```

<h3 id="search-papers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranked paper results.|[ResearchSearchPapersResponse](#schemaresearchsearchpapersresponse)|
|400|Bad Request|Invalid request|None|
|401|Unauthorized|Missing or invalid bearer token|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inspect or read a paper

<a id="opIdresearchGetPaper"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/search/research/papers/2014215642691656232 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/research/papers/{id}`

<h3 id="inspect-or-read-a-paper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Paper reference: a canonical paperId or source-specific primaryId.|
|query|query|string|false|When present, returns the top matching full-text passages for this question. Omit it to inspect metadata only.|
|k|query|integer|false|Passage count for read mode. Only valid when query is present.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "paper": {
    "paperId": "2014215642691656232",
    "ids": {
      "arxiv": [
        "2105.05233"
      ]
    },
    "title": "Diffusion Models Beat GANs on Image Synthesis",
    "abstract": "We show that diffusion models can achieve image sample quality superior to the current state-of-the-art generative models...",
    "authors": "Prafulla Dhariwal, Alexander Nichol",
    "categories": [
      "cs.LG"
    ],
    "createdDate": "Wed, 11 May 2021 18:01:01 GMT",
    "updateDate": "2021-06-01"
  }
}
```

<h3 id="inspect-or-read-a-paper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paper metadata or read-mode passages.|Inline|
|400|Bad Request|Invalid request|None|
|401|Unauthorized|Missing or invalid bearer token|None|
|404|Not Found|Paper not found|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="inspect-or-read-a-paper-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ResearchPaperMetadataResponse](#schemaresearchpapermetadataresponse)|false|none|none|
|*oneOf*|[ResearchReadPaperResponse](#schemaresearchreadpaperresponse)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Find related papers

<a id="opIdresearchRelatedPapers"></a>

> Code samples

```bash
curl 'https://api.firecrawl.dev/v2/search/research/papers/2014215642691656232/similar?intent=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/research/papers/{id}/similar`

<h3 id="find-related-papers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Primary seed paper reference.|
|intent|query|string|true|Natural-language ranking/filtering intent used for semantic ranking.|
|mode|query|string|false|Structural expansion mode.|
|k|query|integer|false|Maximum number of related papers to return.|
|rerank|query|boolean|false|Apply an additional rerank over fused candidates.|
|anchor|query|string|false|Additional seed paper reference. Repeat this parameter for multiple anchors.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|similar|
|mode|citers|
|mode|references|

> Example responses

> 200 Response

```json
{
  "success": true,
  "results": [
    {
      "paperId": "482107036680302043",
      "primaryId": "arxiv:2006.11239",
      "ids": {
        "arxiv": [
          "2006.11239"
        ]
      },
      "title": "Denoising Diffusion Probabilistic Models",
      "abstract": "We present high quality image synthesis results using diffusion probabilistic models...",
      "score": 0.032119,
      "signals": {
        "structural": 12,
        "semantic": 0.61,
        "articleRank": 0.00031,
        "seedOverlap": 2
      }
    }
  ],
  "poolSize": 40,
  "truncated": false
}
```

<h3 id="find-related-papers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranked related papers.|[ResearchSimilarPapersResponse](#schemaresearchsimilarpapersresponse)|
|400|Bad Request|Invalid request|None|
|401|Unauthorized|Missing or invalid bearer token|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-developer">Developer</h1>

## Search the developer index

<a id="opIddeveloperSearch"></a>

> Code samples

```bash
curl 'https://api.firecrawl.dev/v2/search/developer?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/developer`

<h3 id="search-the-developer-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Natural-language question or search phrase.|
|k|query|integer|false|Number of ranked results to return.|
|types|query|[string]|false|Result kinds to search. Defaults to all four. Accepts a repeated parameter (`types=issue&types=pull_request`) or one comma-separated value (`types=issue,pull_request`).|
|repos|query|[string]|false|Repository slugs to scope the repository half of the index to, such as `firecrawl/firecrawl`. Applies to the `issue`, `pull_request`, and `readme` types only. Sent together with `sources`, the two halves are combined rather than intersected, so matching results come back from either. Returns 400 when no repository type is in `types`, reporting that `repos` cannot match any requested type and that you should add repository types or drop `repos`.|
|sources|query|[string]|false|Documentation source ids to scope the documentation half to, at most 20. Applies to the `doc` type only. Not a fixed enum: ids reflect the documentation sites in the index and the set grows over time, so confirm an id resolves by sending it and reading the `sources` array on the response. Returns 400 with `sources cannot match any requested type; add doc or drop sources` when `doc` is not in `types`.|
|skills|query|string|false|Set to `only` to limit the search to indexed agent-skill files.|
|passages|query|integer|false|Matched passages to return per result.|
|language|query|string|false|Repository primary language, such as `Rust`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results. See [how the repository filters scope a search](/api-reference/endpoint/developer-search#how-the-repository-filters-scope-a-search).|
|topic|query|string|false|Repository topic, such as `async`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|license|query|string|false|Repository license, such as `MIT`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|min_stars|query|integer|false|Lower bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|max_stars|query|integer|false|Upper bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|archived|query|boolean|false|Include or exclude archived repositories. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|fork|query|boolean|false|Include or exclude forks. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|types|doc|
|types|issue|
|types|pull_request|
|types|readme|
|skills|only|

> Example responses

> 200 Response

```json
{
  "success": true,
  "results": [
    {
      "id": "issue:firecrawl/firecrawl#1234",
      "type": "issue",
      "url": "https://github.com/firecrawl/firecrawl/issues/1234",
      "title": "Retries are not applied to 429 responses",
      "passages": [
        {
          "text": "The client treats 429 as a terminal status, so the backoff never runs."
        }
      ]
    }
  ],
  "coverage": {
    "doc": "ok",
    "issue": "ok",
    "pull_request": "ok",
    "readme": "ok"
  },
  "reranked": true
}
```

<h3 id="search-the-developer-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranked developer results with matched passages.|[DeveloperSearchResponse](#schemadevelopersearchresponse)|
|400|Bad Request|Invalid request, including a filter that cannot match any requested type|None|
|401|Unauthorized|Missing or invalid bearer token|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search the developer index

<a id="opIddeveloperSearchPost"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/search/developer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "how do I configure retries",
    "k": 10,
    "types": [
      "issue",
      "pull_request"
    ]
  }'
```

`POST /search/developer`

> Body parameter

```json
{
  "query": "how do I configure retries",
  "k": 10,
  "types": [
    "issue",
    "pull_request"
  ]
}
```

<h3 id="search-the-developer-index-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|none|
|» k|body|integer|false|none|
|» types|body|[string]|false|none|
|» repos|body|[string]|false|Repository slugs to scope the repository half of the index to. Applies to the `issue`, `pull_request`, and `readme` types only. Sent together with `sources`, the two halves are combined rather than intersected. Returns 400 when no repository type is in `types`, reporting that `repos` cannot match any requested type and that you should add repository types or drop `repos`.|
|» sources|body|[string]|false|Documentation source ids to scope the documentation half to, at most 20. Applies to the `doc` type only. Not a fixed enum: ids reflect the documentation sites in the index and the set grows over time. Returns 400 with `sources cannot match any requested type; add doc or drop sources` when `doc` is not in `types`.|
|» skills|body|string|false|Set to `only` to limit the search to indexed agent-skill files.|
|» passages|body|integer|false|none|
|» language|body|string|false|Repository primary language, such as `Rust`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results. See [how the repository filters scope a search](/api-reference/endpoint/developer-search#how-the-repository-filters-scope-a-search).|
|» topic|body|string|false|Repository topic, such as `async`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|» license|body|string|false|Repository license, such as `MIT`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|» min_stars|body|integer|false|Lower bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|» max_stars|body|integer|false|Upper bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|» archived|body|boolean|false|Include or exclude archived repositories. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|
|» fork|body|boolean|false|Include or exclude forks. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» types|doc|
|» types|issue|
|» types|pull_request|
|» types|readme|
|» skills|only|

> Example responses

> 200 Response

```json
{
  "success": true,
  "results": [
    {
      "id": "issue:firecrawl/firecrawl#1234",
      "url": "http://example.com",
      "title": "string",
      "passages": [
        {
          "text": "string",
          "citation_url": "http://example.com",
          "truncated": true,
          "served_span": {
            "start": 0,
            "end": 0
          },
          "full_tokens_est": 0
        }
      ],
      "license": "MIT"
    }
  ],
  "coverage": {
    "doc": "ok",
    "issue": "ok",
    "pull_request": "ok",
    "readme": "ok"
  },
  "reranked": true,
  "repos": [
    {
      "repo": "firecrawl/firecrawl",
      "indexed": true,
      "types": {
        "issue": true,
        "pullRequest": true,
        "readme": true
      }
    }
  ],
  "sources": [
    {
      "source": "some-docs-site",
      "indexed": true
    },
    {
      "source": "unknown-docs-site",
      "indexed": false
    }
  ]
}
```

<h3 id="search-the-developer-index-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranked developer results with matched passages.|[DeveloperSearchResponse](#schemadevelopersearchresponse)|
|400|Bad Request|Invalid request, including a filter that cannot match any requested type|None|
|401|Unauthorized|Missing or invalid bearer token|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-government">Government</h1>

## Search the Government Index

<a id="opIdgovSearch"></a>

> Code samples

```bash
curl 'https://api.firecrawl.dev/v2/search/gov?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/gov`

<h3 id="search-the-government-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Natural-language question or search phrase.|
|k|query|integer|false|Number of results to return.|
|jurisdiction|query|string|false|Keep only pages of one jurisdiction: `us` for federal, or `us-` plus a two-letter state or territory code, such as `us-ca` or `us-dc`.|
|court|query|string|false|Keep only pages labeled for one court, by CourtListener court id, such as `scotus`, `ca9` or `nysd`.|
|courtType|query|string|false|Keep only pages from one type of court: `federal-supreme`, `federal-appellate`, `federal-district`, `federal-bankruptcy`, `federal-special`, `military`, `state-supreme`, `state-appellate`, `state-trial`, `state-special`, `state-attorney-general`.|
|cites|query|string|false|Keep only pages that cite one law or case, as a printed citation such as `42 U.S.C. § 1983` or `5 U.S. 137`, or a citation id such as `us:usc:42:1983`.|
|domain|query|string|false|Keep only pages from one site, such as `irs.gov`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|courtType|federal-supreme|
|courtType|federal-appellate|
|courtType|federal-district|
|courtType|federal-bankruptcy|
|courtType|federal-special|
|courtType|military|
|courtType|state-supreme|
|courtType|state-appellate|
|courtType|state-trial|
|courtType|state-special|
|courtType|state-attorney-general|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "web": [
      {
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101",
        "title": "21 CFR Part 101 -- Food Labeling",
        "description": "Nutrition labeling of food shall be provided for all products intended for human consumption...",
        "position": 1
      }
    ]
  }
}
```

<h3 id="search-the-government-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranked Government Index results in the `web` group.|[GovSearchResponse](#schemagovsearchresponse)|
|400|Bad Request|Invalid request, including an unknown field|None|
|401|Unauthorized|Invalid bearer token|None|
|429|Too Many Requests|Rate limit exceeded|None|
|502|Bad Gateway|Upstream error|None|
|504|Gateway Timeout|Upstream timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search the Government Index

<a id="opIdgovSearchPost"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/search/gov \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "food labeling requirements for allergens",
    "k": 10
  }'
```

`POST /search/gov`

> Body parameter

```json
{
  "query": "food labeling requirements for allergens",
  "k": 10
}
```

<h3 id="search-the-government-index-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|Natural-language question or search phrase.|
|» k|body|integer|false|Number of results to return.|
|» jurisdiction|body|string|false|Keep only pages of one jurisdiction: `us` for federal, or `us-` plus a two-letter state or territory code, such as `us-ca` or `us-dc`.|
|» court|body|string|false|Keep only pages labeled for one court, by CourtListener court id, such as `scotus`, `ca9` or `nysd`.|
|» courtType|body|string|false|Keep only pages from one type of court: `federal-supreme`, `federal-appellate`, `federal-district`, `federal-bankruptcy`, `federal-special`, `military`, `state-supreme`, `state-appellate`, `state-trial`, `state-special`, `state-attorney-general`.|
|» cites|body|string|false|Keep only pages that cite one law or case, as a printed citation such as `42 U.S.C. § 1983` or `5 U.S. 137`, or a citation id such as `us:usc:42:1983`.|
|» domain|body|string|false|Keep only pages from one site, such as `irs.gov`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» courtType|federal-supreme|
|» courtType|federal-appellate|
|» courtType|federal-district|
|» courtType|federal-bankruptcy|
|» courtType|federal-special|
|» courtType|military|
|» courtType|state-supreme|
|» courtType|state-appellate|
|» courtType|state-trial|
|» courtType|state-special|
|» courtType|state-attorney-general|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "web": [
      {
        "url": "http://example.com",
        "title": "string",
        "description": "string",
        "position": 0
      }
    ]
  }
}
```

<h3 id="search-the-government-index-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranked Government Index results in the `web` group.|[GovSearchResponse](#schemagovsearchresponse)|
|400|Bad Request|Invalid request, including an unknown field|None|
|401|Unauthorized|Invalid bearer token|None|
|429|Too Many Requests|Rate limit exceeded|None|
|502|Bad Gateway|Upstream error|None|
|504|Gateway Timeout|Upstream timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-feedback">Feedback</h1>

## Submit feedback for a v2 job

<a id="opIdsubmitEndpointFeedback"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rating": "good",
    "valuableSources": [
      {
        "url": "http://example.com",
        "reason": "string"
      }
    ],
    "missingContent": [
      {
        "topic": "string",
        "description": "string"
      }
    ],
    "querySuggestions": "string",
    "origin": "api",
    "integration": "string",
    "endpoint": "search",
    "jobId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "issues": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "note": "string",
    "url": "http://example.com",
    "pageNumbers": [
      1
    ],
    "metadata": {}
  }'
```

`POST /feedback`

> Body parameter

```json
{
  "rating": "good",
  "valuableSources": [
    {
      "url": "http://example.com",
      "reason": "string"
    }
  ],
  "missingContent": [
    {
      "topic": "string",
      "description": "string"
    }
  ],
  "querySuggestions": "string",
  "origin": "api",
  "integration": "string",
  "endpoint": "search",
  "jobId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issues": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "note": "string",
  "url": "http://example.com",
  "pageNumbers": [
    1
  ],
  "metadata": {}
}
```

<h3 id="submit-feedback-for-a-v2-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EndpointFeedbackRequest](#schemaendpointfeedbackrequest)|true|none|
|» rating|body|string|true|none|
|» valuableSources|body|[object]|false|none|
|» » url|body|string(uri)|true|none|
|» » reason|body|string|false|none|
|» missingContent|body|[object]|false|none|
|» » topic|body|string|true|none|
|» » description|body|string|false|none|
|» querySuggestions|body|string|false|none|
|» origin|body|string|false|none|
|» integration|body|string \| null|false|none|
|» endpoint|body|string|true|none|
|» jobId|body|string(uuid)|true|none|
|» issues|body|[string]|false|none|
|» tags|body|[string]|false|none|
|» note|body|string|false|none|
|» url|body|string(uri)|false|none|
|» pageNumbers|body|[integer]|false|none|
|» metadata|body|object|false|Small endpoint-specific metadata object. Must be 8KB or smaller; do not include full endpoint results.|
|» missingContent|body|[object]|false|none|
|» » topic|body|string|true|none|
|» » description|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rating|good|
|» rating|partial|
|» rating|bad|
|» endpoint|search|
|» endpoint|scrape|
|» endpoint|parse|
|» endpoint|map|

> Example responses

> 200 Response

```json
{
  "success": true,
  "feedbackId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "creditsRefunded": 0,
  "alreadySubmitted": true,
  "dailyCapReached": true,
  "creditsRefundedToday": 0,
  "dailyRefundCap": 0,
  "warning": "string"
}
```

> 400 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 403 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 404 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 409 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

> 500 Response

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

<h3 id="submit-feedback-for-a-v2-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Feedback recorded|[FeedbackResponse](#schemafeedbackresponse)|
|400|Bad Request|Invalid request body|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|403|Forbidden|Feedback is not available for this team|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|404|Not Found|Job not found for this team|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|409|Conflict|Feedback cannot be recorded for this job|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|
|500|Internal Server Error|Server error|[FeedbackErrorResponse](#schemafeedbackerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="firecrawl-api-threat-protection">Threat Protection</h1>

## Get the team's threat protection policy

<a id="opIdgetThreatProtection"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/threat-protection \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team/threat-protection`

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "mode": "normal",
    "riskScoreThreshold": 75,
    "blacklist": [
      "*.risky.example"
    ],
    "whitelist": [
      "*.trusted.example"
    ],
    "blockedTlds": [
      "zip"
    ],
    "failurePolicy": "closed",
    "allowRequestOverrides": true,
    "configured": true,
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="get-the-teams-threat-protection-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Effective threat protection policy for the team's organization.|Inline|
|403|Forbidden|Threat protection is not enabled for this team, or a request override was sent while overrides are disabled.|None|

<h3 id="get-the-teams-threat-protection-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» mode|string|false|none|Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).|
|» riskScoreThreshold|integer|false|none|Normalized score (0-100) at or above which a classifier verdict is blocked. Lower is stricter.|
|» blacklist|[string]|false|none|Exact domains or globs (e.g. `*.example.com`) always blocked, without a classifier call.|
|» whitelist|[string]|false|none|Exact domains or globs always allowed. Wins over every other rule.|
|» blockedTlds|[string]|false|none|Top-level domains to block outright, lowercase without a leading dot.|
|» failurePolicy|string|false|none|Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows.|
|» allowRequestOverrides|boolean|false|none|Whether individual requests may pass a `threatProtection` object. When false, such requests are rejected with 403.|
|» configured|boolean|false|none|Whether the organization has saved a policy (vs. serving defaults).|
|» updatedAt|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» mode|off|
|» mode|normal|
|» failurePolicy|open|
|» failurePolicy|closed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update the team's threat protection policy

<a id="opIdupdateThreatProtection"></a>

> Code samples

```bash
curl https://api.firecrawl.dev/v2/team/threat-protection \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mode": "normal",
    "riskScoreThreshold": 75,
    "blacklist": [
      "*.risky.example"
    ],
    "whitelist": [
      "*.trusted.example"
    ],
    "blockedTlds": [
      "zip"
    ],
    "failurePolicy": "closed",
    "allowRequestOverrides": true
  }'
```

`PUT /team/threat-protection`

Full-document update. Unspecified fields reset to defaults. Enterprise feature, team admins only.

> Body parameter

```json
{
  "mode": "normal",
  "riskScoreThreshold": 75,
  "blacklist": [
    "*.risky.example"
  ],
  "whitelist": [
    "*.trusted.example"
  ],
  "blockedTlds": [
    "zip"
  ],
  "failurePolicy": "closed",
  "allowRequestOverrides": true
}
```

<h3 id="update-the-teams-threat-protection-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» mode|body|string|true|Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).|
|» riskScoreThreshold|body|integer|false|Normalized score (0-100) at or above which a classifier verdict is blocked. Lower is stricter.|
|» blacklist|body|[string]|false|Exact domains or globs (e.g. `*.example.com`) always blocked, without a classifier call.|
|» whitelist|body|[string]|false|Exact domains or globs always allowed. Wins over every other rule.|
|» blockedTlds|body|[string]|false|Top-level domains to block outright, lowercase without a leading dot.|
|» failurePolicy|body|string|false|Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows.|
|» allowRequestOverrides|body|boolean|false|Whether individual requests may pass a `threatProtection` object. When false, such requests are rejected with 403.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|off|
|» mode|normal|
|» failurePolicy|open|
|» failurePolicy|closed|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "mode": "normal",
    "riskScoreThreshold": 75,
    "blacklist": [
      "*.risky.example"
    ],
    "whitelist": [
      "*.trusted.example"
    ],
    "blockedTlds": [
      "zip"
    ],
    "failurePolicy": "closed",
    "allowRequestOverrides": true,
    "configured": true,
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="update-the-teams-threat-protection-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Effective threat protection policy for the team's organization.|Inline|
|400|Bad Request|Invalid policy document.|None|
|403|Forbidden|Threat protection is not enabled for this team, or a request override was sent while overrides are disabled.|None|

<h3 id="update-the-teams-threat-protection-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» mode|string|false|none|Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).|
|» riskScoreThreshold|integer|false|none|Normalized score (0-100) at or above which a classifier verdict is blocked. Lower is stricter.|
|» blacklist|[string]|false|none|Exact domains or globs (e.g. `*.example.com`) always blocked, without a classifier call.|
|» whitelist|[string]|false|none|Exact domains or globs always allowed. Wins over every other rule.|
|» blockedTlds|[string]|false|none|Top-level domains to block outright, lowercase without a leading dot.|
|» failurePolicy|string|false|none|Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows.|
|» allowRequestOverrides|boolean|false|none|Whether individual requests may pass a `threatProtection` object. When false, such requests are rejected with 403.|
|» configured|boolean|false|none|Whether the organization has saved a policy (vs. serving defaults).|
|» updatedAt|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» mode|off|
|» mode|normal|
|» failurePolicy|open|
|» failurePolicy|closed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_AuditMetadata">AuditMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaauditmetadata"></a>
<a id="schema_AuditMetadata"></a>
<a id="tocSauditmetadata"></a>
<a id="tocsauditmetadata"></a>

```json
{
  "username": "string"
}
```

User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|The username associated with the request.|

<h2 id="tocS_AgentTraceAgent">AgentTraceAgent</h2>
<!-- backwards compatibility -->
<a id="schemaagenttraceagent"></a>
<a id="schema_AgentTraceAgent"></a>
<a id="tocSagenttraceagent"></a>
<a id="tocsagenttraceagent"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "role": "orchestrator",
  "name": "string",
  "parentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Identity of the agent that emitted the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|role|string|true|none|none|
|name|string|true|none|none|
|parentId|string(uuid)|false|none|ID of the parent agent (present on subagents).|

#### Enumerated Values

|Property|Value|
|---|---|
|role|orchestrator|
|role|subagent|
|role|system|

<h2 id="tocS_AgentTraceError">AgentTraceError</h2>
<!-- backwards compatibility -->
<a id="schemaagenttraceerror"></a>
<a id="schema_AgentTraceError"></a>
<a id="tocSagenttraceerror"></a>
<a id="tocsagenttraceerror"></a>

```json
{
  "code": "cancelled",
  "source": "agent",
  "retryable": true,
  "message": "string"
}
```

Structured error attached to terminal and error events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|source|string|true|none|none|
|retryable|boolean|true|none|none|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|cancelled|
|code|credit_limit_reached|
|code|parent_finished|
|code|refused|
|code|internal|
|source|agent|
|source|tool|
|source|billing|
|source|system|

<h2 id="tocS_AgentTraceArtifact">AgentTraceArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaagenttraceartifact"></a>
<a id="schema_AgentTraceArtifact"></a>
<a id="tocSagenttraceartifact"></a>
<a id="tocsagenttraceartifact"></a>

```json
{
  "kind": "json",
  "artifactId": "string",
  "path": "string",
  "snapshotId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "change": "init",
  "changedFields": [
    "string"
  ],
  "itemCount": 0,
  "sourceToolCallId": "string"
}
```

Descriptor for a change to an output artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|artifactId|string|true|none|none|
|path|string|false|none|Workspace path of the artifact, e.g. /workspace/data.json.|
|snapshotId|string(uuid)|true|none|Pass to GET /agent/{jobId}/snapshots/{snapshotId} to fetch this snapshot's content.|
|change|string|true|none|none|
|changedFields|[string]|false|none|none|
|itemCount|integer|false|none|none|
|sourceToolCallId|string|false|none|The tool call that produced this change, when applicable.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|json|
|kind|markdown|
|kind|html|
|kind|screenshot|
|kind|text|
|change|init|
|change|partial|
|change|append|
|change|modify|
|change|update|

<h2 id="tocS_AgentTraceEvent">AgentTraceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaagenttraceevent"></a>
<a id="schema_AgentTraceEvent"></a>
<a id="tocSagenttraceevent"></a>
<a id="tocsagenttraceevent"></a>

```json
{
  "schemaVersion": 1,
  "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "runId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "occurredAt": "1970-01-01T00:00:00Z",
  "producerSequence": 0,
  "agent": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "role": "orchestrator",
    "name": "string",
    "parentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "type": "run.started"
}
```

A canonical execution event from an agent run. Every event carries the envelope fields schemaVersion, eventId, runId, occurredAt, producerSequence and agent; the type field discriminates the variant. usage.recorded events are internal and never exposed, and agent.started events omit the model field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when the run starts.|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when cancellation is requested (via DELETE /agent/{jobId}).|
|reason|string|true|none|none|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Terminal event for the run.|
|outcome|string|true|none|none|
|error|object \| null|true|none|Null when outcome is succeeded; otherwise the structured error.|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when an agent (orchestrator or subagent) starts.|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when an agent finishes.|
|outcome|string|true|none|none|
|durationMs|integer|true|none|none|
|error|object \| null|true|none|Null when outcome is succeeded; otherwise the structured error.|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when a browser session starts.|
|sessionId|string|true|none|none|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when a browser session finishes.|
|sessionId|string|true|none|none|
|durationMs|integer|true|none|none|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when the orchestrator reports progress.|
|phase|string|true|none|none|
|message|string|true|none|none|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|A summary of the agent's reasoning.|
|text|string|true|none|none|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when a tool call starts.|
|toolCallId|string|true|none|none|
|toolName|string|true|none|none|
|parameters|object|true|none|The input passed to the tool (arbitrary JSON).|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when a tool call finishes.|
|toolCallId|string|true|none|none|
|toolName|string|true|none|none|
|result|object|true|none|The result returned by the tool (arbitrary JSON).|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when an output artifact changes.|
|artifact|[AgentTraceArtifact](#schemaagenttraceartifact)|true|none|Descriptor for a change to an output artifact.|
|*oneOf*|object|false|none|none|
|schemaVersion|integer|true|none|none|
|eventId|string(uuid)|true|none|Unique ID of this event.|
|runId|string(uuid)|true|none|The agent job ID this event belongs to.|
|occurredAt|string(date-time)|true|none|none|
|producerSequence|integer|true|none|Monotonic sequence number from the emitting agent; order events by it.|
|agent|[AgentTraceAgent](#schemaagenttraceagent)|true|none|Identity of the agent that emitted the event.|
|type|string|true|none|Emitted when a non-fatal error occurs during the run.|
|error|[AgentTraceError](#schemaagenttraceerror)|true|none|Structured error attached to terminal and error events.|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaVersion|1|
|type|run.started|
|schemaVersion|1|
|type|run.cancel_requested|
|reason|user|
|schemaVersion|1|
|type|run.finished|
|outcome|succeeded|
|outcome|failed|
|outcome|cancelled|
|outcome|refused|
|outcome|credit_limit_reached|
|schemaVersion|1|
|type|agent.started|
|schemaVersion|1|
|type|agent.finished|
|outcome|succeeded|
|outcome|failed|
|outcome|cancelled|
|outcome|refused|
|schemaVersion|1|
|type|browser.session.started|
|schemaVersion|1|
|type|browser.session.finished|
|schemaVersion|1|
|type|progress.reported|
|phase|planning|
|phase|working|
|phase|finalizing|
|schemaVersion|1|
|type|reasoning.summary|
|schemaVersion|1|
|type|tool_call.started|
|schemaVersion|1|
|type|tool_call.finished|
|schemaVersion|1|
|type|artifact.updated|
|schemaVersion|1|
|type|error.occurred|

<h2 id="tocS_SuccessResponse">SuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse"></a>
<a id="schema_SuccessResponse"></a>
<a id="tocSsuccessresponse"></a>
<a id="tocssuccessresponse"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_MonitorSchedule">MonitorSchedule</h2>
<!-- backwards compatibility -->
<a id="schemamonitorschedule"></a>
<a id="schema_MonitorSchedule"></a>
<a id="tocSmonitorschedule"></a>
<a id="tocsmonitorschedule"></a>

```json
{
  "cron": "*/30 * * * *",
  "text": "every 30 minutes",
  "timezone": "UTC"
}
```

Schedule for monitor checks. Provide either `cron` or `text`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron|string|false|none|Five-field cron expression. Minimum interval is 5 minutes.|
|text|string|false|none|Natural language schedule. Supported examples include `every 30 minutes`, `every 15 minutes starting at :07`, `hourly`, `every 2 hours`, `daily`, `daily at 9:00`, `daily at 9am`, `daily at 5:30 PM`, and `weekly`.|
|timezone|string|false|none|IANA timezone for the schedule.|

<h2 id="tocS_MonitorWebhook">MonitorWebhook</h2>
<!-- backwards compatibility -->
<a id="schemamonitorwebhook"></a>
<a id="schema_MonitorWebhook"></a>
<a id="tocSmonitorwebhook"></a>
<a id="tocsmonitorwebhook"></a>

```json
{
  "url": "http://example.com",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "metadata": {},
  "events": [
    "monitor.page"
  ]
}
```

Webhook destination for monitor page and check completion events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL to send monitor webhooks to.|
|headers|object|false|none|Headers to send to the webhook URL.|
|metadata|object|false|none|Custom metadata included in webhook payloads.|
|events|[string]|false|none|Monitor webhook events to receive. Defaults to all monitor events.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|monitor.page|
|events|monitor.check.completed|

<h2 id="tocS_MonitorNotification">MonitorNotification</h2>
<!-- backwards compatibility -->
<a id="schemamonitornotification"></a>
<a id="schema_MonitorNotification"></a>
<a id="tocSmonitornotification"></a>
<a id="tocsmonitornotification"></a>

```json
{
  "email": {
    "enabled": false,
    "recipients": [
      "user@example.com"
    ],
    "includeDiffs": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|none|

<h2 id="tocS_MonitorTarget">MonitorTarget</h2>
<!-- backwards compatibility -->
<a id="schemamonitortarget"></a>
<a id="schema_MonitorTarget"></a>
<a id="tocSmonitortarget"></a>
<a id="tocsmonitortarget"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "scrape",
  "urls": [
    "http://example.com"
  ],
  "scrapeOptions": {
    "formats": [
      "markdown"
    ],
    "onlyMainContent": true,
    "onlyCleanContent": false,
    "includeTags": [
      "string"
    ],
    "excludeTags": [
      "string"
    ],
    "maxAge": 172800000,
    "minAge": 0,
    "headers": {},
    "waitFor": 0,
    "mobile": false,
    "skipTlsVerification": true,
    "timeout": 60000,
    "parsers": [
      "pdf",
      "image"
    ],
    "actions": [
      {
        "type": "wait",
        "milliseconds": 1
      }
    ],
    "location": {
      "country": "US",
      "languages": [
        "en-US"
      ]
    },
    "removeBase64Images": true,
    "blockAds": true,
    "proxy": "auto",
    "storeInCache": true,
    "lockdown": false,
    "checkPromptInjection": false,
    "redactPII": false,
    "profile": {
      "name": "string",
      "saveChanges": true
    },
    "threatProtection": {
      "mode": "off",
      "riskScoreThreshold": 75,
      "blacklist": [
        "string"
      ],
      "whitelist": [
        "string"
      ],
      "blockedTlds": [
        "string"
      ],
      "failurePolicy": "open"
    },
    "auditMetadata": {
      "username": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|id|string(uuid)|false|none|Optional stable ID for this target. Generated if omitted.|
|type|string|true|none|none|
|urls|[string(uri)]|true|none|none|
|scrapeOptions|[ScrapeOptions](#schemascrapeoptions)|false|none|none|
|*oneOf*|object|false|none|none|
|id|string(uuid)|false|none|Optional stable ID for this target. Generated if omitted.|
|type|string|true|none|none|
|url|string(uri)|true|none|none|
|crawlOptions|object|false|none|Crawl options such as `limit`, `maxDepth`, `includePaths`, and `excludePaths`.|
|scrapeOptions|[ScrapeOptions](#schemascrapeoptions)|false|none|none|
|*oneOf*|object|false|none|Runs web search queries on each check and alerts on new results that match the monitor's goal. Requires a non-empty top-level `goal` on the monitor unless `judgeEnabled` is `false`.|
|id|string(uuid)|false|none|Optional stable ID for this target. Generated if omitted.|
|type|string|true|none|none|
|queries|[string]|true|none|Search queries to run on each check (1-12).|
|searchWindow|string|false|none|Recency filter — only consider results published within this window.|
|maxResults|integer|false|none|Total results to evaluate per check, merged and deduped across all queries (a combined cap, not per-query).|
|includeDomains|[string]|false|none|Optional. Restrict results to these domains.|
|excludeDomains|[string]|false|none|Optional. Drop results from these domains.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|scrape|
|type|crawl|
|type|search|
|searchWindow|5m|
|searchWindow|15m|
|searchWindow|1h|
|searchWindow|6h|
|searchWindow|24h|
|searchWindow|7d|

<h2 id="tocS_MonitorCreateRequest">MonitorCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcreaterequest"></a>
<a id="schema_MonitorCreateRequest"></a>
<a id="tocSmonitorcreaterequest"></a>
<a id="tocsmonitorcreaterequest"></a>

```json
{
  "name": "string",
  "schedule": {
    "cron": "*/30 * * * *",
    "text": "every 30 minutes",
    "timezone": "UTC"
  },
  "webhook": {
    "url": "http://example.com",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "monitor.page"
    ]
  },
  "notification": {
    "email": {
      "enabled": false,
      "recipients": [
        "user@example.com"
      ],
      "includeDiffs": false
    }
  },
  "targets": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "scrape",
      "urls": [
        "http://example.com"
      ],
      "scrapeOptions": {
        "formats": [
          "markdown"
        ],
        "onlyMainContent": true,
        "onlyCleanContent": false,
        "includeTags": [
          "string"
        ],
        "excludeTags": [
          "string"
        ],
        "maxAge": 172800000,
        "minAge": 0,
        "headers": {},
        "waitFor": 0,
        "mobile": false,
        "skipTlsVerification": true,
        "timeout": 60000,
        "parsers": [
          "pdf",
          "image"
        ],
        "actions": [
          {
            "type": "wait",
            "milliseconds": 1
          }
        ],
        "location": {
          "country": "US",
          "languages": [
            "en-US"
          ]
        },
        "removeBase64Images": true,
        "blockAds": true,
        "proxy": "auto",
        "storeInCache": true,
        "lockdown": false,
        "checkPromptInjection": false,
        "redactPII": false,
        "profile": {
          "name": "string",
          "saveChanges": true
        },
        "threatProtection": {
          "mode": "off",
          "riskScoreThreshold": 75,
          "blacklist": [
            "string"
          ],
          "whitelist": [
            "string"
          ],
          "blockedTlds": [
            "string"
          ],
          "failurePolicy": "open"
        },
        "auditMetadata": {
          "username": "string"
        }
      }
    }
  ],
  "retentionDays": 30,
  "goal": "string",
  "judgeEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|schedule|[MonitorSchedule](#schemamonitorschedule)|true|none|Schedule for monitor checks. Provide either `cron` or `text`.|
|webhook|[MonitorWebhook](#schemamonitorwebhook)|false|none|Webhook destination for monitor page and check completion events.|
|notification|[MonitorNotification](#schemamonitornotification)|false|none|none|
|targets|[[MonitorTarget](#schemamonitortarget)]|true|none|none|
|retentionDays|integer|false|none|none|
|goal|string \| null|false|none|Plain-language goal used to judge whether changed pages are meaningful. If provided and `judgeEnabled` is omitted, judging is enabled automatically. Required (non-empty) when any target is a `search` target, unless `judgeEnabled` is `false`.|
|judgeEnabled|boolean|false|none|Whether to judge changed pages against `goal`. Requires a non-empty `goal` to run.|

<h2 id="tocS_MonitorUpdateRequest">MonitorUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemamonitorupdaterequest"></a>
<a id="schema_MonitorUpdateRequest"></a>
<a id="tocSmonitorupdaterequest"></a>
<a id="tocsmonitorupdaterequest"></a>

```json
{
  "name": "string",
  "schedule": {
    "cron": "*/30 * * * *",
    "text": "every 30 minutes",
    "timezone": "UTC"
  },
  "webhook": {
    "url": "http://example.com",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "monitor.page"
    ]
  },
  "notification": {
    "email": {
      "enabled": false,
      "recipients": [
        "user@example.com"
      ],
      "includeDiffs": false
    }
  },
  "targets": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "scrape",
      "urls": [
        "http://example.com"
      ],
      "scrapeOptions": {
        "formats": [
          "markdown"
        ],
        "onlyMainContent": true,
        "onlyCleanContent": false,
        "includeTags": [
          "string"
        ],
        "excludeTags": [
          "string"
        ],
        "maxAge": 172800000,
        "minAge": 0,
        "headers": {},
        "waitFor": 0,
        "mobile": false,
        "skipTlsVerification": true,
        "timeout": 60000,
        "parsers": [
          "pdf",
          "image"
        ],
        "actions": [
          {
            "type": "wait",
            "milliseconds": 1
          }
        ],
        "location": {
          "country": "US",
          "languages": [
            "en-US"
          ]
        },
        "removeBase64Images": true,
        "blockAds": true,
        "proxy": "auto",
        "storeInCache": true,
        "lockdown": false,
        "checkPromptInjection": false,
        "redactPII": false,
        "profile": {
          "name": "string",
          "saveChanges": true
        },
        "threatProtection": {
          "mode": "off",
          "riskScoreThreshold": 75,
          "blacklist": [
            "string"
          ],
          "whitelist": [
            "string"
          ],
          "blockedTlds": [
            "string"
          ],
          "failurePolicy": "open"
        },
        "auditMetadata": {
          "username": "string"
        }
      }
    }
  ],
  "retentionDays": 1,
  "goal": "string",
  "judgeEnabled": true,
  "status": "active"
}
```

Partial monitor update payload. Include at least one field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|schedule|[MonitorSchedule](#schemamonitorschedule)|false|none|Schedule for monitor checks. Provide either `cron` or `text`.|
|webhook|[MonitorWebhook](#schemamonitorwebhook)|false|none|Webhook destination for monitor page and check completion events.|
|notification|[MonitorNotification](#schemamonitornotification)|false|none|none|
|targets|[[MonitorTarget](#schemamonitortarget)]|false|none|none|
|retentionDays|integer|false|none|none|
|goal|string \| null|false|none|Plain-language goal used to judge whether changed pages are meaningful. If provided and `judgeEnabled` is omitted, judging is enabled automatically. Required (non-empty) when any target is a `search` target, unless `judgeEnabled` is `false`.|
|judgeEnabled|boolean|false|none|Whether to judge changed pages against `goal`. Requires a non-empty `goal` to run.|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_MonitorSummary">MonitorSummary</h2>
<!-- backwards compatibility -->
<a id="schemamonitorsummary"></a>
<a id="schema_MonitorSummary"></a>
<a id="tocSmonitorsummary"></a>
<a id="tocsmonitorsummary"></a>

```json
{
  "totalPages": 0,
  "same": 0,
  "changed": 0,
  "new": 0,
  "removed": 0,
  "error": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalPages|integer|false|none|none|
|same|integer|false|none|none|
|changed|integer|false|none|none|
|new|integer|false|none|none|
|removed|integer|false|none|none|
|error|integer|false|none|none|

<h2 id="tocS_Monitor">Monitor</h2>
<!-- backwards compatibility -->
<a id="schemamonitor"></a>
<a id="schema_Monitor"></a>
<a id="tocSmonitor"></a>
<a id="tocsmonitor"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "status": "active",
  "schedule": {
    "cron": "string",
    "timezone": "string"
  },
  "nextRunAt": "1970-01-01T00:00:00Z",
  "lastRunAt": "1970-01-01T00:00:00Z",
  "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "targets": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "scrape",
      "urls": [
        "http://example.com"
      ],
      "scrapeOptions": {
        "formats": [
          "markdown"
        ],
        "onlyMainContent": true,
        "onlyCleanContent": false,
        "includeTags": [
          "string"
        ],
        "excludeTags": [
          "string"
        ],
        "maxAge": 172800000,
        "minAge": 0,
        "headers": {},
        "waitFor": 0,
        "mobile": false,
        "skipTlsVerification": true,
        "timeout": 60000,
        "parsers": [
          "pdf",
          "image"
        ],
        "actions": [
          {
            "type": "wait",
            "milliseconds": 1
          }
        ],
        "location": {
          "country": "US",
          "languages": [
            "en-US"
          ]
        },
        "removeBase64Images": true,
        "blockAds": true,
        "proxy": "auto",
        "storeInCache": true,
        "lockdown": false,
        "checkPromptInjection": false,
        "redactPII": false,
        "profile": {
          "name": "string",
          "saveChanges": true
        },
        "threatProtection": {
          "mode": "off",
          "riskScoreThreshold": 75,
          "blacklist": [
            "string"
          ],
          "whitelist": [
            "string"
          ],
          "blockedTlds": [
            "string"
          ],
          "failurePolicy": "open"
        },
        "auditMetadata": {
          "username": "string"
        }
      }
    }
  ],
  "webhook": {
    "url": "http://example.com",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {},
    "events": [
      "monitor.page"
    ]
  },
  "notification": {
    "email": {
      "enabled": false,
      "recipients": [
        "user@example.com"
      ],
      "includeDiffs": false
    }
  },
  "retentionDays": 0,
  "estimatedCreditsPerMonth": 0,
  "lastCheckSummary": {
    "totalPages": 0,
    "same": 0,
    "changed": 0,
    "new": 0,
    "removed": 0,
    "error": 0
  },
  "goal": "string",
  "judgeEnabled": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|
|schedule|object|false|none|none|
|nextRunAt|string(date-time) \| null|false|none|none|
|lastRunAt|string(date-time) \| null|false|none|none|
|currentCheckId|string(uuid) \| null|false|none|none|
|targets|[[MonitorTarget](#schemamonitortarget)]|false|none|none|
|webhook|[MonitorWebhook](#schemamonitorwebhook)|false|none|Webhook destination for monitor page and check completion events.|
|notification|[MonitorNotification](#schemamonitornotification)|false|none|none|
|retentionDays|integer|false|none|none|
|estimatedCreditsPerMonth|integer \| null|false|none|Upper-bound monthly credit estimate. When judging is enabled, actual usage may be lower because judge credits are only charged for changed pages that are judged.|
|lastCheckSummary|[MonitorSummary](#schemamonitorsummary)|false|none|none|
|goal|string \| null|false|none|none|
|judgeEnabled|boolean|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|
|status|deleted|

<h2 id="tocS_MonitorCheck">MonitorCheck</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcheck"></a>
<a id="schema_MonitorCheck"></a>
<a id="tocSmonitorcheck"></a>
<a id="tocsmonitorcheck"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "queued",
  "trigger": "scheduled",
  "scheduledFor": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "estimatedCredits": 0,
  "reservedCredits": 0,
  "actualCredits": 0,
  "billingStatus": "string",
  "summary": {
    "totalPages": 0,
    "same": 0,
    "changed": 0,
    "new": 0,
    "removed": 0,
    "error": 0
  },
  "targetResults": [],
  "notificationStatus": {},
  "error": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|monitorId|string(uuid)|false|none|none|
|status|string|false|none|none|
|trigger|string|false|none|none|
|scheduledFor|string(date-time) \| null|false|none|none|
|startedAt|string(date-time) \| null|false|none|none|
|finishedAt|string(date-time) \| null|false|none|none|
|estimatedCredits|integer \| null|false|none|Upper-bound credits reserved for this check before Firecrawl knows how many pages changed and require judging.|
|reservedCredits|integer \| null|false|none|none|
|actualCredits|integer \| null|false|none|Final credits charged for this check after scrapes, crawls, and any changed-page judge calls complete.|
|billingStatus|string|false|none|none|
|summary|[MonitorSummary](#schemamonitorsummary)|false|none|none|
|targetResults|array|false|none|none|
|notificationStatus|object \| null|false|none|none|
|error|string \| null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|running|
|status|completed|
|status|failed|
|status|partial|
|status|skipped_overlap|
|status|skipped_no_credits|
|trigger|scheduled|
|trigger|manual|

<h2 id="tocS_MonitorCheckPage">MonitorCheckPage</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcheckpage"></a>
<a id="schema_MonitorCheckPage"></a>
<a id="tocSmonitorcheckpage"></a>
<a id="tocsmonitorcheckpage"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "targetId": "string",
  "url": "http://example.com",
  "status": "same",
  "previousScrapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currentScrapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "statusCode": 0,
  "error": "string",
  "metadata": {},
  "judgment": {
    "meaningful": true,
    "confidence": "high",
    "reason": "string",
    "meaningfulChanges": [
      {
        "type": "added",
        "before": "string",
        "after": "string",
        "reason": "string"
      }
    ]
  },
  "diff": {
    "text": "string",
    "json": {}
  },
  "snapshot": {
    "json": {}
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|targetId|string|false|none|none|
|url|string(uri)|false|none|none|
|status|string|false|none|none|
|previousScrapeId|string(uuid) \| null|false|none|none|
|currentScrapeId|string(uuid) \| null|false|none|none|
|statusCode|integer \| null|false|none|none|
|error|string \| null|false|none|none|
|metadata|object \| null|false|none|Extra per-page metadata. For search monitors this includes `searchStatus`, the finer-grained search disposition behind the top-level `status`: `alert` (maps to `new`), `already_seen`, `watching`, `ignored` (all map to `same`), or `skipped` (maps to `error`).|
|judgment|[MonitorPageJudgment](#schemamonitorpagejudgment)|false|none|none|
|diff|object \| null|false|none|Inline diff artifact when the page changed. The shape depends on what the monitor's scrapeOptions.formats asked for. Markdown-only monitors populate both `text` (unified diff) and `json` (parseDiff AST). JSON-extraction monitors populate `json` as a per-field `{previous, current}` map keyed by JSON path. Mixed-mode monitors (`changeTracking` with both `json` and `git-diff` modes) populate both `text` (markdown sidecar) and `json` (per-field diff).|
|snapshot|object \| null|false|none|Snapshot of the current JSON extraction at this run. Present on JSON-extraction and mixed-mode monitors; absent for markdown-only monitors.|
|createdAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|same|
|status|new|
|status|changed|
|status|removed|
|status|error|

<h2 id="tocS_MonitorPageJudgment">MonitorPageJudgment</h2>
<!-- backwards compatibility -->
<a id="schemamonitorpagejudgment"></a>
<a id="schema_MonitorPageJudgment"></a>
<a id="tocSmonitorpagejudgment"></a>
<a id="tocsmonitorpagejudgment"></a>

```json
{
  "meaningful": true,
  "confidence": "high",
  "reason": "string",
  "meaningfulChanges": [
    {
      "type": "added",
      "before": "string",
      "after": "string",
      "reason": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meaningful|boolean|false|none|Whether the changed page is meaningful for the monitor goal.|
|confidence|string|false|none|none|
|reason|string|false|none|none|
|meaningfulChanges|[object]|false|none|Goal-relevant changes selected by the judge from the page diff.|

#### Enumerated Values

|Property|Value|
|---|---|
|confidence|high|
|confidence|medium|
|confidence|low|

<h2 id="tocS_MonitorResponse">MonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonitorresponse"></a>
<a id="schema_MonitorResponse"></a>
<a id="tocSmonitorresponse"></a>
<a id="tocsmonitorresponse"></a>

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "status": "active",
    "schedule": {
      "cron": "string",
      "timezone": "string"
    },
    "nextRunAt": "1970-01-01T00:00:00Z",
    "lastRunAt": "1970-01-01T00:00:00Z",
    "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "targets": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "scrape",
        "urls": [
          "http://example.com"
        ],
        "scrapeOptions": {
          "formats": [
            "markdown"
          ],
          "onlyMainContent": true,
          "onlyCleanContent": false,
          "includeTags": [
            "string"
          ],
          "excludeTags": [
            "string"
          ],
          "maxAge": 172800000,
          "minAge": 0,
          "headers": {},
          "waitFor": 0,
          "mobile": false,
          "skipTlsVerification": true,
          "timeout": 60000,
          "parsers": [
            "pdf",
            "image"
          ],
          "actions": [
            {
              "type": "wait",
              "milliseconds": 1
            }
          ],
          "location": {
            "country": "US",
            "languages": [
              "en-US"
            ]
          },
          "removeBase64Images": true,
          "blockAds": true,
          "proxy": "auto",
          "storeInCache": true,
          "lockdown": false,
          "checkPromptInjection": false,
          "redactPII": false,
          "profile": {
            "name": "string",
            "saveChanges": true
          },
          "threatProtection": {
            "mode": "off",
            "riskScoreThreshold": 75,
            "blacklist": [
              "string"
            ],
            "whitelist": [
              "string"
            ],
            "blockedTlds": [
              "string"
            ],
            "failurePolicy": "open"
          },
          "auditMetadata": {
            "username": "string"
          }
        }
      }
    ],
    "webhook": {
      "url": "http://example.com",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {},
      "events": [
        "monitor.page"
      ]
    },
    "notification": {
      "email": {
        "enabled": false,
        "recipients": [
          "user@example.com"
        ],
        "includeDiffs": false
      }
    },
    "retentionDays": 0,
    "estimatedCreditsPerMonth": 0,
    "lastCheckSummary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "goal": "string",
    "judgeEnabled": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[Monitor](#schemamonitor)|false|none|none|

<h2 id="tocS_MonitorListResponse">MonitorListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonitorlistresponse"></a>
<a id="schema_MonitorListResponse"></a>
<a id="tocSmonitorlistresponse"></a>
<a id="tocsmonitorlistresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "status": "active",
      "schedule": {
        "cron": "string",
        "timezone": "string"
      },
      "nextRunAt": "1970-01-01T00:00:00Z",
      "lastRunAt": "1970-01-01T00:00:00Z",
      "currentCheckId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targets": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "scrape",
          "urls": [
            "http://example.com"
          ],
          "scrapeOptions": {
            "formats": [
              "markdown"
            ],
            "onlyMainContent": true,
            "onlyCleanContent": false,
            "includeTags": [
              "string"
            ],
            "excludeTags": [
              "string"
            ],
            "maxAge": 172800000,
            "minAge": 0,
            "headers": {},
            "waitFor": 0,
            "mobile": false,
            "skipTlsVerification": true,
            "timeout": 60000,
            "parsers": [
              "pdf",
              "image"
            ],
            "actions": [
              {
                "type": "wait",
                "milliseconds": 1
              }
            ],
            "location": {
              "country": "US",
              "languages": [
                "en-US"
              ]
            },
            "removeBase64Images": true,
            "blockAds": true,
            "proxy": "auto",
            "storeInCache": true,
            "lockdown": false,
            "checkPromptInjection": false,
            "redactPII": false,
            "profile": {
              "name": "string",
              "saveChanges": true
            },
            "threatProtection": {
              "mode": "off",
              "riskScoreThreshold": 75,
              "blacklist": [
                "string"
              ],
              "whitelist": [
                "string"
              ],
              "blockedTlds": [
                "string"
              ],
              "failurePolicy": "open"
            },
            "auditMetadata": {
              "username": "string"
            }
          }
        }
      ],
      "webhook": {
        "url": "http://example.com",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "metadata": {},
        "events": [
          "monitor.page"
        ]
      },
      "notification": {
        "email": {
          "enabled": false,
          "recipients": [
            "user@example.com"
          ],
          "includeDiffs": false
        }
      },
      "retentionDays": 0,
      "estimatedCreditsPerMonth": 0,
      "lastCheckSummary": {
        "totalPages": 0,
        "same": 0,
        "changed": 0,
        "new": 0,
        "removed": 0,
        "error": 0
      },
      "goal": "string",
      "judgeEnabled": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[[Monitor](#schemamonitor)]|false|none|none|

<h2 id="tocS_MonitorRunResponse">MonitorRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonitorrunresponse"></a>
<a id="schema_MonitorRunResponse"></a>
<a id="tocSmonitorrunresponse"></a>
<a id="tocsmonitorrunresponse"></a>

```json
{
  "success": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "queued",
    "trigger": "scheduled",
    "scheduledFor": "1970-01-01T00:00:00Z",
    "startedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "estimatedCredits": 0,
    "reservedCredits": 0,
    "actualCredits": 0,
    "billingStatus": "string",
    "summary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "targetResults": [],
    "notificationStatus": {},
    "error": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|data|[MonitorCheck](#schemamonitorcheck)|false|none|none|

<h2 id="tocS_MonitorCheckListResponse">MonitorCheckListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonitorchecklistresponse"></a>
<a id="schema_MonitorCheckListResponse"></a>
<a id="tocSmonitorchecklistresponse"></a>
<a id="tocsmonitorchecklistresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "queued",
      "trigger": "scheduled",
      "scheduledFor": "1970-01-01T00:00:00Z",
      "startedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "estimatedCredits": 0,
      "reservedCredits": 0,
      "actualCredits": 0,
      "billingStatus": "string",
      "summary": {
        "totalPages": 0,
        "same": 0,
        "changed": 0,
        "new": 0,
        "removed": 0,
        "error": 0
      },
      "targetResults": [],
      "notificationStatus": {},
      "error": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|[[MonitorCheck](#schemamonitorcheck)]|false|none|none|

<h2 id="tocS_MonitorCheckDetailResponse">MonitorCheckDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcheckdetailresponse"></a>
<a id="schema_MonitorCheckDetailResponse"></a>
<a id="tocSmonitorcheckdetailresponse"></a>
<a id="tocsmonitorcheckdetailresponse"></a>

```json
{
  "success": true,
  "next": "string",
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "monitorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "queued",
    "trigger": "scheduled",
    "scheduledFor": "1970-01-01T00:00:00Z",
    "startedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "estimatedCredits": 0,
    "reservedCredits": 0,
    "actualCredits": 0,
    "billingStatus": "string",
    "summary": {
      "totalPages": 0,
      "same": 0,
      "changed": 0,
      "new": 0,
      "removed": 0,
      "error": 0
    },
    "targetResults": [],
    "notificationStatus": {},
    "error": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "pages": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetId": "string",
        "url": "http://example.com",
        "status": "same",
        "previousScrapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "currentScrapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "statusCode": 0,
        "error": "string",
        "metadata": {},
        "judgment": {
          "meaningful": true,
          "confidence": "high",
          "reason": "string",
          "meaningfulChanges": [
            {
              "type": "added",
              "before": "string",
              "after": "string",
              "reason": "string"
            }
          ]
        },
        "diff": {
          "text": "string",
          "json": {}
        },
        "snapshot": {
          "json": {}
        },
        "createdAt": "1970-01-01T00:00:00Z"
      }
    ],
    "next": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|next|string \| null|false|none|URL to fetch the next page of monitor check page results, if any.|
|data|object|false|none|none|

<h2 id="tocS_Formats">Formats</h2>
<!-- backwards compatibility -->
<a id="schemaformats"></a>
<a id="schema_Formats"></a>
<a id="tocSformats"></a>
<a id="tocsformats"></a>

```json
[
  "markdown"
]
```

Output formats to include in the response. You can specify one or more formats, either as strings (e.g., `'markdown'`) or as objects with additional options (e.g., `{ type: 'json', schema: {...} }`). Some formats require specific options to be set. Example: `['markdown', { type: 'json', schema: {...} }]`.

<h2 id="tocS_ParseFormats">ParseFormats</h2>
<!-- backwards compatibility -->
<a id="schemaparseformats"></a>
<a id="schema_ParseFormats"></a>
<a id="tocSparseformats"></a>
<a id="tocsparseformats"></a>

```json
[
  "markdown"
]
```

Output formats supported for `/parse` uploads. Browser-rendering formats and change tracking are not supported.

<h2 id="tocS_ParseOptions">ParseOptions</h2>
<!-- backwards compatibility -->
<a id="schemaparseoptions"></a>
<a id="schema_ParseOptions"></a>
<a id="tocSparseoptions"></a>
<a id="tocsparseoptions"></a>

```json
{
  "formats": [
    "markdown"
  ],
  "onlyMainContent": true,
  "includeTags": [
    "string"
  ],
  "excludeTags": [
    "string"
  ],
  "headers": {},
  "timeout": 30000,
  "parsers": [
    "pdf"
  ],
  "skipTlsVerification": true,
  "removeBase64Images": true,
  "blockAds": true,
  "checkPromptInjection": false,
  "redactPII": false,
  "proxy": "basic",
  "origin": "api",
  "integration": "string",
  "auditMetadata": {
    "username": "string"
  },
  "zeroDataRetention": false
}
```

Optional parse options sent as JSON in the multipart `options` field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formats|[ParseFormats](#schemaparseformats)|false|none|Output formats supported for `/parse` uploads. Browser-rendering formats and change tracking are not supported.|
|onlyMainContent|boolean|false|none|Only return the main content of the page excluding headers, navs, footers, etc.|
|includeTags|[string]|false|none|Tags to include in the output.|
|excludeTags|[string]|false|none|Tags to exclude from the output.|
|headers|object|false|none|Headers to send when additional network requests are required.|
|timeout|integer|false|none|Timeout in milliseconds for the request. Default is 30000 (30 seconds). Maximum is 300000 (300 seconds).|
|parsers|[object]|false|none|Controls file parser behavior when relevant (for example PDF parser mode).|
|skipTlsVerification|boolean|false|none|Skip TLS certificate verification when making requests.|
|removeBase64Images|boolean|false|none|Remove base64-encoded images from output and keep alt text placeholders.|
|blockAds|boolean|false|none|Enable ad and cookie popup blocking.|
|checkPromptInjection|boolean|false|none|When enabled, scans the parsed content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the parse continues with a warning and the check is not billed.|
|redactPII|boolean \| [RedactPIIOptions](#schemaredactpiioptions)|false|none|Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.|
|proxy|string|false|none|Proxy mode for parse uploads. `/parse` supports only `basic` and `auto`.|
|origin|string|false|none|Origin identifier for analytics and logging.|
|integration|string \| null|false|none|Optional integration identifier.|
|auditMetadata|[AuditMetadata](#schemaauditmetadata)|false|none|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|
|zeroDataRetention|boolean|false|none|If true, this will enable zero data retention for this parse. To enable this feature, please contact help@firecrawl.dev|

#### Enumerated Values

|Property|Value|
|---|---|
|proxy|basic|
|proxy|auto|

<h2 id="tocS_ScrapeOptions">ScrapeOptions</h2>
<!-- backwards compatibility -->
<a id="schemascrapeoptions"></a>
<a id="schema_ScrapeOptions"></a>
<a id="tocSscrapeoptions"></a>
<a id="tocsscrapeoptions"></a>

```json
{
  "formats": [
    "markdown"
  ],
  "onlyMainContent": true,
  "onlyCleanContent": false,
  "includeTags": [
    "string"
  ],
  "excludeTags": [
    "string"
  ],
  "maxAge": 172800000,
  "minAge": 0,
  "headers": {},
  "waitFor": 0,
  "mobile": false,
  "skipTlsVerification": true,
  "timeout": 60000,
  "parsers": [
    "pdf",
    "image"
  ],
  "actions": [
    {
      "type": "wait",
      "milliseconds": 1
    }
  ],
  "location": {
    "country": "US",
    "languages": [
      "en-US"
    ]
  },
  "removeBase64Images": true,
  "blockAds": true,
  "proxy": "auto",
  "storeInCache": true,
  "lockdown": false,
  "checkPromptInjection": false,
  "redactPII": false,
  "profile": {
    "name": "string",
    "saveChanges": true
  },
  "threatProtection": {
    "mode": "off",
    "riskScoreThreshold": 75,
    "blacklist": [
      "string"
    ],
    "whitelist": [
      "string"
    ],
    "blockedTlds": [
      "string"
    ],
    "failurePolicy": "open"
  },
  "auditMetadata": {
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formats|[Formats](#schemaformats)|false|none|Output formats to include in the response. You can specify one or more formats, either as strings (e.g., `'markdown'`) or as objects with additional options (e.g., `{ type: 'json', schema: {...} }`). Some formats require specific options to be set. Example: `['markdown', { type: 'json', schema: {...} }]`.|
|onlyMainContent|boolean|false|none|Only return the main content of the page excluding headers, navs, footers, etc. This is a deterministic HTML-level filter applied before markdown is generated; no LLM is involved.|
|onlyCleanContent|boolean|false|none|Beta. Run an additional LLM-based pass over the generated markdown to remove residual boilerplate that `onlyMainContent` can miss (cookie banners, ad blocks, social share widgets, breadcrumbs, newsletter signups, comment sections, related-article lists). Headings, lists, tables, code blocks, image references, and inline links are preserved. Can be combined with `onlyMainContent` (the most common setup) or used on its own. Skipped with a warning when the markdown exceeds the cleaning model's output token limit (the original markdown is preserved). Not supported on zero-data-retention requests.|
|includeTags|[string]|false|none|Tags to include in the output.|
|excludeTags|[string]|false|none|Tags to exclude from the output.|
|maxAge|integer|false|none|Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 2 days.|
|minAge|integer|false|none|When set, the request only checks the cache and never triggers a fresh scrape. The value is in milliseconds and specifies the minimum age the cached data must be. If matching cached data exists, it is returned instantly. If no cached data is found, a 404 with error code SCRAPE_NO_CACHED_DATA is returned. Set to 1 to accept any cached data regardless of age.|
|headers|object|false|none|Headers to send with the request. Can be used to send cookies, user-agent, etc.|
|waitFor|integer|false|none|Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load. This waiting time is in addition to Firecrawl's smart wait feature.|
|mobile|boolean|false|none|Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.|
|skipTlsVerification|boolean|false|none|Skip TLS certificate verification when making requests.|
|timeout|integer|false|none|Timeout in milliseconds for the request. Minimum is 1000 (1 second). Default is 60000 (60 seconds). Maximum is 300000 (300 seconds).|
|parsers|[string \| object]|false|none|Controls how files are processed during scraping. Each item is a parser name (`"pdf"` or `"image"`) or a parser object. Both parsers are on by default.<br><br> - **pdf**: PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page).<br> - **image**: Raster images (PNG, JPEG, JPEG 2000, TIFF, GIF, BMP, WebP, AVIF) are OCR'd as one-page documents and converted to markdown. SVG and HEIC are not supported.<br><br>If you pass a list, parsers that are not in the list are off. For example, `["pdf"]` turns off image OCR, so image URLs fail as unsupported files. When an empty array is passed, the PDF file is returned in base64 encoding with a flat rate of 1 credit for the entire PDF.|
|actions|[object]|false|none|Actions to perform on the page before grabbing the content|
|location|object|false|none|Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.|
|removeBase64Images|boolean|false|none|Removes all base 64 images from the markdown output, which may be overwhelmingly long. This does not affect html or rawHtml formats. The image's alt text remains in the output, but the URL is replaced with a placeholder.|
|blockAds|boolean|false|none|Enables ad-blocking and cookie popup blocking.|
|proxy|string|false|none|Specifies the type of proxy to use.<br><br> - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.<br> - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.<br> - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.|
|storeInCache|boolean|false|none|If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (e.g. actions, headers) will force this parameter to be false.|
|lockdown|boolean|false|none|If true, serves the request from Firecrawl's cache only and never makes an outbound request to the target URL. Designed for compliance-constrained or air-gapped environments where the scrape request itself could leak sensitive information. On cache miss, returns a 404 with error code SCRAPE_LOCKDOWN_CACHE_MISS (the URL is never logged on miss). Lockdown requests are treated as zero data retention. Default maxAge is extended to 2 years so existing cached pages remain eligible. Billed at 5 credits on hit, 1 credit on cache miss.|
|checkPromptInjection|boolean|false|none|When enabled, scans the page content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. Works with any format except rawBase64. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the scrape continues with a warning and the check is not billed.|
|redactPII|boolean \| [RedactPIIOptions](#schemaredactpiioptions)|false|none|Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.|
|profile|object|false|none|Enable persistent browser storage across scrape and interact sessions. Pass a profile when scraping to preserve cookies, localStorage, and session data. Sessions with the same profile name share browser state.|
|threatProtection|[ThreatProtectionOverride](#schemathreatprotectionoverride)|false|none|Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.|
|auditMetadata|[AuditMetadata](#schemaauditmetadata)|false|none|User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.|

#### Enumerated Values

|Property|Value|
|---|---|
|proxy|basic|
|proxy|enhanced|
|proxy|auto|

<h2 id="tocS_ScrapeResponse">ScrapeResponse</h2>
<!-- backwards compatibility -->
<a id="schemascraperesponse"></a>
<a id="schema_ScrapeResponse"></a>
<a id="tocSscraperesponse"></a>
<a id="tocsscraperesponse"></a>

```json
{
  "success": true,
  "data": {
    "markdown": "string",
    "pages": [
      {
        "pageNumber": 0,
        "markdown": "string"
      }
    ],
    "blocks": [
      {
        "pageNumber": 0,
        "width": 0,
        "height": 0,
        "status": "string",
        "items": [
          {
            "id": "string",
            "type": "string",
            "label": "string",
            "bbox": [
              0,
              0,
              0,
              0
            ],
            "content": "string",
            "markdownSpan": [
              0,
              0
            ],
            "readingOrder": 0,
            "source": "string",
            "confidence": {
              "layout": 0,
              "ocr": 0
            }
          }
        ]
      }
    ],
    "summary": "string",
    "html": "string",
    "rawHtml": "string",
    "rawBase64": "string",
    "screenshot": "string",
    "audio": "string",
    "video": "string",
    "answer": "string",
    "highlights": "string",
    "links": [
      "string"
    ],
    "attributes": [
      {
        "selector": "string",
        "attribute": "string",
        "values": [
          "string"
        ]
      }
    ],
    "actions": {
      "screenshots": [
        "http://example.com"
      ],
      "scrapes": [
        {
          "url": "string",
          "html": "string"
        }
      ],
      "javascriptReturns": [
        {
          "type": "string",
          "value": null
        }
      ],
      "pdfs": [
        "string"
      ]
    },
    "metadata": {
      "title": "string",
      "description": "string",
      "language": "string",
      "sourceURL": "http://example.com",
      "url": "http://example.com",
      "keywords": "string",
      "ogLocaleAlternate": [
        "string"
      ],
      "<any other metadata> ": "string",
      "statusCode": 0,
      "numPages": 0,
      "totalPages": 0,
      "contentType": "string",
      "error": "string",
      "concurrencyLimited": true,
      "concurrencyQueueDurationMs": 0,
      "provider": {
        "id": "string",
        "creditsCost": 0,
        "steps": [
          {
            "provider": "string",
            "status": "matched",
            "creditsCost": 0
          }
        ]
      }
    },
    "warning": "string",
    "changeTracking": {
      "previousScrapeAt": "1970-01-01T00:00:00Z",
      "changeStatus": "new",
      "visibility": "visible",
      "diff": "string",
      "json": {}
    },
    "branding": {
      "colorScheme": "light",
      "logo": "string",
      "colors": {
        "primary": "string",
        "secondary": "string",
        "accent": "string",
        "background": "string",
        "textPrimary": "string",
        "textSecondary": "string",
        "link": "string",
        "success": "string",
        "warning": "string",
        "error": "string"
      },
      "fonts": [
        {
          "family": "string"
        }
      ],
      "typography": {
        "fontFamilies": {
          "primary": "string",
          "heading": "string",
          "code": "string"
        },
        "fontSizes": {
          "h1": "string",
          "h2": "string",
          "h3": "string",
          "body": "string"
        },
        "fontWeights": {
          "light": 0,
          "regular": 0,
          "medium": 0,
          "bold": 0
        },
        "lineHeights": {
          "heading": "string",
          "body": "string"
        }
      },
      "spacing": {
        "baseUnit": 0,
        "borderRadius": "string",
        "padding": {},
        "margins": {}
      },
      "components": {
        "buttonPrimary": {
          "background": "string",
          "textColor": "string",
          "borderRadius": "string"
        },
        "buttonSecondary": {
          "background": "string",
          "textColor": "string",
          "borderColor": "string",
          "borderRadius": "string"
        },
        "input": {}
      },
      "icons": {},
      "images": {
        "logo": "string",
        "favicon": "string",
        "ogImage": "string"
      },
      "animations": {},
      "layout": {},
      "personality": {}
    },
    "product": {
      "title": "string",
      "brand": "string",
      "category": "string",
      "url": "string",
      "description": "string",
      "variants": [
        {
          "id": "string",
          "sku": "string",
          "title": "string",
          "values": {
            "property1": "string",
            "property2": "string"
          },
          "price": {
            "amount": 0,
            "currency": "string",
            "formatted": "string"
          },
          "sale": {
            "originalPrice": {
              "amount": 0,
              "currency": "string",
              "formatted": "string"
            }
          },
          "availability": {
            "inStock": true,
            "text": "string"
          },
          "images": [
            {
              "url": "string",
              "alt": "string"
            }
          ]
        }
      ]
    },
    "menu": {
      "isMenu": true,
      "confidence": 0,
      "merchant": {
        "name": "string",
        "type": "string"
      },
      "currency": "string",
      "sections": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "items": [
            {
              "id": "string",
              "name": "string",
              "description": "string",
              "images": [
                {
                  "url": "string",
                  "alt": "string"
                }
              ],
              "price": {
                "amount": 0,
                "currency": "string",
                "formatted": "string"
              },
              "availability": {
                "inStock": true,
                "text": "string"
              },
              "dietary": [
                "string"
              ],
              "calories": 0,
              "optionGroups": [
                {}
              ],
              "identifiers": {
                "merchantItemId": "string"
              },
              "url": "string",
              "sourceUrl": "string"
            }
          ]
        }
      ],
      "sourceUrl": "string"
    },
    "tools": [
      {
        "id": "string",
        "provider": "string",
        "capability": "string",
        "name": "string",
        "description": "string",
        "creditsCost": 0,
        "perRecord": true,
        "options": [
          {
            "name": "string",
            "type": "string"
          }
        ],
        "response": {
          "about": "string",
          "key": "string",
          "fields": [
            {}
          ]
        },
        "matchedBy": [
          "semantic"
        ],
        "matchedUrls": [
          "string"
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_AlexandriaCall">AlexandriaCall</h2>
<!-- backwards compatibility -->
<a id="schemaalexandriacall"></a>
<a id="schema_AlexandriaCall"></a>
<a id="tocSalexandriacall"></a>
<a id="tocsalexandriacall"></a>

```json
{
  "provider": "string",
  "capability": "string",
  "options": {}
}
```

A single provider tool to execute from the Alexandria catalogue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|true|none|The catalogued provider to call, e.g. `fred`.|
|capability|string|true|none|The provider-relative capability to invoke, e.g. `series/observations`.|
|options|object|false|none|Capability-specific options passed through to the provider tool. For Find Tools (`provider: firecrawl`, `capability: find-tools`), use `FindToolsOptions`.|

<h2 id="tocS_AlexandriaResult">AlexandriaResult</h2>
<!-- backwards compatibility -->
<a id="schemaalexandriaresult"></a>
<a id="schema_AlexandriaResult"></a>
<a id="tocSalexandriaresult"></a>
<a id="tocsalexandriaresult"></a>

```json
{
  "provider": "string",
  "capability": "string",
  "creditsCost": 0,
  "data": {
    "level": "providers",
    "items": [
      {
        "id": "string",
        "name": "string",
        "next": {
          "provider": "string",
          "capability": "string",
          "options": {}
        },
        "execute": {
          "provider": "string",
          "capability": "string"
        }
      }
    ],
    "total": 0,
    "next": {
      "provider": "string",
      "capability": "string",
      "options": {}
    }
  },
  "records": 0,
  "upstreamStatus": 0
}
```

The outcome of one executed Alexandria call, returned in the same order as the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|provider|string|true|none|The provider that was called.|
|capability|string|true|none|The capability that was invoked.|
|creditsCost|integer|true|none|Credits charged for this call.|
|data|[FindToolsData](#schemafindtoolsdata) \| object|true|none|The provider's response payload. For Find Tools (`provider: firecrawl`, `capability: find-tools`), this is a `FindToolsData` page.|
|records|integer|false|none|Number of records returned, when applicable.|
|upstreamStatus|integer|false|none|HTTP status code returned by the upstream provider, when applicable.|
|*oneOf*|object|false|none|none|
|provider|string|false|none|The provider that was called.|
|capability|string|false|none|The capability that was invoked.|
|creditsCost|integer|false|none|Always 0 for a failed call.|
|error|object|true|none|none|

<h2 id="tocS_DiscoveredTool">DiscoveredTool</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredtool"></a>
<a id="schema_DiscoveredTool"></a>
<a id="tocSdiscoveredtool"></a>
<a id="tocsdiscoveredtool"></a>

```json
{
  "id": "string",
  "provider": "string",
  "capability": "string",
  "name": "string",
  "description": "string",
  "creditsCost": 0,
  "perRecord": true,
  "options": [
    {
      "name": "string",
      "type": "string"
    }
  ],
  "response": {
    "about": "string",
    "key": "string",
    "fields": [
      {}
    ]
  },
  "matchedBy": [
    "semantic"
  ],
  "matchedUrls": [
    "string"
  ]
}
```

A catalogued provider tool discovered via Alexandria, semantic search, or domain matching. The `toolDetail` request parameter sets which fields appear: `compact` returns only `provider`, `capability`, and `description`; `summary` adds the other fields except `options` and `response`; `full` also adds `options`, `response`, and `examples`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The tool's identifier, formatted as `provider/capability`. Omitted when `toolDetail` is `compact`.|
|provider|string|true|none|The catalogued provider.|
|capability|string|true|none|The provider-relative capability.|
|name|string|false|none|Human-readable name of the tool. Omitted when `toolDetail` is `compact`.|
|description|string|true|none|Human-readable description of what the tool does.|
|creditsCost|integer|false|none|Credits charged per execution of this tool. Omitted when `toolDetail` is `compact`.|
|perRecord|boolean|false|none|Whether `creditsCost` is charged per record returned rather than per call. Omitted when `toolDetail` is `compact`.|
|options|[object]|false|none|The capability's accepted options. Present only when `toolDetail` is `full`.|
|response|object|false|none|Description of the shape of a successful response's `data`. Present only when `toolDetail` is `full`.|
|matchedBy|[string]|false|none|Why this tool was surfaced. Omitted when `toolDetail` is `compact`.|
|matchedUrls|[string]|false|none|URLs whose domain matched this tool, when matched by domain. Omitted when `toolDetail` is `compact`.|

#### Enumerated Values

|Property|Value|
|---|---|
|matchedBy|semantic|
|matchedBy|domain|

<h2 id="tocS_FindToolsOptions">FindToolsOptions</h2>
<!-- backwards compatibility -->
<a id="schemafindtoolsoptions"></a>
<a id="schema_FindToolsOptions"></a>
<a id="tocSfindtoolsoptions"></a>
<a id="tocsfindtoolsoptions"></a>

```json
{
  "query": "string",
  "urls": [
    "http://example.com"
  ],
  "providers": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "groups": [
    "string"
  ],
  "capabilities": [
    "string"
  ],
  "level": "providers",
  "expand": [
    "options"
  ],
  "limit": 1,
  "offset": 0
}
```

Options for the Find Tools capability (`provider: firecrawl`, `capability: find-tools`) in an `alexandria` call. Find Tools is free and does not execute the tools it returns. All fields are optional. Selectors narrow the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|Natural-language description of the data you need. Returns tools that match by meaning.|
|urls|[string(uri)]|false|none|Website URLs. Returns tools whose provider matches the domain of a URL.|
|providers|[string]|false|none|Provider IDs to browse, e.g. `particle`.|
|categories|[string]|false|none|Category IDs to browse.|
|groups|[string]|false|none|Group IDs to browse.|
|capabilities|[string]|false|none|Exact capability IDs to return.|
|level|string|false|none|The catalogue level to list in `items`.|
|expand|[string]|false|none|Contract parts to include on each tool. Use `["options", "response"]` for inputs and output shape, add `examples` for example payloads, or use `[]` for compact results.|
|limit|integer|false|none|Maximum number of items on the page.|
|offset|integer|false|none|Number of items to skip, for pagination.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|providers|
|level|groups|
|level|tools|
|expand|options|
|expand|response|
|expand|examples|

<h2 id="tocS_FindToolsData">FindToolsData</h2>
<!-- backwards compatibility -->
<a id="schemafindtoolsdata"></a>
<a id="schema_FindToolsData"></a>
<a id="tocSfindtoolsdata"></a>
<a id="tocsfindtoolsdata"></a>

```json
{
  "level": "providers",
  "items": [
    {
      "id": "string",
      "name": "string",
      "next": {
        "provider": "string",
        "capability": "string",
        "options": {}
      },
      "execute": {
        "provider": "string",
        "capability": "string"
      }
    }
  ],
  "total": 0,
  "next": {
    "provider": "string",
    "capability": "string",
    "options": {}
  }
}
```

One page of the Alexandria catalogue, returned in `data.alexandria[].data` for a Find Tools call. The call costs 0 credits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string|true|none|The catalogue level of the items on this page.|
|items|[object]|true|none|Catalogue entries at `level`. At the `tools` level, each item also has the tool fields of `DiscoveredTool` (`provider`, `capability`, `description`, `creditsCost`, `perRecord`), plus `options` and `response` when `expand` asks for them.|
|total|integer|true|none|Total number of entries that match the selectors.|
|next|object \| null|false|none|An `alexandria` call for the next page of this listing, or `null` on the last page.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|providers|
|level|groups|
|level|tools|

<h2 id="tocS_AlexandriaScrapeResponse">AlexandriaScrapeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaalexandriascraperesponse"></a>
<a id="schema_AlexandriaScrapeResponse"></a>
<a id="tocSalexandriascraperesponse"></a>
<a id="tocsalexandriascraperesponse"></a>

```json
{
  "success": true,
  "scrape_id": "string",
  "data": {
    "alexandria": [
      {
        "provider": "string",
        "capability": "string",
        "creditsCost": 0,
        "data": {
          "level": "providers",
          "items": [
            {
              "id": "string",
              "name": "string",
              "next": {
                "provider": "string",
                "capability": "string",
                "options": {}
              },
              "execute": {
                "provider": "string",
                "capability": "string"
              }
            }
          ],
          "total": 0,
          "next": {
            "provider": "string",
            "capability": "string",
            "options": {}
          }
        },
        "records": 0,
        "upstreamStatus": 0
      }
    ],
    "creditsCost": 0
  }
}
```

Response returned when the request executed Alexandria provider tools instead of scraping a URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|scrape_id|string|true|none|Identifier for this request. A completed request replays the same response and `scrape_id` when retried with the same `x-request-id`.|
|data|object|true|none|none|

<h2 id="tocS_CrawlStatusResponseObj">CrawlStatusResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemacrawlstatusresponseobj"></a>
<a id="schema_CrawlStatusResponseObj"></a>
<a id="tocScrawlstatusresponseobj"></a>
<a id="tocscrawlstatusresponseobj"></a>

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "duration": 0,
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "pages": [
        {
          "pageNumber": 0,
          "markdown": "string"
        }
      ],
      "blocks": [
        {
          "pageNumber": 0,
          "width": 0,
          "height": 0,
          "status": "string",
          "items": [
            {
              "id": "string",
              "type": "string",
              "label": "string",
              "bbox": [
                0,
                0,
                0,
                0
              ],
              "content": "string",
              "markdownSpan": [
                0,
                0
              ],
              "readingOrder": 0,
              "source": "string",
              "confidence": {
                "layout": 0,
                "ocr": 0
              }
            }
          ]
        }
      ],
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "url": "http://example.com",
        "keywords": "string",
        "ogLocaleAlternate": [
          "string"
        ],
        "<any other metadata> ": "string",
        "statusCode": 0,
        "numPages": 0,
        "totalPages": 0,
        "error": "string",
        "concurrencyLimited": true,
        "concurrencyQueueDurationMs": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The current status of the crawl. Can be `scraping`, `completed`, or `failed`.|
|total|integer|false|none|The total number of pages that were attempted to be crawled.|
|completed|integer|false|none|The number of pages that have been successfully crawled.|
|creditsUsed|integer|false|none|The number of credits used for the crawl.|
|expiresAt|string(date-time)|false|none|The date and time when the crawl will expire.|
|createdAt|string(date-time)|false|none|The date and time when the crawl was started.|
|completedAt|string(date-time)|false|none|The date and time when the crawl finished. Present only when the crawl is in a terminal state (`completed`, `failed`, or `cancelled`).|
|duration|number|false|none|Crawl duration in seconds. For terminal crawls, this is the elapsed time from `createdAt` to `completedAt`. For in-progress crawls, it is the elapsed time from `createdAt` to now.|
|next|string \| null|false|none|The URL to retrieve the next 10MB of data. Returned if the crawl is not completed or if the response is larger than 10MB.|
|data|[object]|false|none|The data of the crawl.|

<h2 id="tocS_CrawlErrorsResponseObj">CrawlErrorsResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemacrawlerrorsresponseobj"></a>
<a id="schema_CrawlErrorsResponseObj"></a>
<a id="tocScrawlerrorsresponseobj"></a>
<a id="tocscrawlerrorsresponseobj"></a>

```json
{
  "errors": [
    {
      "id": "string",
      "timestamp": "string",
      "url": "string",
      "error": "string"
    }
  ],
  "robotsBlocked": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|Errored scrape jobs and error details|
|robotsBlocked|[string]|false|none|List of URLs that were attempted in scraping but were blocked by robots.txt|

<h2 id="tocS_BatchScrapeStatusResponseObj">BatchScrapeStatusResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemabatchscrapestatusresponseobj"></a>
<a id="schema_BatchScrapeStatusResponseObj"></a>
<a id="tocSbatchscrapestatusresponseobj"></a>
<a id="tocsbatchscrapestatusresponseobj"></a>

```json
{
  "status": "string",
  "total": 0,
  "completed": 0,
  "creditsUsed": 0,
  "expiresAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "completedAt": "1970-01-01T00:00:00Z",
  "duration": 0,
  "next": "string",
  "data": [
    {
      "markdown": "string",
      "pages": [
        {
          "pageNumber": 0,
          "markdown": "string"
        }
      ],
      "blocks": [
        {
          "pageNumber": 0,
          "width": 0,
          "height": 0,
          "status": "string",
          "items": [
            {
              "id": "string",
              "type": "string",
              "label": "string",
              "bbox": [
                0,
                0,
                0,
                0
              ],
              "content": "string",
              "markdownSpan": [
                0,
                0
              ],
              "readingOrder": 0,
              "source": "string",
              "confidence": {
                "layout": 0,
                "ocr": 0
              }
            }
          ]
        }
      ],
      "html": "string",
      "rawHtml": "string",
      "rawBase64": "string",
      "links": [
        "string"
      ],
      "screenshot": "string",
      "metadata": {
        "title": "string",
        "description": "string",
        "language": "string",
        "sourceURL": "http://example.com",
        "url": "http://example.com",
        "keywords": "string",
        "ogLocaleAlternate": [
          "string"
        ],
        "<any other metadata> ": "string",
        "statusCode": 0,
        "numPages": 0,
        "totalPages": 0,
        "error": "string",
        "concurrencyLimited": true,
        "concurrencyQueueDurationMs": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The current status of the batch scrape. Can be `scraping`, `completed`, or `failed`.|
|total|integer|false|none|The total number of pages that were attempted to be scraped.|
|completed|integer|false|none|The number of pages that have been successfully scraped.|
|creditsUsed|integer|false|none|The number of credits used for the batch scrape.|
|expiresAt|string(date-time)|false|none|The date and time when the batch scrape will expire.|
|createdAt|string(date-time)|false|none|The date and time when the batch scrape was started.|
|completedAt|string(date-time)|false|none|The date and time when the batch scrape finished. Present only when the batch scrape is in a terminal state (`completed`, `failed`, or `cancelled`).|
|duration|number|false|none|Batch scrape duration in seconds. For terminal batch scrapes, this is the elapsed time from `createdAt` to `completedAt`. For in-progress batch scrapes, it is the elapsed time from `createdAt` to now.|
|next|string \| null|false|none|The URL to retrieve the next 10MB of data. Returned if the batch scrape is not completed or if the response is larger than 10MB.|
|data|[object]|false|none|The data of the batch scrape.|

<h2 id="tocS_CrawlResponse">CrawlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacrawlresponse"></a>
<a id="schema_CrawlResponse"></a>
<a id="tocScrawlresponse"></a>
<a id="tocscrawlresponse"></a>

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|none|
|url|string(uri)|false|none|none|

<h2 id="tocS_BatchScrapeResponseObj">BatchScrapeResponseObj</h2>
<!-- backwards compatibility -->
<a id="schemabatchscraperesponseobj"></a>
<a id="schema_BatchScrapeResponseObj"></a>
<a id="tocSbatchscraperesponseobj"></a>
<a id="tocsbatchscraperesponseobj"></a>

```json
{
  "success": true,
  "id": "string",
  "url": "http://example.com",
  "invalidURLs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|none|
|url|string(uri)|false|none|none|
|invalidURLs|[string]|false|none|If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.|

<h2 id="tocS_MapResponse">MapResponse</h2>
<!-- backwards compatibility -->
<a id="schemamapresponse"></a>
<a id="schema_MapResponse"></a>
<a id="tocSmapresponse"></a>
<a id="tocsmapresponse"></a>

```json
{
  "success": true,
  "links": [
    {
      "url": "http://example.com",
      "title": "string",
      "description": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|links|[object]|false|none|none|

<h2 id="tocS_ExtractResponse">ExtractResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextractresponse"></a>
<a id="schema_ExtractResponse"></a>
<a id="tocSextractresponse"></a>
<a id="tocsextractresponse"></a>

```json
{
  "success": true,
  "id": "string",
  "invalidURLs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|id|string|false|none|none|
|invalidURLs|[string]|false|none|If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.|

<h2 id="tocS_ExtractStatusResponse">ExtractStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextractstatusresponse"></a>
<a id="schema_ExtractStatusResponse"></a>
<a id="tocSextractstatusresponse"></a>
<a id="tocsextractstatusresponse"></a>

```json
{
  "success": true,
  "data": {},
  "status": "completed",
  "expiresAt": "1970-01-01T00:00:00Z",
  "tokensUsed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|status|string|false|none|The current status of the extract job|
|expiresAt|string(date-time)|false|none|none|
|tokensUsed|integer|false|none|The number of tokens used by the extract job. Only available if the job is completed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|completed|
|status|processing|
|status|failed|
|status|cancelled|

<h2 id="tocS_SearchFeedbackRequest">SearchFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchfeedbackrequest"></a>
<a id="schema_SearchFeedbackRequest"></a>
<a id="tocSsearchfeedbackrequest"></a>
<a id="tocssearchfeedbackrequest"></a>

```json
{
  "rating": "good",
  "valuableSources": [
    {
      "url": "http://example.com",
      "reason": "string"
    }
  ],
  "missingContent": [
    {
      "topic": "string",
      "description": "string"
    }
  ],
  "querySuggestions": "string",
  "origin": "api",
  "integration": "string"
}
```

For 'good', include valuableSources. For 'partial', include valuableSources or missingContent. For 'bad', include missingContent or querySuggestions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rating|string|true|none|none|
|valuableSources|[object]|false|none|none|
|missingContent|[object]|false|none|none|
|querySuggestions|string|false|none|none|
|origin|string|false|none|none|
|integration|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rating|good|
|rating|partial|
|rating|bad|

<h2 id="tocS_SupportAskRequest">SupportAskRequest</h2>
<!-- backwards compatibility -->
<a id="schemasupportaskrequest"></a>
<a id="schema_SupportAskRequest"></a>
<a id="tocSsupportaskrequest"></a>
<a id="tocssupportaskrequest"></a>

```json
{
  "question": "string",
  "rationale": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|question|string|true|none|Question or issue for the support agent to diagnose.|
|rationale|string|false|none|Optional context about what the end user is trying to accomplish.|

<h2 id="tocS_SupportAskResponse">SupportAskResponse</h2>
<!-- backwards compatibility -->
<a id="schemasupportaskresponse"></a>
<a id="schema_SupportAskResponse"></a>
<a id="tocSsupportaskresponse"></a>
<a id="tocssupportaskresponse"></a>

```json
{
  "answer": "string",
  "confidence": "high",
  "fixParameters": {},
  "validation": {},
  "feedback": {},
  "durationMs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|Diagnosis and recommended fix.|
|confidence|string|false|none|none|
|fixParameters|object \| null|false|none|Machine-readable API parameters that may fix the issue.|
|validation|object \| null|false|none|Validation result when the support agent tested or attempted a fix.|
|feedback|object \| null|false|none|Present when the support agent is blocked or needs more information.|
|durationMs|integer|false|none|Total support-agent execution time in milliseconds.|

#### Enumerated Values

|Property|Value|
|---|---|
|confidence|high|
|confidence|medium|
|confidence|low|

<h2 id="tocS_SupportProxyErrorResponse">SupportProxyErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemasupportproxyerrorresponse"></a>
<a id="schema_SupportProxyErrorResponse"></a>
<a id="tocSsupportproxyerrorresponse"></a>
<a id="tocssupportproxyerrorresponse"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Support proxy or upstream error code.|

<h2 id="tocS_RedactPIIEntity">RedactPIIEntity</h2>
<!-- backwards compatibility -->
<a id="schemaredactpiientity"></a>
<a id="schema_RedactPIIEntity"></a>
<a id="tocSredactpiientity"></a>
<a id="tocsredactpiientity"></a>

```json
"PERSON"
```

Public PII entity buckets supported by Firecrawl redaction.

<h2 id="tocS_RedactPIIOptions">RedactPIIOptions</h2>
<!-- backwards compatibility -->
<a id="schemaredactpiioptions"></a>
<a id="schema_RedactPIIOptions"></a>
<a id="tocSredactpiioptions"></a>
<a id="tocsredactpiioptions"></a>

```json
{
  "mode": "accurate",
  "entities": [
    "PERSON"
  ],
  "replaceStyle": "tag"
}
```

Tuning options for PII redaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Redaction strategy. `accurate` is model-only and optimized for precision, `aggressive` increases recall with additional heuristics, and `fast` uses heuristics without the model call.|
|entities|[[RedactPIIEntity](#schemaredactpiientity)]|false|none|Restrict redaction to these entity buckets. If omitted, all supported entities are redacted.|
|replaceStyle|string|false|none|`tag` replaces spans with placeholders like `<EMAIL>`, `mask` replaces characters with `*`, and `remove` deletes the span text.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|accurate|
|mode|aggressive|
|mode|fast|
|entities|PERSON|
|entities|EMAIL|
|entities|PHONE|
|entities|LOCATION|
|entities|FINANCIAL|
|entities|SECRET|
|replaceStyle|tag|
|replaceStyle|mask|
|replaceStyle|remove|

<h2 id="tocS_ResearchIdMap">ResearchIdMap</h2>
<!-- backwards compatibility -->
<a id="schemaresearchidmap"></a>
<a id="schema_ResearchIdMap"></a>
<a id="tocSresearchidmap"></a>
<a id="tocsresearchidmap"></a>

```json
{
  "arxiv": [
    "2105.05233"
  ]
}
```

Source identifiers grouped by namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<h2 id="tocS_ResearchPaperSignals">ResearchPaperSignals</h2>
<!-- backwards compatibility -->
<a id="schemaresearchpapersignals"></a>
<a id="schema_ResearchPaperSignals"></a>
<a id="tocSresearchpapersignals"></a>
<a id="tocsresearchpapersignals"></a>

```json
{
  "structural": 0,
  "semantic": 0,
  "articleRank": 0,
  "seedOverlap": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|structural|number(double)|true|none|Raw structural graph signal.|
|semantic|number(double)|true|none|Semantic score from the intent search.|
|articleRank|number(double)|true|none|Structural expansion article-rank score.|
|seedOverlap|integer|true|none|Number of distinct seeds connected to this candidate.|

<h2 id="tocS_ResearchPaperResult">ResearchPaperResult</h2>
<!-- backwards compatibility -->
<a id="schemaresearchpaperresult"></a>
<a id="schema_ResearchPaperResult"></a>
<a id="tocSresearchpaperresult"></a>
<a id="tocsresearchpaperresult"></a>

```json
{
  "paperId": "string",
  "primaryId": "string",
  "ids": {
    "arxiv": [
      "2105.05233"
    ]
  },
  "title": "string",
  "abstract": "string",
  "score": 0,
  "signals": {
    "structural": 0,
    "semantic": 0,
    "articleRank": 0,
    "seedOverlap": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paperId|string|true|none|Canonical paper id, or web:<url> for SERP-discovered display results.|
|primaryId|string|true|none|Preferred cite/fetch id such as arxiv:<id>, pmid:<id>, pmcid:<id>, or doi:<id>.|
|ids|[ResearchIdMap](#schemaresearchidmap)|false|none|Source identifiers grouped by namespace.|
|title|string|true|none|none|
|abstract|string|true|none|none|
|score|number(double)|true|none|none|
|signals|[ResearchPaperSignals](#schemaresearchpapersignals)|false|none|none|

<h2 id="tocS_ResearchPaperMetadata">ResearchPaperMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresearchpapermetadata"></a>
<a id="schema_ResearchPaperMetadata"></a>
<a id="tocSresearchpapermetadata"></a>
<a id="tocsresearchpapermetadata"></a>

```json
{
  "paperId": "string",
  "ids": {
    "arxiv": [
      "2105.05233"
    ]
  },
  "title": "string",
  "abstract": "string",
  "authors": "string",
  "categories": [
    "string"
  ],
  "createdDate": "string",
  "updateDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paperId|string|true|none|Canonical paper id.|
|ids|[ResearchIdMap](#schemaresearchidmap)|false|none|Source identifiers grouped by namespace.|
|title|string|true|none|none|
|abstract|string|true|none|none|
|authors|string|false|none|Comma-joined author names.|
|categories|[string]|false|none|Paper categories.|
|createdDate|string|false|none|Original creation date string.|
|updateDate|string|false|none|Last-updated date string.|

<h2 id="tocS_ResearchPassage">ResearchPassage</h2>
<!-- backwards compatibility -->
<a id="schemaresearchpassage"></a>
<a id="schema_ResearchPassage"></a>
<a id="tocSresearchpassage"></a>
<a id="tocsresearchpassage"></a>

```json
{
  "text": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|In-body passage text. May include markdown tables.|
|score|number(double)|true|none|Dense similarity score for the passage.|

<h2 id="tocS_ResearchSearchPapersResponse">ResearchSearchPapersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresearchsearchpapersresponse"></a>
<a id="schema_ResearchSearchPapersResponse"></a>
<a id="tocSresearchsearchpapersresponse"></a>
<a id="tocsresearchsearchpapersresponse"></a>

```json
{
  "success": true,
  "results": [
    {
      "paperId": "string",
      "primaryId": "string",
      "ids": {
        "arxiv": [
          "2105.05233"
        ]
      },
      "title": "string",
      "abstract": "string",
      "score": 0,
      "signals": {
        "structural": 0,
        "semantic": 0,
        "articleRank": 0,
        "seedOverlap": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|results|[[ResearchPaperResult](#schemaresearchpaperresult)]|true|none|none|

<h2 id="tocS_ResearchPaperMetadataResponse">ResearchPaperMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresearchpapermetadataresponse"></a>
<a id="schema_ResearchPaperMetadataResponse"></a>
<a id="tocSresearchpapermetadataresponse"></a>
<a id="tocsresearchpapermetadataresponse"></a>

```json
{
  "success": true,
  "paper": {
    "paperId": "string",
    "ids": {
      "arxiv": [
        "2105.05233"
      ]
    },
    "title": "string",
    "abstract": "string",
    "authors": "string",
    "categories": [
      "string"
    ],
    "createdDate": "string",
    "updateDate": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|paper|[ResearchPaperMetadata](#schemaresearchpapermetadata)|true|none|none|

<h2 id="tocS_ResearchReadPaperResponse">ResearchReadPaperResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresearchreadpaperresponse"></a>
<a id="schema_ResearchReadPaperResponse"></a>
<a id="tocSresearchreadpaperresponse"></a>
<a id="tocsresearchreadpaperresponse"></a>

```json
{
  "success": true,
  "paper": {
    "paperId": "string",
    "ids": {
      "arxiv": [
        "2105.05233"
      ]
    },
    "title": "string",
    "abstract": "string",
    "authors": "string",
    "categories": [
      "string"
    ],
    "createdDate": "string",
    "updateDate": "string"
  },
  "paperId": "string",
  "query": "string",
  "passages": [
    {
      "text": "string",
      "score": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|paper|[ResearchPaperMetadata](#schemaresearchpapermetadata)|true|none|none|
|paperId|string|true|none|none|
|query|string|true|none|none|
|passages|[[ResearchPassage](#schemaresearchpassage)]|true|none|none|

<h2 id="tocS_ResearchSimilarPapersResponse">ResearchSimilarPapersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresearchsimilarpapersresponse"></a>
<a id="schema_ResearchSimilarPapersResponse"></a>
<a id="tocSresearchsimilarpapersresponse"></a>
<a id="tocsresearchsimilarpapersresponse"></a>

```json
{
  "success": true,
  "results": [
    {
      "paperId": "string",
      "primaryId": "string",
      "ids": {
        "arxiv": [
          "2105.05233"
        ]
      },
      "title": "string",
      "abstract": "string",
      "score": 0,
      "signals": {
        "structural": 0,
        "semantic": 0,
        "articleRank": 0,
        "seedOverlap": 0
      }
    }
  ],
  "poolSize": 0,
  "truncated": true,
  "note": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|results|[[ResearchPaperResult](#schemaresearchpaperresult)]|true|none|none|
|poolSize|integer|true|none|none|
|truncated|boolean|true|none|none|
|note|string \| null|false|none|none|

<h2 id="tocS_DeveloperSearchResult">DeveloperSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemadevelopersearchresult"></a>
<a id="schema_DeveloperSearchResult"></a>
<a id="tocSdevelopersearchresult"></a>
<a id="tocsdevelopersearchresult"></a>

```json
{
  "id": "issue:firecrawl/firecrawl#1234",
  "url": "http://example.com",
  "title": "string",
  "passages": [
    {
      "text": "string",
      "citation_url": "http://example.com",
      "truncated": true,
      "served_span": {
        "start": 0,
        "end": 0
      },
      "full_tokens_est": 0
    }
  ],
  "license": "MIT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Stable result id, such as `issue:owner/repo#123`. The prefix is the result kind.|
|url|string(uri)|false|none|none|
|title|string|false|none|Frequently absent on `doc` results, where the source page carries no usable title. Fall back to `url`.|
|passages|[object]|false|none|Matched passages in markdown, so tables and code blocks survive.|
|license|string|false|none|SPDX license id, verbatim, including `NOASSERTION`. Absent when the license is not known.|

<h2 id="tocS_DeveloperSearchResponse">DeveloperSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemadevelopersearchresponse"></a>
<a id="schema_DeveloperSearchResponse"></a>
<a id="tocSdevelopersearchresponse"></a>
<a id="tocsdevelopersearchresponse"></a>

```json
{
  "success": true,
  "results": [
    {
      "id": "issue:firecrawl/firecrawl#1234",
      "url": "http://example.com",
      "title": "string",
      "passages": [
        {
          "text": "string",
          "citation_url": "http://example.com",
          "truncated": true,
          "served_span": {
            "start": 0,
            "end": 0
          },
          "full_tokens_est": 0
        }
      ],
      "license": "MIT"
    }
  ],
  "coverage": {
    "doc": "ok",
    "issue": "ok",
    "pull_request": "ok",
    "readme": "ok"
  },
  "reranked": true,
  "repos": [
    {
      "repo": "firecrawl/firecrawl",
      "indexed": true,
      "types": {
        "issue": true,
        "pullRequest": true,
        "readme": true
      }
    }
  ],
  "sources": [
    {
      "source": "some-docs-site",
      "indexed": true
    },
    {
      "source": "unknown-docs-site",
      "indexed": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|results|[[DeveloperSearchResult](#schemadevelopersearchresult)]|false|none|none|
|coverage|object|false|none|Outcome for each result type. Check this when an expected result type is missing: `skipped` means your `types` value did not ask for that type, while `degraded` or `unavailable` means the gap came from the index or from a filter, not from the query. A repository filter is one such cause — see [how the repository filters scope a search](/api-reference/endpoint/developer-search#how-the-repository-filters-scope-a-search).|
|reranked|boolean|false|none|Whether the ranked list went through the reranking stage.|
|repos|[object]|false|none|Present only when `repos` was sent. Echoes each slug with whether it is indexed, plus a per-type breakdown under `types`.|
|sources|[object]|false|none|Present only when `sources` was sent. Reports each id exactly as requested along with whether it is indexed. `indexed: true` means the source has a published generation, so documentation evidence from it may appear; `indexed: false` means nothing from that id can match, which distinguishes an id that is not in the index from a query that simply found nothing.|

<h2 id="tocS_GovSearchResponse">GovSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagovsearchresponse"></a>
<a id="schema_GovSearchResponse"></a>
<a id="tocSgovsearchresponse"></a>
<a id="tocsgovsearchresponse"></a>

```json
{
  "success": true,
  "data": {
    "web": [
      {
        "url": "http://example.com",
        "title": "string",
        "description": "string",
        "position": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_EndpointFeedbackRequest">EndpointFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaendpointfeedbackrequest"></a>
<a id="schema_EndpointFeedbackRequest"></a>
<a id="tocSendpointfeedbackrequest"></a>
<a id="tocsendpointfeedbackrequest"></a>

```json
{
  "rating": "good",
  "valuableSources": [
    {
      "url": "http://example.com",
      "reason": "string"
    }
  ],
  "missingContent": [
    {
      "topic": "string",
      "description": "string"
    }
  ],
  "querySuggestions": "string",
  "origin": "api",
  "integration": "string",
  "endpoint": "search",
  "jobId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issues": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "note": "string",
  "url": "http://example.com",
  "pageNumbers": [
    1
  ],
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rating|string|true|none|none|
|valuableSources|[object]|false|none|none|
|missingContent|[object]|false|none|none|
|querySuggestions|string|false|none|none|
|origin|string|false|none|none|
|integration|string \| null|false|none|none|
|endpoint|string|true|none|none|
|jobId|string(uuid)|true|none|none|
|issues|[string]|false|none|none|
|tags|[string]|false|none|none|
|note|string|false|none|none|
|url|string(uri)|false|none|none|
|pageNumbers|[integer]|false|none|none|
|metadata|object|false|none|Small endpoint-specific metadata object. Must be 8KB or smaller; do not include full endpoint results.|
|missingContent|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rating|good|
|rating|partial|
|rating|bad|
|endpoint|search|
|endpoint|scrape|
|endpoint|parse|
|endpoint|map|

<h2 id="tocS_FeedbackResponse">FeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackresponse"></a>
<a id="schema_FeedbackResponse"></a>
<a id="tocSfeedbackresponse"></a>
<a id="tocsfeedbackresponse"></a>

```json
{
  "success": true,
  "feedbackId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "creditsRefunded": 0,
  "alreadySubmitted": true,
  "dailyCapReached": true,
  "creditsRefundedToday": 0,
  "dailyRefundCap": 0,
  "warning": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|feedbackId|string(uuid)|true|none|none|
|creditsRefunded|number|true|none|none|
|alreadySubmitted|boolean|false|none|none|
|dailyCapReached|boolean|false|none|none|
|creditsRefundedToday|number|false|none|none|
|dailyRefundCap|number|false|none|none|
|warning|string|false|none|none|

<h2 id="tocS_FeedbackErrorResponse">FeedbackErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackerrorresponse"></a>
<a id="schema_FeedbackErrorResponse"></a>
<a id="tocSfeedbackerrorresponse"></a>
<a id="tocsfeedbackerrorresponse"></a>

```json
{
  "success": false,
  "error": "string",
  "feedbackErrorCode": "string",
  "details": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|error|string|true|none|none|
|feedbackErrorCode|string|false|none|none|
|details|[object]|false|none|none|

<h2 id="tocS_ThreatProtectionOverride">ThreatProtectionOverride</h2>
<!-- backwards compatibility -->
<a id="schemathreatprotectionoverride"></a>
<a id="schema_ThreatProtectionOverride"></a>
<a id="tocSthreatprotectionoverride"></a>
<a id="tocsthreatprotectionoverride"></a>

```json
{
  "mode": "off",
  "riskScoreThreshold": 75,
  "blacklist": [
    "string"
  ],
  "whitelist": [
    "string"
  ],
  "blockedTlds": [
    "string"
  ],
  "failurePolicy": "open"
}
```

Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|URL scanning mode for this request. `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).|
|riskScoreThreshold|integer|false|none|Normalized risk score (0–100) at or above which a classifier verdict blocks the URL. Lower is stricter.|
|blacklist|[string]|false|none|Domains to always block, as plain domains (`example.com`) or wildcard globs (`*.example.com`). No protocol, path, or port.|
|whitelist|[string]|false|none|Domains to always allow, as plain domains or wildcard globs. Wins over every other rule.|
|blockedTlds|[string]|false|none|Top-level domains to block outright, lowercase without the leading dot (e.g. `zip`).|
|failurePolicy|string|false|none|What to do when the classifier can't be reached: `closed` blocks the request, `open` allows it.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|off|
|mode|normal|
|failurePolicy|open|
|failurePolicy|closed|

<h2 id="tocS_AgentPendingApproval">AgentPendingApproval</h2>
<!-- backwards compatibility -->
<a id="schemaagentpendingapproval"></a>
<a id="schema_AgentPendingApproval"></a>
<a id="tocSagentpendingapproval"></a>
<a id="tocsagentpendingapproval"></a>

```json
{
  "id": "string",
  "kind": "calls",
  "reason": "string",
  "calls": [
    {
      "id": "string",
      "provider": "string",
      "capability": "string",
      "input": {},
      "more": [
        {}
      ],
      "creditsEstimate": 0
    }
  ],
  "terms": [
    {
      "provider": "string",
      "name": "string",
      "capability": "string",
      "adds": "string",
      "version": "string",
      "digest": "string",
      "url": "string"
    }
  ],
  "resolution": {
    "approved": true,
    "callIds": [
      "string"
    ],
    "always": true,
    "byRunId": "string"
  }
}
```

What the turn stopped to ask. Answer it on the next turn of the thread with `exchange.approve` or `exchange.decline`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Send this as `approvalId`.|
|kind|string|false|none|`calls`: paid provider calls held back by `requireApproval`. `terms`: providers whose data terms need accepting (`onTermsRequired: "ask"`). Absent on items written before terms offers existed, which are `calls`.|
|reason|string|false|none|Why the agent wants to make these calls.|
|calls|[object]|false|none|The paid calls waiting for approval. Empty on a `terms` approval.|
|terms|[object]|false|none|On a `terms` approval, the providers whose terms need accepting.|
|resolution|object \| null|false|none|Null until a later turn answers the approval.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|calls|
|kind|terms|

<h2 id="tocS_AgentExchangeSummary">AgentExchangeSummary</h2>
<!-- backwards compatibility -->
<a id="schemaagentexchangesummary"></a>
<a id="schema_AgentExchangeSummary"></a>
<a id="tocSagentexchangesummary"></a>
<a id="tocsagentexchangesummary"></a>

```json
{
  "enabled": true,
  "toolkits": [
    "string"
  ],
  "requireApproval": true,
  "onTermsRequired": "skip",
  "paidCalls": 0,
  "creditsUsed": 0,
  "skippedProviders": [
    {
      "provider": "string",
      "name": "string",
      "capability": "string",
      "adds": "string",
      "reason": "terms_required",
      "version": "string",
      "termsUrl": "string"
    }
  ],
  "requiresAction": {
    "type": "accept_terms",
    "approvalId": "string",
    "providers": [
      {
        "provider": "string",
        "name": "string",
        "capability": "string",
        "adds": "string",
        "version": "string",
        "digest": "string",
        "url": "string",
        "show": {},
        "accept": {}
      }
    ]
  }
}
```

What the run did with Alexandria. `toolkits` and `requireApproval` are what the run resolved to after thread inheritance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|toolkits|[string]|false|none|Pinned providers. Empty or absent means every provider the team can use.|
|requireApproval|boolean|false|none|none|
|onTermsRequired|string|false|none|none|
|paidCalls|integer|false|none|Paid provider calls the run made.|
|creditsUsed|number \| null|false|none|Credits the provider calls used, or null when unknown.|
|skippedProviders|[object]|false|none|Providers that would have helped but need data terms your team has not accepted. Any `onTermsRequired` mode.|
|requiresAction|object|false|none|`onTermsRequired: "ask"` only, when a terms offer ended the turn: the calls to view and accept each provider's terms. Nothing here runs for you, and `terms/accept` must only be called after your user explicitly agrees.|

#### Enumerated Values

|Property|Value|
|---|---|
|onTermsRequired|skip|
|onTermsRequired|ask|
