import { createRoute, z } from '@hono/zod-openapi'

const ConnectedDevicesResponseSchema = z
  .object({
    uniqueDeviceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of the unique IDs of the devices that have an active cloud connection. \nThe IDs are payment terminal IDs in the format _[terminal model]-[serial number]_ (for example, P400‑123456789), or SDK installation IDs as used in Mobile solutions. ',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConnectedDevicesResponse')

const InvalidFieldSchema = z
  .object({
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
    message: z.string().openapi({ description: 'Description of the validation error.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const DefaultErrorResponseEntitySchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().exactOptional().openapi({ description: 'Unique business error code.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI that identifies the specific occurrence of the problem if applicable.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Array of fields with validation errors when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that identifies the validation error type. It points to human-readable documentation for the problem type.',
      }),
  })
  .openapi({
    description: 'Standardized error response following RFC-7807 format',
    externalDocs: { url: 'https://www.rfc-editor.org/rfc/rfc7807' },
    required: [],
  })
  .openapi('DefaultErrorResponseEntity')

const DeviceStatusSchema = z.enum(['ONLINE', 'OFFLINE']).openapi('DeviceStatus')

const DeviceStatusResponseSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identification of the device. \nThis can be a payment terminal ID in the format _[terminal model]-[serial number]_ (for example, P400‑123456789), or an SDK installation ID as used in Mobile solutions. ',
      }),
    status: DeviceStatusSchema.exactOptional().openapi({
      description:
        'Indicates if the device has an active cloud connection. Possible values: \n* **ONLINE** \n* **OFFLINE** ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeviceStatusResponse')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getMerchantsMerchantAccountConnectedDevicesRoute = createRoute({
  method: 'get',
  path: '/merchants/{merchantAccount}/connectedDevices',
  tags: ['Cloud endpoints and connection'],
  summary: 'Get a list of connected devices',
  description:
    'Get a list of payment terminals or SDK installation IDs (in a Mobile solution) belonging to the specified merchant account that have an active cloud connection.  The `store` query parameter limits the list of devices to those belonging to a specific store under the specified merchant account. \n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n\n* **Cloud Device API role**',
  operationId: 'get-merchants-merchantAccount-connectedDevices',
  request: {
    params: z.object({
      merchantAccount: z
        .string()
        .openapi({
          param: {
            name: 'merchantAccount',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      store: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'store',
            in: 'query',
            description:
              'The store ID of the store belonging to the merchant account specified in the path. ',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: ConnectedDevicesResponseSchema,
          examples: {
            'connected-devices-for-merchant-200': {
              summary: 'List of connected devices for a merchant',
              description:
                'The response returned when querying for list of connected devices for the merchant account',
              value: {
                uniqueDeviceIds: [
                  'S1F2-000158215131748',
                  'S1F2-000158215131749',
                  'S1F2-000158215131750',
                  'M400-401972710',
                  'M400-401972715',
                  'M400-401972720',
                ],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'connected-devices-for-merchant-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'connected-devices-for-merchant-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: "User doesn't have access to all token policy resources",
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
  },
})

export const postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute = createRoute({
  method: 'post',
  path: '/merchants/{merchantAccount}/devices/{deviceId}/async',
  tags: ['Cloud endpoints and connection'],
  summary: 'Send a Terminal API request and receive an asynchronous response',
  description:
    'Sends a Terminal API request and receives the response asynchronously.\n\nThe request body is a JSON object containing a Terminal API request. For the structure, see the various request types under [Terminal API](https://docs.adyen.com/api-explorer/terminal-api/1/overview).\n\nA HTTP status code of **200 OK** is returned when the payment device is online and our backend has sent the request. The actual Terminal API response is returned as an event notification webhook to your event notification endpoint. See [Receiving an asynchronous result](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/#async).\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n\n* **Cloud Device API role**',
  operationId: 'post-merchants-merchantAccount-devices-deviceId-async',
  request: {
    params: z.object({
      merchantAccount: z
        .string()
        .openapi({
          param: {
            name: 'merchantAccount',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the payment device that you send this request to. Must be the same as the `POIID` in the `MessageHeader` of the Terminal API request. \n\nIn an integration with payment terminals, use the terminal ID in the format _[terminal model]-[serial number]_, for example, **P400‑123456789**. In a Mobile solution, use the installation ID of the SDK.\n ',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getMerchantsMerchantAccountDevicesDeviceIdStatusRoute = createRoute({
  method: 'get',
  path: '/merchants/{merchantAccount}/devices/{deviceId}/status',
  tags: ['Cloud endpoints and connection'],
  summary: 'Get the connection status of a device',
  description:
    'Check if the specified payment terminal or SDK installation ID (in an IPP Mobile solution) has an active cloud connection.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n\n* **Cloud Device API role**',
  operationId: 'get-merchants-merchantAccount-devices-deviceId-status',
  request: {
    params: z.object({
      merchantAccount: z
        .string()
        .openapi({
          param: {
            name: 'merchantAccount',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the device. \n\nFor a payment terminal, use the terminal ID in the format _[terminal model]-[serial number]_, for example, **P400‑123456789**. \nIn a Mobile solution, use the installation ID of the SDK.\n ',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: DeviceStatusResponseSchema,
          examples: {
            'connected-device-status-200': {
              summary: 'Connectivity status of a device',
              description:
                'The response returned when querying for the connection status of a device',
              value: { deviceId: 'AMS1-000168242800763', status: 'ONLINE' },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'connected-device-status-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'connected-device-status-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: "User doesn't have access to all token policy resources",
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
  },
})

export const postMerchantsMerchantAccountDevicesDeviceIdSyncRoute = createRoute({
  method: 'post',
  path: '/merchants/{merchantAccount}/devices/{deviceId}/sync',
  tags: ['Cloud endpoints and connection'],
  summary: 'Send a Terminal API request and receive a synchronous response',
  description:
    'Sends a Terminal API request and receives the response synchronously.\n\nThe request body is a JSON object containing a Terminal API request. For the structure, see the various request types under [Terminal API](https://docs.adyen.com/api-explorer/terminal-api/1/overview).\n\nThe response returns a Terminal API response. See [Receiving a synchronous result](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/#sync).\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n\n* **Cloud Device API role**',
  operationId: 'post-merchants-merchantAccount-devices-deviceId-sync',
  request: {
    params: z.object({
      merchantAccount: z
        .string()
        .openapi({
          param: {
            name: 'merchantAccount',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the payment device that you send this request to. Must be the same as the `POIID` in the `MessageHeader` of the Terminal API request. \n\nIn an integration with payment terminals, use the terminal ID in the format _[terminal model]-[serial number]_, for example, **P400‑123456789**. In a Mobile solution, use the installation ID of the SDK.\n ',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})
