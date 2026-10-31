import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    dav: z
      .object({
        chunking: z.string(),
        public_shares_chunking: z.boolean(),
        search_supports_creation_time: z.boolean(),
        search_supports_upload_time: z.boolean(),
        search_supports_last_activity: z.boolean(),
        bulkupload: z.string().exactOptional(),
        'absence-supported': z.boolean().exactOptional(),
        'absence-replacement': z.boolean().exactOptional(),
      })
      .openapi({
        required: [
          'chunking',
          'public_shares_chunking',
          'search_supports_creation_time',
          'search_supports_upload_time',
          'search_supports_last_activity',
        ],
      }),
  })
  .openapi({ required: ['dav'] })
  .openapi('Capabilities')

const OutOfOfficeDataCommonSchema = z
  .object({
    userId: z.string(),
    message: z.string(),
    replacementUserId: z.string().nullable(),
    replacementUserDisplayName: z.string().nullable(),
  })
  .openapi({ required: ['userId', 'message', 'replacementUserId', 'replacementUserDisplayName'] })
  .openapi('OutOfOfficeDataCommon')

const CurrentOutOfOfficeDataSchema = OutOfOfficeDataCommonSchema.and(
  z
    .object({
      id: z.string(),
      startDate: z
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
      endDate: z
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
      shortMessage: z.string(),
    })
    .openapi({ required: ['id', 'startDate', 'endDate', 'shortMessage'] }),
).openapi('CurrentOutOfOfficeData')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const OutOfOfficeDataSchema = OutOfOfficeDataCommonSchema.and(
  z
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
      firstDay: z.string(),
      lastDay: z.string(),
      status: z.string(),
    })
    .openapi({ required: ['id', 'firstDay', 'lastDay', 'status'] }),
).openapi('OutOfOfficeData')

const PendingFederatedCalendarSchema = z
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
    displayName: z.string(),
    color: z.string().nullable(),
    sharedBy: z.string(),
    sharedByDisplayName: z.string(),
    remoteUrl: z.string(),
    permissions: z
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
    components: z.string(),
  })
  .openapi({
    required: [
      'id',
      'displayName',
      'color',
      'sharedBy',
      'sharedByDisplayName',
      'remoteUrl',
      'permissions',
      'components',
    ],
  })
  .openapi('PendingFederatedCalendar')

