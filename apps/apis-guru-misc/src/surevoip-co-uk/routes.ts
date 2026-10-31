import { createRoute, z } from '@hono/zod-openapi'

const BasicAuthSecurityScheme = { description: 'Basic HTTP Auth', scheme: 'basic', type: 'http' }

const OAuth2SecurityScheme = {
  description: 'OpenID Certified OAuth 2.0 Server and OpenID Connect Provider',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://authz.surevoip.co.uk/oauth2/auth',
      refreshUrl: 'https://authz.surevoip.co.uk/oauth2/token',
      scopes: {
        offline: 'Include this scope if you wish to receive a refresh token',
        offline_access: 'Include this scope if you wish to receive a refresh token',
        openid: 'Include this scope if you wish to perform an OpenID Connect request',
      },
      tokenUrl: 'https://authz.surevoip.co.uk/oauth2/token',
    },
    clientCredentials: {
      scopes: {
        offline: 'Include this scope if you wish to receive a refresh token',
        offline_access: 'Include this scope if you wish to receive a refresh token',
        openid: 'Include this scope if you wish to perform an OpenID Connect request',
      },
      tokenUrl: 'https://authz.surevoip.co.uk/oauth2/token',
    },
    implicit: {
      authorizationUrl: 'https://authz.surevoip.co.uk/oauth2/auth',
      refreshUrl: 'https://authz.surevoip.co.uk/oauth2/token',
      scopes: {
        offline: 'Include this scope if you wish to receive a refresh token',
        offline_access: 'Include this scope if you wish to receive a refresh token',
        openid: 'Include this scope if you wish to perform an OpenID Connect request',
      },
    },
  },
  type: 'oauth2',
}

