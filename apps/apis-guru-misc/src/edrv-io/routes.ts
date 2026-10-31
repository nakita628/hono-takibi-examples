import { createRoute, z } from '@hono/zod-openapi'

const Schema1Schema = z
  .object({
    location: z.string().exactOptional(),
    manufacturer: z.string().exactOptional(),
    model: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    public: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Schema1')

const IncludeChargestation1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate chargestation',
      in: 'query',
      name: 'include_chargestation',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeConnector1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate connector',
      in: 'query',
      name: 'include_connector',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeDriver1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate driver',
      in: 'query',
      name: 'include_driver',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeEvse1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate evse',
      in: 'query',
      name: 'include_evse',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeOrganization1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate organization',
      in: 'query',
      name: 'include_organization',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeRate1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate rate',
      in: 'query',
      name: 'include_rate',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeReservation1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate reservation',
      in: 'query',
      name: 'include_reservation',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeToken1ParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Populate token',
      in: 'query',
      name: 'include_token',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const PaginateEnabled1ParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Enable pagination',
      in: 'query',
      name: 'paginate_enabled',
      schema: { default: true, type: 'boolean' },
      required: false,
    },
  })

const PaginateLimit1ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results per page',
      in: 'query',
      name: 'paginate_limit',
      schema: { default: 20, maximum: 1000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const PaginatePage1ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The queried page index',
      in: 'query',
      name: 'paginate_page',
      schema: { type: 'string' },
      required: false,
    },
  })

const Parameter1ParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Date as ISO String',
      in: 'query',
      name: 'createdAt[$gte]',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const Parameter2ParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Date as ISO String',
      in: 'query',
      name: 'createdAt[$lte]',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const Parameter3ParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Date as ISO String',
      in: 'query',
      name: 'updatedAt[$gte]',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const Parameter4ParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Date as ISO String',
      in: 'query',
      name: 'updatedAt[$lte]',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const SortBy1ParamsSchema = z
  .string()
  .default('createdAt')
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort data by this key',
      in: 'query',
      name: 'sort_by',
      schema: { default: 'createdAt', type: 'string' },
      required: false,
    },
  })