const UpcomingEventSchema = z
  .object({
    uri: z.string(),
    calendarUri: z.string(),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    summary: z.string().nullable(),
    location: z.string().nullable(),
  })
  .openapi({ required: ['uri', 'calendarUri', 'start', 'summary', 'location'] })
  .openapi('UpcomingEvent')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const postOcsV2PhpAppsDavApiV1DirectRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/dav/api/v1/direct',
  tags: ['direct'],
  summary: 'Get a direct link to a file',
  operationId: 'direct-get-url',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64', description: 'ID of the file' }),
              expirationTime: z
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
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Duration until the link expires',
                }),
            })
            .openapi({ required: ['fileId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Direct link returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ url: z.string() }).openapi({ required: ['url'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Getting direct link is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to get direct link',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'File not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending',
  tags: ['federated_calendar'],
  summary: 'Get the pending federated calendar invitations of the current user',
  operationId: 'federated_calendar-get-pending',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pending federated calendar invitations',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(PendingFederatedCalendarSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'When the user is not logged in',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/{id}',
  tags: ['federated_calendar'],
  summary: 'Accept a pending federated calendar invitation',
  operationId: 'federated_calendar-accept',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the pending federated calendar',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invitation accepted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The federated calendar was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/{id}',
  tags: ['federated_calendar'],
  summary: 'Decline a pending federated calendar invitation',
  operationId: 'federated_calendar-decline',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the pending federated calendar',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invitation declined successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The federated calendar was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDavApiV1EventsUpcomingRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dav/api/v1/events/upcoming',
  tags: ['upcoming_events'],
  summary: 'Get information about upcoming events',
  operationId: 'upcoming_events-get-events',
  request: {
    query: z.object({
      location: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'location',
            in: 'query',
            description: 'location/URL to filter by',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Upcoming events',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ events: z.array(UpcomingEventSchema) })
                    .openapi({ required: ['events'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'When not authenticated',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}/now',
  tags: ['out_of_office'],
  summary: 'Get the currently configured out-of-office data of a user',
  operationId: 'out_of_office-get-current-out-of-office-data',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The user id to get out-of-office data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Out-of-office data',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: CurrentOutOfOfficeDataSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No out-of-office data was found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}',
  tags: ['out_of_office'],
  summary: 'Get the configured out-of-office data of a user.',
  operationId: 'out_of_office-get-out-of-office',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The user id to get out-of-office data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Out-of-office data',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: OutOfOfficeDataSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No out-of-office data was found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}',
  tags: ['out_of_office'],
  summary: 'Set out-of-office absence',
  operationId: 'out_of_office-set-out-of-office',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              firstDay: z
                .string()
                .openapi({ description: 'First day of the absence in format `YYYY-MM-DD`' }),
              lastDay: z
                .string()
                .openapi({ description: 'Last day of the absence in format `YYYY-MM-DD`' }),
              status: z
                .string()
                .openapi({
                  description: 'Short text that is set as user status during the absence',
                }),
              message: z
                .string()
                .openapi({
                  description:
                    'Longer multiline message that is shown to others during the absence',
                }),
              replacementUserId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'User id of the replacement user' }),
            })
            .openapi({ required: ['firstDay', 'lastDay', 'status', 'message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Absence data',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: OutOfOfficeDataSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'When validation fails, e.g. data range error or the first day is not before the last day',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['firstDay', 'statusLength']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'When the user is not logged in',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    404: {
      description: 'When the replacementUserId was provided but replacement user was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}',
  tags: ['out_of_office'],
  summary: 'Clear the out-of-office',
  operationId: 'out_of_office-clear-out-of-office',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When the absence was cleared successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'When the user is not logged in',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCalendarExportRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/calendar/export',
  tags: ['calendar_export'],
  summary: 'Export calendar data',
  operationId: 'calendar_export-export',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              target: z.string().openapi({ description: 'calendar id' }),
              type: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'data format' }),
              options: z
                .object({
                  rangeStart: z.string(),
                  rangeCount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n),
                    )
                    .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
                })
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description: 'configuration options',
                  required: ['rangeStart', 'rangeCount'],
                }),
              user: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'system user id' }),
            })
            .openapi({ required: ['target'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'data in requested format',
      content: {
        'text/calendar; charset=UTF-8': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/calendar+json; charset=UTF-8': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/calendar+xml; charset=UTF-8': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: {
      description: 'invalid parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.string().min(1).exactOptional() })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'user not authorized',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.string().min(1).exactOptional() })
                      .openapi({ required: [] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCalendarImportRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/calendar/import',
  tags: ['calendar_import'],
  summary: 'Import calendar data',
  operationId: 'calendar_import-import',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              transaction: z.string().openapi({ description: 'client generated transaction id' }),
              target: z.string().openapi({ description: 'calendar id' }),
              options: z
                .object({
                  format: z.string().exactOptional(),
                  validation: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                    )
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', enum: [0, 1, 2] }),
                  errors: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.union([z.literal(0n), z.literal(1n)]),
                    )
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', enum: [0, 1] }),
                  supersede: z.boolean().exactOptional(),
                  showCreated: z.boolean().exactOptional(),
                  showUpdated: z.boolean().exactOptional(),
                  showSkipped: z.boolean().exactOptional(),
                  showErrors: z.boolean().exactOptional(),
                })
                .openapi({ description: 'configuration options', required: [] }),
              data: z.string().openapi({ description: 'calendar data' }),
              user: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'system user id' }),
            })
            .openapi({ required: ['transaction', 'target', 'options', 'data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'NDJSON stream of import event objects',
      content: {
        'application/x-ndjson': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'invalid parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.string().min(1).exactOptional() })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'user not authorized',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.string().min(1).exactOptional() })
                      .openapi({ required: [] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpContactsImportRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/contacts/import',
  tags: ['contacts_import'],
  summary: 'Import contacts data',
  operationId: 'contacts_import-import',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              transaction: z.string().openapi({ description: 'client generated transaction id' }),
              target: z.string().openapi({ description: 'address book id' }),
              options: z
                .object({
                  format: z.string().exactOptional(),
                  validation: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                    )
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', enum: [0, 1, 2] }),
                  errors: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.union([z.literal(0n), z.literal(1n)]),
                    )
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', enum: [0, 1] }),
                  supersede: z.boolean().exactOptional(),
                })
                .openapi({ description: 'configuration options', required: [] }),
              data: z.string().openapi({ description: 'contacts data' }),
              user: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'system user id' }),
            })
            .openapi({ required: ['transaction', 'target', 'options', 'data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'NDJSON stream of import event objects',
      content: {
        'application/x-ndjson': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'invalid parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.string().min(1).exactOptional() })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'user not authorized',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.string().min(1).exactOptional() })
                      .openapi({ required: [] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
