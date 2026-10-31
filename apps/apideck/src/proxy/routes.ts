import { createRoute, z } from '@hono/zod-openapi'

const OkResponse = {
  description: 'Ok',
  content: { 'application/json': { schema: z.any(), example: {} } },
}

const ProxyErrorResponse = {
  description: 'Proxy error',
  content: { 'application/json': { schema: z.any() } },
  headers: z.object({
    'x-apideck-downstream-error': {
      schema: z
        .boolean()
        .exactOptional()
        .openapi({
          param: { required: false },
          description: 'Indicates if the error returned in the body is from the downstream',
        }),
    },
  }),
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Contains parameter or domain specific information related to the error and why it occurred.',
              example: 'Failed to generate valid JWT Session. Verify applicationId is correct',
            }),
          error: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
              example: 'Unauthorized',
            }),
          message: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A human-readable message providing more details about the error.',
              example: 'Unauthorized Request',
            }),
          ref: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Link to documentation of error type',
              example: 'https://developers.apideck.com/errors#unauthorizederror',
            }),
          status_code: z
            .number()
            .exactOptional()
            .openapi({ description: 'HTTP status code', example: 401 }),
          type_name: z
            .string()
            .exactOptional()
            .openapi({ description: 'The type of error returned', example: 'UnauthorizedError' }),
        })
        .openapi({ 'x-apideck-schema-id': 'Unauthorized', required: [] }),
    },
  },
}

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the record you are acting upon.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const RawParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Include raw response. Mostly used for debugging purposes',
      in: 'query',
      name: 'raw',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const XApideckAppIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of your Unify application',
      example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
      in: 'header',
      name: 'x-apideck-app-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const XApideckConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the consumer which you want to get or push data from',
      in: 'header',
      name: 'x-apideck-consumer-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const XApideckDownstreamAuthorizationParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Downstream authorization header. This will skip the Vault token injection.',
      example: 'Bearer XXXXXXXXXXXXXXXXX',
      in: 'header',
      name: 'x-apideck-downstream-authorization',
      required: false,
      schema: { type: 'string' },
    },
  })

const XApideckDownstreamMethodParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Downstream method. If not provided the upstream method will be inherited,',
      example: 'GET',
      in: 'header',
      name: 'x-apideck-downstream-method',
      required: false,
      schema: { type: 'string' },
    },
  })

const XApideckDownstreamUrlParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Downstream URL',
      example: 'https://api.close.com/api/v1/lead',
      in: 'header',
      name: 'x-apideck-downstream-url',
      required: true,
      schema: { type: 'string' },
    },
  })

const XApideckServiceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.',
      example: 'close',
      in: 'header',
      name: 'x-apideck-service-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const ApplicationIdSecurityScheme = {
  description: 'The ID of your Unify application',
  in: 'header',
  name: 'x-apideck-app-id',
  type: 'apiKey',
}

export const getProxyRoute = createRoute({
  method: 'get',
  path: '/proxy',
  tags: ['Execute'],
  summary: 'GET',
  description:
    'Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.\n**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.\n',
  operationId: 'getProxy',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-service-id': XApideckServiceIdParamsSchema,
      'x-apideck-downstream-url': XApideckDownstreamUrlParamsSchema,
      'x-apideck-downstream-authorization': XApideckDownstreamAuthorizationParamsSchema,
    }),
  },
  responses: { 200: OkResponse, 401: UnauthorizedResponse, default: ProxyErrorResponse },
  security: [{ apiKey: [] }],
})

export const putProxyRoute = createRoute({
  method: 'put',
  path: '/proxy',
  tags: ['Execute'],
  summary: 'PUT',
  description:
    'Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.\n**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.\n',
  operationId: 'putProxy',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-service-id': XApideckServiceIdParamsSchema,
      'x-apideck-downstream-url': XApideckDownstreamUrlParamsSchema,
      'x-apideck-downstream-authorization': XApideckDownstreamAuthorizationParamsSchema,
    }),
    body: {
      description:
        'Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.',
      content: {
        '*/*': {
          schema: z.union([
            z
              .object({})
              .openapi({
                example: {
                  addresses: [
                    {
                      address_1: '747 Howard St',
                      address_2: 'Room 3',
                      city: 'San Francisco',
                      country: 'US',
                      label: 'business',
                      state: 'CA',
                      zipcode: '94103',
                    },
                  ],
                  contacts: [
                    {
                      emails: [{ email: 'gob@example.com', type: 'office' }],
                      name: 'Gob',
                      phones: [{ phone: '8004445555', type: 'office' }],
                      title: 'Sr. Vice President',
                    },
                  ],
                  description: 'Best. Show. Ever.',
                  name: 'Rich Company',
                  url: 'http://therichcompany.tumblr.com/',
                },
              }),
            z.string(),
          ]),
        },
      },
    },
  },
  responses: { 200: OkResponse, 401: UnauthorizedResponse, default: ProxyErrorResponse },
  security: [{ apiKey: [] }],
})

