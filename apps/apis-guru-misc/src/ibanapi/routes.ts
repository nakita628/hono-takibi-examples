import { createRoute, z } from '@hono/zod-openapi'

const _400Schema = z
  .object({
    data: z.object({}).exactOptional().openapi({ example: '{}' }),
    message: z.string().exactOptional().openapi({ example: 'Your balance is exhausted' }),
    result: z.int().exactOptional().openapi({ example: '400' }),
  })
  .openapi({ required: [] })
  .openapi('_400')

const _401Schema = z
  .object({
    data: z.object({}).exactOptional().openapi({ example: '{}' }),
    message: z.string().exactOptional().openapi({ example: 'Your package has expired' }),
    result: z.int().exactOptional().openapi({ example: '401' }),
  })
  .openapi({ required: [] })
  .openapi('_401')

const _403Schema = z
  .object({
    data: z.object({}).exactOptional().openapi({ example: '{}' }),
    message: z.string().exactOptional().openapi({ example: 'Invalid API Key' }),
    result: z.int().exactOptional().openapi({ example: '403' }),
  })
  .openapi({ required: [] })
  .openapi('_403')

const _422Schema = z
  .object({
    data: z.object({}).exactOptional().openapi({ example: '{}' }),
    message: z.string().exactOptional().openapi({ example: 'API key is missing' }),
    result: z.int().exactOptional().openapi({ example: '422' }),
  })
  .openapi({ required: [] })
  .openapi('_422')

const BalanceResponseSchema = z
  .object({
    data: z
      .object({})
      .exactOptional()
      .openapi({ example: { bank_balance: 100, basic_balance: 2000, expiry_date: '2021-05-16' } }),
    message: z.string().exactOptional().openapi({ example: 'SUCCESS' }),
    result: z.int().exactOptional().openapi({ example: '200' }),
  })
  .openapi({ required: [] })
  .openapi('BalanceResponse')

const IBANResultSchema = z
  .object({
    data: z
      .object({})
      .exactOptional()
      .openapi({
        example: {
          bank: {
            address: 'TORNIMAE 2 FLOOR 10',
            bank_name: 'AS SEB PANK',
            bic: 'EEUHEE2X',
            city: 'TALLINN',
            phone: '',
            state: '',
            zip: '15010',
          },
          bank_account: '00102014568',
          bban: '1000001020145685',
          country_code: 'EE',
          country_name: 'Estonia',
          currency_code: 'EUR',
          iso_alpha3: 'EST',
          sepa: {
            sepa_b2b: 'No',
            sepa_card_clearing: 'No',
            sepa_credit_transfer: 'Yes',
            sepa_direct_debit: 'No',
            sepa_sdd_core: 'No',
          },
          sepa_member: 'Yes',
        },
      }),
    expremental: z.int().exactOptional().openapi({ example: '0' }),
    message: z.string().exactOptional().openapi({ example: 'Valid IBAN Number' }),
    result: z.int().exactOptional().openapi({ example: '200' }),
    validations: z
      .array(z.any())
      .exactOptional()
      .openapi({
        example: [
          { message: 'Valid IBAN length', result: 200 },
          { message: 'Valid IBAN Checksum', result: 200 },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('IBANResult')

const IBANResultBasicSchema = z
  .object({
    data: z
      .object({})
      .exactOptional()
      .openapi({
        example: {
          bban: '1000001020145685',
          country_code: 'EE',
          country_name: 'Estonia',
          currency_code: 'EUR',
          iso_alpha3: 'EST',
          sepa: [],
          sepa_member: 'Yes',
        },
      }),
    expremental: z.int().exactOptional().openapi({ example: '0' }),
    message: z.string().exactOptional().openapi({ example: 'Valid IBAN Number' }),
    result: z.int().exactOptional().openapi({ example: '200' }),
    validations: z
      .array(z.any())
      .exactOptional()
      .openapi({
        example: [
          { message: 'Valid IBAN length', result: 200 },
          { message: 'Valid IBAN Checksum', result: 200 },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('IBANResultBasic')

const IbanParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The IBAN',
      in: 'query',
      name: 'iban',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecuritySecurityScheme = {
  description: 'Your API Key, you can get it from https://ibanapi.com',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

export const getBalanceRoute = createRoute({
  method: 'get',
  path: '/balance',
  tags: ['IBANAPI'],
  summary: 'Get Account Balance',
  description: 'Returns the account balance and expiry',
  operationId: 'getBalance',
  responses: {
    200: {
      description: 'SUCCESS',
      content: { 'application/json': { schema: BalanceResponseSchema } },
    },
    400: {
      description: 'Your balance is exhausted or bad request',
      content: { 'application/json': { schema: _400Schema } },
    },
    401: {
      description: 'Package expired or account was blocked',
      content: { 'application/json': { schema: _401Schema } },
    },
    403: {
      description: 'Invalid API Key',
      content: { 'application/json': { schema: _403Schema } },
    },
    422: {
      description: 'API key is missing',
      content: { 'application/json': { schema: _422Schema } },
    },
  },
  security: [{ api_key_security: [] }],
})

export const getValidateRoute = createRoute({
  method: 'get',
  path: '/validate',
  tags: ['IBANAPI'],
  summary: 'Validate IBAN',
  description: 'Returns the validation results',
  operationId: 'validateIBAN',
  request: { query: z.object({ iban: IbanParamsSchema }) },
  responses: {
    200: {
      description: 'Valid IBAN response',
      content: { 'application/json': { schema: IBANResultSchema } },
    },
    400: {
      description: 'Your balance is exhausted or bad request',
      content: { 'application/json': { schema: _400Schema } },
    },
    401: {
      description: 'Package expired or account was blocked',
      content: { 'application/json': { schema: _401Schema } },
    },
    403: {
      description: 'Invalid API Key',
      content: { 'application/json': { schema: _403Schema } },
    },
    422: {
      description: 'API key is missing',
      content: { 'application/json': { schema: _422Schema } },
    },
  },
  security: [{ api_key_security: [] }],
})

export const getValidateBasicRoute = createRoute({
  method: 'get',
  path: '/validate-basic',
  tags: ['IBANAPI'],
  summary: 'Validate IBAN Basic',
  description: 'Returns the basic validation results',
  operationId: 'validateIBANBasic',
  request: { query: z.object({ iban: IbanParamsSchema }) },
  responses: {
    200: {
      description: 'Valid IBAN response',
      content: { 'application/json': { schema: IBANResultBasicSchema } },
    },
    400: {
      description: 'Your balance is exhausted or bad request',
      content: { 'application/json': { schema: _400Schema } },
    },
    401: {
      description: 'Package expired or account was blocked',
      content: { 'application/json': { schema: _401Schema } },
    },
    403: {
      description: 'Invalid API Key',
      content: { 'application/json': { schema: _403Schema } },
    },
    422: {
      description: 'API key is missing',
      content: { 'application/json': { schema: _422Schema } },
    },
  },
  security: [{ api_key_security: [] }],
})
