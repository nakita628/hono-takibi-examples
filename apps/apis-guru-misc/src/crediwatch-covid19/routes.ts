import { createRoute, z } from '@hono/zod-openapi'

const GetStatusSchema = z
  .object({
    answered_by: z
      .string()
      .default('Not Available')
      .exactOptional()
      .openapi({ title: 'Answered By' }),
    error: z.string().default('Call cant be placed').exactOptional().openapi({ title: 'Error' }),
    option_selected: z
      .string()
      .exactOptional()
      .openapi({ title: 'Option Selected', default: ['Not Available'] }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ title: 'Phone Number', default: ['Not Available'] }),
    previously_verified_at: z
      .string()
      .exactOptional()
      .openapi({ title: 'Previously Verified At', default: ['Not Available'] }),
    progress: z.string().default('Not Available').exactOptional().openapi({ title: 'Progress' }),
    token: z.string().default('Not Available').exactOptional().openapi({ title: 'Token' }),
  })
  .openapi({ title: 'GetStatus', required: [] })
  .openapi('GetStatus')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const PlaceCallSchema = z
  .object({
    answered_by: z
      .string()
      .default('Not Available')
      .exactOptional()
      .openapi({ title: 'Answered By' }),
    error: z.string().default('Call cant be placed').exactOptional().openapi({ title: 'Error' }),
    option_selected: z
      .string()
      .exactOptional()
      .openapi({ title: 'Option Selected', default: ['Not Available'] }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ title: 'Phone Number', default: ['Not Available'] }),
    previously_verified_at: z
      .string()
      .exactOptional()
      .openapi({ title: 'Previously Verified At', default: ['Not Available'] }),
    progress: z.string().default('Not Available').exactOptional().openapi({ title: 'Progress' }),
    token: z.string().default('Not Available').exactOptional().openapi({ title: 'Token' }),
  })
  .openapi({ title: 'PlaceCall', required: [] })
  .openapi('PlaceCall')

const VerifyNameMetaSchema = z
  .object({
    job_id: z
      .string()
      .default('111111111111111111111111')
      .exactOptional()
      .openapi({ title: 'Job Id' }),
    job_time: z.int().default(24).exactOptional().openapi({ title: 'Job Time' }),
    query: z.string().openapi({ title: 'Query' }),
  })
  .openapi({ required: ['query'], title: 'VerifyNameMeta' })
  .openapi('VerifyNameMeta')

const StatusCallSchema = z
  .object({ data: GetStatusSchema, meta: VerifyNameMetaSchema })
  .openapi({ required: ['meta', 'data'], title: 'StatusCall' })
  .openapi('StatusCall')

const VerifyNameDataSchema = z
  .object({
    business_name: z
      .string()
      .default('Not Available')
      .exactOptional()
      .openapi({ title: 'Business Name' }),
    city: z.string().default('Not Available').exactOptional().openapi({ title: 'City' }),
    department_code_and_type: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({ title: 'Department Code And Type' }),
    entity_type: z
      .string()
      .default('Not Available')
      .exactOptional()
      .openapi({ title: 'Entity Type' }),
    is_gstn_verified: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Is Gstn Verified' }),
    nature_of_business: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({ title: 'Nature Of Business' }),
    pincode: z.int().default(999999).exactOptional().openapi({ title: 'Pincode' }),
    registration_date: z
      .string()
      .default('Not Available')
      .exactOptional()
      .openapi({ title: 'Registration Date' }),
    registration_type: z
      .string()
      .default('Not Available')
      .exactOptional()
      .openapi({ title: 'Registration Type' }),
    state: z.string().default('Not Available').exactOptional().openapi({ title: 'State' }),
  })
  .openapi({ title: 'VerifyNameData', required: [] })
  .openapi('VerifyNameData')

const VerifyNameSchema = z
  .object({
    data: z.array(VerifyNameDataSchema).openapi({ title: 'Data' }),
    meta: VerifyNameMetaSchema,
  })
  .openapi({ required: ['meta', 'data'], title: 'VerifyName' })
  .openapi('VerifyName')

const VerifyPhoneSchema = z
  .object({ data: PlaceCallSchema, meta: VerifyNameMetaSchema })
  .openapi({ required: ['meta', 'data'], title: 'VerifyPhone' })
  .openapi('VerifyPhone')

export const getApiV1StatusCallRoute = createRoute({
  method: 'get',
  path: '/api/v1/status/call',
  summary: 'Status Call',
  operationId: 'status_call_api_v1_status_call_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { title: 'Query', type: 'string' },
          },
          title: 'Query',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: StatusCallSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getApiV1StatusSkuRoute = createRoute({
  method: 'get',
  path: '/api/v1/status/sku',
  summary: 'Status Sku',
  operationId: 'status_sku_api_v1_status_sku_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { title: 'Query', type: 'string' },
          },
          title: 'Query',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: StatusCallSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getApiV1VerifyNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/verify/name',
  summary: 'Verify Name',
  operationId: 'verify_name_api_v1_verify_name_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { title: 'Query', type: 'string' },
          },
          title: 'Query',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'state',
            required: false,
            schema: { title: 'State', type: 'string' },
          },
          title: 'State',
        }),
      city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'city',
            required: false,
            schema: { title: 'City', type: 'string' },
          },
          title: 'City',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VerifyNameSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getApiV1VerifyPhoneRoute = createRoute({
  method: 'get',
  path: '/api/v1/verify/phone',
  summary: 'Verify Business',
  operationId: 'verify_business_api_v1_verify_phone_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { title: 'Query', type: 'string' },
          },
          title: 'Query',
        }),
      locking_period: z
        .any()
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'locking_period',
            required: false,
            schema: { default: 24, title: 'Locking Period' },
          },
          title: 'Locking Period',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VerifyPhoneSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getApiV1VerifySkuRoute = createRoute({
  method: 'get',
  path: '/api/v1/verify/sku',
  summary: 'Verify Sku',
  operationId: 'verify_sku_api_v1_verify_sku_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { title: 'Query', type: 'string' },
          },
          title: 'Query',
        }),
      locking_period: z
        .any()
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'locking_period',
            required: false,
            schema: { default: 24, title: 'Locking Period' },
          },
          title: 'Locking Period',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VerifyPhoneSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
