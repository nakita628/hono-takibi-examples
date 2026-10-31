import { createRoute, z } from '@hono/zod-openapi'

const QuerySidSecurityScheme = { type: 'apiKey', in: 'query', name: 'sid' }

const CookieSidSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'sid' }

const HeaderSidSecurityScheme = { type: 'apiKey', in: 'header', name: 'sid' }

const XHeaderSidSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-FTL-SID' }

const QueryPasswordSecurityScheme = { type: 'apiKey', in: 'query', name: 'password' }

export const getAuthRoute = createRoute({
  method: 'get',
  path: '/auth',
  tags: ['Authentication'],
  summary: 'Check if authentication is required',
  description:
    'The API may chose to reply with a valid session if no authentication is needed for this server.\n',
  operationId: 'get_auth',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              session: z
                .object({
                  valid: z
                    .boolean()
                    .openapi({ description: 'Valid session indicator (client is authenticated)' }),
                  totp: z
                    .boolean()
                    .openapi({ description: 'Whether 2FA (TOTP) is enabled on this Pi-hole' }),
                  sid: z.string().nullable().openapi({ description: 'Session ID' }),
                  csrf: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'CSRF token' }),
                  validity: z
                    .int()
                    .openapi({
                      description: 'Remaining lifetime of this session unless refreshed (seconds)',
                    }),
                  message: z
                    .string()
                    .nullable()
                    .openapi({
                      description: 'Human-readable message describing the session status',
                    }),
                })
                .openapi({
                  description: 'Session object',
                  required: ['valid', 'sid', 'validity', 'message', 'totp'],
                }),
            })
            .openapi({ required: ['session'] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            auth_okay: {
              summary: 'Session valid',
              value: {
                session: {
                  valid: true,
                  totp: false,
                  sid: null,
                  csrf: null,
                  validity: 300,
                  message: null,
                },
                took: 0.003,
              },
            },
            no_login_required: {
              summary: 'No login required for this client',
              value: {
                session: {
                  valid: true,
                  totp: false,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'no auth for local user',
                },
                took: 0.003,
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
          schema: z
            .object({
              session: z
                .object({
                  valid: z
                    .boolean()
                    .openapi({ description: 'Valid session indicator (client is authenticated)' }),
                  totp: z
                    .boolean()
                    .openapi({ description: 'Whether 2FA (TOTP) is enabled on this Pi-hole' }),
                  sid: z.string().nullable().openapi({ description: 'Session ID' }),
                  csrf: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'CSRF token' }),
                  validity: z
                    .int()
                    .openapi({
                      description: 'Remaining lifetime of this session unless refreshed (seconds)',
                    }),
                  message: z
                    .string()
                    .nullable()
                    .openapi({
                      description: 'Human-readable message describing the session status',
                    }),
                })
                .openapi({
                  description: 'Session object',
                  required: ['valid', 'sid', 'validity', 'message', 'totp'],
                }),
            })
            .openapi({ required: ['session'] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            login_required: {
              summary: 'Login required, 2FA disabled',
              value: {
                session: {
                  valid: false,
                  totp: false,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'password incorrect',
                },
                took: 0.003,
              },
            },
            login_required_2fa: {
              summary: 'Login required, 2FA enabled',
              value: {
                session: {
                  valid: false,
                  totp: true,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'password incorrect',
                },
                took: 0.003,
              },
            },
          },
        },
      },
    },
  },
  security: [{}, { query_sid: [] }, { cookie_sid: [] }, { header_sid: [] }, { x_header_sid: [] }],
})

export const postAuthRoute = createRoute({
  method: 'post',
  path: '/auth',
  tags: ['Authentication'],
  summary: 'Submit password for login',
  description:
    "Authenticate using a password. The password isn't stored in the session nor used to create the session token. Instead, the session token is produced using a cryptographically secure random number generator. A CSRF token is utilized to guard against CSRF attacks and is necessary when using Cookie-based authentication. However, it's not needed with other authentication methods.\n\nBoth the Session ID (SID) and CSRF token remain valid for the session's duration. The session can be extended before its expiration by performing any authenticated action. By default, the session lasts for 30 minutes. It can be invalidated by either logging out or deleting the session. Additionally, the session becomes invalid when the password is altered or a new application password is created.\n\nIf two-factor authentication (2FA) is activated, the Time-based One-Time Password (TOTP) token must be included in the request body. Be aware that the TOTP token, generated by your authenticator app, is only valid for 30 seconds. If the TOTP token is missing, invalid, or has been used previously, the login attempt will be unsuccessful.\n",
  operationId: 'add_auth',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password to be used for login', example: 'abcdef' }),
              totp: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Time-based one-time password (TOTP) token, required when 2FA is enabled',
                  example: 123456,
                }),
            })
            .openapi({ description: 'Password to be sent to the API', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              session: z
                .object({
                  valid: z
                    .boolean()
                    .openapi({ description: 'Valid session indicator (client is authenticated)' }),
                  totp: z
                    .boolean()
                    .openapi({ description: 'Whether 2FA (TOTP) is enabled on this Pi-hole' }),
                  sid: z.string().nullable().openapi({ description: 'Session ID' }),
                  csrf: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'CSRF token' }),
                  validity: z
                    .int()
                    .openapi({
                      description: 'Remaining lifetime of this session unless refreshed (seconds)',
                    }),
                  message: z
                    .string()
                    .nullable()
                    .openapi({
                      description: 'Human-readable message describing the session status',
                    }),
                })
                .openapi({
                  description: 'Session object',
                  required: ['valid', 'sid', 'validity', 'message', 'totp'],
                }),
            })
            .openapi({ required: ['session'] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            login_okay: {
              summary: 'Login successful',
              value: {
                session: {
                  valid: true,
                  totp: false,
                  sid: 'vFA+EP4MQ5JJvJg+3Q2Jnw=',
                  csrf: 'Ux87YTIiMOf/GKCefVIOMw=',
                  validity: 300,
                  message: 'correct password',
                },
                took: 0.003,
              },
            },
            no_login_required: {
              summary: 'No login required for this client',
              value: {
                session: {
                  valid: true,
                  totp: false,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'no auth for local user',
                },
                took: 0.003,
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
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Additional data (if available)' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'Bad request (no valid JSON payload)',
              value: {
                error: { key: 'bad_request', message: 'No valid JSON payload found', hint: null },
                took: 0.003,
              },
            },
            no_password: {
              summary: 'Bad request (no password)',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'No password found in JSON payload',
                  hint: null,
                },
                took: 0.003,
              },
            },
            password_inval: {
              summary: 'Bad request (password is not a string)',
              value: {
                error: {
                  key: 'bad_request',
                  message: "Field password has to be of type 'string'",
                  hint: null,
                },
                took: 0.003,
              },
            },
            totp_missing: {
              summary: 'Bad request (2FA token missing)',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'No 2FA token found in JSON payload',
                  hint: null,
                },
                took: 0.003,
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized. A wrong password is answered with the session object (`valid` is `false`), only a rejected 2FA token is answered with an error object.\n',
      content: {
        'application/json': {
          schema: z
            .union([
              z
                .object({
                  session: z
                    .object({
                      valid: z
                        .boolean()
                        .openapi({
                          description: 'Valid session indicator (client is authenticated)',
                        }),
                      totp: z
                        .boolean()
                        .openapi({ description: 'Whether 2FA (TOTP) is enabled on this Pi-hole' }),
                      sid: z.string().nullable().openapi({ description: 'Session ID' }),
                      csrf: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'CSRF token' }),
                      validity: z
                        .int()
                        .openapi({
                          description:
                            'Remaining lifetime of this session unless refreshed (seconds)',
                        }),
                      message: z
                        .string()
                        .nullable()
                        .openapi({
                          description: 'Human-readable message describing the session status',
                        }),
                    })
                    .openapi({
                      description: 'Session object',
                      required: ['valid', 'sid', 'validity', 'message', 'totp'],
                    }),
                })
                .openapi({ required: ['session'] }),
              z
                .object({
                  error: z
                    .object({
                      key: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Machine-readable error type',
                          example: 'unauthorized',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Human-readable error message',
                          example: 'Unauthorized',
                        }),
                      hint: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'No additional data available', example: null }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ description: 'Authentication required', required: [] }),
            ])
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            login_required: {
              summary: 'Login required, 2FA disabled',
              value: {
                session: {
                  valid: false,
                  totp: false,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'password incorrect',
                },
                took: 0.003,
              },
            },
            login_required_2fa: {
              summary: 'Login required, 2FA enabled',
              value: {
                session: {
                  valid: false,
                  totp: true,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'password incorrect',
                },
                took: 0.003,
              },
            },
            totp_invalid: {
              summary: '2FA token invalid',
              value: {
                error: { key: 'unauthorized', message: 'Invalid 2FA token', hint: null },
                took: 0.003,
              },
            },
            totp_reused: {
              summary: '2FA token reused',
              value: {
                error: {
                  key: 'unauthorized',
                  message: 'Reused 2FA token',
                  hint: 'wait for new token',
                },
                took: 0.003,
              },
            },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'too_many_requests',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Too many requests',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Too many requests (rate limiting)', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            rate_limit: {
              summary: 'Rate limit exceeded',
              value: {
                error: {
                  key: 'rate_limiting',
                  message: 'Rate-limiting login attempts',
                  hint: null,
                },
                took: 0.003,
              },
            },
            no_seats: {
              summary: 'No free API seats available',
              value: {
                error: {
                  key: 'api_seats_exceeded',
                  message: 'API seats exceeded',
                  hint: 'increase webserver.api.max_sessions',
                },
                took: 0.003,
              },
            },
            totp_rate_limit: {
              summary: '2FA token requested too soon',
              value: {
                error: {
                  key: 'rate_limiting',
                  message: 'Rate-limiting 2FA token requests, try again later',
                  hint: null,
                },
                took: 0.001,
              },
            },
          },
        },
      },
    },
  },
  security: [],
})

