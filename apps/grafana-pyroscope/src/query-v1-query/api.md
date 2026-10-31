<h1 id="queryv1">query.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="queryv1-queryv1queryfrontendservice">query.v1.QueryFrontendService</h1>

## Query

<a id="opIdquery.v1.QueryFrontendService.Query"></a>

> Code samples

```bash
curl http://localhost:4040/query.v1.QueryFrontendService/Query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "startTime": 0,
    "endTime": 0,
    "labelSelector": "string",
    "query": [
      {
        "queryType": "QUERY_UNSPECIFIED",
        "labelNames": {},
        "labelValues": {
          "labelName": "string"
        },
        "seriesLabels": {
          "labelNames": [
            "string"
          ]
        },
        "timeSeries": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "tree": {
          "maxNodes": 0,
          "spanSelector": [
            "string"
          ],
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "fullSymbols": true,
          "traceIdSelector": [
            "string"
          ]
        },
        "pprof": {
          "maxNodes": 0,
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "spanSelector": [
            "string"
          ],
          "traceIdSelector": [
            "string"
          ]
        },
        "heatmap": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeriesCompact": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "profilePresence": {
          "profileIdSelector": [
            "string"
          ]
        },
        "timeSeriesAnalysis": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "config": {
            "baselineWindow": 0,
            "confirmationWindow": 0,
            "minimumSustainedPoints": 0,
            "minimumRelativeChange": 0,
            "scoreThreshold": 0,
            "recoveryThresholdRatio": 0,
            "flatnessThreshold": 0
          }
        }
      }
    ]
  }'
```

`POST /query.v1.QueryFrontendService/Query`

> Body parameter

