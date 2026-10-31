import { createRoute, z } from '@hono/zod-openapi'

const WindowSchema = z
  .object({
    start: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Window')

const AllocationSchema = z
  .object({
    name: z.string().exactOptional(),
    cpuCost: z.number().exactOptional(),
    cpuCoreUsageAverage: z.number().exactOptional(),
    ramCost: z.number().exactOptional(),
    ramByteUsageAverage: z.number().exactOptional(),
    pvCost: z.number().exactOptional(),
    networkCost: z.number().exactOptional(),
    sharedCost: z.number().exactOptional(),
    externalCost: z.number().exactOptional(),
    totalCost: z.number().exactOptional(),
    minutes: z.number().exactOptional(),
    window: WindowSchema.exactOptional(),
    properties: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Allocation')

const AllocationResponseSchema = z
  .object({
    code: z.int().exactOptional(),
    status: z.string().exactOptional(),
    data: z.array(z.record(z.string(), AllocationSchema)).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocationResponse')

const AssetSchema = z
  .object({
    type: z.string().exactOptional(),
    totalCost: z.number().exactOptional(),
    cpuCost: z.number().exactOptional(),
    ramCost: z.number().exactOptional(),
    providerID: z.string().exactOptional(),
    window: WindowSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Asset')

const AssetsResponseSchema = z
  .object({
    code: z.int().exactOptional(),
    status: z.string().exactOptional(),
    data: z.record(z.string(), AssetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssetsResponse')

const CloudCostItemSchema = z
  .object({
    netCost: z
      .object({ cost: z.number().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CloudCostItem')

const CloudCostSetSchema = z
  .object({ cloudCosts: z.record(z.string(), CloudCostItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CloudCostSet')

const CloudCostResponseSchema = z
  .object({
    code: z.int().exactOptional(),
    status: z.string().exactOptional(),
    data: z
      .object({ sets: z.array(CloudCostSetSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CloudCostResponse')

const InferenceCostPropertiesSchema = z
  .object({
    modelName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the AI model (e.g. `Qwen/Qwen3-32B`).' }),
    modelVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the model. Omitted when not available.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Kubernetes namespace where the model is deployed.' }),
    cluster: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cluster identifier. Omitted when not available.' }),
    pod: z
      .string()
      .exactOptional()
      .openapi({ description: 'Kubernetes pod name. Omitted when not available.' }),
    controller: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kubernetes controller name (e.g. deployment, statefulset). Omitted when not available.',
      }),
    controllerKind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kubernetes controller kind (e.g. Deployment, StatefulSet). Omitted when not available.',
      }),
    container: z
      .string()
      .exactOptional()
      .openapi({ description: 'Container name within the pod. Omitted when not available.' }),
    workloadType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Type of workload generating these costs. Currently always 'inference'. Future values may include 'training', 'fine-tuning', etc.",
        example: 'inference',
      }),
  })
  .openapi({ required: [] })
  .openapi('InferenceCostProperties')

const InferenceCostResponseSchema = z
  .object({
    properties: InferenceCostPropertiesSchema.exactOptional(),
    window: WindowSchema.exactOptional(),
    costBasis: z
      .enum(['allocation', 'usage'])
      .exactOptional()
      .openapi({
        description:
          'The cost basis used for this response. `allocation`: max(request,usage) × price + idle + shared infra; reconciles to the bill. `usage`: actual consumption only; idle and shared infra costs excluded; does not reconcile to the bill.',
      }),
    totalCost: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total infrastructure cost for the window under the chosen cost basis, in USD.',
      }),
    promptTokens: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total prompt (input) tokens processed in the window.' }),
    generationTokens: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total generation (output) tokens produced in the window.' }),
    totalTokens: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total tokens delivered (prompt + generation).' }),
    costPerMillionTokens: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Blended infrastructure cost per 1M delivered tokens (input + output combined), in USD.',
      }),
    inputCost: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Portion of totalCost attributed to input (prompt) processing, in USD.',
      }),
    outputCost: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Portion of totalCost attributed to output (generation) processing, in USD.',
      }),
    inputCostPerMillionTokens: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Infrastructure cost per 1M delivered input (prompt) tokens, in USD. Uses promptTokens as the denominator so the rate is meaningful regardless of KV cache hit rate. See cacheSavingsFraction for cache utilization.',
      }),
    outputCostPerMillionTokens: z
      .number()
      .exactOptional()
      .openapi({ description: 'Infrastructure cost per 1M output (generation) tokens, in USD.' }),
    cacheSavingsFraction: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Fraction of prompt tokens served from the KV cache (range 0–1). Sourced from vllm:prefix_cache_hits_total, which reports cached tokens directly. Zero when prefix caching is disabled (see allocationMethod), when no cache hits occurred in the window, or when the metric is unavailable.',
      }),
    allocationMethod: z
      .enum(['compute_time', 'prefix_caching_off', 'multiplier'])
      .exactOptional()
      .openapi({
        description:
          'Method used to split costs between input and output tokens. `compute_time`: split proportionally by vLLM prefill/decode time; KV cache savings are reflected in cacheSavingsFraction. `prefix_caching_off`: same time-based split but prefix caching is explicitly disabled on the vLLM instance — cacheSavingsFraction will be zero by configuration. `multiplier`: fixed output/input ratio (fallback when timing metrics are unavailable).',
      }),
  })
  .openapi({
    description:
      'Inference cost data for a single model/namespace combination within a time window.',
    required: [],
  })
  .openapi('InferenceCostResponse')

const InferenceCostSetSchema = z
  .object({
    inferenceCosts: z.record(z.string(), InferenceCostResponseSchema).exactOptional(),
    window: WindowSchema.exactOptional(),
  })
  .openapi({
    description:
      'A collection of InferenceCostResponse entries for a single time window, keyed by aggregation key (e.g. `modelName:namespace`).',
    required: [],
  })
  .openapi('InferenceCostSet')

const InferenceCostSetResponseSchema = z
  .object({
    code: z.int().exactOptional(),
    status: z.string().exactOptional(),
    data: InferenceCostSetSchema.exactOptional(),
  })
  .openapi({ description: 'Response envelope for /inferenceCost/total.', required: [] })
  .openapi('InferenceCostSetResponse')

const InferenceCostSetRangeResponseSchema = z
  .object({
    code: z.int().exactOptional(),
    status: z.string().exactOptional(),
    data: z
      .object({
        inferenceCostSets: z
          .array(InferenceCostSetSchema)
          .exactOptional()
          .openapi({ description: 'One InferenceCostSet per time step.' }),
        window: WindowSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Response envelope for /inferenceCost/timeseries.', required: [] })
  .openapi('InferenceCostSetRangeResponse')

export const getAllocationRoute = createRoute({
  method: 'get',
  path: '/allocation',
  summary: 'query for costs and resources allocated to Kubernetes workloads',
  description:
    "The standard OpenCost API query for costs and resources allocated to Kubernetes workloads.  Note that 'data' is an array of sets (one per 'step').\n",
  request: {
    query: z.object({
      window: z
        .string()
        .openapi({
          param: {
            name: 'window',
            in: 'query',
            required: true,
            description:
              'Duration of time over which to query. Accepts: words like `today`, `lastweek`; durations like `30m`, `7d`; RFC3339 date pairs; or Unix timestamps.',
            schema: { type: 'string' },
            examples: {
              today: { value: 'today' },
              lastweek: { value: 'lastweek' },
              range: { value: '2024-01-01T00:00:00Z,2024-01-02T00:00:00Z' },
            },
          },
        }),
      aggregate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregate',
            in: 'query',
            description:
              'Field by which to aggregate. e.g., `namespace`, `controller`, `label:app`.',
            schema: { type: 'string' },
            example: 'namespace',
            required: false,
          },
        }),
      step: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'step',
            in: 'query',
            description: 'Duration of a single allocation set. Default is `window`.',
            schema: { type: 'string' },
            example: '1d',
            required: false,
          },
        }),
      accumulate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'accumulate',
            in: 'query',
            description: 'If true, sums the entire window into a single result set.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AllocationResponseSchema } },
    },
    400: {
      description:
        'Bad request — missing or invalid parameters (e.g. `window`, `step`, `accumulateBy`)',
    },
    500: { description: 'Internal server error — the allocation query failed' },
  },
})

export const getAssetsRoute = createRoute({
  method: 'get',
  path: '/assets',
  summary: 'query for underlying infrastructure assets',
  description: 'Returns the costs of Nodes, Disks, and Load Balancers.',
  request: {
    query: z.object({
      window: z
        .string()
        .openapi({
          param: { name: 'window', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssetsResponseSchema } },
    },
    400: { description: 'Bad request — missing or invalid `window` parameter' },
    500: { description: 'Internal server error — computing or filtering assets failed' },
  },
})

export const getCloudCostRoute = createRoute({
  method: 'get',
  path: '/cloudCost',
  summary: 'query for cloud provider billing data',
  description:
    'Retrieves non-K8s cloud provider costs via cloud integration. Requires `CLOUD_COST_ENABLED=true`; when disabled this route is not registered and requests return 404.',
  request: {
    query: z.object({
      window: z
        .string()
        .openapi({
          param: { name: 'window', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CloudCostResponseSchema } },
    },
    400: { description: 'Bad request — missing or invalid parameters' },
    500: { description: 'Internal server error — the cloud cost query failed' },
  },
})

export const getInferenceCostTotalRoute = createRoute({
  method: 'get',
  path: '/inferenceCost/total',
  summary: 'query for aggregated AI inference costs',
  description:
    'Returns a single aggregated InferenceCostSet covering the full requested window. Costs are broken down per model/namespace with blended and differentiated (input/output) cost-per-million-token rates under the chosen cost basis. Requires `INFERENCE_COST_ENABLED=true`.',
  request: {
    query: z.object({
      window: z
        .string()
        .openapi({
          param: {
            name: 'window',
            in: 'query',
            required: true,
            description:
              'Duration of time over which to query. Accepts durations like `7d`, `24h`, or RFC3339 date pairs like `2024-01-01T00:00:00Z,2024-01-02T00:00:00Z`.',
            schema: { type: 'string' },
            examples: {
              '7days': { value: '7d' },
              '24hours': { value: '24h' },
              range: { value: '2024-01-01T00:00:00Z,2024-01-08T00:00:00Z' },
            },
          },
        }),
      costBasis: z
        .enum(['allocation', 'usage'])
        .default('allocation')
        .exactOptional()
        .openapi({
          param: {
            name: 'costBasis',
            in: 'query',
            description:
              '`allocation` (default): max(request,usage) × price + idle + shared infra; reconciles to the infrastructure bill. `usage`: actual consumption only; idle and shared infra costs excluded; does not reconcile to the bill.',
            schema: { type: 'string', enum: ['allocation', 'usage'], default: 'allocation' },
            required: false,
          },
        }),
      aggregate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregate',
            in: 'query',
            description:
              'Comma-separated dimensions to aggregate by. Supported values: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.',
            schema: { type: 'string' },
            example: 'model_name',
            required: false,
          },
        }),
      accumulate: z
        .enum(['hour', 'day', 'week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            name: 'accumulate',
            in: 'query',
            description:
              'Step size used internally before accumulating into the total. Accepted values: `hour`, `day`, `week`, `month`. Optional for this endpoint.',
            schema: { type: 'string', enum: ['hour', 'day', 'week', 'month'] },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Filter results by property values. Format: `prop:value` for a single filter, `prop:value+prop:value` for AND logic. Supported properties: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.',
            schema: { type: 'string' },
            example: 'namespace:llm-d-prod+model_name:Qwen/Qwen3-32B',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InferenceCostSetResponseSchema } },
    },
    400: { description: 'Bad request — missing or invalid parameters' },
    501: {
      description:
        'Inference cost tracking is not enabled (`INFERENCE_COST_ENABLED` is not set to `true`)',
    },
  },
})

export const getInferenceCostTimeseriesRoute = createRoute({
  method: 'get',
  path: '/inferenceCost/timeseries',
  summary: 'query for AI inference costs as a time series',
  description:
    'Returns one InferenceCostSet per time step within the requested window. The `accumulate` parameter is required and defines the step size. All other parameters are identical to `/inferenceCost/total`. Requires `INFERENCE_COST_ENABLED=true`.',
  request: {
    query: z.object({
      window: z
        .string()
        .openapi({
          param: {
            name: 'window',
            in: 'query',
            required: true,
            description:
              'Duration of time over which to query. Accepts durations like `7d`, `24h`, or RFC3339 date pairs.',
            schema: { type: 'string' },
            examples: {
              '7days': { value: '7d' },
              range: { value: '2024-01-01T00:00:00Z,2024-01-08T00:00:00Z' },
            },
          },
        }),
      accumulate: z
        .enum(['hour', 'day', 'week', 'month'])
        .openapi({
          param: {
            name: 'accumulate',
            in: 'query',
            required: true,
            description: 'Step size for each time-series data point. Required for this endpoint.',
            schema: { type: 'string', enum: ['hour', 'day', 'week', 'month'] },
            example: 'day',
          },
        }),
      costBasis: z
        .enum(['allocation', 'usage'])
        .default('allocation')
        .exactOptional()
        .openapi({
          param: {
            name: 'costBasis',
            in: 'query',
            description:
              '`allocation` (default) or `usage`. See `/inferenceCost/total` for details.',
            schema: { type: 'string', enum: ['allocation', 'usage'], default: 'allocation' },
            required: false,
          },
        }),
      aggregate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregate',
            in: 'query',
            description:
              'Comma-separated dimensions to aggregate by: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.',
            schema: { type: 'string' },
            example: 'model_name',
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Filter by property values. Format: `prop:value+prop:value` (AND logic). Supported properties: `model_name`, `model_version`, `namespace`, `cluster`, `pod`, `controller`, `controller_kind`, `container`, `workload_type`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InferenceCostSetRangeResponseSchema } },
    },
    400: {
      description: 'Bad request — missing or invalid parameters (including missing `accumulate`)',
    },
    501: {
      description:
        'Inference cost tracking is not enabled (`INFERENCE_COST_ENABLED` is not set to `true`)',
    },
  },
})
