import { createRoute, z } from '@hono/zod-openapi'

const ApiErrorResponseSchema = z
  .strictObject({
    code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    error: z.string(),
  })
  .openapi({ required: ['code', 'error'] })
  .openapi('ApiErrorResponse')

const ApiReportCreateResponseSchema = z
  .strictObject({ message: z.string(), uuid: z.string() })
  .openapi({ required: ['message', 'uuid'] })
  .openapi('ApiReportCreateResponse')

const ReportV1LabelSchema = z
  .strictObject({ key: z.string(), value: z.string() })
  .openapi({ required: ['key', 'value'] })
  .openapi('ReportV1Label')

const ReportV1ReportSloSchema = z
  .strictObject({ sloUuid: z.string() })
  .openapi({ required: ['sloUuid'] })
  .openapi('ReportV1ReportSlo')

const ReportV1ReportDefinitionSloListSchema = z
  .strictObject({ slos: z.array(ReportV1ReportSloSchema) })
  .openapi({ required: ['slos'] })
  .openapi('ReportV1ReportDefinitionSloList')

const ReportV1ReportSchema = z
  .strictObject({
    description: z.string(),
    labels: z.array(ReportV1LabelSchema).exactOptional(),
    name: z.string(),
    reportDefinition: ReportV1ReportDefinitionSloListSchema,
    timeSpan: z.string(),
    uuid: z.string(),
  })
  .openapi({ required: ['uuid', 'name', 'description', 'timeSpan', 'reportDefinition'] })
  .openapi('ReportV1Report')

const ApiReportListResponseSchema = z
  .strictObject({ reports: z.array(ReportV1ReportSchema) })
  .openapi({ required: ['reports'] })
  .openapi('ApiReportListResponse')

const ApiSLOCreateResponseSchema = z
  .strictObject({ message: z.string(), uuid: z.string() })
  .openapi({ required: ['message', 'uuid'] })
  .openapi('ApiSLOCreateResponse')