```json
{
  "startTime": 0,
  "endTime": 0,
  "labelSelector": "string",
  "query": [
    {
      "queryType": "QUERY_UNSPECIFIED",
      "labelNames": {},
      "labelValues": {
        "labelName": "string"
      },
      "seriesLabels": {
        "labelNames": [
          "string"
        ]
      },
      "timeSeries": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "tree": {
        "maxNodes": 0,
        "spanSelector": [
          "string"
        ],
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "fullSymbols": true,
        "traceIdSelector": [
          "string"
        ]
      },
      "pprof": {
        "maxNodes": 0,
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "spanSelector": [
          "string"
        ],
        "traceIdSelector": [
          "string"
        ]
      },
      "heatmap": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "timeSeriesCompact": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "profilePresence": {
        "profileIdSelector": [
          "string"
        ]
      },
      "timeSeriesAnalysis": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "config": {
          "baselineWindow": 0,
          "confirmationWindow": 0,
          "minimumSustainedPoints": 0,
          "minimumRelativeChange": 0,
          "scoreThreshold": 0,
          "recoveryThresholdRatio": 0,
          "flatnessThreshold": 0
        }
      }
    }
  ]
}
```

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[query.v1.QueryRequest](#schemaquery.v1.queryrequest)|true|none|
|» startTime|body|integer \| string(int64)|false|none|
|» endTime|body|integer \| string(int64)|false|none|
|» labelSelector|body|string|false|none|
|» query|body|[[query.v1.Query](#schemaquery.v1.query)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "reports": [
    {
      "reportType": "REPORT_UNSPECIFIED",
      "labelNames": {
        "query": {},
        "labelNames": [
          "string"
        ]
      },
      "labelValues": {
        "query": {
          "labelName": "string"
        },
        "labelValues": [
          "string"
        ]
      },
      "seriesLabels": {
        "query": {
          "labelNames": [
            "string"
          ]
        },
        "seriesLabels": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ]
          }
        ]
      },
      "timeSeries": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ]
      },
      "tree": {
        "query": {
          "maxNodes": 0,
          "spanSelector": [
            "string"
          ],
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "fullSymbols": true,
          "traceIdSelector": [
            "string"
          ]
        },
        "tree": "string",
        "symbols": {
          "mappings": [
            {
              "id": 0,
              "memoryStart": 0,
              "memoryLimit": 0,
              "fileOffset": 0,
              "filename": 0,
              "buildId": 0,
              "hasFunctions": true,
              "hasFilenames": true,
              "hasLineNumbers": true,
              "hasInlineFrames": true
            }
          ],
          "locations": [
            {
              "id": 0,
              "mappingId": 0,
              "address": 0,
              "line": [
                {
                  "functionId": 0,
                  "line": 0
                }
              ],
              "isFolded": true
            }
          ],
          "functions": [
            {
              "id": 0,
              "name": 0,
              "systemName": 0,
              "filename": 0,
              "startLine": 0
            }
          ],
          "strings": [
            "string"
          ],
          "mappingHashes": [
            0
          ],
          "locationHashes": [
            0
          ],
          "functionHashes": [
            0
          ],
          "stringHashes": [
            0
          ]
        }
      },
      "pprof": {
        "query": {
          "maxNodes": 0,
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "spanSelector": [
            "string"
          ],
          "traceIdSelector": [
            "string"
          ]
        },
        "pprof": "string"
      },
      "heatmap": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "heatmapSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "timestamp": 0,
                "profileId": 0,
                "spanId": 0,
                "value": 0,
                "attributeRefs": [
                  0
                ],
                "traceId": "string"
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "timeSeriesCompact": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotationRefs": [
                  0
                ],
                "exemplars": [
                  {
                    "timestamp": 0,
                    "profileId": "string",
                    "spanId": "string",
                    "value": 0,
                    "attributeRefs": [
                      0
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "profilePresence": {
        "query": {
          "profileIdSelector": [
            "string"
          ]
        },
        "profiles": [
          {
            "profileId": "string",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestamp": 0
          }
        ]
      },
      "timeSeriesAnalysis": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "config": {
            "baselineWindow": 0,
            "confirmationWindow": 0,
            "minimumSustainedPoints": 0,
            "minimumRelativeChange": 0,
            "scoreThreshold": 0,
            "recoveryThresholdRatio": 0,
            "flatnessThreshold": 0
          }
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ],
        "events": [
          {
            "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestampStart": 0,
            "timestampEnd": 0,
            "timestampPeak": 0,
            "baseline": 0,
            "peakValue": 0,
            "relativeChange": 0,
            "score": 0,
            "priorityScore": 0
          }
        ]
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[query.v1.QueryResponse](#schemaquery.v1.queryresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="queryv1-queryv1querybackendservice">query.v1.QueryBackendService</h1>

## Invoke

<a id="opIdquery.v1.QueryBackendService.Invoke"></a>

> Code samples

```bash
curl http://localhost:4040/query.v1.QueryBackendService/Invoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "tenant": [
      "string"
    ],
    "startTime": 0,
    "endTime": 0,
    "labelSelector": "string",
    "query": [
      {
        "queryType": "QUERY_UNSPECIFIED",
        "labelNames": {},
        "labelValues": {
          "labelName": "string"
        },
        "seriesLabels": {
          "labelNames": [
            "string"
          ]
        },
        "timeSeries": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "tree": {
          "maxNodes": 0,
          "spanSelector": [
            "string"
          ],
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "fullSymbols": true,
          "traceIdSelector": [
            "string"
          ]
        },
        "pprof": {
          "maxNodes": 0,
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "spanSelector": [
            "string"
          ],
          "traceIdSelector": [
            "string"
          ]
        },
        "heatmap": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeriesCompact": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "profilePresence": {
          "profileIdSelector": [
            "string"
          ]
        },
        "timeSeriesAnalysis": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "config": {
            "baselineWindow": 0,
            "confirmationWindow": 0,
            "minimumSustainedPoints": 0,
            "minimumRelativeChange": 0,
            "scoreThreshold": 0,
            "recoveryThresholdRatio": 0,
            "flatnessThreshold": 0
          }
        }
      }
    ],
    "queryPlan": {
      "root": {
        "type": "UNKNOWN",
        "children": [
          {}
        ],
        "blocks": [
          {
            "formatVersion": 0,
            "id": "string",
            "tenant": 0,
            "shard": 0,
            "compactionLevel": 0,
            "minTime": 0,
            "maxTime": 0,
            "createdBy": 0,
            "metadataOffset": 0,
            "size": 0,
            "datasets": [
              {
                "format": 0,
                "tenant": 0,
                "name": 0,
                "minTime": 0,
                "maxTime": 0,
                "tableOfContents": [
                  0
                ],
                "size": 0,
                "labels": [
                  0
                ]
              }
            ],
            "stringTable": [
              "string"
            ]
          }
        ]
      }
    },
    "options": {
      "sanitizeOnMerge": true,
      "collectDiagnostics": true,
      "finalize": true
    }
  }'
```

`POST /query.v1.QueryBackendService/Invoke`

> Body parameter

```json
{
  "tenant": [
    "string"
  ],
  "startTime": 0,
  "endTime": 0,
  "labelSelector": "string",
  "query": [
    {
      "queryType": "QUERY_UNSPECIFIED",
      "labelNames": {},
      "labelValues": {
        "labelName": "string"
      },
      "seriesLabels": {
        "labelNames": [
          "string"
        ]
      },
      "timeSeries": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "tree": {
        "maxNodes": 0,
        "spanSelector": [
          "string"
        ],
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "fullSymbols": true,
        "traceIdSelector": [
          "string"
        ]
      },
      "pprof": {
        "maxNodes": 0,
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "spanSelector": [
          "string"
        ],
        "traceIdSelector": [
          "string"
        ]
      },
      "heatmap": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "timeSeriesCompact": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "profilePresence": {
        "profileIdSelector": [
          "string"
        ]
      },
      "timeSeriesAnalysis": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "config": {
          "baselineWindow": 0,
          "confirmationWindow": 0,
          "minimumSustainedPoints": 0,
          "minimumRelativeChange": 0,
          "scoreThreshold": 0,
          "recoveryThresholdRatio": 0,
          "flatnessThreshold": 0
        }
      }
    }
  ],
  "queryPlan": {
    "root": {
      "type": "UNKNOWN",
      "children": [
        {}
      ],
      "blocks": [
        {
          "formatVersion": 0,
          "id": "string",
          "tenant": 0,
          "shard": 0,
          "compactionLevel": 0,
          "minTime": 0,
          "maxTime": 0,
          "createdBy": 0,
          "metadataOffset": 0,
          "size": 0,
          "datasets": [
            {
              "format": 0,
              "tenant": 0,
              "name": 0,
              "minTime": 0,
              "maxTime": 0,
              "tableOfContents": [
                0
              ],
              "size": 0,
              "labels": [
                0
              ]
            }
          ],
          "stringTable": [
            "string"
          ]
        }
      ]
    }
  },
  "options": {
    "sanitizeOnMerge": true,
    "collectDiagnostics": true,
    "finalize": true
  }
}
```

<h3 id="invoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[query.v1.InvokeRequest](#schemaquery.v1.invokerequest)|true|none|
|» tenant|body|[string]|false|none|
|» startTime|body|integer \| string(int64)|false|none|
|» endTime|body|integer \| string(int64)|false|none|
|» labelSelector|body|string|false|none|
|» query|body|[[query.v1.Query](#schemaquery.v1.query)]|false|none|
|» queryPlan|body|[query.v1.QueryPlan](#schemaquery.v1.queryplan)|false|A query plan is represented by a directed acyclic graph (DAG),<br> where each node is either a "merge" node or a "read" node.<br><br> Merge nodes reference other nodes in the plan as their "children".<br> Read nodes reference the blocks which contain the actual data to be processed.|
|» options|body|[query.v1.InvokeOptions](#schemaquery.v1.invokeoptions)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "reports": [
    {
      "reportType": "REPORT_UNSPECIFIED",
      "labelNames": {
        "query": {},
        "labelNames": [
          "string"
        ]
      },
      "labelValues": {
        "query": {
          "labelName": "string"
        },
        "labelValues": [
          "string"
        ]
      },
      "seriesLabels": {
        "query": {
          "labelNames": [
            "string"
          ]
        },
        "seriesLabels": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ]
          }
        ]
      },
      "timeSeries": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ]
      },
      "tree": {
        "query": {
          "maxNodes": 0,
          "spanSelector": [
            "string"
          ],
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "fullSymbols": true,
          "traceIdSelector": [
            "string"
          ]
        },
        "tree": "string",
        "symbols": {
          "mappings": [
            {
              "id": 0,
              "memoryStart": 0,
              "memoryLimit": 0,
              "fileOffset": 0,
              "filename": 0,
              "buildId": 0,
              "hasFunctions": true,
              "hasFilenames": true,
              "hasLineNumbers": true,
              "hasInlineFrames": true
            }
          ],
          "locations": [
            {
              "id": 0,
              "mappingId": 0,
              "address": 0,
              "line": [
                {
                  "functionId": 0,
                  "line": 0
                }
              ],
              "isFolded": true
            }
          ],
          "functions": [
            {
              "id": 0,
              "name": 0,
              "systemName": 0,
              "filename": 0,
              "startLine": 0
            }
          ],
          "strings": [
            "string"
          ],
          "mappingHashes": [
            0
          ],
          "locationHashes": [
            0
          ],
          "functionHashes": [
            0
          ],
          "stringHashes": [
            0
          ]
        }
      },
      "pprof": {
        "query": {
          "maxNodes": 0,
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "spanSelector": [
            "string"
          ],
          "traceIdSelector": [
            "string"
          ]
        },
        "pprof": "string"
      },
      "heatmap": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "heatmapSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "timestamp": 0,
                "profileId": 0,
                "spanId": 0,
                "value": 0,
                "attributeRefs": [
                  0
                ],
                "traceId": "string"
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "timeSeriesCompact": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotationRefs": [
                  0
                ],
                "exemplars": [
                  {
                    "timestamp": 0,
                    "profileId": "string",
                    "spanId": "string",
                    "value": 0,
                    "attributeRefs": [
                      0
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "profilePresence": {
        "query": {
          "profileIdSelector": [
            "string"
          ]
        },
        "profiles": [
          {
            "profileId": "string",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestamp": 0
          }
        ]
      },
      "timeSeriesAnalysis": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "config": {
            "baselineWindow": 0,
            "confirmationWindow": 0,
            "minimumSustainedPoints": 0,
            "minimumRelativeChange": 0,
            "scoreThreshold": 0,
            "recoveryThresholdRatio": 0,
            "flatnessThreshold": 0
          }
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ],
        "events": [
          {
            "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestampStart": 0,
            "timestampEnd": 0,
            "timestampPeak": 0,
            "baseline": 0,
            "peakValue": 0,
            "relativeChange": 0,
            "score": 0,
            "priorityScore": 0
          }
        ]
      }
    }
  ],
  "diagnostics": {
    "queryPlan": {
      "root": {
        "type": "UNKNOWN",
        "children": [
          {}
        ],
        "blocks": [
          {
            "formatVersion": 0,
            "id": "string",
            "tenant": 0,
            "shard": 0,
            "compactionLevel": 0,
            "minTime": 0,
            "maxTime": 0,
            "createdBy": 0,
            "metadataOffset": 0,
            "size": 0,
            "datasets": [
              {
                "format": 0,
                "tenant": 0,
                "name": 0,
                "minTime": 0,
                "maxTime": 0,
                "tableOfContents": [
                  0
                ],
                "size": 0,
                "labels": [
                  0
                ]
              }
            ],
            "stringTable": [
              "string"
            ]
          }
        ]
      }
    },
    "executionNode": {
      "type": "UNKNOWN",
      "executor": "string",
      "startTimeNs": 0,
      "endTimeNs": 0,
      "children": [
        {}
      ],
      "stats": {
        "blocksRead": 0,
        "datasetsProcessed": 0,
        "blockExecutions": [
          {
            "blockId": "string",
            "startTimeNs": 0,
            "endTimeNs": 0,
            "datasetsProcessed": 0,
            "size": 0,
            "shard": 0,
            "compactionLevel": 0
          }
        ],
        "bytesFetched": 0,
        "processingDurationNs": 0,
        "backoffDurationNs": 0,
        "unaccountedDurationNs": 0
      },
      "error": "string"
    }
  }
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="invoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[query.v1.InvokeResponse](#schemaquery.v1.invokeresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_connect-protocol-version">connect-protocol-version</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-protocol-version"></a>
<a id="schema_connect-protocol-version"></a>
<a id="tocSconnect-protocol-version"></a>
<a id="tocsconnect-protocol-version"></a>

```json
1
```

Define the version of the Connect protocol

<h2 id="tocS_connect-timeout-header">connect-timeout-header</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-timeout-header"></a>
<a id="schema_connect-timeout-header"></a>
<a id="tocSconnect-timeout-header"></a>
<a id="tocsconnect-timeout-header"></a>

```json
0
```

Define the timeout, in ms

<h2 id="tocS_connect.error">connect.error</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error"></a>
<a id="schema_connect.error"></a>
<a id="tocSconnect.error"></a>
<a id="tocsconnect.error"></a>

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|
|details|[[connect.error_details.Any](#schemaconnect.error_details.any)]|false|none|A list of messages that carry the error details. There is no limit on the number of messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|canceled|
|code|unknown|
|code|invalid_argument|
|code|deadline_exceeded|
|code|not_found|
|code|already_exists|
|code|permission_denied|
|code|resource_exhausted|
|code|failed_precondition|
|code|aborted|
|code|out_of_range|
|code|unimplemented|
|code|internal|
|code|unavailable|
|code|data_loss|
|code|unauthenticated|

<h2 id="tocS_connect.error_details.Any">connect.error_details.Any</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error_details.any"></a>
<a id="schema_connect.error_details.Any"></a>
<a id="tocSconnect.error_details.any"></a>
<a id="tocsconnect.error_details.any"></a>

```json
{
  "type": "string",
  "value": "string",
  "debug": {}
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.|
|value|string(binary)|false|none|The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.|
|debug|object|false|none|Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.|

<h2 id="tocS_google.v1.Function">google.v1.Function</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.function"></a>
<a id="schema_google.v1.Function"></a>
<a id="tocSgoogle.v1.function"></a>
<a id="tocsgoogle.v1.function"></a>

```json
{
  "id": 0,
  "name": 0,
  "systemName": 0,
  "filename": 0,
  "startLine": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| string(int64)|false|none|Unique nonzero id for the function.|
|name|integer \| string(int64)|false|none|Name of the function, in human-readable form if available. Index into string table|
|systemName|integer \| string(int64)|false|none|Name of the function, as identified by the system.<br> For instance, it can be a C++ mangled name. Index into string table|
|filename|integer \| string(int64)|false|none|Source file containing the function. Index into string table|
|startLine|integer \| string(int64)|false|none|Line number in source file.|

<h2 id="tocS_google.v1.Line">google.v1.Line</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.line"></a>
<a id="schema_google.v1.Line"></a>
<a id="tocSgoogle.v1.line"></a>
<a id="tocsgoogle.v1.line"></a>

```json
{
  "functionId": 0,
  "line": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionId|integer \| string(int64)|false|none|The id of the corresponding profile.Function for this line.|
|line|integer \| string(int64)|false|none|Line number in source code.|

<h2 id="tocS_google.v1.Location">google.v1.Location</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.location"></a>
<a id="schema_google.v1.Location"></a>
<a id="tocSgoogle.v1.location"></a>
<a id="tocsgoogle.v1.location"></a>

```json
{
  "id": 0,
  "mappingId": 0,
  "address": 0,
  "line": [
    {
      "functionId": 0,
      "line": 0
    }
  ],
  "isFolded": true
}
```

Describes function and line table debug information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| string(int64)|false|none|Unique nonzero id for the location.  A profile could use<br> instruction addresses or any integer sequence as ids.|
|mappingId|integer \| string(int64)|false|none|The id of the corresponding profile.Mapping for this location.<br> It can be unset if the mapping is unknown or not applicable for<br> this profile type.|
|address|integer \| string(int64)|false|none|The instruction address for this location, if available.  It<br> should be within [Mapping.memory_start...Mapping.memory_limit]<br> for the corresponding mapping. A non-leaf address may be in the<br> middle of a call instruction. It is up to display tools to find<br> the beginning of the instruction if necessary.|
|line|[[google.v1.Line](#schemagoogle.v1.line)]|false|none|Multiple line indicates this location has inlined functions,<br> where the last entry represents the caller into which the<br> preceding entries were inlined.<br><br> E.g., if memcpy() is inlined into printf:<br>    line[0].function_name == "memcpy"<br>    line[1].function_name == "printf"|
|isFolded|boolean|false|none|Provides an indication that multiple symbols map to this location's<br> address, for example due to identical code folding by the linker. In that<br> case the line information above represents one of the multiple<br> symbols. This field must be recomputed when the symbolization state of the<br> profile changes.|

<h2 id="tocS_google.v1.Mapping">google.v1.Mapping</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.mapping"></a>
<a id="schema_google.v1.Mapping"></a>
<a id="tocSgoogle.v1.mapping"></a>
<a id="tocsgoogle.v1.mapping"></a>

```json
{
  "id": 0,
  "memoryStart": 0,
  "memoryLimit": 0,
  "fileOffset": 0,
  "filename": 0,
  "buildId": 0,
  "hasFunctions": true,
  "hasFilenames": true,
  "hasLineNumbers": true,
  "hasInlineFrames": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| string(int64)|false|none|Unique nonzero id for the mapping.|
|memoryStart|integer \| string(int64)|false|none|Address at which the binary (or DLL) is loaded into memory.|
|memoryLimit|integer \| string(int64)|false|none|The limit of the address range occupied by this mapping.|
|fileOffset|integer \| string(int64)|false|none|Offset in the binary that corresponds to the first mapped address.|
|filename|integer \| string(int64)|false|none|The object this entry is loaded from.  This can be a filename on<br> disk for the main binary and shared libraries, or virtual<br> abstractions like "[vdso]". Index into string table|
|buildId|integer \| string(int64)|false|none|A string that uniquely identifies a particular program version<br> with high probability. E.g., for binaries generated by GNU tools,<br> it could be the contents of the .note.gnu.build-id field. Index into string table|
|hasFunctions|boolean|false|none|The following fields indicate the resolution of symbolic info.|
|hasFilenames|boolean|false|none|none|
|hasLineNumbers|boolean|false|none|none|
|hasInlineFrames|boolean|false|none|none|

<h2 id="tocS_metastore.v1.BlockMeta">metastore.v1.BlockMeta</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.blockmeta"></a>
<a id="schema_metastore.v1.BlockMeta"></a>
<a id="tocSmetastore.v1.blockmeta"></a>
<a id="tocsmetastore.v1.blockmeta"></a>

```json
{
  "formatVersion": 0,
  "id": "string",
  "tenant": 0,
  "shard": 0,
  "compactionLevel": 0,
  "minTime": 0,
  "maxTime": 0,
  "createdBy": 0,
  "metadataOffset": 0,
  "size": 0,
  "datasets": [
    {
      "format": 0,
      "tenant": 0,
      "name": 0,
      "minTime": 0,
      "maxTime": 0,
      "tableOfContents": [
        0
      ],
      "size": 0,
      "labels": [
        0
      ]
    }
  ],
  "stringTable": [
    "string"
  ]
}
```

BlockMeta is a metadata entry that describes the block's contents. A block
 is a collection of datasets that share certain properties, such as shard ID,
 compaction level, tenant ID, time range, creation time, and more.

 The block content's format denotes the binary format of the datasets and the
 metadata entry (to address logical dependencies). Each dataset has its own
 table of contents that lists the sections within the dataset. Each dataset
 has its own set of attributes (labels) that describe its specific contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatVersion|integer|false|none|none|
|id|string|false|none|Block ID is a unique identifier for the block.<br> This is the only field that is not included into<br> the string table.|
|tenant|integer(int32)|false|none|If empty, datasets belong to distinct tenants.|
|shard|integer|false|none|none|
|compactionLevel|integer|false|none|none|
|minTime|integer \| string(int64)|false|none|none|
|maxTime|integer \| string(int64)|false|none|none|
|createdBy|integer(int32)|false|none|none|
|metadataOffset|integer \| string(int64)|false|none|none|
|size|integer \| string(int64)|false|none|none|
|datasets|[[metastore.v1.Dataset](#schemametastore.v1.dataset)]|false|none|none|
|stringTable|[string]|false|none|String table contains strings of the block.<br> By convention, the first string is always an empty string.|

<h2 id="tocS_metastore.v1.Dataset">metastore.v1.Dataset</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.dataset"></a>
<a id="schema_metastore.v1.Dataset"></a>
<a id="tocSmetastore.v1.dataset"></a>
<a id="tocsmetastore.v1.dataset"></a>

```json
{
  "format": 0,
  "tenant": 0,
  "name": 0,
  "minTime": 0,
  "maxTime": 0,
  "tableOfContents": [
    0
  ],
  "size": 0,
  "labels": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|integer|false|none|none|
|tenant|integer(int32)|false|none|none|
|name|integer(int32)|false|none|none|
|minTime|integer \| string(int64)|false|none|none|
|maxTime|integer \| string(int64)|false|none|none|
|tableOfContents|[integer \| string(int64)]|false|none|Table of contents lists data sections within the tenant<br> service region. The offsets are absolute.<br><br> The interpretation of the table of contents is specific<br> to the format.<br><br> By default (format 0), the sections are:<br>  - 0: profiles.parquet<br>  - 1: index.tsdb<br>  - 2: symbols.symdb<br><br> Format 1 corresponds to the tenant-wide index:<br>  - 0: index.tsdb (dataset index)|
|size|integer \| string(int64)|false|none|Size of the dataset in bytes.|
|labels|[integer(int32)]|false|none|Length prefixed label key-value pairs.<br><br> Multiple label sets can be associated with a dataset to denote relationships<br> across multiple dimensions. For example, each dataset currently stores data<br> for multiple profile types:<br>   - service_name=A, profile_type=cpu<br>   - service_name=A, profile_type=memory<br><br> Labels are primarily used to filter datasets based on their attributes.<br> For instance, labels can be used to select datasets containing a specific<br> service.<br><br> The set of attributes is extensible and can grow over time. For example, a<br> namespace attribute could be added to datasets:<br>   - service_name=A, profile_type=cpu<br>   - service_name=A, profile_type=memory<br>   - service_name=B, namespace=N, profile_type=cpu<br>   - service_name=B, namespace=N, profile_type=memory<br>   - service_name=C, namespace=N, profile_type=cpu<br>   - service_name=C, namespace=N, profile_type=memory<br><br> This organization enables querying datasets by namespace without accessing<br> the block contents, which significantly improves performance.<br><br> Metadata labels are not required to be included in the block's TSDB index<br> and may be orthogonal to the data dimensions. Generally, attributes serve<br> two primary purposes:<br>   - To create data scopes that span multiple service, reducing the need to<br>     scan the entire set of block satisfying the query expression, i.e.,<br>     the time range and tenant ID.<br>   - To provide additional information about datasets without altering the<br>     storage schema or access methods.<br><br> For example, this approach can support cost attribution or similar breakdown<br> analyses. It can also handle data dependencies (e.g., links to external data)<br> using labels.<br><br> The cardinality of the labels is expected to remain relatively low (fewer<br> than a million unique combinations globally). However, this depends on the<br> metadata storage system.<br><br> Metadata labels are represented as a slice of `int32` values that refer to<br> strings in the metadata entry's string table. The slice is a sequence of<br> length-prefixed key-value (KV) pairs:<br><br> len(2) \| k1 \| v1 \| k2 \| v2 \| len(3) \| k1 \| v3 \| k2 \| v4 \| k3 \| v5<br><br> The order of KV pairs is not defined. The format is optimized for indexing<br> rather than querying, and it is not intended to be the most space-efficient<br> representation. Since entries are supposed to be indexed, the redundancy of<br> denormalized relationships is not a concern.|

<h2 id="tocS_querier.v1.HeatmapQueryType">querier.v1.HeatmapQueryType</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.heatmapquerytype"></a>
<a id="schema_querier.v1.HeatmapQueryType"></a>
<a id="tocSquerier.v1.heatmapquerytype"></a>
<a id="tocsquerier.v1.heatmapquerytype"></a>

```json
"HEATMAP_QUERY_TYPE_UNSPECIFIED"
```

<h2 id="tocS_querier.v1.TimeSeriesAnomaly">querier.v1.TimeSeriesAnomaly</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.timeseriesanomaly"></a>
<a id="schema_querier.v1.TimeSeriesAnomaly"></a>
<a id="tocSquerier.v1.timeseriesanomaly"></a>
<a id="tocsquerier.v1.timeseriesanomaly"></a>

```json
{
  "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "timestampStart": 0,
  "timestampEnd": 0,
  "timestampPeak": 0,
  "baseline": 0,
  "peakValue": 0,
  "relativeChange": 0,
  "score": 0,
  "priorityScore": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[querier.v1.TimeSeriesAnomalyType](#schemaquerier.v1.timeseriesanomalytype)|false|none|none|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|none|
|timestampStart|integer \| string(int64)|false|none|Milliseconds since epoch.|
|timestampEnd|integer \| string(int64)|false|none|Milliseconds since epoch.|
|timestampPeak|integer \| string(int64)|false|none|Milliseconds since epoch.|
|baseline|number(double)|false|none|none|
|peakValue|number(double)|false|none|none|
|relativeChange|number(double)|false|none|none|
|score|number(double)|false|none|Statistical anomaly score relative to pre-event baseline variability.|
|priorityScore|number(double)|false|none|Statistical score weighted by resource usage relative to the largest input<br> series (including series without anomalies). Used to rank series for limits.<br> Usage is the sum of non-negative finite buckets across the selected window.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED|
|type|TIME_SERIES_ANOMALY_TYPE_SPIKE|
|type|TIME_SERIES_ANOMALY_TYPE_DROP|
|type|TIME_SERIES_ANOMALY_TYPE_INCREASE|
|type|TIME_SERIES_ANOMALY_TYPE_DECREASE|

<h2 id="tocS_querier.v1.TimeSeriesAnomalyType">querier.v1.TimeSeriesAnomalyType</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.timeseriesanomalytype"></a>
<a id="schema_querier.v1.TimeSeriesAnomalyType"></a>
<a id="tocSquerier.v1.timeseriesanomalytype"></a>
<a id="tocsquerier.v1.timeseriesanomalytype"></a>

```json
"TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED"
```

<h2 id="tocS_query.v1.AttributeTable">query.v1.AttributeTable</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.attributetable"></a>
<a id="schema_query.v1.AttributeTable"></a>
<a id="tocSquery.v1.attributetable"></a>
<a id="tocsquery.v1.attributetable"></a>

```json
{
  "keys": [
    "string"
  ],
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[string]|false|none|none|
|values|[string]|false|none|none|

<h2 id="tocS_query.v1.BlockExecution">query.v1.BlockExecution</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.blockexecution"></a>
<a id="schema_query.v1.BlockExecution"></a>
<a id="tocSquery.v1.blockexecution"></a>
<a id="tocsquery.v1.blockexecution"></a>

```json
{
  "blockId": "string",
  "startTimeNs": 0,
  "endTimeNs": 0,
  "datasetsProcessed": 0,
  "size": 0,
  "shard": 0,
  "compactionLevel": 0
}
```

BlockExecution captures execution details for a single block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockId|string|false|none|none|
|startTimeNs|integer \| string(int64)|false|none|none|
|endTimeNs|integer \| string(int64)|false|none|none|
|datasetsProcessed|integer \| string(int64)|false|none|none|
|size|integer \| string(int64)|false|none|none|
|shard|integer|false|none|none|
|compactionLevel|integer|false|none|none|

<h2 id="tocS_query.v1.Diagnostics">query.v1.Diagnostics</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.diagnostics"></a>
<a id="schema_query.v1.Diagnostics"></a>
<a id="tocSquery.v1.diagnostics"></a>
<a id="tocsquery.v1.diagnostics"></a>

```json
{
  "queryPlan": {
    "root": {
      "type": "UNKNOWN",
      "children": [
        {}
      ],
      "blocks": [
        {
          "formatVersion": 0,
          "id": "string",
          "tenant": 0,
          "shard": 0,
          "compactionLevel": 0,
          "minTime": 0,
          "maxTime": 0,
          "createdBy": 0,
          "metadataOffset": 0,
          "size": 0,
          "datasets": [
            {
              "format": 0,
              "tenant": 0,
              "name": 0,
              "minTime": 0,
              "maxTime": 0,
              "tableOfContents": [
                0
              ],
              "size": 0,
              "labels": [
                0
              ]
            }
          ],
          "stringTable": [
            "string"
          ]
        }
      ]
    }
  },
  "executionNode": {
    "type": "UNKNOWN",
    "executor": "string",
    "startTimeNs": 0,
    "endTimeNs": 0,
    "children": [
      {}
    ],
    "stats": {
      "blocksRead": 0,
      "datasetsProcessed": 0,
      "blockExecutions": [
        {
          "blockId": "string",
          "startTimeNs": 0,
          "endTimeNs": 0,
          "datasetsProcessed": 0,
          "size": 0,
          "shard": 0,
          "compactionLevel": 0
        }
      ],
      "bytesFetched": 0,
      "processingDurationNs": 0,
      "backoffDurationNs": 0,
      "unaccountedDurationNs": 0
    },
    "error": "string"
  }
}
```

Diagnostic messages, events, statistics, analytics, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryPlan|[query.v1.QueryPlan](#schemaquery.v1.queryplan)|false|none|A query plan is represented by a directed acyclic graph (DAG),<br> where each node is either a "merge" node or a "read" node.<br><br> Merge nodes reference other nodes in the plan as their "children".<br> Read nodes reference the blocks which contain the actual data to be processed.|
|executionNode|[query.v1.ExecutionNode](#schemaquery.v1.executionnode)|false|none|ExecutionNode captures how a query plan node was actually executed.|

<h2 id="tocS_query.v1.ExecutionNode">query.v1.ExecutionNode</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.executionnode"></a>
<a id="schema_query.v1.ExecutionNode"></a>
<a id="tocSquery.v1.executionnode"></a>
<a id="tocsquery.v1.executionnode"></a>

```json
{
  "type": "UNKNOWN",
  "executor": "string",
  "startTimeNs": 0,
  "endTimeNs": 0,
  "children": [
    {
      "type": "UNKNOWN",
      "executor": "string",
      "startTimeNs": 0,
      "endTimeNs": 0,
      "children": [
        {}
      ],
      "stats": {
        "blocksRead": 0,
        "datasetsProcessed": 0,
        "blockExecutions": [
          {
            "blockId": "string",
            "startTimeNs": 0,
            "endTimeNs": 0,
            "datasetsProcessed": 0,
            "size": 0,
            "shard": 0,
            "compactionLevel": 0
          }
        ],
        "bytesFetched": 0,
        "processingDurationNs": 0,
        "backoffDurationNs": 0,
        "unaccountedDurationNs": 0
      },
      "error": "string"
    }
  ],
  "stats": {
    "blocksRead": 0,
    "datasetsProcessed": 0,
    "blockExecutions": [
      {
        "blockId": "string",
        "startTimeNs": 0,
        "endTimeNs": 0,
        "datasetsProcessed": 0,
        "size": 0,
        "shard": 0,
        "compactionLevel": 0
      }
    ],
    "bytesFetched": 0,
    "processingDurationNs": 0,
    "backoffDurationNs": 0,
    "unaccountedDurationNs": 0
  },
  "error": "string"
}
```

ExecutionNode captures how a query plan node was actually executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[query.v1.QueryNode.Type](#schemaquery.v1.querynode.type)|false|none|none|
|executor|string|false|none|none|
|startTimeNs|integer \| string(int64)|false|none|none|
|endTimeNs|integer \| string(int64)|false|none|none|
|children|[[query.v1.ExecutionNode](#schemaquery.v1.executionnode)]|false|none|none|
|stats|[query.v1.ExecutionStats](#schemaquery.v1.executionstats)|false|none|ExecutionStats captures statistics for READ and MERGE node execution.|
|error|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|MERGE|
|type|READ|

<h2 id="tocS_query.v1.ExecutionStats">query.v1.ExecutionStats</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.executionstats"></a>
<a id="schema_query.v1.ExecutionStats"></a>
<a id="tocSquery.v1.executionstats"></a>
<a id="tocsquery.v1.executionstats"></a>

```json
{
  "blocksRead": 0,
  "datasetsProcessed": 0,
  "blockExecutions": [
    {
      "blockId": "string",
      "startTimeNs": 0,
      "endTimeNs": 0,
      "datasetsProcessed": 0,
      "size": 0,
      "shard": 0,
      "compactionLevel": 0
    }
  ],
  "bytesFetched": 0,
  "processingDurationNs": 0,
  "backoffDurationNs": 0,
  "unaccountedDurationNs": 0
}
```

ExecutionStats captures statistics for READ and MERGE node execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocksRead|integer \| string(int64)|false|none|none|
|datasetsProcessed|integer \| string(int64)|false|none|none|
|blockExecutions|[[query.v1.BlockExecution](#schemaquery.v1.blockexecution)]|false|none|none|
|bytesFetched|integer \| string(int64)|false|none|bytes_fetched is the total number of bytes requested from object storage<br> during this invocation. It counts only the bytes from this single,<br> successful Invoke call: retried or hedged calls that did not produce a<br> response are not included, so the value is deterministic across retries.|
|processingDurationNs|integer \| string(int64)|false|none|processing_duration_ns is the critical-path time (in nanoseconds) spent<br> executing successful invocations on query-backend nodes, including local<br> aggregation but excluding client-side retry backoff and unaccounted time.|
|backoffDurationNs|integer \| string(int64)|false|none|backoff_duration_ns is the critical-path time (in nanoseconds) spent waiting<br> between query-backend RPC attempts (e.g. concurrency-limiter retry backoff).|
|unaccountedDurationNs|integer \| string(int64)|false|none|unaccounted_duration_ns is the remaining critical-path client-observed time<br> not classified as processing or backoff. It includes transport, connection<br> waits, and failed attempts whose backend timings were not returned.|

<h2 id="tocS_query.v1.Exemplar">query.v1.Exemplar</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.exemplar"></a>
<a id="schema_query.v1.Exemplar"></a>
<a id="tocSquery.v1.exemplar"></a>
<a id="tocsquery.v1.exemplar"></a>

```json
{
  "timestamp": 0,
  "profileId": "string",
  "spanId": "string",
  "value": 0,
  "attributeRefs": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer \| string(int64)|false|none|Milliseconds unix timestamp|
|profileId|string|false|none|none|
|spanId|string|false|none|none|
|value|integer \| string(int64)|false|none|none|
|attributeRefs|[integer \| string(int64)]|false|none|none|

<h2 id="tocS_query.v1.HeatmapPoint">query.v1.HeatmapPoint</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.heatmappoint"></a>
<a id="schema_query.v1.HeatmapPoint"></a>
<a id="tocSquery.v1.heatmappoint"></a>
<a id="tocsquery.v1.heatmappoint"></a>

```json
{
  "timestamp": 0,
  "profileId": 0,
  "spanId": 0,
  "value": 0,
  "attributeRefs": [
    0
  ],
  "traceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer \| string(int64)|false|none|Milliseconds since epoch when the profile was captured.|
|profileId|integer \| string(int64)|false|none|Unique identifier for the profile (UUID), reference into AttributeTable with only value set|
|spanId|integer \| string(int64)|false|none|Span ID if this profile was split by span during ingestion|
|value|integer \| string(int64)|false|none|Total sample value for this profile (e.g., CPU nanoseconds, bytes allocated).|
|attributeRefs|[integer \| string(int64)]|false|none|labels as references into AttributeTable|
|traceId|string(byte)|false|none|Trace ID associated with the span, if present.|

<h2 id="tocS_query.v1.HeatmapQuery">query.v1.HeatmapQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.heatmapquery"></a>
<a id="schema_query.v1.HeatmapQuery"></a>
<a id="tocSquery.v1.heatmapquery"></a>
<a id="tocsquery.v1.heatmapquery"></a>

```json
{
  "step": 0,
  "groupBy": [
    "string"
  ],
  "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
  "limit": 0,
  "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|step|number(double)|false|none|none|
|groupBy|[string]|false|none|none|
|queryType|[querier.v1.HeatmapQueryType](#schemaquerier.v1.heatmapquerytype)|false|none|none|
|limit|integer \| string(int64)|false|none|none|
|exemplarType|[types.v1.ExemplarType](#schematypes.v1.exemplartype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|queryType|HEATMAP_QUERY_TYPE_UNSPECIFIED|
|queryType|HEATMAP_QUERY_TYPE_INDIVIDUAL|
|queryType|HEATMAP_QUERY_TYPE_SPAN|
|exemplarType|EXEMPLAR_TYPE_UNSPECIFIED|
|exemplarType|EXEMPLAR_TYPE_NONE|
|exemplarType|EXEMPLAR_TYPE_INDIVIDUAL|
|exemplarType|EXEMPLAR_TYPE_SPAN|

<h2 id="tocS_query.v1.HeatmapReport">query.v1.HeatmapReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.heatmapreport"></a>
<a id="schema_query.v1.HeatmapReport"></a>
<a id="tocSquery.v1.heatmapreport"></a>
<a id="tocsquery.v1.heatmapreport"></a>

```json
{
  "query": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  },
  "heatmapSeries": [
    {
      "attributeRefs": [
        0
      ],
      "points": [
        {
          "timestamp": 0,
          "profileId": 0,
          "spanId": 0,
          "value": 0,
          "attributeRefs": [
            0
          ],
          "traceId": "string"
        }
      ]
    }
  ],
  "attributeTable": {
    "keys": [
      "string"
    ],
    "values": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.HeatmapQuery](#schemaquery.v1.heatmapquery)|false|none|none|
|heatmapSeries|[[query.v1.HeatmapSeries](#schemaquery.v1.heatmapseries)]|false|none|none|
|attributeTable|[query.v1.AttributeTable](#schemaquery.v1.attributetable)|false|none|none|

<h2 id="tocS_query.v1.HeatmapSeries">query.v1.HeatmapSeries</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.heatmapseries"></a>
<a id="schema_query.v1.HeatmapSeries"></a>
<a id="tocSquery.v1.heatmapseries"></a>
<a id="tocsquery.v1.heatmapseries"></a>

```json
{
  "attributeRefs": [
    0
  ],
  "points": [
    {
      "timestamp": 0,
      "profileId": 0,
      "spanId": 0,
      "value": 0,
      "attributeRefs": [
        0
      ],
      "traceId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeRefs|[integer \| string(int64)]|false|none|none|
|points|[[query.v1.HeatmapPoint](#schemaquery.v1.heatmappoint)]|false|none|Points are timestamp, then span_id, then porfile_id ordered|

<h2 id="tocS_query.v1.InvokeOptions">query.v1.InvokeOptions</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.invokeoptions"></a>
<a id="schema_query.v1.InvokeOptions"></a>
<a id="tocSquery.v1.invokeoptions"></a>
<a id="tocsquery.v1.invokeoptions"></a>

```json
{
  "sanitizeOnMerge": true,
  "collectDiagnostics": true,
  "finalize": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sanitizeOnMerge|boolean|false|none|Query workers might not have access to the tenant<br> overrides, therefore all the necessary options should<br> be listed in the request explicitly.|
|collectDiagnostics|boolean|false|none|none|
|finalize|boolean|false|none|Run final report processing after this invocation completes. Set only for<br> the root invocation; child invocations must clear this flag.|

<h2 id="tocS_query.v1.InvokeRequest">query.v1.InvokeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.invokerequest"></a>
<a id="schema_query.v1.InvokeRequest"></a>
<a id="tocSquery.v1.invokerequest"></a>
<a id="tocsquery.v1.invokerequest"></a>

```json
{
  "tenant": [
    "string"
  ],
  "startTime": 0,
  "endTime": 0,
  "labelSelector": "string",
  "query": [
    {
      "queryType": "QUERY_UNSPECIFIED",
      "labelNames": {},
      "labelValues": {
        "labelName": "string"
      },
      "seriesLabels": {
        "labelNames": [
          "string"
        ]
      },
      "timeSeries": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "tree": {
        "maxNodes": 0,
        "spanSelector": [
          "string"
        ],
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "fullSymbols": true,
        "traceIdSelector": [
          "string"
        ]
      },
      "pprof": {
        "maxNodes": 0,
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "spanSelector": [
          "string"
        ],
        "traceIdSelector": [
          "string"
        ]
      },
      "heatmap": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "timeSeriesCompact": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "profilePresence": {
        "profileIdSelector": [
          "string"
        ]
      },
      "timeSeriesAnalysis": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "config": {
          "baselineWindow": 0,
          "confirmationWindow": 0,
          "minimumSustainedPoints": 0,
          "minimumRelativeChange": 0,
          "scoreThreshold": 0,
          "recoveryThresholdRatio": 0,
          "flatnessThreshold": 0
        }
      }
    }
  ],
  "queryPlan": {
    "root": {
      "type": "UNKNOWN",
      "children": [
        {}
      ],
      "blocks": [
        {
          "formatVersion": 0,
          "id": "string",
          "tenant": 0,
          "shard": 0,
          "compactionLevel": 0,
          "minTime": 0,
          "maxTime": 0,
          "createdBy": 0,
          "metadataOffset": 0,
          "size": 0,
          "datasets": [
            {
              "format": 0,
              "tenant": 0,
              "name": 0,
              "minTime": 0,
              "maxTime": 0,
              "tableOfContents": [
                0
              ],
              "size": 0,
              "labels": [
                0
              ]
            }
          ],
          "stringTable": [
            "string"
          ]
        }
      ]
    }
  },
  "options": {
    "sanitizeOnMerge": true,
    "collectDiagnostics": true,
    "finalize": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenant|[string]|false|none|none|
|startTime|integer \| string(int64)|false|none|none|
|endTime|integer \| string(int64)|false|none|none|
|labelSelector|string|false|none|none|
|query|[[query.v1.Query](#schemaquery.v1.query)]|false|none|none|
|queryPlan|[query.v1.QueryPlan](#schemaquery.v1.queryplan)|false|none|A query plan is represented by a directed acyclic graph (DAG),<br> where each node is either a "merge" node or a "read" node.<br><br> Merge nodes reference other nodes in the plan as their "children".<br> Read nodes reference the blocks which contain the actual data to be processed.|
|options|[query.v1.InvokeOptions](#schemaquery.v1.invokeoptions)|false|none|none|

<h2 id="tocS_query.v1.InvokeResponse">query.v1.InvokeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.invokeresponse"></a>
<a id="schema_query.v1.InvokeResponse"></a>
<a id="tocSquery.v1.invokeresponse"></a>
<a id="tocsquery.v1.invokeresponse"></a>

```json
{
  "reports": [
    {
      "reportType": "REPORT_UNSPECIFIED",
      "labelNames": {
        "query": {},
        "labelNames": [
          "string"
        ]
      },
      "labelValues": {
        "query": {
          "labelName": "string"
        },
        "labelValues": [
          "string"
        ]
      },
      "seriesLabels": {
        "query": {
          "labelNames": [
            "string"
          ]
        },
        "seriesLabels": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ]
          }
        ]
      },
      "timeSeries": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ]
      },
      "tree": {
        "query": {
          "maxNodes": 0,
          "spanSelector": [
            "string"
          ],
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "fullSymbols": true,
          "traceIdSelector": [
            "string"
          ]
        },
        "tree": "string",
        "symbols": {
          "mappings": [
            {
              "id": 0,
              "memoryStart": 0,
              "memoryLimit": 0,
              "fileOffset": 0,
              "filename": 0,
              "buildId": 0,
              "hasFunctions": true,
              "hasFilenames": true,
              "hasLineNumbers": true,
              "hasInlineFrames": true
            }
          ],
          "locations": [
            {
              "id": 0,
              "mappingId": 0,
              "address": 0,
              "line": [
                {
                  "functionId": 0,
                  "line": 0
                }
              ],
              "isFolded": true
            }
          ],
          "functions": [
            {
              "id": 0,
              "name": 0,
              "systemName": 0,
              "filename": 0,
              "startLine": 0
            }
          ],
          "strings": [
            "string"
          ],
          "mappingHashes": [
            0
          ],
          "locationHashes": [
            0
          ],
          "functionHashes": [
            0
          ],
          "stringHashes": [
            0
          ]
        }
      },
      "pprof": {
        "query": {
          "maxNodes": 0,
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "spanSelector": [
            "string"
          ],
          "traceIdSelector": [
            "string"
          ]
        },
        "pprof": "string"
      },
      "heatmap": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "heatmapSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "timestamp": 0,
                "profileId": 0,
                "spanId": 0,
                "value": 0,
                "attributeRefs": [
                  0
                ],
                "traceId": "string"
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "timeSeriesCompact": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotationRefs": [
                  0
                ],
                "exemplars": [
                  {
                    "timestamp": 0,
                    "profileId": "string",
                    "spanId": "string",
                    "value": 0,
                    "attributeRefs": [
                      0
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "profilePresence": {
        "query": {
          "profileIdSelector": [
            "string"
          ]
        },
        "profiles": [
          {
            "profileId": "string",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestamp": 0
          }
        ]
      },
      "timeSeriesAnalysis": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "config": {
            "baselineWindow": 0,
            "confirmationWindow": 0,
            "minimumSustainedPoints": 0,
            "minimumRelativeChange": 0,
            "scoreThreshold": 0,
            "recoveryThresholdRatio": 0,
            "flatnessThreshold": 0
          }
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ],
        "events": [
          {
            "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestampStart": 0,
            "timestampEnd": 0,
            "timestampPeak": 0,
            "baseline": 0,
            "peakValue": 0,
            "relativeChange": 0,
            "score": 0,
            "priorityScore": 0
          }
        ]
      }
    }
  ],
  "diagnostics": {
    "queryPlan": {
      "root": {
        "type": "UNKNOWN",
        "children": [
          {}
        ],
        "blocks": [
          {
            "formatVersion": 0,
            "id": "string",
            "tenant": 0,
            "shard": 0,
            "compactionLevel": 0,
            "minTime": 0,
            "maxTime": 0,
            "createdBy": 0,
            "metadataOffset": 0,
            "size": 0,
            "datasets": [
              {
                "format": 0,
                "tenant": 0,
                "name": 0,
                "minTime": 0,
                "maxTime": 0,
                "tableOfContents": [
                  0
                ],
                "size": 0,
                "labels": [
                  0
                ]
              }
            ],
            "stringTable": [
              "string"
            ]
          }
        ]
      }
    },
    "executionNode": {
      "type": "UNKNOWN",
      "executor": "string",
      "startTimeNs": 0,
      "endTimeNs": 0,
      "children": [
        {}
      ],
      "stats": {
        "blocksRead": 0,
        "datasetsProcessed": 0,
        "blockExecutions": [
          {
            "blockId": "string",
            "startTimeNs": 0,
            "endTimeNs": 0,
            "datasetsProcessed": 0,
            "size": 0,
            "shard": 0,
            "compactionLevel": 0
          }
        ],
        "bytesFetched": 0,
        "processingDurationNs": 0,
        "backoffDurationNs": 0,
        "unaccountedDurationNs": 0
      },
      "error": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|[[query.v1.Report](#schemaquery.v1.report)]|false|none|none|
|diagnostics|[query.v1.Diagnostics](#schemaquery.v1.diagnostics)|false|none|Diagnostic messages, events, statistics, analytics, etc.|

<h2 id="tocS_query.v1.LabelNamesQuery">query.v1.LabelNamesQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.labelnamesquery"></a>
<a id="schema_query.v1.LabelNamesQuery"></a>
<a id="tocSquery.v1.labelnamesquery"></a>
<a id="tocsquery.v1.labelnamesquery"></a>

```json
{}
```

<h2 id="tocS_query.v1.LabelNamesReport">query.v1.LabelNamesReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.labelnamesreport"></a>
<a id="schema_query.v1.LabelNamesReport"></a>
<a id="tocSquery.v1.labelnamesreport"></a>
<a id="tocsquery.v1.labelnamesreport"></a>

```json
{
  "query": {},
  "labelNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.LabelNamesQuery](#schemaquery.v1.labelnamesquery)|false|none|none|
|labelNames|[string]|false|none|none|

<h2 id="tocS_query.v1.LabelValuesQuery">query.v1.LabelValuesQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.labelvaluesquery"></a>
<a id="schema_query.v1.LabelValuesQuery"></a>
<a id="tocSquery.v1.labelvaluesquery"></a>
<a id="tocsquery.v1.labelvaluesquery"></a>

```json
{
  "labelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelName|string|false|none|none|

<h2 id="tocS_query.v1.LabelValuesReport">query.v1.LabelValuesReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.labelvaluesreport"></a>
<a id="schema_query.v1.LabelValuesReport"></a>
<a id="tocSquery.v1.labelvaluesreport"></a>
<a id="tocsquery.v1.labelvaluesreport"></a>

```json
{
  "query": {
    "labelName": "string"
  },
  "labelValues": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.LabelValuesQuery](#schemaquery.v1.labelvaluesquery)|false|none|none|
|labelValues|[string]|false|none|none|

<h2 id="tocS_query.v1.Point">query.v1.Point</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.point"></a>
<a id="schema_query.v1.Point"></a>
<a id="tocSquery.v1.point"></a>
<a id="tocsquery.v1.point"></a>

```json
{
  "value": 0,
  "timestamp": 0,
  "annotationRefs": [
    0
  ],
  "exemplars": [
    {
      "timestamp": 0,
      "profileId": "string",
      "spanId": "string",
      "value": 0,
      "attributeRefs": [
        0
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|false|none|none|
|timestamp|integer \| string(int64)|false|none|Milliseconds unix timestamp|
|annotationRefs|[integer \| string(int64)]|false|none|Annotations as references into AttributeTable|
|exemplars|[[query.v1.Exemplar](#schemaquery.v1.exemplar)]|false|none|Exemplars are samples of individual profiles that contributed to this aggregated point|

<h2 id="tocS_query.v1.PprofQuery">query.v1.PprofQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.pprofquery"></a>
<a id="schema_query.v1.PprofQuery"></a>
<a id="tocSquery.v1.pprofquery"></a>
<a id="tocsquery.v1.pprofquery"></a>

```json
{
  "maxNodes": 0,
  "stackTraceSelector": {
    "callSite": [
      {
        "name": "string"
      }
    ],
    "goPgo": {
      "keepLocations": 0,
      "aggregateCallees": true
    }
  },
  "profileIdSelector": [
    "string"
  ],
  "spanSelector": [
    "string"
  ],
  "traceIdSelector": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxNodes|integer \| string(int64)|false|none|none|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|StackTraceSelector is used for filtering stack traces by locations.|
|profileIdSelector|[string]|false|none|none|
|spanSelector|[string]|false|none|none|
|traceIdSelector|[string]|false|none|TODO(kolesnikovae): Go PGO options.|

<h2 id="tocS_query.v1.PprofReport">query.v1.PprofReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.pprofreport"></a>
<a id="schema_query.v1.PprofReport"></a>
<a id="tocSquery.v1.pprofreport"></a>
<a id="tocsquery.v1.pprofreport"></a>

```json
{
  "query": {
    "maxNodes": 0,
    "stackTraceSelector": {
      "callSite": [
        {
          "name": "string"
        }
      ],
      "goPgo": {
        "keepLocations": 0,
        "aggregateCallees": true
      }
    },
    "profileIdSelector": [
      "string"
    ],
    "spanSelector": [
      "string"
    ],
    "traceIdSelector": [
      "string"
    ]
  },
  "pprof": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.PprofQuery](#schemaquery.v1.pprofquery)|false|none|none|
|pprof|string(byte)|false|none|none|

<h2 id="tocS_query.v1.ProfilePresenceEntry">query.v1.ProfilePresenceEntry</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.profilepresenceentry"></a>
<a id="schema_query.v1.ProfilePresenceEntry"></a>
<a id="tocSquery.v1.profilepresenceentry"></a>
<a id="tocsquery.v1.profilepresenceentry"></a>

```json
{
  "profileId": "string",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileId|string|false|none|none|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|The profile's own labels (e.g. pod, instance), same convention as<br> types.v1.Exemplar.labels.|
|timestamp|integer \| string(int64)|false|none|Milliseconds since epoch: the profile's own timestamp.|

<h2 id="tocS_query.v1.ProfilePresenceQuery">query.v1.ProfilePresenceQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.profilepresencequery"></a>
<a id="schema_query.v1.ProfilePresenceQuery"></a>
<a id="tocSquery.v1.profilepresencequery"></a>
<a id="tocsquery.v1.profilepresencequery"></a>

```json
{
  "profileIdSelector": [
    "string"
  ]
}
```

(Experimental) ProfilePresenceQuery checks which of profile_id_selector are actually
 present in the queried data (matching the label selector and time range), without
 resolving symbols or building a merged profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileIdSelector|[string]|false|none|none|

<h2 id="tocS_query.v1.ProfilePresenceReport">query.v1.ProfilePresenceReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.profilepresencereport"></a>
<a id="schema_query.v1.ProfilePresenceReport"></a>
<a id="tocSquery.v1.profilepresencereport"></a>
<a id="tocsquery.v1.profilepresencereport"></a>

```json
{
  "query": {
    "profileIdSelector": [
      "string"
    ]
  },
  "profiles": [
    {
      "profileId": "string",
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "timestamp": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.ProfilePresenceQuery](#schemaquery.v1.profilepresencequery)|false|none|(Experimental) ProfilePresenceQuery checks which of profile_id_selector are actually<br> present in the queried data (matching the label selector and time range), without<br> resolving symbols or building a merged profile.|
|profiles|[[query.v1.ProfilePresenceEntry](#schemaquery.v1.profilepresenceentry)]|false|none|The subset of query.profile_id_selector found present, one entry per profile.|

<h2 id="tocS_query.v1.Query">query.v1.Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.query"></a>
<a id="schema_query.v1.Query"></a>
<a id="tocSquery.v1.query"></a>
<a id="tocsquery.v1.query"></a>

```json
{
  "queryType": "QUERY_UNSPECIFIED",
  "labelNames": {},
  "labelValues": {
    "labelName": "string"
  },
  "seriesLabels": {
    "labelNames": [
      "string"
    ]
  },
  "timeSeries": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  },
  "tree": {
    "maxNodes": 0,
    "spanSelector": [
      "string"
    ],
    "stackTraceSelector": {
      "callSite": [
        {
          "name": "string"
        }
      ],
      "goPgo": {
        "keepLocations": 0,
        "aggregateCallees": true
      }
    },
    "profileIdSelector": [
      "string"
    ],
    "fullSymbols": true,
    "traceIdSelector": [
      "string"
    ]
  },
  "pprof": {
    "maxNodes": 0,
    "stackTraceSelector": {
      "callSite": [
        {
          "name": "string"
        }
      ],
      "goPgo": {
        "keepLocations": 0,
        "aggregateCallees": true
      }
    },
    "profileIdSelector": [
      "string"
    ],
    "spanSelector": [
      "string"
    ],
    "traceIdSelector": [
      "string"
    ]
  },
  "heatmap": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  },
  "timeSeriesCompact": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  },
  "profilePresence": {
    "profileIdSelector": [
      "string"
    ]
  },
  "timeSeriesAnalysis": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "limit": 0,
    "config": {
      "baselineWindow": 0,
      "confirmationWindow": 0,
      "minimumSustainedPoints": 0,
      "minimumRelativeChange": 0,
      "scoreThreshold": 0,
      "recoveryThresholdRatio": 0,
      "flatnessThreshold": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryType|[query.v1.QueryType](#schemaquery.v1.querytype)|false|none|none|
|labelNames|[query.v1.LabelNamesQuery](#schemaquery.v1.labelnamesquery)|false|none|Exactly one of the following fields should be set,<br> depending on the query type.|
|labelValues|[query.v1.LabelValuesQuery](#schemaquery.v1.labelvaluesquery)|false|none|none|
|seriesLabels|[query.v1.SeriesLabelsQuery](#schemaquery.v1.serieslabelsquery)|false|none|none|
|timeSeries|[query.v1.TimeSeriesQuery](#schemaquery.v1.timeseriesquery)|false|none|none|
|tree|[query.v1.TreeQuery](#schemaquery.v1.treequery)|false|none|none|
|pprof|[query.v1.PprofQuery](#schemaquery.v1.pprofquery)|false|none|none|
|heatmap|[query.v1.HeatmapQuery](#schemaquery.v1.heatmapquery)|false|none|none|
|timeSeriesCompact|[query.v1.TimeSeriesQuery](#schemaquery.v1.timeseriesquery)|false|none|none|
|profilePresence|[query.v1.ProfilePresenceQuery](#schemaquery.v1.profilepresencequery)|false|none|(Experimental) ProfilePresenceQuery checks which of profile_id_selector are actually<br> present in the queried data (matching the label selector and time range), without<br> resolving symbols or building a merged profile.|
|timeSeriesAnalysis|[query.v1.TimeSeriesAnalysisQuery](#schemaquery.v1.timeseriesanalysisquery)|false|none|function_details<br> call_graph<br> top_table<br> ...|

#### Enumerated Values

|Property|Value|
|---|---|
|queryType|QUERY_UNSPECIFIED|
|queryType|QUERY_LABEL_NAMES|
|queryType|QUERY_LABEL_VALUES|
|queryType|QUERY_SERIES_LABELS|
|queryType|QUERY_TIME_SERIES|
|queryType|QUERY_TREE|
|queryType|QUERY_PPROF|
|queryType|QUERY_HEATMAP|
|queryType|QUERY_TIME_SERIES_COMPACT|
|queryType|QUERY_PROFILE_PRESENCE|
|queryType|QUERY_TIME_SERIES_ANALYSIS|

<h2 id="tocS_query.v1.QueryNode">query.v1.QueryNode</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.querynode"></a>
<a id="schema_query.v1.QueryNode"></a>
<a id="tocSquery.v1.querynode"></a>
<a id="tocsquery.v1.querynode"></a>

```json
{
  "type": "UNKNOWN",
  "children": [
    {
      "type": "UNKNOWN",
      "children": [
        {}
      ],
      "blocks": [
        {
          "formatVersion": 0,
          "id": "string",
          "tenant": 0,
          "shard": 0,
          "compactionLevel": 0,
          "minTime": 0,
          "maxTime": 0,
          "createdBy": 0,
          "metadataOffset": 0,
          "size": 0,
          "datasets": [
            {
              "format": 0,
              "tenant": 0,
              "name": 0,
              "minTime": 0,
              "maxTime": 0,
              "tableOfContents": [
                0
              ],
              "size": 0,
              "labels": [
                0
              ]
            }
          ],
          "stringTable": [
            "string"
          ]
        }
      ]
    }
  ],
  "blocks": [
    {
      "formatVersion": 0,
      "id": "string",
      "tenant": 0,
      "shard": 0,
      "compactionLevel": 0,
      "minTime": 0,
      "maxTime": 0,
      "createdBy": 0,
      "metadataOffset": 0,
      "size": 0,
      "datasets": [
        {
          "format": 0,
          "tenant": 0,
          "name": 0,
          "minTime": 0,
          "maxTime": 0,
          "tableOfContents": [
            0
          ],
          "size": 0,
          "labels": [
            0
          ]
        }
      ],
      "stringTable": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[query.v1.QueryNode.Type](#schemaquery.v1.querynode.type)|false|none|none|
|children|[[query.v1.QueryNode](#schemaquery.v1.querynode)]|false|none|none|
|blocks|[[metastore.v1.BlockMeta](#schemametastore.v1.blockmeta)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|MERGE|
|type|READ|

<h2 id="tocS_query.v1.QueryNode.Type">query.v1.QueryNode.Type</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.querynode.type"></a>
<a id="schema_query.v1.QueryNode.Type"></a>
<a id="tocSquery.v1.querynode.type"></a>
<a id="tocsquery.v1.querynode.type"></a>

```json
"UNKNOWN"
```

<h2 id="tocS_query.v1.QueryPlan">query.v1.QueryPlan</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.queryplan"></a>
<a id="schema_query.v1.QueryPlan"></a>
<a id="tocSquery.v1.queryplan"></a>
<a id="tocsquery.v1.queryplan"></a>

```json
{
  "root": {
    "type": "UNKNOWN",
    "children": [
      {}
    ],
    "blocks": [
      {
        "formatVersion": 0,
        "id": "string",
        "tenant": 0,
        "shard": 0,
        "compactionLevel": 0,
        "minTime": 0,
        "maxTime": 0,
        "createdBy": 0,
        "metadataOffset": 0,
        "size": 0,
        "datasets": [
          {
            "format": 0,
            "tenant": 0,
            "name": 0,
            "minTime": 0,
            "maxTime": 0,
            "tableOfContents": [
              0
            ],
            "size": 0,
            "labels": [
              0
            ]
          }
        ],
        "stringTable": [
          "string"
        ]
      }
    ]
  }
}
```

A query plan is represented by a directed acyclic graph (DAG),
 where each node is either a "merge" node or a "read" node.

 Merge nodes reference other nodes in the plan as their "children".
 Read nodes reference the blocks which contain the actual data to be processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|root|[query.v1.QueryNode](#schemaquery.v1.querynode)|false|none|none|

<h2 id="tocS_query.v1.QueryRequest">query.v1.QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.queryrequest"></a>
<a id="schema_query.v1.QueryRequest"></a>
<a id="tocSquery.v1.queryrequest"></a>
<a id="tocsquery.v1.queryrequest"></a>

```json
{
  "startTime": 0,
  "endTime": 0,
  "labelSelector": "string",
  "query": [
    {
      "queryType": "QUERY_UNSPECIFIED",
      "labelNames": {},
      "labelValues": {
        "labelName": "string"
      },
      "seriesLabels": {
        "labelNames": [
          "string"
        ]
      },
      "timeSeries": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "tree": {
        "maxNodes": 0,
        "spanSelector": [
          "string"
        ],
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "fullSymbols": true,
        "traceIdSelector": [
          "string"
        ]
      },
      "pprof": {
        "maxNodes": 0,
        "stackTraceSelector": {
          "callSite": [
            {
              "name": "string"
            }
          ],
          "goPgo": {
            "keepLocations": 0,
            "aggregateCallees": true
          }
        },
        "profileIdSelector": [
          "string"
        ],
        "spanSelector": [
          "string"
        ],
        "traceIdSelector": [
          "string"
        ]
      },
      "heatmap": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "timeSeriesCompact": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
      },
      "profilePresence": {
        "profileIdSelector": [
          "string"
        ]
      },
      "timeSeriesAnalysis": {
        "step": 0,
        "groupBy": [
          "string"
        ],
        "limit": 0,
        "config": {
          "baselineWindow": 0,
          "confirmationWindow": 0,
          "minimumSustainedPoints": 0,
          "minimumRelativeChange": 0,
          "scoreThreshold": 0,
          "recoveryThresholdRatio": 0,
          "flatnessThreshold": 0
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|integer \| string(int64)|false|none|none|
|endTime|integer \| string(int64)|false|none|none|
|labelSelector|string|false|none|none|
|query|[[query.v1.Query](#schemaquery.v1.query)]|false|none|none|

<h2 id="tocS_query.v1.QueryResponse">query.v1.QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.queryresponse"></a>
<a id="schema_query.v1.QueryResponse"></a>
<a id="tocSquery.v1.queryresponse"></a>
<a id="tocsquery.v1.queryresponse"></a>

```json
{
  "reports": [
    {
      "reportType": "REPORT_UNSPECIFIED",
      "labelNames": {
        "query": {},
        "labelNames": [
          "string"
        ]
      },
      "labelValues": {
        "query": {
          "labelName": "string"
        },
        "labelValues": [
          "string"
        ]
      },
      "seriesLabels": {
        "query": {
          "labelNames": [
            "string"
          ]
        },
        "seriesLabels": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ]
          }
        ]
      },
      "timeSeries": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ]
      },
      "tree": {
        "query": {
          "maxNodes": 0,
          "spanSelector": [
            "string"
          ],
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "fullSymbols": true,
          "traceIdSelector": [
            "string"
          ]
        },
        "tree": "string",
        "symbols": {
          "mappings": [
            {
              "id": 0,
              "memoryStart": 0,
              "memoryLimit": 0,
              "fileOffset": 0,
              "filename": 0,
              "buildId": 0,
              "hasFunctions": true,
              "hasFilenames": true,
              "hasLineNumbers": true,
              "hasInlineFrames": true
            }
          ],
          "locations": [
            {
              "id": 0,
              "mappingId": 0,
              "address": 0,
              "line": [
                {
                  "functionId": 0,
                  "line": 0
                }
              ],
              "isFolded": true
            }
          ],
          "functions": [
            {
              "id": 0,
              "name": 0,
              "systemName": 0,
              "filename": 0,
              "startLine": 0
            }
          ],
          "strings": [
            "string"
          ],
          "mappingHashes": [
            0
          ],
          "locationHashes": [
            0
          ],
          "functionHashes": [
            0
          ],
          "stringHashes": [
            0
          ]
        }
      },
      "pprof": {
        "query": {
          "maxNodes": 0,
          "stackTraceSelector": {
            "callSite": [
              {
                "name": "string"
              }
            ],
            "goPgo": {
              "keepLocations": 0,
              "aggregateCallees": true
            }
          },
          "profileIdSelector": [
            "string"
          ],
          "spanSelector": [
            "string"
          ],
          "traceIdSelector": [
            "string"
          ]
        },
        "pprof": "string"
      },
      "heatmap": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "heatmapSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "timestamp": 0,
                "profileId": 0,
                "spanId": 0,
                "value": 0,
                "attributeRefs": [
                  0
                ],
                "traceId": "string"
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "timeSeriesCompact": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
        },
        "timeSeries": [
          {
            "attributeRefs": [
              0
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotationRefs": [
                  0
                ],
                "exemplars": [
                  {
                    "timestamp": 0,
                    "profileId": "string",
                    "spanId": "string",
                    "value": 0,
                    "attributeRefs": [
                      0
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "attributeTable": {
          "keys": [
            "string"
          ],
          "values": [
            "string"
          ]
        }
      },
      "profilePresence": {
        "query": {
          "profileIdSelector": [
            "string"
          ]
        },
        "profiles": [
          {
            "profileId": "string",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestamp": 0
          }
        ]
      },
      "timeSeriesAnalysis": {
        "query": {
          "step": 0,
          "groupBy": [
            "string"
          ],
          "limit": 0,
          "config": {
            "baselineWindow": 0,
            "confirmationWindow": 0,
            "minimumSustainedPoints": 0,
            "minimumRelativeChange": 0,
            "scoreThreshold": 0,
            "recoveryThresholdRatio": 0,
            "flatnessThreshold": 0
          }
        },
        "timeSeries": [
          {
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "points": [
              {
                "value": 0,
                "timestamp": 0,
                "annotations": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ],
                "exemplars": [
                  {
                    "timestamp": "1730000023000",
                    "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                    "spanId": "00f067aa0ba902b7",
                    "value": "2450000000",
                    "labels": [
                      {
                        "name": "service_name",
                        "value": "my_service"
                      }
                    ],
                    "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
                  }
                ]
              }
            ]
          }
        ],
        "events": [
          {
            "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
            "labels": [
              {
                "name": "service_name",
                "value": "my_service"
              }
            ],
            "timestampStart": 0,
            "timestampEnd": 0,
            "timestampPeak": 0,
            "baseline": 0,
            "peakValue": 0,
            "relativeChange": 0,
            "score": 0,
            "priorityScore": 0
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|[[query.v1.Report](#schemaquery.v1.report)]|false|none|none|

<h2 id="tocS_query.v1.QueryType">query.v1.QueryType</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.querytype"></a>
<a id="schema_query.v1.QueryType"></a>
<a id="tocSquery.v1.querytype"></a>
<a id="tocsquery.v1.querytype"></a>

```json
"QUERY_UNSPECIFIED"
```

<h2 id="tocS_query.v1.Report">query.v1.Report</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.report"></a>
<a id="schema_query.v1.Report"></a>
<a id="tocSquery.v1.report"></a>
<a id="tocsquery.v1.report"></a>

```json
{
  "reportType": "REPORT_UNSPECIFIED",
  "labelNames": {
    "query": {},
    "labelNames": [
      "string"
    ]
  },
  "labelValues": {
    "query": {
      "labelName": "string"
    },
    "labelValues": [
      "string"
    ]
  },
  "seriesLabels": {
    "query": {
      "labelNames": [
        "string"
      ]
    },
    "seriesLabels": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ]
      }
    ]
  },
  "timeSeries": {
    "query": {
      "step": 0,
      "groupBy": [
        "string"
      ],
      "limit": 0,
      "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
    },
    "timeSeries": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ],
        "points": [
          {
            "value": 0,
            "timestamp": 0,
            "annotations": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "exemplars": [
              {
                "timestamp": "1730000023000",
                "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                "spanId": "00f067aa0ba902b7",
                "value": "2450000000",
                "labels": [
                  {
                    "name": "service_name",
                    "value": "my_service"
                  }
                ],
                "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
              }
            ]
          }
        ]
      }
    ]
  },
  "tree": {
    "query": {
      "maxNodes": 0,
      "spanSelector": [
        "string"
      ],
      "stackTraceSelector": {
        "callSite": [
          {
            "name": "string"
          }
        ],
        "goPgo": {
          "keepLocations": 0,
          "aggregateCallees": true
        }
      },
      "profileIdSelector": [
        "string"
      ],
      "fullSymbols": true,
      "traceIdSelector": [
        "string"
      ]
    },
    "tree": "string",
    "symbols": {
      "mappings": [
        {
          "id": 0,
          "memoryStart": 0,
          "memoryLimit": 0,
          "fileOffset": 0,
          "filename": 0,
          "buildId": 0,
          "hasFunctions": true,
          "hasFilenames": true,
          "hasLineNumbers": true,
          "hasInlineFrames": true
        }
      ],
      "locations": [
        {
          "id": 0,
          "mappingId": 0,
          "address": 0,
          "line": [
            {
              "functionId": 0,
              "line": 0
            }
          ],
          "isFolded": true
        }
      ],
      "functions": [
        {
          "id": 0,
          "name": 0,
          "systemName": 0,
          "filename": 0,
          "startLine": 0
        }
      ],
      "strings": [
        "string"
      ],
      "mappingHashes": [
        0
      ],
      "locationHashes": [
        0
      ],
      "functionHashes": [
        0
      ],
      "stringHashes": [
        0
      ]
    }
  },
  "pprof": {
    "query": {
      "maxNodes": 0,
      "stackTraceSelector": {
        "callSite": [
          {
            "name": "string"
          }
        ],
        "goPgo": {
          "keepLocations": 0,
          "aggregateCallees": true
        }
      },
      "profileIdSelector": [
        "string"
      ],
      "spanSelector": [
        "string"
      ],
      "traceIdSelector": [
        "string"
      ]
    },
    "pprof": "string"
  },
  "heatmap": {
    "query": {
      "step": 0,
      "groupBy": [
        "string"
      ],
      "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
      "limit": 0,
      "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
    },
    "heatmapSeries": [
      {
        "attributeRefs": [
          0
        ],
        "points": [
          {
            "timestamp": 0,
            "profileId": 0,
            "spanId": 0,
            "value": 0,
            "attributeRefs": [
              0
            ],
            "traceId": "string"
          }
        ]
      }
    ],
    "attributeTable": {
      "keys": [
        "string"
      ],
      "values": [
        "string"
      ]
    }
  },
  "timeSeriesCompact": {
    "query": {
      "step": 0,
      "groupBy": [
        "string"
      ],
      "limit": 0,
      "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
    },
    "timeSeries": [
      {
        "attributeRefs": [
          0
        ],
        "points": [
          {
            "value": 0,
            "timestamp": 0,
            "annotationRefs": [
              0
            ],
            "exemplars": [
              {
                "timestamp": 0,
                "profileId": "string",
                "spanId": "string",
                "value": 0,
                "attributeRefs": [
                  0
                ]
              }
            ]
          }
        ]
      }
    ],
    "attributeTable": {
      "keys": [
        "string"
      ],
      "values": [
        "string"
      ]
    }
  },
  "profilePresence": {
    "query": {
      "profileIdSelector": [
        "string"
      ]
    },
    "profiles": [
      {
        "profileId": "string",
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ],
        "timestamp": 0
      }
    ]
  },
  "timeSeriesAnalysis": {
    "query": {
      "step": 0,
      "groupBy": [
        "string"
      ],
      "limit": 0,
      "config": {
        "baselineWindow": 0,
        "confirmationWindow": 0,
        "minimumSustainedPoints": 0,
        "minimumRelativeChange": 0,
        "scoreThreshold": 0,
        "recoveryThresholdRatio": 0,
        "flatnessThreshold": 0
      }
    },
    "timeSeries": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ],
        "points": [
          {
            "value": 0,
            "timestamp": 0,
            "annotations": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "exemplars": [
              {
                "timestamp": "1730000023000",
                "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                "spanId": "00f067aa0ba902b7",
                "value": "2450000000",
                "labels": [
                  {
                    "name": "service_name",
                    "value": "my_service"
                  }
                ],
                "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ],
        "timestampStart": 0,
        "timestampEnd": 0,
        "timestampPeak": 0,
        "baseline": 0,
        "peakValue": 0,
        "relativeChange": 0,
        "score": 0,
        "priorityScore": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportType|[query.v1.ReportType](#schemaquery.v1.reporttype)|false|none|none|
|labelNames|[query.v1.LabelNamesReport](#schemaquery.v1.labelnamesreport)|false|none|Exactly one of the following fields should be set,<br> depending on the report type.|
|labelValues|[query.v1.LabelValuesReport](#schemaquery.v1.labelvaluesreport)|false|none|none|
|seriesLabels|[query.v1.SeriesLabelsReport](#schemaquery.v1.serieslabelsreport)|false|none|none|
|timeSeries|[query.v1.TimeSeriesReport](#schemaquery.v1.timeseriesreport)|false|none|none|
|tree|[query.v1.TreeReport](#schemaquery.v1.treereport)|false|none|none|
|pprof|[query.v1.PprofReport](#schemaquery.v1.pprofreport)|false|none|none|
|heatmap|[query.v1.HeatmapReport](#schemaquery.v1.heatmapreport)|false|none|none|
|timeSeriesCompact|[query.v1.TimeSeriesCompactReport](#schemaquery.v1.timeseriescompactreport)|false|none|none|
|profilePresence|[query.v1.ProfilePresenceReport](#schemaquery.v1.profilepresencereport)|false|none|none|
|timeSeriesAnalysis|[query.v1.TimeSeriesAnalysisReport](#schemaquery.v1.timeseriesanalysisreport)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reportType|REPORT_UNSPECIFIED|
|reportType|REPORT_LABEL_NAMES|
|reportType|REPORT_LABEL_VALUES|
|reportType|REPORT_SERIES_LABELS|
|reportType|REPORT_TIME_SERIES|
|reportType|REPORT_TREE|
|reportType|REPORT_PPROF|
|reportType|REPORT_HEATMAP|
|reportType|REPORT_TIME_SERIES_COMPACT|
|reportType|REPORT_PROFILE_PRESENCE|
|reportType|REPORT_TIME_SERIES_ANALYSIS|

<h2 id="tocS_query.v1.ReportType">query.v1.ReportType</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.reporttype"></a>
<a id="schema_query.v1.ReportType"></a>
<a id="tocSquery.v1.reporttype"></a>
<a id="tocsquery.v1.reporttype"></a>

```json
"REPORT_UNSPECIFIED"
```

<h2 id="tocS_query.v1.Series">query.v1.Series</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.series"></a>
<a id="schema_query.v1.Series"></a>
<a id="tocSquery.v1.series"></a>
<a id="tocsquery.v1.series"></a>

```json
{
  "attributeRefs": [
    0
  ],
  "points": [
    {
      "value": 0,
      "timestamp": 0,
      "annotationRefs": [
        0
      ],
      "exemplars": [
        {
          "timestamp": 0,
          "profileId": "string",
          "spanId": "string",
          "value": 0,
          "attributeRefs": [
            0
          ]
        }
      ]
    }
  ]
}
```

Series represents a time series with optimized label storage using attribute references.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeRefs|[integer \| string(int64)]|false|none|References to label key-value pairs in the AttributeTable that identify this series.|
|points|[[query.v1.Point](#schemaquery.v1.point)]|false|none|Time series data points. Each point may contain exemplars with their own attribute_refs.|

<h2 id="tocS_query.v1.SeriesLabelsQuery">query.v1.SeriesLabelsQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.serieslabelsquery"></a>
<a id="schema_query.v1.SeriesLabelsQuery"></a>
<a id="tocSquery.v1.serieslabelsquery"></a>
<a id="tocsquery.v1.serieslabelsquery"></a>

```json
{
  "labelNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelNames|[string]|false|none|none|

<h2 id="tocS_query.v1.SeriesLabelsReport">query.v1.SeriesLabelsReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.serieslabelsreport"></a>
<a id="schema_query.v1.SeriesLabelsReport"></a>
<a id="tocSquery.v1.serieslabelsreport"></a>
<a id="tocsquery.v1.serieslabelsreport"></a>

```json
{
  "query": {
    "labelNames": [
      "string"
    ]
  },
  "seriesLabels": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.SeriesLabelsQuery](#schemaquery.v1.serieslabelsquery)|false|none|none|
|seriesLabels|[[types.v1.Labels](#schematypes.v1.labels)]|false|none|none|

<h2 id="tocS_query.v1.TimeSeriesAnalysisConfig">query.v1.TimeSeriesAnalysisConfig</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.timeseriesanalysisconfig"></a>
<a id="schema_query.v1.TimeSeriesAnalysisConfig"></a>
<a id="tocSquery.v1.timeseriesanalysisconfig"></a>
<a id="tocsquery.v1.timeseriesanalysisconfig"></a>

```json
{
  "baselineWindow": 0,
  "confirmationWindow": 0,
  "minimumSustainedPoints": 0,
  "minimumRelativeChange": 0,
  "scoreThreshold": 0,
  "recoveryThresholdRatio": 0,
  "flatnessThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baselineWindow|integer|false|none|Number of preceding observed points used to calculate the baseline.|
|confirmationWindow|integer|false|none|Number of subsequent observed points used to classify an event.|
|minimumSustainedPoints|integer|false|none|Number of elevated points required for an event to be sustained.|
|minimumRelativeChange|number(double)|false|none|Minimum absolute fractional deviation from the baseline.|
|scoreThreshold|number(double)|false|none|Minimum robust score, based on median absolute deviation.|
|recoveryThresholdRatio|number(double)|false|none|Fraction of minimum_relative_change used to decide recovery.|
|flatnessThreshold|number(double)|false|none|Maximum normalized range for a series to be considered flat.|

<h2 id="tocS_query.v1.TimeSeriesAnalysisQuery">query.v1.TimeSeriesAnalysisQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.timeseriesanalysisquery"></a>
<a id="schema_query.v1.TimeSeriesAnalysisQuery"></a>
<a id="tocSquery.v1.timeseriesanalysisquery"></a>
<a id="tocsquery.v1.timeseriesanalysisquery"></a>

```json
{
  "step": 0,
  "groupBy": [
    "string"
  ],
  "limit": 0,
  "config": {
    "baselineWindow": 0,
    "confirmationWindow": 0,
    "minimumSustainedPoints": 0,
    "minimumRelativeChange": 0,
    "scoreThreshold": 0,
    "recoveryThresholdRatio": 0,
    "flatnessThreshold": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|step|number(double)|false|none|none|
|groupBy|[string]|false|none|none|
|limit|integer \| string(int64)|false|none|none|
|config|[query.v1.TimeSeriesAnalysisConfig](#schemaquery.v1.timeseriesanalysisconfig)|false|none|none|

<h2 id="tocS_query.v1.TimeSeriesAnalysisReport">query.v1.TimeSeriesAnalysisReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.timeseriesanalysisreport"></a>
<a id="schema_query.v1.TimeSeriesAnalysisReport"></a>
<a id="tocSquery.v1.timeseriesanalysisreport"></a>
<a id="tocsquery.v1.timeseriesanalysisreport"></a>

```json
{
  "query": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "limit": 0,
    "config": {
      "baselineWindow": 0,
      "confirmationWindow": 0,
      "minimumSustainedPoints": 0,
      "minimumRelativeChange": 0,
      "scoreThreshold": 0,
      "recoveryThresholdRatio": 0,
      "flatnessThreshold": 0
    }
  },
  "timeSeries": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "points": [
        {
          "value": 0,
          "timestamp": 0,
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "exemplars": [
            {
              "timestamp": "1730000023000",
              "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
              "spanId": "00f067aa0ba902b7",
              "value": "2450000000",
              "labels": [
                {
                  "name": "service_name",
                  "value": "my_service"
                }
              ],
              "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
            }
          ]
        }
      ]
    }
  ],
  "events": [
    {
      "type": "TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED",
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "timestampStart": 0,
      "timestampEnd": 0,
      "timestampPeak": 0,
      "baseline": 0,
      "peakValue": 0,
      "relativeChange": 0,
      "score": 0,
      "priorityScore": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.TimeSeriesAnalysisQuery](#schemaquery.v1.timeseriesanalysisquery)|false|none|none|
|timeSeries|[[types.v1.Series](#schematypes.v1.series)]|false|none|Intermediate series retained so parent query-plan nodes can merge and<br> analyze the complete series.|
|events|[[querier.v1.TimeSeriesAnomaly](#schemaquerier.v1.timeseriesanomaly)]|false|none|none|

<h2 id="tocS_query.v1.TimeSeriesCompactReport">query.v1.TimeSeriesCompactReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.timeseriescompactreport"></a>
<a id="schema_query.v1.TimeSeriesCompactReport"></a>
<a id="tocSquery.v1.timeseriescompactreport"></a>
<a id="tocsquery.v1.timeseriescompactreport"></a>

```json
{
  "query": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  },
  "timeSeries": [
    {
      "attributeRefs": [
        0
      ],
      "points": [
        {
          "value": 0,
          "timestamp": 0,
          "annotationRefs": [
            0
          ],
          "exemplars": [
            {
              "timestamp": 0,
              "profileId": "string",
              "spanId": "string",
              "value": 0,
              "attributeRefs": [
                0
              ]
            }
          ]
        }
      ]
    }
  ],
  "attributeTable": {
    "keys": [
      "string"
    ],
    "values": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.TimeSeriesQuery](#schemaquery.v1.timeseriesquery)|false|none|none|
|timeSeries|[[query.v1.Series](#schemaquery.v1.series)]|false|none|none|
|attributeTable|[query.v1.AttributeTable](#schemaquery.v1.attributetable)|false|none|none|

<h2 id="tocS_query.v1.TimeSeriesQuery">query.v1.TimeSeriesQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.timeseriesquery"></a>
<a id="schema_query.v1.TimeSeriesQuery"></a>
<a id="tocSquery.v1.timeseriesquery"></a>
<a id="tocsquery.v1.timeseriesquery"></a>

```json
{
  "step": 0,
  "groupBy": [
    "string"
  ],
  "limit": 0,
  "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|step|number(double)|false|none|none|
|groupBy|[string]|false|none|none|
|limit|integer \| string(int64)|false|none|none|
|exemplarType|[types.v1.ExemplarType](#schematypes.v1.exemplartype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|exemplarType|EXEMPLAR_TYPE_UNSPECIFIED|
|exemplarType|EXEMPLAR_TYPE_NONE|
|exemplarType|EXEMPLAR_TYPE_INDIVIDUAL|
|exemplarType|EXEMPLAR_TYPE_SPAN|

<h2 id="tocS_query.v1.TimeSeriesReport">query.v1.TimeSeriesReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.timeseriesreport"></a>
<a id="schema_query.v1.TimeSeriesReport"></a>
<a id="tocSquery.v1.timeseriesreport"></a>
<a id="tocsquery.v1.timeseriesreport"></a>

```json
{
  "query": {
    "step": 0,
    "groupBy": [
      "string"
    ],
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  },
  "timeSeries": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "points": [
        {
          "value": 0,
          "timestamp": 0,
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "exemplars": [
            {
              "timestamp": "1730000023000",
              "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
              "spanId": "00f067aa0ba902b7",
              "value": "2450000000",
              "labels": [
                {
                  "name": "service_name",
                  "value": "my_service"
                }
              ],
              "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.TimeSeriesQuery](#schemaquery.v1.timeseriesquery)|false|none|none|
|timeSeries|[[types.v1.Series](#schematypes.v1.series)]|false|none|none|

<h2 id="tocS_query.v1.TreeQuery">query.v1.TreeQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.treequery"></a>
<a id="schema_query.v1.TreeQuery"></a>
<a id="tocSquery.v1.treequery"></a>
<a id="tocsquery.v1.treequery"></a>

```json
{
  "maxNodes": 0,
  "spanSelector": [
    "string"
  ],
  "stackTraceSelector": {
    "callSite": [
      {
        "name": "string"
      }
    ],
    "goPgo": {
      "keepLocations": 0,
      "aggregateCallees": true
    }
  },
  "profileIdSelector": [
    "string"
  ],
  "fullSymbols": true,
  "traceIdSelector": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxNodes|integer \| string(int64)|false|none|none|
|spanSelector|[string]|false|none|none|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|StackTraceSelector is used for filtering stack traces by locations.|
|profileIdSelector|[string]|false|none|none|
|fullSymbols|boolean|false|none|none|
|traceIdSelector|[string]|false|none|none|

<h2 id="tocS_query.v1.TreeReport">query.v1.TreeReport</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.treereport"></a>
<a id="schema_query.v1.TreeReport"></a>
<a id="tocSquery.v1.treereport"></a>
<a id="tocsquery.v1.treereport"></a>

```json
{
  "query": {
    "maxNodes": 0,
    "spanSelector": [
      "string"
    ],
    "stackTraceSelector": {
      "callSite": [
        {
          "name": "string"
        }
      ],
      "goPgo": {
        "keepLocations": 0,
        "aggregateCallees": true
      }
    },
    "profileIdSelector": [
      "string"
    ],
    "fullSymbols": true,
    "traceIdSelector": [
      "string"
    ]
  },
  "tree": "string",
  "symbols": {
    "mappings": [
      {
        "id": 0,
        "memoryStart": 0,
        "memoryLimit": 0,
        "fileOffset": 0,
        "filename": 0,
        "buildId": 0,
        "hasFunctions": true,
        "hasFilenames": true,
        "hasLineNumbers": true,
        "hasInlineFrames": true
      }
    ],
    "locations": [
      {
        "id": 0,
        "mappingId": 0,
        "address": 0,
        "line": [
          {
            "functionId": 0,
            "line": 0
          }
        ],
        "isFolded": true
      }
    ],
    "functions": [
      {
        "id": 0,
        "name": 0,
        "systemName": 0,
        "filename": 0,
        "startLine": 0
      }
    ],
    "strings": [
      "string"
    ],
    "mappingHashes": [
      0
    ],
    "locationHashes": [
      0
    ],
    "functionHashes": [
      0
    ],
    "stringHashes": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query.v1.TreeQuery](#schemaquery.v1.treequery)|false|none|none|
|tree|string(byte)|false|none|none|
|symbols|[query.v1.TreeSymbols](#schemaquery.v1.treesymbols)|false|none|none|

<h2 id="tocS_query.v1.TreeSymbols">query.v1.TreeSymbols</h2>
<!-- backwards compatibility -->
<a id="schemaquery.v1.treesymbols"></a>
<a id="schema_query.v1.TreeSymbols"></a>
<a id="tocSquery.v1.treesymbols"></a>
<a id="tocsquery.v1.treesymbols"></a>

```json
{
  "mappings": [
    {
      "id": 0,
      "memoryStart": 0,
      "memoryLimit": 0,
      "fileOffset": 0,
      "filename": 0,
      "buildId": 0,
      "hasFunctions": true,
      "hasFilenames": true,
      "hasLineNumbers": true,
      "hasInlineFrames": true
    }
  ],
  "locations": [
    {
      "id": 0,
      "mappingId": 0,
      "address": 0,
      "line": [
        {
          "functionId": 0,
          "line": 0
        }
      ],
      "isFolded": true
    }
  ],
  "functions": [
    {
      "id": 0,
      "name": 0,
      "systemName": 0,
      "filename": 0,
      "startLine": 0
    }
  ],
  "strings": [
    "string"
  ],
  "mappingHashes": [
    0
  ],
  "locationHashes": [
    0
  ],
  "functionHashes": [
    0
  ],
  "stringHashes": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|[[google.v1.Mapping](#schemagoogle.v1.mapping)]|false|none|none|
|locations|[[google.v1.Location](#schemagoogle.v1.location)]|false|none|none|
|functions|[[google.v1.Function](#schemagoogle.v1.function)]|false|none|none|
|strings|[string]|false|none|none|
|mappingHashes|[integer \| string(int64)]|false|none|none|
|locationHashes|[integer \| string(int64)]|false|none|none|
|functionHashes|[integer \| string(int64)]|false|none|none|
|stringHashes|[integer \| string(int64)]|false|none|none|

<h2 id="tocS_types.v1.Exemplar">types.v1.Exemplar</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.exemplar"></a>
<a id="schema_types.v1.Exemplar"></a>
<a id="tocStypes.v1.exemplar"></a>
<a id="tocstypes.v1.exemplar"></a>

```json
{
  "timestamp": "1730000023000",
  "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "spanId": "00f067aa0ba902b7",
  "value": "2450000000",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
}
```

Exemplar represents metadata for an individual profile sample.
 Exemplars allow users to drill down from aggregated timeline views
 to specific profile instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer \| string(int64)|false|none|Milliseconds since epoch when the profile was captured.|
|profileId|string|false|none|Unique identifier for the profile (UUID).|
|spanId|string|false|none|Span ID if this profile was split by span during ingestion.|
|value|integer \| string(int64)|false|none|Total sample value for this profile (e.g., CPU nanoseconds, bytes allocated).|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|Labels specific to this exemplar (e.g., pod name, node name). When an exemplar<br> label overlaps with the series label, it is not included here.|
|traceId|string|false|none|Trace ID associated with the span, encoded as 32 lowercase hexadecimal characters.|

<h2 id="tocS_types.v1.ExemplarType">types.v1.ExemplarType</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.exemplartype"></a>
<a id="schema_types.v1.ExemplarType"></a>
<a id="tocStypes.v1.exemplartype"></a>
<a id="tocstypes.v1.exemplartype"></a>

```json
"EXEMPLAR_TYPE_UNSPECIFIED"
```

<h2 id="tocS_types.v1.GoPGO">types.v1.GoPGO</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.gopgo"></a>
<a id="schema_types.v1.GoPGO"></a>
<a id="tocStypes.v1.gopgo"></a>
<a id="tocstypes.v1.gopgo"></a>

```json
{
  "keepLocations": 0,
  "aggregateCallees": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keepLocations|integer|false|none|Specifies the number of leaf locations to keep.|
|aggregateCallees|boolean|false|none|Aggregate callees causes the leaf location line number to be ignored,<br> thus aggregating all callee samples (but not callers).|

<h2 id="tocS_types.v1.LabelPair">types.v1.LabelPair</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelpair"></a>
<a id="schema_types.v1.LabelPair"></a>
<a id="tocStypes.v1.labelpair"></a>
<a id="tocstypes.v1.labelpair"></a>

```json
{
  "name": "service_name",
  "value": "my_service"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Label name|
|value|string|false|none|Label value|

<h2 id="tocS_types.v1.Labels">types.v1.Labels</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labels"></a>
<a id="schema_types.v1.Labels"></a>
<a id="tocStypes.v1.labels"></a>
<a id="tocstypes.v1.labels"></a>

```json
{
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|LabelPair is the key value pairs to identify the corresponding profile|

<h2 id="tocS_types.v1.Location">types.v1.Location</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.location"></a>
<a id="schema_types.v1.Location"></a>
<a id="tocStypes.v1.location"></a>
<a id="tocstypes.v1.location"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_types.v1.Point">types.v1.Point</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.point"></a>
<a id="schema_types.v1.Point"></a>
<a id="tocStypes.v1.point"></a>
<a id="tocstypes.v1.point"></a>

```json
{
  "value": 0,
  "timestamp": 0,
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "exemplars": [
    {
      "timestamp": "1730000023000",
      "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
      "spanId": "00f067aa0ba902b7",
      "value": "2450000000",
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|false|none|none|
|timestamp|integer \| string(int64)|false|none|Milliseconds unix timestamp|
|annotations|[[types.v1.ProfileAnnotation](#schematypes.v1.profileannotation)]|false|none|none|
|exemplars|[[types.v1.Exemplar](#schematypes.v1.exemplar)]|false|none|Exemplars are samples of individual profiles that contributed to this aggregated point|

<h2 id="tocS_types.v1.ProfileAnnotation">types.v1.ProfileAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.profileannotation"></a>
<a id="schema_types.v1.ProfileAnnotation"></a>
<a id="tocStypes.v1.profileannotation"></a>
<a id="tocstypes.v1.profileannotation"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Annotations provide additional metadata for a profile.

 The main differences between labels and annotations are:
   - annotations cannot be used in query selectors
   - annotation keys don't have to be unique

 Currently annotations are applied internally by distributors,
 any annotation passed via the push API will be dropped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Annotation key [hidden]|
|value|string|false|none|Annotation value [hidden]|

<h2 id="tocS_types.v1.Series">types.v1.Series</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.series"></a>
<a id="schema_types.v1.Series"></a>
<a id="tocStypes.v1.series"></a>
<a id="tocstypes.v1.series"></a>

```json
{
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "points": [
    {
      "value": 0,
      "timestamp": 0,
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "exemplars": [
        {
          "timestamp": "1730000023000",
          "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
          "spanId": "00f067aa0ba902b7",
          "value": "2450000000",
          "labels": [
            {
              "name": "service_name",
              "value": "my_service"
            }
          ],
          "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|none|
|points|[[types.v1.Point](#schematypes.v1.point)]|false|none|none|

<h2 id="tocS_types.v1.StackTraceSelector">types.v1.StackTraceSelector</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.stacktraceselector"></a>
<a id="schema_types.v1.StackTraceSelector"></a>
<a id="tocStypes.v1.stacktraceselector"></a>
<a id="tocstypes.v1.stacktraceselector"></a>

```json
{
  "callSite": [
    {
      "name": "string"
    }
  ],
  "goPgo": {
    "keepLocations": 0,
    "aggregateCallees": true
  }
}
```

StackTraceSelector is used for filtering stack traces by locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callSite|[[types.v1.Location](#schematypes.v1.location)]|false|none|Stack trace of the call site. Root at call_site[0].<br> Only stack traces having the prefix provided will be selected.<br> If empty, the filter is ignored.|
|goPgo|[types.v1.GoPGO](#schematypes.v1.gopgo)|false|none|Stack trace selector for profiles purposed for Go PGO.<br> If set, call_site is ignored.|
