<h1 id="querierv1">querier.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="querierv1-scopepublic">scope/public</h1>

This operation is considered part of the public API scope

## Diff returns a diff of two profiles

<a id="opIdquerier.v1.QuerierService.Diff"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/Diff \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "left": {
      "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
      "labelSelector": "{namespace=\"my-namespace\"}",
      "start": "1676282400000",
      "end": "1676289600000",
      "maxNodes": 0,
      "format": "PROFILE_FORMAT_UNSPECIFIED",
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
        "7c9e6679-7425-40de-944b-e07fc1f90ae7"
      ],
      "async": {
        "requestId": "string",
        "type": "ASYNC_QUERY_TYPE_DISABLED"
      },
      "traceIdSelector": [
        "7c9e66797425440de944be07fc1f90ae"
      ],
      "spanSelector": [
        "9a517183f26a089d",
        "5a4fe264a9c987fe"
      ]
    },
    "right": {
      "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
      "labelSelector": "{namespace=\"my-namespace\"}",
      "start": "1676282400000",
      "end": "1676289600000",
      "maxNodes": 0,
      "format": "PROFILE_FORMAT_UNSPECIFIED",
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
        "7c9e6679-7425-40de-944b-e07fc1f90ae7"
      ],
      "async": {
        "requestId": "string",
        "type": "ASYNC_QUERY_TYPE_DISABLED"
      },
      "traceIdSelector": [
        "7c9e66797425440de944be07fc1f90ae"
      ],
      "spanSelector": [
        "9a517183f26a089d",
        "5a4fe264a9c987fe"
      ]
    }
  }'
```

`POST /querier.v1.QuerierService/Diff`

Diff returns a diff of two profiles

> Body parameter

```json
{
  "left": {
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "maxNodes": 0,
    "format": "PROFILE_FORMAT_UNSPECIFIED",
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
      "7c9e6679-7425-40de-944b-e07fc1f90ae7"
    ],
    "async": {
      "requestId": "string",
      "type": "ASYNC_QUERY_TYPE_DISABLED"
    },
    "traceIdSelector": [
      "7c9e66797425440de944be07fc1f90ae"
    ],
    "spanSelector": [
      "9a517183f26a089d",
      "5a4fe264a9c987fe"
    ]
  },
  "right": {
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "maxNodes": 0,
    "format": "PROFILE_FORMAT_UNSPECIFIED",
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
      "7c9e6679-7425-40de-944b-e07fc1f90ae7"
    ],
    "async": {
      "requestId": "string",
      "type": "ASYNC_QUERY_TYPE_DISABLED"
    },
    "traceIdSelector": [
      "7c9e66797425440de944be07fc1f90ae"
    ],
    "spanSelector": [
      "9a517183f26a089d",
      "5a4fe264a9c987fe"
    ]
  }
}
```

<h3 id="diff-returns-a-diff-of-two-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.DiffRequest](#schemaquerier.v1.diffrequest)|true|none|
|» left|body|[querier.v1.SelectMergeStacktracesRequest](#schemaquerier.v1.selectmergestacktracesrequest)|false|The format of each request is ignored; diff queries always compare trees.|
|» right|body|[querier.v1.SelectMergeStacktracesRequest](#schemaquerier.v1.selectmergestacktracesrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "flamegraph": {
    "names": [
      "string"
    ],
    "levels": [
      {
        "values": [
          0
        ]
      }
    ],
    "total": 0,
    "maxSelf": 0,
    "leftTicks": 0,
    "rightTicks": 0
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

<h3 id="diff-returns-a-diff-of-two-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.DiffResponse](#schemaquerier.v1.diffresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## LabelNames returns a list of the existing label names.

<a id="opIdquerier.v1.QuerierService.LabelNames"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/LabelNames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "matchers": [
      "string"
    ],
    "start": "1676282400000",
    "end": "1676289600000"
  }'
```

`POST /querier.v1.QuerierService/LabelNames`

LabelNames returns a list of the existing label names.

> Body parameter

```json
{
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

<h3 id="labelnames-returns-a-list-of-the-existing-label-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[types.v1.LabelNamesRequest](#schematypes.v1.labelnamesrequest)|true|none|
|» matchers|body|[string]|false|List of Label selectors|
|» start|body|integer \| string(int64)|false|Query from this point in time, given in Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Query to this point in time, given in Milliseconds since epoch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "names": [
    "string"
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

<h3 id="labelnames-returns-a-list-of-the-existing-label-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[types.v1.LabelNamesResponse](#schematypes.v1.labelnamesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## LabelValues returns the existing label values for the provided label names.

<a id="opIdquerier.v1.QuerierService.LabelValues"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/LabelValues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "name": "service_name",
    "matchers": [
      "string"
    ],
    "start": "1676282400000",
    "end": "1676289600000"
  }'
```

`POST /querier.v1.QuerierService/LabelValues`

LabelValues returns the existing label values for the provided label names.

> Body parameter

```json
{
  "name": "service_name",
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

<h3 id="labelvalues-returns-the-existing-label-values-for-the-provided-label-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[types.v1.LabelValuesRequest](#schematypes.v1.labelvaluesrequest)|true|none|
|» name|body|string|false|Name of the label|
|» matchers|body|[string]|false|List of Label selectors|
|» start|body|integer \| string(int64)|false|Query from this point in time, given in Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Query to this point in time, given in Milliseconds since epoch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "names": [
    "string"
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

<h3 id="labelvalues-returns-the-existing-label-values-for-the-provided-label-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[types.v1.LabelValuesResponse](#schematypes.v1.labelvaluesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## ProfileType returns a list of the existing profile types.

<a id="opIdquerier.v1.QuerierService.ProfileTypes"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/ProfileTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "start": "1676282400000",
    "end": "1676289600000"
  }'
```

`POST /querier.v1.QuerierService/ProfileTypes`

ProfileType returns a list of the existing profile types.

> Body parameter

```json
{
  "start": "1676282400000",
  "end": "1676289600000"
}
```

<h3 id="profiletype-returns-a-list-of-the-existing-profile-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.ProfileTypesRequest](#schemaquerier.v1.profiletypesrequest)|true|none|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "profileTypes": [
    {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
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

<h3 id="profiletype-returns-a-list-of-the-existing-profile-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.ProfileTypesResponse](#schemaquerier.v1.profiletypesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## SelectHeatmap returns a heatmap visualization for the requested profiles. Note: This endpoint is only available in the v2 storage layer

<a id="opIdquerier.v1.QuerierService.SelectHeatmap"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/SelectHeatmap \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "step": 0,
    "groupBy": [
      "pod"
    ],
    "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED",
    "limit": 0
  }'
```

`POST /querier.v1.QuerierService/SelectHeatmap`

SelectHeatmap returns a heatmap visualization for the requested profiles.
 Note: This endpoint is only available in the v2 storage layer

> Body parameter

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "step": 0,
  "groupBy": [
    "pod"
  ],
  "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
  "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED",
  "limit": 0
}
```