const OpenIDConnectSecurityScheme = {
  description: 'OpenID Certified OAuth 2.0 Server and OpenID Connect Provider',
  openIdConnectUrl: 'https://authz.surevoip.co.uk/.well-known/openid-configuration',
  type: 'openIdConnect',
}

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['global'],
  summary: 'List global resources',
  request: {
    query: z.object({
      hypermedia: z
        .enum(['yes', 'no'])
        .default('yes')
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable Hypermedia',
            in: 'query',
            name: 'hypermedia',
            schema: { default: 'yes', enum: ['yes', 'no'], type: 'string' },
            required: false,
          },
        }),
      'content-type': z
        .enum(['application/json', 'text/html', 'text/xml', 'application/xml'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Content Type',
            in: 'query',
            name: 'content-type',
            schema: {
              default: 'application/json',
              enum: ['application/json', 'text/html', 'text/xml', 'application/xml'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return Status OK and/or resource list',
      content: {
        'application/json': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
        'text/xml': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/announcements',
  tags: ['announcements'],
  summary: 'List global announcements',
  responses: {
    200: {
      description: 'Return Status OK and/or resource list',
      content: {
        'application/json': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
        'text/xml': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAnnouncementsRoute = createRoute({
  method: 'post',
  path: '/announcements',
  tags: ['announcements'],
  summary: 'Add a new announcement audio file',
  request: {
    body: {
      description:
        'Upload a wav file to be used in other parts of the API - 10Mb limit, ending in .wav',
      content: {
        'multipart/form-data': {
          schema: z
            .object({ description: z.string().exactOptional(), file: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'File created on filesystem.',
      content: {
        'application/json': {
          schema: z
            .object({
              announcement: z
                .object({
                  creation_date: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  file_internal: z.string().exactOptional(),
                  filename: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  size: z.int().exactOptional(),
                  src_ip_address: z.string().exactOptional(),
                  url: z
                    .object({
                      download: z.string().exactOptional(),
                      href: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad data',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({ field: z.string(), message: z.array(z.string()) })
                  .openapi({ required: ['message', 'field'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    403: {
      description:
        'Sorry, you have reached your max quota of 10 announcement files. Please delete some.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Problem saving file',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAreacodesRoute = createRoute({
  method: 'get',
  path: '/areacodes',
  tags: ['areacodes'],
  summary: 'List areacodes',
  responses: { 200: { description: 'OK' } },
})

export const getBillingRoute = createRoute({
  method: 'get',
  path: '/billing',
  tags: ['billing'],
  summary: 'List global billing detail',
  responses: { 200: { description: 'OK' } },
})

export const getCallsRoute = createRoute({
  method: 'get',
  path: '/calls',
  tags: ['calls'],
  summary: 'Validate a phone number by calling it once',
  request: {
    query: z.object({
      validate: z
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
            description:
              'Validate a phone number by calling it for one ring. Note; not 100% proof the number is in service.',
            example: 441224900123,
            in: 'query',
            name: 'validate',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad query data',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({ field: z.string(), message: z.array(z.string()) })
                  .openapi({ required: ['message', 'field'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: 'Only partners or admins can list all live calls.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCallsRoute = createRoute({
  method: 'post',
  path: '/calls',
  tags: ['calls'],
  summary: 'Create phone calls with or without announcements and scheduled hangups',
  request: {
    body: {
      description: 'Create a phone call and play announcement audio to the "from" party (a leg)',
      content: {
        'application/json': {
          schema: z
            .object({
              announcement_at: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'is in seconds. Just take 120 secs away from the hangup_at time for a announcement to be played 2 mins before the end of the call. If provided announcement_id is required\n',
                  example: 180,
                }),
              announcement_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'is the announcement id (from https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}) to play for example “your call is about to end in 2 mins”. We only allow a wav file, but we may allow "words", which will use SureVoIP provided text to speech. If provided announcement_at is required\n',
                  example: 'hgCRVfWB4hGRSEAkICyA',
                }),
              caller_id: z
                .string()
                .openapi({
                  description: 'The caller ID to show the b leg (to).',
                  example: 1224900123,
                }),
              from: z
                .string()
                .openapi({
                  description:
                    'The person making the call, i.e the a leg. This person must answer in order for the b leg to be rung',
                  example: 442035159999,
                }),
              hangup_announcement_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'the id of a thank you announcement or similar. You can manage these as you would with any RESTful resource at https://api.surevoip.co.uk/announcements and https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}. It will be played at the end of the call at hangup. If provided hangup_at is required.\n',
                  example: 'RVfWB4hGRSEAkIXYCyA',
                }),
              hangup_at: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'length in seconds from when the call is *answered* to when the system hangs up. If "hangup_announcement_id" is present, this will be played at hangup\n',
                  example: 300,
                }),
              options: z
                .object({
                  a_leg_caller_id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Change the caller ID shown to the a leg (from)',
                      example: 1224900123,
                    }),
                  a_leg_only: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Do not ring the "to" number, only the from and show "caller_id"',
                      example: 1,
                    }),
                  cancel_key: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The phone keypad number to press to hangup the call and not place the second leg of the call. Default 2',
                      example: 2,
                    }),
                  connect_key: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The phone keypad number to press in order to place the call to the b leg, i.e. press to confirm. Default 1',
                      example: 1,
                    }),
                  play_audio: z
                    .array(
                      z
                        .object({
                          announcement_id: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Id of announcement audio file which will play to the a leg of the call, i.e. the person that must answer the call first. This plays one or more audio files you have uploaded. The use case being you want to play audio to let the a leg of the call know what the call is about. Imagine a call center agent needs to know that they are calling a customer. These audio files may play a customer account number to the agent for example. \nHave lots of audio files in this array to build up a message\n',
                              example: 'zgL4QmsB6hGmv5YnsW_4lQ',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              to: z
                .string()
                .openapi({
                  description: 'The b leg of the call, i.e. the person you are calling',
                  example: 442035159995,
                }),
            })
            .openapi({ required: ['to', 'from', 'caller_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Call creation request accepted.',
      content: {
        'application/json': {
          schema: z
            .object({ Call: z.string().exactOptional(), Location: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          description: 'URL of created call to monitor',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL of created call to monitor', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad data',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({ field: z.string(), message: z.array(z.string()) })
                  .openapi({ required: ['message', 'field'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    403: {
      description: 'Only customer accounts can create calls.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    500: { description: 'Issue with API interface to core platform.' },
  },
})

export const getChargesRoute = createRoute({
  method: 'get',
  path: '/charges',
  tags: ['charges'],
  summary: 'List charges',
  responses: { 200: { description: 'OK' } },
})

export const postChargesRoute = createRoute({
  method: 'post',
  path: '/charges',
  tags: ['charges'],
  summary: 'Create charges for invoices',
  responses: { 201: { description: 'Created,' } },
})

export const getContactsRoute = createRoute({
  method: 'get',
  path: '/contacts',
  tags: ['contacts'],
  summary: 'List contacts',
  responses: { 200: { description: 'OK' } },
})

export const getCustomersRoute = createRoute({
  method: 'get',
  path: '/customers',
  tags: ['customers'],
  summary: 'List all customers or find your own account',
  responses: {
    302: {
      description: 'Found',
      content: {
        'application/json': {
          schema: z.object({ location: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      headers: z.object({
        Location: {
          description: 'URL of customer account',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL of customer account', param: { required: false } }),
        },
      }),
      links: {
        GetCustomer: {
          operationId: 'getCustomer',
          parameters: { account: '$response.body#/location' },
          description: "The 'location' URL contains the customer account\n",
        },
      },
    },
  },
})

export const getCustomersAccountRoute = createRoute({
  method: 'get',
  path: '/customers/{account}',
  tags: ['customers'],
  summary: 'Represents a customer',
  operationId: 'getCustomer',
  request: {
    params: z.object({
      account: z
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
            description: 'Account ID of customer',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Found',
      content: {
        'application/json': {
          schema: z
            .object({
              address: z.string().exactOptional(),
              balance: z.int().exactOptional(),
              city: z.string().exactOptional(),
              company_name: z.string().exactOptional(),
              company_website: z.string().exactOptional(),
              country: z.string().exactOptional(),
              creditlimit: z.string().exactOptional(),
              email: z.string().exactOptional(),
              fax: z.string().exactOptional(),
              firstname: z.string().exactOptional(),
              lastname: z.string().exactOptional(),
              phone: z.string().exactOptional(),
              postcode: z.string().exactOptional(),
              state: z.string().exactOptional(),
              username: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCustomersAccountAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/customers/{account}/announcements',
  tags: ['announcements'],
  summary: 'List of announcement audio files',
  request: {
    params: z.object({
      account: z
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
            description: 'Account ID of customer',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'integer' },
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
              list: z
                .array(
                  z
                    .object({
                      announcement: z
                        .object({
                          creation_date: z.string().exactOptional(),
                          description: z.string().exactOptional(),
                          file_internal: z.string().exactOptional(),
                          filename: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          size: z.int().exactOptional(),
                          src_ip_address: z.string().exactOptional(),
                          url: z
                            .object({
                              download: z.string().exactOptional(),
                              href: z.string().exactOptional(),
                              title: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCustomersAccountAnnouncementsAnnouncementIdRoute = createRoute({
  method: 'get',
  path: '/customers/{account}/announcements/{announcement_id}',
  tags: ['announcements'],
  summary: 'Represents an announcement audio file',
  request: {
    params: z.object({
      account: z
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
            description: 'Account ID of customer',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      announcement_id: z
        .string()
        .openapi({
          param: {
            description: 'Announcement ID of audio file',
            in: 'path',
            name: 'announcement_id',
            required: true,
            schema: { type: 'string' },
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
              announcement: z
                .object({
                  creation_date: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  file_internal: z.string().exactOptional(),
                  filename: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  size: z.int().exactOptional(),
                  src_ip_address: z.string().exactOptional(),
                  url: z
                    .object({
                      download: z.string().exactOptional(),
                      href: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteCustomersAccountAnnouncementsAnnouncementIdRoute = createRoute({
  method: 'delete',
  path: '/customers/{account}/announcements/{announcement_id}',
  tags: ['announcements'],
  summary: 'Delete an announcement audio file',
  request: {
    params: z.object({
      account: z
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
            description: 'Account ID of customer',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      announcement_id: z
        .string()
        .openapi({
          param: {
            description: 'Announcement ID of audio file',
            in: 'path',
            name: 'announcement_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    410: {
      description: 'Gone',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getFaxesRoute = createRoute({
  method: 'get',
  path: '/faxes',
  tags: ['faxes'],
  summary: 'List global ongoing faxes',
  responses: { 200: { description: 'OK' } },
})

export const getHostedRoute = createRoute({
  method: 'get',
  path: '/hosted',
  tags: ['hosted'],
  summary: 'List Hosted VoIP domains',
  responses: { 200: { description: 'OK' } },
})

export const getIpAddressRoute = createRoute({
  method: 'get',
  path: '/ip-address',
  tags: ['support'],
  summary: 'Return the IP address from where your API request originated',
  responses: { 200: { description: 'OK' } },
  security: [],
})

export const getMobileRoute = createRoute({
  method: 'get',
  path: '/mobile',
  tags: ['mobile'],
  summary: 'List mobile accounts',
  responses: { 200: { description: 'OK' } },
})

export const getNumbersRoute = createRoute({
  method: 'get',
  path: '/numbers',
  tags: ['numbers'],
  summary: 'List available SureVoIP Ofcom number allocations for purchase',
  responses: { 200: { description: 'OK' } },
  security: [],
})

export const getNumbersAreacodesRoute = createRoute({
  method: 'get',
  path: '/numbers/areacodes',
  tags: ['areacodes'],
  summary: 'Search available numbers by areacode',
  description: 'You can search by area name, area code or filter using both.\n',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
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
              name: z.string(),
            })
            .openapi({ required: ['id', 'name'] }),
        },
      },
    },
  },
  security: [],
})

export const getPartnersRoute = createRoute({
  method: 'get',
  path: '/partners',
  tags: ['partners'],
  summary: 'List SureVoIP Partner accounts',
  responses: { 200: { description: 'OK' } },
})

export const getPortingRoute = createRoute({
  method: 'get',
  path: '/porting',
  tags: ['porting'],
  summary: 'List ported numbers',
  responses: { 200: { description: 'OK' } },
})

export const getServiceStatusRoute = createRoute({
  method: 'get',
  path: '/service-status',
  tags: ['support'],
  summary: 'List all Service Status messages',
  responses: { 200: { description: 'OK' } },
  security: [],
})

export const getSipRoute = createRoute({
  method: 'get',
  path: '/sip',
  tags: ['sip'],
  summary: 'List all SIP accounts',
  responses: { 200: { description: 'OK' } },
})

export const getSmsRoute = createRoute({
  method: 'get',
  path: '/sms',
  tags: ['sms'],
  summary: 'List SMS',
  responses: { 200: { description: 'OK' } },
})

export const postSupportEchoRoute = createRoute({
  method: 'post',
  path: '/support/echo',
  tags: ['echo'],
  summary: 'Return your POSTed data for testing',
  responses: { 200: { description: 'OK' } },
})

export const getSupportIpAddressRoute = createRoute({
  method: 'get',
  path: '/support/ip-address',
  tags: ['support'],
  summary: 'Return the IP address from where your API request originated',
  responses: { 200: { description: 'OK' } },
  security: [],
})

export const getSupportServiceStatusRoute = createRoute({
  method: 'get',
  path: '/support/service-status',
  tags: ['support'],
  summary: 'List all Service Status messages',
  responses: { 200: { description: 'OK' } },
  security: [],
})

export const getTopupsRoute = createRoute({
  method: 'get',
  path: '/topups',
  tags: ['topups'],
  summary: 'List all account credit topups',
  responses: { 200: { description: 'OK' } },
})