const SortOrder1ParamsSchema = z
  .enum(['desc', 'asc'])
  .default('desc')
  .exactOptional()
  .openapi({
    param: {
      description: 'asc to sort ascending (default is desc - descending)',
      in: 'query',
      name: 'sort_order',
      schema: { default: 'desc', enum: ['desc', 'asc'], type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  flows: {
    implicit: {
      authorizationUrl: 'https://auth.edrv.io/authorize',
      scopes: {
        'read:chargestations': 'Read chargestations',
        'read:chargestations/:id': 'Read a chargestation',
        'read:chargestations/:id/connectors': 'Read connectors for a chargestation',
        'read:connectors': 'Read connectors',
        'read:connectors/:id': 'Read a connector',
        'read:drivers': 'Read drivers',
        'read:drivers/:id': 'Read a driver',
        'read:locations': 'Read locations',
        'read:locations/:id': 'Read a location',
        'read:organizations': 'Read organizations',
        'read:organizations/:id': 'Read an organization',
        'read:realtime': 'Read realtime',
        'read:reservations': 'Read reservations',
        'read:reservations/:id': 'Read a reservations',
        'read:stats/:asset/:statistic': 'Read a statistic',
        'read:tokens': 'Read tokens',
        'read:tokens/:id': 'Read a token',
        'read:transactions': 'Read transactions',
        'read:transactions/:id': 'Read a transaction',
        'write:chargestations': 'Write chargestations',
        'write:chargestations/:id': 'Write a chargestation',
        'write:commands/remotestart': 'Write remotestart for commands',
        'write:commands/remotestop': 'Write remotestop for commands',
        'write:commands/reserve': 'Write reserve for commands',
        'write:commands/reset': 'Write reset for commands',
        'write:commands/unlockconnector': 'Write unlockconnector for commands',
        'write:connectors': 'Write connectors',
        'write:connectors/:id': 'Write a connector',
        'write:drivers': 'Write drivers',
        'write:drivers/:id': 'Write a driver',
        'write:locations': 'Write locations',
        'write:locations/:id': 'Write a location',
        'write:organizations': 'Write organizations',
        'write:organizations/:id': 'Writen an organization',
        'write:reservations': 'Write reservations',
        'write:reservations/:id': 'Write a reservation',
        'write:tokens': 'Write tokens',
        'write:tokens/:id': 'Write a token',
        'write:transactions': 'Write transactions',
        'write:transactions/:id': 'Write a transactions',
      },
    },
  },
  type: 'oauth2',
}

export const getV1ChargestationsRoute = createRoute({
  method: 'get',
  path: '/v1/chargestations',
  tags: ['Charge Stations'],
  description: 'List all Chargestations',
  operationId: 'getChargeStations',
  request: {
    query: z.object({
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by Org. Id',
            in: 'query',
            name: 'organization',
            schema: { type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by Location Id',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      online: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by Online Status',
            in: 'query',
            name: 'online',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Chargestations that have been activated/deactivated by the admin',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      public: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Chargestations that are public',
            in: 'query',
            name: 'public',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_location: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate location',
            in: 'query',
            name: 'include_location',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_evses: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate evses',
            in: 'query',
            name: 'include_evses',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'An array of chargestation objects' } },
})

export const postV1ChargestationsRoute = createRoute({
  method: 'post',
  path: '/v1/chargestations',
  tags: ['Charge Stations'],
  description: 'Create a new charge station',
  operationId: 'postChargeStations',
  request: {
    body: {
      description: 'Include charge station properties to create here',
      content: { 'application/json': { schema: Schema1Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created chargestion object',
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.object({}).exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1ChargestationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/chargestations/{id}',
  tags: ['Charge Stations'],
  description: "Get a single charge station's data",
  operationId: 'getChargeStation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The charge station id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_location: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate location',
            in: 'query',
            name: 'include_location',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_evses: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate evses',
            in: 'query',
            name: 'include_evses',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate organization',
            in: 'query',
            name: 'include_organization',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a chargestion object' } },
})

export const deleteV1ChargestationsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/chargestations/{id}',
  tags: ['Charge Stations'],
  description: 'Use to delete a charge station',
  operationId: 'deleteChargeStation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The charge station id that needs to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Returns the deleted chargestion object' },
    400: { description: 'Request Error' },
  },
})

export const patchV1ChargestationsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/chargestations/{id}',
  tags: ['Charge Stations'],
  description: "Update a charge station's data",
  operationId: 'patchChargeStation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of charge station that needs to be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include charge station properties to update here',
      content: { 'application/json': { schema: Schema1Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated chargestion object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1ChargestationsIdConnectorsRoute = createRoute({
  method: 'get',
  path: '/v1/chargestations/{id}/connectors',
  tags: ['Charge Stations'],
  description: 'List connectors for a chargestation',
  operationId: 'getChargeStationConnectors',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'chargeStation id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_evse: IncludeEvse1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Returns an array of connector objects' },
    400: { description: 'A failure response' },
  },
})

export const getV1CommandsRoute = createRoute({
  method: 'get',
  path: '/v1/commands',
  tags: ['Commands'],
  description: 'Get Commands data',
  operationId: 'getCommands',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_chargestation: IncludeChargestation1ParamsSchema,
      include_driver: IncludeDriver1ParamsSchema,
      include_transaction: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate transaction',
            in: 'query',
            name: 'include_transaction',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postV1CommandsCancelreservationRoute = createRoute({
  method: 'post',
  path: '/v1/commands/cancelreservation',
  tags: ['Commands'],
  description:
    'Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'cancelreservation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ reservation: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const postV1CommandsChargingscheduleRoute = createRoute({
  method: 'post',
  path: '/v1/commands/chargingschedule',
  tags: ['Smart Charging'],
  description: 'Set one of charging power or current of a specific chargestation connector',
  operationId: 'setchargingschedule',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connector: z.string().exactOptional(),
              schedule: z
                .array(
                  z
                    .object({
                      endDate: z.string().exactOptional(),
                      limit: z.number().exactOptional(),
                      startDate: z.string().exactOptional(),
                      unit: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              command: z.object({}).exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const deleteV1CommandsChargingscheduleRoute = createRoute({
  method: 'delete',
  path: '/v1/commands/chargingschedule',
  tags: ['Smart Charging'],
  description: 'Delete a smart charging schedule',
  operationId: 'deletechargingschedule',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ id: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              command: z.object({}).exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Schedule not found' },
  },
})

export const postV1CommandsRemotestartRoute = createRoute({
  method: 'post',
  path: '/v1/commands/remotestart',
  tags: ['Commands'],
  description:
    'Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'remotestart',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.string().exactOptional(),
              connector: z.string().exactOptional(),
              driver: z.string().exactOptional(),
              token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              command: z.object({}).exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const postV1CommandsRemotestopRoute = createRoute({
  method: 'post',
  path: '/v1/commands/remotestop',
  tags: ['Commands'],
  description:
    'Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'remotestop',
  request: {
    body: {
      description: 'Remote stop transaction info here.',
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.string().exactOptional(),
              driver: z.string().exactOptional(),
              transaction: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'A successful response' },
    400: { description: 'A failure response' },
  },
})

export const postV1CommandsReserveRoute = createRoute({
  method: 'post',
  path: '/v1/commands/reserve',
  tags: ['Commands'],
  description:
    'Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'reserve',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.string().exactOptional(),
              connector: z.string().exactOptional(),
              driver: z.string().exactOptional(),
              endDate: z.string().exactOptional(),
              token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              command: z.object({}).exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const postV1CommandsResetRoute = createRoute({
  method: 'post',
  path: '/v1/commands/reset',
  tags: ['Commands'],
  description:
    'Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'reset',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ chargestation: z.string().exactOptional(), type: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const postV1CommandsUnlockconnectorRoute = createRoute({
  method: 'post',
  path: '/v1/commands/unlockconnector',
  tags: ['Commands'],
  description:
    'Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'unlockconnector',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.string().exactOptional(),
              connector: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              command: z.object({}).exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1CommandsIdVariablesRoute = createRoute({
  method: 'get',
  path: '/v1/commands/{id}/variables',
  tags: ['Commands'],
  description: "Get a charge station's config variables",
  operationId: 'getVariables',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The chargestation id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns Cs configurations array' } },
})

export const patchV1CommandsIdVariablesRoute = createRoute({
  method: 'patch',
  path: '/v1/commands/{id}/variables',
  tags: ['Commands'],
  description: 'Update config variables for a chargestation',
  operationId: 'patchChargeStationVariable',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of charge station',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Charge Station Variable to set',
      content: {
        'application/json': {
          schema: z
            .object({
              value: z.string().exactOptional(),
              variable: z
                .enum([
                  'MeterValueSampleInterval',
                  'HeartbeatInterval',
                  'ConnectionTimeOut',
                  'WebSocketPingInterval',
                  'TransactionMessageRetryInterval',
                  'TransactionMessageAttempts',
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1ConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v1/configurations',
  tags: ['Configurations'],
  description: 'Get Configurations data',
  operationId: 'getConfigurations',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postV1ConfigurationsRoute = createRoute({
  method: 'post',
  path: '/v1/configurations',
  tags: ['Configurations'],
  description: 'Create connector with parameters',
  operationId: 'postConfigurations',
  request: {
    body: {
      description: 'Include Configuration properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1ConfigurationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{id}',
  tags: ['Configurations'],
  description: 'Get one Configuration data',
  operationId: 'getConfiguration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of Configuration that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV1ConnectorsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors',
  tags: ['Connectors'],
  description: 'List connectors',
  operationId: 'getConnectors',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_evse: IncludeEvse1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
      include_rate: IncludeRate1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Returns an array of connector objects' } },
})

export const postV1ConnectorsRoute = createRoute({
  method: 'post',
  path: '/v1/connectors',
  tags: ['Connectors'],
  description: 'Create a new connector',
  operationId: 'postConnectors',
  request: {
    body: {
      description: 'Include Connector properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.string().exactOptional(),
              format: z.string().exactOptional(),
              power: z.int().exactOptional(),
              power_type: z.string().exactOptional(),
              rate: z.string().exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the new connector object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1ConnectorsIdRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{id}',
  tags: ['Connectors'],
  description: 'Get a connector',
  operationId: 'getConnector',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of connector that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_evse: IncludeEvse1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
      include_rate: IncludeRate1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Returns a connector object' } },
})

export const deleteV1ConnectorsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/connectors/{id}',
  tags: ['Connectors'],
  description: 'Delete a connector',
  operationId: 'deleteConnector',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The connector id that needs to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns the deleted connector object' } },
})

export const patchV1ConnectorsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/connectors/{id}',
  tags: ['Connectors'],
  description: "Update a connector's data",
  operationId: 'patchConnector',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of connector that needs to be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include connector properties to update here',
      content: {
        'application/json': {
          schema: z
            .object({
              chargestation: z.string().exactOptional(),
              format: z.string().exactOptional(),
              power: z.int().exactOptional(),
              power_type: z.string().exactOptional(),
              rate: z.string().exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the updated connector object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1DriversRoute = createRoute({
  method: 'get',
  path: '/v1/drivers',
  tags: ['Drivers'],
  description: 'List all drivers',
  operationId: 'getDrivers',
  request: {
    query: z.object({
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get a list of active drivers',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_tokens: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate tokens',
            in: 'query',
            name: 'include_tokens',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_group: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate group',
            in: 'query',
            name: 'include_group',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of driver objects',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const postV1DriversRoute = createRoute({
  method: 'post',
  path: '/v1/drivers',
  tags: ['Drivers'],
  description: 'Create a new driver',
  operationId: 'postDrivers',
  request: {
    body: {
      description: 'Include driver properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().default(true).exactOptional(),
              address: z
                .object({
                  city: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  postalCode: z.string().exactOptional(),
                  streetAndNumber: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              email: z.string().exactOptional(),
              firstname: z.string(),
              lastname: z.string(),
              phone: z
                .object({
                  home: z.string().exactOptional(),
                  mobile: z.string().exactOptional(),
                  work: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              source: z.enum(['physical', 'slack', 'telegram', 'sms']),
            })
            .openapi({ required: ['firstname', 'lastname', 'source'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the newly created driver object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1DriversIdRoute = createRoute({
  method: 'get',
  path: '/v1/drivers/{id}',
  tags: ['Drivers'],
  description: "Get a driver's data",
  operationId: 'getDriver',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The driver id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_tokens: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate tokens',
            in: 'query',
            name: 'include_tokens',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_group: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate group',
            in: 'query',
            name: 'include_group',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate organization',
            in: 'query',
            name: 'include_organization',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a driver object' } },
})

export const deleteV1DriversIdRoute = createRoute({
  method: 'delete',
  path: '/v1/drivers/{id}',
  tags: ['Drivers'],
  description: 'Delete a driver',
  operationId: 'deleteDriver',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The driver id that needs to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns the deleted driver object' } },
})

export const patchV1DriversIdRoute = createRoute({
  method: 'patch',
  path: '/v1/drivers/{id}',
  tags: ['Drivers'],
  description: "Update a driver's data",
  operationId: 'patchDriver',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of driver that needs to be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include driver properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().exactOptional(),
              address: z
                .object({
                  city: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  postalCode: z.string().exactOptional(),
                  streetAndNumber: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              email: z.string().exactOptional(),
              firstname: z.string().exactOptional(),
              lastname: z.string().exactOptional(),
              phone: z
                .object({
                  home: z.string().exactOptional(),
                  mobile: z.string().exactOptional(),
                  work: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              source: z.string().exactOptional(),
              tokens: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated driver object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1LocationIdRoute = createRoute({
  method: 'get',
  path: '/v1/location/{id}',
  tags: ['Locations'],
  description: "Get a location's data",
  operationId: 'getLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The location id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_chargestations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate chargestations',
            in: 'query',
            name: 'include_chargestations',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate organization',
            in: 'query',
            name: 'include_organization',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a location object' } },
})

export const deleteV1LocationIdRoute = createRoute({
  method: 'delete',
  path: '/v1/location/{id}',
  tags: ['Locations'],
  description: 'Delete a location',
  operationId: 'deleteLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The location id that needs to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns the deleted location object' } },
})

export const patchV1LocationIdRoute = createRoute({
  method: 'patch',
  path: '/v1/location/{id}',
  tags: ['Locations'],
  description: "Update a location's data",
  operationId: 'patchLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of location that needs to be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include location properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().default(true).exactOptional(),
              address: z
                .object({
                  city: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  postalCode: z.string().exactOptional(),
                  state: z.string().exactOptional(),
                  streetAndNumber: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              chargestations: z.array(z.any()).exactOptional(),
              coordinates: z
                .object({
                  latitude: z.number().exactOptional(),
                  longitude: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              openingHours: z
                .object({
                  '0': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  '1': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  '2': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  '3': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  '4': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  '5': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  '6': z
                    .array(
                      z
                        .object({
                          endTime: z.string().exactOptional(),
                          startTime: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              operatorName: z.string().exactOptional(),
              timezone: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated location object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1LocationsRoute = createRoute({
  method: 'get',
  path: '/v1/locations',
  tags: ['Locations'],
  description: 'Get Locations data',
  operationId: 'getLocations',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'A failure response' } },
})

export const postV1LocationsRoute = createRoute({
  method: 'post',
  path: '/v1/locations',
  tags: ['Locations'],
  description: 'Create a new location',
  operationId: 'postLocations',
  request: {
    body: {
      description: 'Include location properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().default(true).exactOptional(),
              address: z
                .object({
                  city: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  postalCode: z.string().exactOptional(),
                  streetAndNumber: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
              chargestations: z.array(z.any()).exactOptional(),
              coordinates: z
                .object({
                  latitude: z.number().exactOptional(),
                  longitude: z.number().exactOptional(),
                })
                .openapi({ required: [] }),
              operatorName: z.string(),
            })
            .openapi({ required: ['operatorName', 'address', 'coordinates'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the newly created location object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1OrganizationsRoute = createRoute({
  method: 'get',
  path: '/v1/organizations',
  tags: ['Organizations'],
  description: 'Get an array of all Organizations',
  operationId: 'getOrganizations',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_locations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate locations',
            in: 'query',
            name: 'include_locations',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns an array of Organization Objects' } },
})

export const getV1OrganizationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{id}',
  tags: ['Organizations'],
  description: "Get one organization's data by id",
  operationId: 'getOrganization',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of organization that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_locations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate locations',
            in: 'query',
            name: 'include_locations',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns an Organization Object' } },
})

export const patchV1OrganizationsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/organizations/{id}',
  tags: ['Organizations'],
  description: "Update an organization's data",
  operationId: 'patchOrganization',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of organization that needs to be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include organization properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().exactOptional(),
              address: z
                .object({
                  city: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  postalCode: z.string().exactOptional(),
                  streetAndNumber: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              channels: z
                .object({
                  slack: z.object({}).exactOptional(),
                  telegram: z.object({}).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              configurations: z
                .object({
                  basicAuthEnabled: z.boolean().exactOptional(),
                  basicAuthPassword: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              links: z
                .object({
                  about: z.string().exactOptional(),
                  contact: z.string().exactOptional(),
                  privacy: z.string().exactOptional(),
                  support: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              locations: z.array(z.any()).exactOptional(),
              logo: z.string().exactOptional(),
              name: z.string().exactOptional(),
              otp: z.string().exactOptional(),
              stripe_connected_account_id: z.string().exactOptional(),
              stripe_country: z.string().exactOptional(),
              stripe_currency: z.string().exactOptional(),
              stripe_reserve_amount: z.int().exactOptional(),
              support: z
                .object({
                  business_hours: z.string().exactOptional(),
                  chat: z
                    .object({ type: z.string().exactOptional(), value: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  contact_number: z.string().exactOptional(),
                  email: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              supportChat: z
                .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              theme: z
                .object({
                  colors: z
                    .object({
                      primary: z.string().exactOptional(),
                      secondary: z.string().exactOptional(),
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
      required: true,
    },
  },
  responses: {
    201: { description: 'Returns the modified Organization Object' },
    400: { description: 'A failure response' },
  },
})

export const getV1RealtimeRoute = createRoute({
  method: 'get',
  path: '/v1/realtime',
  tags: ['Realtime'],
  description: 'Use to request a Websockets handshake',
  operationId: 'getRealtime',
  request: {
    headers: z.object({
      'sec-websocket-protocol': z
        .string()
        .openapi({
          param: {
            description: 'The JWT token to use for auth',
            in: 'header',
            name: 'sec-websocket-protocol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 101: { description: 'Upgrade connection' } },
})

export const getV1ReservationsRoute = createRoute({
  method: 'get',
  path: '/v1/reservations',
  tags: ['Reservations'],
  description: 'Get Reservations data',
  operationId: 'getReservations',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_chargestation: IncludeChargestation1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV1ReservationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/reservations/{id}',
  tags: ['Reservations'],
  description: 'Get one reservation data',
  operationId: 'getReservation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the reservation that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_chargestation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate chargestation',
            in: 'query',
            name: 'include_chargestation',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate organization',
            in: 'query',
            name: 'include_organization',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const patchV1ReservationsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/reservations/{id}',
  tags: ['Reservations'],
  description:
    'Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.',
  operationId: 'updatereservation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the reservation that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connector: z.int().min(1).exactOptional(),
              driver: z.string().exactOptional(),
              endDate: z.string().exactOptional(),
              evse: z.int().min(1).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1TokensRoute = createRoute({
  method: 'get',
  path: '/v1/tokens',
  tags: ['Tokens'],
  description: 'List tokens',
  operationId: 'getTokens',
  request: {
    query: z.object({
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_driver: IncludeDriver1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns an array of token objects',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'A failure response' },
  },
})

export const postV1TokensRoute = createRoute({
  method: 'post',
  path: '/v1/tokens',
  tags: ['Tokens'],
  description: 'Create a new token',
  operationId: 'postTokens',
  request: {
    body: {
      description: 'Include token properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().default(true),
              channel: z.enum(['physical', 'slack', 'telegram', 'sms']),
              driver: z.string(),
              physicalId: z.string(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: ['active', 'physicalId', 'driver', 'channel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns a newly created token object',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1TokensIdRoute = createRoute({
  method: 'get',
  path: '/v1/tokens/{id}',
  tags: ['Tokens'],
  description: "Get a single token's data",
  operationId: 'getToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The token id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_driver: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate driver',
            in: 'query',
            name: 'include_driver',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_organization: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Populate organization',
            in: 'query',
            name: 'include_organization',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a token object' } },
})

export const deleteV1TokensIdRoute = createRoute({
  method: 'delete',
  path: '/v1/tokens/{id}',
  tags: ['Tokens'],
  description: 'Use to delete a token',
  operationId: 'deleteToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The token id that needs to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns the deleted token object' } },
})

export const patchV1TokensIdRoute = createRoute({
  method: 'patch',
  path: '/v1/tokens/{id}',
  tags: ['Tokens'],
  description: 'Update a token',
  operationId: 'patchToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of token that needs to be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include token properties to create here',
      content: {
        'application/json': {
          schema: z
            .object({
              active: z.boolean().default(true).exactOptional(),
              channel: z.enum(['physical', 'slack', 'telegram', 'sms']).exactOptional(),
              driver: z.string().exactOptional(),
              physicalId: z.string().exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the updated token',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1TransactionsRoute = createRoute({
  method: 'get',
  path: '/v1/transactions',
  tags: ['Transactions'],
  description: 'Get a list of transactions',
  operationId: 'getTransactions',
  request: {
    query: z.object({
      status: z
        .enum(['Started', 'Ended'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Started to get only active transactions',
            in: 'query',
            name: 'status',
            schema: { enum: ['Started', 'Ended'], type: 'string' },
            required: false,
          },
        }),
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_chargestation: IncludeChargestation1ParamsSchema,
      include_evse: IncludeEvse1ParamsSchema,
      include_connector: IncludeConnector1ParamsSchema,
      include_driver: IncludeDriver1ParamsSchema,
      include_token: IncludeToken1ParamsSchema,
      include_reservation: IncludeReservation1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
      include_rate: IncludeRate1ParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns an array of transaction objects',
      content: {
        'application/json': {
          schema: z
            .object({
              hasNext: z.boolean().exactOptional(),
              hasPrevious: z.boolean().exactOptional(),
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Not Found' },
  },
})

export const getV1TransactionsIdRoute = createRoute({
  method: 'get',
  path: '/v1/transactions/{id}',
  tags: ['Transactions'],
  description: 'Get a specific transaction',
  operationId: 'getTransaction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The transaction id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_chargestation: IncludeChargestation1ParamsSchema,
      include_evse: IncludeEvse1ParamsSchema,
      include_connector: IncludeConnector1ParamsSchema,
      include_driver: IncludeDriver1ParamsSchema,
      include_token: IncludeToken1ParamsSchema,
      include_reservation: IncludeReservation1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
      include_rate: IncludeRate1ParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Returns a transaction object' },
    401: { description: 'Not Found' },
  },
})

export const getV1TransactionsIdCostRoute = createRoute({
  method: 'get',
  path: '/v1/transactions/{id}/cost',
  tags: ['Transactions'],
  description: "Get a specific transaction's cost",
  operationId: 'getTransactionCost',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The transaction id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: "Returns a transaction's cost object" },
    401: { description: 'Not Found' },
  },
})

export const getV1VehiclesRoute = createRoute({
  method: 'get',
  path: '/v1/vehicles',
  tags: ['Vehicles'],
  description: 'List all vehicles',
  operationId: 'getVehicles',
  request: {
    query: z.object({
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get a list of active vehicles',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      paginate_limit: PaginateLimit1ParamsSchema,
      paginate_page: PaginatePage1ParamsSchema,
      paginate_enabled: PaginateEnabled1ParamsSchema,
      sort_by: SortBy1ParamsSchema,
      sort_order: SortOrder1ParamsSchema,
      'createdAt[$gte]': Parameter1ParamsSchema,
      'createdAt[$lte]': Parameter2ParamsSchema,
      'updatedAt[$gte]': Parameter3ParamsSchema,
      'updatedAt[$lte]': Parameter4ParamsSchema,
      include_driver: IncludeDriver1ParamsSchema,
      include_token: IncludeToken1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of vehicle objects',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.array(z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1VehiclesIdRoute = createRoute({
  method: 'get',
  path: '/v1/vehicles/{id}',
  tags: ['Vehicles'],
  description: "Get a vehicle's data",
  operationId: 'getVehicle',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The vehicule id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_driver: IncludeDriver1ParamsSchema,
      include_token: IncludeToken1ParamsSchema,
      include_organization: IncludeOrganization1ParamsSchema,
    }),
  },
  responses: { 200: { description: 'Returns a vehicle object' } },
})

export const getV1VehiclesIdBatteryRoute = createRoute({
  method: 'get',
  path: '/v1/vehicles/{id}/battery',
  tags: ['Vehicles'],
  description: "Get a vehicle's battery",
  operationId: 'getVehicleBattery',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The vehicle id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a vehicle object' } },
})

export const getV1VehiclesIdChargeRoute = createRoute({
  method: 'get',
  path: '/v1/vehicles/{id}/charge',
  tags: ['Vehicles'],
  description: "Get a vehicle's charge",
  operationId: 'getVehicleCharge',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The vehicle id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a vehicle object' } },
})

export const postV1VehiclesIdChargeRoute = createRoute({
  method: 'post',
  path: '/v1/vehicles/{id}/charge',
  tags: ['Vehicles'],
  description: 'Change charge',
  operationId: 'postCharge',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The vehicle id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Include command properties to send here',
      content: {
        'application/json': {
          schema: z.object({ action: z.enum(['START', 'STOP']) }).openapi({ required: ['action'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the status of the command',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional(),
              ok: z.boolean().exactOptional(),
              result: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'A failure response' },
  },
})

export const getV1VehiclesIdLocationRoute = createRoute({
  method: 'get',
  path: '/v1/vehicles/{id}/location',
  tags: ['Vehicles'],
  description: "Get a vehicle's location",
  operationId: 'getVehicleLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The vehicle id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a vehicle object' } },
})

export const getV1VehiclesIdOdometerRoute = createRoute({
  method: 'get',
  path: '/v1/vehicles/{id}/odometer',
  tags: ['Vehicles'],
  description: "Get a vehicle's odometer",
  operationId: 'getVehicleOdometer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The vehicle id that needs to be fetched',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a vehicle object' } },
})
