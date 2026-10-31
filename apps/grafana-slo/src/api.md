<h1 id="grafana-slo-api">Grafana SLO API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API CRUDs SLO objects for the Grafana plugin. 
Modifying an SLO object will create or update recording and alerting rules in a connected Prometheus instance and create or update dashboards in Grafana.

Base URLs:

* <a href="https://raw.githubusercontent.com/api/plugins/grafana-slo-app/resources">https://raw.githubusercontent.com/api/plugins/grafana-slo-app/resources</a> - API Subpath

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="grafana-slo-api-default">Default</h1>

## get/v1/report

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/report \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/report`

> Example responses

> 200 Response

```json
{
  "reports": [
    {
      "description": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "reportDefinition": {
        "slos": [
          {
            "sloUuid": "string"
          }
        ]
      },
      "timeSpan": "string",
      "uuid": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="getv1report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[api.ReportListResponse](#schemaapi.reportlistresponse)|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/v1/report

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "reportDefinition": {
      "slos": [
        {
          "sloUuid": "string"
        }
      ]
    },
    "timeSpan": "string",
    "uuid": "string"
  }'
```

`POST /v1/report`

> Body parameter

```json
{
  "description": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "reportDefinition": {
    "slos": [
      {
        "sloUuid": "string"
      }
    ]
  },
  "timeSpan": "string",
  "uuid": "string"
}
```

<h3 id="postv1report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[report.v1.Report](#schemareport.v1.report)|true|none|
|» description|body|string|true|none|
|» labels|body|[[report.v1.Label](#schemareport.v1.label)]|false|none|
|» name|body|string|true|none|
|» reportDefinition|body|[report.v1.ReportDefinitionSloList](#schemareport.v1.reportdefinitionslolist)|true|none|
|» timeSpan|body|string|true|none|
|» uuid|body|string|true|none|

> Example responses

> 202 Response

```json
{
  "message": "string",
  "uuid": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="postv1report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[api.ReportCreateResponse](#schemaapi.reportcreateresponse)|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/v1/report/{id}

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/report/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/report/{id}`

<h3 id="getv1reportid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "reportDefinition": {
    "slos": [
      {
        "sloUuid": "string"
      }
    ]
  },
  "timeSpan": "string",
  "uuid": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="getv1reportid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[report.v1.Report](#schemareport.v1.report)|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/v1/report/{id}

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/report/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "reportDefinition": {
      "slos": [
        {
          "sloUuid": "string"
        }
      ]
    },
    "timeSpan": "string",
    "uuid": "string"
  }'
```

`PUT /v1/report/{id}`

> Body parameter

```json
{
  "description": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "reportDefinition": {
    "slos": [
      {
        "sloUuid": "string"
      }
    ]
  },
  "timeSpan": "string",
  "uuid": "string"
}
```

<h3 id="putv1reportid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[report.v1.Report](#schemareport.v1.report)|true|none|
|» description|body|string|true|none|
|» labels|body|[[report.v1.Label](#schemareport.v1.label)]|false|none|
|» name|body|string|true|none|
|» reportDefinition|body|[report.v1.ReportDefinitionSloList](#schemareport.v1.reportdefinitionslolist)|true|none|
|» timeSpan|body|string|true|none|
|» uuid|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="putv1reportid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/v1/report/{id}

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/report/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/report/{id}`

<h3 id="deletev1reportid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="deletev1reportid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/v1/slo

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/slo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/slo`

> Example responses

> 200 Response

```json
{
  "slos": [
    {
      "alerting": {
        "advancedOptions": {
          "minFailures": 0
        },
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "fastBurn": {
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "enrichments": [
            {
              "type": "string"
            }
          ],
          "labels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "slowBurn": {
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "enrichments": [
            {
              "type": "string"
            }
          ],
          "labels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        }
      },
      "description": "string",
      "destinationDatasource": {
        "type": "string",
        "uid": "string"
      },
      "folder": {
        "uid": "string"
      },
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "objectives": [
        {
          "value": 0,
          "window": "string"
        }
      ],
      "query": {
        "failureRatio": {
          "failureMetric": {
            "prometheusMetric": "string",
            "type": "string"
          },
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "totalMetric": {
            "prometheusMetric": "string",
            "type": "string"
          }
        },
        "failureThreshold": {
          "failureThresholdExpression": "string",
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "threshold": {
            "operator": "<",
            "value": 0
          }
        },
        "freeform": {
          "query": "string",
          "sourceDatasourceUid": "string"
        },
        "grafanaQueries": {
          "grafanaQueries": [
            {
              "property1": null,
              "property2": null
            }
          ]
        },
        "ratio": {
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "successMetric": {
            "prometheusMetric": "string",
            "type": "string"
          },
          "totalMetric": {
            "prometheusMetric": "string",
            "type": "string"
          }
        },
        "threshold": {
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "threshold": {
            "operator": "<",
            "value": 0
          },
          "thresholdExpression": "string"
        },
        "type": "freeform"
      },
      "readOnly": {
        "allowedActions": [
          "string"
        ],
        "creationTimestamp": 0,
        "drillDownDashboardRef": {
          "UID": "string"
        },
        "maintenanceEvents": [
          {
            "endTimeIso8601": "string",
            "name": "string",
            "startTimeIso8601": "string"
          }
        ],
        "parsesAsRatio": true,
        "provenance": "string",
        "sourceDatasource": {
          "type": "string",
          "uid": "string"
        },
        "status": {
          "message": "string",
          "type": "created"
        }
      },
      "searchExpression": "string",
      "uuid": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="getv1slo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[api.SLOListResponse](#schemaapi.slolistresponse)|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/v1/slo

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/slo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alerting": {
      "advancedOptions": {
        "minFailures": 0
      },
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "fastBurn": {
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "enrichments": [
          {
            "type": "string"
          }
        ],
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "slowBurn": {
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "enrichments": [
          {
            "type": "string"
          }
        ],
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    },
    "description": "string",
    "destinationDatasource": {
      "type": "string",
      "uid": "string"
    },
    "folder": {
      "uid": "string"
    },
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "objectives": [
      {
        "value": 0,
        "window": "string"
      }
    ],
    "query": {
      "failureRatio": {
        "failureMetric": {
          "prometheusMetric": "string",
          "type": "string"
        },
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "totalMetric": {
          "prometheusMetric": "string",
          "type": "string"
        }
      },
      "failureThreshold": {
        "failureThresholdExpression": "string",
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "threshold": {
          "operator": "<",
          "value": 0
        }
      },
      "freeform": {
        "query": "string",
        "sourceDatasourceUid": "string"
      },
      "grafanaQueries": {
        "grafanaQueries": [
          {
            "property1": null,
            "property2": null
          }
        ]
      },
      "ratio": {
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "successMetric": {
          "prometheusMetric": "string",
          "type": "string"
        },
        "totalMetric": {
          "prometheusMetric": "string",
          "type": "string"
        }
      },
      "threshold": {
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "threshold": {
          "operator": "<",
          "value": 0
        },
        "thresholdExpression": "string"
      },
      "type": "freeform"
    },
    "readOnly": {
      "allowedActions": [
        "string"
      ],
      "creationTimestamp": 0,
      "drillDownDashboardRef": {
        "UID": "string"
      },
      "maintenanceEvents": [
        {
          "endTimeIso8601": "string",
          "name": "string",
          "startTimeIso8601": "string"
        }
      ],
      "parsesAsRatio": true,
      "provenance": "string",
      "sourceDatasource": {
        "type": "string",
        "uid": "string"
      },
      "status": {
        "message": "string",
        "type": "created"
      }
    },
    "searchExpression": "string",
    "uuid": "string"
  }'
```

`POST /v1/slo`

> Body parameter

```json
{
  "alerting": {
    "advancedOptions": {
      "minFailures": 0
    },
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "fastBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "slowBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "description": "string",
  "destinationDatasource": {
    "type": "string",
    "uid": "string"
  },
  "folder": {
    "uid": "string"
  },
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "objectives": [
    {
      "value": 0,
      "window": "string"
    }
  ],
  "query": {
    "failureRatio": {
      "failureMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "failureThreshold": {
      "failureThresholdExpression": "string",
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      }
    },
    "freeform": {
      "query": "string",
      "sourceDatasourceUid": "string"
    },
    "grafanaQueries": {
      "grafanaQueries": [
        {
          "property1": null,
          "property2": null
        }
      ]
    },
    "ratio": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "successMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "threshold": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      },
      "thresholdExpression": "string"
    },
    "type": "freeform"
  },
  "readOnly": {
    "allowedActions": [
      "string"
    ],
    "creationTimestamp": 0,
    "drillDownDashboardRef": {
      "UID": "string"
    },
    "maintenanceEvents": [
      {
        "endTimeIso8601": "string",
        "name": "string",
        "startTimeIso8601": "string"
      }
    ],
    "parsesAsRatio": true,
    "provenance": "string",
    "sourceDatasource": {
      "type": "string",
      "uid": "string"
    },
    "status": {
      "message": "string",
      "type": "created"
    }
  },
  "searchExpression": "string",
  "uuid": "string"
}
```

<h3 id="postv1slo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[slo.v0_0.Slo](#schemaslo.v0_0.slo)|true|none|
|» alerting|body|[slo.v0_0.Alerting](#schemaslo.v0_0.alerting)|false|none|
|» description|body|string|true|none|
|» destinationDatasource|body|[slo.v0_0.DestinationDatasource](#schemaslo.v0_0.destinationdatasource)|false|none|
|» folder|body|[slo.v0_0.Folder](#schemaslo.v0_0.folder)|false|none|
|» labels|body|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|
|» name|body|string|true|none|
|» objectives|body|[[slo.v0_0.Objective](#schemaslo.v0_0.objective)]|true|none|
|» query|body|[slo.v0_0.Query](#schemaslo.v0_0.query)|true|none|
|» readOnly|body|[slo.v0_0.ReadOnly](#schemaslo.v0_0.readonly)|false|none|
|» searchExpression|body|string|false|none|
|» uuid|body|string|true|none|

> Example responses

> 202 Response

```json
{
  "message": "string",
  "uuid": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="postv1slo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[api.SLOCreateResponse](#schemaapi.slocreateresponse)|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/v1/slo/{id}

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/slo/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/slo/{id}`

<h3 id="getv1sloid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "alerting": {
    "advancedOptions": {
      "minFailures": 0
    },
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "fastBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "slowBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "description": "string",
  "destinationDatasource": {
    "type": "string",
    "uid": "string"
  },
  "folder": {
    "uid": "string"
  },
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "objectives": [
    {
      "value": 0,
      "window": "string"
    }
  ],
  "query": {
    "failureRatio": {
      "failureMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "failureThreshold": {
      "failureThresholdExpression": "string",
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      }
    },
    "freeform": {
      "query": "string",
      "sourceDatasourceUid": "string"
    },
    "grafanaQueries": {
      "grafanaQueries": [
        {
          "property1": null,
          "property2": null
        }
      ]
    },
    "ratio": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "successMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "threshold": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      },
      "thresholdExpression": "string"
    },
    "type": "freeform"
  },
  "readOnly": {
    "allowedActions": [
      "string"
    ],
    "creationTimestamp": 0,
    "drillDownDashboardRef": {
      "UID": "string"
    },
    "maintenanceEvents": [
      {
        "endTimeIso8601": "string",
        "name": "string",
        "startTimeIso8601": "string"
      }
    ],
    "parsesAsRatio": true,
    "provenance": "string",
    "sourceDatasource": {
      "type": "string",
      "uid": "string"
    },
    "status": {
      "message": "string",
      "type": "created"
    }
  },
  "searchExpression": "string",
  "uuid": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="getv1sloid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[slo.v0_0.Slo](#schemaslo.v0_0.slo)|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/v1/slo/{id}

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/slo/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alerting": {
      "advancedOptions": {
        "minFailures": 0
      },
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "fastBurn": {
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "enrichments": [
          {
            "type": "string"
          }
        ],
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "slowBurn": {
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "enrichments": [
          {
            "type": "string"
          }
        ],
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    },
    "description": "string",
    "destinationDatasource": {
      "type": "string",
      "uid": "string"
    },
    "folder": {
      "uid": "string"
    },
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "objectives": [
      {
        "value": 0,
        "window": "string"
      }
    ],
    "query": {
      "failureRatio": {
        "failureMetric": {
          "prometheusMetric": "string",
          "type": "string"
        },
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "totalMetric": {
          "prometheusMetric": "string",
          "type": "string"
        }
      },
      "failureThreshold": {
        "failureThresholdExpression": "string",
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "threshold": {
          "operator": "<",
          "value": 0
        }
      },
      "freeform": {
        "query": "string",
        "sourceDatasourceUid": "string"
      },
      "grafanaQueries": {
        "grafanaQueries": [
          {
            "property1": null,
            "property2": null
          }
        ]
      },
      "ratio": {
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "successMetric": {
          "prometheusMetric": "string",
          "type": "string"
        },
        "totalMetric": {
          "prometheusMetric": "string",
          "type": "string"
        }
      },
      "threshold": {
        "groupByLabels": [
          "string"
        ],
        "sourceDatasourceUid": "string",
        "threshold": {
          "operator": "<",
          "value": 0
        },
        "thresholdExpression": "string"
      },
      "type": "freeform"
    },
    "readOnly": {
      "allowedActions": [
        "string"
      ],
      "creationTimestamp": 0,
      "drillDownDashboardRef": {
        "UID": "string"
      },
      "maintenanceEvents": [
        {
          "endTimeIso8601": "string",
          "name": "string",
          "startTimeIso8601": "string"
        }
      ],
      "parsesAsRatio": true,
      "provenance": "string",
      "sourceDatasource": {
        "type": "string",
        "uid": "string"
      },
      "status": {
        "message": "string",
        "type": "created"
      }
    },
    "searchExpression": "string",
    "uuid": "string"
  }'
```

`PUT /v1/slo/{id}`

> Body parameter

```json
{
  "alerting": {
    "advancedOptions": {
      "minFailures": 0
    },
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "fastBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "slowBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "description": "string",
  "destinationDatasource": {
    "type": "string",
    "uid": "string"
  },
  "folder": {
    "uid": "string"
  },
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "objectives": [
    {
      "value": 0,
      "window": "string"
    }
  ],
  "query": {
    "failureRatio": {
      "failureMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "failureThreshold": {
      "failureThresholdExpression": "string",
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      }
    },
    "freeform": {
      "query": "string",
      "sourceDatasourceUid": "string"
    },
    "grafanaQueries": {
      "grafanaQueries": [
        {
          "property1": null,
          "property2": null
        }
      ]
    },
    "ratio": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "successMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "threshold": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      },
      "thresholdExpression": "string"
    },
    "type": "freeform"
  },
  "readOnly": {
    "allowedActions": [
      "string"
    ],
    "creationTimestamp": 0,
    "drillDownDashboardRef": {
      "UID": "string"
    },
    "maintenanceEvents": [
      {
        "endTimeIso8601": "string",
        "name": "string",
        "startTimeIso8601": "string"
      }
    ],
    "parsesAsRatio": true,
    "provenance": "string",
    "sourceDatasource": {
      "type": "string",
      "uid": "string"
    },
    "status": {
      "message": "string",
      "type": "created"
    }
  },
  "searchExpression": "string",
  "uuid": "string"
}
```

<h3 id="putv1sloid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[slo.v0_0.Slo](#schemaslo.v0_0.slo)|true|none|
|» alerting|body|[slo.v0_0.Alerting](#schemaslo.v0_0.alerting)|false|none|
|» description|body|string|true|none|
|» destinationDatasource|body|[slo.v0_0.DestinationDatasource](#schemaslo.v0_0.destinationdatasource)|false|none|
|» folder|body|[slo.v0_0.Folder](#schemaslo.v0_0.folder)|false|none|
|» labels|body|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|
|» name|body|string|true|none|
|» objectives|body|[[slo.v0_0.Objective](#schemaslo.v0_0.objective)]|true|none|
|» query|body|[slo.v0_0.Query](#schemaslo.v0_0.query)|true|none|
|» readOnly|body|[slo.v0_0.ReadOnly](#schemaslo.v0_0.readonly)|false|none|
|» searchExpression|body|string|false|none|
|» uuid|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="putv1sloid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/v1/slo/{id}

> Code samples

```bash
curl https://grafana.example.com/api/plugins/grafana-slo-app/resources/v1/slo/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/slo/{id}`

<h3 id="deletev1sloid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error": "string"
}
```

<h3 id="deletev1sloid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[api.ErrorResponse](#schemaapi.errorresponse)|
|500|Internal Server Error|Internal Server Error|[api.ErrorResponse](#schemaapi.errorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_api.ErrorResponse">api.ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi.errorresponse"></a>
<a id="schema_api.ErrorResponse"></a>
<a id="tocSapi.errorresponse"></a>
<a id="tocsapi.errorresponse"></a>

```json
{
  "code": 0,
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|error|string|true|none|none|

<h2 id="tocS_api.ReportCreateResponse">api.ReportCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi.reportcreateresponse"></a>
<a id="schema_api.ReportCreateResponse"></a>
<a id="tocSapi.reportcreateresponse"></a>
<a id="tocsapi.reportcreateresponse"></a>

```json
{
  "message": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_api.ReportListResponse">api.ReportListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi.reportlistresponse"></a>
<a id="schema_api.ReportListResponse"></a>
<a id="tocSapi.reportlistresponse"></a>
<a id="tocsapi.reportlistresponse"></a>

```json
{
  "reports": [
    {
      "description": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "reportDefinition": {
        "slos": [
          {
            "sloUuid": "string"
          }
        ]
      },
      "timeSpan": "string",
      "uuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|[[report.v1.Report](#schemareport.v1.report)]|true|none|none|

<h2 id="tocS_api.SLOCreateResponse">api.SLOCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi.slocreateresponse"></a>
<a id="schema_api.SLOCreateResponse"></a>
<a id="tocSapi.slocreateresponse"></a>
<a id="tocsapi.slocreateresponse"></a>

```json
{
  "message": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_api.SLOListResponse">api.SLOListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi.slolistresponse"></a>
<a id="schema_api.SLOListResponse"></a>
<a id="tocSapi.slolistresponse"></a>
<a id="tocsapi.slolistresponse"></a>

```json
{
  "slos": [
    {
      "alerting": {
        "advancedOptions": {
          "minFailures": 0
        },
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "fastBurn": {
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "enrichments": [
            {
              "type": "string"
            }
          ],
          "labels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "slowBurn": {
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "enrichments": [
            {
              "type": "string"
            }
          ],
          "labels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        }
      },
      "description": "string",
      "destinationDatasource": {
        "type": "string",
        "uid": "string"
      },
      "folder": {
        "uid": "string"
      },
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "objectives": [
        {
          "value": 0,
          "window": "string"
        }
      ],
      "query": {
        "failureRatio": {
          "failureMetric": {
            "prometheusMetric": "string",
            "type": "string"
          },
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "totalMetric": {
            "prometheusMetric": "string",
            "type": "string"
          }
        },
        "failureThreshold": {
          "failureThresholdExpression": "string",
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "threshold": {
            "operator": "<",
            "value": 0
          }
        },
        "freeform": {
          "query": "string",
          "sourceDatasourceUid": "string"
        },
        "grafanaQueries": {
          "grafanaQueries": [
            {
              "property1": null,
              "property2": null
            }
          ]
        },
        "ratio": {
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "successMetric": {
            "prometheusMetric": "string",
            "type": "string"
          },
          "totalMetric": {
            "prometheusMetric": "string",
            "type": "string"
          }
        },
        "threshold": {
          "groupByLabels": [
            "string"
          ],
          "sourceDatasourceUid": "string",
          "threshold": {
            "operator": "<",
            "value": 0
          },
          "thresholdExpression": "string"
        },
        "type": "freeform"
      },
      "readOnly": {
        "allowedActions": [
          "string"
        ],
        "creationTimestamp": 0,
        "drillDownDashboardRef": {
          "UID": "string"
        },
        "maintenanceEvents": [
          {
            "endTimeIso8601": "string",
            "name": "string",
            "startTimeIso8601": "string"
          }
        ],
        "parsesAsRatio": true,
        "provenance": "string",
        "sourceDatasource": {
          "type": "string",
          "uid": "string"
        },
        "status": {
          "message": "string",
          "type": "created"
        }
      },
      "searchExpression": "string",
      "uuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slos|[[slo.v0_0.Slo](#schemaslo.v0_0.slo)]|true|none|none|

<h2 id="tocS_report.v1.Label">report.v1.Label</h2>
<!-- backwards compatibility -->
<a id="schemareport.v1.label"></a>
<a id="schema_report.v1.Label"></a>
<a id="tocSreport.v1.label"></a>
<a id="tocsreport.v1.label"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_report.v1.Report">report.v1.Report</h2>
<!-- backwards compatibility -->
<a id="schemareport.v1.report"></a>
<a id="schema_report.v1.Report"></a>
<a id="tocSreport.v1.report"></a>
<a id="tocsreport.v1.report"></a>

```json
{
  "description": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "reportDefinition": {
    "slos": [
      {
        "sloUuid": "string"
      }
    ]
  },
  "timeSpan": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|labels|[[report.v1.Label](#schemareport.v1.label)]|false|none|none|
|name|string|true|none|none|
|reportDefinition|[report.v1.ReportDefinitionSloList](#schemareport.v1.reportdefinitionslolist)|true|none|none|
|timeSpan|string|true|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_report.v1.ReportDefinitionSloList">report.v1.ReportDefinitionSloList</h2>
<!-- backwards compatibility -->
<a id="schemareport.v1.reportdefinitionslolist"></a>
<a id="schema_report.v1.ReportDefinitionSloList"></a>
<a id="tocSreport.v1.reportdefinitionslolist"></a>
<a id="tocsreport.v1.reportdefinitionslolist"></a>

```json
{
  "slos": [
    {
      "sloUuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slos|[[report.v1.ReportSlo](#schemareport.v1.reportslo)]|true|none|none|

<h2 id="tocS_report.v1.ReportSlo">report.v1.ReportSlo</h2>
<!-- backwards compatibility -->
<a id="schemareport.v1.reportslo"></a>
<a id="schema_report.v1.ReportSlo"></a>
<a id="tocSreport.v1.reportslo"></a>
<a id="tocsreport.v1.reportslo"></a>

```json
{
  "sloUuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sloUuid|string|true|none|none|

<h2 id="tocS_slo.v0_0.AdvancedOptions">slo.v0_0.AdvancedOptions</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.advancedoptions"></a>
<a id="schema_slo.v0_0.AdvancedOptions"></a>
<a id="tocSslo.v0_0.advancedoptions"></a>
<a id="tocsslo.v0_0.advancedoptions"></a>

```json
{
  "minFailures": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minFailures|integer(int64)|false|none|none|

<h2 id="tocS_slo.v0_0.AlertEnrichment">slo.v0_0.AlertEnrichment</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.alertenrichment"></a>
<a id="schema_slo.v0_0.AlertEnrichment"></a>
<a id="tocSslo.v0_0.alertenrichment"></a>
<a id="tocsslo.v0_0.alertenrichment"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_slo.v0_0.Alerting">slo.v0_0.Alerting</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.alerting"></a>
<a id="schema_slo.v0_0.Alerting"></a>
<a id="tocSslo.v0_0.alerting"></a>
<a id="tocsslo.v0_0.alerting"></a>

```json
{
  "advancedOptions": {
    "minFailures": 0
  },
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "fastBurn": {
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "enrichments": [
      {
        "type": "string"
      }
    ],
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "slowBurn": {
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "enrichments": [
      {
        "type": "string"
      }
    ],
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedOptions|[slo.v0_0.AdvancedOptions](#schemaslo.v0_0.advancedoptions)|false|none|none|
|annotations|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|none|
|fastBurn|[slo.v0_0.AlertingMetadata](#schemaslo.v0_0.alertingmetadata)|false|none|none|
|labels|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|none|
|slowBurn|[slo.v0_0.AlertingMetadata](#schemaslo.v0_0.alertingmetadata)|false|none|none|

<h2 id="tocS_slo.v0_0.AlertingMetadata">slo.v0_0.AlertingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.alertingmetadata"></a>
<a id="schema_slo.v0_0.AlertingMetadata"></a>
<a id="tocSslo.v0_0.alertingmetadata"></a>
<a id="tocsslo.v0_0.alertingmetadata"></a>

```json
{
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "enrichments": [
    {
      "type": "string"
    }
  ],
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|none|
|enrichments|[[slo.v0_0.AlertEnrichment](#schemaslo.v0_0.alertenrichment)]|false|none|none|
|labels|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|none|

<h2 id="tocS_slo.v0_0.DashboardRef">slo.v0_0.DashboardRef</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.dashboardref"></a>
<a id="schema_slo.v0_0.DashboardRef"></a>
<a id="tocSslo.v0_0.dashboardref"></a>
<a id="tocsslo.v0_0.dashboardref"></a>

```json
{
  "UID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UID|string|true|none|none|

<h2 id="tocS_slo.v0_0.DestinationDatasource">slo.v0_0.DestinationDatasource</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.destinationdatasource"></a>
<a id="schema_slo.v0_0.DestinationDatasource"></a>
<a id="tocSslo.v0_0.destinationdatasource"></a>
<a id="tocsslo.v0_0.destinationdatasource"></a>

```json
{
  "type": "string",
  "uid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|uid|string|false|none|none|

<h2 id="tocS_slo.v0_0.FailureRatioQuery">slo.v0_0.FailureRatioQuery</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.failureratioquery"></a>
<a id="schema_slo.v0_0.FailureRatioQuery"></a>
<a id="tocSslo.v0_0.failureratioquery"></a>
<a id="tocsslo.v0_0.failureratioquery"></a>

```json
{
  "failureMetric": {
    "prometheusMetric": "string",
    "type": "string"
  },
  "groupByLabels": [
    "string"
  ],
  "sourceDatasourceUid": "string",
  "totalMetric": {
    "prometheusMetric": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureMetric|[slo.v0_0.MetricDef](#schemaslo.v0_0.metricdef)|true|none|none|
|groupByLabels|[string]|false|none|none|
|sourceDatasourceUid|string|false|none|none|
|totalMetric|[slo.v0_0.MetricDef](#schemaslo.v0_0.metricdef)|true|none|none|

<h2 id="tocS_slo.v0_0.FailureThresholdQuery">slo.v0_0.FailureThresholdQuery</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.failurethresholdquery"></a>
<a id="schema_slo.v0_0.FailureThresholdQuery"></a>
<a id="tocSslo.v0_0.failurethresholdquery"></a>
<a id="tocsslo.v0_0.failurethresholdquery"></a>

```json
{
  "failureThresholdExpression": "string",
  "groupByLabels": [
    "string"
  ],
  "sourceDatasourceUid": "string",
  "threshold": {
    "operator": "<",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureThresholdExpression|string|true|none|none|
|groupByLabels|[string]|false|none|none|
|sourceDatasourceUid|string|false|none|none|
|threshold|[slo.v0_0.Threshold](#schemaslo.v0_0.threshold)|true|none|none|

<h2 id="tocS_slo.v0_0.Folder">slo.v0_0.Folder</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.folder"></a>
<a id="schema_slo.v0_0.Folder"></a>
<a id="tocSslo.v0_0.folder"></a>
<a id="tocsslo.v0_0.folder"></a>

```json
{
  "uid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|none|

<h2 id="tocS_slo.v0_0.FreeformQuery">slo.v0_0.FreeformQuery</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.freeformquery"></a>
<a id="schema_slo.v0_0.FreeformQuery"></a>
<a id="tocSslo.v0_0.freeformquery"></a>
<a id="tocsslo.v0_0.freeformquery"></a>

```json
{
  "query": "string",
  "sourceDatasourceUid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|sourceDatasourceUid|string|false|none|none|

<h2 id="tocS_slo.v0_0.GrafanaQueries">slo.v0_0.GrafanaQueries</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.grafanaqueries"></a>
<a id="schema_slo.v0_0.GrafanaQueries"></a>
<a id="tocSslo.v0_0.grafanaqueries"></a>
<a id="tocsslo.v0_0.grafanaqueries"></a>

```json
{
  "grafanaQueries": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grafanaQueries|[object]|true|none|none|

<h2 id="tocS_slo.v0_0.Label">slo.v0_0.Label</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.label"></a>
<a id="schema_slo.v0_0.Label"></a>
<a id="tocSslo.v0_0.label"></a>
<a id="tocsslo.v0_0.label"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_slo.v0_0.MaintenanceEvent">slo.v0_0.MaintenanceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.maintenanceevent"></a>
<a id="schema_slo.v0_0.MaintenanceEvent"></a>
<a id="tocSslo.v0_0.maintenanceevent"></a>
<a id="tocsslo.v0_0.maintenanceevent"></a>

```json
{
  "endTimeIso8601": "string",
  "name": "string",
  "startTimeIso8601": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeIso8601|string|false|none|none|
|name|string|true|none|none|
|startTimeIso8601|string|true|none|none|

<h2 id="tocS_slo.v0_0.MetricDef">slo.v0_0.MetricDef</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.metricdef"></a>
<a id="schema_slo.v0_0.MetricDef"></a>
<a id="tocSslo.v0_0.metricdef"></a>
<a id="tocsslo.v0_0.metricdef"></a>

```json
{
  "prometheusMetric": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prometheusMetric|string|true|none|none|
|type|string|false|none|none|

<h2 id="tocS_slo.v0_0.Objective">slo.v0_0.Objective</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.objective"></a>
<a id="schema_slo.v0_0.Objective"></a>
<a id="tocSslo.v0_0.objective"></a>
<a id="tocsslo.v0_0.objective"></a>

```json
{
  "value": 0,
  "window": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|true|none|none|
|window|string|true|none|none|

<h2 id="tocS_slo.v0_0.Query">slo.v0_0.Query</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.query"></a>
<a id="schema_slo.v0_0.Query"></a>
<a id="tocSslo.v0_0.query"></a>
<a id="tocsslo.v0_0.query"></a>

```json
{
  "failureRatio": {
    "failureMetric": {
      "prometheusMetric": "string",
      "type": "string"
    },
    "groupByLabels": [
      "string"
    ],
    "sourceDatasourceUid": "string",
    "totalMetric": {
      "prometheusMetric": "string",
      "type": "string"
    }
  },
  "failureThreshold": {
    "failureThresholdExpression": "string",
    "groupByLabels": [
      "string"
    ],
    "sourceDatasourceUid": "string",
    "threshold": {
      "operator": "<",
      "value": 0
    }
  },
  "freeform": {
    "query": "string",
    "sourceDatasourceUid": "string"
  },
  "grafanaQueries": {
    "grafanaQueries": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "ratio": {
    "groupByLabels": [
      "string"
    ],
    "sourceDatasourceUid": "string",
    "successMetric": {
      "prometheusMetric": "string",
      "type": "string"
    },
    "totalMetric": {
      "prometheusMetric": "string",
      "type": "string"
    }
  },
  "threshold": {
    "groupByLabels": [
      "string"
    ],
    "sourceDatasourceUid": "string",
    "threshold": {
      "operator": "<",
      "value": 0
    },
    "thresholdExpression": "string"
  },
  "type": "freeform"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureRatio|[slo.v0_0.FailureRatioQuery](#schemaslo.v0_0.failureratioquery)|false|none|none|
|failureThreshold|[slo.v0_0.FailureThresholdQuery](#schemaslo.v0_0.failurethresholdquery)|false|none|none|
|freeform|[slo.v0_0.FreeformQuery](#schemaslo.v0_0.freeformquery)|false|none|none|
|grafanaQueries|[slo.v0_0.GrafanaQueries](#schemaslo.v0_0.grafanaqueries)|false|none|none|
|ratio|[slo.v0_0.RatioQuery](#schemaslo.v0_0.ratioquery)|false|none|none|
|threshold|[slo.v0_0.ThresholdQuery](#schemaslo.v0_0.thresholdquery)|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|freeform|
|type|ratio|
|type|threshold|
|type|failureThreshold|

<h2 id="tocS_slo.v0_0.RatioQuery">slo.v0_0.RatioQuery</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.ratioquery"></a>
<a id="schema_slo.v0_0.RatioQuery"></a>
<a id="tocSslo.v0_0.ratioquery"></a>
<a id="tocsslo.v0_0.ratioquery"></a>

```json
{
  "groupByLabels": [
    "string"
  ],
  "sourceDatasourceUid": "string",
  "successMetric": {
    "prometheusMetric": "string",
    "type": "string"
  },
  "totalMetric": {
    "prometheusMetric": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupByLabels|[string]|false|none|none|
|sourceDatasourceUid|string|false|none|none|
|successMetric|[slo.v0_0.MetricDef](#schemaslo.v0_0.metricdef)|true|none|none|
|totalMetric|[slo.v0_0.MetricDef](#schemaslo.v0_0.metricdef)|true|none|none|

<h2 id="tocS_slo.v0_0.ReadOnly">slo.v0_0.ReadOnly</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.readonly"></a>
<a id="schema_slo.v0_0.ReadOnly"></a>
<a id="tocSslo.v0_0.readonly"></a>
<a id="tocsslo.v0_0.readonly"></a>

```json
{
  "allowedActions": [
    "string"
  ],
  "creationTimestamp": 0,
  "drillDownDashboardRef": {
    "UID": "string"
  },
  "maintenanceEvents": [
    {
      "endTimeIso8601": "string",
      "name": "string",
      "startTimeIso8601": "string"
    }
  ],
  "parsesAsRatio": true,
  "provenance": "string",
  "sourceDatasource": {
    "type": "string",
    "uid": "string"
  },
  "status": {
    "message": "string",
    "type": "created"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedActions|[string]|false|none|none|
|creationTimestamp|integer(int64)|true|none|none|
|drillDownDashboardRef|[slo.v0_0.DashboardRef](#schemaslo.v0_0.dashboardref)|false|none|none|
|maintenanceEvents|[[slo.v0_0.MaintenanceEvent](#schemaslo.v0_0.maintenanceevent)]|false|none|none|
|parsesAsRatio|boolean|false|none|none|
|provenance|string|false|none|none|
|sourceDatasource|[slo.v0_0.DestinationDatasource](#schemaslo.v0_0.destinationdatasource)|false|none|none|
|status|[slo.v0_0.Status](#schemaslo.v0_0.status)|false|none|none|

<h2 id="tocS_slo.v0_0.Slo">slo.v0_0.Slo</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.slo"></a>
<a id="schema_slo.v0_0.Slo"></a>
<a id="tocSslo.v0_0.slo"></a>
<a id="tocsslo.v0_0.slo"></a>

```json
{
  "alerting": {
    "advancedOptions": {
      "minFailures": 0
    },
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "fastBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "slowBurn": {
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "enrichments": [
        {
          "type": "string"
        }
      ],
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "description": "string",
  "destinationDatasource": {
    "type": "string",
    "uid": "string"
  },
  "folder": {
    "uid": "string"
  },
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "objectives": [
    {
      "value": 0,
      "window": "string"
    }
  ],
  "query": {
    "failureRatio": {
      "failureMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "failureThreshold": {
      "failureThresholdExpression": "string",
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      }
    },
    "freeform": {
      "query": "string",
      "sourceDatasourceUid": "string"
    },
    "grafanaQueries": {
      "grafanaQueries": [
        {
          "property1": null,
          "property2": null
        }
      ]
    },
    "ratio": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "successMetric": {
        "prometheusMetric": "string",
        "type": "string"
      },
      "totalMetric": {
        "prometheusMetric": "string",
        "type": "string"
      }
    },
    "threshold": {
      "groupByLabels": [
        "string"
      ],
      "sourceDatasourceUid": "string",
      "threshold": {
        "operator": "<",
        "value": 0
      },
      "thresholdExpression": "string"
    },
    "type": "freeform"
  },
  "readOnly": {
    "allowedActions": [
      "string"
    ],
    "creationTimestamp": 0,
    "drillDownDashboardRef": {
      "UID": "string"
    },
    "maintenanceEvents": [
      {
        "endTimeIso8601": "string",
        "name": "string",
        "startTimeIso8601": "string"
      }
    ],
    "parsesAsRatio": true,
    "provenance": "string",
    "sourceDatasource": {
      "type": "string",
      "uid": "string"
    },
    "status": {
      "message": "string",
      "type": "created"
    }
  },
  "searchExpression": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerting|[slo.v0_0.Alerting](#schemaslo.v0_0.alerting)|false|none|none|
|description|string|true|none|none|
|destinationDatasource|[slo.v0_0.DestinationDatasource](#schemaslo.v0_0.destinationdatasource)|false|none|none|
|folder|[slo.v0_0.Folder](#schemaslo.v0_0.folder)|false|none|none|
|labels|[[slo.v0_0.Label](#schemaslo.v0_0.label)]|false|none|none|
|name|string|true|none|none|
|objectives|[[slo.v0_0.Objective](#schemaslo.v0_0.objective)]|true|none|none|
|query|[slo.v0_0.Query](#schemaslo.v0_0.query)|true|none|none|
|readOnly|[slo.v0_0.ReadOnly](#schemaslo.v0_0.readonly)|false|none|none|
|searchExpression|string|false|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_slo.v0_0.Status">slo.v0_0.Status</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.status"></a>
<a id="schema_slo.v0_0.Status"></a>
<a id="tocSslo.v0_0.status"></a>
<a id="tocsslo.v0_0.status"></a>

```json
{
  "message": "string",
  "type": "created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|created|
|type|creating|
|type|deleting|
|type|error|
|type|unknown|
|type|updated|
|type|updating|

<h2 id="tocS_slo.v0_0.Threshold">slo.v0_0.Threshold</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.threshold"></a>
<a id="schema_slo.v0_0.Threshold"></a>
<a id="tocSslo.v0_0.threshold"></a>
<a id="tocsslo.v0_0.threshold"></a>

```json
{
  "operator": "<",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|value|number(double)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|<|
|operator|<=|
|operator|==|
|operator|!=|
|operator|>=|
|operator|>|

<h2 id="tocS_slo.v0_0.ThresholdQuery">slo.v0_0.ThresholdQuery</h2>
<!-- backwards compatibility -->
<a id="schemaslo.v0_0.thresholdquery"></a>
<a id="schema_slo.v0_0.ThresholdQuery"></a>
<a id="tocSslo.v0_0.thresholdquery"></a>
<a id="tocsslo.v0_0.thresholdquery"></a>

```json
{
  "groupByLabels": [
    "string"
  ],
  "sourceDatasourceUid": "string",
  "threshold": {
    "operator": "<",
    "value": 0
  },
  "thresholdExpression": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupByLabels|[string]|false|none|none|
|sourceDatasourceUid|string|false|none|none|
|threshold|[slo.v0_0.Threshold](#schemaslo.v0_0.threshold)|true|none|none|
|thresholdExpression|string|true|none|none|