const SloV0_0AdvancedOptionsSchema = z
  .strictObject({
    minFailures: z
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
  .openapi({ required: [] })
  .openapi('SloV0_0AdvancedOptions')

const SloV0_0LabelSchema = z
  .strictObject({ key: z.string(), value: z.string() })
  .openapi({ required: ['key', 'value'] })
  .openapi('SloV0_0Label')

const SloV0_0AlertEnrichmentSchema = z
  .strictObject({ type: z.string() })
  .openapi({ required: ['type'] })
  .openapi('SloV0_0AlertEnrichment')

const SloV0_0AlertingMetadataSchema = z
  .strictObject({
    annotations: z.array(SloV0_0LabelSchema).exactOptional(),
    enrichments: z.array(SloV0_0AlertEnrichmentSchema).exactOptional(),
    labels: z.array(SloV0_0LabelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SloV0_0AlertingMetadata')

const SloV0_0AlertingSchema = z
  .strictObject({
    advancedOptions: SloV0_0AdvancedOptionsSchema.exactOptional(),
    annotations: z.array(SloV0_0LabelSchema).exactOptional(),
    fastBurn: SloV0_0AlertingMetadataSchema.exactOptional(),
    labels: z.array(SloV0_0LabelSchema).exactOptional(),
    slowBurn: SloV0_0AlertingMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SloV0_0Alerting')

const SloV0_0DestinationDatasourceSchema = z
  .strictObject({ type: z.string().exactOptional(), uid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SloV0_0DestinationDatasource')

const SloV0_0FolderSchema = z
  .strictObject({ uid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SloV0_0Folder')

const SloV0_0ObjectiveSchema = z
  .strictObject({ value: z.float64(), window: z.string() })
  .openapi({ required: ['value', 'window'] })
  .openapi('SloV0_0Objective')

const SloV0_0MetricDefSchema = z
  .strictObject({ prometheusMetric: z.string(), type: z.string().exactOptional() })
  .openapi({ required: ['prometheusMetric'] })
  .openapi('SloV0_0MetricDef')

const SloV0_0FailureRatioQuerySchema = z
  .strictObject({
    failureMetric: SloV0_0MetricDefSchema,
    groupByLabels: z.array(z.string()).exactOptional(),
    sourceDatasourceUid: z.string().exactOptional(),
    totalMetric: SloV0_0MetricDefSchema,
  })
  .openapi({ required: ['failureMetric', 'totalMetric'] })
  .openapi('SloV0_0FailureRatioQuery')

const SloV0_0ThresholdSchema = z
  .strictObject({ operator: z.enum(['<', '<=', '==', '!=', '>=', '>']), value: z.float64() })
  .openapi({ required: ['value', 'operator'] })
  .openapi('SloV0_0Threshold')

const SloV0_0FailureThresholdQuerySchema = z
  .strictObject({
    failureThresholdExpression: z.string(),
    groupByLabels: z.array(z.string()).exactOptional(),
    sourceDatasourceUid: z.string().exactOptional(),
    threshold: SloV0_0ThresholdSchema,
  })
  .openapi({ required: ['failureThresholdExpression', 'threshold'] })
  .openapi('SloV0_0FailureThresholdQuery')

const SloV0_0FreeformQuerySchema = z
  .strictObject({ query: z.string(), sourceDatasourceUid: z.string().exactOptional() })
  .openapi({ required: ['query'] })
  .openapi('SloV0_0FreeformQuery')

const SloV0_0GrafanaQueriesSchema = z
  .strictObject({ grafanaQueries: z.array(z.record(z.string(), z.any())) })
  .openapi({ required: ['grafanaQueries'] })
  .openapi('SloV0_0GrafanaQueries')

const SloV0_0RatioQuerySchema = z
  .strictObject({
    groupByLabels: z.array(z.string()).exactOptional(),
    sourceDatasourceUid: z.string().exactOptional(),
    successMetric: SloV0_0MetricDefSchema,
    totalMetric: SloV0_0MetricDefSchema,
  })
  .openapi({ required: ['successMetric', 'totalMetric'] })
  .openapi('SloV0_0RatioQuery')

const SloV0_0ThresholdQuerySchema = z
  .strictObject({
    groupByLabels: z.array(z.string()).exactOptional(),
    sourceDatasourceUid: z.string().exactOptional(),
    threshold: SloV0_0ThresholdSchema,
    thresholdExpression: z.string(),
  })
  .openapi({ required: ['thresholdExpression', 'threshold'] })
  .openapi('SloV0_0ThresholdQuery')

const SloV0_0QuerySchema = z
  .strictObject({
    failureRatio: SloV0_0FailureRatioQuerySchema.exactOptional(),
    failureThreshold: SloV0_0FailureThresholdQuerySchema.exactOptional(),
    freeform: SloV0_0FreeformQuerySchema.exactOptional(),
    grafanaQueries: SloV0_0GrafanaQueriesSchema.exactOptional(),
    ratio: SloV0_0RatioQuerySchema.exactOptional(),
    threshold: SloV0_0ThresholdQuerySchema.exactOptional(),
    type: z.enum(['freeform', 'ratio', 'threshold', 'failureThreshold']),
  })
  .openapi({ required: ['type'] })
  .openapi('SloV0_0Query')

const SloV0_0DashboardRefSchema = z
  .strictObject({ UID: z.string() })
  .openapi({ required: ['UID'] })
  .openapi('SloV0_0DashboardRef')

const SloV0_0MaintenanceEventSchema = z
  .strictObject({
    endTimeIso8601: z.string().exactOptional(),
    name: z.string(),
    startTimeIso8601: z.string(),
  })
  .openapi({ required: ['name', 'startTimeIso8601'] })
  .openapi('SloV0_0MaintenanceEvent')

const SloV0_0StatusSchema = z
  .strictObject({
    message: z.string().exactOptional(),
    type: z.enum(['created', 'creating', 'deleting', 'error', 'unknown', 'updated', 'updating']),
  })
  .openapi({ required: ['type'] })
  .openapi('SloV0_0Status')

const SloV0_0ReadOnlySchema = z
  .strictObject({
    allowedActions: z.array(z.string()).exactOptional(),
    creationTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    drillDownDashboardRef: SloV0_0DashboardRefSchema.exactOptional(),
    maintenanceEvents: z.array(SloV0_0MaintenanceEventSchema).exactOptional(),
    parsesAsRatio: z.boolean().exactOptional(),
    provenance: z.string().exactOptional(),
    sourceDatasource: SloV0_0DestinationDatasourceSchema.exactOptional(),
    status: SloV0_0StatusSchema.exactOptional(),
  })
  .openapi({ required: ['creationTimestamp'] })
  .openapi('SloV0_0ReadOnly')

const SloV0_0SloSchema = z
  .strictObject({
    alerting: SloV0_0AlertingSchema.exactOptional(),
    description: z.string(),
    destinationDatasource: SloV0_0DestinationDatasourceSchema.exactOptional(),
    folder: SloV0_0FolderSchema.exactOptional(),
    labels: z.array(SloV0_0LabelSchema).exactOptional(),
    name: z.string(),
    objectives: z.array(SloV0_0ObjectiveSchema),
    query: SloV0_0QuerySchema,
    readOnly: SloV0_0ReadOnlySchema.exactOptional(),
    searchExpression: z.string().exactOptional(),
    uuid: z.string(),
  })
  .openapi({ required: ['uuid', 'name', 'description', 'query', 'objectives'] })
  .openapi('SloV0_0Slo')

const ApiSLOListResponseSchema = z
  .strictObject({ slos: z.array(SloV0_0SloSchema) })
  .openapi({ required: ['slos'] })
  .openapi('ApiSLOListResponse')

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getV1ReportRoute = createRoute({
  method: 'get',
  path: '/v1/report',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApiReportListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postV1ReportRoute = createRoute({
  method: 'post',
  path: '/v1/report',
  request: {
    body: { content: { 'application/json': { schema: ReportV1ReportSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ApiReportCreateResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getV1ReportIdRoute = createRoute({
  method: 'get',
  path: '/v1/report/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReportV1ReportSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const putV1ReportIdRoute = createRoute({
  method: 'put',
  path: '/v1/report/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ReportV1ReportSchema } }, required: true },
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteV1ReportIdRoute = createRoute({
  method: 'delete',
  path: '/v1/report/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getV1SloRoute = createRoute({
  method: 'get',
  path: '/v1/slo',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApiSLOListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postV1SloRoute = createRoute({
  method: 'post',
  path: '/v1/slo',
  request: {
    body: { content: { 'application/json': { schema: SloV0_0SloSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ApiSLOCreateResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getV1SloIdRoute = createRoute({
  method: 'get',
  path: '/v1/slo/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SloV0_0SloSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const putV1SloIdRoute = createRoute({
  method: 'put',
  path: '/v1/slo/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: SloV0_0SloSchema } }, required: true },
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteV1SloIdRoute = createRoute({
  method: 'delete',
  path: '/v1/slo/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})
