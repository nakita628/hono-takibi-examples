<h1 id="opencost-api">OpenCost API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The OpenCost API provides real-time and historical reporting of Kubernetes cloud costs.

Base URLs:

* <a href="http://localhost:9003">http://localhost:9003</a> - kubectl port-forward --namespace opencost service/opencost 9003

License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="opencost-api-default">Default</h1>

## query for costs and resources allocated to Kubernetes workloads

> Code samples

```bash
curl 'http://localhost:9003/allocation?window=today' \
  -H 'Accept: application/json'
```

`GET /allocation`

The standard OpenCost API query for costs and resources allocated to Kubernetes workloads.  Note that 'data' is an array of sets (one per 'step').


<h3 id="query-for-costs-and-resources-allocated-to-kubernetes-workloads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|window|query|string|true|Duration of time over which to query. Accepts: words like `today`, `lastweek`; durations like `30m`, `7d`; RFC3339 date pairs; or Unix timestamps.|
|aggregate|query|string|false|Field by which to aggregate. e.g., `namespace`, `controller`, `label:app`.|
|step|query|string|false|Duration of a single allocation set. Default is `window`.|
|accumulate|query|boolean|false|If true, sums the entire window into a single result set.|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "status": "string",
  "data": [
    {
      "property1": {
        "name": "string",
        "cpuCost": 0,
        "cpuCoreUsageAverage": 0,
        "ramCost": 0,
        "ramByteUsageAverage": 0,
        "pvCost": 0,
        "networkCost": 0,
        "sharedCost": 0,
        "externalCost": 0,
        "totalCost": 0,
        "minutes": 0,
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "name": "string",
        "cpuCost": 0,
        "cpuCoreUsageAverage": 0,
        "ramCost": 0,
        "ramByteUsageAverage": 0,
        "pvCost": 0,
        "networkCost": 0,
        "sharedCost": 0,
        "externalCost": 0,
        "totalCost": 0,
        "minutes": 0,
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

<h3 id="query-for-costs-and-resources-allocated-to-kubernetes-workloads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllocationResponse](#schemaallocationresponse)|
|400|Bad Request|Bad request — missing or invalid parameters (e.g. `window`, `step`, `accumulateBy`)|None|
|500|Internal Server Error|Internal server error — the allocation query failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## query for underlying infrastructure assets

> Code samples

```bash
curl 'http://localhost:9003/assets?window=string' \
  -H 'Accept: application/json'
```

`GET /assets`

Returns the costs of Nodes, Disks, and Load Balancers.

<h3 id="query-for-underlying-infrastructure-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|window|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "property1": {
      "type": "string",
      "totalCost": 0,
      "cpuCost": 0,
      "ramCost": 0,
      "providerID": "string",
      "window": {
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    },
    "property2": {
      "type": "string",
      "totalCost": 0,
      "cpuCost": 0,
      "ramCost": 0,
      "providerID": "string",
      "window": {
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    }
  }
}
```

<h3 id="query-for-underlying-infrastructure-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssetsResponse](#schemaassetsresponse)|
|400|Bad Request|Bad request — missing or invalid `window` parameter|None|
|500|Internal Server Error|Internal server error — computing or filtering assets failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## query for cloud provider billing data

> Code samples

```bash
curl 'http://localhost:9003/cloudCost?window=string' \
  -H 'Accept: application/json'
```

`GET /cloudCost`

Retrieves non-K8s cloud provider costs via cloud integration. Requires `CLOUD_COST_ENABLED=true`; when disabled this route is not registered and requests return 404.

<h3 id="query-for-cloud-provider-billing-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|window|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "sets": [
      {
        "cloudCosts": {
          "property1": {
            "netCost": {
              "cost": 0
            }
          },
          "property2": {
            "netCost": {
              "cost": 0
            }
          }
        }
      }
    ]
  }
}
```

<h3 id="query-for-cloud-provider-billing-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudCostResponse](#schemacloudcostresponse)|
|400|Bad Request|Bad request — missing or invalid parameters|None|
|500|Internal Server Error|Internal server error — the cloud cost query failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## query for aggregated AI inference costs

> Code samples

```bash
curl 'http://localhost:9003/inferenceCost/total?window=7d' \
  -H 'Accept: application/json'
```

`GET /inferenceCost/total`

Returns a single aggregated InferenceCostSet covering the full requested window. Costs are broken down per model/namespace with blended and differentiated (input/output) cost-per-million-token rates under the chosen cost basis. Requires `INFERENCE_COST_ENABLED=true`.

<h3 id="query-for-aggregated-ai-inference-costs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|window|query|string|true|Duration of time over which to query. Accepts durations like `7d`, `24h`, or RFC3339 date pairs like `2024-01-01T00:00:00Z,2024-01-02T00:00:00Z`.|
|costBasis|query|string|false|`allocation` (default): max(request,usage) × price + idle + shared infra; reconciles to the infrastructure bill. `usage`: actual consumption only; idle and shared infra costs excluded; does not reconcile to the bill.|
|aggregate|query|string|false|Comma-separated dimensions to aggregate by. Supported values: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.|
|accumulate|query|string|false|Step size used internally before accumulating into the total. Accepted values: `hour`, `day`, `week`, `month`. Optional for this endpoint.|
|filter|query|string|false|Filter results by property values. Format: `prop:value` for a single filter, `prop:value+prop:value` for AND logic. Supported properties: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|costBasis|allocation|
|costBasis|usage|
|accumulate|hour|
|accumulate|day|
|accumulate|week|
|accumulate|month|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "inferenceCosts": {
      "property1": {
        "properties": {
          "modelName": "string",
          "modelVersion": "string",
          "namespace": "string",
          "cluster": "string",
          "pod": "string",
          "controller": "string",
          "controllerKind": "string",
          "container": "string",
          "workloadType": "inference"
        },
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "costBasis": "allocation",
        "totalCost": 0,
        "promptTokens": 0,
        "generationTokens": 0,
        "totalTokens": 0,
        "costPerMillionTokens": 0,
        "inputCost": 0,
        "outputCost": 0,
        "inputCostPerMillionTokens": 0,
        "outputCostPerMillionTokens": 0,
        "cacheSavingsFraction": 0,
        "allocationMethod": "compute_time"
      },
      "property2": {
        "properties": {
          "modelName": "string",
          "modelVersion": "string",
          "namespace": "string",
          "cluster": "string",
          "pod": "string",
          "controller": "string",
          "controllerKind": "string",
          "container": "string",
          "workloadType": "inference"
        },
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "costBasis": "allocation",
        "totalCost": 0,
        "promptTokens": 0,
        "generationTokens": 0,
        "totalTokens": 0,
        "costPerMillionTokens": 0,
        "inputCost": 0,
        "outputCost": 0,
        "inputCostPerMillionTokens": 0,
        "outputCostPerMillionTokens": 0,
        "cacheSavingsFraction": 0,
        "allocationMethod": "compute_time"
      }
    },
    "window": {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  }
}
```

<h3 id="query-for-aggregated-ai-inference-costs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InferenceCostSetResponse](#schemainferencecostsetresponse)|
|400|Bad Request|Bad request — missing or invalid parameters|None|
|501|Not Implemented|Inference cost tracking is not enabled (`INFERENCE_COST_ENABLED` is not set to `true`)|None|

<aside class="success">
This operation does not require authentication
</aside>

## query for AI inference costs as a time series

> Code samples

```bash
curl 'http://localhost:9003/inferenceCost/timeseries?window=7d&accumulate=day' \
  -H 'Accept: application/json'
```

`GET /inferenceCost/timeseries`

Returns one InferenceCostSet per time step within the requested window. The `accumulate` parameter is required and defines the step size. All other parameters are identical to `/inferenceCost/total`. Requires `INFERENCE_COST_ENABLED=true`.

<h3 id="query-for-ai-inference-costs-as-a-time-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|window|query|string|true|Duration of time over which to query. Accepts durations like `7d`, `24h`, or RFC3339 date pairs.|
|accumulate|query|string|true|Step size for each time-series data point. Required for this endpoint.|
|costBasis|query|string|false|`allocation` (default) or `usage`. See `/inferenceCost/total` for details.|
|aggregate|query|string|false|Comma-separated dimensions to aggregate by: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.|
|filter|query|string|false|Filter by property values. Format: `prop:value+prop:value` (AND logic). Supported properties: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accumulate|hour|
|accumulate|day|
|accumulate|week|
|accumulate|month|
|costBasis|allocation|
|costBasis|usage|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "inferenceCostSets": [
      {
        "inferenceCosts": {
          "property1": {
            "properties": {
              "modelName": "string",
              "modelVersion": "string",
              "namespace": "string",
              "cluster": "string",
              "pod": "string",
              "controller": "string",
              "controllerKind": "string",
              "container": "string",
              "workloadType": "inference"
            },
            "window": {
              "start": "1970-01-01T00:00:00Z",
              "end": "1970-01-01T00:00:00Z"
            },
            "costBasis": "allocation",
            "totalCost": 0,
            "promptTokens": 0,
            "generationTokens": 0,
            "totalTokens": 0,
            "costPerMillionTokens": 0,
            "inputCost": 0,
            "outputCost": 0,
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheSavingsFraction": 0,
            "allocationMethod": "compute_time"
          },
          "property2": {
            "properties": {
              "modelName": "string",
              "modelVersion": "string",
              "namespace": "string",
              "cluster": "string",
              "pod": "string",
              "controller": "string",
              "controllerKind": "string",
              "container": "string",
              "workloadType": "inference"
            },
            "window": {
              "start": "1970-01-01T00:00:00Z",
              "end": "1970-01-01T00:00:00Z"
            },
            "costBasis": "allocation",
            "totalCost": 0,
            "promptTokens": 0,
            "generationTokens": 0,
            "totalTokens": 0,
            "costPerMillionTokens": 0,
            "inputCost": 0,
            "outputCost": 0,
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheSavingsFraction": 0,
            "allocationMethod": "compute_time"
          }
        },
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        }
      }
    ],
    "window": {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  }
}
```

<h3 id="query-for-ai-inference-costs-as-a-time-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InferenceCostSetRangeResponse](#schemainferencecostsetrangeresponse)|
|400|Bad Request|Bad request — missing or invalid parameters (including missing `accumulate`)|None|
|501|Not Implemented|Inference cost tracking is not enabled (`INFERENCE_COST_ENABLED` is not set to `true`)|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AllocationResponse">AllocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaallocationresponse"></a>
<a id="schema_AllocationResponse"></a>
<a id="tocSallocationresponse"></a>
<a id="tocsallocationresponse"></a>

```json
{
  "code": 0,
  "status": "string",
  "data": [
    {
      "property1": {
        "name": "string",
        "cpuCost": 0,
        "cpuCoreUsageAverage": 0,
        "ramCost": 0,
        "ramByteUsageAverage": 0,
        "pvCost": 0,
        "networkCost": 0,
        "sharedCost": 0,
        "externalCost": 0,
        "totalCost": 0,
        "minutes": 0,
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "name": "string",
        "cpuCost": 0,
        "cpuCoreUsageAverage": 0,
        "ramCost": 0,
        "ramByteUsageAverage": 0,
        "pvCost": 0,
        "networkCost": 0,
        "sharedCost": 0,
        "externalCost": 0,
        "totalCost": 0,
        "minutes": 0,
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|status|string|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_Allocation">Allocation</h2>
<!-- backwards compatibility -->
<a id="schemaallocation"></a>
<a id="schema_Allocation"></a>
<a id="tocSallocation"></a>
<a id="tocsallocation"></a>

```json
{
  "name": "string",
  "cpuCost": 0,
  "cpuCoreUsageAverage": 0,
  "ramCost": 0,
  "ramByteUsageAverage": 0,
  "pvCost": 0,
  "networkCost": 0,
  "sharedCost": 0,
  "externalCost": 0,
  "totalCost": 0,
  "minutes": 0,
  "window": {
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|cpuCost|number|false|none|none|
|cpuCoreUsageAverage|number|false|none|none|
|ramCost|number|false|none|none|
|ramByteUsageAverage|number|false|none|none|
|pvCost|number|false|none|none|
|networkCost|number|false|none|none|
|sharedCost|number|false|none|none|
|externalCost|number|false|none|none|
|totalCost|number|false|none|none|
|minutes|number|false|none|none|
|window|[Window](#schemawindow)|false|none|none|
|properties|object|false|none|none|

<h2 id="tocS_AssetsResponse">AssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetsresponse"></a>
<a id="schema_AssetsResponse"></a>
<a id="tocSassetsresponse"></a>
<a id="tocsassetsresponse"></a>

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "property1": {
      "type": "string",
      "totalCost": 0,
      "cpuCost": 0,
      "ramCost": 0,
      "providerID": "string",
      "window": {
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    },
    "property2": {
      "type": "string",
      "totalCost": 0,
      "cpuCost": 0,
      "ramCost": 0,
      "providerID": "string",
      "window": {
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|status|string|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "type": "string",
  "totalCost": 0,
  "cpuCost": 0,
  "ramCost": 0,
  "providerID": "string",
  "window": {
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|totalCost|number|false|none|none|
|cpuCost|number|false|none|none|
|ramCost|number|false|none|none|
|providerID|string|false|none|none|
|window|[Window](#schemawindow)|false|none|none|

<h2 id="tocS_CloudCostResponse">CloudCostResponse</h2>
<!-- backwards compatibility -->
<a id="schemacloudcostresponse"></a>
<a id="schema_CloudCostResponse"></a>
<a id="tocScloudcostresponse"></a>
<a id="tocscloudcostresponse"></a>

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "sets": [
      {
        "cloudCosts": {
          "property1": {
            "netCost": {
              "cost": 0
            }
          },
          "property2": {
            "netCost": {
              "cost": 0
            }
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|status|string|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_CloudCostSet">CloudCostSet</h2>
<!-- backwards compatibility -->
<a id="schemacloudcostset"></a>
<a id="schema_CloudCostSet"></a>
<a id="tocScloudcostset"></a>
<a id="tocscloudcostset"></a>

```json
{
  "cloudCosts": {
    "property1": {
      "netCost": {
        "cost": 0
      }
    },
    "property2": {
      "netCost": {
        "cost": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudCosts|object|false|none|none|

<h2 id="tocS_CloudCostItem">CloudCostItem</h2>
<!-- backwards compatibility -->
<a id="schemacloudcostitem"></a>
<a id="schema_CloudCostItem"></a>
<a id="tocScloudcostitem"></a>
<a id="tocscloudcostitem"></a>

```json
{
  "netCost": {
    "cost": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|netCost|object|false|none|none|

<h2 id="tocS_Window">Window</h2>
<!-- backwards compatibility -->
<a id="schemawindow"></a>
<a id="schema_Window"></a>
<a id="tocSwindow"></a>
<a id="tocswindow"></a>

```json
{
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|

<h2 id="tocS_InferenceCostProperties">InferenceCostProperties</h2>
<!-- backwards compatibility -->
<a id="schemainferencecostproperties"></a>
<a id="schema_InferenceCostProperties"></a>
<a id="tocSinferencecostproperties"></a>
<a id="tocsinferencecostproperties"></a>

```json
{
  "modelName": "string",
  "modelVersion": "string",
  "namespace": "string",
  "cluster": "string",
  "pod": "string",
  "controller": "string",
  "controllerKind": "string",
  "container": "string",
  "workloadType": "inference"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelName|string|false|none|Name of the AI model (e.g. `Qwen/Qwen3-32B`).|
|modelVersion|string|false|none|Version of the model. Omitted when not available.|
|namespace|string|false|none|Kubernetes namespace where the model is deployed.|
|cluster|string|false|none|Cluster identifier. Omitted when not available.|
|pod|string|false|none|Kubernetes pod name. Omitted when not available.|
|controller|string|false|none|Kubernetes controller name (e.g. deployment, statefulset). Omitted when not available.|
|controllerKind|string|false|none|Kubernetes controller kind (e.g. Deployment, StatefulSet). Omitted when not available.|
|container|string|false|none|Container name within the pod. Omitted when not available.|
|workloadType|string|false|none|Type of workload generating these costs. Currently always 'inference'. Future values may include 'training', 'fine-tuning', etc.|

<h2 id="tocS_InferenceCostResponse">InferenceCostResponse</h2>
<!-- backwards compatibility -->
<a id="schemainferencecostresponse"></a>
<a id="schema_InferenceCostResponse"></a>
<a id="tocSinferencecostresponse"></a>
<a id="tocsinferencecostresponse"></a>

```json
{
  "properties": {
    "modelName": "string",
    "modelVersion": "string",
    "namespace": "string",
    "cluster": "string",
    "pod": "string",
    "controller": "string",
    "controllerKind": "string",
    "container": "string",
    "workloadType": "inference"
  },
  "window": {
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  },
  "costBasis": "allocation",
  "totalCost": 0,
  "promptTokens": 0,
  "generationTokens": 0,
  "totalTokens": 0,
  "costPerMillionTokens": 0,
  "inputCost": 0,
  "outputCost": 0,
  "inputCostPerMillionTokens": 0,
  "outputCostPerMillionTokens": 0,
  "cacheSavingsFraction": 0,
  "allocationMethod": "compute_time"
}
```

Inference cost data for a single model/namespace combination within a time window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[InferenceCostProperties](#schemainferencecostproperties)|false|none|none|
|window|[Window](#schemawindow)|false|none|none|
|costBasis|string|false|none|The cost basis used for this response. `allocation`: max(request,usage) × price + idle + shared infra; reconciles to the bill. `usage`: actual consumption only; idle and shared infra costs excluded; does not reconcile to the bill.|
|totalCost|number|false|none|Total infrastructure cost for the window under the chosen cost basis, in USD.|
|promptTokens|number|false|none|Total prompt (input) tokens processed in the window.|
|generationTokens|number|false|none|Total generation (output) tokens produced in the window.|
|totalTokens|number|false|none|Total tokens delivered (prompt + generation).|
|costPerMillionTokens|number|false|none|Blended infrastructure cost per 1M delivered tokens (input + output combined), in USD.|
|inputCost|number|false|none|Portion of totalCost attributed to input (prompt) processing, in USD.|
|outputCost|number|false|none|Portion of totalCost attributed to output (generation) processing, in USD.|
|inputCostPerMillionTokens|number|false|none|Infrastructure cost per 1M delivered input (prompt) tokens, in USD. Uses promptTokens as the denominator so the rate is meaningful regardless of KV cache hit rate. See cacheSavingsFraction for cache utilization.|
|outputCostPerMillionTokens|number|false|none|Infrastructure cost per 1M output (generation) tokens, in USD.|
|cacheSavingsFraction|number|false|none|Fraction of prompt tokens served from the KV cache (range 0–1). Sourced from vllm:prefix_cache_hits_total, which reports cached tokens directly. Zero when prefix caching is disabled (see allocationMethod), when no cache hits occurred in the window, or when the metric is unavailable.|
|allocationMethod|string|false|none|Method used to split costs between input and output tokens. `compute_time`: split proportionally by vLLM prefill/decode time; KV cache savings are reflected in cacheSavingsFraction. `prefix_caching_off`: same time-based split but prefix caching is explicitly disabled on the vLLM instance — cacheSavingsFraction will be zero by configuration. `multiplier`: fixed output/input ratio (fallback when timing metrics are unavailable).|

#### Enumerated Values

|Property|Value|
|---|---|
|costBasis|allocation|
|costBasis|usage|
|allocationMethod|compute_time|
|allocationMethod|prefix_caching_off|
|allocationMethod|multiplier|

<h2 id="tocS_InferenceCostSet">InferenceCostSet</h2>
<!-- backwards compatibility -->
<a id="schemainferencecostset"></a>
<a id="schema_InferenceCostSet"></a>
<a id="tocSinferencecostset"></a>
<a id="tocsinferencecostset"></a>

```json
{
  "inferenceCosts": {
    "property1": {
      "properties": {
        "modelName": "string",
        "modelVersion": "string",
        "namespace": "string",
        "cluster": "string",
        "pod": "string",
        "controller": "string",
        "controllerKind": "string",
        "container": "string",
        "workloadType": "inference"
      },
      "window": {
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      },
      "costBasis": "allocation",
      "totalCost": 0,
      "promptTokens": 0,
      "generationTokens": 0,
      "totalTokens": 0,
      "costPerMillionTokens": 0,
      "inputCost": 0,
      "outputCost": 0,
      "inputCostPerMillionTokens": 0,
      "outputCostPerMillionTokens": 0,
      "cacheSavingsFraction": 0,
      "allocationMethod": "compute_time"
    },
    "property2": {
      "properties": {
        "modelName": "string",
        "modelVersion": "string",
        "namespace": "string",
        "cluster": "string",
        "pod": "string",
        "controller": "string",
        "controllerKind": "string",
        "container": "string",
        "workloadType": "inference"
      },
      "window": {
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      },
      "costBasis": "allocation",
      "totalCost": 0,
      "promptTokens": 0,
      "generationTokens": 0,
      "totalTokens": 0,
      "costPerMillionTokens": 0,
      "inputCost": 0,
      "outputCost": 0,
      "inputCostPerMillionTokens": 0,
      "outputCostPerMillionTokens": 0,
      "cacheSavingsFraction": 0,
      "allocationMethod": "compute_time"
    }
  },
  "window": {
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  }
}
```

A collection of InferenceCostResponse entries for a single time window, keyed by aggregation key (e.g. `modelName:namespace`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inferenceCosts|object|false|none|none|
|window|[Window](#schemawindow)|false|none|none|

<h2 id="tocS_InferenceCostSetResponse">InferenceCostSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemainferencecostsetresponse"></a>
<a id="schema_InferenceCostSetResponse"></a>
<a id="tocSinferencecostsetresponse"></a>
<a id="tocsinferencecostsetresponse"></a>

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "inferenceCosts": {
      "property1": {
        "properties": {
          "modelName": "string",
          "modelVersion": "string",
          "namespace": "string",
          "cluster": "string",
          "pod": "string",
          "controller": "string",
          "controllerKind": "string",
          "container": "string",
          "workloadType": "inference"
        },
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "costBasis": "allocation",
        "totalCost": 0,
        "promptTokens": 0,
        "generationTokens": 0,
        "totalTokens": 0,
        "costPerMillionTokens": 0,
        "inputCost": 0,
        "outputCost": 0,
        "inputCostPerMillionTokens": 0,
        "outputCostPerMillionTokens": 0,
        "cacheSavingsFraction": 0,
        "allocationMethod": "compute_time"
      },
      "property2": {
        "properties": {
          "modelName": "string",
          "modelVersion": "string",
          "namespace": "string",
          "cluster": "string",
          "pod": "string",
          "controller": "string",
          "controllerKind": "string",
          "container": "string",
          "workloadType": "inference"
        },
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        },
        "costBasis": "allocation",
        "totalCost": 0,
        "promptTokens": 0,
        "generationTokens": 0,
        "totalTokens": 0,
        "costPerMillionTokens": 0,
        "inputCost": 0,
        "outputCost": 0,
        "inputCostPerMillionTokens": 0,
        "outputCostPerMillionTokens": 0,
        "cacheSavingsFraction": 0,
        "allocationMethod": "compute_time"
      }
    },
    "window": {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  }
}
```

Response envelope for /inferenceCost/total.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|status|string|false|none|none|
|data|[InferenceCostSet](#schemainferencecostset)|false|none|A collection of InferenceCostResponse entries for a single time window, keyed by aggregation key (e.g. `modelName:namespace`).|

<h2 id="tocS_InferenceCostSetRangeResponse">InferenceCostSetRangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemainferencecostsetrangeresponse"></a>
<a id="schema_InferenceCostSetRangeResponse"></a>
<a id="tocSinferencecostsetrangeresponse"></a>
<a id="tocsinferencecostsetrangeresponse"></a>

```json
{
  "code": 0,
  "status": "string",
  "data": {
    "inferenceCostSets": [
      {
        "inferenceCosts": {
          "property1": {
            "properties": {
              "modelName": "string",
              "modelVersion": "string",
              "namespace": "string",
              "cluster": "string",
              "pod": "string",
              "controller": "string",
              "controllerKind": "string",
              "container": "string",
              "workloadType": "inference"
            },
            "window": {
              "start": "1970-01-01T00:00:00Z",
              "end": "1970-01-01T00:00:00Z"
            },
            "costBasis": "allocation",
            "totalCost": 0,
            "promptTokens": 0,
            "generationTokens": 0,
            "totalTokens": 0,
            "costPerMillionTokens": 0,
            "inputCost": 0,
            "outputCost": 0,
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheSavingsFraction": 0,
            "allocationMethod": "compute_time"
          },
          "property2": {
            "properties": {
              "modelName": "string",
              "modelVersion": "string",
              "namespace": "string",
              "cluster": "string",
              "pod": "string",
              "controller": "string",
              "controllerKind": "string",
              "container": "string",
              "workloadType": "inference"
            },
            "window": {
              "start": "1970-01-01T00:00:00Z",
              "end": "1970-01-01T00:00:00Z"
            },
            "costBasis": "allocation",
            "totalCost": 0,
            "promptTokens": 0,
            "generationTokens": 0,
            "totalTokens": 0,
            "costPerMillionTokens": 0,
            "inputCost": 0,
            "outputCost": 0,
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheSavingsFraction": 0,
            "allocationMethod": "compute_time"
          }
        },
        "window": {
          "start": "1970-01-01T00:00:00Z",
          "end": "1970-01-01T00:00:00Z"
        }
      }
    ],
    "window": {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  }
}
```

Response envelope for /inferenceCost/timeseries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|status|string|false|none|none|
|data|object|false|none|none|