<h3 id="selectheatmap-returns-a-heatmap-visualization-for-the-requested-profiles-note-this-endpoint-is-only-available-in-the-v2-storage-layer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.SelectHeatmapRequest](#schemaquerier.v1.selectheatmaprequest)|true|none|
|» profileTypeID|body|string|false|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|» labelSelector|body|string|false|Label selector string|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» step|body|number(double)|false|Query resolution step width in seconds|
|» groupBy|body|[string]|false|Group by labels|
|» queryType|body|[querier.v1.HeatmapQueryType](#schemaquerier.v1.heatmapquerytype)|false|Query type: individual profiles or span profiles|
|» exemplarType|body|[types.v1.ExemplarType](#schematypes.v1.exemplartype)|false|Type of exemplars to include in the response. Needs to matching query_type or be NONE|
|» limit|body|integer \| string(int64) \| null|false|Select the top N series by total value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|
|» queryType|HEATMAP_QUERY_TYPE_UNSPECIFIED|
|» queryType|HEATMAP_QUERY_TYPE_INDIVIDUAL|
|» queryType|HEATMAP_QUERY_TYPE_SPAN|
|» exemplarType|EXEMPLAR_TYPE_UNSPECIFIED|
|» exemplarType|EXEMPLAR_TYPE_NONE|
|» exemplarType|EXEMPLAR_TYPE_INDIVIDUAL|
|» exemplarType|EXEMPLAR_TYPE_SPAN|

> Example responses

> 200 Response

```json
{
  "series": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "slots": [
        {
          "timestamp": 0,
          "yMin": [
            0
          ],
          "counts": [
            0
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

<h3 id="selectheatmap-returns-a-heatmap-visualization-for-the-requested-profiles-note-this-endpoint-is-only-available-in-the-v2-storage-layer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.SelectHeatmapResponse](#schemaquerier.v1.selectheatmapresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Deprecated: Use SelectMergeStacktraces with PROFILE_FORMAT_PPROF instead. This RPC will remain supported in querier.v1 for backward compatibility; future breaking API changes may be introduced in querier.v2. SelectMergeProfile returns matching profiles aggregated in pprof format. It will contain all information stored (so including filenames and line number, if ingested).

<a id="opIdquerier.v1.QuerierService.SelectMergeProfile"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/SelectMergeProfile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
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
      "7c9e6679-7425-40de-944b-e07fc1f90ae7"
    ],
    "traceIdSelector": [
      "7c9e66797425440de944be07fc1f90ae"
    ]
  }'
```

`POST /querier.v1.QuerierService/SelectMergeProfile`

Deprecated: Use SelectMergeStacktraces with PROFILE_FORMAT_PPROF instead.
 This RPC will remain supported in querier.v1 for backward compatibility;
 future breaking API changes may be introduced in querier.v2.
 SelectMergeProfile returns matching profiles aggregated in pprof format. It
 will contain all information stored (so including filenames and line
 number, if ingested).

> Body parameter

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
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
    "7c9e6679-7425-40de-944b-e07fc1f90ae7"
  ],
  "traceIdSelector": [
    "7c9e66797425440de944be07fc1f90ae"
  ]
}
```

<h3 id="deprecated-use-selectmergestacktraces-with-profileformatpprof-instead-this-rpc-will-remain-supported-in-querierv1-for-backward-compatibility-future-breaking-api-changes-may-be-introduced-in-querierv2-selectmergeprofile-returns-matching-profiles-aggregated-in-pprof-format-it-will-contain-all-information-stored-so-including-filenames-and-line-number-if-ingested-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.SelectMergeProfileRequest](#schemaquerier.v1.selectmergeprofilerequest)|true|none|
|» profileTypeID|body|string|false|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|» labelSelector|body|string|false|Label selector string|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» maxNodes|body|integer \| string(int64) \| null|false|Limit the nodes returned to only show the node with the max_node's biggest<br> total|
|» stackTraceSelector|body|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|Select stack traces that match the provided selector.|
|» profileIdSelector|body|[string]|false|List of Profile UUIDs to query|
|» traceIdSelector|body|[string]|false|List of trace IDs (32 hex characters, 128-bit) to filter samples by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "sampleType": [
    {
      "type": 0,
      "unit": 0
    }
  ],
  "sample": [
    {
      "locationId": [
        0
      ],
      "value": [
        0
      ],
      "label": [
        {
          "key": 0,
          "str": 0,
          "num": 0,
          "numUnit": 0
        }
      ]
    }
  ],
  "mapping": [
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
  "location": [
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
  "function": [
    {
      "id": 0,
      "name": 0,
      "systemName": 0,
      "filename": 0,
      "startLine": 0
    }
  ],
  "stringTable": [
    "string"
  ],
  "dropFrames": 0,
  "keepFrames": 0,
  "timeNanos": 0,
  "durationNanos": 0,
  "periodType": {
    "type": 0,
    "unit": 0
  },
  "period": 0,
  "comment": [
    0
  ],
  "defaultSampleType": 0
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

<h3 id="deprecated-use-selectmergestacktraces-with-profileformatpprof-instead-this-rpc-will-remain-supported-in-querierv1-for-backward-compatibility-future-breaking-api-changes-may-be-introduced-in-querierv2-selectmergeprofile-returns-matching-profiles-aggregated-in-pprof-format-it-will-contain-all-information-stored-so-including-filenames-and-line-number-if-ingested-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[google.v1.Profile](#schemagoogle.v1.profile)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Deprecated: Use SelectMergeStacktraces with span_selector instead. This RPC will remain supported in querier.v1 for backward compatibility; future breaking API changes may be introduced in querier.v2. SelectMergeSpanProfile returns matching profiles aggregated in a flamegraph format. It will combine samples from within the same callstack, with each element being grouped by its function name.

<a id="opIdquerier.v1.QuerierService.SelectMergeSpanProfile"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/SelectMergeSpanProfile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "spanSelector": [
      "9a517183f26a089d",
      "5a4fe264a9c987fe"
    ],
    "start": "1676282400000",
    "end": "1676289600000",
    "maxNodes": 0,
    "format": "PROFILE_FORMAT_UNSPECIFIED"
  }'
```

`POST /querier.v1.QuerierService/SelectMergeSpanProfile`

Deprecated: Use SelectMergeStacktraces with span_selector instead.
 This RPC will remain supported in querier.v1 for backward compatibility;
 future breaking API changes may be introduced in querier.v2.
 SelectMergeSpanProfile returns matching profiles aggregated in a flamegraph
 format. It will combine samples from within the same callstack, with each
 element being grouped by its function name.

> Body parameter

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "spanSelector": [
    "9a517183f26a089d",
    "5a4fe264a9c987fe"
  ],
  "start": "1676282400000",
  "end": "1676289600000",
  "maxNodes": 0,
  "format": "PROFILE_FORMAT_UNSPECIFIED"
}
```

<h3 id="deprecated-use-selectmergestacktraces-with-spanselector-instead-this-rpc-will-remain-supported-in-querierv1-for-backward-compatibility-future-breaking-api-changes-may-be-introduced-in-querierv2-selectmergespanprofile-returns-matching-profiles-aggregated-in-a-flamegraph-format-it-will-combine-samples-from-within-the-same-callstack-with-each-element-being-grouped-by-its-function-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.SelectMergeSpanProfileRequest](#schemaquerier.v1.selectmergespanprofilerequest)|true|none|
|» profileTypeID|body|string|false|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|» labelSelector|body|string|false|Label selector string|
|» spanSelector|body|[string]|false|List of Span IDs to query|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» maxNodes|body|integer \| string(int64) \| null|false|Limit the nodes returned to only show the node with the max_node's biggest<br> total|
|» format|body|[querier.v1.ProfileFormat](#schemaquerier.v1.profileformat)|false|Profile format specifies the format of profile to be returned.<br> If not specified, the profile will be returned in flame graph format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|
|» format|PROFILE_FORMAT_UNSPECIFIED|
|» format|PROFILE_FORMAT_FLAMEGRAPH|
|» format|PROFILE_FORMAT_TREE|
|» format|PROFILE_FORMAT_DOT|
|» format|PROFILE_FORMAT_PPROF|

> Example responses

> 200 Response

```json
{
  "flamegraph": {
    "names": [
      "string"
    ],
    "levels": [
      {
        "values": [
          0
        ]
      }
    ],
    "total": 0,
    "maxSelf": 0
  },
  "tree": "string"
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

<h3 id="deprecated-use-selectmergestacktraces-with-spanselector-instead-this-rpc-will-remain-supported-in-querierv1-for-backward-compatibility-future-breaking-api-changes-may-be-introduced-in-querierv2-selectmergespanprofile-returns-matching-profiles-aggregated-in-a-flamegraph-format-it-will-combine-samples-from-within-the-same-callstack-with-each-element-being-grouped-by-its-function-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.SelectMergeSpanProfileResponse](#schemaquerier.v1.selectmergespanprofileresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## SelectMergeStacktraces returns matching profiles aggregated in a flamegraph format. It will combine samples from within the same callstack, with each element being grouped by its function name.

<a id="opIdquerier.v1.QuerierService.SelectMergeStacktraces"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/SelectMergeStacktraces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "maxNodes": 0,
    "format": "PROFILE_FORMAT_UNSPECIFIED",
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
      "7c9e6679-7425-40de-944b-e07fc1f90ae7"
    ],
    "async": {
      "requestId": "string",
      "type": "ASYNC_QUERY_TYPE_DISABLED"
    },
    "traceIdSelector": [
      "7c9e66797425440de944be07fc1f90ae"
    ],
    "spanSelector": [
      "9a517183f26a089d",
      "5a4fe264a9c987fe"
    ]
  }'
```

`POST /querier.v1.QuerierService/SelectMergeStacktraces`

SelectMergeStacktraces returns matching profiles aggregated in a flamegraph
 format. It will combine samples from within the same callstack, with each
 element being grouped by its function name.

> Body parameter

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "maxNodes": 0,
  "format": "PROFILE_FORMAT_UNSPECIFIED",
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
    "7c9e6679-7425-40de-944b-e07fc1f90ae7"
  ],
  "async": {
    "requestId": "string",
    "type": "ASYNC_QUERY_TYPE_DISABLED"
  },
  "traceIdSelector": [
    "7c9e66797425440de944be07fc1f90ae"
  ],
  "spanSelector": [
    "9a517183f26a089d",
    "5a4fe264a9c987fe"
  ]
}
```

