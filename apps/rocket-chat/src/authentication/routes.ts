import { createRoute, z } from '@hono/zod-openapi'

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional() })
        .openapi({ 'x-examples': { Success: { success: true } }, required: [] }),
      examples: { Success: { value: { success: true } } },
    },
  },
}

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

const AuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The `authToken` of the authenticated user.',
      required: true,
      schema: { type: 'string', example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' },
    },
    example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
  })

const AuthTokenNotRequiredParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The `authToken` of the authenticated user.',
      required: false,
      schema: { type: 'string', example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' },
    },
    example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The `userId` of the authenticated user.',
      required: true,
      schema: { type: 'string', example: 'rbAXPnMktTFbNpwtJ' },
    },
    example: 'rbAXPnMktTFbNpwtJ',
  })

const UserIdNotRequiredParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The `userId` of the authenticated user.',
      required: false,
      schema: { type: 'string', example: 'rbAXPnMktTFbNpwtJ' },
    },
    example: 'rbAXPnMktTFbNpwtJ',
  })

export const postApiV1LoginRoute = createRoute({
  method: 'post',
  path: '/api/v1/login',
  tags: ['Authentication'],
  summary: 'Login with Username and Password',
  description:
    "-  Although none of the body parameters are required, it's mandatory to include  either the `user` AND `password`  or only the `resume` parameter.\n\n- To authenticate a request, you need to pass the `userId` and `authToken` values from this JSON response object as headers in the request. The `authToken` is passed as `X-Auth-Token` header, while the `userId` as `X-User-Id` header.\n\n-  If LDAP authentication is enabled, you must maintain the login in the same way as you normally do. Similarly, if 2FA is enabled for an LDAP user, everything stays the same.\n  \n### Changelog\n| Version      | Description | \n | ---------------- | ------------|\n |1.0.0            | Added `avatarUrl` property to response       |\n |0.64.0            | Added `me` property.      |\n |0.60.0            | Added      |",
  operationId: 'post-api-v1-login',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .string()
                .exactOptional()
                .openapi({ description: 'Your user name or email.', example: 'myusername' }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Your pasword.', example: 'my$up3erP@ssw0rd' }),
              resume: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Your previously issued `authToken`.',
                  example: '9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq',
                }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The 2FA code. It is required if your account has two-factor authentication enabled .',
                  example: '2246d10',
                }),
            })
            .openapi({ required: [] }),
          examples: { Example: { value: { user: 'test@rocket.test', password: 'vanvica32' } } },
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
              status: z.string().exactOptional(),
              data: z
                .object({
                  authToken: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  me: z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      status: z.string().exactOptional(),
                      statusConnection: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      utcOffset: z.int().exactOptional(),
                      active: z.boolean().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
                      settings: z
                        .object({ preferences: z.looseObject({}).exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      avatarUrl: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              'x-examples': {
                Example: {
                  status: 'success',
                  data: {
                    authToken: '9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq',
                    userId: 'aobEdbYhXfu5hkeqG',
                    me: {
                      _id: 'aYjNnig8BEAWeQzMh',
                      name: 'Rocket Cat',
                      emails: [{ address: 'rocket.cat@rocket.chat', verified: false }],
                      status: 'offline',
                      statusConnection: 'offline',
                      username: 'rocket.cat',
                      utcOffset: -3,
                      active: true,
                      roles: ['admin'],
                      settings: { preferences: {} },
                      avatarUrl: 'http://localhost:3000/avatar/test',
                    },
                  },
                },
              },
              required: [],
            }),
          examples: {
            'Login successful': {
              value: {
                status: 'success',
                data: {
                  authToken: '9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq',
                  userId: 'aobEdbYhXfu5hkeqG',
                  me: {
                    _id: 'aYjNnig8BEAWeQzMh',
                    name: 'Rocket Cat',
                    emails: [{ address: 'rocket.cat@rocket.chat', verified: false }],
                    status: 'offline',
                    statusConnection: 'offline',
                    username: 'rocket.cat',
                    utcOffset: -3,
                    active: true,
                    roles: ['admin'],
                    settings: { preferences: {} },
                    avatarUrl: 'http://localhost:3000/avatar/test',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LogoutRoute = createRoute({
  method: 'post',
  path: '/api/v1/logout',
  tags: ['Authentication'],
  summary: 'Logout',
  description: 'Invalidate your REST API authentication token.',
  operationId: 'post-api-v1-logout',
  request: {
    headers: z.object({
      'X-Auth-Token': z
        .string()
        .openapi({
          param: {
            name: 'X-Auth-Token',
            in: 'header',
            description: 'The authorization token of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-User-Id': z
        .string()
        .openapi({
          param: {
            name: 'X-User-Id',
            in: 'header',
            description: 'The user id of the user',
            required: true,
            schema: { type: 'string' },
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
              status: z.string().exactOptional(),
              data: z
                .object({ message: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            Example: { value: { status: 'success', data: { message: "You've been logged out!" } } },
          },
        },
      },
    },
  },
})

export const postApiV1LoginCodeRedeemRoute = createRoute({
  method: 'post',
  path: '/api/v1/loginCode.redeem',
  tags: ['Authentication'],
  summary: 'Redeem Login Code',
  description:
    'Redeems a one-time OAuth login code and returns the `loginToken` and `userId`. Use these values as the `X-Auth-Token` and `X-User-Id` headers in authenticated requests.\n\nThis endpoint does not require authentication. Each code is single-use, expires after 60 seconds, and is limited to 10 redemption requests per minute per caller.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.7.0   | Added       |',
  operationId: 'post-api-v1-loginCode.redeem',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              code: z
                .string()
                .length(64)
                .openapi({
                  description: 'The one-time login code issued by the server-side OAuth flow.',
                  example: '4f1d2c3b4a5968778695a4b3c2d1e0f1123456789abcdef00fedcba987654321',
                }),
            })
            .openapi({ required: ['code'] }),
          examples: {
            'Redeem login code': {
              value: { code: '4f1d2c3b4a5968778695a4b3c2d1e0f1123456789abcdef00fedcba987654321' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ loginToken: z.string(), userId: z.string(), success: z.boolean() })
            .openapi({ required: ['loginToken', 'userId', 'success'] }),
          examples: {
            'Redemption successful': {
              value: {
                loginToken: '9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq',
                userId: 'aobEdbYhXfu5hkeqG',
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
            'Invalid request': {
              value: {
                success: false,
                error: 'must NOT have fewer than 64 characters [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
            'Invalid or expired code': { value: { success: false, error: 'error-invalid-code' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1MeRoute = createRoute({
  method: 'get',
  path: '/api/v1/me',
  tags: ['Authentication'],
  summary: 'Get Profile Information',
  description:
    'Quick information about the authenticated user.\n### Changelog\n | Version      | Description | \n | ---------------- | ------------|\n |1.0.0            | Added `avatarUrl` property to response       |\n |0.68.0            | Added `customFields` property.      |\n |0.48.0            | Added      |',
  operationId: 'get-api-v1-me',
  request: {
    headers: z.object({
      'X-User-Id': z
        .string()
        .openapi({
          param: {
            name: 'X-User-Id',
            in: 'header',
            description: 'The user ID of the user.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-Auth-Token': z
        .string()
        .openapi({
          param: {
            name: 'X-Auth-Token',
            in: 'header',
            description: 'The authorization token of the user.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "OK \n\nThe `customFields` parameter won't be returned if it doesn't exist on the workspace.",
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              emails: z
                .array(
                  z
                    .object({
                      address: z.string().exactOptional(),
                      verified: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              status: z.string().exactOptional(),
              statusConnection: z.string().exactOptional(),
              username: z.string().exactOptional(),
              utcOffset: z.int().exactOptional(),
              active: z.boolean().exactOptional(),
              roles: z.array(z.string()).exactOptional(),
              settings: z
                .object({
                  preferences: z
                    .object({
                      enableAutoAway: z.boolean().exactOptional(),
                      idleTimeoutLimit: z.int().exactOptional(),
                      desktopNotificationDuration: z.int().exactOptional(),
                      audioNotifications: z.string().exactOptional(),
                      desktopNotifications: z.string().exactOptional(),
                      mobileNotifications: z.string().exactOptional(),
                      unreadAlert: z.boolean().exactOptional(),
                      useEmojis: z.boolean().exactOptional(),
                      convertAsciiEmoji: z.boolean().exactOptional(),
                      autoImageLoad: z.boolean().exactOptional(),
                      saveMobileBandwidth: z.boolean().exactOptional(),
                      collapseMediaByDefault: z.boolean().exactOptional(),
                      hideUsernames: z.boolean().exactOptional(),
                      hideRoles: z.boolean().exactOptional(),
                      hideFlexTab: z.boolean().exactOptional(),
                      hideAvatars: z.boolean().exactOptional(),
                      roomsListExhibitionMode: z.string().exactOptional(),
                      sidebarViewMode: z.string().exactOptional(),
                      sidebarHideAvatar: z.boolean().exactOptional(),
                      sidebarShowUnread: z.boolean().exactOptional(),
                      sidebarShowFavorites: z.boolean().exactOptional(),
                      sendOnEnter: z.string().exactOptional(),
                      messageViewMode: z.int().exactOptional(),
                      emailNotificationMode: z.string().exactOptional(),
                      roomCounterSidebar: z.boolean().exactOptional(),
                      newRoomNotification: z.string().exactOptional(),
                      newMessageNotification: z.string().exactOptional(),
                      muteFocusedConversations: z.boolean().exactOptional(),
                      notificationsSoundVolume: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              customFields: z
                .object({ twitter: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              avatarUrl: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  _id: 'aobEdbYhXfu5hkeqG',
                  name: 'Example User',
                  emails: [{ address: 'example@example.com', verified: true }],
                  status: 'offline',
                  statusConnection: 'offline',
                  username: 'example',
                  utcOffset: 0,
                  active: true,
                  roles: ['user', 'admin'],
                  settings: {
                    preferences: {
                      enableAutoAway: false,
                      idleTimeoutLimit: 300,
                      desktopNotificationDuration: 0,
                      audioNotifications: 'mentions',
                      desktopNotifications: 'mentions',
                      mobileNotifications: 'mentions',
                      unreadAlert: true,
                      useEmojis: true,
                      convertAsciiEmoji: true,
                      autoImageLoad: true,
                      saveMobileBandwidth: true,
                      collapseMediaByDefault: false,
                      hideUsernames: false,
                      hideRoles: false,
                      hideFlexTab: false,
                      hideAvatars: false,
                      roomsListExhibitionMode: 'category',
                      sidebarViewMode: 'medium',
                      sidebarHideAvatar: false,
                      sidebarShowUnread: false,
                      sidebarShowFavorites: true,
                      sendOnEnter: 'normal',
                      messageViewMode: 0,
                      emailNotificationMode: 'all',
                      roomCounterSidebar: false,
                      newRoomNotification: 'door',
                      newMessageNotification: 'chime',
                      muteFocusedConversations: true,
                      notificationsSoundVolume: 100,
                    },
                  },
                  customFields: { twitter: '@userstwi' },
                  avatarUrl: 'http://localhost:3000/avatar/test',
                  success: true,
                },
              },
              required: [],
            }),
          examples: {
            'User profile': {
              value: {
                _id: 'aobEdbYhXfu5hkeqG',
                name: 'Example User',
                emails: [{ address: 'example@example.com', verified: true }],
                status: 'offline',
                statusConnection: 'offline',
                username: 'example',
                utcOffset: 0,
                active: true,
                roles: ['user', 'admin'],
                settings: {
                  preferences: {
                    enableAutoAway: false,
                    idleTimeoutLimit: 300,
                    desktopNotificationDuration: 0,
                    audioNotifications: 'mentions',
                    desktopNotifications: 'mentions',
                    mobileNotifications: 'mentions',
                    unreadAlert: true,
                    useEmojis: true,
                    convertAsciiEmoji: true,
                    autoImageLoad: true,
                    saveMobileBandwidth: true,
                    collapseMediaByDefault: false,
                    hideUsernames: false,
                    hideRoles: false,
                    hideFlexTab: false,
                    hideAvatars: false,
                    roomsListExhibitionMode: 'category',
                    sidebarViewMode: 'medium',
                    sidebarHideAvatar: false,
                    sidebarShowUnread: false,
                    sidebarShowFavorites: true,
                    sendOnEnter: 'normal',
                    messageViewMode: 0,
                    emailNotificationMode: 'all',
                    roomCounterSidebar: false,
                    newRoomNotification: 'door',
                    newMessageNotification: 'chime',
                    muteFocusedConversations: true,
                    notificationsSoundVolume: 100,
                  },
                },
                customFields: { twitter: '@userstwi' },
                avatarUrl: 'http://localhost:3000/avatar/test',
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1Users2faEnableEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.2fa.enableEmail',
  tags: ['Two-Factor Authentication'],
  summary: 'Enable 2FA via Email',
  description:
    'Enable email two-factor authentication for your account. This endpoint only works if the user has at least one verified email. ',
  operationId: 'post-api-v1-users.2fa.enableEmail',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1Users2faSendEmailCodeRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.2fa.sendEmailCode',
  tags: ['Two-Factor Authentication'],
  summary: 'Send 2FA Email Code',
  operationId: 'post-api-v1-users.2fa.sendEmailCode',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenNotRequiredParamsSchema,
      'X-User-Id': UserIdNotRequiredParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              emailOrUsername: z
                .string()
                .openapi({
                  description: 'Enter the email or username.',
                  example: 'test@email.com',
                }),
            })
            .openapi({ required: ['emailOrUsername'] }),
          examples: { 'Example 1': { value: { emailOrUsername: 'test@email.com' } } },
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
            'Example 1': {
              value: {
                success: false,
                error: 'emailOrUsername is required [error-parameter-required]',
                errorType: 'error-parameter-required',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1Users2faDisableEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.2fa.disableEmail',
  tags: ['Two-Factor Authentication'],
  summary: 'Disable 2FA via Email',
  description: 'Disable two-factor authentication via email. The 2FA code is required.',
  operationId: 'post-api-v1-users.2fa.disableEmail',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'X-2fa-Code': z
        .string()
        .openapi({
          param: {
            name: 'X-2fa-Code',
            in: 'header',
            description: 'The 2FA code. ',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-2fa-method': z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'header',
            name: 'X-2fa-method',
            description: 'The 2FA method. It can be `email`, `totp`, or `password`.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description:
        "TOTP Required \n\nThe 2FA code is passed as the `X-2fa-Code` query parameter.\n\nIt's important to note the **required TOTP method** returned from the response.\n\n- If it's `password`, add the hashed password of the user as the `X-2fa-Code` header parameter. \n- If it's `email`, add the 2FA code sent via email as the `X-2fa-Code` header parameter.\n- If it's `totp`, add the code from your authenticator app as the `X-2fa-Code` header parameter.",
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'TOTP Required': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersEnableTotpRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.enableTotp',
  tags: ['Two-Factor Authentication'],
  summary: 'Enable TOTP 2FA',
  description:
    'Starts the TOTP enrollment for your own account and returns the shared `secret` and the `url` to render as a QR code in an authenticator app. Call `users.validateTotp` with a code from the app to finish the enrollment.\n\nThis endpoint requires two-factor verification, so the account owner confirms their identity with an existing second factor before a new authenticator is registered. Requests are limited to five per minute.\n\nThis endpoint replaces the `2fa:enable` real-time method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.8.0   | Added       |',
  operationId: 'post-api-v1-users.enableTotp',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'X-2fa-Code': z
        .string()
        .openapi({
          param: {
            name: 'X-2fa-Code',
            in: 'header',
            description: 'The 2FA code. ',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-2fa-method': z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'header',
            name: 'X-2fa-method',
            description: 'The 2FA method. It can be `email`, `totp`, or `password`.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({ secret: z.string(), url: z.string(), success: z.boolean() })
            .openapi({ required: ['secret', 'url', 'success'] }),
          examples: {
            'Success Example': {
              value: {
                secret: 'KZ3EAT7RJVHUYQ2C',
                url: 'otpauth://totp/Rocket.Chat:dana.reyes?secret=KZ3EAT7RJVHUYQ2C&issuer=Rocket.Chat',
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
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'TOTP Required': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersValidateTotpRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.validateTotp',
  tags: ['Two-Factor Authentication'],
  summary: 'Validate TOTP Code',
  description:
    'Finishes the TOTP enrollment started with `users.enableTotp` by validating a code from the authenticator app, and returns the backup `codes` for the account. The other login tokens of the account are rotated, except personal access tokens.\n\nThis endpoint requires two-factor verification. Requests are limited to five per minute.\n\nThis endpoint replaces the `2fa:validateTempToken` real-time method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.8.0   | Added       |',
  operationId: 'post-api-v1-users.validateTotp',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'X-2fa-Code': z
        .string()
        .openapi({
          param: {
            name: 'X-2fa-Code',
            in: 'header',
            description: 'The 2FA code. ',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-2fa-method': z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'header',
            name: 'X-2fa-method',
            description: 'The 2FA method. It can be `email`, `totp`, or `password`.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              code: z
                .string()
                .openapi({
                  description: 'The code shown by the authenticator app for the account.',
                  example: '482913',
                }),
            })
            .openapi({ required: ['code'] }),
          examples: { 'Example 1': { value: { code: '482913' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              codes: z
                .array(z.string())
                .openapi({ description: 'The backup codes of the account.' }),
              success: z.boolean(),
            })
            .openapi({ required: ['codes', 'success'] }),
          examples: {
            'Success Example': { value: { codes: ['3f7a1c9d', '90b2e4a6'], success: true } },
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
            'Invalid code': {
              value: { success: false, error: '[invalid-totp]', errorType: 'invalid-totp' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersDisableTotpRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.disableTotp',
  tags: ['Two-Factor Authentication'],
  summary: 'Disable TOTP 2FA',
  description:
    'Disables the authenticator app (TOTP) two-factor authentication of your own account. The code from the authenticator app is required in the body. Requests are limited to five per minute.\n\nThis endpoint replaces the `2fa:disable` real-time method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.8.0   | Added       |',
  operationId: 'post-api-v1-users.disableTotp',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              code: z
                .string()
                .openapi({
                  description: 'The code shown by the authenticator app for the account.',
                  example: '482913',
                }),
            })
            .openapi({ required: ['code'] }),
          examples: { 'Example 1': { value: { code: '482913' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({ disabled: z.boolean(), success: z.boolean() })
            .openapi({ required: ['disabled', 'success'] }),
          examples: { 'Success Example': { value: { disabled: true, success: true } } },
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
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersRegenerateTotpCodesRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.regenerateTotpCodes',
  tags: ['Two-Factor Authentication'],
  summary: 'Regenerate TOTP Backup Codes',
  description:
    'Generates a new set of backup codes for the authenticator app (TOTP) two-factor authentication of your own account and returns them. The previous backup codes stop working. The code from the authenticator app is required in the body. Requests are limited to five per minute.\n\nThis endpoint replaces the `2fa:regenerateCodes` real-time method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.8.0   | Added       |',
  operationId: 'post-api-v1-users.regenerateTotpCodes',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              code: z
                .string()
                .openapi({
                  description: 'The code shown by the authenticator app for the account.',
                  example: '482913',
                }),
            })
            .openapi({ required: ['code'] }),
          examples: { 'Example 1': { value: { code: '482913' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              codes: z
                .array(z.string())
                .openapi({ description: 'The new backup codes of the account.' }),
              success: z.boolean(),
            })
            .openapi({ required: ['codes', 'success'] }),
          examples: {
            'Success Example': { value: { codes: ['5c1d8b02', 'e74a2f61'], success: true } },
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
            'Invalid code': {
              value: { success: false, error: '[invalid-totp]', errorType: 'invalid-totp' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersTotpCodesRemainingRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.totpCodesRemaining',
  tags: ['Two-Factor Authentication'],
  summary: 'Get Remaining TOTP Codes',
  description:
    'Returns how many backup codes are left for the authenticator app (TOTP) two-factor authentication of your own account. Requests are limited to five per minute.\n\nThis endpoint replaces the `2fa:checkCodesRemaining` real-time method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.8.0   | Added       |',
  operationId: 'get-api-v1-users.totpCodesRemaining',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({ remaining: z.number(), success: z.boolean() })
            .openapi({ required: ['remaining', 'success'] }),
          examples: { 'Success Example': { value: { remaining: 8, success: true } } },
        },
      },
    },
    400: {
      description: 'TOTP two-factor authentication is not enabled for the user.',
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
            'TOTP not enabled': {
              value: { success: false, error: '[invalid-totp]', errorType: 'invalid-totp' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1TwoFactorChallengesSendEmailCodeRoute = createRoute({
  method: 'post',
  path: '/api/v1/twoFactorChallenges.sendEmailCode',
  tags: ['Two-Factor Authentication'],
  summary: 'Send Two-Factor Challenge Email Code',
  description:
    'Sends a new email code for an OAuth two-factor authentication challenge.\n\nThis endpoint does not require authentication. The challenge must exist, must not be expired, and must use the `email` method. Requests are limited to 5 per minute per caller.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.7.0   | Added       |',
  operationId: 'post-api-v1-twoFactorChallenges.sendEmailCode',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              challengeId: z
                .string()
                .openapi({
                  description:
                    'The ID of the pending two-factor challenge returned by the login flow.',
                  example: '8f4c2d1e9a7b6c5d3e2f1a0b',
                }),
            })
            .openapi({ required: ['challengeId'] }),
          examples: { 'Send email code': { value: { challengeId: '8f4c2d1e9a7b6c5d3e2f1a0b' } } },
        },
      },
      required: true,
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
            'Missing challengeId': {
              value: {
                success: false,
                error: 'challengeId is required',
                errorType: 'error-parameter-required',
              },
            },
            'Challenge not found': {
              value: {
                success: false,
                error: 'challenge not found',
                errorType: 'error-challenge-not-found',
              },
            },
            'Challenge expired': {
              value: {
                success: false,
                error: 'challenge expired',
                errorType: 'error-challenge-expired',
              },
            },
            'Invalid challenge method': {
              value: {
                success: false,
                error: 'invalid challenge method',
                errorType: 'error-invalid-challenge-method',
              },
            },
            'User not found': {
              value: { success: false, error: 'user not found', errorType: 'error-user-not-found' },
            },
          },
        },
      },
    },
  },
})

export const postApiV1TwoFactorChallengesVerifyChallengeRoute = createRoute({
  method: 'post',
  path: '/api/v1/twoFactorChallenges.verifyChallenge',
  tags: ['Two-Factor Authentication'],
  summary: 'Verify Two-Factor Challenge',
  description:
    'Verifies the email or TOTP code for an OAuth two-factor authentication challenge and returns the `loginToken` and `userId`.\n\nThis endpoint does not require authentication. Requests are limited to 5 per minute per caller. The challenge is removed when the maximum number of failed attempts is reached.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.7.0   | Added       |',
  operationId: 'post-api-v1-twoFactorChallenges.verifyChallenge',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              challengeId: z
                .string()
                .openapi({
                  description:
                    'The ID of the pending two-factor challenge returned by the login flow.',
                  example: '8f4c2d1e9a7b6c5d3e2f1a0b',
                }),
              code: z
                .string()
                .openapi({
                  description: 'The two-factor code provided by the user for the challenge.',
                  example: '482913',
                }),
            })
            .openapi({ required: ['challengeId', 'code'] }),
          examples: {
            'Verify challenge': {
              value: { challengeId: '8f4c2d1e9a7b6c5d3e2f1a0b', code: '482913' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ loginToken: z.string(), userId: z.string(), success: z.boolean() })
            .openapi({ required: ['loginToken', 'userId', 'success'] }),
          examples: {
            'Verification successful': {
              value: {
                loginToken: 'exampleLoginTokenString123',
                userId: 'aobEdbYhXfu5hkeqG',
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
            'Missing parameters': {
              value: {
                success: false,
                error: 'challengeId and code are required',
                errorType: 'error-parameter-required',
              },
            },
            'Invalid code': {
              value: { success: false, error: 'Invalid code', errorType: 'error-invalid-code' },
            },
            'Challenge not found': {
              value: {
                success: false,
                error: 'challenge not found',
                errorType: 'error-challenge-not-found',
              },
            },
            'Challenge expired': {
              value: {
                success: false,
                error: 'challenge expired',
                errorType: 'error-challenge-expired',
              },
            },
            'User not found': {
              value: { success: false, error: 'user not found', errorType: 'error-user-not-found' },
            },
            'Max attempts reached': {
              value: {
                success: false,
                error: 'TOTP Maximun Failed Attempts Reached',
                errorType: 'totp-max-attempts',
              },
            },
          },
        },
      },
    },
  },
})
