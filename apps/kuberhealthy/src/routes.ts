import { createRoute, z } from '@hono/zod-openapi'

const CheckDetailSchema = z
  .object({
    ok: z.boolean(),
    errors: z.array(z.string()).exactOptional(),
    consecutiveFailures: z.int().exactOptional(),
    runDuration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Execution time of the last run in nanoseconds',
      }),
    namespace: z.string().exactOptional(),
    currentUUID: z.string().exactOptional(),
    lastRunUnix: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    successCount: z.int().exactOptional(),
    failureCount: z.int().exactOptional(),
    lastOKUnix: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    lastFailureUnix: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    additionalMetadata: z.string().exactOptional(),
    nextRunUnix: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    podName: z.string().exactOptional(),
    timeoutSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    runIntervalSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['ok'] })
  .openapi('CheckDetail')

const StateSchema = z
  .object({
    OK: z.boolean(),
    Errors: z.array(z.string()),
    CheckDetails: z.record(z.string(), CheckDetailSchema),
    CurrentMaster: z.string().exactOptional(),
    Metadata: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: ['OK', 'Errors', 'CheckDetails'] })
  .openapi('State')

const ReportSchema = z
  .object({ errors: z.array(z.string()).exactOptional(), ok: z.boolean() })
  .openapi({ required: ['ok'] })
  .openapi('Report')

const EventSummarySchema = z
  .object({
    message: z.string(),
    reason: z.string(),
    type: z.string(),
    lastTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['message', 'reason', 'type'] })
  .openapi('EventSummary')

const AdmissionReviewSchema = z
  .object({
    apiVersion: z.string().exactOptional(),
    kind: z.string().exactOptional(),
    request: z.object({}).exactOptional(),
    response: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdmissionReview')

const ConversionReviewSchema = z
  .object({
    apiVersion: z.string().exactOptional(),
    kind: z.string().exactOptional(),
    request: z.object({}).exactOptional(),
    response: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConversionReview')

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  summary: 'Retrieve Prometheus metrics for checks',
  responses: {
    200: {
      description: 'Metrics in Prometheus format',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getHealthzRoute = createRoute({
  method: 'get',
  path: '/healthz',
  summary: 'Quick health check',
  responses: {
    200: {
      description: 'Service is healthy',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'OK' }) } },
    },
    503: { description: 'Dependencies unavailable' },
  },
})

export const getJsonRoute = createRoute({
  method: 'get',
  path: '/json',
  summary: 'Get current status of all checks',
  request: {
    query: z.object({
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'namespace',
            schema: { type: 'string' },
            description: 'Comma-separated namespaces to filter by',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Health status', content: { 'application/json': { schema: StateSchema } } },
  },
})

export const getApiEventsRoute = createRoute({
  method: 'get',
  path: '/api/events',
  summary: 'List Kubernetes events for a check',
  request: {
    query: z.object({
      namespace: z
        .string()
        .openapi({
          param: { in: 'query', name: 'namespace', required: true, schema: { type: 'string' } },
        }),
      healthcheck: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'healthcheck',
            required: true,
            schema: { type: 'string' },
            description: 'Name of the healthcheck to inspect.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Event list',
      content: { 'application/json': { schema: z.array(EventSummarySchema) } },
    },
    400: { description: 'Missing parameters' },
  },
})

export const getApiLogsRoute = createRoute({
  method: 'get',
  path: '/api/logs',
  summary: 'Retrieve logs for a checker pod',
  request: {
    query: z.object({
      namespace: z
        .string()
        .openapi({
          param: { in: 'query', name: 'namespace', required: true, schema: { type: 'string' } },
        }),
      healthcheck: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'healthcheck',
            required: true,
            schema: { type: 'string' },
            description: 'Name of the healthcheck to inspect.',
          },
        }),
      pod: z
        .string()
        .openapi({
          param: { in: 'query', name: 'pod', required: true, schema: { type: 'string' } },
        }),
      format: z
        .literal('text')
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: true,
            schema: { type: 'string', enum: ['text'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Pod logs', content: { 'text/plain': { schema: z.string() } } },
    400: { description: 'Missing parameters' },
    406: { description: 'Unsupported format' },
  },
})

export const getApiLogsStreamRoute = createRoute({
  method: 'get',
  path: '/api/logs/stream',
  summary: 'Stream logs for a running checker pod',
  request: {
    query: z.object({
      namespace: z
        .string()
        .openapi({
          param: { in: 'query', name: 'namespace', required: true, schema: { type: 'string' } },
        }),
      healthcheck: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'healthcheck',
            required: true,
            schema: { type: 'string' },
            description: 'Name of the healthcheck to inspect.',
          },
        }),
      pod: z
        .string()
        .openapi({
          param: { in: 'query', name: 'pod', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Streaming pod logs', content: { 'text/plain': { schema: z.string() } } },
    400: { description: 'Missing parameters' },
    409: { description: 'Pod not running' },
  },
})

export const getOpenapiYamlRoute = createRoute({
  method: 'get',
  path: '/openapi.yaml',
  summary: 'Get OpenAPI specification',
  responses: {
    200: {
      description: 'OpenAPI specification in YAML',
      content: { 'application/yaml': { schema: z.string() } },
    },
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  summary: 'Get OpenAPI specification',
  responses: {
    200: {
      description: 'OpenAPI specification in JSON',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const postApiRunRoute = createRoute({
  method: 'post',
  path: '/api/run',
  summary: 'Trigger an immediate healthcheck run',
  request: {
    query: z.object({
      namespace: z
        .string()
        .openapi({
          param: { in: 'query', name: 'namespace', required: true, schema: { type: 'string' } },
        }),
      healthcheck: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'healthcheck',
            required: true,
            schema: { type: 'string' },
            description: 'Name of the healthcheck to run.',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Run started' },
    400: { description: 'Missing parameters' },
    404: { description: 'Check not found' },
    409: { description: 'Check already running' },
  },
})

export const postCheckRoute = createRoute({
  method: 'post',
  path: '/check',
  summary: 'Report an external check result',
  request: {
    headers: z.object({
      'kh-run-uuid': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'kh-run-uuid',
            required: true,
            schema: { type: 'string' },
            description: 'Run identifier injected into the check pod.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportSchema } }, required: true },
  },
  responses: { 200: { description: 'Report accepted' }, 400: { description: 'Invalid report' } },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'HTML status page',
  responses: {
    200: { description: 'Status page', content: { 'text/html': { schema: z.string() } } },
  },
})