export const postProxyRoute = createRoute({
  method: 'post',
  path: '/proxy',
  tags: ['Execute'],
  summary: 'POST',
  description:
    'Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.\n**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.\n',
  operationId: 'postProxy',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-service-id': XApideckServiceIdParamsSchema,
      'x-apideck-downstream-url': XApideckDownstreamUrlParamsSchema,
      'x-apideck-downstream-authorization': XApideckDownstreamAuthorizationParamsSchema,
    }),
    body: {
      description:
        'Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.',
      content: {
        '*/*': {
          schema: z.union([
            z
              .object({})
              .openapi({
                example: {
                  addresses: [
                    {
                      address_1: '747 Howard St',
                      address_2: 'Room 3',
                      city: 'San Francisco',
                      country: 'US',
                      label: 'business',
                      state: 'CA',
                      zipcode: '94103',
                    },
                  ],
                  contacts: [
                    {
                      emails: [{ email: 'gob@example.com', type: 'office' }],
                      name: 'Gob',
                      phones: [{ phone: '8004445555', type: 'office' }],
                      title: 'Sr. Vice President',
                    },
                  ],
                  description: 'Best. Show. Ever.',
                  name: 'Bluth Company',
                  url: 'http://thebluthcompany.tumblr.com/',
                },
              }),
            z.string(),
          ]),
        },
      },
    },
  },
  responses: { 200: OkResponse, 401: UnauthorizedResponse, default: ProxyErrorResponse },
  security: [{ apiKey: [] }],
})

export const deleteProxyRoute = createRoute({
  method: 'delete',
  path: '/proxy',
  tags: ['Execute'],
  summary: 'DELETE',
  description:
    'Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.\n**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.\n',
  operationId: 'deleteProxy',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-service-id': XApideckServiceIdParamsSchema,
      'x-apideck-downstream-url': XApideckDownstreamUrlParamsSchema,
      'x-apideck-downstream-authorization': XApideckDownstreamAuthorizationParamsSchema,
    }),
  },
  responses: { 200: OkResponse, 401: UnauthorizedResponse, default: ProxyErrorResponse },
  security: [{ apiKey: [] }],
})

export const optionsProxyRoute = createRoute({
  method: 'options',
  path: '/proxy',
  tags: ['Execute'],
  summary: 'OPTIONS',
  description:
    'Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.\n**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.\n',
  operationId: 'optionsProxy',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-service-id': XApideckServiceIdParamsSchema,
      'x-apideck-downstream-url': XApideckDownstreamUrlParamsSchema,
      'x-apideck-downstream-authorization': XApideckDownstreamAuthorizationParamsSchema,
    }),
  },
  responses: { 200: OkResponse, 401: UnauthorizedResponse, default: ProxyErrorResponse },
  security: [{ apiKey: [] }],
})

export const patchProxyRoute = createRoute({
  method: 'patch',
  path: '/proxy',
  tags: ['Execute'],
  summary: 'PATCH',
  description:
    'Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.\n**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.\n',
  operationId: 'patchProxy',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-service-id': XApideckServiceIdParamsSchema,
      'x-apideck-downstream-url': XApideckDownstreamUrlParamsSchema,
      'x-apideck-downstream-authorization': XApideckDownstreamAuthorizationParamsSchema,
    }),
    body: {
      description:
        'Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.',
      content: {
        '*/*': {
          schema: z.union([
            z
              .object({})
              .openapi({
                example: {
                  addresses: [
                    {
                      address_1: '747 Howard St',
                      address_2: 'Room 3',
                      city: 'San Francisco',
                      country: 'US',
                      label: 'business',
                      state: 'CA',
                      zipcode: '94103',
                    },
                  ],
                  contacts: [
                    {
                      emails: [{ email: 'gob@example.com', type: 'office' }],
                      name: 'Gob',
                      phones: [{ phone: '8004445555', type: 'office' }],
                      title: 'Sr. Vice President',
                    },
                  ],
                  description: 'Best. Show. Ever.',
                  name: 'Bluth Company',
                  url: 'http://thebluthcompany.tumblr.com/',
                },
              }),
            z.string(),
          ]),
        },
      },
    },
  },
  responses: { 200: OkResponse, 401: UnauthorizedResponse, default: ProxyErrorResponse },
  security: [{ apiKey: [] }],
})