export const deleteAuthRoute = createRoute({
  method: 'delete',
  path: '/auth',
  tags: ['Authentication'],
  summary: 'Delete session',
  description:
    'This endpoint can be used to delete the current session. It will\ninvalidate the session token and the CSRF token. The session can be\nextended before its expiration by performing any authenticated action.\nBy default, the session lasts for 30 minutes. It can be invalidated by\neither logging out or deleting the session. Additionally, the session\nbecomes invalid when the password is altered or a new application\npassword is created.\n\nYou can also delete a session by its ID using the `DELETE /auth/session/{id}` endpoint.\n\nNote that you cannot delete the current session if you have not\nauthenticated (e.g., no password has been set on your Pi-hole).\n',
  operationId: 'delete_groups',
  responses: {
    204: { description: 'No Content (deleted)' },
    401: {
      description: 'Unauthorized (not authenticated, the session object is returned)',
      content: {
        'application/json': {
          schema: z
            .object({
              session: z
                .object({
                  valid: z
                    .boolean()
                    .openapi({ description: 'Valid session indicator (client is authenticated)' }),
                  totp: z
                    .boolean()
                    .openapi({ description: 'Whether 2FA (TOTP) is enabled on this Pi-hole' }),
                  sid: z.string().nullable().openapi({ description: 'Session ID' }),
                  csrf: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'CSRF token' }),
                  validity: z
                    .int()
                    .openapi({
                      description: 'Remaining lifetime of this session unless refreshed (seconds)',
                    }),
                  message: z
                    .string()
                    .nullable()
                    .openapi({
                      description: 'Human-readable message describing the session status',
                    }),
                })
                .openapi({
                  description: 'Session object',
                  required: ['valid', 'sid', 'validity', 'message', 'totp'],
                }),
            })
            .openapi({ required: ['session'] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            login_failed: {
              summary: 'Login failed',
              value: {
                session: {
                  valid: false,
                  totp: false,
                  sid: null,
                  csrf: null,
                  validity: -1,
                  message: 'no SID provided',
                },
                took: 0.003,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found (no session active)',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteAuthSessionIdRoute = createRoute({
  method: 'delete',
  path: '/auth/session/{id}',
  tags: ['Authentication'],
  summary: 'Delete session by ID',
  description: 'Using this endpoint, a session can be deleted by its ID.\n',
  operationId: 'delete_auth_session',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            required: true,
            description: 'Session ID',
            example: 0,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content (deleted)' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Additional data (if available)' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            missing_session_id: {
              summary: 'Bad request (missing session ID)',
              value: {
                error: { key: 'bad_request', message: 'Missing or invalid session ID', hint: null },
                took: 0.003,
              },
            },
            session_id_oob: {
              summary: 'Bad request (no password)',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'No password found in JSON payload',
                  hint: null,
                },
                took: 0.003,
              },
            },
            session_not_in_use: {
              summary: 'Bad request (session not in use)',
              value: {
                error: { key: 'bad_request', message: 'Session ID not in use', hint: null },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Not Found (session not found)',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAuthSessionsRoute = createRoute({
  method: 'get',
  path: '/auth/sessions',
  tags: ['Authentication'],
  summary: 'List of all current sessions',
  description:
    'List of all current sessions including their validity and further information about the client such as the IP address and user agent.',
  operationId: 'get_auth_sessions',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sessions: z
                .array(
                  z
                    .object({
                      id: z.number().exactOptional().openapi({ description: 'Session ID' }),
                      current_session: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Indicator if this is the current session' }),
                      valid: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Valid session indicator (existing sessions may be invalid due to timeout)',
                        }),
                      tls: z
                        .object({
                          login: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Indicator if TLS (end-to-end encryption) has been used during login for this session',
                            }),
                          mixed: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Indicator if TLS (end-to-end encryption) is used only partially for this session',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'TLS (end-to-end encryption) information',
                          required: [],
                        }),
                      app: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicator if this session was initiated using an application password',
                        }),
                      cli: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicator if this session was initiated using the command-line interface (CLI)',
                        }),
                      login_at: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Timestamp of login (seconds since epoch)' }),
                      last_active: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Timestamp of last activity (seconds since epoch)',
                        }),
                      valid_until: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Timestamp of session expiration (seconds since epoch)',
                        }),
                      remote_addr: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'IP address of the client' }),
                      user_agent: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'User agent of the client (optional)' }),
                      x_forwarded_for: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'IP address of the client (if behind a proxy, optional)',
                        }),
                    })
                    .openapi({ description: 'Session object', required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      id: 1,
                      current_session: true,
                      valid: true,
                      tls: { login: true, mixed: false },
                      app: false,
                      cli: false,
                      login_at: 1580000000,
                      last_active: 1580000000,
                      valid_until: 1580000300,
                      remote_addr: '192.168.0.34',
                      user_agent:
                        'Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0',
                      x_forwarded_for: null,
                    },
                  ],
                }),
            })
            .openapi({ description: 'List of all current sessions', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getAuthTotpRoute = createRoute({
  method: 'get',
  path: '/auth/totp',
  tags: ['Authentication'],
  summary: 'Suggest new TOTP credentials',
  description: 'Suggest new TOTP credentials for two-factor authentication (2FA)',
  operationId: 'get_auth_totp',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              totp: z
                .object({
                  type: z.string().exactOptional(),
                  account: z.string().exactOptional(),
                  issuer: z.string().exactOptional(),
                  algorithm: z.string().exactOptional(),
                  digits: z.int().exactOptional(),
                  period: z.int().exactOptional(),
                  offset: z.int().exactOptional(),
                  secret: z.string().exactOptional(),
                  codes: z.array(z.int()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'TOTP secret suggestion', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getAuthAppRoute = createRoute({
  method: 'get',
  path: '/auth/app',
  tags: ['Authentication'],
  summary: 'Create new application password',
  description:
    'Create a new application password. The generated password is shown only once and cannot be retrieved later - make sure to store it in a safe place. The application password can be used to authenticate against the API instead of the regular password.\nIt does not require 2FA verification. Generating a new application password will invalidate all currently active sessions.\n\nNote that this endpoint only generates an application password accompanied by its hash. To make this new password effective, the returned `hash` has to be set as `webserver.api.app_password` in the Pi-hole configuration in a follow-up step. This can be done in various ways, e.g. via the API (`PATCH /api/config/webserver/api/app_pwhash`), the graphical web interface (Settings -> All Settings) or by editing the configuration file directly.\n',
  operationId: 'add_app',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              app: z
                .object({ password: z.string().exactOptional(), hash: z.string().exactOptional() })
                .exactOptional()
                .openapi({
                  example: {
                    password: '7ua0rHPZixX6B3bTa5o4Dv08iyEIm/2q9qgLrF9MNVw=',
                    hash: '$BALLOON-SHA256$v=1$s=1024,t=32$4ERwJD4XucRP4PcDHNLiAg==$kSy0Eou8RUVtK2UTbc5MCpItV8YC3VRuoGhoENxSQ2I=',
                  },
                  required: [],
                }),
            })
            .openapi({ description: 'Application password', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsSummaryRoute = createRoute({
  method: 'get',
  path: '/stats/summary',
  tags: ['Metrics'],
  summary: 'Get overview of Pi-hole activity',
  description: 'Request various query, system, and FTL properties\n',
  operationId: 'get_metrics_summary',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              queries: z
                .object({
                  total: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total number of queries', example: 7497 }),
                  blocked: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of blocked queries', example: 3465 }),
                  percent_blocked: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Percent of blocked queries', example: 34.5 }),
                  unique_domains: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of unique domains FTL knows', example: 445 }),
                  forwarded: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Number of queries that have been forwarded upstream',
                      example: 4574,
                    }),
                  cached: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Number of queries replied to from cache or local configuration',
                      example: 9765,
                    }),
                  frequency: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Average number of queries per second', example: 1.1 }),
                  types: z
                    .object({
                      A: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type A queries', example: 3643 }),
                      AAAA: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type AAAA queries', example: 123 }),
                      ANY: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type ANY queries', example: 3423 }),
                      SRV: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type SRV queries', example: 345 }),
                      SOA: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type SOA queries', example: 7567 }),
                      PTR: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type PTR queries', example: 456 }),
                      TXT: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type TXT queries', example: 85 }),
                      NAPTR: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type NAPTR queries', example: 346 }),
                      MX: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type MX queries', example: 457 }),
                      DS: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DS queries', example: 456 }),
                      RRSIG: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type RRSIG queries', example: 345 }),
                      DNSKEY: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DNSKEY queries', example: 55 }),
                      NS: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type NS queries', example: 868 }),
                      SVCB: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type SVCB queries', example: 645 }),
                      HTTPS: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type HTTPS queries', example: 4 }),
                      OTHER: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Queries of remaining types', example: 845 }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Number of individual queries', required: [] }),
                  status: z
                    .object({
                      UNKNOWN: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type UNKNOWN queries', example: 3 }),
                      GRAVITY: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type GRAVITY queries', example: 72 }),
                      FORWARDED: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type FORWARDED queries', example: 533 }),
                      CACHE: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type CACHE queries', example: 32 }),
                      REGEX: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type REGEX queries', example: 84 }),
                      DENYLIST: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DENYLIST queries', example: 31 }),
                      EXTERNAL_BLOCKED_IP: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type EXTERNAL_BLOCKED_IP queries', example: 0 }),
                      EXTERNAL_BLOCKED_NULL: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type EXTERNAL_BLOCKED_NULL queries', example: 0 }),
                      EXTERNAL_BLOCKED_NXRA: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type EXTERNAL_BLOCKED_NXRA queries', example: 0 }),
                      GRAVITY_CNAME: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type GRAVITY_CNAME queries', example: 0 }),
                      REGEX_CNAME: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type REGEX_CNAME queries', example: 0 }),
                      DENYLIST_CNAME: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DENYLIST_CNAME queries', example: 0 }),
                      RETRIED: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type RETRIED queries', example: 0 }),
                      RETRIED_DNSSEC: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type RETRIED_DNSSEC queries', example: 0 }),
                      IN_PROGRESS: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type IN_PROGRESS queries', example: 0 }),
                      DBBUSY: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DBBUSY queries', example: 0 }),
                      SPECIAL_DOMAIN: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type SPECIAL_DOMAIN queries', example: 0 }),
                      CACHE_STALE: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type CACHE_STALE queries', example: 0 }),
                      EXTERNAL_BLOCKED_EDE15: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Type EXTERNAL_BLOCKED_EDE15 queries',
                          example: 0,
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Number of individual queries (by status)',
                      required: [],
                    }),
                  replies: z
                    .object({
                      UNKNOWN: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type UNKNOWN replies', example: 3 }),
                      NODATA: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type NODATA replies', example: 72 }),
                      NXDOMAIN: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type NXDOMAIN replies', example: 533 }),
                      CNAME: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type CNAME replies', example: 32 }),
                      IP: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type IP replies', example: 84 }),
                      DOMAIN: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DOMAIN replies', example: 31 }),
                      RRNAME: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type RRNAME replies', example: 0 }),
                      SERVFAIL: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type SERVFAIL replies', example: 0 }),
                      REFUSED: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type REFUSED replies', example: 0 }),
                      NOTIMP: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type NOTIMP replies', example: 0 }),
                      OTHER: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type OTHER replies', example: 0 }),
                      DNSSEC: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type DNSSEC replies', example: 31 }),
                      NONE: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type NONE replies', example: 0 }),
                      BLOB: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Type BLOB replies', example: 0 }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Number of individual replies', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              clients: z
                .object({
                  active: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Number of active clients (seen in the last 24 hours)',
                      example: 10,
                    }),
                  total: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total number of clients seen by FTL', example: 22 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              gravity: z
                .object({
                  domains_being_blocked: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: "Number of domain on your Pi-hole's gravity list",
                      example: 104756,
                    }),
                  last_update: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unix timestamp of last gravity update (may be `0` if unknown)',
                      example: 1725194639,
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsDatabaseSummaryRoute = createRoute({
  method: 'get',
  path: '/stats/database/summary',
  tags: ['Metrics'],
  summary: 'Get database content details',
  description: 'Request various database content details\n',
  operationId: 'get_metrics_database_summary',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
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
            .object({
              sum_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
              sum_blocked: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of blocked queries', example: 6379 }),
              percent_blocked: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage of blocked queries', example: 21.9 }),
              total_clients: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of clients', example: 10 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsUpstreamsRoute = createRoute({
  method: 'get',
  path: '/stats/upstreams',
  tags: ['Metrics'],
  summary: "Get metrics about Pi-hole's upstream destinations",
  description: 'Request upstream metrics\n',
  operationId: 'get_metrics_upstreams',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              upstreams: z
                .array(
                  z
                    .object({
                      ip: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            "Upstream destination's IP address (can be either IPv4 or IPv6)",
                          example: '127.0.0.1',
                        }),
                      name: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: "Upstream destination's hostname (if available)",
                          example: 'localhost',
                        }),
                      port: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            "Upstream destination's destination port (-1 if not applicable, e.g., for the local cache)",
                          example: 53,
                        }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of queries this upstream destination has been used for',
                          example: 65445,
                        }),
                      statistics: z
                        .object({
                          response: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Average response time of this upstream destination in seconds (0 if not applicable)',
                              example: 0.0254856,
                            }),
                          variance: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Standard deviation of the average response time (0 if not applicable)',
                              example: 0.02058,
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of upstream destinations' }),
              forwarded_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of forwarded queries', example: 6379 }),
              total_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsDatabaseUpstreamsRoute = createRoute({
  method: 'get',
  path: '/stats/database/upstreams',
  tags: ['Metrics'],
  summary: "Get metrics about Pi-hole's upstream destinations (long-term database)",
  description: 'Request upstream metrics (long-term database)\n',
  operationId: 'get_metrics_upstreams_database',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
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
            .object({
              upstreams: z
                .array(
                  z
                    .object({
                      ip: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            "Upstream destination's IP address (can be either IPv4 or IPv6)",
                          example: '127.0.0.1',
                        }),
                      name: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: "Upstream destination's hostname (if available)",
                          example: 'localhost',
                        }),
                      port: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            "Upstream destination's destination port (-1 if not applicable, e.g., for the local cache)",
                          example: 53,
                        }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of queries this upstream destination has been used for',
                          example: 65445,
                        }),
                      statistics: z
                        .object({
                          response: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Average response time of this upstream destination in seconds (0 if not applicable)',
                              example: 0.0254856,
                            }),
                          variance: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Standard deviation of the average response time (0 if not applicable)',
                              example: 0.02058,
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of upstream destinations' }),
              forwarded_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of forwarded queries', example: 6379 }),
              total_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsTopDomainsRoute = createRoute({
  method: 'get',
  path: '/stats/top_domains',
  tags: ['Metrics'],
  summary: 'Get top domains',
  description: 'Request top domains\n',
  operationId: 'get_metrics_top_domains',
  request: {
    query: z.object({
      blocked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Return information about permitted or blocked queries',
            name: 'blocked',
            schema: { type: 'boolean' },
            required: false,
            example: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Number of requested items',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
            example: 10,
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
            .object({
              domains: z
                .array(
                  z
                    .object({
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Requested domain', example: 'pi-hole.net' }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of times this domain has been requested',
                          example: 8516,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of domains' }),
              total_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
              blocked_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of blocked queries', example: 6379 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsDatabaseTopDomainsRoute = createRoute({
  method: 'get',
  path: '/stats/database/top_domains',
  tags: ['Metrics'],
  summary: 'Get top domains (long-term database)',
  description: 'Request top domains\n',
  operationId: 'get_metrics_database_top_domains',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
          },
        }),
      blocked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Return information about permitted or blocked queries',
            name: 'blocked',
            schema: { type: 'boolean' },
            required: false,
            example: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Number of requested items',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
            example: 10,
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
            .object({
              domains: z
                .array(
                  z
                    .object({
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Requested domain', example: 'pi-hole.net' }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of times this domain has been requested',
                          example: 8516,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of domains' }),
              total_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
              blocked_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of blocked queries', example: 6379 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsTopClientsRoute = createRoute({
  method: 'get',
  path: '/stats/top_clients',
  tags: ['Metrics'],
  summary: 'Get top clients',
  description: 'Request top clients\n',
  operationId: 'get_metrics_top_clients',
  request: {
    query: z.object({
      blocked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Return information about permitted or blocked queries',
            name: 'blocked',
            schema: { type: 'boolean' },
            required: false,
            example: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Number of requested items',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
            example: 10,
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
            .object({
              clients: z
                .array(
                  z
                    .object({
                      ip: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Client IP address (can be either IPv4 or IPv6)',
                          example: '192.168.0.44',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Client hostname (if available)',
                          example: 'raspberrypi.lan',
                        }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of queries this client has made',
                          example: 5896,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of clients' }),
              total_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
              blocked_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of blocked queries', example: 6379 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsDatabaseTopClientsRoute = createRoute({
  method: 'get',
  path: '/stats/database/top_clients',
  tags: ['Metrics'],
  summary: 'Get top clients (long-term database)',
  description: 'Request top clients\n',
  operationId: 'get_metrics_database_top_clients',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
          },
        }),
      blocked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Return information about permitted or blocked queries',
            name: 'blocked',
            schema: { type: 'boolean' },
            required: false,
            example: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Number of requested items',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
            example: 10,
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
            .object({
              clients: z
                .array(
                  z
                    .object({
                      ip: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Client IP address (can be either IPv4 or IPv6)',
                          example: '192.168.0.44',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Client hostname (if available)',
                          example: 'raspberrypi.lan',
                        }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of queries this client has made',
                          example: 5896,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of clients' }),
              total_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of queries', example: 29160 }),
              blocked_queries: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of blocked queries', example: 6379 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsQueryTypesRoute = createRoute({
  method: 'get',
  path: '/stats/query_types',
  tags: ['Metrics'],
  summary: 'Get query types',
  description: 'Request query types\n',
  operationId: 'get_metrics_query_types',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              types: z
                .object({
                  A: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type A queries', example: 18268 }),
                  AAAA: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type AAAA queries', example: 2332 }),
                  ANY: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type ANY queries', example: 0 }),
                  SRV: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type SRV queries', example: 6 }),
                  SOA: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type SOA queries', example: 44 }),
                  PTR: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type PTR queries', example: 389 }),
                  TXT: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type TXT queries', example: 0 }),
                  NAPTR: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type NAPTR queries', example: 1 }),
                  MX: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type MX queries', example: 109 }),
                  DS: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type DS queries', example: 596 }),
                  RRSIG: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type RRSIG queries', example: 25 }),
                  DNSKEY: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type DNSKEY queries', example: 240 }),
                  NS: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type NS queries', example: 18 }),
                  SVCB: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type SVCB queries', example: 0 }),
                  HTTPS: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type HTTPS queries', example: 11 }),
                  OTHER: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type OTHER queries', example: 0 }),
                })
                .exactOptional()
                .openapi({ description: 'Number of individual query types', required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsDatabaseQueryTypesRoute = createRoute({
  method: 'get',
  path: '/stats/database/query_types',
  tags: ['Metrics'],
  summary: 'Get query types (long-term database)',
  description: 'Request query types\n',
  operationId: 'get_metrics_database_query_types',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
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
            .object({
              types: z
                .object({
                  A: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type A queries', example: 18268 }),
                  AAAA: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type AAAA queries', example: 2332 }),
                  ANY: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type ANY queries', example: 0 }),
                  SRV: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type SRV queries', example: 6 }),
                  SOA: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type SOA queries', example: 44 }),
                  PTR: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type PTR queries', example: 389 }),
                  TXT: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type TXT queries', example: 0 }),
                  NAPTR: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type NAPTR queries', example: 1 }),
                  MX: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type MX queries', example: 109 }),
                  DS: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type DS queries', example: 596 }),
                  RRSIG: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type RRSIG queries', example: 25 }),
                  DNSKEY: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type DNSKEY queries', example: 240 }),
                  NS: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type NS queries', example: 18 }),
                  SVCB: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type SVCB queries', example: 0 }),
                  HTTPS: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type HTTPS queries', example: 11 }),
                  OTHER: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Type OTHER queries', example: 0 }),
                })
                .exactOptional()
                .openapi({ description: 'Number of individual query types', required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getStatsRecentBlockedRoute = createRoute({
  method: 'get',
  path: '/stats/recent_blocked',
  tags: ['Metrics'],
  summary: 'Get most recently blocked domain',
  description: 'Request most recently blocked domain\n',
  operationId: 'get_metrics_recent_blocked',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: 'Number of requested blocked domains',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
            example: 1,
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
            .object({
              blocked: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'List of blocked domains', example: ['doubleclick.net'] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getHistoryRoute = createRoute({
  method: 'get',
  path: '/history',
  tags: ['Metrics'],
  summary: 'Get activity graph data',
  description:
    'Request data needed to generate the total queries over time graph. The sum of the values in the individual data arrays may be smaller than the total number of queries for the corresponding timestamp. The remaining queries are queries that do not fit into the shown categories (e.g. database busy, unknown status queries, etc.).\n',
  operationId: 'get_activity_metrics',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              history: z
                .array(
                  z
                    .object({
                      timestamp: z.number().exactOptional().openapi({ description: 'Timestamp' }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of queries' }),
                      cached: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of cached queries' }),
                      blocked: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of blocked queries' }),
                      forwarded: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of forwarded queries' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data array',
                  example: [
                    {
                      timestamp: 1511819900.539157,
                      total: 2134,
                      cached: 525,
                      blocked: 413,
                      forwarded: 1196,
                    },
                    {
                      timestamp: 1511820500.583821,
                      total: 2014,
                      cached: 52,
                      blocked: 43,
                      forwarded: 1910,
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getHistoryClientsRoute = createRoute({
  method: 'get',
  path: '/history/clients',
  tags: ['Metrics'],
  summary: 'Get per-client activity graph data',
  description:
    'Request data needed to generate the \\"Client activity over last 24 hours\\" graph.\nThis endpoint returns the top N clients, sorted by total number of queries within 24 hours. If N is set to 0, all clients will be returned.\nThe client name is only available if the client\'s IP address can be resolved to a hostname.\n\nThe last client returned is a special client that contains the total number of queries that were not sent by any of the other shown clients , i.e. queries that were sent by clients that are not in the top N. This client is always present, even if it has 0 queries and can be identified by the special name "other clients" (mind the space in the hostname) and the IP address "0.0.0.0".\n\nNote that, due to privacy settings, the returned data may also be empty.\n',
  operationId: 'get_client_metrics',
  request: {
    query: z.object({
      N: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description:
              'Maximum number of clients to return, setting this to 0 will return all clients',
            name: 'N',
            schema: { type: 'integer' },
            required: false,
            example: 20,
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
            .object({
              clients: z
                .record(
                  z.string(),
                  z
                    .object({
                      name: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Client name' }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of queries' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data corresponding to the individual clients',
                  example: {
                    '127.0.0.1': { name: 'localhost', total: 13428 },
                    '::1': { name: 'ip6-localnet', total: 2100 },
                    '192.168.1.1': { name: null, total: 254 },
                    '::': { name: 'pi.hole', total: 29 },
                    '0.0.0.0': { name: 'other clients', total: 14 },
                  },
                }),
              history: z
                .array(
                  z
                    .object({
                      timestamp: z.number().exactOptional().openapi({ description: 'Timestamp' }),
                      data: z
                        .record(
                          z.string(),
                          z
                            .int()
                            .openapi({
                              description: 'Number of queries for the corresponding client',
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Data corresponding to the individual clients' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data array',
                  example: [
                    {
                      timestamp: 1511819900.539157,
                      data: {
                        '127.0.0.1': 35,
                        '::1': 63,
                        '192.168.1.1': 20,
                        '::': 9,
                        '0.0.0.0': 0,
                      },
                    },
                    {
                      timestamp: 1511820500.583821,
                      data: { '127.0.0.1': 10, '::1': 44, '192.168.1.1': 56, '::': 52 },
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getHistoryDatabaseRoute = createRoute({
  method: 'get',
  path: '/history/database',
  tags: ['Metrics'],
  summary: 'Get activity graph data (long-term data)',
  description: 'Request long-term data needed to generate the activity graph\n',
  operationId: 'get_activity_metrics_database',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
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
            .object({
              history: z
                .array(
                  z
                    .object({
                      timestamp: z.number().exactOptional().openapi({ description: 'Timestamp' }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of queries' }),
                      cached: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of cached queries' }),
                      blocked: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of blocked queries' }),
                      forwarded: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of forwarded queries' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data array',
                  example: [
                    {
                      timestamp: 1511819900.539157,
                      total: 2134,
                      cached: 525,
                      blocked: 413,
                      forwarded: 1196,
                    },
                    {
                      timestamp: 1511820500.583821,
                      total: 2014,
                      cached: 52,
                      blocked: 43,
                      forwarded: 1910,
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getHistoryDatabaseClientsRoute = createRoute({
  method: 'get',
  path: '/history/database/clients',
  tags: ['Metrics'],
  summary: 'Get per-client activity graph data (long-term data)',
  description: 'Request long-term data needed to generate the client activity graph\n',
  operationId: 'get_client_metrics_database',
  request: {
    query: z.object({
      from: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'from',
            schema: { type: 'integer' },
            required: true,
            example: 1672580025,
          },
        }),
      until: z
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
            in: 'query',
            description: 'Unix timestamp from when the data should be requested',
            name: 'until',
            schema: { type: 'integer' },
            required: true,
            example: 1672666425,
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
            .object({
              clients: z
                .record(
                  z.string(),
                  z
                    .object({
                      name: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Client name' }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of queries' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data corresponding to the individual clients',
                  example: {
                    '127.0.0.1': { name: 'localhost', total: 13428 },
                    '::1': { name: 'ip6-localnet', total: 2100 },
                    '192.168.1.1': { name: null, total: 254 },
                    '::': { name: 'pi.hole', total: 29 },
                    '0.0.0.0': { name: 'other clients', total: 14 },
                  },
                }),
              history: z
                .array(
                  z
                    .object({
                      timestamp: z.number().exactOptional().openapi({ description: 'Timestamp' }),
                      data: z
                        .record(
                          z.string(),
                          z
                            .int()
                            .openapi({
                              description: 'Number of queries for the corresponding client',
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Data corresponding to the individual clients' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data array',
                  example: [
                    {
                      timestamp: 1511819900.539157,
                      data: {
                        '127.0.0.1': 35,
                        '::1': 63,
                        '192.168.1.1': 20,
                        '::': 9,
                        '0.0.0.0': 0,
                      },
                    },
                    {
                      timestamp: 1511820500.583821,
                      data: { '127.0.0.1': 10, '::1': 44, '192.168.1.1': 56, '::': 52 },
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getQueriesRoute = createRoute({
  method: 'get',
  path: '/queries',
  tags: ['Metrics'],
  summary: 'Get queries',
  description:
    'Request query details.\nQuery parameters may be used to limit the number of results.\n\nBy default, this API callback returns the most recent 100 queries.\nThis can be changed using the parameter `length`.\n\nThis callback allows for fine-grained filtering by various parameters.\nAll query parameters are all optional and can be combined in any way:\n\n- Only show queries *from* a given timestamp on: Use parameter `from`\n- Only show queries *until* a given timestamp: Use parameter `until`\n- Only show queries sent to a specific upstream destination (may also be `cache`, `blocklist`, or `permitted`): Use parameter `upstream`\n- Only show queries for specific domains: Use parameter `domain`\n- Only show queries for specific clients: Use parameter `client`\n\nBy default, the returned queries always start at the most recent query.\nThis can be changed by supplying the parameter `cursor`.\nEach result of this API callback contains a `cursor` pointing the beginning of the next `length` queries chunk.\nThis provides a very fast and lightweight server-side pagination implementation.\n\nIf wildcards are supported for a parameter, you may specify `*` at any position in the parameter to match any number of characters.\n',
  operationId: 'get_queries',
  request: {
    query: z.object({
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            description: 'Get queries from...',
            required: false,
            schema: { type: 'number' },
          },
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            description: 'Get queries until...',
            required: false,
            schema: { type: 'number' },
          },
        }),
      length: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'length',
            description: 'Number of results to return',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            description: 'Offset from first record',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      cursor: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            description: 'Database ID of the most recent query to be shown\n',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'domain',
            description: 'Filter by specific domain (wildcards supported)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      client_ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'client_ip',
            description: 'Filter by specific client IP address (wildcards supported)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      client_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'client_name',
            description: 'Filter by specific client hostname (wildcards supported)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      upstream: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'upstream',
            description: 'Filter by specific upstream (wildcards supported)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            description:
              'Filter by specific query type (A, AAAA, ..., OTHER for all types without a name of their own, or TYPEnnn for one of them)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter by specific query status (GRAVITY, FORWARDED, ...)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      reply: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reply',
            description: 'Filter by specific reply type (NODATA, NXDOMAIN, ...)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      dnssec: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dnssec',
            description: 'Filter by specific DNSSEC status (SECURE, INSECURE, ...)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disk: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'disk',
            description: 'Load queries from on-disk database rather than from in-memory',
            required: false,
            schema: { type: 'boolean', default: false },
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
            .object({
              queries: z
                .array(
                  z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Query ID in the long-term database' }),
                      time: z.number().exactOptional().openapi({ description: 'Timestamp' }),
                      type: z.string().exactOptional().openapi({ description: 'Query type' }),
                      domain: z.string().exactOptional().openapi({ description: 'Queried domain' }),
                      cname: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Domain blocked during deep CNAME inspection' }),
                      status: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Query status' }),
                      client: z
                        .object({
                          ip: z
                            .string()
                            .exactOptional()
                            .openapi({ description: "Requesting client's IP address" }),
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: "Requesting client's hostname (if available)",
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      dnssec: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'DNSSEC status' }),
                      reply: z
                        .object({
                          type: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Reply type' }),
                          time: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Time until the response was received (seconds, 0 if not available)',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      list_id: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'ID of corresponding database table (adlist for anti-/gravity, else domainlist) (`NULL` if N/A)',
                        }),
                      upstream: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'IP or name + port of upstream server' }),
                      ede: z
                        .object({
                          code: z.int().exactOptional().openapi({ description: 'EDE code' }),
                          text: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'EDE message (if available)' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Extended DNS Error (EDE) information',
                          required: [],
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Data array',
                  example: [
                    {
                      time: 1581907991.539157,
                      type: 'A',
                      domain: 'community.stoplight.io',
                      cname: null,
                      status: 'FORWARDED',
                      client: { ip: '192.168.0.14', name: 'desktop.lan' },
                      dnssec: 'INSECURE',
                      reply: { type: 'IP', time: 0.019 },
                      list_id: null,
                      upstream: 'localhost#5353',
                      id: 112421354,
                      ede: { code: 0, text: null },
                    },
                    {
                      time: 1581907871.583821,
                      type: 'AAAA',
                      domain: 'api.github.com',
                      cname: null,
                      status: 'FORWARDED',
                      client: { ip: '127.0.0.1', name: 'localhost' },
                      dnssec: 'UNKNOWN',
                      reply: { type: 'IP', time: 0.0123 },
                      list_id: null,
                      upstream: 'localhost#5353',
                      id: 112421355,
                      ede: { code: 0, text: null },
                    },
                  ],
                }),
              cursor: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Database ID of most recent query to show (null when there are no queries to show, e.g., at privacy level 3)',
                  example: 175881,
                }),
              recordsTotal: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of available queries', example: 1234 }),
              recordsFiltered: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of available queries after filtering',
                  example: 1234,
                }),
              draw: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'DataTables-specific integer (echos input value)',
                  example: 1,
                }),
              earliest_timestamp: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Earliest timestamp of queries in in-memory database (Unix time)',
                  example: 1581900000,
                }),
              earliest_timestamp_disk: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Earliest timestamp of queries in on-disk database (Unix time)',
                  example: 1580000000,
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getQueriesSuggestionsRoute = createRoute({
  method: 'get',
  path: '/queries/suggestions',
  tags: ['Metrics'],
  summary: 'Get query filter suggestions',
  description: 'This endpoint provides suggestions for filters suitable to be used with /queries\n',
  operationId: 'get_suggestions',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              suggestions: z
                .object({
                  domain: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'Array of suggested domains',
                      example: ['pi-hole.net', 'amazon.com'],
                    }),
                  client_ip: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested client IP addresses' }),
                  client_name: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested client names' }),
                  upstream: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested upstreams' }),
                  type: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested query types' }),
                  status: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested query statuses' }),
                  reply: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested query replies' }),
                  dnssec: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'Array of suggested DNSSEC statuses' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getDnsBlockingRoute = createRoute({
  method: 'get',
  path: '/dns/blocking',
  tags: ['DNS control'],
  summary: 'Get current blocking status',
  description:
    'The property `timer` may contain additional details concerning a temporary en-/disabling.\nIt is `null` when no timer is active (the current status is permanent).\n',
  operationId: 'get_blocking',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z
                .enum(['enabled', 'disabled', 'failed', 'unknown'])
                .exactOptional()
                .openapi({ description: 'Blocking status', example: 'enabled' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  timer: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Remaining seconds until blocking mode is automatically changed',
                      example: 15,
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postDnsBlockingRoute = createRoute({
  method: 'post',
  path: '/dns/blocking',
  tags: ['DNS control'],
  summary: 'Change current blocking status',
  description:
    'Change the current blocking mode by setting `blocking` to the desired value.\nThe optional `timer` object may used to set a timer. Once this timer elapsed, the opposite blocking mode is automatically set.\nFor instance, you can request `{blocking: false, timer: 60}` to disable Pi-hole for one minute.\nBlocking will be automatically resumed afterwards.\n\nYou can terminate a possibly running timer by setting `timer` to `null` (the set mode becomes permanent).\n',
  operationId: 'set_blocking',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Blocking status', example: true }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  timer: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Remaining seconds until blocking mode is automatically changed',
                      example: 15,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z
                .enum(['enabled', 'disabled', 'failed', 'unknown'])
                .exactOptional()
                .openapi({ description: 'Blocking status', example: 'enabled' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  timer: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Remaining seconds until blocking mode is automatically changed',
                      example: 15,
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  error: z
                    .object({
                      key: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Machine-readable error type',
                          example: 'bad_request',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Human-readable error message',
                          example: 'Invalid request body data (no valid JSON)',
                        }),
                      hint: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Additional data (if available)', example: null }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ description: 'No JSON payload found', required: [] }),
              z
                .object({
                  error: z
                    .object({
                      key: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Machine-readable error type',
                          example: 'body_error',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Human-readable error message',
                          example: 'No \\"blocking\\" boolean in body data',
                        }),
                      hint: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Additional data (if available)', example: null }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ description: 'Item to be modified is missing', required: [] }),
            ])
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const putDomainsTypeKindDomainRoute = createRoute({
  method: 'put',
  path: '/domains/{type}/{kind}/{domain}',
  tags: ['Domain management'],
  summary: 'Replace domain',
  description:
    'Items may be updated by replacing them. `{type}`, `{kind}`, and `{domain}` are required.\n\nEnsure to send all the required parameters (such as `comment`) to ensure these properties are retained.\nThe read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.\n\nYou can move existing domains to another list type/kind by `PUT`ting the domain to the new destination by specifying the optional fields `type` and `kind`.\nExample:\nUse `PUT allow/exact/abc.com` with `type="deny", kind="exact"` to change `abc.com` from exact denied to exact allowed. Make sure to always specify *both* values.\n\nWhen adding/replacing a regular expression, ensure that `{domain}` is properly URI-escaped.\n',
  operationId: 'replace_domain',
  request: {
    params: z.object({
      type: z
        .enum(['allow', 'deny'])
        .openapi({
          param: {
            in: 'path',
            name: 'type',
            description: 'Type (allowed or denied domain)',
            schema: { type: 'string', enum: ['allow', 'deny'] },
            required: true,
            example: 'allow',
          },
        }),
      kind: z
        .enum(['exact', 'regex'])
        .openapi({
          param: {
            in: 'path',
            name: 'kind',
            description: 'Kind (exact domain or regular expression)',
            schema: { type: 'string', enum: ['exact', 'regex'] },
            required: true,
            example: 'exact',
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain',
            description: 'Domain',
            schema: { type: 'string' },
            required: true,
            example: 'testdomain.com',
          },
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['allow', 'deny'])
                .exactOptional()
                .openapi({ description: 'String specifying domain type', example: 'allow' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  kind: z
                    .enum(['exact', 'regex'])
                    .exactOptional()
                    .openapi({ description: 'String specifying domain kind', example: 'exact' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  comment: z
                    .string()
                    .nullable()
                    .default(null)
                    .exactOptional()
                    .openapi({
                      description: 'User-provided free-text comment for this domain',
                      example: 'Some comment describing this domain',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  groups: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({ description: 'Array of group IDs' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Status of domain' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created or Updated domain',
      content: {
        'application/json': {
          schema: z
            .object({
              domains: z
                .array(
                  z
                    .object({
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Domain', example: 'testdomain.com' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          unicode: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Unicode domain (may be different from `domain` if punycode-encoding is used)',
                              example: 'äbc.com',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          type: z
                            .enum(['allow', 'deny'])
                            .exactOptional()
                            .openapi({
                              description: 'String specifying domain type',
                              example: 'allow',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          kind: z
                            .enum(['exact', 'regex'])
                            .exactOptional()
                            .openapi({
                              description: 'String specifying domain kind',
                              example: 'exact',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this domain',
                              example: 'Some comment describing this domain',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of domain' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of domain addition',
                              readOnly: true,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last domain modification',
                              readOnly: true,
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of domains' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Domain that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of domains that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Domain that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of domains that were successfully\nadded to the database and the number of domains that could not be\nadded to the database.\n',
                      example: {
                        success: [{ item: 'example.com' }, { item: 'example3.com' }],
                        errors: [{ item: 'example2.com', error: 'The item is already present' }],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            domains: {
              summary: 'Example domains',
              value: {
                domains: [
                  {
                    domain: 'allowed.com',
                    unicode: 'allowed.com',
                    type: 'allow',
                    kind: 'exact',
                    comment: null,
                    groups: [0],
                    enabled: true,
                    id: 299,
                    date_added: 1611239095,
                    date_modified: 1612163756,
                  },
                  {
                    domain: 'xn--4ca.com',
                    unicode: 'ä.com',
                    type: 'allow',
                    kind: 'regex',
                    comment: 'Some text',
                    groups: [0],
                    enabled: true,
                    id: 305,
                    date_added: 1611240635,
                    date_modified: 1611241276,
                  },
                ],
                took: 0.012,
                processed: null,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            list_imprecise: {
              summary: 'List not specified precisely enough',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify list to modify more precisely',
                  hint: null,
                },
                took: 0.003,
              },
            },
            item_missing: {
              summary: 'Domain to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
              },
            },
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
              },
            },
            invalid_regex: {
              summary: 'Invalid regex rejected',
              value: {
                error: {
                  key: 'regex_error',
                  message: 'Regex validation failed',
                  hint: "Missing ']'",
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteDomainsTypeKindDomainRoute = createRoute({
  method: 'delete',
  path: '/domains/{type}/{kind}/{domain}',
  tags: ['Domain management'],
  summary: 'Delete domain',
  description: '*Note:* There will be no content on success.\n',
  operationId: 'delete_domain',
  request: {
    params: z.object({
      type: z
        .enum(['allow', 'deny'])
        .openapi({
          param: {
            in: 'path',
            name: 'type',
            description: 'Type (allowed or denied domain)',
            schema: { type: 'string', enum: ['allow', 'deny'] },
            required: true,
            example: 'allow',
          },
        }),
      kind: z
        .enum(['exact', 'regex'])
        .openapi({
          param: {
            in: 'path',
            name: 'kind',
            description: 'Kind (exact domain or regular expression)',
            schema: { type: 'string', enum: ['exact', 'regex'] },
            required: true,
            example: 'exact',
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain',
            description: 'Domain',
            schema: { type: 'string' },
            required: true,
            example: 'testdomain.com',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            list_imprecise: {
              summary: 'List not specified precisely enough',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify list to modify more precisely',
                  hint: null,
                },
                took: 0.003,
              },
            },
            item_missing: {
              summary: 'Domain to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDomainsTypeKindRoute = createRoute({
  method: 'post',
  path: '/domains/{type}/{kind}',
  tags: ['Domain management'],
  summary: 'Add new domain',
  description:
    'Creates a new domain in the `domains` object. This may be either an exact domain or a regex, depending on `{kind}`.\nBoth `{type}` and `{kind}` are mandatory for this endpoint.\nThe `{domain}` itself is specified in the request body (POST JSON).\n\nOn success, a new resource is created at `/domains/{type}/{kind}/{domain}`.\n\nThe `database_error` with message `The item is already present` error indicates that the same entry (`domain`, `type`, `kind`) already exists.\n\nWhen adding a regular expression, ensure the request body is properly JSON-escaped.\n',
  operationId: 'add_domain',
  request: {
    params: z.object({
      type: z
        .enum(['allow', 'deny'])
        .openapi({
          param: {
            in: 'path',
            name: 'type',
            description: 'Type (allowed or denied domain)',
            schema: { type: 'string', enum: ['allow', 'deny'] },
            required: true,
            example: 'allow',
          },
        }),
      kind: z
        .enum(['exact', 'regex'])
        .openapi({
          param: {
            in: 'path',
            name: 'kind',
            description: 'Kind (exact domain or regular expression)',
            schema: { type: 'string', enum: ['exact', 'regex'] },
            required: true,
            example: 'exact',
          },
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .xor([
                  z.string().openapi({ description: 'Domain', example: 'testdomain.com' }),
                  z
                    .array(z.string())
                    .openapi({
                      description: 'array of domains',
                      example: ['testdomain.com', 'otherdomain.de'],
                    }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  comment: z
                    .string()
                    .nullable()
                    .default(null)
                    .exactOptional()
                    .openapi({
                      description: 'User-provided free-text comment for this domain',
                      example: 'Some comment describing this domain',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  groups: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({ description: 'Array of group IDs' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Status of domain' }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created domain',
      content: {
        'application/json': {
          schema: z
            .object({
              domains: z
                .array(
                  z
                    .object({
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Domain', example: 'testdomain.com' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          unicode: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Unicode domain (may be different from `domain` if punycode-encoding is used)',
                              example: 'äbc.com',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          type: z
                            .enum(['allow', 'deny'])
                            .exactOptional()
                            .openapi({
                              description: 'String specifying domain type',
                              example: 'allow',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          kind: z
                            .enum(['exact', 'regex'])
                            .exactOptional()
                            .openapi({
                              description: 'String specifying domain kind',
                              example: 'exact',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this domain',
                              example: 'Some comment describing this domain',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of domain' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of domain addition',
                              readOnly: true,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last domain modification',
                              readOnly: true,
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of domains' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Domain that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of domains that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Domain that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of domains that were successfully\nadded to the database and the number of domains that could not be\nadded to the database.\n',
                      example: {
                        success: [{ item: 'example.com' }, { item: 'example3.com' }],
                        errors: [{ item: 'example2.com', error: 'The item is already present' }],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      headers: z.object({
        Location: {
          description: 'Location of created resource',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of created resource', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            list_imprecise: {
              summary: 'List not specified precisely enough',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify list to modify more precisely',
                  hint: null,
                },
                took: 0.003,
              },
            },
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
              },
            },
            invalid_regex: {
              summary: 'Invalid regex rejected',
              value: {
                error: {
                  key: 'regex_error',
                  message: 'Regex validation failed',
                  hint: "Missing ']'",
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postDomainsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/domains:batchDelete',
  tags: ['Domain management'],
  summary: 'Delete multiple domains',
  description: '*Note:* There will be no content on success.\n',
  operationId: 'batchDelete_domains',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                item: z
                  .string()
                  .openapi({ description: 'Domain to delete', example: 'example.com' }),
                type: z
                  .enum(['allow', 'deny'])
                  .openapi({ description: 'Type of domain to delete', example: 'allow' }),
                kind: z
                  .enum(['exact', 'regex'])
                  .openapi({ description: 'Kind of domain to delete', example: 'exact' }),
              })
              .openapi({ required: ['item', 'type', 'kind'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Items deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGroupsNameRoute = createRoute({
  method: 'get',
  path: '/groups/{name}',
  tags: ['Group management'],
  summary: 'Get groups',
  description:
    '`{name}` is optional. Specifying it will result in only the requested group being returned.\n\nValid combinations are:\n- `/api/groups` (all groups)\n- `/api/groups/my_group` (group identical to `my_group`)\n',
  operationId: 'get_groups',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            schema: { type: 'string' },
            required: true,
            description: 'Group name',
            example: 'test_group',
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
            .object({
              groups: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Group name', example: 'test_group' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this group',
                              example: 'Some comment for this group',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of item', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            groups: {
              value: {
                groups: [
                  {
                    name: 'Default',
                    comment: 'The default group',
                    enabled: true,
                    id: 0,
                    date_added: 1594670974,
                    date_modified: 1611157897,
                  },
                  {
                    name: 'a',
                    comment: null,
                    enabled: true,
                    id: 5,
                    date_added: 1604871899,
                    date_modified: 1604871899,
                  },
                ],
                took: 0.003,
                processed: null,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const putGroupsNameRoute = createRoute({
  method: 'put',
  path: '/groups/{name}',
  tags: ['Group management'],
  summary: 'Replace group',
  description:
    'Items may be updated by replacing them. `{name}` is required.\n\nEnsure to send all the required parameters (such as `comment`) to ensure these properties are retained.\nBy specifying a different `name`, the group with the former name as specified in the URI will be renamed.\nThe read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.\n',
  operationId: 'replace_group',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            schema: { type: 'string' },
            required: true,
            description: 'Group name',
            example: 'test_group',
          },
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Group name', example: 'test_group' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  comment: z
                    .string()
                    .nullable()
                    .default(null)
                    .exactOptional()
                    .openapi({
                      description: 'User-provided free-text comment for this group',
                      example: 'Some comment for this group',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Status of item', example: true }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created or Updated Item',
      content: {
        'application/json': {
          schema: z
            .object({
              groups: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Group name', example: 'test_group' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this group',
                              example: 'Some comment for this group',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of item', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Group that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of groups that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Group that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of groups that were successfully\nadded to the database and the number of groups that could not be\nadded to the database.\n',
                      example: {
                        success: [{ item: 'Home-Automation' }, { item: 'Children' }],
                        errors: [{ item: 'Garden', error: 'The item is already present' }],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      headers: z.object({
        Location: {
          description: 'Location of created resource',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of created resource', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            item_missing: {
              summary: 'Group to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
              },
            },
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteGroupsNameRoute = createRoute({
  method: 'delete',
  path: '/groups/{name}',
  tags: ['Group management'],
  summary: 'Delete group',
  description: '*Note:* There will be no content on success.\n',
  operationId: 'delete_group',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            schema: { type: 'string' },
            required: true,
            description: 'Group name',
            example: 'test_group',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            item_missing: {
              summary: 'Group to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Group management'],
  summary: 'List all groups',
  description:
    'Returns the full list of groups configured on your Pi-hole.\n\nThis is the collection form of `GET /api/groups/{name}` (see `get_groups`)\nand returns the same array schema without requiring a `{name}` path parameter.\n',
  operationId: 'list_groups',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              groups: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Group name', example: 'test_group' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this group',
                              example: 'Some comment for this group',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of item', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            groups: {
              value: {
                groups: [
                  {
                    name: 'Default',
                    comment: 'The default group',
                    enabled: true,
                    id: 0,
                    date_added: 1594670974,
                    date_modified: 1611157897,
                  },
                  {
                    name: 'a',
                    comment: null,
                    enabled: true,
                    id: 5,
                    date_added: 1604871899,
                    date_modified: 1604871899,
                  },
                ],
                took: 0.003,
                processed: null,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['Group management'],
  summary: 'Add new group',
  description:
    'Creates a new group in the `groups` object. The `{group}` itself is specified in the request body (POST JSON).\n\nOn success, a new resource is created at `/groups/{name}`.\n\nThe `database_error` with message `The item is already present` error indicates that a group with the same name already exists.\n',
  operationId: 'add_group',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .xor([
                  z.string().openapi({ description: 'Group name', example: 'test_group' }),
                  z
                    .array(z.string())
                    .openapi({
                      description: 'array of group names',
                      example: ['test1', 'test2', 'test3'],
                    }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  comment: z
                    .string()
                    .nullable()
                    .default(null)
                    .exactOptional()
                    .openapi({
                      description: 'User-provided free-text comment for this group',
                      example: 'Some comment for this group',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Status of item', example: true }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created item',
      content: {
        'application/json': {
          schema: z
            .object({
              groups: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Group name', example: 'test_group' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this group',
                              example: 'Some comment for this group',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of item', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Group that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of groups that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Group that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of groups that were successfully\nadded to the database and the number of groups that could not be\nadded to the database.\n',
                      example: {
                        success: [{ item: 'Home-Automation' }, { item: 'Children' }],
                        errors: [{ item: 'Garden', error: 'The item is already present' }],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      headers: z.object({
        Location: {
          description: 'Location of created resource',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of created resource', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postGroupsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/groups:batchDelete',
  tags: ['Group management'],
  summary: 'Delete multiple groups',
  description:
    'Deletes multiple groups in the `groups` object. The `{groups}` themselves are specified in the request body (POST JSON).\n',
  operationId: 'batchDelete_groups',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({ item: z.string().openapi({ description: 'group name' }) })
                .openapi({ required: ['item'] }),
            )
            .openapi({ example: [{ item: 'test1' }, { item: 'test2' }] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Items deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getClientsClientRoute = createRoute({
  method: 'get',
  path: '/clients/{client}',
  tags: ['Client management'],
  summary: 'Get clients',
  description:
    '`{client}` is optional. If it is specified, it will result in only the requested client being returned. This parameter needs to be URI-encoded.\n\nValid combinations are:\n- `/api/clients` (all clients)\n- `/api/clients/my_client` (client identical to `my_client`)\n',
  operationId: 'get_clients',
  request: {
    params: z.object({
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            schema: { type: 'string' },
            required: true,
            description: 'client IP / MAC / hostname / interface',
            example: '127.0.0.1',
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
            .object({
              clients: z
                .array(
                  z
                    .object({
                      client: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'client IP / MAC / hostname / interface',
                          example: '127.0.0.1',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this client',
                              example: 'Some comment for this client',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'hostname (only if available)',
                              readOnly: true,
                              example: 'localhost',
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of clients' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            clients: {
              value: {
                clients: [
                  {
                    client: '127.0.0.1',
                    name: 'localhost',
                    comment: 'comment',
                    id: 1,
                    date_added: 1604871899,
                    date_modified: 1604871899,
                  },
                  {
                    client: '::1',
                    name: 'ip6-localhost',
                    comment: null,
                    id: 2,
                    date_added: 1611322675,
                    date_modified: 1611325497,
                  },
                ],
                took: 0.012,
                processed: {
                  success: [{ item: '127.0.0.1' }],
                  failed: [{ item: '127.0.0.2', error: 'The item is already present' }],
                },
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const putClientsClientRoute = createRoute({
  method: 'put',
  path: '/clients/{client}',
  tags: ['Client management'],
  summary: 'Replace client',
  description:
    'Items may be updated by replacing them. `{client}` is required and needs to be URI-encoded.\n\nEnsure to send all the required parameters (such as `comment` or `groups`) to ensure these properties are retained.\nThe read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.\n',
  operationId: 'replace_client',
  request: {
    params: z.object({
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            schema: { type: 'string' },
            required: true,
            description: 'client IP / MAC / hostname / interface',
            example: '127.0.0.1',
          },
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              comment: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description: 'User-provided free-text comment for this client',
                  example: 'Some comment for this client',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  groups: z
                    .array(z.int())
                    .default([0])
                    .exactOptional()
                    .openapi({ description: 'Array of group IDs' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created or Updated Item',
      content: {
        'application/json': {
          schema: z
            .object({
              clients: z
                .array(
                  z
                    .object({
                      client: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'client IP / MAC / hostname / interface',
                          example: '127.0.0.1',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this client',
                              example: 'Some comment for this client',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'hostname (only if available)',
                              readOnly: true,
                              example: 'localhost',
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of clients' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Client that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of clients that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Client that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of clients that were successfully\nadded to the database and the number of clients that could not be\nadded to the database.\n',
                      example: {
                        success: [{ item: '127.0.0.1' }, { item: '::1' }],
                        errors: [{ item: '192.168.2.5', error: 'The item is already present' }],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            item_missing: {
              summary: 'Client to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
              },
            },
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteClientsClientRoute = createRoute({
  method: 'delete',
  path: '/clients/{client}',
  tags: ['Client management'],
  summary: 'Delete client',
  description:
    '*Note:* There will be no content on success. `{client}` is required and needs to be URI-encoded.\n',
  operationId: 'delete_client',
  request: {
    params: z.object({
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            schema: { type: 'string' },
            required: true,
            description: 'client IP / MAC / hostname / interface',
            example: '127.0.0.1',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            item_missing: {
              summary: 'Client to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getClientsRoute = createRoute({
  method: 'get',
  path: '/clients',
  tags: ['Client management'],
  summary: 'List all clients',
  description:
    'Returns the full list of clients configured on your Pi-hole.\n\nThis is the collection form of `GET /api/clients/{client}` (see `get_clients`)\nand returns the same array schema without requiring a `{client}` path parameter.\n',
  operationId: 'list_clients',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              clients: z
                .array(
                  z
                    .object({
                      client: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'client IP / MAC / hostname / interface',
                          example: '127.0.0.1',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this client',
                              example: 'Some comment for this client',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'hostname (only if available)',
                              readOnly: true,
                              example: 'localhost',
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of clients' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            clients: {
              value: {
                clients: [
                  {
                    client: '127.0.0.1',
                    name: 'localhost',
                    comment: 'comment',
                    id: 1,
                    date_added: 1604871899,
                    date_modified: 1604871899,
                  },
                  {
                    client: '::1',
                    name: 'ip6-localhost',
                    comment: null,
                    id: 2,
                    date_added: 1611322675,
                    date_modified: 1611325497,
                  },
                ],
                took: 0.012,
                processed: {
                  success: [{ item: '127.0.0.1' }],
                  failed: [{ item: '127.0.0.2', error: 'The item is already present' }],
                },
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postClientsRoute = createRoute({
  method: 'post',
  path: '/clients',
  tags: ['Client management'],
  summary: 'Add new client',
  description:
    'Creates a new client in the `clients` object. The `{client}` itself is specified in the request body (POST JSON).\n\nClients may be described either by their IP addresses (IPv4 and IPv6 are supported),\nIP subnets (CIDR notation, like `192.168.2.0/24`), their MAC addresses (like `12:34:56:78:9A:BC`), by their hostnames (like `localhost`), or by the interface they are connected to (prefaced with a colon, like `:eth0`).\n\nNote that client recognition by IP addresses (incl. subnet ranges) is preferred over MAC address, host name or interface recognition as the two latter will only be available after some time.\nFurthermore, MAC address recognition only works for devices at most one networking hop away from your Pi-hole.\n\nOn success, a new resource is created at `/clients/{client}`.\n\nThe `database_error` with message `The item is already present` error indicates that this client already exists.\n',
  operationId: 'add_client',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              client: z
                .xor([
                  z
                    .string()
                    .openapi({
                      description: 'client IP / MAC / hostname / interface',
                      example: '127.0.0.1',
                    }),
                  z
                    .array(z.string())
                    .openapi({
                      description: 'array of client IPs / MACs / hostnames / interfaces',
                      example: ['127.0.0.1', '192.168.2.12'],
                    }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  comment: z
                    .string()
                    .nullable()
                    .default(null)
                    .exactOptional()
                    .openapi({
                      description: 'User-provided free-text comment for this client',
                      example: 'Some comment for this client',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  groups: z
                    .array(z.int())
                    .default([0])
                    .exactOptional()
                    .openapi({ description: 'Array of group IDs' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created item',
      content: {
        'application/json': {
          schema: z
            .object({
              clients: z
                .array(
                  z
                    .object({
                      client: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'client IP / MAC / hostname / interface',
                          example: '127.0.0.1',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this client',
                              example: 'Some comment for this client',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'hostname (only if available)',
                              readOnly: true,
                              example: 'localhost',
                            }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of clients' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Client that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of clients that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Client that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of clients that were successfully\nadded to the database and the number of clients that could not be\nadded to the database.\n',
                      example: {
                        success: [{ item: '127.0.0.1' }, { item: '::1' }],
                        errors: [{ item: '192.168.2.5', error: 'The item is already present' }],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      headers: z.object({
        Location: {
          description: 'Location of created resource',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of created resource', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  error: z
                    .object({
                      key: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Machine-readable error type' }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Human-readable error message' }),
                      hint: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Further details' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ description: 'Bad request', required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  error: z
                    .object({
                      key: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Machine-readable error type',
                          example: 'unauthorized',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Human-readable error message',
                          example: 'Unauthorized',
                        }),
                      hint: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'No additional data available', example: null }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ description: 'Authentication required', required: [] }),
            ),
        },
      },
    },
  },
})

export const postClientsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/clients:batchDelete',
  tags: ['Client management'],
  summary: 'Delete multiple clients',
  description:
    'Deletes multiple clients in the `clients` object. The `{client}`s themselves are specified in the request body (POST JSON).\n\nClients may be described either by their IP addresses (IPv4 and IPv6 are supported),\nIP subnets (CIDR notation, like `192.168.2.0/24`), their MAC addresses (like `12:34:56:78:9A:BC`), by their hostnames (like `localhost`), or by the interface they are connected to (prefaced with a colon, like `:eth0`).</p>\n\n*Note:* There will be no content on success.\n',
  operationId: 'batchDelete_clients',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  item: z
                    .string()
                    .openapi({ description: 'client IP / MAC / hostname / interface' }),
                })
                .openapi({ required: ['item'] }),
            )
            .openapi({
              example: [
                { item: '192.168.2.5' },
                { item: '::1' },
                { item: '12:34:56:78:9A:BC' },
                { item: 'localhost' },
                { item: ':eth0' },
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Items deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getClientsSuggestionsRoute = createRoute({
  method: 'get',
  path: '/clients/_suggestions',
  tags: ['Client management'],
  summary: 'Get client suggestions',
  description:
    'Returns a list of unconfigured clients that have been seen by Pi-hole. By default, this list is limited to 50 clients. Clients are ordered by when your Pi-hole has received the last query from this client (most recent first)\n',
  operationId: 'get_client_suggestions',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'count',
            schema: { type: 'integer', default: 50 },
            required: false,
            description: '(Optional) Maximum number of clients to show',
            example: 50,
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
            .object({
              clients: z
                .array(
                  z
                    .object({
                      hwaddr: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ example: '12:34:56:78:9A:BC' }),
                      macVendor: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ example: 'Espressif Inc.' }),
                      lastQuery: z.int().exactOptional().openapi({ example: 1683305917 }),
                      addresses: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Comma-separated list of IP addresses',
                          example: '127.0.0.1,::1',
                        }),
                      names: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Comma-separated list of hostnames (if available)',
                          example: 'localhost,ip6-localhost',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getListsListRoute = createRoute({
  method: 'get',
  path: '/lists/{list}',
  tags: ['List management'],
  summary: 'Get lists',
  description:
    '`{list}` is optional. Specifying it will result in only the requested list being returned.\n\nValid combinations are:\n- `/api/lists` (all lists)\n- `/api/lists/my_list` (list identical to `my_list`)\n',
  operationId: 'get_lists',
  request: {
    params: z.object({
      list: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'list',
            schema: { type: 'string' },
            required: true,
            description: 'Address of the list',
            example: 'https://hosts-file.net/ad_servers.txt',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['allow', 'block'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['allow', 'block'] },
            required: false,
            description: 'Type of list, optional',
            example: 'block',
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
            .object({
              lists: z
                .array(
                  z
                    .object({
                      address: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Address of the list',
                          example: 'https://hosts-file.net/ad_servers.txt',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          type: z
                            .enum(['allow', 'block'])
                            .exactOptional()
                            .openapi({ description: 'Type of list', example: 'block' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this list',
                              example: 'Some comment for this list',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of domain', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          date_updated: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last update of list content',
                              readOnly: true,
                              example: 1608435667,
                            }),
                          number: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of VALID domains on this list',
                              readOnly: true,
                              example: 20566,
                            }),
                          invalid_domains: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of INVALID domains on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          abp_entries: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of ABP entries on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'List status', readOnly: true, example: 2 }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of lists' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            lists: {
              value: {
                lists: [
                  {
                    address: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
                    comment: 'Migrated from /etc/pihole/adlists.list',
                    groups: [0],
                    enabled: true,
                    id: 1,
                    date_added: 1594670974,
                    date_modified: 1595279300,
                  },
                  {
                    address: 'https://mirror1.malwaredomains.com/files/justdomains',
                    comment: 'Migrated from /etc/pihole/adlists.list',
                    groups: [0],
                    enabled: true,
                    id: 2,
                    date_added: 1594670974,
                    date_modified: 1594670974,
                  },
                ],
                took: 0.012,
                processed: null,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const putListsListRoute = createRoute({
  method: 'put',
  path: '/lists/{list}',
  tags: ['List management'],
  summary: 'Replace list',
  description:
    'Items may be updated by replacing them. `{list}` and `{listtype}` are required.\n\nEnsure to send all the required parameters (such as `comment`) to ensure these properties are retained.\nThe read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.\n',
  operationId: 'replace_lists',
  request: {
    params: z.object({
      list: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'list',
            schema: { type: 'string' },
            required: true,
            description: 'Address of the list',
            example: 'https://hosts-file.net/ad_servers.txt',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['allow', 'block'])
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['allow', 'block'] },
            required: true,
            description: 'Type of list',
            example: 'block',
          },
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              comment: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description: 'User-provided free-text comment for this list',
                  example: 'Some comment for this list',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  type: z
                    .enum(['allow', 'block'])
                    .exactOptional()
                    .openapi({ description: 'Type of list', example: 'block' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  groups: z
                    .array(z.int())
                    .default([0])
                    .exactOptional()
                    .openapi({ description: 'Array of group IDs' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Status of domain', example: true }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created or Updated Item',
      content: {
        'application/json': {
          schema: z
            .object({
              lists: z
                .array(
                  z
                    .object({
                      address: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Address of the list',
                          example: 'https://hosts-file.net/ad_servers.txt',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          type: z
                            .enum(['allow', 'block'])
                            .exactOptional()
                            .openapi({ description: 'Type of list', example: 'block' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this list',
                              example: 'Some comment for this list',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of domain', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          date_updated: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last update of list content',
                              readOnly: true,
                              example: 1608435667,
                            }),
                          number: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of VALID domains on this list',
                              readOnly: true,
                              example: 20566,
                            }),
                          invalid_domains: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of INVALID domains on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          abp_entries: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of ABP entries on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'List status', readOnly: true, example: 2 }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of lists' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'List that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of lists that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'List that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of lists that were successfully\nadded to the database and the number of lists that could not be\nadded to the database.\n',
                      example: {
                        success: [
                          {
                            item: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
                          },
                          { item: 'https://mirror1.malwaredomains.com/files/justdomains' },
                        ],
                        errors: [
                          {
                            item: 'https://raw.githubusercontent.com/abc/def/master/hosts',
                            error: 'The item is already present',
                          },
                        ],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            item_missing: {
              summary: 'List to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
              },
            },
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteListsListRoute = createRoute({
  method: 'delete',
  path: '/lists/{list}',
  tags: ['List management'],
  summary: 'Delete list',
  description:
    '`{list}` and `{listtype}` are required.\n*Note:* There will be no content on success.\n',
  operationId: 'delete_lists',
  request: {
    params: z.object({
      list: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'list',
            schema: { type: 'string' },
            required: true,
            description: 'Address of the list',
            example: 'https://hosts-file.net/ad_servers.txt',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['allow', 'block'])
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['allow', 'block'] },
            required: true,
            description: 'Type of list',
            example: 'block',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            item_missing: {
              summary: 'List to be modified is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Invalid request: Specify item in URI',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListsRoute = createRoute({
  method: 'get',
  path: '/lists',
  tags: ['List management'],
  summary: 'List all lists',
  description:
    'Returns the full list of subscribed lists configured on your Pi-hole.\n\nThis is the collection form of `GET /api/lists/{list}` (see `get_lists`)\nand returns the same array schema without requiring a `{list}` path parameter.\n',
  operationId: 'list_lists',
  request: {
    query: z.object({
      type: z
        .enum(['allow', 'block'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['allow', 'block'] },
            required: false,
            description: 'Type of list, optional',
            example: 'block',
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
            .object({
              lists: z
                .array(
                  z
                    .object({
                      address: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Address of the list',
                          example: 'https://hosts-file.net/ad_servers.txt',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          type: z
                            .enum(['allow', 'block'])
                            .exactOptional()
                            .openapi({ description: 'Type of list', example: 'block' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this list',
                              example: 'Some comment for this list',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of domain', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          date_updated: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last update of list content',
                              readOnly: true,
                              example: 1608435667,
                            }),
                          number: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of VALID domains on this list',
                              readOnly: true,
                              example: 20566,
                            }),
                          invalid_domains: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of INVALID domains on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          abp_entries: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of ABP entries on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'List status', readOnly: true, example: 2 }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of lists' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            lists: {
              value: {
                lists: [
                  {
                    address: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
                    comment: 'Migrated from /etc/pihole/adlists.list',
                    groups: [0],
                    enabled: true,
                    id: 1,
                    date_added: 1594670974,
                    date_modified: 1595279300,
                  },
                  {
                    address: 'https://mirror1.malwaredomains.com/files/justdomains',
                    comment: 'Migrated from /etc/pihole/adlists.list',
                    groups: [0],
                    enabled: true,
                    id: 2,
                    date_added: 1594670974,
                    date_modified: 1594670974,
                  },
                ],
                took: 0.012,
                processed: null,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postListsRoute = createRoute({
  method: 'post',
  path: '/lists',
  tags: ['List management'],
  summary: 'Add new list',
  description:
    'Creates a new list in the `lists` object. The `{list}` itself is specified in the request body (POST JSON).\n\nlists may be described either by their IP addresses (IPv4 and IPv6 are supported),\nIP subnets (CIDR notation, like `192.168.2.0/24`), their MAC addresses (like `12:34:56:78:9A:BC`), by their hostnames (like `localhost`), or by the interface they are connected to (prefaced with a colon, like `:eth0`).</p>\n\nNote that list recognition by IP addresses (incl. subnet ranges) is preferred over MAC address, host name or interface recognition as the two latter will only be available after some time.\nFurthermore, MAC address recognition only works for devices at most one networking hop away from your Pi-hole.\n\nOn success, a new resource is created at `/lists/{list}`.\n\nThe `database_error` with message `The item is already present` error indicates that this list already exists.\n',
  operationId: 'add_list',
  request: {
    query: z.object({
      type: z
        .enum(['allow', 'block'])
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['allow', 'block'] },
            required: true,
            description: 'Type of list',
            example: 'block',
          },
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              address: z
                .xor([
                  z
                    .string()
                    .openapi({
                      description: 'Address of the list',
                      example: 'https://hosts-file.net/ad_servers.txt',
                    }),
                  z
                    .array(z.string())
                    .openapi({
                      description: 'array of list addresses',
                      example: ['https://hosts-file.net/ad_servers.txt'],
                    }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  comment: z
                    .string()
                    .nullable()
                    .default(null)
                    .exactOptional()
                    .openapi({
                      description: 'User-provided free-text comment for this list',
                      example: 'Some comment for this list',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  groups: z
                    .array(z.int())
                    .default([0])
                    .exactOptional()
                    .openapi({ description: 'Array of group IDs' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Status of domain', example: true }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created item',
      content: {
        'application/json': {
          schema: z
            .object({
              lists: z
                .array(
                  z
                    .object({
                      address: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Address of the list',
                          example: 'https://hosts-file.net/ad_servers.txt',
                        }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          type: z
                            .enum(['allow', 'block'])
                            .exactOptional()
                            .openapi({ description: 'Type of list', example: 'block' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          comment: z
                            .string()
                            .nullable()
                            .default(null)
                            .exactOptional()
                            .openapi({
                              description: 'User-provided free-text comment for this list',
                              example: 'Some comment for this list',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          groups: z
                            .array(z.int())
                            .default([0])
                            .exactOptional()
                            .openapi({ description: 'Array of group IDs' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          enabled: z
                            .boolean()
                            .default(true)
                            .exactOptional()
                            .openapi({ description: 'Status of domain', example: true }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', readOnly: true, example: 1 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of item addition',
                              readOnly: true,
                              example: 1611239095,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last item modification',
                              readOnly: true,
                              example: 1611239099,
                            }),
                          date_updated: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last update of list content',
                              readOnly: true,
                              example: 1608435667,
                            }),
                          number: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of VALID domains on this list',
                              readOnly: true,
                              example: 20566,
                            }),
                          invalid_domains: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of INVALID domains on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          abp_entries: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of ABP entries on this list',
                              readOnly: true,
                              example: 0,
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'List status', readOnly: true, example: 2 }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional()
                .openapi({ description: 'Array of lists' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  processed: z
                    .object({
                      success: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'List that was added to the database' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array of lists that were successfully added to the database.\n',
                        }),
                      errors: z
                        .array(
                          z
                            .object({
                              item: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'List that could not be added to the database',
                                }),
                              error: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Error message' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array of errors that occurred during processing.\n',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Object containing the number of lists that were successfully\nadded to the database and the number of lists that could not be\nadded to the database.\n',
                      example: {
                        success: [
                          {
                            item: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
                          },
                          { item: 'https://mirror1.malwaredomains.com/files/justdomains' },
                        ],
                        errors: [
                          {
                            item: 'https://raw.githubusercontent.com/abc/def/master/hosts',
                            error: 'The item is already present',
                          },
                        ],
                      },
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      headers: z.object({
        Location: {
          description: 'Location of created resource',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Location of created resource', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
              },
            },
            duplicate: {
              summary: 'Database error',
              value: {
                error: {
                  key: 'database_error',
                  message: 'Could not add to gravity database',
                  hint: 'The item is already present',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postListsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/lists:batchDelete',
  tags: ['List management'],
  summary: 'Delete lists',
  description:
    'Deletes multiple lists in the `lists` object. The `{list}`s themselves are specified in the request body (POST JSON).\n',
  operationId: 'batchDelete_lists',
  request: {
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  item: z.string().exactOptional().openapi({ description: 'group name' }),
                  type: z
                    .enum(['allow', 'block'])
                    .exactOptional()
                    .openapi({ description: 'Type of list' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                { item: 'https://hosts-file.net/ad_servers.txt', type: 'block' },
                { item: 'https://hosts-file.net/ad_servers2.txt', type: 'block' },
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Items deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            no_payload: {
              summary: 'No JSON payload found',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request body data (no valid JSON)',
                  hint: null,
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInfoClientRoute = createRoute({
  method: 'get',
  path: '/info/client',
  tags: ['FTL information'],
  summary: 'Get information about requesting client',
  description:
    'The property `timer` may contain additional details concerning a temporary en-/disabling.\nIt is `null` when no timer is active (the current status is permanent).\n',
  operationId: 'get_client',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              remote_addr: z
                .string()
                .exactOptional()
                .openapi({ description: 'Address of requesting client', example: '127.0.0.1' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  http_version: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'HTTP version of request', example: '1.1' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Request method', example: 'GET' }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  headers: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional().openapi({ description: 'Header name' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Header value' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Request headers',
                      example: [
                        { name: 'Accept', value: 'application/json' },
                        { name: 'Connection', value: 'keep-alive' },
                        { name: 'Pragma', value: 'no-cache' },
                      ],
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  security: [],
})

export const getInfoSystemRoute = createRoute({
  method: 'get',
  path: '/info/system',
  tags: ['FTL information'],
  summary: 'Get info about various system parameters',
  description: 'This API hook returns a collection of various system infos.\n',
  operationId: 'get_systeminfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              system: z
                .object({
                  uptime: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'How long the system has been running (seconds)',
                      example: 67906,
                    }),
                  memory: z
                    .object({
                      ram: z
                        .object({
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total RAM', example: 10317877 }),
                          free: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total free RAM', example: 308736 }),
                          used: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Used RAM', example: 8920416 }),
                          available: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total available RAM', example: 972304 }),
                          '%used': z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Used RAM in percent', example: 26.854 }),
                        })
                        .exactOptional()
                        .openapi({ description: 'RAM', required: [] }),
                      swap: z
                        .object({
                          total: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total swap', example: 10317877 }),
                          used: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Used swap', example: 8920416 }),
                          free: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total free swap memory', example: 308736 }),
                          '%used': z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Used swap in percent', example: 1.67 }),
                        })
                        .exactOptional()
                        .openapi({ description: 'swap memory', required: [] }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Memory info given in kilobytes', required: [] }),
                  procs: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of current processes', example: 1452 }),
                  cpu: z
                    .object({
                      nprocs: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of available processors', example: 8 }),
                      '%cpu': z
                        .number()
                        .exactOptional()
                        .openapi({
                          description:
                            'Total CPU usage in percent (may be higher than 100% on multi-core systems and negative if the value cannot be computed)',
                          example: 0,
                        }),
                      load: z
                        .object({
                          raw: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description: 'raw values',
                              example: [0.58837890625, 0.64990234375, 0.66748046875],
                            }),
                          percent: z
                            .array(z.number())
                            .exactOptional()
                            .openapi({
                              description: 'raw values',
                              example: [4.903157711029053, 5.415853023529053, 5.562337398529053],
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '1, 5, and 15 minute load averages',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'CPU info', required: [] }),
                  ftl: z
                    .object({
                      '%mem': z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Percentage of total RAM memory used by FTL',
                          example: 0.1,
                        }),
                      '%cpu': z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Percentage of total CPU used by FTL',
                          example: 1.2,
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'FTL process info', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoDatabaseRoute = createRoute({
  method: 'get',
  path: '/info/database',
  tags: ['FTL information'],
  summary: 'Get info about long-term database',
  description:
    'This API hook returns a collection of various long-term database properties infos.\n',
  operationId: 'get_dbinfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              size: z
                .int()
                .exactOptional()
                .openapi({ description: 'Database size in bytes', example: 3690496 }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Database file type', example: 'Regular file' }),
              mode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Database file mode', example: 'rw-r--r--' }),
              atime: z
                .int()
                .exactOptional()
                .openapi({ description: 'Timestamp of last access', example: 1611742120 }),
              mtime: z
                .int()
                .exactOptional()
                .openapi({ description: 'Timestamp of last modification', example: 1611742120 }),
              ctime: z
                .int()
                .exactOptional()
                .openapi({ description: 'Timestamp of last status change', example: 1611742120 }),
              owner: z
                .object({
                  user: z
                    .object({
                      uid: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'UID of database owner', example: 998 }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of database owner (user)',
                          example: 'pihole',
                        }),
                      info: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'User info', example: '' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  group: z
                    .object({
                      gid: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'GID of database owner', example: 998 }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of database owner (group)',
                          example: 'pihole',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              queries: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of queries in in-memory database',
                  example: 536956,
                }),
              earliest_timestamp: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Unix timestamp of the earliest query in the in-memory database (Defaults to 0.0 if no queries are stored in memory)',
                  example: 1611742120.5,
                }),
              queries_disk: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of queries in on-disk database',
                  example: 1234567,
                }),
              earliest_timestamp_disk: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Unix timestamp of the earliest query in the on-disk database (Defaults to 0.0 if no queries are stored on disk)',
                  example: 1608450520.3,
                }),
              sqlite_version: z
                .string()
                .exactOptional()
                .openapi({ description: 'Version of embedded SQLite3 engine', example: '3.34.0' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoFtlRoute = createRoute({
  method: 'get',
  path: '/info/ftl',
  tags: ['FTL information'],
  summary: 'Get info about various ftl parameters',
  description: 'This API hook returns a collection of various ftl infos.\n',
  operationId: 'get_ftlinfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ftl: z
                .object({
                  database: z
                    .object({
                      gravity: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of collected exact domains on blocking lists',
                          example: 67906,
                        }),
                      antigravity: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of collected exact domains on allowing lists',
                          example: 0,
                        }),
                      groups: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of groups', example: 6 }),
                      lists: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of lists', example: 1 }),
                      clients: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of configured clients', example: 5 }),
                      domains: z
                        .object({
                          allowed: z
                            .object({
                              total: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of allowed domains (total)',
                                  example: 67906,
                                }),
                              enabled: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of allowed domains (enabled)',
                                  example: 4,
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          denied: z
                            .object({
                              total: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of denied domains (total)',
                                  example: 4,
                                }),
                              enabled: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of denied domains (enabled)',
                                  example: 2,
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      regex: z
                        .object({
                          allowed: z
                            .object({
                              total: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of allowed regex filters (total)',
                                  example: 67906,
                                }),
                              enabled: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of allowed regex filters (enabled)',
                                  example: 4,
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          denied: z
                            .object({
                              total: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of denied regex filters (total)',
                                  example: 10,
                                }),
                              enabled: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Number of denied regex filters (enabled)',
                                  example: 2,
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  privacy_level: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Currently used privacy level', example: 0 }),
                  query_frequency: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Average number of queries per second', example: 1.1 }),
                  clients: z
                    .object({
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of clients FTL has seen in its lfetime',
                          example: 10,
                        }),
                      active: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of clients actively using FTL',
                          example: 8,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  pid: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'PID of FTL process', example: 1234 }),
                  uptime: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Uptime of FTL in milliseconds', example: 123456789 }),
                  '%mem': z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Percentage of total RAM memory used by FTL',
                      example: 0.1,
                    }),
                  '%cpu': z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Percentage of total CPU used by FTL (ten seconds average)',
                      example: 1.2,
                    }),
                  allow_destructive: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not FTL is allowed to perform destructive actions',
                      example: true,
                    }),
                  dnsmasq: z
                    .object({
                      dns_cache_inserted: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of inserted entries in DNS cache',
                          example: 8,
                        }),
                      dns_cache_live_freed: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of freed live entries in DNS cache',
                          example: 0,
                        }),
                      dns_queries_forwarded: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of forwarded DNS queries', example: 2 }),
                      dns_auth_answered: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of DNS queries for authoritative zones',
                          example: 0,
                        }),
                      dns_local_answered: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of DNS queries answered from local cache',
                          example: 74,
                        }),
                      dns_stale_answered: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of DNS queries answered from local cache (stale entries)',
                          example: 0,
                        }),
                      dns_unanswered: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of unanswered DNS queries', example: 0 }),
                      bootp: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of BOOTP requests', example: 0 }),
                      pxe: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of PXE requests', example: 0 }),
                      dhcp_ack: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP ACK', example: 0 }),
                      dhcp_decline: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP DECLINE', example: 0 }),
                      dhcp_discover: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP DISCOVER', example: 0 }),
                      dhcp_inform: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP INFORM', example: 0 }),
                      dhcp_nak: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP NAK', example: 0 }),
                      dhcp_offer: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP OFFER', example: 0 }),
                      dhcp_release: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP RELEASE', example: 0 }),
                      dhcp_request: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP REQUEST', example: 0 }),
                      noanswer: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of DHCP requests without answer (rapid commit)',
                          example: 0,
                        }),
                      leases_allocated_4: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of allocated IPv4 leases', example: 0 }),
                      leases_pruned_4: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of pruned IPv4 leases', example: 0 }),
                      leases_allocated_6: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of allocated IPv6 leases', example: 0 }),
                      leases_pruned_6: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of pruned IPv6 leases', example: 0 }),
                      tcp_connections: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of dedicated TCP workers', example: 0 }),
                      dhcp_leasequery: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP lease queries', example: 0 }),
                      dhcp_lease_unassigned: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP lease unassigned', example: 0 }),
                      dhcp_lease_actve: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP lease active', example: 0 }),
                      dhcp_lease_unknown: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP lease unknown', example: 0 }),
                      dnssec_max_crypto_use: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'DNSSEC per-query crypto work HWM', example: 0 }),
                      dnssec_max_sig_fail: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'DNSSEC per-RRSet signature fails HWM',
                          example: 0,
                        }),
                      dnssec_max_work: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'DNSSEC per-query subqueries HWM', example: 0 }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Metrics from the embedded dnsmasq resolver',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoHostRoute = createRoute({
  method: 'get',
  path: '/info/host',
  tags: ['FTL information'],
  summary: 'Get info about various host parameters',
  description: 'This API hook returns a collection of host infos.\n',
  operationId: 'get_hostinfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              host: z
                .object({
                  uname: z
                    .object({
                      domainname: z.string().exactOptional().openapi({ example: '(none)' }),
                      machine: z.string().exactOptional().openapi({ example: 'x86_64' }),
                      nodename: z.string().exactOptional().openapi({ example: 'raspberrypi' }),
                      release: z.string().exactOptional().openapi({ example: '5.15.0-52-generic' }),
                      sysname: z.string().exactOptional().openapi({ example: 'Linux' }),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '#58-Ubuntu SMP Thu Oct 13 08:03:55 UTC 2022' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  model: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Device model (if available, `null` otherwise)',
                      example: 'Raspberry Pi Model 4B',
                    }),
                  dmi: z
                    .object({
                      bios: z
                        .object({
                          vendor: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'BIOS vendor (if available, `null` otherwise)',
                              example: 'American Megatrends Inc.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      board: z
                        .object({
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Board name (if available, `null` otherwise)',
                              example: 'Raspberry Pi 4 Model B Rev 1.4',
                            }),
                          vendor: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Board vendor (if available, `null` otherwise)',
                              example: 'Raspberry Pi Foundation',
                            }),
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Board version (if available, `null` otherwise)',
                              example: '0x14',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      product: z
                        .object({
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Product name (if available, `null` otherwise)',
                              example: 'Raspberry Pi 4 Model B Rev 1.4',
                            }),
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Product version (if available, `null` otherwise)',
                              example: '0x14',
                            }),
                          family: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Product family (if available, `null` otherwise)',
                              example: 'Raspberry Pi 4 Model B Rev 1.4',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      sys: z
                        .object({
                          vendor: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'System vendor (if available, `null` otherwise)',
                              example: 'Raspberry Pi Foundation',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoSensorsRoute = createRoute({
  method: 'get',
  path: '/info/sensors',
  tags: ['FTL information'],
  summary: 'Get info about various sensors',
  description: 'This API hook returns a collection of various sensors.\n',
  operationId: 'get_sensors',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sensors: z
                .object({
                  list: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Description of temperature sensor (if available, `null` otherwise)',
                            }),
                          path: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Short path of temperature sensor' }),
                          source: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Path-like device description' }),
                          temps: z
                            .array(
                              z
                                .object({
                                  name: z
                                    .string()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Description of temperature sensor (if available, `null` otherwise)',
                                    }),
                                  value: z
                                    .number()
                                    .exactOptional()
                                    .openapi({ description: 'Sensor value' }),
                                  max: z
                                    .number()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Maximum sensor value (if available, `null` otherwise)',
                                    }),
                                  crit: z
                                    .number()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Critical sensor value (if available, `null` otherwise)',
                                    }),
                                  sensor: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Short path of temperature sensor' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Sensor information (temperature)',
                      example: [
                        {
                          name: 'amdgpu',
                          path: 'hwmon1',
                          source: 'devices/pci0000:00/0000:00:08.1/0000:05:00.0',
                          temps: [
                            { name: 'edge', value: 40, max: null, crit: null, sensor: 'temp1' },
                          ],
                        },
                        {
                          name: 'nct6793',
                          path: 'hwmon2',
                          source: 'devices/platform/nct6775.656',
                          temps: [
                            {
                              name: 'SMBUSMASTER 0',
                              value: 59.5,
                              max: null,
                              crit: null,
                              sensor: 'temp1',
                            },
                            { name: 'CPUTIN', value: 40, max: null, crit: null, sensor: 'temp2' },
                          ],
                        },
                        {
                          name: 'k10temp',
                          path: 'hwmon3',
                          source: 'devices/pci0000:00/0000:00:18.3',
                          temps: [
                            { name: 'Tdie', value: 58.875, max: 70, crit: null, sensor: 'temp1' },
                            { name: 'Tctl', value: 58.875, max: null, crit: null, sensor: 'temp2' },
                          ],
                        },
                        {
                          name: 'coretemp',
                          path: 'hwmon4',
                          source: 'devices/platform/coretemp.0',
                          temps: [
                            {
                              name: 'Package id 0',
                              value: 48,
                              max: 100,
                              crit: 100,
                              sensor: 'temp1',
                            },
                            { name: 'Core 0', value: 48, max: 100, crit: 100, sensor: 'temp2' },
                            { name: 'Core 1', value: 47, max: 100, crit: 100, sensor: 'temp3' },
                          ],
                        },
                      ],
                    }),
                  cpu_temp: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'CPU temperature (best guess, may be *null* if no sensor can be reliably identified, please report if you encounter this)',
                      example: 48,
                    }),
                  hot_limit: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        "Limit defined in FTL's config beyond which the CPU should be considered hot",
                      example: 60,
                    }),
                  unit: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Sensor value unit', example: 'C' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoVersionRoute = createRoute({
  method: 'get',
  path: '/info/version',
  tags: ['FTL information'],
  summary: 'Get Pi-hole version',
  description: 'Request versions of the individual Pi-hole components\n',
  operationId: 'get_version',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({
                  core: z
                    .object({
                      local: z
                        .object({
                          branch: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Local Pi-hole Core branch',
                              example: 'development',
                            }),
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Local Pi-hole Core version',
                              example: 'v6.1',
                            }),
                          hash: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Local Pi-hole Core hash',
                              example: '955e36a9',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      remote: z
                        .object({
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Remote (Github) Pi-hole Core version (null if on custom branch)',
                              example: 'v6.1',
                            }),
                          hash: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Remote (Github) Pi-hole Core hash',
                              example: '955e36a9',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  web: z
                    .object({
                      local: z
                        .object({
                          branch: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Local Pi-hole Web branch', example: 'devel' }),
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Local Pi-hole Web version', example: 'v6.1' }),
                          hash: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Local Pi-hole Web hash',
                              example: 'f69f7e88',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      remote: z
                        .object({
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Remote (Github) Pi-hole Web version (null if on custom branch)',
                              example: 'v6.1',
                            }),
                          hash: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Remote (Github) Pi-hole Web hash',
                              example: 'f69f7e88',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ftl: z
                    .object({
                      local: z
                        .object({
                          branch: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Local Pi-hole FTL branch',
                              example: 'development',
                            }),
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Local Pi-hole FTL version', example: 'v6.1' }),
                          hash: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Local Pi-hole FTL hash',
                              example: '64441ed6-dirty',
                            }),
                          date: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Build time of your local Pi-hole FTL',
                              example: '2023-01-09 20:25:24 +0100',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      remote: z
                        .object({
                          version: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Remote (Github) Pi-hole FTL version (null if on custom branch)',
                              example: 'v6.1',
                            }),
                          hash: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Remote (Github) Pi-hole FTL hash',
                              example: '64441ed6',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  docker: z
                    .object({
                      local: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Local Pi-hole Docker image version (`null` if not running in Docker)',
                          example: 'v6.1',
                        }),
                      remote: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Remote (Docker Hub) Pi-hole Docker image version (`null` if not running in Docker)',
                          example: 'v6.1',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoMessagesRoute = createRoute({
  method: 'get',
  path: '/info/messages',
  tags: ['FTL information'],
  summary: 'Get Pi-hole diagnosis messages',
  description: 'Request Pi-hole diagnosis messages\n',
  operationId: 'get_messages',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'ID of message', example: 3 }),
                      timestamp: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Unix timestamp of message',
                          example: 123456789.123,
                        }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Message type', example: 'SUBNET' }),
                      plain: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Plain message',
                          example: 'Rate-limiting 192.168.2.42 for at least 5 seconds',
                        }),
                      html: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'HTML-formatted message',
                          example:
                            'Client <code>192.168.2.42</code> has been rate-limited for at least 5 seconds (current limit: 1000 queries per 60 seconds)',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteInfoMessagesMessageIdRoute = createRoute({
  method: 'delete',
  path: '/info/messages/{message_id}',
  tags: ['FTL information'],
  summary: 'Delete Pi-hole diagnosis message',
  description:
    'You may specify multiple IDs to delete multiple messages at once (comma-separated in the path like `1,2,3`)\n',
  operationId: 'delete_message',
  request: {
    params: z.object({
      message_id: z
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
            in: 'path',
            description: 'ID of the message to be deleted',
            name: 'message_id',
            schema: { type: 'integer' },
            required: true,
            example: 512,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            uri_error: {
              summary: 'ID of message to delete is missing',
              value: {
                error: {
                  key: 'uri_error',
                  message: 'Specify ID of message to delete in path',
                  hint: '/api/info/messages',
                },
                tooK: 0.003,
              },
            },
            bad_request: {
              summary: 'ID of message to delete is invalid',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid ID in path',
                  hint: '/api/info/messages/486741168746857468758478',
                },
                tooK: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInfoMessagesCountRoute = createRoute({
  method: 'get',
  path: '/info/messages/count',
  tags: ['FTL information'],
  summary: 'Get count of Pi-hole diagnosis messages',
  description: 'Request number of Pi-hole diagnosis messages\n',
  operationId: 'get_messages_count',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of items', example: 42 }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoMetricsRoute = createRoute({
  method: 'get',
  path: '/info/metrics',
  tags: ['FTL information'],
  summary: 'Get metrics info',
  description: 'This API hook returns live information about the DNS and DHCP metrics.\n',
  operationId: 'get_metricsinfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              metrics: z
                .object({
                  dns: z
                    .object({
                      cache: z
                        .object({
                          size: z.int().exactOptional().openapi({ description: 'Cache size' }),
                          inserted: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of inserted entries' }),
                          evicted: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of evicted entries' }),
                          expired: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of expired entries' }),
                          immortal: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of immortal entries' }),
                          content: z
                            .array(
                              z
                                .object({
                                  type: z
                                    .int()
                                    .exactOptional()
                                    .openapi({ description: 'RR type of cache entry' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'RR name of cache entry' }),
                                  count: z
                                    .object({
                                      valid: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Number of valid cache entries' }),
                                      stale: z
                                        .int()
                                        .exactOptional()
                                        .openapi({ description: 'Number of stale cache entries' }),
                                    })
                                    .exactOptional()
                                    .openapi({
                                      description: 'Number of cache entries for this RR type',
                                      required: [],
                                    }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Array of valid DNS cache entries' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Cache information', required: [] }),
                      replies: z
                        .object({
                          forwarded: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of forwarded queries' }),
                          unanswered: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of unanswered queries' }),
                          local: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of queries answered from local cache',
                            }),
                          optimized: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of queries answered from local cache (stale entries)',
                            }),
                          auth: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of queries for authoritative zones' }),
                          sum: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Total number of queries' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ description: 'DNS metrics', required: [] }),
                  dhcp: z
                    .object({
                      ack: z.int().exactOptional().openapi({ description: 'Number of DHCP ACKs' }),
                      nak: z.int().exactOptional().openapi({ description: 'Number of DHCP NAKs' }),
                      decline: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP declines' }),
                      offer: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP offers' }),
                      discover: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP discovers' }),
                      inform: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP informs' }),
                      request: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP requests' }),
                      release: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP releases' }),
                      noanswer: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of DHCP requests without answer' }),
                      bootp: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of BOOTP requests' }),
                      pxe: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of PXE requests' }),
                      leases: z
                        .object({
                          allocated_4: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of allocated IPv4 leases' }),
                          pruned_4: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of pruned IPv4 leases' }),
                          allocated_6: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of allocated IPv6 leases' }),
                          pruned_6: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of pruned IPv6 leases' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'DHCP leases', required: [] }),
                    })
                    .exactOptional()
                    .openapi({ description: 'DHCP metrics', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            metrics: {
              summary: 'Server metrics',
              value: {
                metrics: {
                  dns: {
                    cache: {
                      size: 10000,
                      inserted: 4060,
                      evicted: 0,
                      expired: 0,
                      immortal: 0,
                      content: [
                        { type: 0, name: 'OTHER', count: { valid: 0, stale: 0 } },
                        { type: 1, name: 'A', count: { valid: 14, stale: 3 } },
                        { type: 28, name: 'AAAA', count: { valid: 12, stale: 1 } },
                        { type: 5, name: 'CNAME', count: { valid: 5, stale: 3 } },
                        { type: 43, name: 'DS', count: { valid: 34, stale: 21 } },
                        { type: 48, name: 'DNSKEY', count: { valid: 1, stale: 0 } },
                      ],
                    },
                    replies: {
                      optimized: 1,
                      local: 84,
                      auth: 0,
                      forwarded: 46,
                      unanswered: 0,
                      sum: 131,
                    },
                  },
                  dhcp: {
                    ack: 0,
                    nak: 0,
                    decline: 0,
                    offer: 0,
                    discover: 0,
                    inform: 0,
                    request: 0,
                    release: 0,
                    noanswer: 0,
                    bootp: 0,
                    pxe: 0,
                    leases: { allocated_4: 0, pruned_4: 0, allocated_6: 0, pruned_6: 0 },
                  },
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getInfoLoginRoute = createRoute({
  method: 'get',
  path: '/info/login',
  tags: ['FTL information'],
  summary: 'Login page related information',
  description:
    'This API hook returns information used on the login page to possibly display messages/warnings.\n',
  operationId: 'get_logininfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              https_port: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTPS port of the Pi-hole webserver (0 if disabled)' }),
              dns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the DNS server is up and running. False only in failed state',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  security: [],
})

export const getLogsDnsmasqRoute = createRoute({
  method: 'get',
  path: '/logs/dnsmasq',
  tags: ['FTL information'],
  summary: 'Get DNS log content',
  description:
    'This API hook returns content from the log of the embedded DNS resolver `dnsmasq`.\n\nEvery successful request will return a `nextID`.\nThis ID can be used on the next request to only get lines which were added *after* the last request.\nThis makes periodic polling for new log lines easy as no check for duplicated log lines is necessary.\nThe expected behavior for an immediate re-request of a log line with the same ID is an empty response.\nAs soon as the next message arrived, this will be included in your request and `nextID` is incremented by one.\n',
  operationId: 'get_dns_log',
  request: {
    query: z.object({
      nextID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) ID of next line to return',
            name: 'nextID',
            schema: { type: 'integer' },
            required: false,
            example: 219,
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
            .object({
              log: z
                .array(
                  z
                    .object({
                      timestamp: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Unix timestamp of log line creation (server time)',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Log line content' }),
                      prio: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Log line priority (if available)' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Request headers',
                  example: [
                    {
                      timestamp: 1611729969,
                      message: 'started, version pi-hole-2.84 cachesize 10000',
                    },
                    { timestamp: 1611729969, message: 'reading /etc/resolv.conf' },
                    { timestamp: 1611729969, message: 'read /etc/hosts - 7 addresses' },
                    {
                      timestamp: 1611729969,
                      message: 'query[A] connectivity-check.ubuntu.com from 127.0.0.1',
                    },
                  ],
                }),
              nextID: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Next ID to query if checking for new log lines',
                  example: 229,
                }),
              pid: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Process ID of FTL. When this changes, FTL was restarted and nextID should be reset to 0.',
                  example: 2258,
                }),
              file: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to respective log file on disk',
                  example: '/var/log/pihole/pihole.log',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getLogsFtlRoute = createRoute({
  method: 'get',
  path: '/logs/ftl',
  tags: ['FTL information'],
  summary: 'Get DNS log content',
  description:
    'This API hook returns content from the log of FTL.\n\nEvery successful request will return a `nextID`.\nThis ID can be used on the next request to only get lines which were added *after* the last request.\nThis makes periodic polling for new log lines easy as no check for duplicated log lines is necessary.\nThe expected behavior for an immediate re-request of a log line with the same ID is an empty response.\nAs soon as the next message arrived, this will be included in your request and `nextID` is incremented by one.\n',
  operationId: 'get_ftl_log',
  request: {
    query: z.object({
      nextID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) ID of next line to return',
            name: 'nextID',
            schema: { type: 'integer' },
            required: false,
            example: 219,
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
            .object({
              log: z
                .array(
                  z
                    .object({
                      timestamp: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Unix timestamp of log line creation (server time)',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Log line content' }),
                      prio: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Log line priority (if available)' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Request headers',
                  example: [
                    {
                      timestamp: 1611729969,
                      message: 'started, version pi-hole-2.84 cachesize 10000',
                    },
                    { timestamp: 1611729969, message: 'reading /etc/resolv.conf' },
                    { timestamp: 1611729969, message: 'read /etc/hosts - 7 addresses' },
                    {
                      timestamp: 1611729969,
                      message: 'query[A] connectivity-check.ubuntu.com from 127.0.0.1',
                    },
                  ],
                }),
              nextID: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Next ID to query if checking for new log lines',
                  example: 229,
                }),
              pid: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Process ID of FTL. When this changes, FTL was restarted and nextID should be reset to 0.',
                  example: 2258,
                }),
              file: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to respective log file on disk',
                  example: '/var/log/pihole/pihole.log',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getLogsWebserverRoute = createRoute({
  method: 'get',
  path: '/logs/webserver',
  tags: ['FTL information'],
  summary: 'Get DNS log content',
  description:
    'This API hook returns content from the log of the embedded CivetWeb HTTP server.\n\nEvery successful request will return a `nextID`.\nThis ID can be used on the next request to only get lines which were added *after* the last request.\nThis makes periodic polling for new log lines easy as no check for duplicated log lines is necessary.\nThe expected behavior for an immediate re-request of a log line with the same ID is an empty response.\nAs soon as the next message arrived, this will be included in your request and `nextID` is incremented by one.\n',
  operationId: 'get_webserver_log',
  request: {
    query: z.object({
      nextID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) ID of next line to return',
            name: 'nextID',
            schema: { type: 'integer' },
            required: false,
            example: 219,
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
            .object({
              log: z
                .array(
                  z
                    .object({
                      timestamp: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Unix timestamp of log line creation (server time)',
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Log line content' }),
                      prio: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Log line priority (if available)' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Request headers',
                  example: [
                    {
                      timestamp: 1611729969,
                      message: 'started, version pi-hole-2.84 cachesize 10000',
                    },
                    { timestamp: 1611729969, message: 'reading /etc/resolv.conf' },
                    { timestamp: 1611729969, message: 'read /etc/hosts - 7 addresses' },
                    {
                      timestamp: 1611729969,
                      message: 'query[A] connectivity-check.ubuntu.com from 127.0.0.1',
                    },
                  ],
                }),
              nextID: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Next ID to query if checking for new log lines',
                  example: 229,
                }),
              pid: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Process ID of FTL. When this changes, FTL was restarted and nextID should be reset to 0.',
                  example: 2258,
                }),
              file: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to respective log file on disk',
                  example: '/var/log/pihole/pihole.log',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getEndpointsRoute = createRoute({
  method: 'get',
  path: '/endpoints',
  tags: ['FTL information'],
  summary: 'Get list of available API endpoints',
  description: 'This API hook returns the list of all available API endpoints.\n',
  operationId: 'get_endpoints',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              endpoints: z
                .object({
                  get: z
                    .array(
                      z
                        .object({
                          uri: z.string().exactOptional().openapi({ description: 'URI' }),
                          parameters: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Parameters' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { uri: '/api/dns/blocking', parameters: '' },
                        { uri: '/api/dns/cache', parameters: '' },
                        { uri: '/api/dns/port', parameters: '' },
                        { uri: '/api/domains', parameters: '' },
                        { uri: '/api/groups', parameters: '' },
                        { uri: '/api/lists', parameters: '' },
                      ],
                    }),
                  post: z
                    .array(
                      z
                        .object({
                          uri: z.string().exactOptional().openapi({ description: 'URI' }),
                          parameters: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Parameters' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { uri: '/api/dns/blocking', parameters: '' },
                        { uri: '/api/dns/cache', parameters: '' },
                        { uri: '/api/dns/port', parameters: '' },
                        { uri: '/api/domains', parameters: '' },
                        { uri: '/api/groups', parameters: '' },
                        { uri: '/api/lists', parameters: '' },
                      ],
                    }),
                  put: z
                    .array(
                      z
                        .object({
                          uri: z.string().exactOptional().openapi({ description: 'URI' }),
                          parameters: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Parameters' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { uri: '/api/dns/blocking', parameters: '' },
                        { uri: '/api/dns/cache', parameters: '' },
                        { uri: '/api/dns/port', parameters: '' },
                        { uri: '/api/domains', parameters: '' },
                        { uri: '/api/groups', parameters: '' },
                        { uri: '/api/lists', parameters: '' },
                      ],
                    }),
                  patch: z
                    .array(
                      z
                        .object({
                          uri: z.string().exactOptional().openapi({ description: 'URI' }),
                          parameters: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Parameters' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { uri: '/api/dns/blocking', parameters: '' },
                        { uri: '/api/dns/cache', parameters: '' },
                        { uri: '/api/dns/port', parameters: '' },
                        { uri: '/api/domains', parameters: '' },
                        { uri: '/api/groups', parameters: '' },
                        { uri: '/api/lists', parameters: '' },
                      ],
                    }),
                  delete: z
                    .array(
                      z
                        .object({
                          uri: z.string().exactOptional().openapi({ description: 'URI' }),
                          parameters: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Parameters' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { uri: '/api/dns/blocking', parameters: '' },
                        { uri: '/api/dns/cache', parameters: '' },
                        { uri: '/api/dns/port', parameters: '' },
                        { uri: '/api/domains', parameters: '' },
                        { uri: '/api/groups', parameters: '' },
                        { uri: '/api/lists', parameters: '' },
                      ],
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Endpoints', required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Pi-hole configuration'],
  summary: 'Get current configuration of your Pi-hole',
  description: 'This API hook returns infos about the config of your Pi-hole.\n',
  operationId: 'get_config',
  request: {
    query: z.object({
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'detailed',
            in: 'query',
            description: 'Return detailed information about the configuration',
            required: false,
            schema: { type: 'boolean', default: false, example: false },
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              config: z
                .object({
                  dns: z
                    .object({
                      upstreams: z.array(z.string()).exactOptional(),
                      CNAMEdeepInspect: z.boolean().exactOptional(),
                      blockESNI: z.boolean().exactOptional(),
                      EDNS0ECS: z.boolean().exactOptional(),
                      ignoreLocalhost: z.boolean().exactOptional(),
                      showDNSSEC: z.boolean().exactOptional(),
                      analyzeOnlyAandAAAA: z.boolean().exactOptional(),
                      piholePTR: z.string().exactOptional(),
                      replyWhenBusy: z.string().exactOptional(),
                      blockTTL: z.int().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                      domainNeeded: z.boolean().exactOptional(),
                      expandHosts: z.boolean().exactOptional(),
                      domain: z
                        .object({
                          name: z.string().exactOptional(),
                          local: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      bogusPriv: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      interface: z.string().exactOptional(),
                      hostRecord: z.string().exactOptional(),
                      listeningMode: z.string().exactOptional(),
                      queryLogging: z.boolean().exactOptional(),
                      cnameRecords: z.array(z.string()).exactOptional(),
                      port: z.int().exactOptional(),
                      localise: z.boolean().exactOptional(),
                      cache: z
                        .object({
                          size: z.int().exactOptional(),
                          optimizer: z.int().exactOptional(),
                          upstreamBlockedTTL: z.int().exactOptional(),
                          rrtype: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      revServers: z.array(z.string()).exactOptional(),
                      blocking: z
                        .object({
                          active: z.boolean().exactOptional(),
                          mode: z.string().exactOptional(),
                          edns: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      specialDomains: z
                        .object({
                          mozillaCanary: z.boolean().exactOptional(),
                          iCloudPrivateRelay: z.boolean().exactOptional(),
                          designatedResolver: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reply: z
                        .object({
                          host: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocking: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rateLimit: z
                        .object({
                          count: z.int().exactOptional(),
                          interval: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  dhcp: z
                    .object({
                      active: z.boolean().exactOptional(),
                      start: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      end: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      router: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      netmask: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      leaseTime: z.string().exactOptional(),
                      ipv6: z.boolean().exactOptional(),
                      rapidCommit: z.boolean().exactOptional(),
                      multiDNS: z.boolean().exactOptional(),
                      logging: z.boolean().exactOptional(),
                      ignoreUnknownClients: z.boolean().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ntp: z
                    .object({
                      ipv4: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ipv6: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      sync: z
                        .object({
                          active: z.boolean().exactOptional(),
                          server: z.string().exactOptional(),
                          interval: z.int().exactOptional(),
                          count: z.int().exactOptional(),
                          rtc: z
                            .object({
                              set: z.boolean().exactOptional(),
                              device: z.string().exactOptional(),
                              utc: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  resolver: z
                    .object({
                      resolveIPv4: z.boolean().exactOptional(),
                      resolveIPv6: z.boolean().exactOptional(),
                      macNames: z.boolean().exactOptional(),
                      networkNames: z.boolean().exactOptional(),
                      refreshNames: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  database: z
                    .object({
                      DBimport: z.boolean().exactOptional(),
                      maxDBdays: z.int().exactOptional(),
                      DBinterval: z.int().exactOptional(),
                      useWAL: z.boolean().exactOptional(),
                      forceDisk: z.boolean().exactOptional(),
                      network: z
                        .object({
                          parseARPcache: z.boolean().exactOptional(),
                          expire: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  webserver: z
                    .object({
                      domain: z.string().exactOptional(),
                      acl: z.string().exactOptional(),
                      port: z.string().exactOptional(),
                      threads: z.int().exactOptional(),
                      headers: z.array(z.string()).exactOptional(),
                      serve_all: z.boolean().exactOptional(),
                      advancedOpts: z.array(z.string()).exactOptional(),
                      session: z
                        .object({
                          timeout: z.int().exactOptional(),
                          restore: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tls: z
                        .object({
                          cert: z.string().exactOptional(),
                          validity: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      paths: z
                        .object({
                          webroot: z.string().exactOptional(),
                          webhome: z.string().exactOptional(),
                          prefix: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      interface: z
                        .object({
                          boxed: z.boolean().exactOptional(),
                          theme: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      api: z
                        .object({
                          max_sessions: z.int().exactOptional(),
                          prettyJSON: z.boolean().exactOptional(),
                          password: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                '*Note:* Special write-only property used to change the password via the API.\n',
                            }),
                          pwhash: z.string().exactOptional(),
                          totp_secret: z.string().exactOptional(),
                          app_pwhash: z.string().exactOptional(),
                          app_sudo: z.boolean().exactOptional(),
                          cli_pw: z.boolean().exactOptional(),
                          excludeClients: z.array(z.string()).exactOptional(),
                          excludeDomains: z.array(z.string()).exactOptional(),
                          maxHistory: z.int().exactOptional(),
                          maxClients: z.int().exactOptional(),
                          client_history_global_max: z.boolean().exactOptional(),
                          allow_destructive: z.boolean().exactOptional(),
                          temp: z
                            .object({
                              limit: z.number().exactOptional(),
                              unit: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  files: z
                    .object({
                      pid: z.string().exactOptional(),
                      database: z.string().exactOptional(),
                      tmp_db: z.string().exactOptional(),
                      gravity: z.string().exactOptional(),
                      gravity_tmp: z.string().exactOptional(),
                      macvendor: z.string().exactOptional(),
                      pcap: z.string().exactOptional(),
                      log: z
                        .object({
                          ftl: z.string().exactOptional(),
                          dnsmasq: z.string().exactOptional(),
                          webserver: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  misc: z
                    .object({
                      nice: z.int().exactOptional(),
                      delay_startup: z.int().exactOptional(),
                      addr2line: z.boolean().exactOptional(),
                      etc_dnsmasq_d: z.boolean().exactOptional(),
                      privacylevel: z.int().exactOptional(),
                      dnsmasq_lines: z.array(z.string()).exactOptional(),
                      extraLogging: z.boolean().exactOptional(),
                      readOnly: z.boolean().exactOptional(),
                      normalizeCPU: z.boolean().exactOptional(),
                      hide_dnsmasq_warn: z.boolean().exactOptional(),
                      hide_connection_error: z.boolean().exactOptional(),
                      check: z
                        .object({
                          load: z.boolean().exactOptional(),
                          shmem: z.int().exactOptional(),
                          disk: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  debug: z
                    .object({
                      database: z.boolean().exactOptional(),
                      networking: z.boolean().exactOptional(),
                      locks: z.boolean().exactOptional(),
                      queries: z.boolean().exactOptional(),
                      flags: z.boolean().exactOptional(),
                      shmem: z.boolean().exactOptional(),
                      gc: z.boolean().exactOptional(),
                      arp: z.boolean().exactOptional(),
                      regex: z.boolean().exactOptional(),
                      api: z.boolean().exactOptional(),
                      tls: z.boolean().exactOptional(),
                      overtime: z.boolean().exactOptional(),
                      status: z.boolean().exactOptional(),
                      caps: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      vectors: z.boolean().exactOptional(),
                      resolver: z.boolean().exactOptional(),
                      edns0: z.boolean().exactOptional(),
                      clients: z.boolean().exactOptional(),
                      aliasclients: z.boolean().exactOptional(),
                      events: z.boolean().exactOptional(),
                      helper: z.boolean().exactOptional(),
                      config: z.boolean().exactOptional(),
                      inotify: z.boolean().exactOptional(),
                      webserver: z.boolean().exactOptional(),
                      extra: z.boolean().exactOptional(),
                      reserved: z.boolean().exactOptional(),
                      ntp: z.boolean().exactOptional(),
                      netlink: z.boolean().exactOptional(),
                      timing: z.boolean().exactOptional(),
                      performance: z.boolean().exactOptional(),
                      all: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            config: {
              summary: 'The entire configuration',
              value: {
                config: {
                  dns: {
                    upstreams: ['127.0.0.1#5353', '8.8.8.8'],
                    CNAMEdeepInspect: true,
                    blockESNI: true,
                    EDNS0ECS: true,
                    ignoreLocalhost: false,
                    showDNSSEC: true,
                    analyzeOnlyAandAAAA: false,
                    piholePTR: 'PI.HOLE',
                    replyWhenBusy: 'ALLOW',
                    blockTTL: 2,
                    hosts: ['192.168.2.123 mymusicbox'],
                    domainNeeded: true,
                    expandHosts: true,
                    domain: { name: 'lan', local: true },
                    bogusPriv: true,
                    dnssec: true,
                    interface: 'eth0',
                    hostRecord: '',
                    listeningMode: 'local',
                    queryLogging: true,
                    cnameRecords: [
                      '*.example.com,default.example.com',
                      'hourly.yetanother.com,yetanother.com,3600',
                    ],
                    port: 53,
                    localise: true,
                    cache: {
                      size: 10000,
                      optimizer: 3600,
                      upstreamBlockedTTL: 86400,
                      rrtype: 'ANY',
                    },
                    revServers: ['true,192.168.0.0/24,192.168.0.1,lan'],
                    blocking: { active: true, mode: 'NULL', edns: 'NONE' },
                    specialDomains: {
                      mozillaCanary: true,
                      iCloudPrivateRelay: true,
                      designatedResolver: true,
                    },
                    reply: {
                      host: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                      blocking: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                    },
                    rateLimit: { count: 0, interval: 0 },
                  },
                  dhcp: {
                    active: false,
                    start: '192.168.0.10',
                    end: '192.168.0.250',
                    router: '192.168.0.1',
                    netmask: '0.0.0.0',
                    leaseTime: '24h',
                    ipv6: false,
                    rapidCommit: false,
                    multiDNS: false,
                    logging: false,
                    ignoreUnknownClients: false,
                    hosts: [
                      '11:22:33:44:55:66,192.168.1.123',
                      '11:22:33:44:55:67,192.168.1.124,hostname',
                    ],
                  },
                  ntp: {
                    ipv4: { active: true, address: '' },
                    ipv6: { active: true, address: '' },
                    sync: {
                      active: true,
                      server: 'pool.ntp.org',
                      interval: 3600,
                      count: 8,
                      rtc: { set: true, device: '', utc: true },
                    },
                  },
                  resolver: {
                    resolveIPv4: true,
                    resolveIPv6: true,
                    macNames: true,
                    networkNames: true,
                    refreshNames: 'IPV4_ONLY',
                  },
                  database: {
                    DBimport: true,
                    maxDBdays: 365,
                    DBinterval: 60,
                    useWAL: true,
                    forceDisk: false,
                    network: { parseARPcache: true, expire: 365 },
                  },
                  webserver: {
                    domain: 'pi.hole',
                    acl: '+0.0.0.0/0,::/0',
                    port: '80,[::]:80',
                    threads: 0,
                    headers: [
                      'X-DNS-Prefetch-Control: off',
                      "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
                      'X-Frame-Options: DENY',
                      'X-XSS-Protection: 0',
                      'X-Content-Type-Options: nosniff',
                      'Referrer-Policy: strict-origin-when-cross-origin',
                    ],
                    serve_all: false,
                    advancedOpts: ['ssl_protocol_version=4'],
                    session: { timeout: 300, restore: true },
                    tls: { cert: '/etc/pihole/tls.pem', validity: 47 },
                    paths: { webroot: '/var/www/html', webhome: '/admin/', prefix: '' },
                    interface: { boxed: true, theme: 'default-darker' },
                    api: {
                      max_sessions: 16,
                      prettyJSON: false,
                      password: '********',
                      pwhash: '',
                      totp_secret: '',
                      app_pwhash: '',
                      app_sudo: false,
                      cli_pw: true,
                      excludeClients: ['1\\.2\\.3\\.4', 'localhost', 'fe80::345'],
                      excludeDomains: ['google\\\\.de', 'pi-hole\\.net'],
                      maxHistory: 86400,
                      maxClients: 10,
                      client_history_global_max: true,
                      allow_destructive: true,
                      temp: { limit: 60, unit: 'C' },
                    },
                  },
                  files: {
                    pid: '/run/pihole-FTL.pid',
                    database: '/etc/pihole/pihole-FTL.db',
                    tmp_db: '/etc/pihole/pihole-tmp.db',
                    gravity: '/etc/pihole/gravity.db',
                    gravity_tmp: '/tmp',
                    macvendor: '/etc/pihole/macvendor.db',
                    pcap: '',
                    log: {
                      ftl: '/var/log/pihole/FTL.log',
                      dnsmasq: '/var/log/pihole/pihole.log',
                      webserver: '/var/log/pihole/webserver.log',
                    },
                  },
                  misc: {
                    nice: -10,
                    delay_startup: 10,
                    addr2line: true,
                    privacylevel: 0,
                    etc_dnsmasq_d: false,
                    dnsmasq_lines: [],
                    extraLogging: false,
                    readOnly: false,
                    normalizeCPU: false,
                    hide_dnsmasq_warn: false,
                    hide_connection_error: false,
                    check: { load: true, shmem: 90, disk: 90 },
                  },
                  debug: {
                    database: false,
                    networking: false,
                    locks: false,
                    queries: false,
                    flags: false,
                    shmem: false,
                    gc: false,
                    arp: false,
                    regex: false,
                    api: false,
                    tls: false,
                    overtime: false,
                    status: false,
                    caps: false,
                    dnssec: false,
                    vectors: false,
                    resolver: false,
                    edns0: false,
                    clients: false,
                    aliasclients: false,
                    events: false,
                    helper: false,
                    config: false,
                    inotify: false,
                    webserver: false,
                    extra: false,
                    reserved: false,
                    ntp: false,
                    netlink: false,
                    timing: false,
                    performance: false,
                    all: false,
                  },
                  took: 0.003,
                },
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const patchConfigRoute = createRoute({
  method: 'patch',
  path: '/config',
  tags: ['Pi-hole configuration'],
  summary: 'Change configuration of your Pi-hole',
  description:
    'This API hook allows to modify the config of your Pi-hole. This endpoint supports changing multiple properties at once when you specify several in the payload. See examples below.\n',
  operationId: 'patch_config',
  request: {
    query: z.object({
      restart: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'restart',
            in: 'query',
            description:
              'Restart FTL after a change would require this. This option can be used if you want to avoid a restart, e.g., when adding multiple items independently instead of all together at once. Note that you will have to restart FTL manually later to apply the changes.',
            required: false,
            schema: { type: 'boolean', default: true, example: true },
          },
          example: true,
        }),
    }),
    body: {
      description: 'Callback payload',
      content: {
        'application/json': {
          schema: z
            .object({
              config: z
                .object({
                  dns: z
                    .object({
                      upstreams: z.array(z.string()).exactOptional(),
                      CNAMEdeepInspect: z.boolean().exactOptional(),
                      blockESNI: z.boolean().exactOptional(),
                      EDNS0ECS: z.boolean().exactOptional(),
                      ignoreLocalhost: z.boolean().exactOptional(),
                      showDNSSEC: z.boolean().exactOptional(),
                      analyzeOnlyAandAAAA: z.boolean().exactOptional(),
                      piholePTR: z.string().exactOptional(),
                      replyWhenBusy: z.string().exactOptional(),
                      blockTTL: z.int().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                      domainNeeded: z.boolean().exactOptional(),
                      expandHosts: z.boolean().exactOptional(),
                      domain: z
                        .object({
                          name: z.string().exactOptional(),
                          local: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      bogusPriv: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      interface: z.string().exactOptional(),
                      hostRecord: z.string().exactOptional(),
                      listeningMode: z.string().exactOptional(),
                      queryLogging: z.boolean().exactOptional(),
                      cnameRecords: z.array(z.string()).exactOptional(),
                      port: z.int().exactOptional(),
                      localise: z.boolean().exactOptional(),
                      cache: z
                        .object({
                          size: z.int().exactOptional(),
                          optimizer: z.int().exactOptional(),
                          upstreamBlockedTTL: z.int().exactOptional(),
                          rrtype: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      revServers: z.array(z.string()).exactOptional(),
                      blocking: z
                        .object({
                          active: z.boolean().exactOptional(),
                          mode: z.string().exactOptional(),
                          edns: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      specialDomains: z
                        .object({
                          mozillaCanary: z.boolean().exactOptional(),
                          iCloudPrivateRelay: z.boolean().exactOptional(),
                          designatedResolver: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reply: z
                        .object({
                          host: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocking: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rateLimit: z
                        .object({
                          count: z.int().exactOptional(),
                          interval: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  dhcp: z
                    .object({
                      active: z.boolean().exactOptional(),
                      start: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      end: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      router: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      netmask: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      leaseTime: z.string().exactOptional(),
                      ipv6: z.boolean().exactOptional(),
                      rapidCommit: z.boolean().exactOptional(),
                      multiDNS: z.boolean().exactOptional(),
                      logging: z.boolean().exactOptional(),
                      ignoreUnknownClients: z.boolean().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ntp: z
                    .object({
                      ipv4: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ipv6: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      sync: z
                        .object({
                          active: z.boolean().exactOptional(),
                          server: z.string().exactOptional(),
                          interval: z.int().exactOptional(),
                          count: z.int().exactOptional(),
                          rtc: z
                            .object({
                              set: z.boolean().exactOptional(),
                              device: z.string().exactOptional(),
                              utc: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  resolver: z
                    .object({
                      resolveIPv4: z.boolean().exactOptional(),
                      resolveIPv6: z.boolean().exactOptional(),
                      macNames: z.boolean().exactOptional(),
                      networkNames: z.boolean().exactOptional(),
                      refreshNames: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  database: z
                    .object({
                      DBimport: z.boolean().exactOptional(),
                      maxDBdays: z.int().exactOptional(),
                      DBinterval: z.int().exactOptional(),
                      useWAL: z.boolean().exactOptional(),
                      forceDisk: z.boolean().exactOptional(),
                      network: z
                        .object({
                          parseARPcache: z.boolean().exactOptional(),
                          expire: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  webserver: z
                    .object({
                      domain: z.string().exactOptional(),
                      acl: z.string().exactOptional(),
                      port: z.string().exactOptional(),
                      threads: z.int().exactOptional(),
                      headers: z.array(z.string()).exactOptional(),
                      serve_all: z.boolean().exactOptional(),
                      advancedOpts: z.array(z.string()).exactOptional(),
                      session: z
                        .object({
                          timeout: z.int().exactOptional(),
                          restore: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tls: z
                        .object({
                          cert: z.string().exactOptional(),
                          validity: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      paths: z
                        .object({
                          webroot: z.string().exactOptional(),
                          webhome: z.string().exactOptional(),
                          prefix: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      interface: z
                        .object({
                          boxed: z.boolean().exactOptional(),
                          theme: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      api: z
                        .object({
                          max_sessions: z.int().exactOptional(),
                          prettyJSON: z.boolean().exactOptional(),
                          password: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                '*Note:* Special write-only property used to change the password via the API.\n',
                            }),
                          pwhash: z.string().exactOptional(),
                          totp_secret: z.string().exactOptional(),
                          app_pwhash: z.string().exactOptional(),
                          app_sudo: z.boolean().exactOptional(),
                          cli_pw: z.boolean().exactOptional(),
                          excludeClients: z.array(z.string()).exactOptional(),
                          excludeDomains: z.array(z.string()).exactOptional(),
                          maxHistory: z.int().exactOptional(),
                          maxClients: z.int().exactOptional(),
                          client_history_global_max: z.boolean().exactOptional(),
                          allow_destructive: z.boolean().exactOptional(),
                          temp: z
                            .object({
                              limit: z.number().exactOptional(),
                              unit: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  files: z
                    .object({
                      pid: z.string().exactOptional(),
                      database: z.string().exactOptional(),
                      tmp_db: z.string().exactOptional(),
                      gravity: z.string().exactOptional(),
                      gravity_tmp: z.string().exactOptional(),
                      macvendor: z.string().exactOptional(),
                      pcap: z.string().exactOptional(),
                      log: z
                        .object({
                          ftl: z.string().exactOptional(),
                          dnsmasq: z.string().exactOptional(),
                          webserver: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  misc: z
                    .object({
                      nice: z.int().exactOptional(),
                      delay_startup: z.int().exactOptional(),
                      addr2line: z.boolean().exactOptional(),
                      etc_dnsmasq_d: z.boolean().exactOptional(),
                      privacylevel: z.int().exactOptional(),
                      dnsmasq_lines: z.array(z.string()).exactOptional(),
                      extraLogging: z.boolean().exactOptional(),
                      readOnly: z.boolean().exactOptional(),
                      normalizeCPU: z.boolean().exactOptional(),
                      hide_dnsmasq_warn: z.boolean().exactOptional(),
                      hide_connection_error: z.boolean().exactOptional(),
                      check: z
                        .object({
                          load: z.boolean().exactOptional(),
                          shmem: z.int().exactOptional(),
                          disk: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  debug: z
                    .object({
                      database: z.boolean().exactOptional(),
                      networking: z.boolean().exactOptional(),
                      locks: z.boolean().exactOptional(),
                      queries: z.boolean().exactOptional(),
                      flags: z.boolean().exactOptional(),
                      shmem: z.boolean().exactOptional(),
                      gc: z.boolean().exactOptional(),
                      arp: z.boolean().exactOptional(),
                      regex: z.boolean().exactOptional(),
                      api: z.boolean().exactOptional(),
                      tls: z.boolean().exactOptional(),
                      overtime: z.boolean().exactOptional(),
                      status: z.boolean().exactOptional(),
                      caps: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      vectors: z.boolean().exactOptional(),
                      resolver: z.boolean().exactOptional(),
                      edns0: z.boolean().exactOptional(),
                      clients: z.boolean().exactOptional(),
                      aliasclients: z.boolean().exactOptional(),
                      events: z.boolean().exactOptional(),
                      helper: z.boolean().exactOptional(),
                      config: z.boolean().exactOptional(),
                      inotify: z.boolean().exactOptional(),
                      webserver: z.boolean().exactOptional(),
                      extra: z.boolean().exactOptional(),
                      reserved: z.boolean().exactOptional(),
                      ntp: z.boolean().exactOptional(),
                      netlink: z.boolean().exactOptional(),
                      timing: z.boolean().exactOptional(),
                      performance: z.boolean().exactOptional(),
                      all: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            config_one: {
              summary: 'One option',
              value: { config: { dns: { CNAMEdeepInspect: true } } },
            },
            config_two: {
              summary: 'Two options',
              value: {
                config: { dns: { specialDomains: { mozillaCanary: true } }, misc: { nice: -10 } },
              },
            },
            config: {
              summary: 'The entire configuration',
              value: {
                config: {
                  dns: {
                    upstreams: ['127.0.0.1#5353', '8.8.8.8'],
                    CNAMEdeepInspect: true,
                    blockESNI: true,
                    EDNS0ECS: true,
                    ignoreLocalhost: false,
                    showDNSSEC: true,
                    analyzeOnlyAandAAAA: false,
                    piholePTR: 'PI.HOLE',
                    replyWhenBusy: 'ALLOW',
                    blockTTL: 2,
                    hosts: ['192.168.2.123 mymusicbox'],
                    domainNeeded: true,
                    expandHosts: true,
                    domain: { name: 'lan', local: true },
                    bogusPriv: true,
                    dnssec: true,
                    interface: 'eth0',
                    hostRecord: '',
                    listeningMode: 'local',
                    queryLogging: true,
                    cnameRecords: [
                      '*.example.com,default.example.com',
                      'hourly.yetanother.com,yetanother.com,3600',
                    ],
                    port: 53,
                    localise: true,
                    cache: {
                      size: 10000,
                      optimizer: 3600,
                      upstreamBlockedTTL: 86400,
                      rrtype: 'ANY',
                    },
                    revServers: ['true,192.168.0.0/24,192.168.0.1,lan'],
                    blocking: { active: true, mode: 'NULL', edns: 'NONE' },
                    specialDomains: {
                      mozillaCanary: true,
                      iCloudPrivateRelay: true,
                      designatedResolver: true,
                    },
                    reply: {
                      host: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                      blocking: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                    },
                    rateLimit: { count: 0, interval: 0 },
                  },
                  dhcp: {
                    active: false,
                    start: '192.168.0.10',
                    end: '192.168.0.250',
                    router: '192.168.0.1',
                    netmask: '0.0.0.0',
                    leaseTime: '24h',
                    ipv6: false,
                    rapidCommit: false,
                    multiDNS: false,
                    logging: false,
                    ignoreUnknownClients: false,
                    hosts: [
                      '11:22:33:44:55:66,192.168.1.123',
                      '11:22:33:44:55:67,192.168.1.124,hostname',
                    ],
                  },
                  ntp: {
                    ipv4: { active: true, address: '' },
                    ipv6: { active: true, address: '' },
                    sync: {
                      active: true,
                      server: 'pool.ntp.org',
                      interval: 3600,
                      count: 8,
                      rtc: { set: true, device: '', utc: true },
                    },
                  },
                  resolver: {
                    resolveIPv4: true,
                    resolveIPv6: true,
                    macNames: true,
                    networkNames: true,
                    refreshNames: 'IPV4_ONLY',
                  },
                  database: {
                    DBimport: true,
                    maxDBdays: 365,
                    DBinterval: 60,
                    useWAL: true,
                    forceDisk: false,
                    network: { parseARPcache: true, expire: 365 },
                  },
                  webserver: {
                    domain: 'pi.hole',
                    acl: '+0.0.0.0/0,::/0',
                    port: '80,[::]:80',
                    threads: 0,
                    headers: [
                      'X-DNS-Prefetch-Control: off',
                      "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
                      'X-Frame-Options: DENY',
                      'X-XSS-Protection: 0',
                      'X-Content-Type-Options: nosniff',
                      'Referrer-Policy: strict-origin-when-cross-origin',
                    ],
                    serve_all: false,
                    advancedOpts: ['ssl_protocol_version=4'],
                    session: { timeout: 300, restore: true },
                    tls: { cert: '/etc/pihole/tls.pem', validity: 47 },
                    paths: { webroot: '/var/www/html', webhome: '/admin/', prefix: '' },
                    interface: { boxed: true, theme: 'default-darker' },
                    api: {
                      max_sessions: 16,
                      prettyJSON: false,
                      password: '********',
                      pwhash: '',
                      totp_secret: '',
                      app_pwhash: '',
                      app_sudo: false,
                      cli_pw: true,
                      excludeClients: ['1\\.2\\.3\\.4', 'localhost', 'fe80::345'],
                      excludeDomains: ['google\\\\.de', 'pi-hole\\.net'],
                      maxHistory: 86400,
                      maxClients: 10,
                      client_history_global_max: true,
                      allow_destructive: true,
                      temp: { limit: 60, unit: 'C' },
                    },
                  },
                  files: {
                    pid: '/run/pihole-FTL.pid',
                    database: '/etc/pihole/pihole-FTL.db',
                    tmp_db: '/etc/pihole/pihole-tmp.db',
                    gravity: '/etc/pihole/gravity.db',
                    gravity_tmp: '/tmp',
                    macvendor: '/etc/pihole/macvendor.db',
                    pcap: '',
                    log: {
                      ftl: '/var/log/pihole/FTL.log',
                      dnsmasq: '/var/log/pihole/pihole.log',
                      webserver: '/var/log/pihole/webserver.log',
                    },
                  },
                  misc: {
                    nice: -10,
                    delay_startup: 10,
                    addr2line: true,
                    privacylevel: 0,
                    etc_dnsmasq_d: false,
                    dnsmasq_lines: [],
                    extraLogging: false,
                    readOnly: false,
                    normalizeCPU: false,
                    hide_dnsmasq_warn: false,
                    hide_connection_error: false,
                    check: { load: true, shmem: 90, disk: 90 },
                  },
                  debug: {
                    database: false,
                    networking: false,
                    locks: false,
                    queries: false,
                    flags: false,
                    shmem: false,
                    gc: false,
                    arp: false,
                    regex: false,
                    api: false,
                    tls: false,
                    overtime: false,
                    status: false,
                    caps: false,
                    dnssec: false,
                    vectors: false,
                    resolver: false,
                    edns0: false,
                    clients: false,
                    aliasclients: false,
                    events: false,
                    helper: false,
                    config: false,
                    inotify: false,
                    webserver: false,
                    extra: false,
                    reserved: false,
                    ntp: false,
                    netlink: false,
                    timing: false,
                    performance: false,
                    all: false,
                  },
                  took: 0.003,
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              config: z
                .object({
                  dns: z
                    .object({
                      upstreams: z.array(z.string()).exactOptional(),
                      CNAMEdeepInspect: z.boolean().exactOptional(),
                      blockESNI: z.boolean().exactOptional(),
                      EDNS0ECS: z.boolean().exactOptional(),
                      ignoreLocalhost: z.boolean().exactOptional(),
                      showDNSSEC: z.boolean().exactOptional(),
                      analyzeOnlyAandAAAA: z.boolean().exactOptional(),
                      piholePTR: z.string().exactOptional(),
                      replyWhenBusy: z.string().exactOptional(),
                      blockTTL: z.int().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                      domainNeeded: z.boolean().exactOptional(),
                      expandHosts: z.boolean().exactOptional(),
                      domain: z
                        .object({
                          name: z.string().exactOptional(),
                          local: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      bogusPriv: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      interface: z.string().exactOptional(),
                      hostRecord: z.string().exactOptional(),
                      listeningMode: z.string().exactOptional(),
                      queryLogging: z.boolean().exactOptional(),
                      cnameRecords: z.array(z.string()).exactOptional(),
                      port: z.int().exactOptional(),
                      localise: z.boolean().exactOptional(),
                      cache: z
                        .object({
                          size: z.int().exactOptional(),
                          optimizer: z.int().exactOptional(),
                          upstreamBlockedTTL: z.int().exactOptional(),
                          rrtype: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      revServers: z.array(z.string()).exactOptional(),
                      blocking: z
                        .object({
                          active: z.boolean().exactOptional(),
                          mode: z.string().exactOptional(),
                          edns: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      specialDomains: z
                        .object({
                          mozillaCanary: z.boolean().exactOptional(),
                          iCloudPrivateRelay: z.boolean().exactOptional(),
                          designatedResolver: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reply: z
                        .object({
                          host: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocking: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rateLimit: z
                        .object({
                          count: z.int().exactOptional(),
                          interval: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  dhcp: z
                    .object({
                      active: z.boolean().exactOptional(),
                      start: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      end: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      router: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      netmask: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      leaseTime: z.string().exactOptional(),
                      ipv6: z.boolean().exactOptional(),
                      rapidCommit: z.boolean().exactOptional(),
                      multiDNS: z.boolean().exactOptional(),
                      logging: z.boolean().exactOptional(),
                      ignoreUnknownClients: z.boolean().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ntp: z
                    .object({
                      ipv4: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ipv6: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      sync: z
                        .object({
                          active: z.boolean().exactOptional(),
                          server: z.string().exactOptional(),
                          interval: z.int().exactOptional(),
                          count: z.int().exactOptional(),
                          rtc: z
                            .object({
                              set: z.boolean().exactOptional(),
                              device: z.string().exactOptional(),
                              utc: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  resolver: z
                    .object({
                      resolveIPv4: z.boolean().exactOptional(),
                      resolveIPv6: z.boolean().exactOptional(),
                      macNames: z.boolean().exactOptional(),
                      networkNames: z.boolean().exactOptional(),
                      refreshNames: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  database: z
                    .object({
                      DBimport: z.boolean().exactOptional(),
                      maxDBdays: z.int().exactOptional(),
                      DBinterval: z.int().exactOptional(),
                      useWAL: z.boolean().exactOptional(),
                      forceDisk: z.boolean().exactOptional(),
                      network: z
                        .object({
                          parseARPcache: z.boolean().exactOptional(),
                          expire: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  webserver: z
                    .object({
                      domain: z.string().exactOptional(),
                      acl: z.string().exactOptional(),
                      port: z.string().exactOptional(),
                      threads: z.int().exactOptional(),
                      headers: z.array(z.string()).exactOptional(),
                      serve_all: z.boolean().exactOptional(),
                      advancedOpts: z.array(z.string()).exactOptional(),
                      session: z
                        .object({
                          timeout: z.int().exactOptional(),
                          restore: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tls: z
                        .object({
                          cert: z.string().exactOptional(),
                          validity: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      paths: z
                        .object({
                          webroot: z.string().exactOptional(),
                          webhome: z.string().exactOptional(),
                          prefix: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      interface: z
                        .object({
                          boxed: z.boolean().exactOptional(),
                          theme: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      api: z
                        .object({
                          max_sessions: z.int().exactOptional(),
                          prettyJSON: z.boolean().exactOptional(),
                          password: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                '*Note:* Special write-only property used to change the password via the API.\n',
                            }),
                          pwhash: z.string().exactOptional(),
                          totp_secret: z.string().exactOptional(),
                          app_pwhash: z.string().exactOptional(),
                          app_sudo: z.boolean().exactOptional(),
                          cli_pw: z.boolean().exactOptional(),
                          excludeClients: z.array(z.string()).exactOptional(),
                          excludeDomains: z.array(z.string()).exactOptional(),
                          maxHistory: z.int().exactOptional(),
                          maxClients: z.int().exactOptional(),
                          client_history_global_max: z.boolean().exactOptional(),
                          allow_destructive: z.boolean().exactOptional(),
                          temp: z
                            .object({
                              limit: z.number().exactOptional(),
                              unit: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  files: z
                    .object({
                      pid: z.string().exactOptional(),
                      database: z.string().exactOptional(),
                      tmp_db: z.string().exactOptional(),
                      gravity: z.string().exactOptional(),
                      gravity_tmp: z.string().exactOptional(),
                      macvendor: z.string().exactOptional(),
                      pcap: z.string().exactOptional(),
                      log: z
                        .object({
                          ftl: z.string().exactOptional(),
                          dnsmasq: z.string().exactOptional(),
                          webserver: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  misc: z
                    .object({
                      nice: z.int().exactOptional(),
                      delay_startup: z.int().exactOptional(),
                      addr2line: z.boolean().exactOptional(),
                      etc_dnsmasq_d: z.boolean().exactOptional(),
                      privacylevel: z.int().exactOptional(),
                      dnsmasq_lines: z.array(z.string()).exactOptional(),
                      extraLogging: z.boolean().exactOptional(),
                      readOnly: z.boolean().exactOptional(),
                      normalizeCPU: z.boolean().exactOptional(),
                      hide_dnsmasq_warn: z.boolean().exactOptional(),
                      hide_connection_error: z.boolean().exactOptional(),
                      check: z
                        .object({
                          load: z.boolean().exactOptional(),
                          shmem: z.int().exactOptional(),
                          disk: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  debug: z
                    .object({
                      database: z.boolean().exactOptional(),
                      networking: z.boolean().exactOptional(),
                      locks: z.boolean().exactOptional(),
                      queries: z.boolean().exactOptional(),
                      flags: z.boolean().exactOptional(),
                      shmem: z.boolean().exactOptional(),
                      gc: z.boolean().exactOptional(),
                      arp: z.boolean().exactOptional(),
                      regex: z.boolean().exactOptional(),
                      api: z.boolean().exactOptional(),
                      tls: z.boolean().exactOptional(),
                      overtime: z.boolean().exactOptional(),
                      status: z.boolean().exactOptional(),
                      caps: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      vectors: z.boolean().exactOptional(),
                      resolver: z.boolean().exactOptional(),
                      edns0: z.boolean().exactOptional(),
                      clients: z.boolean().exactOptional(),
                      aliasclients: z.boolean().exactOptional(),
                      events: z.boolean().exactOptional(),
                      helper: z.boolean().exactOptional(),
                      config: z.boolean().exactOptional(),
                      inotify: z.boolean().exactOptional(),
                      webserver: z.boolean().exactOptional(),
                      extra: z.boolean().exactOptional(),
                      reserved: z.boolean().exactOptional(),
                      ntp: z.boolean().exactOptional(),
                      netlink: z.boolean().exactOptional(),
                      timing: z.boolean().exactOptional(),
                      performance: z.boolean().exactOptional(),
                      all: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            config: {
              summary: 'The entire configuration',
              value: {
                config: {
                  dns: {
                    upstreams: ['127.0.0.1#5353', '8.8.8.8'],
                    CNAMEdeepInspect: true,
                    blockESNI: true,
                    EDNS0ECS: true,
                    ignoreLocalhost: false,
                    showDNSSEC: true,
                    analyzeOnlyAandAAAA: false,
                    piholePTR: 'PI.HOLE',
                    replyWhenBusy: 'ALLOW',
                    blockTTL: 2,
                    hosts: ['192.168.2.123 mymusicbox'],
                    domainNeeded: true,
                    expandHosts: true,
                    domain: { name: 'lan', local: true },
                    bogusPriv: true,
                    dnssec: true,
                    interface: 'eth0',
                    hostRecord: '',
                    listeningMode: 'local',
                    queryLogging: true,
                    cnameRecords: [
                      '*.example.com,default.example.com',
                      'hourly.yetanother.com,yetanother.com,3600',
                    ],
                    port: 53,
                    localise: true,
                    cache: {
                      size: 10000,
                      optimizer: 3600,
                      upstreamBlockedTTL: 86400,
                      rrtype: 'ANY',
                    },
                    revServers: ['true,192.168.0.0/24,192.168.0.1,lan'],
                    blocking: { active: true, mode: 'NULL', edns: 'NONE' },
                    specialDomains: {
                      mozillaCanary: true,
                      iCloudPrivateRelay: true,
                      designatedResolver: true,
                    },
                    reply: {
                      host: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                      blocking: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                    },
                    rateLimit: { count: 0, interval: 0 },
                  },
                  dhcp: {
                    active: false,
                    start: '192.168.0.10',
                    end: '192.168.0.250',
                    router: '192.168.0.1',
                    netmask: '0.0.0.0',
                    leaseTime: '24h',
                    ipv6: false,
                    rapidCommit: false,
                    multiDNS: false,
                    logging: false,
                    ignoreUnknownClients: false,
                    hosts: [
                      '11:22:33:44:55:66,192.168.1.123',
                      '11:22:33:44:55:67,192.168.1.124,hostname',
                    ],
                  },
                  ntp: {
                    ipv4: { active: true, address: '' },
                    ipv6: { active: true, address: '' },
                    sync: {
                      active: true,
                      server: 'pool.ntp.org',
                      interval: 3600,
                      count: 8,
                      rtc: { set: true, device: '', utc: true },
                    },
                  },
                  resolver: {
                    resolveIPv4: true,
                    resolveIPv6: true,
                    macNames: true,
                    networkNames: true,
                    refreshNames: 'IPV4_ONLY',
                  },
                  database: {
                    DBimport: true,
                    maxDBdays: 365,
                    DBinterval: 60,
                    useWAL: true,
                    forceDisk: false,
                    network: { parseARPcache: true, expire: 365 },
                  },
                  webserver: {
                    domain: 'pi.hole',
                    acl: '+0.0.0.0/0,::/0',
                    port: '80,[::]:80',
                    threads: 0,
                    headers: [
                      'X-DNS-Prefetch-Control: off',
                      "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
                      'X-Frame-Options: DENY',
                      'X-XSS-Protection: 0',
                      'X-Content-Type-Options: nosniff',
                      'Referrer-Policy: strict-origin-when-cross-origin',
                    ],
                    serve_all: false,
                    advancedOpts: ['ssl_protocol_version=4'],
                    session: { timeout: 300, restore: true },
                    tls: { cert: '/etc/pihole/tls.pem', validity: 47 },
                    paths: { webroot: '/var/www/html', webhome: '/admin/', prefix: '' },
                    interface: { boxed: true, theme: 'default-darker' },
                    api: {
                      max_sessions: 16,
                      prettyJSON: false,
                      password: '********',
                      pwhash: '',
                      totp_secret: '',
                      app_pwhash: '',
                      app_sudo: false,
                      cli_pw: true,
                      excludeClients: ['1\\.2\\.3\\.4', 'localhost', 'fe80::345'],
                      excludeDomains: ['google\\\\.de', 'pi-hole\\.net'],
                      maxHistory: 86400,
                      maxClients: 10,
                      client_history_global_max: true,
                      allow_destructive: true,
                      temp: { limit: 60, unit: 'C' },
                    },
                  },
                  files: {
                    pid: '/run/pihole-FTL.pid',
                    database: '/etc/pihole/pihole-FTL.db',
                    tmp_db: '/etc/pihole/pihole-tmp.db',
                    gravity: '/etc/pihole/gravity.db',
                    gravity_tmp: '/tmp',
                    macvendor: '/etc/pihole/macvendor.db',
                    pcap: '',
                    log: {
                      ftl: '/var/log/pihole/FTL.log',
                      dnsmasq: '/var/log/pihole/pihole.log',
                      webserver: '/var/log/pihole/webserver.log',
                    },
                  },
                  misc: {
                    nice: -10,
                    delay_startup: 10,
                    addr2line: true,
                    privacylevel: 0,
                    etc_dnsmasq_d: false,
                    dnsmasq_lines: [],
                    extraLogging: false,
                    readOnly: false,
                    normalizeCPU: false,
                    hide_dnsmasq_warn: false,
                    hide_connection_error: false,
                    check: { load: true, shmem: 90, disk: 90 },
                  },
                  debug: {
                    database: false,
                    networking: false,
                    locks: false,
                    queries: false,
                    flags: false,
                    shmem: false,
                    gc: false,
                    arp: false,
                    regex: false,
                    api: false,
                    tls: false,
                    overtime: false,
                    status: false,
                    caps: false,
                    dnssec: false,
                    vectors: false,
                    resolver: false,
                    edns0: false,
                    clients: false,
                    aliasclients: false,
                    events: false,
                    helper: false,
                    config: false,
                    inotify: false,
                    webserver: false,
                    extra: false,
                    reserved: false,
                    ntp: false,
                    netlink: false,
                    timing: false,
                    performance: false,
                    all: false,
                  },
                  took: 0.003,
                },
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getConfigPropertiesRoute = createRoute({
  method: 'get',
  path: '/config/_properties',
  tags: ['Pi-hole configuration'],
  summary: 'Get special properties of your Pi-hole configuration',
  description:
    'This API hook returns a list of special properties in your Pi-hole configuration.\n',
  operationId: 'get_config_props',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              config: z
                .object({
                  read_only: z
                    .array(
                      z
                        .object({
                          key: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the read-only property' }),
                          reason: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The reason why this property is read-only (machine-readable)',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'A human-readable description of the read-only reason',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            props: {
              summary: 'All read-only properties',
              value: {
                config: {
                  read_only: [
                    {
                      key: 'misc.readOnly',
                      reason: 'read_only',
                      description: 'Variable can only be set in pihole.toml, not via API',
                    },
                    {
                      key: 'webserver.api.pwhash',
                      reason: 'env_var',
                      description: 'Set via environment variable',
                    },
                  ],
                },
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getConfigElementRoute = createRoute({
  method: 'get',
  path: '/config/{element}',
  tags: ['Pi-hole configuration'],
  summary: 'Get specific part of current configuration of your Pi-hole',
  description:
    "This API hook returns infos about the requested subset of your Pi-hole's configuration.\nThe response will be a filtered JSON object and a subset of the full `GET /config` response.\n",
  operationId: 'get_config_elem',
  request: {
    query: z.object({
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'detailed',
            in: 'query',
            description: 'Return detailed information about the configuration',
            required: false,
            schema: { type: 'boolean', default: false, example: false },
          },
          example: false,
        }),
    }),
    params: z.object({
      element: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'element',
            schema: { type: 'string' },
            required: true,
            description: 'config element',
            example: 'dns/upstreams',
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
            .object({
              config: z
                .object({
                  dns: z
                    .object({
                      upstreams: z.array(z.string()).exactOptional(),
                      CNAMEdeepInspect: z.boolean().exactOptional(),
                      blockESNI: z.boolean().exactOptional(),
                      EDNS0ECS: z.boolean().exactOptional(),
                      ignoreLocalhost: z.boolean().exactOptional(),
                      showDNSSEC: z.boolean().exactOptional(),
                      analyzeOnlyAandAAAA: z.boolean().exactOptional(),
                      piholePTR: z.string().exactOptional(),
                      replyWhenBusy: z.string().exactOptional(),
                      blockTTL: z.int().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                      domainNeeded: z.boolean().exactOptional(),
                      expandHosts: z.boolean().exactOptional(),
                      domain: z
                        .object({
                          name: z.string().exactOptional(),
                          local: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      bogusPriv: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      interface: z.string().exactOptional(),
                      hostRecord: z.string().exactOptional(),
                      listeningMode: z.string().exactOptional(),
                      queryLogging: z.boolean().exactOptional(),
                      cnameRecords: z.array(z.string()).exactOptional(),
                      port: z.int().exactOptional(),
                      localise: z.boolean().exactOptional(),
                      cache: z
                        .object({
                          size: z.int().exactOptional(),
                          optimizer: z.int().exactOptional(),
                          upstreamBlockedTTL: z.int().exactOptional(),
                          rrtype: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      revServers: z.array(z.string()).exactOptional(),
                      blocking: z
                        .object({
                          active: z.boolean().exactOptional(),
                          mode: z.string().exactOptional(),
                          edns: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      specialDomains: z
                        .object({
                          mozillaCanary: z.boolean().exactOptional(),
                          iCloudPrivateRelay: z.boolean().exactOptional(),
                          designatedResolver: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reply: z
                        .object({
                          host: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocking: z
                            .object({
                              force4: z.boolean().exactOptional(),
                              force6: z.boolean().exactOptional(),
                              IPv4: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                              IPv6: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rateLimit: z
                        .object({
                          count: z.int().exactOptional(),
                          interval: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  dhcp: z
                    .object({
                      active: z.boolean().exactOptional(),
                      start: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      end: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      router: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      netmask: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                      leaseTime: z.string().exactOptional(),
                      ipv6: z.boolean().exactOptional(),
                      rapidCommit: z.boolean().exactOptional(),
                      multiDNS: z.boolean().exactOptional(),
                      logging: z.boolean().exactOptional(),
                      ignoreUnknownClients: z.boolean().exactOptional(),
                      hosts: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ntp: z
                    .object({
                      ipv4: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv4' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ipv6: z
                        .object({
                          active: z.boolean().exactOptional(),
                          address: z.string().exactOptional().openapi({ 'x-format': 'ipv6' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      sync: z
                        .object({
                          active: z.boolean().exactOptional(),
                          server: z.string().exactOptional(),
                          interval: z.int().exactOptional(),
                          count: z.int().exactOptional(),
                          rtc: z
                            .object({
                              set: z.boolean().exactOptional(),
                              device: z.string().exactOptional(),
                              utc: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  resolver: z
                    .object({
                      resolveIPv4: z.boolean().exactOptional(),
                      resolveIPv6: z.boolean().exactOptional(),
                      macNames: z.boolean().exactOptional(),
                      networkNames: z.boolean().exactOptional(),
                      refreshNames: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  database: z
                    .object({
                      DBimport: z.boolean().exactOptional(),
                      maxDBdays: z.int().exactOptional(),
                      DBinterval: z.int().exactOptional(),
                      useWAL: z.boolean().exactOptional(),
                      forceDisk: z.boolean().exactOptional(),
                      network: z
                        .object({
                          parseARPcache: z.boolean().exactOptional(),
                          expire: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  webserver: z
                    .object({
                      domain: z.string().exactOptional(),
                      acl: z.string().exactOptional(),
                      port: z.string().exactOptional(),
                      threads: z.int().exactOptional(),
                      headers: z.array(z.string()).exactOptional(),
                      serve_all: z.boolean().exactOptional(),
                      advancedOpts: z.array(z.string()).exactOptional(),
                      session: z
                        .object({
                          timeout: z.int().exactOptional(),
                          restore: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tls: z
                        .object({
                          cert: z.string().exactOptional(),
                          validity: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      paths: z
                        .object({
                          webroot: z.string().exactOptional(),
                          webhome: z.string().exactOptional(),
                          prefix: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      interface: z
                        .object({
                          boxed: z.boolean().exactOptional(),
                          theme: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      api: z
                        .object({
                          max_sessions: z.int().exactOptional(),
                          prettyJSON: z.boolean().exactOptional(),
                          password: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                '*Note:* Special write-only property used to change the password via the API.\n',
                            }),
                          pwhash: z.string().exactOptional(),
                          totp_secret: z.string().exactOptional(),
                          app_pwhash: z.string().exactOptional(),
                          app_sudo: z.boolean().exactOptional(),
                          cli_pw: z.boolean().exactOptional(),
                          excludeClients: z.array(z.string()).exactOptional(),
                          excludeDomains: z.array(z.string()).exactOptional(),
                          maxHistory: z.int().exactOptional(),
                          maxClients: z.int().exactOptional(),
                          client_history_global_max: z.boolean().exactOptional(),
                          allow_destructive: z.boolean().exactOptional(),
                          temp: z
                            .object({
                              limit: z.number().exactOptional(),
                              unit: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  files: z
                    .object({
                      pid: z.string().exactOptional(),
                      database: z.string().exactOptional(),
                      tmp_db: z.string().exactOptional(),
                      gravity: z.string().exactOptional(),
                      gravity_tmp: z.string().exactOptional(),
                      macvendor: z.string().exactOptional(),
                      pcap: z.string().exactOptional(),
                      log: z
                        .object({
                          ftl: z.string().exactOptional(),
                          dnsmasq: z.string().exactOptional(),
                          webserver: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  misc: z
                    .object({
                      nice: z.int().exactOptional(),
                      delay_startup: z.int().exactOptional(),
                      addr2line: z.boolean().exactOptional(),
                      etc_dnsmasq_d: z.boolean().exactOptional(),
                      privacylevel: z.int().exactOptional(),
                      dnsmasq_lines: z.array(z.string()).exactOptional(),
                      extraLogging: z.boolean().exactOptional(),
                      readOnly: z.boolean().exactOptional(),
                      normalizeCPU: z.boolean().exactOptional(),
                      hide_dnsmasq_warn: z.boolean().exactOptional(),
                      hide_connection_error: z.boolean().exactOptional(),
                      check: z
                        .object({
                          load: z.boolean().exactOptional(),
                          shmem: z.int().exactOptional(),
                          disk: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  debug: z
                    .object({
                      database: z.boolean().exactOptional(),
                      networking: z.boolean().exactOptional(),
                      locks: z.boolean().exactOptional(),
                      queries: z.boolean().exactOptional(),
                      flags: z.boolean().exactOptional(),
                      shmem: z.boolean().exactOptional(),
                      gc: z.boolean().exactOptional(),
                      arp: z.boolean().exactOptional(),
                      regex: z.boolean().exactOptional(),
                      api: z.boolean().exactOptional(),
                      tls: z.boolean().exactOptional(),
                      overtime: z.boolean().exactOptional(),
                      status: z.boolean().exactOptional(),
                      caps: z.boolean().exactOptional(),
                      dnssec: z.boolean().exactOptional(),
                      vectors: z.boolean().exactOptional(),
                      resolver: z.boolean().exactOptional(),
                      edns0: z.boolean().exactOptional(),
                      clients: z.boolean().exactOptional(),
                      aliasclients: z.boolean().exactOptional(),
                      events: z.boolean().exactOptional(),
                      helper: z.boolean().exactOptional(),
                      config: z.boolean().exactOptional(),
                      inotify: z.boolean().exactOptional(),
                      webserver: z.boolean().exactOptional(),
                      extra: z.boolean().exactOptional(),
                      reserved: z.boolean().exactOptional(),
                      ntp: z.boolean().exactOptional(),
                      netlink: z.boolean().exactOptional(),
                      timing: z.boolean().exactOptional(),
                      performance: z.boolean().exactOptional(),
                      all: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            config: {
              summary: 'The entire configuration',
              value: {
                config: {
                  dns: {
                    upstreams: ['127.0.0.1#5353', '8.8.8.8'],
                    CNAMEdeepInspect: true,
                    blockESNI: true,
                    EDNS0ECS: true,
                    ignoreLocalhost: false,
                    showDNSSEC: true,
                    analyzeOnlyAandAAAA: false,
                    piholePTR: 'PI.HOLE',
                    replyWhenBusy: 'ALLOW',
                    blockTTL: 2,
                    hosts: ['192.168.2.123 mymusicbox'],
                    domainNeeded: true,
                    expandHosts: true,
                    domain: { name: 'lan', local: true },
                    bogusPriv: true,
                    dnssec: true,
                    interface: 'eth0',
                    hostRecord: '',
                    listeningMode: 'local',
                    queryLogging: true,
                    cnameRecords: [
                      '*.example.com,default.example.com',
                      'hourly.yetanother.com,yetanother.com,3600',
                    ],
                    port: 53,
                    localise: true,
                    cache: {
                      size: 10000,
                      optimizer: 3600,
                      upstreamBlockedTTL: 86400,
                      rrtype: 'ANY',
                    },
                    revServers: ['true,192.168.0.0/24,192.168.0.1,lan'],
                    blocking: { active: true, mode: 'NULL', edns: 'NONE' },
                    specialDomains: {
                      mozillaCanary: true,
                      iCloudPrivateRelay: true,
                      designatedResolver: true,
                    },
                    reply: {
                      host: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                      blocking: { force4: false, force6: false, IPv4: '0.0.0.0', IPv6: '::' },
                    },
                    rateLimit: { count: 0, interval: 0 },
                  },
                  dhcp: {
                    active: false,
                    start: '192.168.0.10',
                    end: '192.168.0.250',
                    router: '192.168.0.1',
                    netmask: '0.0.0.0',
                    leaseTime: '24h',
                    ipv6: false,
                    rapidCommit: false,
                    multiDNS: false,
                    logging: false,
                    ignoreUnknownClients: false,
                    hosts: [
                      '11:22:33:44:55:66,192.168.1.123',
                      '11:22:33:44:55:67,192.168.1.124,hostname',
                    ],
                  },
                  ntp: {
                    ipv4: { active: true, address: '' },
                    ipv6: { active: true, address: '' },
                    sync: {
                      active: true,
                      server: 'pool.ntp.org',
                      interval: 3600,
                      count: 8,
                      rtc: { set: true, device: '', utc: true },
                    },
                  },
                  resolver: {
                    resolveIPv4: true,
                    resolveIPv6: true,
                    macNames: true,
                    networkNames: true,
                    refreshNames: 'IPV4_ONLY',
                  },
                  database: {
                    DBimport: true,
                    maxDBdays: 365,
                    DBinterval: 60,
                    useWAL: true,
                    forceDisk: false,
                    network: { parseARPcache: true, expire: 365 },
                  },
                  webserver: {
                    domain: 'pi.hole',
                    acl: '+0.0.0.0/0,::/0',
                    port: '80,[::]:80',
                    threads: 0,
                    headers: [
                      'X-DNS-Prefetch-Control: off',
                      "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
                      'X-Frame-Options: DENY',
                      'X-XSS-Protection: 0',
                      'X-Content-Type-Options: nosniff',
                      'Referrer-Policy: strict-origin-when-cross-origin',
                    ],
                    serve_all: false,
                    advancedOpts: ['ssl_protocol_version=4'],
                    session: { timeout: 300, restore: true },
                    tls: { cert: '/etc/pihole/tls.pem', validity: 47 },
                    paths: { webroot: '/var/www/html', webhome: '/admin/', prefix: '' },
                    interface: { boxed: true, theme: 'default-darker' },
                    api: {
                      max_sessions: 16,
                      prettyJSON: false,
                      password: '********',
                      pwhash: '',
                      totp_secret: '',
                      app_pwhash: '',
                      app_sudo: false,
                      cli_pw: true,
                      excludeClients: ['1\\.2\\.3\\.4', 'localhost', 'fe80::345'],
                      excludeDomains: ['google\\\\.de', 'pi-hole\\.net'],
                      maxHistory: 86400,
                      maxClients: 10,
                      client_history_global_max: true,
                      allow_destructive: true,
                      temp: { limit: 60, unit: 'C' },
                    },
                  },
                  files: {
                    pid: '/run/pihole-FTL.pid',
                    database: '/etc/pihole/pihole-FTL.db',
                    tmp_db: '/etc/pihole/pihole-tmp.db',
                    gravity: '/etc/pihole/gravity.db',
                    gravity_tmp: '/tmp',
                    macvendor: '/etc/pihole/macvendor.db',
                    pcap: '',
                    log: {
                      ftl: '/var/log/pihole/FTL.log',
                      dnsmasq: '/var/log/pihole/pihole.log',
                      webserver: '/var/log/pihole/webserver.log',
                    },
                  },
                  misc: {
                    nice: -10,
                    delay_startup: 10,
                    addr2line: true,
                    privacylevel: 0,
                    etc_dnsmasq_d: false,
                    dnsmasq_lines: [],
                    extraLogging: false,
                    readOnly: false,
                    normalizeCPU: false,
                    hide_dnsmasq_warn: false,
                    hide_connection_error: false,
                    check: { load: true, shmem: 90, disk: 90 },
                  },
                  debug: {
                    database: false,
                    networking: false,
                    locks: false,
                    queries: false,
                    flags: false,
                    shmem: false,
                    gc: false,
                    arp: false,
                    regex: false,
                    api: false,
                    tls: false,
                    overtime: false,
                    status: false,
                    caps: false,
                    dnssec: false,
                    vectors: false,
                    resolver: false,
                    edns0: false,
                    clients: false,
                    aliasclients: false,
                    events: false,
                    helper: false,
                    config: false,
                    inotify: false,
                    webserver: false,
                    extra: false,
                    reserved: false,
                    ntp: false,
                    netlink: false,
                    timing: false,
                    performance: false,
                    all: false,
                  },
                  took: 0.003,
                },
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const putConfigElementValueRoute = createRoute({
  method: 'put',
  path: '/config/{element}/{value}',
  tags: ['Pi-hole configuration'],
  summary: 'Add config array item',
  description: '*Note:* There will be no content on success.\n',
  operationId: 'add_array_item',
  request: {
    params: z.object({
      element: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'element',
            schema: { type: 'string' },
            required: true,
            description: 'config element',
            example: 'dns/upstreams',
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'value',
            schema: { type: 'string' },
            required: true,
            description: 'config value',
            example: '8.8.8.8',
          },
        }),
    }),
    query: z.object({
      restart: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'restart',
            in: 'query',
            description:
              'Restart FTL after a change would require this. This option can be used if you want to avoid a restart, e.g., when adding multiple items independently instead of all together at once. Note that you will have to restart FTL manually later to apply the changes.',
            required: false,
            schema: { type: 'boolean', default: true, example: true },
          },
          example: true,
        }),
    }),
  },
  responses: {
    201: { description: 'Item created' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            invalid_path_depth: {
              summary: 'Invalid path',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid path depth',
                  hint: 'Use, e.g., DELETE /config/dns/upstreams/127.0.0.1 to remove "127.0.0.1" from config.dns.upstreams',
                },
                took: 0.003,
              },
            },
            item_already_present: {
              summary: 'Item to be added exists already',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Item already present',
                  hint: 'Uniqueness of items is enforced',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteConfigElementValueRoute = createRoute({
  method: 'delete',
  path: '/config/{element}/{value}',
  tags: ['Pi-hole configuration'],
  summary: 'Delete config array item',
  description: '*Note:* There will be no content on success.\n',
  operationId: 'delete_array_item',
  request: {
    params: z.object({
      element: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'element',
            schema: { type: 'string' },
            required: true,
            description: 'config element',
            example: 'dns/upstreams',
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'value',
            schema: { type: 'string' },
            required: true,
            description: 'config value',
            example: '8.8.8.8',
          },
        }),
    }),
    query: z.object({
      restart: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'restart',
            in: 'query',
            description:
              'Restart FTL after a change would require this. This option can be used if you want to avoid a restart, e.g., when adding multiple items independently instead of all together at once. Note that you will have to restart FTL manually later to apply the changes.',
            required: false,
            schema: { type: 'boolean', default: true, example: true },
          },
          example: true,
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            invalid_path_depth: {
              summary: 'Invalid path',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid path depth',
                  hint: 'Use, e.g., DELETE /config/dns/upstreams/127.0.0.1 to remove "127.0.0.1" from config.dns.upstreams',
                },
                took: 0.003,
              },
            },
            item_already_present: {
              summary: 'Item to be added exists already',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Item already present',
                  hint: 'Uniqueness of items is enforced',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getNetworkDevicesRoute = createRoute({
  method: 'get',
  path: '/network/devices',
  tags: ['Network information'],
  summary: 'Get info about the devices in your local network as seen by your Pi-hole',
  description:
    'This API hook returns infos about the devices in your local network as seen by your Pi-hole. By default, this number of shown devices is limited to 10. Devices are ordered by when your Pi-hole has received the last query from this device (most recent first)\n',
  operationId: 'get_network',
  request: {
    query: z.object({
      max_devices: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) Maximum number of devices to show',
            name: 'max_devices',
            schema: { type: 'integer' },
            required: false,
            example: 10,
          },
        }),
      max_addresses: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) Maximum number of addresses to show per device',
            name: 'max_addresses',
            schema: { type: 'integer' },
            required: false,
            example: 3,
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
            .object({
              devices: z
                .array(
                  z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Device network table ID', example: 1 }),
                      hwaddr: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'MAC address of this device',
                          example: '00:11:22:33:44:55',
                        }),
                      interface: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Interface this device is connected to',
                          example: 'enp2s0',
                        }),
                      firstSeen: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unix timestamp when this device was first seen by your Pi-hole',
                          example: 1664623620,
                        }),
                      lastQuery: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unix timestamp when your Pi-hole received the last query from this device',
                          example: 1664688620,
                        }),
                      numQueries: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Total number of queries your Pi-hole has received from this device',
                          example: 585462,
                        }),
                      macVendor: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            "Vendor name associated with the device's MAC address (if available)",
                          example: 'Digital Data Communications Asia Co.,Ltd',
                        }),
                      ips: z
                        .array(
                          z
                            .object({
                              ip: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Associated IP address (can be IPv4 or IPv6)',
                                  example: '192.168.1.51',
                                }),
                              name: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Associated hostname (can be null)',
                                  example: 'ubuntu-server',
                                }),
                              lastSeen: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Unix timestamp when your Pi-hole has seen this address the last time',
                                  example: 1664688620,
                                }),
                              nameUpdated: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Unix timestamp when device updated its hostname the last time',
                                  example: 1664688620,
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of devices' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteNetworkDevicesDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/network/devices/{device_id}',
  tags: ['Network information'],
  summary: 'Delete a device from the network table',
  description:
    'This API hook deletes a device from the network table. This will also remove all associated IP addresses and hostnames.\n',
  operationId: 'delete_device',
  request: {
    params: z.object({
      device_id: z
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
            in: 'path',
            description: 'Device ID',
            name: 'device_id',
            schema: { type: 'integer' },
            required: true,
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content (deleted)' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getNetworkGatewayRoute = createRoute({
  method: 'get',
  path: '/network/gateway',
  tags: ['Network information'],
  summary: 'Get info about the gateway of your Pi-hole',
  description:
    'This API hook returns infos about the gateway of your Pi-hole.\n\nIf the optional parameter `detailed` is set to `true`, the response will include detailed information about the individual interfaces and routes. Note that the available information is dependent on the interface type and state.\n',
  operationId: 'get_gateway',
  request: {
    query: z.object({
      detailed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) Detailed interface/routing information',
            name: 'detailed',
            schema: { type: 'boolean' },
            required: false,
            example: false,
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
            .object({
              gateway: z
                .array(
                  z
                    .object({
                      family: z.string().exactOptional().openapi({ description: 'Address family' }),
                      interface: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Interface name (`null` for a multipath default route without a single outgoing interface)',
                        }),
                      address: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Gateway address (`null` if the default route has no gateway address, e.g. a route via a point-to-point interface)',
                        }),
                      local: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Local interface addresses' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      family: 'inet',
                      interface: 'eth0',
                      address: '192.168.0.1',
                      local: ['192.168.0.22'],
                    },
                    {
                      family: 'inet6',
                      interface: 'eth0',
                      address: 'fe80::3587:2fff:f11a:1',
                      local: ['fe80::3587:2fff:f11a:4321'],
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getNetworkRoutesRoute = createRoute({
  method: 'get',
  path: '/network/routes',
  tags: ['Network information'],
  summary: 'Get info about the routes of your Pi-hole',
  description:
    'This API hook returns infos about the networking routes of your Pi-hole. Note that not all described fields are applicable to any routing type. Users must not rely on the presence of any field without checking the route type first.\n\nIf the optional parameter `detailed` is set to `true`, the response will include more detailed information about the individual routes where the available information is dependent on the route type and state.\n',
  operationId: 'get_routes',
  request: {
    query: z.object({
      detailed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) Detailed interface/routing information',
            name: 'detailed',
            schema: { type: 'boolean' },
            required: false,
            example: false,
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
            .object({
              routes: z
                .array(
                  z
                    .object({
                      gateway: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Gateway address' }),
                      family: z
                        .enum(['inet', 'inet6', 'link', 'mpls', 'bridge', '???'])
                        .exactOptional()
                        .openapi({ description: 'Address family' }),
                      table: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Routing table ID (0 = unspecified, 253 = default, 254 = local, 255 = local, other = user-defined)',
                        }),
                      protocol: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Routing protocol' }),
                      scope: z.string().exactOptional().openapi({ description: 'Routing scope' }),
                      type: z.string().exactOptional().openapi({ description: 'Routing type' }),
                      flags: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array of route flags' }),
                      oif: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Outgoing interface' }),
                      iif: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Incoming interface' }),
                      dst: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Destination address (or "default" for the default route)',
                        }),
                      src: z.string().exactOptional().openapi({ description: 'Source address' }),
                      prefsrc: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Preferred source address' }),
                      priority: z.int().exactOptional().openapi({ description: 'Route priority' }),
                      pref: z.int().exactOptional().openapi({ description: 'Route preference' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Array of routes',
                  example: [
                    {
                      family: 'inet',
                      table: 254,
                      protocol: 'static',
                      scope: 'universe',
                      type: 'unicast',
                      flags: [],
                      gateway: '192.168.0.1',
                      oif: 'eth0',
                    },
                    {
                      family: 'inet',
                      table: 254,
                      protocol: 'boot',
                      scope: 'link',
                      type: 'unicast',
                      flags: [],
                      dst: '10.1.0.0',
                      oif: 'wg0',
                    },
                    {
                      family: 'inet',
                      table: 255,
                      protocol: 'kernel',
                      scope: 'host',
                      type: 'local',
                      flags: [],
                      dst: '127.0.0.1',
                      prefsrc: '127.0.0.1',
                      oif: 'lo',
                    },
                    {
                      family: 'inet6',
                      table: 255,
                      protocol: 'kernel',
                      scope: 'universe',
                      type: 'local',
                      flags: [],
                      dst: '::1',
                      priority: 0,
                      oif: 'eth0',
                    },
                    {
                      family: 'inet6',
                      table: 254,
                      protocol: 'static',
                      scope: 'universe',
                      type: 'unicast',
                      flags: [],
                      gateway: 'fe80::3587:2fff:f11a:4321',
                      oif: 'eth0',
                    },
                    {
                      family: 'inet6',
                      table: 255,
                      protocol: 'kernel',
                      scope: 'universe',
                      type: 'multicast',
                      flags: [],
                      dst: 'fd00:4711::',
                      priority: 5,
                      oif: 'wg0',
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getNetworkInterfacesRoute = createRoute({
  method: 'get',
  path: '/network/interfaces',
  tags: ['Network information'],
  summary: 'Get info about the interfaces of your Pi-hole',
  description:
    'This API hook returns infos about the networking interfaces of your Pi-hole. Note that not all described fields are applicable to any routing type. Users must not rely on the presence of any field without checking the route type first.\n\nIf the optional parameter `detailed` is set to `true`, the response will include more detailed information about the individual interfaces where the available information is dependent on the interface type and state.\n',
  operationId: 'get_interfaces',
  request: {
    query: z.object({
      detailed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) Detailed interface/routing information',
            name: 'detailed',
            schema: { type: 'boolean' },
            required: false,
            example: false,
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
            .object({
              interfaces: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional().openapi({ description: 'Interface name' }),
                      speed: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Speed of the interface in Mbit/s (`null` if not applicable)',
                        }),
                      carrier: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the interface is connected' }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Type of the interface' }),
                      flags: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Array of address flags' }),
                      state: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'State of the interface' }),
                      proto_down: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the interface is administratively down' }),
                      address: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Interface hardware address' }),
                      broadcast: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Interface broadcast address' }),
                      perm_address: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Interface permanent hardware address' }),
                      stats: z
                        .object({
                          rx_bytes: z
                            .object({
                              value: z
                                .number()
                                .exactOptional()
                                .openapi({ description: 'Number of received bytes' }),
                              unit: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Unit of the received bytes' }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Interface received bytes', required: [] }),
                          tx_bytes: z
                            .object({
                              value: z
                                .number()
                                .exactOptional()
                                .openapi({ description: 'Number of transmitted bytes' }),
                              unit: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Unit of the transmitted bytes' }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Interface transmitted bytes', required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      addresses: z
                        .array(
                          z
                            .object({
                              address: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Interface address' }),
                              address_type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Type of the interface address' }),
                              broadcast: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Interface broadcast address' }),
                              broadcast_type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Type of the broadcast address' }),
                              local: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Local address' }),
                              local_type: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Type of the local address' }),
                              label: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Interface label' }),
                              family: z
                                .enum(['inet', 'inet6', 'link', 'mpls', 'bridge', '???'])
                                .exactOptional()
                                .openapi({ description: 'Address family' }),
                              flags: z
                                .array(z.string())
                                .exactOptional()
                                .openapi({ description: 'Array of address flags' }),
                              prefixlen: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Prefix length of the interface address' }),
                              scope: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Address scope' }),
                              prefered: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Preferred lifetime of the address (`4294967295` = forever)',
                                }),
                              valid: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Valid lifetime of the address (`4294967295` = forever)',
                                }),
                              cstamp: z
                                .number()
                                .exactOptional()
                                .openapi({ description: 'Creation timestamp of the address' }),
                              tstamp: z
                                .number()
                                .exactOptional()
                                .openapi({ description: 'Updated timestamp of the address' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Array of associated IPv addresses' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Interface information',
                  example: [
                    {
                      name: 'lo',
                      speed: null,
                      type: 'loopback',
                      flags: ['up', 'loopback', 'running', 'lower_up'],
                      state: 'unknown',
                      carrier: true,
                      address: '00:00:00:00:00:00',
                      broadcast: '00:00:00:00:00:00',
                      stats: {
                        rx_bytes: { value: 81.6571641, unit: 'MB' },
                        tx_bytes: { value: 648.818, unit: 'MB' },
                      },
                      addresses: [
                        {
                          address: '127.0.0.1',
                          address_type: 'loopback',
                          local: '127.0.0.1',
                          local_type: 'loopback',
                          family: 'inet',
                          scope: 'host',
                          flags: ['permanent'],
                          prefixlen: 8,
                          label: 'lo',
                          prefered: 4294967295,
                          valid: 4294967295,
                          cstamp: 1720989931,
                          tstamp: 1720989931,
                        },
                        {
                          address: '::1',
                          address_type: 'loopback',
                          local: '::1',
                          local_type: 'loopback',
                          family: 'inet6',
                          scope: 'host',
                          flags: ['permanent'],
                          prefixlen: 128,
                          label: 'lo',
                          prefered: 4294967295,
                          valid: 4294967295,
                          cstamp: 1720989931.1,
                          tstamp: 1720989931.1,
                        },
                      ],
                    },
                    {
                      name: 'eth0',
                      speed: 1000,
                      type: 'ether',
                      flags: ['up', 'broadcast', 'running', 'multicast', 'lower_up'],
                      state: 'up',
                      carrier: true,
                      address: '00:11:22:33:44:55',
                      broadcast: 'ff:ff:ff:ff:ff:ff',
                      perm_address: '00:11:22:33:44:55',
                      stats: {
                        rx_bytes: { value: 15.5585, unit: 'GB' },
                        tx_bytes: { value: 1.55858, unit: 'GB' },
                      },
                      addresses: [
                        {
                          address: '192.168.0.123',
                          address_type: 'private',
                          local: '192.168.0.123',
                          local_type: 'private',
                          family: 'inet',
                          scope: 'universe',
                          flags: ['permanent'],
                          prefixlen: 24,
                          label: 'eth0',
                          prefered: 4294967295,
                          valid: 4294967295,
                          cstamp: 1720989931.1,
                          tstamp: 1720989931.1,
                        },
                        {
                          address: '2001:db8::1234:5678:9abc:def0',
                          address_type: 'global (GUA)',
                          family: 'inet6',
                          scope: 'universe',
                          flags: [],
                          prefixlen: 64,
                          label: 'eth0',
                          prefered: 3461,
                          valid: 7061,
                          cstamp: 2789057.25,
                          tstamp: 2789057.25,
                        },
                        {
                          address: 'fd29:db8::1234:5678:9abc:def0',
                          address_type: 'site-local (ULA)',
                          family: 'inet6',
                          scope: 'universe',
                          flags: [],
                          prefixlen: 64,
                          label: 'eth0',
                          prefered: 3461,
                          valid: 7061,
                          cstamp: 1720989931.1,
                          tstamp: 1720989931.1,
                        },
                        {
                          address: 'fe80::1234:5678:9abc:def0',
                          address_type: 'link-local (LL)',
                          family: 'inet6',
                          scope: 'link',
                          flags: ['permanent'],
                          prefixlen: 64,
                          label: 'eth0',
                          prefered: 4294967295,
                          valid: 4294967295,
                          cstamp: 1720989931.1,
                          tstamp: 1720989931.1,
                        },
                      ],
                    },
                    {
                      name: 'wg0',
                      speed: null,
                      type: 'none',
                      flags: ['up', 'pointopoint', 'running', 'noarp', 'lower_up'],
                      state: 'unknown',
                      carrier: true,
                      stats: {
                        rx_bytes: { value: 458.44598, unit: 'MB' },
                        tx_bytes: { value: 5.5895, unit: 'MB' },
                      },
                      addresses: [
                        {
                          address: '10.1.0.1',
                          address_type: 'private',
                          local: '10.1.0.1',
                          local_type: 'private',
                          family: 'inet',
                          scope: 'universe',
                          flags: ['permanent'],
                          prefixlen: 24,
                          label: 'wg0',
                          prefered: 4294967295,
                          valid: 4294967295,
                          cstamp: 1720989931.1,
                          tstamp: 1720989931.1,
                        },
                        {
                          address: 'fd00:4711::1',
                          address_type: 'site-local (ULA)',
                          family: 'inet6',
                          scope: 'global',
                          flags: ['permanent'],
                          prefixlen: 64,
                          label: 'wg0',
                          prefered: 4294967295,
                          valid: 4294967295,
                          cstamp: 1720989931.1,
                          tstamp: 1720989931.1,
                        },
                      ],
                    },
                  ],
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getTeleporterRoute = createRoute({
  method: 'get',
  path: '/teleporter',
  tags: ['Pi-hole configuration'],
  summary: 'Export Pi-hole settings',
  description:
    "Request an archived copy of your Pi-hole's current configuration.\nAuthentication via header or cookie is required for the endpoint.\nThe archive contains the password hashes and the TOTP secret, so application sessions without `webserver.api.app_sudo` cannot export it.\n",
  operationId: 'get_teleporter',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type', example: 'forbidden' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unable to change configuration (read-only)',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Further details',
                      example:
                        'The current CLI session is not allowed to modify Pi-hole config settings',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              description:
                'Forbidden (the session is authenticated but not allowed to perform this action)',
              required: [],
            })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            app_session: {
              summary: 'Application session without sudo mode',
              value: {
                error: {
                  key: 'forbidden',
                  message: 'Unable to export configuration',
                  hint: 'The current app session is not allowed to export Pi-hole config settings (webserver.api.app_sudo is false)',
                },
                took: 0.003,
              },
            },
          },
        },
      },
    },
  },
})

export const postTeleporterRoute = createRoute({
  method: 'post',
  path: '/teleporter',
  tags: ['Pi-hole configuration'],
  summary: 'Import Pi-hole settings',
  description:
    'Upload a Pi-hole Teleporter archive to (partially) restore from it. Note that this will overwrite your current configuration.\nAuthentication via header or cookie is required for the endpoint.\n',
  operationId: 'post_teleporter',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              import: z
                .object({
                  config: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Import Pi-hole configuration', example: true }),
                  dhcp_leases: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Import Pi-hole DHCP leases', example: true }),
                  gravity: z
                    .object({
                      group: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({ description: "Import Pi-hole's groups table", example: true }),
                      adlist: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({ description: "Import Pi-hole's adlist table", example: true }),
                      adlist_by_group: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({
                          description: "Import Pi-hole's table relating adlist entries to groups",
                          example: true,
                        }),
                      domainlist: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({
                          description: "Import Pi-hole's domainlist table",
                          example: true,
                        }),
                      domainlist_by_group: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            "Import Pi-hole's table relating domainlist entries to groups",
                          example: true,
                        }),
                      client: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({ description: "Import Pi-hole's client table", example: true }),
                      client_by_group: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({
                          description: "Import Pi-hole's table relating client entries to groups",
                          example: true,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON object of files to import. If omitted, all files will be imported.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              files: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Files (and gravity tables) imported from the archive' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            teleporter: {
              value: {
                files: [
                  'etc/pihole/pihole.toml',
                  'etc/pihole/gravity.db->group',
                  'etc/pihole/gravity.db->adlist',
                  'etc/pihole/gravity.db->adlist_by_group',
                ],
                took: 0.003,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            invalid_file: {
              summary: 'The uploaded file is not a Teleporter archive',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid file',
                  hint: 'The uploaded file does not appear to be a valid Pi-hole Teleporter archive',
                },
                took: 0.003,
              },
            },
            invalid_archive: {
              summary: 'The archive could not be read',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Invalid request',
                  hint: 'Failed to parse received ZIP archive: failed finding central directory',
                },
                took: 0.003,
              },
            },
            no_file: {
              summary: 'No file in the form data',
              value: {
                error: { key: 'bad_request', message: 'No ZIP archive received', hint: null },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type', example: 'forbidden' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unable to change configuration (read-only)',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Further details',
                      example:
                        'The current CLI session is not allowed to modify Pi-hole config settings',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              description:
                'Forbidden (the session is authenticated but not allowed to perform this action)',
              required: [],
            })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            app_session: {
              summary: 'Application session without sudo mode',
              value: {
                error: {
                  key: 'forbidden',
                  message: 'Unable to change configuration (read-only)',
                  hint: 'The current app session is not allowed to modify Pi-hole config settings (webserver.api.app_sudo is false)',
                },
                took: 0.003,
              },
            },
            cli_session: {
              summary: 'CLI session',
              value: {
                error: {
                  key: 'forbidden',
                  message: 'Unable to change configuration (read-only)',
                  hint: 'The current CLI session is not allowed to modify Pi-hole config settings',
                },
                took: 0.003,
              },
            },
          },
        },
      },
    },
  },
})

export const postActionGravityRoute = createRoute({
  method: 'post',
  path: '/action/gravity',
  tags: ['Actions'],
  summary: 'Run gravity',
  description:
    "Update Pi-hole's adlists by running `pihole -g`. The output of the process is streamed with chunked encoding. Use the optional `color` query parameter to include ANSI color escape codes in the output. Only one run can be in progress at a time, a request while one is running is refused with 409.\n",
  operationId: 'action_gravity',
  request: {
    query: z.object({
      color: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'color',
            in: 'query',
            description:
              "Include ANSI color escape codes in the streamed output. Defaults to false to prevent colored output for API consumers that don't need formatting.",
            schema: { type: 'boolean', default: false, example: true },
            required: false,
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z
            .string()
            .openapi({
              example:
                '[i] Neutrino emissions detected...\n\n[✓] Pulling blocklist source list into range\n\n[i] Preparing new gravity database...\n[✓] Preparing new gravity database\n[i] Using libz compression\n\n[i] Target: https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts\n[✓] Status: Retrieval successful\n[i] Imported 172502 domains, ignoring 3 non-domain entries\n    Sample of non-domain entries:\n      - 0.0.0.0\n      - fe\n      - ff\n[i] List stayed unchanged\n\n[i] Target: https://v.firebog.net/hosts/AdguardDNS.txt\n[✓] Status: No changes detected\n[i] Imported 47225 domains\n\n[✓] Creating new gravity databases\n[✓] Storing downloaded domains in new gravity database\n[✓] Building tree\n[✓] Swapping databases\n[✓] The old database remains available.\n[i] Number of gravity domains: 219727 (215440 unique domains)\n[i] Number of exact blacklisted domains: 0\n[i] Number of regex blacklist filters: 2\n[i] Number of exact whitelisted domains: 0\n[i] Number of regex whitelist filters: 0\n[✓] Cleaning up stray matter\n\n[✓] FTL is listening on port\n   [✓] UDP (IPv4)\n   [✓] TCP (IPv4)\n   [✓] UDP (IPv6)\n   [✓] TCP (IPv6)\n\n[✓] Pi-hole blocking is enabled\n',
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'gravity_running',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Gravity is already running',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Another gravity run is still in progress.\n', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postActionRestartdnsRoute = createRoute({
  method: 'post',
  path: '/action/restartdns',
  tags: ['Actions'],
  summary: 'Restart pihole-FTL',
  description: 'Restarts the pihole-FTL service\n',
  operationId: 'action_restartdns',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Key indicating the status of the request',
                  example: 'success',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postActionFlushLogsRoute = createRoute({
  method: 'post',
  path: '/action/flush/logs',
  tags: ['Actions'],
  summary: 'Flush the DNS logs',
  description:
    "Flushes the DNS logs. This includes emptying the DNS log file and purging the most recent 24 hours from both the database and FTL's internal memory.\n",
  operationId: 'action_flushlogs',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Key indicating the status of the request',
                  example: 'success',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const postActionFlushArpRoute = createRoute({
  method: 'post',
  path: '/action/flush/arp',
  tags: ['Actions'],
  summary: 'Flush the network table',
  description:
    "Deprecated! Use '/action/flush/network' instead.\nFlushes the network table. This includes removing both all known devices and their associated addresses.\n",
  operationId: 'action_flusharp',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Key indicating the status of the request',
                  example: 'success',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type', example: 'forbidden' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: '<Action name> is not allowed',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'No additional data available',
                      example: 'Check setting webserver.api.allow_destructive',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              description: 'The request was valid, but the server is refusing the action.\n',
              required: [],
            }),
        },
      },
    },
  },
  deprecated: true,
})

export const postActionFlushNetworkRoute = createRoute({
  method: 'post',
  path: '/action/flush/network',
  tags: ['Actions'],
  summary: 'Flush the network table',
  description:
    'Flushes the network table. This includes removing both all known devices and their associated addresses.\n',
  operationId: 'action_flushnetwork',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Key indicating the status of the request',
                  example: 'success',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type', example: 'forbidden' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: '<Action name> is not allowed',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'No additional data available',
                      example: 'Check setting webserver.api.allow_destructive',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              description: 'The request was valid, but the server is refusing the action.\n',
              required: [],
            })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getDhcpLeasesRoute = createRoute({
  method: 'get',
  path: '/dhcp/leases',
  tags: ['DHCP'],
  summary: 'Get currently active DHCP leases',
  description: 'This API hook returns the currently active DHCP leases.\n',
  operationId: 'get_dhcp',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              leases: z
                .array(
                  z
                    .object({
                      expires: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Expiration time (0 = infinite lease, never expires)',
                          example: 1675671991,
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Hostname', example: 'raspberrypi' }),
                      hwaddr: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Hardware (MAC) address',
                          example: '00:00:00:00:00:00',
                        }),
                      ip: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'IP address', example: '192.168.2.111' }),
                      clientid: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Client ID', example: '00:00:00:00:00:00' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'DHCP leases' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const deleteDhcpLeasesIpRoute = createRoute({
  method: 'delete',
  path: '/dhcp/leases/{ip}',
  tags: ['DHCP'],
  summary: 'Remove DHCP lease',
  description:
    'This API hook removes a currently active DHCP lease.\nManaging DHCP leases is only possible when the DHCP server is enabled.\n*Note:* There will be no content on success.\n',
  operationId: 'delete_dhcp',
  request: {
    params: z.object({
      ip: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip',
            schema: { type: 'string' },
            required: true,
            description: 'IP address of lease to be modified',
            example: '192.168.2.222',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Item deleted' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Machine-readable error type' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Human-readable error message' }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Further details' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Bad request', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            invalid_ip: {
              summary:
                'The ip in the URI is missing or not a valid IP address (the hint is the received ip)',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'The provided IP address is invalid',
                  hint: '192.168.2',
                },
                took: 0.003,
              },
            },
            delete_failed: {
              summary: 'The lease could not be deleted',
              value: {
                error: {
                  key: 'bad_request',
                  message: 'Failed to delete DHCP lease',
                  hint: 'DHCP is not enabled',
                },
                took: 0.003,
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
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z
            .object({
              took: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Time in seconds it took to process the request',
                  example: 0.003,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchDomainRoute = createRoute({
  method: 'get',
  path: '/search/{domain}',
  tags: ['List management'],
  summary: "Search domains in Pi-hole's lists",
  description:
    "Search for domains in Pi-hole's list. The specified domain is automatically converted to lowercase.\nThe optional parameters `N` and `partial` limit the maximum number of returned records and whether partial matches should be returned, respectively.\nThere is a hard upper limit of `N` defined in FTL (currently set to 10,000) to ensure that the response is not too large.\nABP matches are not returned when partial matching is requested.\nInternational domains names (IDNs) are internally converted to punycode before matching.\n",
  operationId: 'get_search',
  request: {
    params: z.object({
      domain: z
        .string()
        .default('')
        .openapi({
          param: {
            name: 'domain',
            in: 'path',
            description: '(Part of) domain to be searched for',
            schema: { type: 'string', default: '', example: 'doubleclick.net' },
            required: true,
          },
          example: 'doubleclick.net',
        }),
    }),
    query: z.object({
      partial: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'partial',
            in: 'query',
            description: 'Is partial matching requested?',
            required: false,
            schema: { type: 'boolean', default: false, example: false },
          },
          example: false,
        }),
      N: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'N',
            in: 'query',
            description: 'Maximum number of results to be returned',
            required: false,
            schema: { type: 'integer', default: 20, example: 20 },
          },
          example: 20,
        }),
      debug: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'debug',
            in: 'query',
            description: 'Add debug information to the response',
            required: false,
            schema: { type: 'boolean', default: false, example: false },
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              search: z
                .object({
                  domains: z
                    .array(
                      z
                        .object({
                          domain: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'blockeddomain.com' }),
                          comment: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Optional comment',
                              example: 'I needed to block this because of XYZ',
                            }),
                          enabled: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Whether this entry is enabled',
                              example: true,
                            }),
                          type: z
                            .enum(['allow', 'deny'])
                            .exactOptional()
                            .openapi({
                              description: 'String specifying domain type',
                              example: 'allow',
                            }),
                          kind: z
                            .enum(['exact', 'regex'])
                            .exactOptional()
                            .openapi({
                              description: 'String specifying domain kind',
                              example: 'exact',
                            }),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Database ID', example: 7 }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of addition',
                              example: 1664624500,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last modification',
                              example: 1664624500,
                            }),
                          groups: z
                            .array(z.int())
                            .exactOptional()
                            .openapi({
                              description: 'Array of IDs corresponding to associated groups',
                              example: [0, 1, 2],
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  gravity: z
                    .array(
                      z
                        .object({
                          domain: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'doubleclick.net' }),
                          address: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Address of the list this domain was found on',
                              example:
                                'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
                            }),
                          comment: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Optional comment of the list',
                              example: 'I needed to block this because of XYZ',
                            }),
                          enabled: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Whether this list is enabled',
                              example: true,
                            }),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Database ID of the associated list',
                              example: 0,
                            }),
                          type: z
                            .enum(['allow', 'block'])
                            .exactOptional()
                            .openapi({ description: 'String specifying list type' }),
                          date_added: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of list addition',
                              example: 1664624500,
                            }),
                          date_modified: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last list modification',
                              example: 1664624500,
                            }),
                          date_updated: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Unix timestamp of last local update of this list',
                              example: 1664624500,
                            }),
                          number: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of entries in the list', example: 7 }),
                          invalid_domains: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of invalid domains in the list',
                              example: 0,
                            }),
                          abp_entries: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of ABP entries in the list',
                              example: 0,
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Status of the list', example: 1 }),
                          groups: z
                            .array(z.int())
                            .exactOptional()
                            .openapi({
                              description: 'Array of IDs corresponding to associated groups',
                              example: [0, 1, 2],
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  parameters: z
                    .object({
                      partial: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether partial matching was requested. Note that partial matching may not find complex regex entries.',
                          example: false,
                        }),
                      N: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Maximum number of results to be returned (per type)',
                          example: 20,
                        }),
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: '(Part of) domain to be searched for',
                          example: 'doubleclick.net',
                        }),
                      debug: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Whether debug information was requested',
                          example: false,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  results: z
                    .object({
                      domains: z
                        .object({
                          exact: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of exactly matching domains',
                              example: 1,
                            }),
                          regex: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of regex matching domains',
                              example: 2,
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      gravity: z
                        .object({
                          allow: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of allow matches (antigravity)',
                              example: 0,
                            }),
                          block: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Number of block matches (gravity)',
                              example: 1,
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of matches', example: 4 }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})

export const getDocsRoute = createRoute({
  method: 'get',
  path: '/docs',
  tags: ['Documentation'],
  summary: 'Get the embedded API documentation rendered as HTML',
  description:
    'This API hook returns the embedded API documentation rendered as HTML. Note that this endpoint is supposed to be accessed from web browsers only. The automatically generated `curl` example will *not* create a *full* (as in: self-contained) clone of the documentation.\n',
  operationId: 'get_docs',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              description: 'HTML document',
              example:
                '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>API Documentation</title>\n</body>\n</html>\n',
            }),
        },
      },
    },
  },
  security: [],
})

export const getPaddRoute = createRoute({
  method: 'get',
  path: '/padd',
  tags: ['PADD'],
  summary: 'Get summarized data for PADD',
  operationId: 'get_padd',
  request: {
    query: z.object({
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            description: '(Optional) Return full data',
            name: 'full',
            schema: { type: 'boolean' },
            required: false,
            example: true,
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
            .object({
              recent_blocked: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Most recent blocked domain', example: 'bad.example.com' }),
              top_domain: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Most requested domain', example: 'good.example.com' }),
              top_blocked: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Most blocked domain', example: 'bad.example.com' }),
              top_client: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Most active client', example: 'localhost' }),
              active_clients: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of active clients', example: 22 }),
              gravity_size: z
                .int()
                .exactOptional()
                .openapi({ description: 'Gravity list size', example: 225382 }),
              blocking: z
                .string()
                .exactOptional()
                .openapi({ description: 'Blocking status', example: 'enabled' }),
              queries: z
                .object({
                  total: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Total number of queries within the last 24 hours',
                      example: 92258,
                    }),
                  blocked: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of blocked queries', example: 4784 }),
                  percent_blocked: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Percentage of blocked queries', example: 5.18 }),
                  query_frequency: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Average number of queries per second', example: 1.1 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              cache: z
                .object({
                  size: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total cache size', example: 10000 }),
                  inserted: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of inserted cache entries', example: 233 }),
                  evicted: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of evicted cache entries', example: 0 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              iface: z
                .object({
                  v4: z
                    .object({
                      addr: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Primary address', example: '192.168.2.11' }),
                      rx_bytes: z
                        .object({
                          value: z.number().exactOptional().openapi({ example: 76.46 }),
                          unit: z.string().exactOptional().openapi({ example: 'G' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Received bytes', required: [] }),
                      tx_bytes: z
                        .object({
                          value: z.number().exactOptional().openapi({ example: 68.58 }),
                          unit: z.string().exactOptional().openapi({ example: 'G' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Transmitted bytes', required: [] }),
                      num_addrs: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of addresses on the interface',
                          example: 1,
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Interface name', example: 'eth0' }),
                      gw_addr: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Gateway address', example: '192.168.2.1' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'IPv4 interface', required: [] }),
                  v6: z
                    .object({
                      addr: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Primary address',
                          example: 'fe80::b0e4:1b1e:7b7d:5855',
                        }),
                      num_addrs: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of addresses on the interface',
                          example: 3,
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Interface name', example: 'eth0' }),
                      gw_addr: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'Gateway address',
                          example: 'fe80::b0e4:1b1e:7b7d:1b1e',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'IPv6 interface', required: [] }),
                })
                .exactOptional()
                .openapi({ description: 'Default interfaces', required: [] }),
              node_name: z
                .string()
                .exactOptional()
                .openapi({ description: "Pi-hole host's name", example: 'pihole' }),
              host_model: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Host model',
                  example: 'Raspberry Pi 3 Model B Plus Rev 1.3',
                }),
              config: z
                .object({
                  dhcp_active: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'DHCP server status', example: true }),
                  dhcp_start: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'DHCP start address', example: '192.168.0.1' }),
                  dhcp_end: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'DHCP end address', example: '192.168.0.254' }),
                  dhcp_ipv6: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'DHCPv6 server status', example: false }),
                  dns_domain: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'DNS domain', example: 'lan' }),
                  dns_port: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'DNS port', example: 53 }),
                  dns_num_upstreams: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of upstream DNS servers', example: 1 }),
                  dns_dnssec: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'DNSSEC status', example: true }),
                  dns_revServer_active: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Reverse DNS server status', example: false }),
                  privacy_level: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Privacy level', example: 0 }),
                })
                .exactOptional()
                .openapi({ description: 'Pi-hole configuration (excerpt)', required: [] }),
              '%cpu': z.number().exactOptional().openapi({ description: 'CPU usage', example: 0 }),
              '%mem': z
                .number()
                .exactOptional()
                .openapi({ description: 'Memory usage', example: 1.5 }),
              pid: z
                .int()
                .exactOptional()
                .openapi({ description: "FTL's process ID", example: 1639 }),
              sensors: z
                .object({
                  cpu_temp: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'CPU temperature', example: 45 }),
                  hot_limit: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Temperature limit', example: 80 }),
                  unit: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Temperature unit', example: 'C' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  system: z
                    .object({
                      uptime: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'How long the system has been running (seconds)',
                          example: 67906,
                        }),
                      memory: z
                        .object({
                          ram: z
                            .object({
                              total: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Total RAM', example: 10317877 }),
                              free: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Total free RAM', example: 308736 }),
                              used: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Used RAM', example: 8920416 }),
                              available: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Total available RAM', example: 972304 }),
                              '%used': z
                                .number()
                                .exactOptional()
                                .openapi({ description: 'Used RAM in percent', example: 26.854 }),
                            })
                            .exactOptional()
                            .openapi({ description: 'RAM', required: [] }),
                          swap: z
                            .object({
                              total: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Total swap', example: 10317877 }),
                              used: z
                                .int()
                                .exactOptional()
                                .openapi({ description: 'Used swap', example: 8920416 }),
                              free: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description: 'Total free swap memory',
                                  example: 308736,
                                }),
                              '%used': z
                                .number()
                                .exactOptional()
                                .openapi({ description: 'Used swap in percent', example: 1.67 }),
                            })
                            .exactOptional()
                            .openapi({ description: 'swap memory', required: [] }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Memory info given in kilobytes', required: [] }),
                      procs: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of current processes', example: 1452 }),
                      cpu: z
                        .object({
                          nprocs: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Number of available processors', example: 8 }),
                          '%cpu': z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Total CPU usage in percent (may be higher than 100% on multi-core systems and negative if the value cannot be computed)',
                              example: 0,
                            }),
                          load: z
                            .object({
                              raw: z
                                .array(z.number())
                                .exactOptional()
                                .openapi({
                                  description: 'raw values',
                                  example: [0.58837890625, 0.64990234375, 0.66748046875],
                                }),
                              percent: z
                                .array(z.number())
                                .exactOptional()
                                .openapi({
                                  description: 'raw values',
                                  example: [
                                    4.903157711029053, 5.415853023529053, 5.562337398529053,
                                  ],
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: '1, 5, and 15 minute load averages',
                              required: [],
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'CPU info', required: [] }),
                      ftl: z
                        .object({
                          '%mem': z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'Percentage of total RAM memory used by FTL',
                              example: 0.1,
                            }),
                          '%cpu': z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'Percentage of total CPU used by FTL',
                              example: 1.2,
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'FTL process info', required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  version: z
                    .object({
                      core: z
                        .object({
                          local: z
                            .object({
                              branch: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole Core branch',
                                  example: 'development',
                                }),
                              version: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole Core version',
                                  example: 'v6.1',
                                }),
                              hash: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole Core hash',
                                  example: '955e36a9',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          remote: z
                            .object({
                              version: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Remote (Github) Pi-hole Core version (null if on custom branch)',
                                  example: 'v6.1',
                                }),
                              hash: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Remote (Github) Pi-hole Core hash',
                                  example: '955e36a9',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      web: z
                        .object({
                          local: z
                            .object({
                              branch: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole Web branch',
                                  example: 'devel',
                                }),
                              version: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole Web version',
                                  example: 'v6.1',
                                }),
                              hash: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole Web hash',
                                  example: 'f69f7e88',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          remote: z
                            .object({
                              version: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Remote (Github) Pi-hole Web version (null if on custom branch)',
                                  example: 'v6.1',
                                }),
                              hash: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Remote (Github) Pi-hole Web hash',
                                  example: 'f69f7e88',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ftl: z
                        .object({
                          local: z
                            .object({
                              branch: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole FTL branch',
                                  example: 'development',
                                }),
                              version: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole FTL version',
                                  example: 'v6.1',
                                }),
                              hash: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Local Pi-hole FTL hash',
                                  example: '64441ed6-dirty',
                                }),
                              date: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Build time of your local Pi-hole FTL',
                                  example: '2023-01-09 20:25:24 +0100',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          remote: z
                            .object({
                              version: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Remote (Github) Pi-hole FTL version (null if on custom branch)',
                                  example: 'v6.1',
                                }),
                              hash: z
                                .string()
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'Remote (Github) Pi-hole FTL hash',
                                  example: '64441ed6',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      docker: z
                        .object({
                          local: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Local Pi-hole Docker image version (`null` if not running in Docker)',
                              example: 'v6.1',
                            }),
                          remote: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Remote (Docker Hub) Pi-hole Docker image version (`null` if not running in Docker)',
                              example: 'v6.1',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Machine-readable error type',
                      example: 'unauthorized',
                    }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Human-readable error message',
                      example: 'Unauthorized',
                    }),
                  hint: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'No additional data available', example: null }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ description: 'Authentication required', required: [] })
            .and(
              z
                .object({
                  took: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Time in seconds it took to process the request',
                      example: 0.003,
                    }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
})
