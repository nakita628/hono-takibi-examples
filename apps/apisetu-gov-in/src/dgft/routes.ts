import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'header', name: 'X-APISETU-APIKEY', type: 'apiKey' }

const ClientIdSecurityScheme = { in: 'header', name: 'X-APISETU-CLIENTID', type: 'apiKey' }

export const getV1IecIecRoute = createRoute({
  method: 'get',
  path: '/v1/iec/{iec}',
  tags: ['APIs'],
  summary: 'Importer-Exporter Code (IEC) Verification API.',
  description: 'Description of Importer-Exporter Code (IEC) Verification API.',
  operationId: 'Importer-Exporter Code Verification API',
  request: {
    params: z.object({
      iec: z
        .string()
        .openapi({
          param: {
            description: 'Importer-Exporter code',
            in: 'path',
            name: 'iec',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              addressLine1: z.string().min(1).openapi({ example: 'Noida' }),
              addressLine2: z.string().openapi({ example: '' }),
              branch: z
                .array(
                  z
                    .object({
                      badd1: z.string().min(1).openapi({ example: 'Bokaro' }),
                      badd2: z.string().openapi({ example: '' }),
                      branchCode: z.string().min(1).openapi({ example: 1 }),
                      city: z.string().min(1).openapi({ example: 'Bokaro' }),
                      pin: z.string().min(1).openapi({ example: 827012 }),
                      state: z.string().min(1).openapi({ example: 'JHARKHAND' }),
                    })
                    .openapi({
                      required: ['branchCode', 'badd1', 'badd2', 'city', 'state', 'pin'],
                    }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              city: z.string().min(1).openapi({ example: 'Bokaro' }),
              dataAsOn: z.iso.datetime({ offset: true }),
              directors: z
                .array(
                  z
                    .object({ name: z.string().min(1).openapi({ example: "Mukund's IEC" }) })
                    .openapi({ required: ['name'] }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              entityName: z.string().min(1).openapi({ example: "Mukund's IEC" }),
              exporterType: z.string().min(1).openapi({ example: 1 }),
              iec: z.string().min(1).openapi({ example: 'CGRPK3746C' }),
              iecIssueDate: z.string().min(1).openapi({ example: 8062020 }),
              iecModificationDate: z.string().openapi({ example: '' }),
              iecStatus: z.string().min(0).openapi({ example: 0 }),
              natureOfConcern: z.string().min(1).openapi({ example: 1 }),
              pan: z.string().min(1).openapi({ example: 'CGRPK3746CFT001' }),
              pin: z.string().min(1).openapi({ example: 827012 }),
              state: z.string().min(1).openapi({ example: 'JHARKHAND' }),
            })
            .openapi({
              required: [
                'iec',
                'entityName',
                'addressLine1',
                'addressLine2',
                'city',
                'state',
                'pin',
                'iecIssueDate',
                'exporterType',
                'pan',
                'iecStatus',
                'iecModificationDate',
                'dataAsOn',
                'natureOfConcern',
                'branch',
                'directors',
              ],
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.enum(['invalid parameter', 'missing parameter']).exactOptional(),
              errorDescription: z
                .enum(['Bad request', 'Please provide all mandatory parameters.'])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Authentication failed',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.enum(['invalid_authentication', 'invalid_authorization']).exactOptional(),
              errorDescription: z
                .enum(['Authentication failed', 'You are not authorized to use this API'])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.enum(['record_not_found', 'Url not found']).exactOptional(),
              errorDescription: z
                .enum(['No record found', 'Your API url or path is incorrect.'])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.literal('internal_server_error').exactOptional(),
              errorDescription: z.literal('Internal server error').exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    502: {
      description: 'Bad Gateway',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.literal('bad gateway').exactOptional(),
              errorDescription: z
                .literal('Publisher service returned an invalid response.')
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    503: {
      description: 'Service Unavailable',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.literal('service_unavailable').exactOptional(),
              errorDescription: z
                .literal('Publisher service is temporarily unavailable')
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    504: {
      description: 'Gateway Timeout',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.literal('gateway_timeout').exactOptional(),
              errorDescription: z
                .literal('Publisher service did not respond in time')
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [] }, { clientId: [] }],
})
