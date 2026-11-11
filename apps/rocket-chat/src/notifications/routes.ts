import { createRoute, z } from '@hono/zod-openapi'

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { 'Success Example': { value: { success: true } } },
    },
  },
}

const XAuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      example: '9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq',
      description: 'The authorization token of the user.',
    },
  })

const XUserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      example: 'aobEdbYhXfu5hkeqG',
      description: 'The user ID of the user.',
    },
  })

export const getApiV1BannersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/banners/{id}',
  tags: ['Banners'],
  summary: 'Get Banner by ID',
  description: 'Gets the banner to be shown to the authenticated user.',
  operationId: 'get-api-v1-banners-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'ByehQjC44FwMeiLbX',
            name: 'id',
            in: 'path',
            required: true,
            description: 'The banner ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'web',
            in: 'query',
            name: 'platform',
            description: 'The platform rendering the banner.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              banners: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { banners: [], success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'platform' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1BannersRoute = createRoute({
  method: 'get',
  path: '/api/v1/banners',
  tags: ['Banners'],
  summary: 'Get Banners',
  description: 'Gets the banners to be shown to the authenticated user.',
  operationId: 'get-api-v1-banners',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'web',
            in: 'query',
            name: 'platform',
            description: 'The platform rendering the banner',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              banners: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { banners: [], success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'platform' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1BannersDismissRoute = createRoute({
  method: 'post',
  path: '/api/v1/banners.dismiss',
  tags: ['Banners'],
  summary: 'Dismiss a Banner',
  operationId: 'post-api-v1-banners.dismiss',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bannerId: z
                .string()
                .openapi({
                  description: 'The banner ID that you want to dismiss.',
                  example: 'ByehQjC44FwMeiLbX',
                }),
            })
            .openapi({ required: ['bannerId'] }),
          examples: { Success: { value: { bannerId: 'ByehQjC44FwMeiLbX' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'bannerId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1PushGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/push.get',
  tags: ['Push Notifications'],
  summary: 'Get Push Notification',
  description:
    'Get push notification for a message.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.5.0            | Added       |',
  operationId: 'get-api-v1-push.get',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'WkbwSntxt8D3jLp8G',
            in: 'query',
            name: 'id',
            description: 'The message ID.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  message: z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  notification: z
                    .object({
                      from: z.string().exactOptional(),
                      badge: z.int().exactOptional(),
                      sound: z.string().exactOptional(),
                      priority: z.int().exactOptional(),
                      title: z.string().exactOptional(),
                      text: z.string().exactOptional(),
                      payload: z
                        .object({
                          host: z.string().exactOptional(),
                          messageId: z.string().exactOptional(),
                          notificationType: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          sender: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          senderName: z.string().exactOptional(),
                          type: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      userId: z.string().exactOptional(),
                      notId: z.int().exactOptional(),
                      gcm: z
                        .object({
                          style: z.string().exactOptional(),
                          image: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      apn: z
                        .object({ category: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                data: {
                  message: {
                    _id: 'WkbwSntxt8D3jLp8G',
                    rid: 'iu7jtPAhvEeAS5tNq',
                    msg: 'fsfs',
                    ts: '2021-10-22T14:29:23.581Z',
                    u: { _id: 'd26x6zSkaPSe5gCyy', username: 'rodriq', name: 'Rodriq' },
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'fsfs' }] }],
                    _updatedAt: '2021-10-22T14:29:23.603Z',
                  },
                  notification: {
                    from: 'push',
                    badge: 2,
                    sound: 'default',
                    priority: 10,
                    title: '#vb',
                    text: 'rodriq: fsfs',
                    payload: {
                      host: 'http://localhost:3000/',
                      messageId: 'WkbwSntxt8D3jLp8G',
                      notificationType: 'message',
                      rid: 'iu7jtPAhvEeAS5tNq',
                      sender: { _id: 'd26x6zSkaPSe5gCyy', username: 'rodriq', name: 'Rodriq' },
                      senderName: 'rodriq',
                      type: 'c',
                      name: 'vb',
                    },
                    userId: 'd26x6zSkaPSe5gCyy',
                    notId: 654494840,
                    gcm: {
                      style: 'inbox',
                      image: 'http://localhost:3000/images/logo/android-chrome-192x192.png',
                    },
                    apn: { category: 'MESSAGE' },
                  },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            Example: { value: { success: false, error: "Match error: Missing key 'id'" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1PushTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/push.token',
  tags: ['Push Notifications'],
  summary: 'Create Push Token',
  description:
    '### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Changed response to flat `tokenType` and `tokenValue`.       |\n|0.60.0            | Added       |',
  operationId: 'post-api-v1-push.token',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional existing push token document ID to update.' }),
              type: z.string().openapi({ description: 'The possible values are `apn` or `gcm`.' }),
              value: z.string().openapi({ description: 'The token value.' }),
              appName: z
                .string()
                .openapi({
                  description: 'The name of the application to associate the token with.',
                }),
              voipToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional iOS VoIP (PushKit) token. Stored as a separate document; not returned in the response.',
                }),
            })
            .openapi({ required: ['type', 'value', 'appName'] }),
          examples: { Example: { value: { type: 'gcm', value: 'TOKEN', appName: 'MyApp' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  tokenType: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The token type: `apn`, `gcm`, or `voip`.' }),
                  tokenValue: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The device token.' }),
                  appName: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                result: {
                  tokenType: 'gcm',
                  tokenValue: 'TOKEN',
                  appName: 'RocketAPP',
                  userId: '52d5Rw8LT3TeDa59Z',
                  enabled: true,
                  createdAt: '2018-09-11T18:22:55.006Z',
                  _updatedAt: '2018-09-11T18:22:55.006Z',
                  _id: 'DMMjKG2hFoLvM2hk7',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Token Param': {
              value: {
                success: false,
                error: "must have required property 'type' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const deleteApiV1PushTokenRoute = createRoute({
  method: 'delete',
  path: '/api/v1/push.token',
  tags: ['Push Notifications'],
  summary: 'Delete Push Token',
  description:
    'Removes push token from the workspace.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.60.0            | Added       |',
  operationId: 'delete-api-v1-push.token',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
          examples: { Example: { value: { token: 'abc' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Token Parameter': {
              value: {
                success: false,
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1PushInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/push.info',
  tags: ['Push Notifications'],
  summary: 'Get Push Info',
  description: 'This endpoint returns the status of push gateway in your workspace.',
  operationId: 'get-api-v1-push.info',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              pushGatewayEnabled: z.boolean().exactOptional(),
              defaultPushGateway: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: { pushGatewayEnabled: true, defaultPushGateway: true, success: true },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1PushTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/push.test',
  tags: ['Push Notifications'],
  summary: 'Test Push Notifications',
  description:
    'Use this endpoint to test the push notifications configuration. The response indicates how many registered devices received the test notification.\n\nTo test successfully, make sure that you have logged into the workspace on the Rocket.Chat mobile app. By default, one request is allowed every 1000 milliseconds.\n\n**Permission required**:\n- `test-push-notifications`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added the `message` and `params` response fields. |',
  operationId: 'post-api-v1-push.test',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              tokensCount: z
                .int()
                .openapi({
                  description: 'The number of devices to which the test notification was sent.',
                }),
              message: z
                .string()
                .openapi({ description: 'The translation key for the test result message.' }),
              params: z
                .array(z.int())
                .openapi({ description: 'Values used to format the translated result message.' }),
              success: z.boolean(),
            })
            .openapi({ required: ['tokensCount', 'message', 'params', 'success'] }),
          examples: {
            'Example 1': {
              value: {
                tokensCount: 1,
                message: 'Your_push_was_sent_to_s_devices',
                params: [1],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})