<h3 id="selectmergestacktraces-returns-matching-profiles-aggregated-in-a-flamegraph-format-it-will-combine-samples-from-within-the-same-callstack-with-each-element-being-grouped-by-its-function-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.SelectMergeStacktracesRequest](#schemaquerier.v1.selectmergestacktracesrequest)|true|none|
|» profileTypeID|body|string|false|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|» labelSelector|body|string|false|Label selector string|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» maxNodes|body|integer \| string(int64) \| null|false|Limit the nodes returned to only show the node with the max_node's biggest<br> total|
|» format|body|[querier.v1.ProfileFormat](#schemaquerier.v1.profileformat)|false|Profile format specifies the format of profile to be returned.<br> If not specified, the profile will be returned in flame graph format.|
|» stackTraceSelector|body|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|Select stack traces that match the provided selector.|
|» profileIdSelector|body|[string]|false|List of Profile UUIDs to query|
|» async|body|[querier.v1.AsyncQueryRequest](#schemaquerier.v1.asyncqueryrequest)|false|(experimental) Used for making and polling async queries.|
|» traceIdSelector|body|[string]|false|List of trace IDs (32 hex characters, 128-bit) to filter samples by.|
|» spanSelector|body|[string]|false|List of span IDs (16 hex characters, 64-bit) to filter samples by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|
|» format|PROFILE_FORMAT_UNSPECIFIED|
|» format|PROFILE_FORMAT_FLAMEGRAPH|
|» format|PROFILE_FORMAT_TREE|
|» format|PROFILE_FORMAT_DOT|
|» format|PROFILE_FORMAT_PPROF|

> Example responses

> 200 Response

```json
{
  "flamegraph": {
    "names": [
      "string"
    ],
    "levels": [
      {
        "values": [
          0
        ]
      }
    ],
    "total": 0,
    "maxSelf": 0
  },
  "tree": "string",
  "dot": "string",
  "async": {
    "requestId": "string",
    "status": "ASYNC_QUERY_STATUS_UNKNOWN",
    "errorMessage": "string"
  },
  "pprof": {
    "profile": {
      "sampleType": [
        {
          "type": 0,
          "unit": 0
        }
      ],
      "sample": [
        {
          "locationId": [
            0
          ],
          "value": [
            0
          ],
          "label": [
            {
              "key": 0,
              "str": 0,
              "num": 0,
              "numUnit": 0
            }
          ]
        }
      ],
      "mapping": [
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
      "location": [
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
      "function": [
        {
          "id": 0,
          "name": 0,
          "systemName": 0,
          "filename": 0,
          "startLine": 0
        }
      ],
      "stringTable": [
        "string"
      ],
      "dropFrames": 0,
      "keepFrames": 0,
      "timeNanos": 0,
      "durationNanos": 0,
      "periodType": {
        "type": 0,
        "unit": 0
      },
      "period": 0,
      "comment": [
        0
      ],
      "defaultSampleType": 0
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

<h3 id="selectmergestacktraces-returns-matching-profiles-aggregated-in-a-flamegraph-format-it-will-combine-samples-from-within-the-same-callstack-with-each-element-being-grouped-by-its-function-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.SelectMergeStacktracesResponse](#schemaquerier.v1.selectmergestacktracesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## SelectSeries returns a time series for the total sum of the requested profiles.

<a id="opIdquerier.v1.QuerierService.SelectSeries"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/SelectSeries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "groupBy": [
      "pod"
    ],
    "step": 0,
    "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM",
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
    "limit": 0,
    "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
  }'
```

`POST /querier.v1.QuerierService/SelectSeries`

SelectSeries returns a time series for the total sum of the requested
 profiles.

> Body parameter

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "groupBy": [
    "pod"
  ],
  "step": 0,
  "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM",
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
  "limit": 0,
  "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
}
```

<h3 id="selectseries-returns-a-time-series-for-the-total-sum-of-the-requested-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.SelectSeriesRequest](#schemaquerier.v1.selectseriesrequest)|true|none|
|» profileTypeID|body|string|false|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|» labelSelector|body|string|false|Label selector string|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» groupBy|body|[string]|false|none|
|» step|body|number(double)|false|none|
|» aggregation|body|[types.v1.TimeSeriesAggregationType](#schematypes.v1.timeseriesaggregationtype)|false|Query resolution step width in seconds|
|» stackTraceSelector|body|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|Select stack traces that match the provided selector.|
|» limit|body|integer \| string(int64) \| null|false|Select the top N series by total value.|
|» exemplarType|body|[types.v1.ExemplarType](#schematypes.v1.exemplartype)|false|Type of exemplars to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|
|» aggregation|TIME_SERIES_AGGREGATION_TYPE_SUM|
|» aggregation|TIME_SERIES_AGGREGATION_TYPE_AVERAGE|
|» exemplarType|EXEMPLAR_TYPE_UNSPECIFIED|
|» exemplarType|EXEMPLAR_TYPE_NONE|
|» exemplarType|EXEMPLAR_TYPE_INDIVIDUAL|
|» exemplarType|EXEMPLAR_TYPE_SPAN|

> Example responses

> 200 Response

```json
{
  "series": [
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

<h3 id="selectseries-returns-a-time-series-for-the-total-sum-of-the-requested-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.SelectSeriesResponse](#schemaquerier.v1.selectseriesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Series returns profiles series matching the request. A series is a unique label set.

<a id="opIdquerier.v1.QuerierService.Series"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/Series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "matchers": [
      "{namespace=\"my-namespace\"}"
    ],
    "labelNames": [
      "string"
    ],
    "start": "1676282400000",
    "end": "1676289600000"
  }'
```

`POST /querier.v1.QuerierService/Series`

Series returns profiles series matching the request. A series is a unique
 label set.

> Body parameter

```json
{
  "matchers": [
    "{namespace=\"my-namespace\"}"
  ],
  "labelNames": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

<h3 id="series-returns-profiles-series-matching-the-request-a-series-is-a-unique-label-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.SeriesRequest](#schemaquerier.v1.seriesrequest)|true|none|
|» matchers|body|[string]|false|List of label selector to apply to the result.|
|» labelNames|body|[string]|false|List of label_names to request. If empty will return all label names in the<br> result.|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|» end|body|integer \| string(int64)|false|queried.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "labelsSet": [
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

<h3 id="series-returns-profiles-series-matching-the-request-a-series-is-a-unique-label-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.SeriesResponse](#schemaquerier.v1.seriesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="querierv1-scopeinternal">scope/internal</h1>

This operation is considered part of the interal API scope. There are no stability guaraentees when using those APIs.

## AnalyzeQuery

<a id="opIdquerier.v1.QuerierService.AnalyzeQuery"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/AnalyzeQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "start": 0,
    "end": 0,
    "query": "string"
  }'
```

`POST /querier.v1.QuerierService/AnalyzeQuery`

> Body parameter

```json
{
  "start": 0,
  "end": 0,
  "query": "string"
}
```

<h3 id="analyzequery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.AnalyzeQueryRequest](#schemaquerier.v1.analyzequeryrequest)|true|none|
|» start|body|integer \| string(int64)|false|none|
|» end|body|integer \| string(int64)|false|none|
|» query|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "queryScopes": [
    {
      "componentType": "string",
      "componentCount": 0,
      "blockCount": 0,
      "seriesCount": 0,
      "profileCount": 0,
      "sampleCount": 0,
      "indexBytes": 0,
      "profileBytes": 0,
      "symbolBytes": 0
    }
  ],
  "queryImpact": {
    "totalBytesInTimeRange": 0,
    "totalQueriedSeries": 0,
    "deduplicationNeeded": true
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

<h3 id="analyzequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.AnalyzeQueryResponse](#schemaquerier.v1.analyzequeryresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetProfileStats returns profile stats for the current tenant.

<a id="opIdquerier.v1.QuerierService.GetProfileStats"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/GetProfileStats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /querier.v1.QuerierService/GetProfileStats`

GetProfileStats returns profile stats for the current tenant.

> Body parameter

```json
{}
```

<h3 id="getprofilestats-returns-profile-stats-for-the-current-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[types.v1.GetProfileStatsRequest](#schematypes.v1.getprofilestatsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "dataIngested": true,
  "oldestProfileTime": 0,
  "newestProfileTime": 0
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

<h3 id="getprofilestats-returns-profile-stats-for-the-current-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[types.v1.GetProfileStatsResponse](#schematypes.v1.getprofilestatsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## (Experimental) QueryAnomalies returns stacktrace anomalies and detected time-series changes for matching profiles, according to anomaly_types.

<a id="opIdquerier.v1.QuerierService.QueryAnomalies"></a>

> Code samples

```bash
curl http://localhost:4040/querier.v1.QuerierService/QueryAnomalies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "anomalyTypes": [
      "ANOMALY_TYPE_UNSPECIFIED"
    ],
    "timeSeries": {
      "groupBy": [
        "pod"
      ],
      "step": 0,
      "limit": 0
    }
  }'
```

`POST /querier.v1.QuerierService/QueryAnomalies`

(Experimental) QueryAnomalies returns stacktrace anomalies and detected
 time-series changes for matching profiles, according to anomaly_types.

> Body parameter

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "anomalyTypes": [
    "ANOMALY_TYPE_UNSPECIFIED"
  ],
  "timeSeries": {
    "groupBy": [
      "pod"
    ],
    "step": 0,
    "limit": 0
  }
}
```

<h3 id="experimental-queryanomalies-returns-stacktrace-anomalies-and-detected-time-series-changes-for-matching-profiles-according-to-anomalytypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[querier.v1.QueryAnomaliesRequest](#schemaquerier.v1.queryanomaliesrequest)|true|none|
|» profileTypeID|body|string|false|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|» labelSelector|body|string|false|Label selector string|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» anomalyTypes|body|[[querier.v1.AnomalyType](#schemaquerier.v1.anomalytype)]|false|Which anomaly sources to consult.|
|» timeSeries|body|[querier.v1.AnomalyTimeSeriesRequest](#schemaquerier.v1.anomalytimeseriesrequest)|false|Required when ANOMALY_TYPE_TIME_SERIES is requested; there is no default step.<br> Ignored when ANOMALY_TYPE_TIME_SERIES is not requested.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|
|» anomalyTypes|ANOMALY_TYPE_UNSPECIFIED|
|» anomalyTypes|ANOMALY_TYPE_STACKTRACE|
|» anomalyTypes|ANOMALY_TYPE_TIME_SERIES|

> Example responses

> 200 Response

```json
{
  "stacktraceAnomalies": [
    {
      "profileId": "string",
      "timestamp": "1676282400000",
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "score": 0
    }
  ],
  "timeSeriesAnomalies": [
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

<h3 id="experimental-queryanomalies-returns-stacktrace-anomalies-and-detected-time-series-changes-for-matching-profiles-according-to-anomalytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[querier.v1.QueryAnomaliesResponse](#schemaquerier.v1.queryanomaliesresponse)|
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

<h2 id="tocS_google.v1.Label">google.v1.Label</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.label"></a>
<a id="schema_google.v1.Label"></a>
<a id="tocSgoogle.v1.label"></a>
<a id="tocsgoogle.v1.label"></a>

```json
{
  "key": 0,
  "str": 0,
  "num": 0,
  "numUnit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer \| string(int64)|false|none|Index into string table|
|str|integer \| string(int64)|false|none|At most one of the following must be present Index into string table|
|num|integer \| string(int64)|false|none|none|
|numUnit|integer \| string(int64)|false|none|Should only be present when num is present.<br> Specifies the units of num.<br> Use arbitrary string (for example, "requests") as a custom count unit.<br> If no unit is specified, consumer may apply heuristic to deduce the unit.<br> Consumers may also  interpret units like "bytes" and "kilobytes" as memory<br> units and units like "seconds" and "nanoseconds" as time units,<br> and apply appropriate unit conversions to these. Index into string table|

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

<h2 id="tocS_google.v1.Profile">google.v1.Profile</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.profile"></a>
<a id="schema_google.v1.Profile"></a>
<a id="tocSgoogle.v1.profile"></a>
<a id="tocsgoogle.v1.profile"></a>

```json
{
  "sampleType": [
    {
      "type": 0,
      "unit": 0
    }
  ],
  "sample": [
    {
      "locationId": [
        0
      ],
      "value": [
        0
      ],
      "label": [
        {
          "key": 0,
          "str": 0,
          "num": 0,
          "numUnit": 0
        }
      ]
    }
  ],
  "mapping": [
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
  "location": [
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
  "function": [
    {
      "id": 0,
      "name": 0,
      "systemName": 0,
      "filename": 0,
      "startLine": 0
    }
  ],
  "stringTable": [
    "string"
  ],
  "dropFrames": 0,
  "keepFrames": 0,
  "timeNanos": 0,
  "durationNanos": 0,
  "periodType": {
    "type": 0,
    "unit": 0
  },
  "period": 0,
  "comment": [
    0
  ],
  "defaultSampleType": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sampleType|[[google.v1.ValueType](#schemagoogle.v1.valuetype)]|false|none|A description of the samples associated with each Sample.value.<br> For a cpu profile this might be:<br>   [["cpu","nanoseconds"]] or [["wall","seconds"]] or [["syscall","count"]]<br> For a heap profile, this might be:<br>   [["allocations","count"], ["space","bytes"]],<br> If one of the values represents the number of events represented<br> by the sample, by convention it should be at index 0 and use<br> sample_type.unit == "count".|
|sample|[[google.v1.Sample](#schemagoogle.v1.sample)]|false|none|The set of samples recorded in this profile.|
|mapping|[[google.v1.Mapping](#schemagoogle.v1.mapping)]|false|none|Mapping from address ranges to the image/binary/library mapped<br> into that address range.  mapping[0] will be the main binary.|
|location|[[google.v1.Location](#schemagoogle.v1.location)]|false|none|Useful program location|
|function|[[google.v1.Function](#schemagoogle.v1.function)]|false|none|Functions referenced by locations|
|stringTable|[string]|false|none|A common table for strings referenced by various messages.<br> string_table[0] must always be "".|
|dropFrames|integer \| string(int64)|false|none|frames with Function.function_name fully matching the following<br> regexp will be dropped from the samples, along with their successors. Index into string table.|
|keepFrames|integer \| string(int64)|false|none|frames with Function.function_name fully matching the following<br> regexp will be kept, even if it matches drop_frames. Index into string table.|
|timeNanos|integer \| string(int64)|false|none|Time of collection (UTC) represented as nanoseconds past the epoch.|
|durationNanos|integer \| string(int64)|false|none|Duration of the profile, if a duration makes sense.|
|periodType|[google.v1.ValueType](#schemagoogle.v1.valuetype)|false|none|The kind of events between sampled ocurrences.<br> e.g [ "cpu","cycles" ] or [ "heap","bytes" ]|
|period|integer \| string(int64)|false|none|The number of events between sampled occurrences.|
|comment|[integer \| string(int64)]|false|none|Freeform text associated to the profile. Indices into string table.|
|defaultSampleType|integer \| string(int64)|false|none|Index into the string table of the type of the preferred sample<br> value. If unset, clients should default to the last sample value.|

<h2 id="tocS_google.v1.Sample">google.v1.Sample</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.sample"></a>
<a id="schema_google.v1.Sample"></a>
<a id="tocSgoogle.v1.sample"></a>
<a id="tocsgoogle.v1.sample"></a>

```json
{
  "locationId": [
    0
  ],
  "value": [
    0
  ],
  "label": [
    {
      "key": 0,
      "str": 0,
      "num": 0,
      "numUnit": 0
    }
  ]
}
```

Each Sample records values encountered in some program
 context. The program context is typically a stack trace, perhaps
 augmented with auxiliary information like the thread-id, some
 indicator of a higher level request being handled etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationId|[integer \| string(int64)]|false|none|The ids recorded here correspond to a Profile.location.id.<br> The leaf is at location_id[0].|
|value|[integer \| string(int64)]|false|none|The type and unit of each value is defined by the corresponding<br> entry in Profile.sample_type. All samples must have the same<br> number of values, the same as the length of Profile.sample_type.<br> When aggregating multiple samples into a single sample, the<br> result has a list of values that is the element-wise sum of the<br> lists of the originals.|
|label|[[google.v1.Label](#schemagoogle.v1.label)]|false|none|label includes additional context for this sample. It can include<br> things like a thread id, allocation size, etc|

<h2 id="tocS_google.v1.ValueType">google.v1.ValueType</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.v1.valuetype"></a>
<a id="schema_google.v1.ValueType"></a>
<a id="tocSgoogle.v1.valuetype"></a>
<a id="tocsgoogle.v1.valuetype"></a>

```json
{
  "type": 0,
  "unit": 0
}
```

ValueType describes the semantics and measurement units of a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|integer \| string(int64)|false|none|Index into string table.|
|unit|integer \| string(int64)|false|none|Index into string table.|

<h2 id="tocS_querier.v1.AnalyzeQueryRequest">querier.v1.AnalyzeQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.analyzequeryrequest"></a>
<a id="schema_querier.v1.AnalyzeQueryRequest"></a>
<a id="tocSquerier.v1.analyzequeryrequest"></a>
<a id="tocsquerier.v1.analyzequeryrequest"></a>

```json
{
  "start": 0,
  "end": 0,
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer \| string(int64)|false|none|none|
|end|integer \| string(int64)|false|none|none|
|query|string|false|none|none|

<h2 id="tocS_querier.v1.AnalyzeQueryResponse">querier.v1.AnalyzeQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.analyzequeryresponse"></a>
<a id="schema_querier.v1.AnalyzeQueryResponse"></a>
<a id="tocSquerier.v1.analyzequeryresponse"></a>
<a id="tocsquerier.v1.analyzequeryresponse"></a>

```json
{
  "queryScopes": [
    {
      "componentType": "string",
      "componentCount": 0,
      "blockCount": 0,
      "seriesCount": 0,
      "profileCount": 0,
      "sampleCount": 0,
      "indexBytes": 0,
      "profileBytes": 0,
      "symbolBytes": 0
    }
  ],
  "queryImpact": {
    "totalBytesInTimeRange": 0,
    "totalQueriedSeries": 0,
    "deduplicationNeeded": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryScopes|[[querier.v1.QueryScope](#schemaquerier.v1.queryscope)]|false|none|detailed view of what the query will require|
|queryImpact|[querier.v1.QueryImpact](#schemaquerier.v1.queryimpact)|false|none|summary of the query impact / performance|

<h2 id="tocS_querier.v1.AnomalyTimeSeriesRequest">querier.v1.AnomalyTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.anomalytimeseriesrequest"></a>
<a id="schema_querier.v1.AnomalyTimeSeriesRequest"></a>
<a id="tocSquerier.v1.anomalytimeseriesrequest"></a>
<a id="tocsquerier.v1.anomalytimeseriesrequest"></a>

```json
{
  "groupBy": [
    "pod"
  ],
  "step": 0,
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupBy|[string]|false|none|Labels used to group matching profiles into series.<br> If empty, all matching profiles are aggregated into a single series.|
|step|number(double)|false|none|Query resolution step width in seconds. Must be at least 0.001 (1 ms).<br> Unset or zero is invalid; there is no default.|
|limit|integer \| string(int64) \| null|false|none|Retain all anomalies from the top N series by highest event priority_score.<br> If unset, zero, or negative, no limit is applied.|

<h2 id="tocS_querier.v1.AnomalyType">querier.v1.AnomalyType</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.anomalytype"></a>
<a id="schema_querier.v1.AnomalyType"></a>
<a id="tocSquerier.v1.anomalytype"></a>
<a id="tocsquerier.v1.anomalytype"></a>

```json
"ANOMALY_TYPE_UNSPECIFIED"
```

<h2 id="tocS_querier.v1.AsyncQueryRequest">querier.v1.AsyncQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.asyncqueryrequest"></a>
<a id="schema_querier.v1.AsyncQueryRequest"></a>
<a id="tocSquerier.v1.asyncqueryrequest"></a>
<a id="tocsquerier.v1.asyncqueryrequest"></a>

```json
{
  "requestId": "string",
  "type": "ASYNC_QUERY_TYPE_DISABLED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|If set, this is a polling request.|
|type|[querier.v1.AsyncQueryType](#schemaquerier.v1.asyncquerytype)|false|none|Sets the kind of async query.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ASYNC_QUERY_TYPE_DISABLED|
|type|ASYNC_QUERY_TYPE_FORCE|

<h2 id="tocS_querier.v1.AsyncQueryResponse">querier.v1.AsyncQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.asyncqueryresponse"></a>
<a id="schema_querier.v1.AsyncQueryResponse"></a>
<a id="tocSquerier.v1.asyncqueryresponse"></a>
<a id="tocsquerier.v1.asyncqueryresponse"></a>

```json
{
  "requestId": "string",
  "status": "ASYNC_QUERY_STATUS_UNKNOWN",
  "errorMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Id of the async query.|
|status|[querier.v1.AsyncQueryStatus](#schemaquerier.v1.asyncquerystatus)|false|none|Status of the query: unknown, in_progress, success, failed|
|errorMessage|string|false|none|Populated on FAILURE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ASYNC_QUERY_STATUS_UNKNOWN|
|status|ASYNC_QUERY_STATUS_IN_PROGRESS|
|status|ASYNC_QUERY_STATUS_SUCCESS|
|status|ASYNC_QUERY_STATUS_FAILURE|

<h2 id="tocS_querier.v1.AsyncQueryStatus">querier.v1.AsyncQueryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.asyncquerystatus"></a>
<a id="schema_querier.v1.AsyncQueryStatus"></a>
<a id="tocSquerier.v1.asyncquerystatus"></a>
<a id="tocsquerier.v1.asyncquerystatus"></a>

```json
"ASYNC_QUERY_STATUS_UNKNOWN"
```

<h2 id="tocS_querier.v1.AsyncQueryType">querier.v1.AsyncQueryType</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.asyncquerytype"></a>
<a id="schema_querier.v1.AsyncQueryType"></a>
<a id="tocSquerier.v1.asyncquerytype"></a>
<a id="tocsquerier.v1.asyncquerytype"></a>

```json
"ASYNC_QUERY_TYPE_DISABLED"
```

<h2 id="tocS_querier.v1.DiffRequest">querier.v1.DiffRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.diffrequest"></a>
<a id="schema_querier.v1.DiffRequest"></a>
<a id="tocSquerier.v1.diffrequest"></a>
<a id="tocsquerier.v1.diffrequest"></a>

```json
{
  "left": {
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "maxNodes": 0,
    "format": "PROFILE_FORMAT_UNSPECIFIED",
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
      "7c9e6679-7425-40de-944b-e07fc1f90ae7"
    ],
    "async": {
      "requestId": "string",
      "type": "ASYNC_QUERY_TYPE_DISABLED"
    },
    "traceIdSelector": [
      "7c9e66797425440de944be07fc1f90ae"
    ],
    "spanSelector": [
      "9a517183f26a089d",
      "5a4fe264a9c987fe"
    ]
  },
  "right": {
    "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
    "labelSelector": "{namespace=\"my-namespace\"}",
    "start": "1676282400000",
    "end": "1676289600000",
    "maxNodes": 0,
    "format": "PROFILE_FORMAT_UNSPECIFIED",
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
      "7c9e6679-7425-40de-944b-e07fc1f90ae7"
    ],
    "async": {
      "requestId": "string",
      "type": "ASYNC_QUERY_TYPE_DISABLED"
    },
    "traceIdSelector": [
      "7c9e66797425440de944be07fc1f90ae"
    ],
    "spanSelector": [
      "9a517183f26a089d",
      "5a4fe264a9c987fe"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|left|[querier.v1.SelectMergeStacktracesRequest](#schemaquerier.v1.selectmergestacktracesrequest)|false|none|The format of each request is ignored; diff queries always compare trees.|
|right|[querier.v1.SelectMergeStacktracesRequest](#schemaquerier.v1.selectmergestacktracesrequest)|false|none|none|

<h2 id="tocS_querier.v1.DiffResponse">querier.v1.DiffResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.diffresponse"></a>
<a id="schema_querier.v1.DiffResponse"></a>
<a id="tocSquerier.v1.diffresponse"></a>
<a id="tocsquerier.v1.diffresponse"></a>

```json
{
  "flamegraph": {
    "names": [
      "string"
    ],
    "levels": [
      {
        "values": [
          0
        ]
      }
    ],
    "total": 0,
    "maxSelf": 0,
    "leftTicks": 0,
    "rightTicks": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flamegraph|[querier.v1.FlameGraphDiff](#schemaquerier.v1.flamegraphdiff)|false|none|none|

<h2 id="tocS_querier.v1.FlameGraph">querier.v1.FlameGraph</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.flamegraph"></a>
<a id="schema_querier.v1.FlameGraph"></a>
<a id="tocSquerier.v1.flamegraph"></a>
<a id="tocsquerier.v1.flamegraph"></a>

```json
{
  "names": [
    "string"
  ],
  "levels": [
    {
      "values": [
        0
      ]
    }
  ],
  "total": 0,
  "maxSelf": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|
|levels|[[querier.v1.Level](#schemaquerier.v1.level)]|false|none|none|
|total|integer \| string(int64)|false|none|none|
|maxSelf|integer \| string(int64)|false|none|none|

<h2 id="tocS_querier.v1.FlameGraphDiff">querier.v1.FlameGraphDiff</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.flamegraphdiff"></a>
<a id="schema_querier.v1.FlameGraphDiff"></a>
<a id="tocSquerier.v1.flamegraphdiff"></a>
<a id="tocsquerier.v1.flamegraphdiff"></a>

```json
{
  "names": [
    "string"
  ],
  "levels": [
    {
      "values": [
        0
      ]
    }
  ],
  "total": 0,
  "maxSelf": 0,
  "leftTicks": 0,
  "rightTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|
|levels|[[querier.v1.Level](#schemaquerier.v1.level)]|false|none|none|
|total|integer \| string(int64)|false|none|none|
|maxSelf|integer \| string(int64)|false|none|none|
|leftTicks|integer \| string(int64)|false|none|none|
|rightTicks|integer \| string(int64)|false|none|none|

<h2 id="tocS_querier.v1.HeatmapQueryType">querier.v1.HeatmapQueryType</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.heatmapquerytype"></a>
<a id="schema_querier.v1.HeatmapQueryType"></a>
<a id="tocSquerier.v1.heatmapquerytype"></a>
<a id="tocsquerier.v1.heatmapquerytype"></a>

```json
"HEATMAP_QUERY_TYPE_UNSPECIFIED"
```

<h2 id="tocS_querier.v1.Level">querier.v1.Level</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.level"></a>
<a id="schema_querier.v1.Level"></a>
<a id="tocSquerier.v1.level"></a>
<a id="tocsquerier.v1.level"></a>

```json
{
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[integer \| string(int64)]|false|none|none|

<h2 id="tocS_querier.v1.PprofProfile">querier.v1.PprofProfile</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.pprofprofile"></a>
<a id="schema_querier.v1.PprofProfile"></a>
<a id="tocSquerier.v1.pprofprofile"></a>
<a id="tocsquerier.v1.pprofprofile"></a>

```json
{
  "profile": {
    "sampleType": [
      {
        "type": 0,
        "unit": 0
      }
    ],
    "sample": [
      {
        "locationId": [
          0
        ],
        "value": [
          0
        ],
        "label": [
          {
            "key": 0,
            "str": 0,
            "num": 0,
            "numUnit": 0
          }
        ]
      }
    ],
    "mapping": [
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
    "location": [
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
    "function": [
      {
        "id": 0,
        "name": 0,
        "systemName": 0,
        "filename": 0,
        "startLine": 0
      }
    ],
    "stringTable": [
      "string"
    ],
    "dropFrames": 0,
    "keepFrames": 0,
    "timeNanos": 0,
    "durationNanos": 0,
    "periodType": {
      "type": 0,
      "unit": 0
    },
    "period": 0,
    "comment": [
      0
    ],
    "defaultSampleType": 0
  }
}
```

PprofProfile contains pprof output and related response metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|[google.v1.Profile](#schemagoogle.v1.profile)|false|none|none|

<h2 id="tocS_querier.v1.ProfileFormat">querier.v1.ProfileFormat</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.profileformat"></a>
<a id="schema_querier.v1.ProfileFormat"></a>
<a id="tocSquerier.v1.profileformat"></a>
<a id="tocsquerier.v1.profileformat"></a>

```json
"PROFILE_FORMAT_UNSPECIFIED"
```

<h2 id="tocS_querier.v1.ProfileTypesRequest">querier.v1.ProfileTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.profiletypesrequest"></a>
<a id="schema_querier.v1.ProfileTypesRequest"></a>
<a id="tocSquerier.v1.profiletypesrequest"></a>
<a id="tocsquerier.v1.profiletypesrequest"></a>

```json
{
  "start": "1676282400000",
  "end": "1676289600000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|

<h2 id="tocS_querier.v1.ProfileTypesResponse">querier.v1.ProfileTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.profiletypesresponse"></a>
<a id="schema_querier.v1.ProfileTypesResponse"></a>
<a id="tocSquerier.v1.profiletypesresponse"></a>
<a id="tocsquerier.v1.profiletypesresponse"></a>

```json
{
  "profileTypes": [
    {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypes|[[types.v1.ProfileType](#schematypes.v1.profiletype)]|false|none|none|

<h2 id="tocS_querier.v1.QueryAnomaliesRequest">querier.v1.QueryAnomaliesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.queryanomaliesrequest"></a>
<a id="schema_querier.v1.QueryAnomaliesRequest"></a>
<a id="tocSquerier.v1.queryanomaliesrequest"></a>
<a id="tocsquerier.v1.queryanomaliesrequest"></a>

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "anomalyTypes": [
    "ANOMALY_TYPE_UNSPECIFIED"
  ],
  "timeSeries": {
    "groupBy": [
      "pod"
    ],
    "step": 0,
    "limit": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypeID|string|false|none|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|labelSelector|string|false|none|Label selector string|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|anomalyTypes|[[querier.v1.AnomalyType](#schemaquerier.v1.anomalytype)]|false|none|Which anomaly sources to consult.|
|timeSeries|[querier.v1.AnomalyTimeSeriesRequest](#schemaquerier.v1.anomalytimeseriesrequest)|false|none|Required when ANOMALY_TYPE_TIME_SERIES is requested; there is no default step.<br> Ignored when ANOMALY_TYPE_TIME_SERIES is not requested.|

#### Enumerated Values

|Property|Value|
|---|---|
|anomalyTypes|ANOMALY_TYPE_UNSPECIFIED|
|anomalyTypes|ANOMALY_TYPE_STACKTRACE|
|anomalyTypes|ANOMALY_TYPE_TIME_SERIES|

<h2 id="tocS_querier.v1.QueryAnomaliesResponse">querier.v1.QueryAnomaliesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.queryanomaliesresponse"></a>
<a id="schema_querier.v1.QueryAnomaliesResponse"></a>
<a id="tocSquerier.v1.queryanomaliesresponse"></a>
<a id="tocsquerier.v1.queryanomaliesresponse"></a>

```json
{
  "stacktraceAnomalies": [
    {
      "profileId": "string",
      "timestamp": "1676282400000",
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "score": 0
    }
  ],
  "timeSeriesAnomalies": [
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
|stacktraceAnomalies|[[querier.v1.StacktraceAnomaly](#schemaquerier.v1.stacktraceanomaly)]|false|none|Profiles flagged by the stacktrace anomaly source and confirmed present for the given<br> label selector and time range. Populated when ANOMALY_TYPE_STACKTRACE is requested.|
|timeSeriesAnomalies|[[querier.v1.TimeSeriesAnomaly](#schemaquerier.v1.timeseriesanomaly)]|false|none|Detected time-series changes, populated when ANOMALY_TYPE_TIME_SERIES is requested.|

<h2 id="tocS_querier.v1.QueryImpact">querier.v1.QueryImpact</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.queryimpact"></a>
<a id="schema_querier.v1.QueryImpact"></a>
<a id="tocSquerier.v1.queryimpact"></a>
<a id="tocsquerier.v1.queryimpact"></a>

```json
{
  "totalBytesInTimeRange": 0,
  "totalQueriedSeries": 0,
  "deduplicationNeeded": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalBytesInTimeRange|integer \| string(int64)|false|none|none|
|totalQueriedSeries|integer \| string(int64)|false|none|none|
|deduplicationNeeded|boolean|false|none|none|

<h2 id="tocS_querier.v1.QueryScope">querier.v1.QueryScope</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.queryscope"></a>
<a id="schema_querier.v1.QueryScope"></a>
<a id="tocSquerier.v1.queryscope"></a>
<a id="tocsquerier.v1.queryscope"></a>

```json
{
  "componentType": "string",
  "componentCount": 0,
  "blockCount": 0,
  "seriesCount": 0,
  "profileCount": 0,
  "sampleCount": 0,
  "indexBytes": 0,
  "profileBytes": 0,
  "symbolBytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentType|string|false|none|a descriptive high level name of the component processing one part|
|componentCount|integer \| string(int64)|false|none|of the query (e.g., "short term storage") how many components of this type will process|
|blockCount|integer \| string(int64)|false|none|none|
|seriesCount|integer \| string(int64)|false|none|none|
|profileCount|integer \| string(int64)|false|none|none|
|sampleCount|integer \| string(int64)|false|none|none|
|indexBytes|integer \| string(int64)|false|none|none|
|profileBytes|integer \| string(int64)|false|none|none|
|symbolBytes|integer \| string(int64)|false|none|none|

<h2 id="tocS_querier.v1.SelectHeatmapRequest">querier.v1.SelectHeatmapRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectheatmaprequest"></a>
<a id="schema_querier.v1.SelectHeatmapRequest"></a>
<a id="tocSquerier.v1.selectheatmaprequest"></a>
<a id="tocsquerier.v1.selectheatmaprequest"></a>

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "step": 0,
  "groupBy": [
    "pod"
  ],
  "queryType": "HEATMAP_QUERY_TYPE_UNSPECIFIED",
  "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED",
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypeID|string|false|none|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|labelSelector|string|false|none|Label selector string|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|step|number(double)|false|none|Query resolution step width in seconds|
|groupBy|[string]|false|none|Group by labels|
|queryType|[querier.v1.HeatmapQueryType](#schemaquerier.v1.heatmapquerytype)|false|none|Query type: individual profiles or span profiles|
|exemplarType|[types.v1.ExemplarType](#schematypes.v1.exemplartype)|false|none|Type of exemplars to include in the response. Needs to matching query_type or be NONE|
|limit|integer \| string(int64) \| null|false|none|Select the top N series by total value.|

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

<h2 id="tocS_querier.v1.SelectHeatmapResponse">querier.v1.SelectHeatmapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectheatmapresponse"></a>
<a id="schema_querier.v1.SelectHeatmapResponse"></a>
<a id="tocSquerier.v1.selectheatmapresponse"></a>
<a id="tocsquerier.v1.selectheatmapresponse"></a>

```json
{
  "series": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "slots": [
        {
          "timestamp": 0,
          "yMin": [
            0
          ],
          "counts": [
            0
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
|series|[[types.v1.HeatmapSeries](#schematypes.v1.heatmapseries)]|false|none|none|

<h2 id="tocS_querier.v1.SelectMergeProfileRequest">querier.v1.SelectMergeProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectmergeprofilerequest"></a>
<a id="schema_querier.v1.SelectMergeProfileRequest"></a>
<a id="tocSquerier.v1.selectmergeprofilerequest"></a>
<a id="tocsquerier.v1.selectmergeprofilerequest"></a>

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
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
    "7c9e6679-7425-40de-944b-e07fc1f90ae7"
  ],
  "traceIdSelector": [
    "7c9e66797425440de944be07fc1f90ae"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypeID|string|false|none|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|labelSelector|string|false|none|Label selector string|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|maxNodes|integer \| string(int64) \| null|false|none|Limit the nodes returned to only show the node with the max_node's biggest<br> total|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|Select stack traces that match the provided selector.|
|profileIdSelector|[string]|false|none|List of Profile UUIDs to query|
|traceIdSelector|[string]|false|none|List of trace IDs (32 hex characters, 128-bit) to filter samples by.|

<h2 id="tocS_querier.v1.SelectMergeSpanProfileRequest">querier.v1.SelectMergeSpanProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectmergespanprofilerequest"></a>
<a id="schema_querier.v1.SelectMergeSpanProfileRequest"></a>
<a id="tocSquerier.v1.selectmergespanprofilerequest"></a>
<a id="tocsquerier.v1.selectmergespanprofilerequest"></a>

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "spanSelector": [
    "9a517183f26a089d",
    "5a4fe264a9c987fe"
  ],
  "start": "1676282400000",
  "end": "1676289600000",
  "maxNodes": 0,
  "format": "PROFILE_FORMAT_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypeID|string|false|none|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|labelSelector|string|false|none|Label selector string|
|spanSelector|[string]|false|none|List of Span IDs to query|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|maxNodes|integer \| string(int64) \| null|false|none|Limit the nodes returned to only show the node with the max_node's biggest<br> total|
|format|[querier.v1.ProfileFormat](#schemaquerier.v1.profileformat)|false|none|Profile format specifies the format of profile to be returned.<br> If not specified, the profile will be returned in flame graph format.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|PROFILE_FORMAT_UNSPECIFIED|
|format|PROFILE_FORMAT_FLAMEGRAPH|
|format|PROFILE_FORMAT_TREE|
|format|PROFILE_FORMAT_DOT|
|format|PROFILE_FORMAT_PPROF|

<h2 id="tocS_querier.v1.SelectMergeSpanProfileResponse">querier.v1.SelectMergeSpanProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectmergespanprofileresponse"></a>
<a id="schema_querier.v1.SelectMergeSpanProfileResponse"></a>
<a id="tocSquerier.v1.selectmergespanprofileresponse"></a>
<a id="tocsquerier.v1.selectmergespanprofileresponse"></a>

```json
{
  "flamegraph": {
    "names": [
      "string"
    ],
    "levels": [
      {
        "values": [
          0
        ]
      }
    ],
    "total": 0,
    "maxSelf": 0
  },
  "tree": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flamegraph|[querier.v1.FlameGraph](#schemaquerier.v1.flamegraph)|false|none|none|
|tree|string(byte)|false|none|Pyroscope tree bytes.|

<h2 id="tocS_querier.v1.SelectMergeStacktracesRequest">querier.v1.SelectMergeStacktracesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectmergestacktracesrequest"></a>
<a id="schema_querier.v1.SelectMergeStacktracesRequest"></a>
<a id="tocSquerier.v1.selectmergestacktracesrequest"></a>
<a id="tocsquerier.v1.selectmergestacktracesrequest"></a>

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "maxNodes": 0,
  "format": "PROFILE_FORMAT_UNSPECIFIED",
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
    "7c9e6679-7425-40de-944b-e07fc1f90ae7"
  ],
  "async": {
    "requestId": "string",
    "type": "ASYNC_QUERY_TYPE_DISABLED"
  },
  "traceIdSelector": [
    "7c9e66797425440de944be07fc1f90ae"
  ],
  "spanSelector": [
    "9a517183f26a089d",
    "5a4fe264a9c987fe"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypeID|string|false|none|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|labelSelector|string|false|none|Label selector string|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|maxNodes|integer \| string(int64) \| null|false|none|Limit the nodes returned to only show the node with the max_node's biggest<br> total|
|format|[querier.v1.ProfileFormat](#schemaquerier.v1.profileformat)|false|none|Profile format specifies the format of profile to be returned.<br> If not specified, the profile will be returned in flame graph format.|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|Select stack traces that match the provided selector.|
|profileIdSelector|[string]|false|none|List of Profile UUIDs to query|
|async|[querier.v1.AsyncQueryRequest](#schemaquerier.v1.asyncqueryrequest)|false|none|(experimental) Used for making and polling async queries.|
|traceIdSelector|[string]|false|none|List of trace IDs (32 hex characters, 128-bit) to filter samples by.|
|spanSelector|[string]|false|none|List of span IDs (16 hex characters, 64-bit) to filter samples by.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|PROFILE_FORMAT_UNSPECIFIED|
|format|PROFILE_FORMAT_FLAMEGRAPH|
|format|PROFILE_FORMAT_TREE|
|format|PROFILE_FORMAT_DOT|
|format|PROFILE_FORMAT_PPROF|

<h2 id="tocS_querier.v1.SelectMergeStacktracesResponse">querier.v1.SelectMergeStacktracesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectmergestacktracesresponse"></a>
<a id="schema_querier.v1.SelectMergeStacktracesResponse"></a>
<a id="tocSquerier.v1.selectmergestacktracesresponse"></a>
<a id="tocsquerier.v1.selectmergestacktracesresponse"></a>

```json
{
  "flamegraph": {
    "names": [
      "string"
    ],
    "levels": [
      {
        "values": [
          0
        ]
      }
    ],
    "total": 0,
    "maxSelf": 0
  },
  "tree": "string",
  "dot": "string",
  "async": {
    "requestId": "string",
    "status": "ASYNC_QUERY_STATUS_UNKNOWN",
    "errorMessage": "string"
  },
  "pprof": {
    "profile": {
      "sampleType": [
        {
          "type": 0,
          "unit": 0
        }
      ],
      "sample": [
        {
          "locationId": [
            0
          ],
          "value": [
            0
          ],
          "label": [
            {
              "key": 0,
              "str": 0,
              "num": 0,
              "numUnit": 0
            }
          ]
        }
      ],
      "mapping": [
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
      "location": [
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
      "function": [
        {
          "id": 0,
          "name": 0,
          "systemName": 0,
          "filename": 0,
          "startLine": 0
        }
      ],
      "stringTable": [
        "string"
      ],
      "dropFrames": 0,
      "keepFrames": 0,
      "timeNanos": 0,
      "durationNanos": 0,
      "periodType": {
        "type": 0,
        "unit": 0
      },
      "period": 0,
      "comment": [
        0
      ],
      "defaultSampleType": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flamegraph|[querier.v1.FlameGraph](#schemaquerier.v1.flamegraph)|false|none|none|
|tree|string(byte)|false|none|Pyroscope tree bytes.|
|dot|string|false|none|DOT graph representation.|
|async|[querier.v1.AsyncQueryResponse](#schemaquerier.v1.asyncqueryresponse)|false|none|(experimental) Used for responding to async queries.|
|pprof|[querier.v1.PprofProfile](#schemaquerier.v1.pprofprofile)|false|none|Profile in pprof format.|

<h2 id="tocS_querier.v1.SelectSeriesRequest">querier.v1.SelectSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectseriesrequest"></a>
<a id="schema_querier.v1.SelectSeriesRequest"></a>
<a id="tocSquerier.v1.selectseriesrequest"></a>
<a id="tocsquerier.v1.selectseriesrequest"></a>

```json
{
  "profileTypeID": "process_cpu:cpu:nanoseconds:cpu:nanoseconds",
  "labelSelector": "{namespace=\"my-namespace\"}",
  "start": "1676282400000",
  "end": "1676289600000",
  "groupBy": [
    "pod"
  ],
  "step": 0,
  "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM",
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
  "limit": 0,
  "exemplarType": "EXEMPLAR_TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypeID|string|false|none|Profile Type ID string in the form<br> <name>:<type>:<unit>:<period_type>:<period_unit>.|
|labelSelector|string|false|none|Label selector string|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|groupBy|[string]|false|none|none|
|step|number(double)|false|none|none|
|aggregation|[types.v1.TimeSeriesAggregationType](#schematypes.v1.timeseriesaggregationtype)|false|none|Query resolution step width in seconds|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|Select stack traces that match the provided selector.|
|limit|integer \| string(int64) \| null|false|none|Select the top N series by total value.|
|exemplarType|[types.v1.ExemplarType](#schematypes.v1.exemplartype)|false|none|Type of exemplars to include in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregation|TIME_SERIES_AGGREGATION_TYPE_SUM|
|aggregation|TIME_SERIES_AGGREGATION_TYPE_AVERAGE|
|exemplarType|EXEMPLAR_TYPE_UNSPECIFIED|
|exemplarType|EXEMPLAR_TYPE_NONE|
|exemplarType|EXEMPLAR_TYPE_INDIVIDUAL|
|exemplarType|EXEMPLAR_TYPE_SPAN|

<h2 id="tocS_querier.v1.SelectSeriesResponse">querier.v1.SelectSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.selectseriesresponse"></a>
<a id="schema_querier.v1.SelectSeriesResponse"></a>
<a id="tocSquerier.v1.selectseriesresponse"></a>
<a id="tocsquerier.v1.selectseriesresponse"></a>

```json
{
  "series": [
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
|series|[[types.v1.Series](#schematypes.v1.series)]|false|none|none|

<h2 id="tocS_querier.v1.SeriesRequest">querier.v1.SeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.seriesrequest"></a>
<a id="schema_querier.v1.SeriesRequest"></a>
<a id="tocSquerier.v1.seriesrequest"></a>
<a id="tocsquerier.v1.seriesrequest"></a>

```json
{
  "matchers": [
    "{namespace=\"my-namespace\"}"
  ],
  "labelNames": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchers|[string]|false|none|List of label selector to apply to the result.|
|labelNames|[string]|false|none|List of label_names to request. If empty will return all label names in the<br> result.|
|start|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|end|integer \| string(int64)|false|none|queried.|

<h2 id="tocS_querier.v1.SeriesResponse">querier.v1.SeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.seriesresponse"></a>
<a id="schema_querier.v1.SeriesResponse"></a>
<a id="tocSquerier.v1.seriesresponse"></a>
<a id="tocsquerier.v1.seriesresponse"></a>

```json
{
  "labelsSet": [
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
|labelsSet|[[types.v1.Labels](#schematypes.v1.labels)]|false|none|none|

<h2 id="tocS_querier.v1.StacktraceAnomaly">querier.v1.StacktraceAnomaly</h2>
<!-- backwards compatibility -->
<a id="schemaquerier.v1.stacktraceanomaly"></a>
<a id="schema_querier.v1.StacktraceAnomaly"></a>
<a id="tocSquerier.v1.stacktraceanomaly"></a>
<a id="tocsquerier.v1.stacktraceanomaly"></a>

```json
{
  "profileId": "string",
  "timestamp": "1676282400000",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileId|string|false|none|Profile ID (UUID).|
|timestamp|integer \| string(int64)|false|none|Milliseconds since epoch: the profile's own timestamp.|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|The profile's own labels (e.g. pod, instance), same convention as<br> types.v1.Exemplar.labels.|
|score|number(double)|false|none|The anomaly source's score for this profile.|

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

<h2 id="tocS_types.v1.GetProfileStatsRequest">types.v1.GetProfileStatsRequest</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.getprofilestatsrequest"></a>
<a id="schema_types.v1.GetProfileStatsRequest"></a>
<a id="tocStypes.v1.getprofilestatsrequest"></a>
<a id="tocstypes.v1.getprofilestatsrequest"></a>

```json
{}
```

<h2 id="tocS_types.v1.GetProfileStatsResponse">types.v1.GetProfileStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.getprofilestatsresponse"></a>
<a id="schema_types.v1.GetProfileStatsResponse"></a>
<a id="tocStypes.v1.getprofilestatsresponse"></a>
<a id="tocstypes.v1.getprofilestatsresponse"></a>

```json
{
  "dataIngested": true,
  "oldestProfileTime": 0,
  "newestProfileTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataIngested|boolean|false|none|Whether we received any data at any time in the past.|
|oldestProfileTime|integer \| string(int64)|false|none|Milliseconds since epoch.|
|newestProfileTime|integer \| string(int64)|false|none|Milliseconds since epoch.|

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

<h2 id="tocS_types.v1.HeatmapSeries">types.v1.HeatmapSeries</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.heatmapseries"></a>
<a id="schema_types.v1.HeatmapSeries"></a>
<a id="tocStypes.v1.heatmapseries"></a>
<a id="tocstypes.v1.heatmapseries"></a>

```json
{
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "slots": [
    {
      "timestamp": 0,
      "yMin": [
        0
      ],
      "counts": [
        0
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
|slots|[[types.v1.HeatmapSlot](#schematypes.v1.heatmapslot)]|false|none|none|

<h2 id="tocS_types.v1.HeatmapSlot">types.v1.HeatmapSlot</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.heatmapslot"></a>
<a id="schema_types.v1.HeatmapSlot"></a>
<a id="tocStypes.v1.heatmapslot"></a>
<a id="tocstypes.v1.heatmapslot"></a>

```json
{
  "timestamp": 0,
  "yMin": [
    0
  ],
  "counts": [
    0
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
|timestamp|integer \| string(int64)|false|none|Milliseconds unix timestamp of the right edge (x_max) of this slot.<br> The slot covers the half-open interval (timestamp - step, timestamp].|
|yMin|[number(double)]|false|none|Minimum y value|
|counts|[integer(int32)]|false|none|How many matches|
|exemplars|[[types.v1.Exemplar](#schematypes.v1.exemplar)]|false|none|Provide exemplars|

<h2 id="tocS_types.v1.LabelNamesRequest">types.v1.LabelNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelnamesrequest"></a>
<a id="schema_types.v1.LabelNamesRequest"></a>
<a id="tocStypes.v1.labelnamesrequest"></a>
<a id="tocstypes.v1.labelnamesrequest"></a>

```json
{
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchers|[string]|false|none|List of Label selectors|
|start|integer \| string(int64)|false|none|Query from this point in time, given in Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Query to this point in time, given in Milliseconds since epoch.|

<h2 id="tocS_types.v1.LabelNamesResponse">types.v1.LabelNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelnamesresponse"></a>
<a id="schema_types.v1.LabelNamesResponse"></a>
<a id="tocStypes.v1.labelnamesresponse"></a>
<a id="tocstypes.v1.labelnamesresponse"></a>

```json
{
  "names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|

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

<h2 id="tocS_types.v1.LabelValuesRequest">types.v1.LabelValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelvaluesrequest"></a>
<a id="schema_types.v1.LabelValuesRequest"></a>
<a id="tocStypes.v1.labelvaluesrequest"></a>
<a id="tocstypes.v1.labelvaluesrequest"></a>

```json
{
  "name": "service_name",
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the label|
|matchers|[string]|false|none|List of Label selectors|
|start|integer \| string(int64)|false|none|Query from this point in time, given in Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Query to this point in time, given in Milliseconds since epoch.|

<h2 id="tocS_types.v1.LabelValuesResponse">types.v1.LabelValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelvaluesresponse"></a>
<a id="schema_types.v1.LabelValuesResponse"></a>
<a id="tocStypes.v1.labelvaluesresponse"></a>
<a id="tocstypes.v1.labelvaluesresponse"></a>

```json
{
  "names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|

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

<h2 id="tocS_types.v1.ProfileType">types.v1.ProfileType</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.profiletype"></a>
<a id="schema_types.v1.ProfileType"></a>
<a id="tocStypes.v1.profiletype"></a>
<a id="tocstypes.v1.profiletype"></a>

```json
{
  "ID": "string",
  "name": "string",
  "sampleType": "string",
  "sampleUnit": "string",
  "periodType": "string",
  "periodUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|none|
|name|string|false|none|none|
|sampleType|string|false|none|none|
|sampleUnit|string|false|none|none|
|periodType|string|false|none|none|
|periodUnit|string|false|none|none|

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

<h2 id="tocS_types.v1.TimeSeriesAggregationType">types.v1.TimeSeriesAggregationType</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.timeseriesaggregationtype"></a>
<a id="schema_types.v1.TimeSeriesAggregationType"></a>
<a id="tocStypes.v1.timeseriesaggregationtype"></a>
<a id="tocstypes.v1.timeseriesaggregationtype"></a>

```json
"TIME_SERIES_AGGREGATION_TYPE_SUM"
```
