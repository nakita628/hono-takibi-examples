import { createRoute, z } from '@hono/zod-openapi'

const UserKeySecurityScheme = { in: 'header', name: 'user_key', type: 'apiKey' }

export const getApiV1CompanyAnnouncementIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/announcement/{id}',
  tags: ['v1-company'],
  summary: 'Retrieves announcement data',
  description: 'Request full announcement data identified by announcement id',
  operationId: 'CompanyAnnouncement',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'announcement hex ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of announcements',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                countryCode: z.string().exactOptional(),
                id: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                structured: z.string().exactOptional(),
                text: z.string().exactOptional(),
                time: z.iso.date().exactOptional(),
                type: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1CompanyDeepsearchIsinRoute = createRoute({
  method: 'post',
  path: '/api/v1/company/deepsearch/isin',
  tags: ['v1-company'],
  summary: 'Retrieves a list of stock exchange listings',
  description:
    'Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.',
  operationId: 'CompanyDeepsearchISIN',
  request: {
    body: {
      description: 'ISIN bulk deepsearch parameters',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              isin: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A list of ISIN numbers seperated by comma (maximum) is 100',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Result of a lookup by ISIN number',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                isin: z.string().exactOptional(),
                listings: z
                  .array(
                    z
                      .object({
                        additionalSecurityType: z.string().exactOptional(),
                        exchCode: z.string().exactOptional(),
                        identifier: z.string().exactOptional(),
                        marketSector: z.string().exactOptional(),
                        name: z.string().exactOptional(),
                        securityDescription: z.string().exactOptional(),
                        securityType: z.string().exactOptional(),
                        shareClassId: z.string().exactOptional(),
                        stockId: z.string().exactOptional(),
                        symbol: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                validIsin: z.boolean().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyDeepsearchLeiNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/deepsearch/lei/{number}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of companies',
  description:
    'Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.',
  operationId: 'CompanyDeepsearchLEI',
  request: {
    params: z.object({
      number: z
        .string()
        .openapi({
          param: {
            description: 'lei number',
            in: 'path',
            name: 'number',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination for the ISIN number results (1000 numbers per page)',
            example: 1,
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a lookup by LEI number',
      content: {
        'application/json': {
          schema: z
            .object({
              company: z
                .object({
                  address: z.array(z.string()).exactOptional(),
                  country: z.string(),
                  dateOfIncorporation: z.string().exactOptional(),
                  extraData: z.object({}).exactOptional(),
                  formattedAddress: z.array(z.string()).exactOptional(),
                  id: z.string(),
                  legalForm: z.string().exactOptional(),
                  managingDirectors: z.array(z.string()).exactOptional(),
                  name: z.string(),
                  registrationNumber: z.string(),
                  requestTime: z.int().exactOptional(),
                  secretaries: z.array(z.string()).exactOptional(),
                  sicNaceCodes: z.array(z.string()).exactOptional(),
                  status: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
              current_page: z.int32().exactOptional(),
              isins: z.array(z.string()).exactOptional(),
              last_page: z.int32().exactOptional(),
              lei: z.string().exactOptional(),
              next_page: z.string().exactOptional(),
              total_num_isins: z.int32().exactOptional(),
              validLei: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyDeepsearchNameCountryNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/deepsearch/name/{country}/{name}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of companies from the official business register',
  description:
    'Search for companies with a certain name. Search is forwarded to the respective business register of the country.',
  operationId: 'CompanyDeepsearchName',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'company name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of companies',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                address: z.array(z.string()).exactOptional(),
                country: z.string().exactOptional(),
                dateOfIncorporation: z.string().exactOptional(),
                extraData: z.object({}).exactOptional(),
                formattedAddress: z.array(z.string()).exactOptional(),
                id: z.string().exactOptional(),
                legalForm: z.string().exactOptional(),
                managingDirectors: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                requestTime: z.int().exactOptional(),
                secretaries: z.array(z.string()).exactOptional(),
                sicNaceCodes: z.array(z.string()).exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyDeepsearchNumberCountryNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/deepsearch/number/{country}/{number}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of companies from the official business register',
  description:
    'Search for companies with a certain register number. Search is forwarded to the respective business register of the country.',
  operationId: 'CompanyDeepsearchNumber',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      number: z
        .string()
        .openapi({
          param: {
            description: 'company registration number',
            in: 'path',
            name: 'number',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of companies',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                address: z.array(z.string()).exactOptional(),
                country: z.string().exactOptional(),
                dateOfIncorporation: z.string().exactOptional(),
                extraData: z.object({}).exactOptional(),
                formattedAddress: z.array(z.string()).exactOptional(),
                id: z.string().exactOptional(),
                legalForm: z.string().exactOptional(),
                managingDirectors: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                requestTime: z.int().exactOptional(),
                secretaries: z.array(z.string()).exactOptional(),
                sicNaceCodes: z.array(z.string()).exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyMonitoringChangeTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/monitoring/changeTypes',
  tags: ['v1-company'],
  summary: 'Get available ChangeTypes',
  description: 'Get current list of available ChangeTypes to subscribe to',
  operationId: 'CompanyMonitorChangeTypesList',
  responses: {
    200: {
      description: 'List of ChangeTypes',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyMonitoringListRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/monitoring/list',
  tags: ['v1-company'],
  summary: 'Retrieves a list of registered monitors',
  description: 'Query list of all registered monitors for logged in user',
  operationId: 'CompanyMonitorList',
  responses: {
    200: {
      description: 'List of monitor webhooks',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                callbackCount: z.int32().exactOptional(),
                callbackUrl: z.string().exactOptional(),
                created: z.iso.date().exactOptional(),
                monitorStatus: z.string().exactOptional(),
                notificationId: z.string().exactOptional(),
                subjectId: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyMonitoringListIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/monitoring/list/{id}',
  tags: ['v1-company'],
  summary: 'Get monitor status for specific company id',
  description:
    'Query status of registered monitors for a specific company identified by a company id',
  operationId: 'CompanyMonitorId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Company Hex ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of monitor webhooks',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                callbackCount: z.int32().exactOptional(),
                callbackUrl: z.string().exactOptional(),
                created: z.iso.date().exactOptional(),
                monitorStatus: z.string().exactOptional(),
                notificationId: z.string().exactOptional(),
                subjectId: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1CompanyMonitoringRegisterIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/company/monitoring/register/{id}',
  tags: ['v1-company'],
  summary: 'Register a Company for monitoring',
  description:
    'Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.',
  operationId: 'CompanyMonitorRegister',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Company Hex ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Callback URL where the notifications will be sent to',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              callbackUrl: z.string().openapi({ description: 'Callback URL' }),
              changeType: z.string().openapi({ description: 'ChangeType to monitor' }),
            })
            .openapi({ required: ['callbackUrl', 'changeType'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful webhook registration response',
      content: {
        'application/json': {
          schema: z
            .object({ monitorStatus: z.string(), notificationId: z.string() })
            .openapi({ required: ['notificationId', 'monitorStatus'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1CompanyMonitoringUnregisterIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/company/monitoring/unregister/{id}',
  tags: ['v1-company'],
  summary: 'Deactivates an active notification',
  description: 'Deactivate a previously registered company monitor identified by the notifier id',
  operationId: 'CompanyMonitorUnregister',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Registration id of monitoring request record',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Empty response body' },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyNotificationListRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/notification/list',
  tags: ['v1-company'],
  summary: 'Retrieves a list of registered notifications',
  description: 'Query list of registered callback URLs for logged in user',
  operationId: 'CompanyNotificationList',
  responses: {
    200: {
      description: 'List of monitor webhooks',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                callbackCount: z.int32().exactOptional(),
                callbackUrl: z.string().exactOptional(),
                created: z.iso.date().exactOptional(),
                monitorStatus: z.string().exactOptional(),
                notificationId: z.string().exactOptional(),
                subjectId: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyNotificationListIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/notification/list/{id}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of registered notifications',
  description:
    'Query list of registered notifications for a specific company identified by a company id',
  operationId: 'CompanyNotificationId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Company Hex ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of monitor webhooks',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                callbackCount: z.int32().exactOptional(),
                callbackUrl: z.string().exactOptional(),
                created: z.iso.date().exactOptional(),
                monitorStatus: z.string().exactOptional(),
                notificationId: z.string().exactOptional(),
                subjectId: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1CompanyNotificationRegisterIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/company/notification/register/{id}',
  tags: ['v1-company'],
  summary: 'Creates a new notification',
  description: 'Register a new callback URL to get notifications about companies.',
  operationId: 'CompanyNotificationRegister',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Company Hex ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Callback URL where the notifications will be sent to',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ callbackUrl: z.string().openapi({ description: 'Callback URL' }) })
            .openapi({ required: ['callbackUrl'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful webhook registration response',
      content: {
        'application/json': {
          schema: z
            .object({ monitorStatus: z.string(), notificationId: z.string() })
            .openapi({ required: ['notificationId', 'monitorStatus'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1CompanyNotificationUnregisterIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/company/notification/unregister/{id}',
  tags: ['v1-company'],
  summary: 'Unregister a company from Monitoring',
  description: 'Deactivate a previously registered company monitor identified by the notifier id',
  operationId: 'CompanyNotificationUnregister',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Registration id of monitoring request record',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Empty response body' },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanySearchNameCountryNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/search/name/{country}/{name}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of companies from the KYC API company index',
  description: 'KYC API company index lookup for companies with a certain name in a country.',
  operationId: 'CompanySearchName',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'company name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'number of search results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of companies',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                address: z.array(z.string()).exactOptional(),
                country: z.string().exactOptional(),
                dateOfIncorporation: z.string().exactOptional(),
                extraData: z.object({}).exactOptional(),
                formattedAddress: z.array(z.string()).exactOptional(),
                id: z.string().exactOptional(),
                legalForm: z.string().exactOptional(),
                managingDirectors: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                requestTime: z.int().exactOptional(),
                secretaries: z.array(z.string()).exactOptional(),
                sicNaceCodes: z.array(z.string()).exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanySearchNumberCountryNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/search/number/{country}/{number}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of companies from the KYC API company index',
  description:
    'KYC API company index lookup for companies with a certain register number in a country.',
  operationId: 'CompanySearchNumber',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      number: z
        .string()
        .openapi({
          param: {
            description: 'company registration number',
            in: 'path',
            name: 'number',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'number of search results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of companies',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                address: z.array(z.string()).exactOptional(),
                country: z.string().exactOptional(),
                dateOfIncorporation: z.string().exactOptional(),
                extraData: z.object({}).exactOptional(),
                formattedAddress: z.array(z.string()).exactOptional(),
                id: z.string().exactOptional(),
                legalForm: z.string().exactOptional(),
                managingDirectors: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                requestTime: z.int().exactOptional(),
                secretaries: z.array(z.string()).exactOptional(),
                sicNaceCodes: z.array(z.string()).exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1CompanySearchCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/company/search/{country}',
  tags: ['v1-company'],
  summary: 'Retrieves a list of companies from the KYC API company index',
  description:
    'KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name',
  operationId: 'CompanyAlternativeSearch',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'VAT number and the company details',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company address (or address partial)' }),
              name: z.string().exactOptional().openapi({ description: 'Company name' }),
              number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company registration number' }),
              phone: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company contact phone number' }),
              url: z.string().exactOptional().openapi({ description: 'Company url' }),
              vat: z.string().exactOptional().openapi({ description: 'Company VAT number' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'List of companies',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                address: z.array(z.string()).exactOptional(),
                country: z.string().exactOptional(),
                dateOfIncorporation: z.string().exactOptional(),
                extraData: z.object({}).exactOptional(),
                formattedAddress: z.array(z.string()).exactOptional(),
                id: z.string().exactOptional(),
                legalForm: z.string().exactOptional(),
                managingDirectors: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                requestTime: z.int().exactOptional(),
                secretaries: z.array(z.string()).exactOptional(),
                sicNaceCodes: z.array(z.string()).exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyIdAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/{id}/announcements',
  tags: ['v1-company'],
  summary: 'Retrieves company announcements',
  description:
    'Search announcements filed to the business register from a company identified by an id',
  operationId: 'CompanyIdAnnouncements',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'company hex ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'limit of announcements in response (default 10)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'to paginate through results (default 0)',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      data: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this parameter is set to false, you will only receive ids, and no additional data about announcements and no hits to the metric will be counted. (and potentially minimizing your costs)',
            in: 'query',
            name: 'data',
            required: false,
            schema: { format: '', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of announcements',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                countryCode: z.string().exactOptional(),
                id: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                structured: z.string().exactOptional(),
                text: z.string().exactOptional(),
                time: z.iso.date().exactOptional(),
                type: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyIdSuperCountryRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/{id}/super/{country}',
  tags: ['v1-company'],
  summary: 'Retrieves structured data extracted from a company document',
  description: 'Request company superdata identified by company id',
  operationId: 'CompanyIdSuper',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'company superdata by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    query: z.object({
      lang: z
        .enum(['', 'OG', 'EN'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional data translation (only available in limited jurisdictions)',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { enum: ['', 'OG', 'EN'], format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of companies',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                address: z.array(z.string()).exactOptional(),
                country: z.string().exactOptional(),
                dateOfIncorporation: z.string().exactOptional(),
                extraData: z.object({}).exactOptional(),
                formattedAddress: z.array(z.string()).exactOptional(),
                id: z.string().exactOptional(),
                legalForm: z.string().exactOptional(),
                managingDirectors: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional(),
                registrationNumber: z.string().exactOptional(),
                requestTime: z.int().exactOptional(),
                secretaries: z.array(z.string()).exactOptional(),
                sicNaceCodes: z.array(z.string()).exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1CompanyIdDatasetRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/{id}/{dataset}',
  tags: ['v1-company'],
  summary: 'Retrieves company details',
  description:
    'Get company details by id. The level of details is defined by the dataset parameter',
  operationId: 'CompanyIdDataset',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'company master data by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      dataset: z
        .enum(['', 'mini', 'master', 'full', 'refresh'])
        .openapi({
          param: {
            description: 'company master data by id',
            in: 'path',
            name: 'dataset',
            required: true,
            schema: {
              enum: ['', 'mini', 'master', 'full', 'refresh'],
              format: 'string',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      check_stock_listing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Try to retrieve additional stock information for this company. (Only available on refresh)',
            in: 'query',
            name: 'check_stock_listing',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      lang: z
        .enum(['', 'EN', 'ES', 'FR'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional data translation (only available in limited jurisdictions)',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { enum: ['', 'EN', 'ES', 'FR'], format: 'string', type: 'string' },
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
              address: z.array(z.string()).exactOptional(),
              country: z.string(),
              dateOfIncorporation: z.string().exactOptional(),
              extraData: z.object({}).exactOptional(),
              formattedAddress: z.array(z.string()).exactOptional(),
              id: z.string(),
              legalForm: z.string().exactOptional(),
              managingDirectors: z.array(z.string()).exactOptional(),
              name: z.string(),
              registrationNumber: z.string(),
              requestTime: z.int().exactOptional(),
              secretaries: z.array(z.string()).exactOptional(),
              sicNaceCodes: z.array(z.string()).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1EinVerificationBasicCheckRoute = createRoute({
  method: 'get',
  path: '/api/v1/ein-verification/basic-check',
  tags: ['v1-ein-verification'],
  summary: 'Verifies an EIN number',
  description: 'Performs a basic verification check of a given EIN tax number.',
  operationId: 'EinVerificationBasic',
  request: {
    query: z.object({
      ein: z
        .string()
        .openapi({
          param: {
            description: 'Nine letter EIN number with or without hyphens',
            in: 'query',
            name: 'ein',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a basic EIN number verification',
      content: {
        'application/json': {
          schema: z
            .object({
              confidence_score: z.string(),
              confidence_score_explanation: z.string(),
              dba_score: z.string(),
              dba_score_explanation: z.string(),
              ein: z.string(),
              irs_score: z.string(),
              irs_score_explanation: z.string(),
              timestamp: z.number(),
              validationStatus: z.boolean(),
            })
            .openapi({
              required: [
                'ein',
                'validationStatus',
                'irs_score',
                'irs_score_explanation',
                'dba_score',
                'dba_score_explanation',
                'confidence_score',
                'confidence_score_explanation',
                'timestamp',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1EinVerificationComprehensiveCheckRoute = createRoute({
  method: 'get',
  path: '/api/v1/ein-verification/comprehensive-check',
  tags: ['v1-ein-verification'],
  summary: 'Verifies EIN number and retrieves company data',
  description:
    'Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details',
  operationId: 'EinVerificationComprehensive',
  request: {
    query: z.object({
      ein: z
        .string()
        .openapi({
          param: {
            description: 'Nine letter EIN number with or without hyphens',
            in: 'query',
            name: 'ein',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a comprehensive EIN number verification',
      content: {
        'application/json': {
          schema: z
            .object({
              ein: z.string(),
              matched_ein_companies: z.array(
                z
                  .object({
                    address: z.array(z.string()).exactOptional(),
                    company_score: z.number().exactOptional(),
                    company_score_explanation: z.string().exactOptional(),
                    confidence_score: z.number().exactOptional(),
                    confidence_score_explanation: z.string().exactOptional(),
                    dba_score: z.string().exactOptional(),
                    dba_score_explanation: z.string().exactOptional(),
                    ein: z.string().exactOptional(),
                    formattedAddress: z.array(z.string()).exactOptional(),
                    irs_score: z.string().exactOptional(),
                    irs_score_explanation: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    provided_status: z.string().exactOptional(),
                    provided_status_explanation: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
              timestamp: z.number(),
              validationStatus: z.boolean(),
            })
            .openapi({
              required: ['ein', 'validationStatus', 'matched_ein_companies', 'timestamp'],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1EinVerificationLookupRoute = createRoute({
  method: 'get',
  path: '/api/v1/ein-verification/lookup',
  tags: ['v1-ein-verification'],
  summary: 'Retrieves a list of EIN numbers',
  description: 'Lookup EIN number for a company by its company name',
  operationId: 'EinVerificationLookup',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Business name of the company',
            in: 'query',
            name: 'name',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional state parameter to improve results. (Two letter code for example CA or US-CA for California)',
            in: 'query',
            name: 'state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional zip code parameter to improve results. (Zip is preferred over state)',
            in: 'query',
            name: 'zip',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tight: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter to do tight matching. (Only the best match will be returned rather then the top 5)',
            in: 'query',
            name: 'tight',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a EIN reverse lookup',
      content: {
        'application/json': {
          schema: z
            .object({
              matched_ein_companies: z
                .array(
                  z
                    .object({
                      address: z.array(z.string()).exactOptional(),
                      company_score: z.number().exactOptional(),
                      company_score_explanation: z.string().exactOptional(),
                      confidence_score: z.number().exactOptional(),
                      confidence_score_explanation: z.string().exactOptional(),
                      dba_score: z.string().exactOptional(),
                      dba_score_explanation: z.string().exactOptional(),
                      ein: z.string().exactOptional(),
                      formattedAddress: z.array(z.string()).exactOptional(),
                      irs_score: z.string().exactOptional(),
                      irs_score_explanation: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      provided_status: z.string().exactOptional(),
                      provided_status_explanation: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              searchterm_name: z.string(),
              searchterm_state: z.string(),
              searchterm_zip: z.string(),
              tight_search: z.boolean(),
              timestamp: z.number(),
            })
            .openapi({
              required: [
                'searchterm_name',
                'searchterm_state',
                'searchterm_zip',
                'tight_search',
                'timestamp',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1IbanVerificationCheckIbanRoute = createRoute({
  method: 'post',
  path: '/api/v1/iban-verification/check-iban',
  tags: ['v1-iban-verification'],
  summary: 'Checks validity of an IBAN number',
  description: 'Basic verification of an IBAN number validating its structure',
  operationId: 'IbanBasic',
  request: {
    body: {
      description: 'IBAN number',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ibanNumber: z
                .string()
                .openapi({
                  description: 'IBAN number to validate',
                  example: 'AT483200000012345864',
                }),
            })
            .openapi({ required: ['ibanNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Denotes validity of checked IBAN',
      content: {
        'application/json': {
          schema: z.object({ valid: z.boolean() }).openapi({ required: ['valid'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1IbanVerificationComprehensiveCheckIbanRoute = createRoute({
  method: 'post',
  path: '/api/v1/iban-verification/comprehensive-check-iban',
  tags: ['v1-iban-verification'],
  summary: 'Checks validity of an IBAN number',
  description:
    'Comprehensive verification of IBAN number using a service provider for verification',
  operationId: 'IbanComprehensive',
  request: {
    body: {
      description: 'IBAN number',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ibanNumber: z
                .string()
                .openapi({
                  description: 'IBAN number to validate',
                  example: 'AT483200000012345864',
                }),
            })
            .openapi({ required: ['ibanNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Denotes validity of checked IBAN and provides comprehensive information',
      content: {
        'application/json': {
          schema: z.object({ valid: z.boolean() }).openapi({ required: ['valid'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1NifVerificationBasicCheckCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/nif-verification/basic-check/{country}',
  tags: ['v1-nif-verification'],
  summary: 'Verifies a NIF number',
  description:
    'Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.',
  operationId: 'NifBasic',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Company details',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              companyAddress: z
                .string()
                .exactOptional()
                .openapi({ description: 'company address lines' }),
              companyName: z.string().exactOptional().openapi({ description: 'Company name' }),
              nifNumber: z.string().openapi({ description: 'NIF number to validate' }),
            })
            .openapi({ required: ['nifNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Result of a basic NIF verification',
      content: {
        'application/json': {
          schema: z
            .object({
              companyName: z.string().exactOptional(),
              confidenceScore: z.number(),
              nifNumber: z.number(),
              validationStatus: z.boolean(),
            })
            .openapi({ required: ['nifNumber', 'confidenceScore', 'validationStatus'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1NifVerificationComprehensiveCheckCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/nif-verification/comprehensive-check/{country}',
  tags: ['v1-nif-verification'],
  summary: 'Verifies a NIF number and retrieves company data',
  description:
    'Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.',
  operationId: 'NifComprehensive',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Company details',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              companyAddress: z
                .string()
                .exactOptional()
                .openapi({ description: 'company address lines' }),
              companyName: z.string().exactOptional().openapi({ description: 'Company name' }),
              nifNumber: z.string().openapi({ description: 'NIF number to validate' }),
            })
            .openapi({ required: ['nifNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Result of a comprehensive NIF verification',
      content: {
        'application/json': {
          schema: z
            .object({
              activity: z.object({}).exactOptional(),
              address: z.string().exactOptional(),
              capital: z.number().exactOptional(),
              companyName: z.string().exactOptional(),
              confidenceScore: z.number(),
              currency: z.string().exactOptional(),
              email: z.string().exactOptional(),
              fax: z.string().exactOptional(),
              geo: z.string().exactOptional(),
              legalType: z.string().exactOptional(),
              nifNumber: z.number(),
              phone: z.string().exactOptional(),
              status: z.object({}).exactOptional(),
              validationStatus: z.boolean(),
              website: z.string().exactOptional(),
            })
            .openapi({ required: ['nifNumber', 'confidenceScore', 'validationStatus'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1PepsanctionMonitorListRoute = createRoute({
  method: 'get',
  path: '/api/v1/pepsanction/monitor/list',
  tags: ['v1-pepsanction'],
  summary: 'Retrieves a list of monitor entries',
  description: 'Retrieve a list of all active Pep Sanction Report monitors for this account',
  operationId: 'PepMonitorList',
  responses: {
    200: {
      description: 'View Pep Sanction Report monitors',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                active: z.boolean().exactOptional(),
                caseId: z.string().exactOptional(),
                created: z.iso.date().exactOptional(),
                identifier: z.string().exactOptional(),
                structured: z.string().exactOptional(),
                updated: z.string().exactOptional(),
                webhook: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1PepsanctionMonitorUnregisterIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/pepsanction/monitor/unregister/{id}',
  tags: ['v1-pepsanction'],
  summary: 'Deactive a pep sanction monitor',
  description: 'Unregister a previously created Pep Sanction Report Monitor',
  operationId: 'PepMonitorUnregister',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the Monitor',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'View a monitor for a Pep Sanction Report',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().exactOptional(),
              caseId: z.string().exactOptional(),
              created: z.iso.date().exactOptional(),
              identifier: z.string().exactOptional(),
              structured: z.string().exactOptional(),
              updated: z.string().exactOptional(),
              webhook: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1PepsanctionMonitorUpdateIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/pepsanction/monitor/update/{id}',
  tags: ['v1-pepsanction'],
  summary: 'Update details of active Pep Sanction monitor',
  description: 'Update the webhook URL of an active Pep Sanction Report Monitor',
  operationId: 'PepMonitorUpdate',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the Monitor',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Pass new Webhook as post parameter',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Webhook: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If Monitoring is enabled this parameter is required. This is where updates will be sent to',
                  example: 'null',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'View a monitor for a Pep Sanction Report',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().exactOptional(),
              caseId: z.string().exactOptional(),
              created: z.iso.date().exactOptional(),
              identifier: z.string().exactOptional(),
              structured: z.string().exactOptional(),
              updated: z.string().exactOptional(),
              webhook: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1PepsanctionOrderTypeSearchRoute = createRoute({
  method: 'post',
  path: '/api/v1/pepsanction/order/{type}/{search}',
  tags: ['v1-pepsanction'],
  summary: 'Orders a new Pep Sanction Check Report',
  description:
    'Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.',
  operationId: 'PepOrder',
  request: {
    params: z.object({
      type: z
        .enum(['', 'B', 'P'])
        .openapi({
          param: {
            description: 'Type (Business or Person) of the requested Pep Sanction Check',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['', 'B', 'P'], format: 'string', type: 'string' },
          },
        }),
      search: z
        .string()
        .openapi({
          param: {
            description: 'Search string for the Pep Sanction Check',
            in: 'path',
            name: 'search',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Optional parameters to enhance search',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Aliases: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter for declaring alias names when doing a person search (seperated by commas)',
                  example: 'null',
                }),
              Country: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional name of Country to assist in identifying matches based upon location/geography.',
                  example: 'null',
                }),
              DOB: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter for date of birth name when doing a person search',
                  example: 'null',
                }),
              FamilyName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional parameter for last name when doing a person search',
                  example: 'null',
                }),
              Filters: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter for restricting search when doing a person search (seperated by commas)',
                  example: 'null',
                }),
              GivenName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional parameter for first name when doing a person search',
                  example: 'null',
                }),
              LEI: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional Legal Entity Identifier for additional business identifier verification.',
                  example: 'null',
                }),
              Locale: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional name of City or Locale to assist in identifying matches based upon location/geography.',
                  example: 'null',
                }),
              Medialists: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter for selecting only specific media lists. By default all lists are queried',
                  example: 'NMEDIA',
                }),
              MiddleName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional parameter for middle name when doing a person search',
                  example: 'null',
                }),
              Monitoring: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'If this Pep Sanction Check should be continuesly monitored.',
                  example: false,
                }),
              Peplists: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter for selecting only specific pep lists. By default all lists are queried',
                  example: 'GOV,PEPD,SOE',
                }),
              Region: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional name of Region or State to assist in identifying matches based upon location/geography.',
                  example: 'null',
                }),
              SmartMatch: z
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
                    'Optional parameter for enabling SmartMatch to retrieve more results',
                  example: false,
                }),
              Watchlists: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter for selecting only specific watch lists. By default all lists are queried',
                  example: 'SANCTIONS,FINANCE,TERRORISM,CRIME,SMAGOV,OFAC,MEDICAL',
                }),
              Webhook: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If Monitoring is enabled this parameter is required. This is where updates will be sent to',
                  example: 'null',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Product details',
      content: {
        'application/json': {
          schema: z
            .object({
              availability: z.string(),
              category: z.string(),
              countryCode: z.string(),
              description: z.string(),
              hasOptions: z.boolean(),
              options: z.array(z.string()),
              price: z.float32(),
              provider: z.string(),
              sku: z.string(),
              type: z.string(),
            })
            .openapi({
              required: [
                'availability',
                'category',
                'countryCode',
                'description',
                'hasOptions',
                'options',
                'price',
                'provider',
                'sku',
                'type',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1PepsanctionRetrieveIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/pepsanction/retrieve/{id}',
  tags: ['v1-pepsanction'],
  summary: 'Returns a json or pdf report',
  description:
    'Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header',
  operationId: 'PepRetrieve',
  request: {
    headers: z.object({
      accept: z
        .enum(['application/json', 'application/pdf'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description: 'The type (pdf or json) in which the check should be returned',
            in: 'header',
            name: 'accept',
            required: false,
            schema: {
              default: 'application/json',
              enum: ['application/json', 'application/pdf'],
              format: 'string',
              type: 'string',
            },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the ordered Pep Sanction Check (id as returned by orderPepSanction call)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a PEP and sanctions list check',
      content: {
        'application/json': {
          schema: z
            .object({
              listsChecked: z.string(),
              results: z
                .object({
                  Excerpts: z.string().exactOptional(),
                  ResultsURL: z.string().exactOptional(),
                  SearchType: z.string().exactOptional(),
                  SourceAgency: z.string().exactOptional(),
                  SourceEntity: z.string().exactOptional(),
                  SourceID: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64(),
                    )
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64' }),
                  SourceName: z.string().exactOptional(),
                  SourceType: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              search: z.string(),
              status: z.string(),
              timestamp: z.iso.date(),
              type: z.string(),
            })
            .openapi({ required: ['listsChecked', 'search', 'status', 'timestamp', 'type'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1ProductAvailabilitySkuSubjectIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/product/availability/{sku}/{subjectId}',
  tags: ['v1-product'],
  summary: 'Retrieves a document availability result',
  description:
    'Check availability and valid options for a particular product for a particular company identfied by its id',
  operationId: 'ProductAvailability',
  request: {
    params: z.object({
      sku: z
        .string()
        .openapi({
          param: {
            description: 'SKU - 9 character value from a Product object',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      subjectId: z
        .string()
        .openapi({
          param: {
            description: 'Subject (e.g. Company) ID - 32 character hex value',
            in: 'path',
            name: 'subjectId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Product details',
      content: {
        'application/json': {
          schema: z
            .object({
              availability: z.string(),
              category: z.string(),
              countryCode: z.string(),
              description: z.string(),
              hasOptions: z.boolean(),
              options: z.array(z.string()),
              price: z.float32(),
              provider: z.string(),
              sku: z.string(),
              type: z.string(),
            })
            .openapi({
              required: [
                'availability',
                'category',
                'countryCode',
                'description',
                'hasOptions',
                'options',
                'price',
                'provider',
                'sku',
                'type',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1ProductCatalogCountryRoute = createRoute({
  method: 'get',
  path: '/api/v1/product/catalog/{country}',
  tags: ['v1-product'],
  summary: 'Returns a catalog of products',
  description:
    'Returns a catalog of purchasable products available with some metadata for a particular country',
  operationId: 'ProductCatalog',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'two letter country code in upper case',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Product with details like URI to purchase it',
      content: {
        'application/json': {
          schema: z
            .object({
              countryCode: z.string().exactOptional(),
              description: z.string().exactOptional(),
              form: z.string().exactOptional(),
              method: z.string().exactOptional(),
              name: z.string().exactOptional(),
              price: z.float32().exactOptional(),
              sku: z.string().exactOptional(),
              url: z.string(),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1ProductNotifierNotifierIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/product/notifier/{notifierId}',
  tags: ['v1-product'],
  summary: 'Returns metadata for a notifier',
  description:
    'Queries and returns all metadata associated with a notifier identified by its notifer id',
  operationId: 'ProductNotifier',
  request: {
    params: z.object({
      notifierId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the ProductOrderNotifier as returned from a /notifier POST call - 32 character hex value',
            in: 'path',
            name: 'notifierId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of configured product order notification',
      content: {
        'application/json': {
          schema: z
            .object({
              callback: z.string(),
              identity: z.string().exactOptional(),
              lastCallTime: z.iso.date(),
              lastResponseCode: z.int(),
              notifierType: z.string(),
              productOrderIdentity: z.string(),
            })
            .openapi({
              required: [
                'callback',
                'lastCallTime',
                'lastResponseCode',
                'notifierType',
                'productOrderIdentity',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1ProductNotifierOrderIdTypeUriRoute = createRoute({
  method: 'post',
  path: '/api/v1/product/notifier/{orderId}/{type}/{uri}',
  tags: ['v1-product'],
  summary: 'Creates a notifier for an order',
  description: 'Create a notifier for a particular order. Parameters can be supplied in the path',
  operationId: 'ProductNotifierCreate',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the ProductOrder as returned from a /product/buy call - 32 character hex value',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'Type of the notifier - indicates the action the notifier will perform. Currently GET and POST are supported which performs an http(s) GET/POST to the supplied uri with appended notifierId= and orderId= parameters when the order processing is completed. Upon the POST request the order object is sent as a JSON body',
            in: 'path',
            name: 'type',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      uri: z
        .string()
        .openapi({
          param: {
            description:
              "URI of the notifier for the 'complete' action. Currently only a GET method HTTP(s) URL is supported. 1 to 250 characters long. Every slash in the URI must be replaced by a ~",
            in: 'path',
            name: 'uri',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of configured product order notification',
      content: {
        'application/json': {
          schema: z
            .object({
              callback: z.string(),
              identity: z.string().exactOptional(),
              lastCallTime: z.iso.date(),
              lastResponseCode: z.int(),
              notifierType: z.string(),
              productOrderIdentity: z.string(),
            })
            .openapi({
              required: [
                'callback',
                'lastCallTime',
                'lastResponseCode',
                'notifierType',
                'productOrderIdentity',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1ProductOrderConciergeRoute = createRoute({
  method: 'post',
  path: '/api/v1/product/order/concierge',
  tags: ['v1-product'],
  summary: 'Places a concierge order',
  description: 'Place an order for a concierge product',
  operationId: 'ProductOrderConcierge',
  request: {
    body: {
      description: 'Parameters for the concierge order',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              companyName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the company for which a document should be ordered. (Not required if subjectId is given)',
                  example: 'null',
                }),
              contactEmail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Contact E-Mail, will be contacted if concierge costs are exceeding the threshhold configured on your plan',
                  example: 'null',
                }),
              contactPhone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Contact phone, will be contacted if concierge costs are exceeding the threshhold configured on your plan',
                  example: 'null',
                }),
              costConfirmation: z
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
                    'If the concierge cost should require additional confirmation if a threshold is reached (configured on your plan)',
                  example: false,
                }),
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Two letter ISO code of the country of the company',
                  example: 'null',
                }),
              financialData: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'If you want financial data of the company to be retrieved',
                  example: false,
                }),
              historicInformation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'If you want historical data of the company to be retrieved',
                  example: false,
                }),
              informationRequirements: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Requirements on what document or information should be provided. Please be very precise',
                  example: 'null',
                }),
              locationInvestigation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'If the companies residency should be investigated',
                  example: false,
                }),
              priority: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Priority of order: standard/express are allowed',
                  example: 'standard',
                }),
              registerData: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'If you want register data of the company to be retrieved',
                  example: false,
                }),
              registerNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Registration number of the company for which a document should be ordered. (Not required if subjectId is given)',
                  example: 'null',
                }),
              subjectId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Kompanyid of the company you want to place the order for',
                  example: 'null',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Product order details',
      content: {
        'application/json': {
          schema: z
            .object({
              identity: z.string(),
              option: z.string(),
              ordered: z.iso.date(),
              owner: z.string(),
              price: z.float32(),
              sku: z.string(),
              status: z.string(),
              subjectId: z.string(),
              subjectValue: z.string(),
            })
            .openapi({
              required: [
                'identity',
                'option',
                'ordered',
                'owner',
                'price',
                'sku',
                'status',
                'subjectId',
                'subjectValue',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1ProductOrderUboRoute = createRoute({
  method: 'post',
  path: '/api/v1/product/order/ubo',
  tags: ['v1-product'],
  summary: 'Places a UBO order',
  description: 'Place an order for a UBO (ultimate beneficial owner) discovery report',
  operationId: 'ProductOrderUbo',
  request: {
    body: {
      description: 'Parameters for the UBO order',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              callbackUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional callback URL to which updates about the order will be sent (for instance if credits are exceeded)',
                  example: 'null',
                }),
              credits: z
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
                  description:
                    'Specify a maximum amount of credits which should be used. To disable use -1',
                  example: -1,
                }),
              includeDocs: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Include purchase of register document to ubo report',
                  example: false,
                }),
              levels: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Define a threshold for different levels of crawling',
                  example: '25,50',
                }),
              strategy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Choose a matching strategy. Available options (FULL,LEVELS)',
                  example: 'FULL',
                }),
              subjectId: z
                .string()
                .openapi({
                  description:
                    'KYC API Id (32 byte hexid) of the company you want to place the order for',
                  example: 'null',
                }),
            })
            .openapi({ required: ['subjectId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Product order details',
      content: {
        'application/json': {
          schema: z
            .object({
              identity: z.string(),
              option: z.string(),
              ordered: z.iso.date(),
              owner: z.string(),
              price: z.float32(),
              sku: z.string(),
              status: z.string(),
              subjectId: z.string(),
              subjectValue: z.string(),
            })
            .openapi({
              required: [
                'identity',
                'option',
                'ordered',
                'owner',
                'price',
                'sku',
                'status',
                'subjectId',
                'subjectValue',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1ProductOrderSkuOptionSubjectIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/product/order/{sku}/{option}/{subjectId}',
  tags: ['v1-product'],
  summary: 'Places a product order',
  description:
    'Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id',
  operationId: 'ProductOrderWithOption',
  request: {
    params: z.object({
      sku: z
        .string()
        .openapi({
          param: {
            description: 'SKU - 9 character value from a Product object',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      option: z
        .string()
        .openapi({
          param: {
            description: 'Product option (e.g. Accounts year) from a previous Availability call',
            in: 'path',
            name: 'option',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      subjectId: z
        .string()
        .openapi({
          param: {
            description: 'Subject (e.g. Company) ID - 32 character hex value',
            in: 'path',
            name: 'subjectId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Product order details',
      content: {
        'application/json': {
          schema: z
            .object({
              identity: z.string(),
              option: z.string(),
              ordered: z.iso.date(),
              owner: z.string(),
              price: z.float32(),
              sku: z.string(),
              status: z.string(),
              subjectId: z.string(),
              subjectValue: z.string(),
            })
            .openapi({
              required: [
                'identity',
                'option',
                'ordered',
                'owner',
                'price',
                'sku',
                'status',
                'subjectId',
                'subjectValue',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1ProductOrderSkuSubjectIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/product/order/{sku}/{subjectId}',
  tags: ['v1-product'],
  summary: 'Places a product order',
  description:
    'Place an order for a particular product identified by its SKU for a particular company identified by its id',
  operationId: 'ProductOrder',
  request: {
    params: z.object({
      sku: z
        .string()
        .openapi({
          param: {
            description: 'SKU - 9 character value from a Product object',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      subjectId: z
        .string()
        .openapi({
          param: {
            description: 'Subject (e.g. Company) ID - 32 character hex value',
            in: 'path',
            name: 'subjectId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Product order details',
      content: {
        'application/json': {
          schema: z
            .object({
              identity: z.string(),
              option: z.string(),
              ordered: z.iso.date(),
              owner: z.string(),
              price: z.float32(),
              sku: z.string(),
              status: z.string(),
              subjectId: z.string(),
              subjectValue: z.string(),
            })
            .openapi({
              required: [
                'identity',
                'option',
                'ordered',
                'owner',
                'price',
                'sku',
                'status',
                'subjectId',
                'subjectValue',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1ProductSearchSubjectIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/product/search/{subjectId}',
  tags: ['v1-product'],
  summary: 'Returns a list of products',
  description: 'Search for possible products for a particular company identified by its id',
  operationId: 'ProductSearch',
  request: {
    params: z.object({
      subjectId: z
        .string()
        .openapi({
          param: {
            description: 'Subject (e.g. Company) ID - 32 character hex value',
            in: 'path',
            name: 'subjectId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of products',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                availability: z.string().exactOptional(),
                category: z.string().exactOptional(),
                countryCode: z.string().exactOptional(),
                description: z.string().exactOptional(),
                hasOptions: z.boolean().exactOptional(),
                options: z.array(z.string()).exactOptional(),
                price: z.float32().exactOptional(),
                provider: z.string().exactOptional(),
                sku: z.string().exactOptional(),
                type: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1ProductStatusOrderIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/product/status/{orderId}',
  tags: ['v1-product'],
  summary: 'Returns metadata for a order',
  description: 'Retrieve the current status of an order identified by its order id',
  operationId: 'ProductStatus',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the ProductOrder as returned from a /product/buy call - 32 character hex value',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Product order details',
      content: {
        'application/json': {
          schema: z
            .object({
              identity: z.string(),
              option: z.string(),
              ordered: z.iso.date(),
              owner: z.string(),
              price: z.float32(),
              sku: z.string(),
              status: z.string(),
              subjectId: z.string(),
              subjectValue: z.string(),
            })
            .openapi({
              required: [
                'identity',
                'option',
                'ordered',
                'owner',
                'price',
                'sku',
                'status',
                'subjectId',
                'subjectValue',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1ProductUpdateActionOrderIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/product/update/{action}/{orderId}',
  tags: ['v1-product'],
  summary: 'Updates metadata of an order',
  description: 'Update an existing order identified by its order id',
  operationId: 'ProductUpdateAction',
  request: {
    params: z.object({
      action: z
        .string()
        .openapi({
          param: {
            description: 'The action you want to perform for the order',
            in: 'path',
            name: 'action',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the ProductOrder as returned from a /product/buy call - 32 character hex value',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Parameters for the update order endpoint',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              credits: z
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
                  description: 'Specify an amount of credits which should be added to the order',
                  example: 100,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Product order details',
      content: {
        'application/json': {
          schema: z
            .object({
              identity: z.string(),
              option: z.string(),
              ordered: z.iso.date(),
              owner: z.string(),
              price: z.float32(),
              sku: z.string(),
              status: z.string(),
              subjectId: z.string(),
              subjectValue: z.string(),
            })
            .openapi({
              required: [
                'identity',
                'option',
                'ordered',
                'owner',
                'price',
                'sku',
                'status',
                'subjectId',
                'subjectValue',
              ],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1ProductOrderIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/product/{orderId}',
  tags: ['v1-product'],
  summary: 'Retrieves the result of an order',
  description:
    'Retrieves the document or structured data associated with a completed order identified with its order id',
  operationId: 'ProductRetrieve',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the ProductOrder as returned from a /product/buy call - 32 character hex value',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details for retrieval of a delivered product',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                childOrders: z.array(z.string()).exactOptional(),
                data: z.string().exactOptional(),
                mimeType: z.string(),
                productOrderId: z.string(),
                uri: z.string(),
              })
              .openapi({ required: ['mimeType', 'productOrderId', 'uri'] }),
            z
              .object({
                data: z.object({}),
                mimeType: z.string(),
                productOrderId: z.string(),
                uri: z.string(),
              })
              .openapi({ required: ['mimeType', 'productOrderId', 'uri', 'data'] }),
          ]),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1SystemCountriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/countries',
  tags: ['v1-system'],
  summary: 'Returns a list of countries',
  description: 'Retrieve the list of all currently enabled countries',
  operationId: 'SystemCountries',
  responses: {
    200: {
      description: 'List of countries',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                country_code: z.string().exactOptional(),
                country_name: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1SystemHealthRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/health',
  tags: ['v1-system'],
  summary: 'Returns the health information for the official business registers based on usage.',
  description: 'Returns the health information for the official business registers based on usage.',
  operationId: 'HealthCheck',
  responses: {
    200: {
      description: 'List of the commercial registers and their health data',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ name: z.string().exactOptional(), status: z.string().exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1SystemPricelistRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/pricelist',
  tags: ['v1-system'],
  summary: 'Returns a list of products with prices',
  description: 'Retrieve pricing rules for your subscription plan',
  operationId: 'SystemPricelist',
  responses: {
    200: {
      description: 'List of pricing rules',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                cost_per_unit: z.string().exactOptional(),
                max: z.string().exactOptional(),
                metric_id: z.string().exactOptional(),
                min: z.string().exactOptional(),
                sku: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1TinVerificationBasicCheckRoute = createRoute({
  method: 'get',
  path: '/api/v1/tin-verification/basic-check',
  tags: ['v1-tin-verification'],
  summary: 'Verifies a TIN number',
  description: 'Performs a basic verification check of a given TIN number and name.',
  operationId: 'TinVerificationBasicCheck',
  request: {
    query: z.object({
      tin: z
        .string()
        .openapi({
          param: {
            description: 'Nine letter TIN number with or without hyphens',
            in: 'query',
            name: 'tin',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Company Name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a basic TIN number check with company name',
      content: {
        'application/json': {
          schema: z
            .object({
              matchStatus: z.string(),
              name: z.string(),
              possibleMatch: z.string(),
              tin: z.string(),
              validationStatus: z.string(),
            })
            .openapi({
              required: ['tin', 'name', 'validationStatus', 'matchStatus', 'possibleMatch'],
            }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1TinVerificationComprehensiveCheckRoute = createRoute({
  method: 'get',
  path: '/api/v1/tin-verification/comprehensive-check',
  tags: ['v1-tin-verification'],
  summary: 'EIN Name Lookup with TIN number and retrieves company data',
  description:
    'Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details',
  operationId: 'TinVerificationComprehensiveCheck',
  request: {
    query: z.object({
      tin: z
        .string()
        .openapi({
          param: {
            description: 'Nine letter TIN number with or without hyphens',
            in: 'query',
            name: 'tin',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Company Name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      threshold: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The percentage of minimum similarity threshold for company matching (optional, default: 70%)',
            in: 'query',
            name: 'threshold',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Result of a basic TIN number check with company name and the list of matched companies',
      content: {
        'application/json': {
          schema: z
            .object({
              einResult: z.string(),
              matchedCompanies: z.array(
                z
                  .object({
                    address: z.array(z.string()).exactOptional(),
                    country: z.string().exactOptional(),
                    dateOfIncorporation: z.string().exactOptional(),
                    extraData: z.object({}).exactOptional(),
                    formattedAddress: z.array(z.string()).exactOptional(),
                    id: z.string().exactOptional(),
                    legalForm: z.string().exactOptional(),
                    managingDirectors: z.array(z.string()).exactOptional(),
                    name: z.string().exactOptional(),
                    registrationNumber: z.string().exactOptional(),
                    requestTime: z.int().exactOptional(),
                    secretaries: z.array(z.string()).exactOptional(),
                    sicNaceCodes: z.array(z.string()).exactOptional(),
                    status: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
              tinResult: z.string(),
            })
            .openapi({ required: ['tinResult', 'einResult', 'matchedCompanies'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const getApiV1TinVerificationNameLookupRoute = createRoute({
  method: 'get',
  path: '/api/v1/tin-verification/name-lookup',
  tags: ['v1-tin-verification'],
  summary: 'EIN Name Lookup with TIN number',
  description: 'Performs an EIN name match using provided TIN Number',
  operationId: 'TinVerificationNameLookup',
  request: {
    query: z.object({
      tin: z
        .string()
        .openapi({
          param: {
            description: 'Nine letter TIN number with or without hyphens',
            in: 'query',
            name: 'tin',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result of a EIN name lookup with TIN number',
      content: {
        'application/json': {
          schema: z
            .object({ matchStatus: z.string(), possibleMatch: z.string(), tin: z.string() })
            .openapi({ required: ['tin', 'matchStatus', 'possibleMatch'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1VatVerificationBasicCheckCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/vat-verification/basic-check/{country}',
  tags: ['v1-vat-verification'],
  summary: 'Returns a verification result',
  description:
    'Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.',
  operationId: 'VatBasic',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'VAT number and the company details',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              companyAddress: z
                .string()
                .exactOptional()
                .openapi({ description: 'company address lines' }),
              companyName: z.string().exactOptional().openapi({ description: 'Company name' }),
              companyNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'official company number' }),
              vatNumber: z.string().openapi({ description: 'VAT number to validate' }),
            })
            .openapi({ required: ['vatNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Denotes validity of checked VAT',
      content: {
        'application/json': {
          schema: z
            .object({
              candidate: z
                .array(
                  z
                    .object({
                      address: z.array(z.string()).exactOptional(),
                      country: z.string(),
                      dateOfIncorporation: z.string().exactOptional(),
                      extraData: z.object({}).exactOptional(),
                      formattedAddress: z.array(z.string()).exactOptional(),
                      id: z.string(),
                      legalForm: z.string().exactOptional(),
                      managingDirectors: z.array(z.string()).exactOptional(),
                      name: z.string(),
                      registrationNumber: z.string(),
                      requestTime: z.int().exactOptional(),
                      secretaries: z.array(z.string()).exactOptional(),
                      sicNaceCodes: z.array(z.string()).exactOptional(),
                      status: z.string().exactOptional(),
                    })
                    .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
                )
                .exactOptional(),
              company: z
                .object({
                  address: z.array(z.string()).exactOptional(),
                  country: z.string(),
                  dateOfIncorporation: z.string().exactOptional(),
                  extraData: z.object({}).exactOptional(),
                  formattedAddress: z.array(z.string()).exactOptional(),
                  id: z.string(),
                  legalForm: z.string().exactOptional(),
                  managingDirectors: z.array(z.string()).exactOptional(),
                  name: z.string(),
                  registrationNumber: z.string(),
                  requestTime: z.int().exactOptional(),
                  secretaries: z.array(z.string()).exactOptional(),
                  sicNaceCodes: z.array(z.string()).exactOptional(),
                  status: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
              confidenceScore: z.number(),
              validationStatus: z.boolean(),
            })
            .openapi({ required: ['confidenceScore', 'validationStatus'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1VatVerificationComprehensiveCheckCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/vat-verification/comprehensive-check/{country}',
  tags: ['v1-vat-verification'],
  summary: 'Returns a verification result and company data',
  description:
    'Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.',
  operationId: 'VatComprehensive',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'VAT number and the company details',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              companyAddress: z
                .string()
                .exactOptional()
                .openapi({ description: 'company address lines' }),
              companyName: z.string().exactOptional().openapi({ description: 'Company name' }),
              companyNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'official company number' }),
              vatNumber: z.string().openapi({ description: 'VAT number to validate' }),
            })
            .openapi({ required: ['vatNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Denotes validity of checked VAT',
      content: {
        'application/json': {
          schema: z
            .object({
              candidate: z
                .array(
                  z
                    .object({
                      address: z.array(z.string()).exactOptional(),
                      country: z.string(),
                      dateOfIncorporation: z.string().exactOptional(),
                      extraData: z.object({}).exactOptional(),
                      formattedAddress: z.array(z.string()).exactOptional(),
                      id: z.string(),
                      legalForm: z.string().exactOptional(),
                      managingDirectors: z.array(z.string()).exactOptional(),
                      name: z.string(),
                      registrationNumber: z.string(),
                      requestTime: z.int().exactOptional(),
                      secretaries: z.array(z.string()).exactOptional(),
                      sicNaceCodes: z.array(z.string()).exactOptional(),
                      status: z.string().exactOptional(),
                    })
                    .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
                )
                .exactOptional(),
              company: z
                .object({
                  address: z.array(z.string()).exactOptional(),
                  country: z.string(),
                  dateOfIncorporation: z.string().exactOptional(),
                  extraData: z.object({}).exactOptional(),
                  formattedAddress: z.array(z.string()).exactOptional(),
                  id: z.string(),
                  legalForm: z.string().exactOptional(),
                  managingDirectors: z.array(z.string()).exactOptional(),
                  name: z.string(),
                  registrationNumber: z.string(),
                  requestTime: z.int().exactOptional(),
                  secretaries: z.array(z.string()).exactOptional(),
                  sicNaceCodes: z.array(z.string()).exactOptional(),
                  status: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
              confidenceScore: z.number(),
              validationStatus: z.boolean(),
            })
            .openapi({ required: ['confidenceScore', 'validationStatus'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1VatVerificationLeveltwoCheckCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/vat-verification/leveltwo-check/{country}',
  tags: ['v1-vat-verification'],
  summary: 'Returns a level two verification result',
  description:
    'Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.',
  operationId: 'VatLevelTwo',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'VAT number and confirmation request',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              confirmation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'If a confirmation document should be ordered' }),
              vatNumber: z.string().openapi({ description: 'VAT number to validate' }),
            })
            .openapi({ required: ['vatNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Denotes second level validity result of checked VAT',
      content: {
        'application/json': {
          schema: z
            .object({
              address: z.string().exactOptional(),
              confirmation: z.string().exactOptional(),
              level: z.string(),
              name: z.string().exactOptional(),
              validationStatus: z.boolean(),
            })
            .openapi({ required: ['validationStatus', 'level'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})

export const postApiV1VatVerificationLookupCountryRoute = createRoute({
  method: 'post',
  path: '/api/v1/vat-verification/lookup/{country}',
  tags: ['v1-vat-verification'],
  summary: 'Returns a list of vat numbers with additional data',
  description:
    'Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.',
  operationId: 'VatLookup',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'ISO_3166-1_alpha-2 representation of a country name - 2 chars',
            in: 'path',
            name: 'country',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Company name',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Company address', example: 'null' }),
              name: z.string().openapi({ description: 'Company name', example: 'null' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Result of a VAT number reverse Lookup',
      content: {
        'application/json': {
          schema: z
            .object({
              matches: z
                .array(
                  z
                    .object({
                      company: z
                        .object({
                          address: z.array(z.string()).exactOptional(),
                          country: z.string(),
                          dateOfIncorporation: z.string().exactOptional(),
                          extraData: z.object({}).exactOptional(),
                          formattedAddress: z.array(z.string()).exactOptional(),
                          id: z.string(),
                          legalForm: z.string().exactOptional(),
                          managingDirectors: z.array(z.string()).exactOptional(),
                          name: z.string(),
                          registrationNumber: z.string(),
                          requestTime: z.int().exactOptional(),
                          secretaries: z.array(z.string()).exactOptional(),
                          sicNaceCodes: z.array(z.string()).exactOptional(),
                          status: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: ['country', 'id', 'name', 'registrationNumber'] }),
                      vat: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              searchterm_address: z.string().exactOptional(),
              searchterm_country: z.string().exactOptional(),
              searchterm_name: z.string().exactOptional(),
              timestamp: z.int32().exactOptional(),
            })
            .openapi({ required: ['validationStatus', 'level'] }),
        },
      },
    },
    default: {
      description: 'Detailed information about the error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int32(),
              fault: z.string().exactOptional(),
              message: z.string(),
              tag: z.string(),
            })
            .openapi({ required: ['code', 'message', 'tag'] }),
        },
      },
    },
  },
  security: [{ user_key: [] }],
})
