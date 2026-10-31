import { createRoute, z } from '@hono/zod-openapi'

const ApiResponseSchema = z
  .object({ page: z.string().exactOptional(), status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiResponse')

const FindingsSchema = z
  .array(
    z
      .object({
        confidence: z.string().exactOptional(),
        description: z.string().exactOptional(),
        issue_id: z.int().exactOptional(),
        meta_links: z.array(z.string()).exactOptional(),
        meta_risk: z
          .object({
            cvss_base_score: z.array(z.string()).exactOptional(),
            cvss_vector: z.array(z.string()).exactOptional(),
            exploit_available: z.array(z.string()).exactOptional(),
            exploitability_ease: z.array(z.string()).exactOptional(),
            patch_publication_date: z.array(z.string()).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        meta_tags: z.array(z.string()).exactOptional(),
        meta_vuln_refs: z
          .object({
            bid: z.array(z.string()).exactOptional(),
            cpe: z.array(z.string()).exactOptional(),
            cve: z.array(z.string()).exactOptional(),
            cwe: z.array(z.string()).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        raw: z.string().exactOptional(),
        severity: z.enum(['info', 'low', 'medium', 'high']).exactOptional(),
        solution: z.string().exactOptional(),
        target_addrs: z.array(z.string()).exactOptional(),
        target_proto: z.array(z.string()).exactOptional(),
        timestamp: z.iso.datetime({ offset: true }).exactOptional(),
        title: z.string().exactOptional(),
        type: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Findings')

const ScanDefinitionSchema = z
  .object({
    assets: z
      .array(
        z
          .object({
            criticity: z.enum(['low', 'medium', 'high']).exactOptional(),
            datatype: z
              .enum([
                'ip',
                'ip-range',
                'ip-subnet',
                'fqdn',
                'domain',
                'url',
                'keyword',
                'person',
                'organisation',
                'path',
                'application',
              ])
              .exactOptional(),
            id: z.string().exactOptional().openapi({ example: '3' }),
            value: z.string().exactOptional().openapi({ example: '8.8.8.8' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    options: z.object({}).exactOptional(),
    scan_id: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('ScanDefinition')

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['patrowl-engine'],
  summary: 'Index page',
  description: 'Return index page',
  operationId: 'getDefaultPage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCleanRoute = createRoute({
  method: 'get',
  path: '/clean',
  tags: ['patrowl-engine'],
  summary: 'Clean all scans',
  description: 'Clean all current scans.',
  operationId: 'CleanScansPage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCleanScanIdRoute = createRoute({
  method: 'get',
  path: '/clean/{scanId}',
  tags: ['patrowl-engine'],
  summary: 'Clean scan',
  description: 'Clean scan identified by id.',
  operationId: 'CleanScanPage',
  request: {
    params: z.object({
      scanId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Numeric ID of the scan to clean',
            in: 'path',
            name: 'scanId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getGetfindingsScanIdRoute = createRoute({
  method: 'get',
  path: '/getfindings/{scanId}',
  tags: ['patrowl-engine'],
  summary: 'Get findings on finished scans',
  description: 'Get findings on finished scans.',
  operationId: 'GetFindingPage',
  request: {
    params: z.object({
      scanId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Numeric ID of the scan to get findings',
            in: 'path',
            name: 'scanId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FindingsSchema } },
    },
  },
})

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['patrowl-engine'],
  summary: 'Engine info page',
  description: 'Return information on engine.',
  operationId: 'getInfoPage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getLivenessRoute = createRoute({
  method: 'get',
  path: '/liveness',
  tags: ['patrowl-engine'],
  summary: 'Liveness page',
  description: 'Return liveness page',
  operationId: 'getLivenessPage',
  responses: { 200: { description: 'successful operation' } },
})

export const getReadinessRoute = createRoute({
  method: 'get',
  path: '/readiness',
  tags: ['patrowl-engine'],
  summary: 'Readiness page',
  description: 'Return liveness page',
  operationId: 'getReadinessPage',
  responses: { 200: { description: 'successful operation' } },
})

export const getReloadconfigRoute = createRoute({
  method: 'get',
  path: '/reloadconfig',
  tags: ['patrowl-engine'],
  summary: 'Configuration reloading page',
  description: 'Reload the configuration file.',
  operationId: 'reloadConfigurationPage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postStartscanRoute = createRoute({
  method: 'post',
  path: '/startscan',
  tags: ['patrowl-engine'],
  summary: 'Start a new scan',
  description: 'Start a new scan.',
  operationId: 'StartScanPage',
  request: {
    body: { content: { 'application/json': { schema: ScanDefinitionSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['patrowl-engine'],
  summary: 'Status on all scans',
  description: 'Status all current scans.',
  operationId: 'StatusScansPage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getStatusScanIdRoute = createRoute({
  method: 'get',
  path: '/status/{scanId}',
  tags: ['patrowl-engine'],
  summary: 'Status of a scan',
  description: 'Status of a scan identified by id.',
  operationId: 'StatusScanPage',
  request: {
    params: z.object({
      scanId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Numeric ID of the scan to get status',
            in: 'path',
            name: 'scanId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getStopScanIdRoute = createRoute({
  method: 'get',
  path: '/stop/{scanId}',
  tags: ['patrowl-engine'],
  summary: 'Stop a scan',
  description: 'Stop a scan identified by id.',
  operationId: 'StopScanPage',
  request: {
    params: z.object({
      scanId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Numeric ID of the scan to stop',
            in: 'path',
            name: 'scanId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getStopscansRoute = createRoute({
  method: 'get',
  path: '/stopscans',
  tags: ['patrowl-engine'],
  summary: 'Stop all scans',
  description: 'Stop all current scans.',
  operationId: 'StopScansPage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getTestRoute = createRoute({
  method: 'get',
  path: '/test',
  tags: ['patrowl-engine'],
  summary: 'Test page',
  description: 'Return test page',
  operationId: 'getTestPage',
  responses: { 200: { description: 'successful operation' } },
})
