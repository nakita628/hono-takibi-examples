import { createRoute, z } from '@hono/zod-openapi'

const ClientAccessTokenSecurityScheme = {
  description:
    'A `ClientAccessToken` access token is obtained via the [OAuth 2.0 Client Credentials grant](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/)\n\nWhen accessing protected resources, the token should be provided in a Bearer authorization header as specified in [RFC6750](https://tools.ietf.org/html/rfc6750#section-2.1)\n\nExample:\n```\nDELETE /users/xyz HTTP/1.1\nAuthorization: Bearer yQ89j3LAnqBx42gWGUl4v-jxoS1mfTAH3Q52WTGrExw.zgRcRrE6KRKUgVQEVr2Pifub8Z7trCZrobKjvhGIOTI\n```\n\nYou can read more about obtaining this token in the [Authorization](#section/Authorization) section\n',
  flows: { clientCredentials: { scopes: {}, tokenUrl: 'https://link.test.enode.io/oauth2/token' } },
  type: 'oauth2',
}

const UserAccessTokenSecurityScheme = {
  description:
    'A `UserAccessToken` access token is obtained via the [OAuth 2.0 Authorization Code grant](https://www.oauth.com/oauth2-servers/access-tokens/authorization-code-request/)\n\nThis token represents the authorization for the bearer to access resources on behalf of the user who authorized it. This authorization is further limited by scopes. When relevant, the `scope` required by each endpoint is listed in the documentation for that endpoint.\n\nWhen accessing protected resources, the token should be provided in a Bearer authorization header as specified in [RFC6750](https://tools.ietf.org/html/rfc6750#section-2.1)\n\nExample:\n```\nGET /vehicles HTTP/1.1\nAuthorization: Bearer yQ89j3LAnqBx42gWGUl4v-jxoS1mfTAH3Q52WTGrExw.zgRcRrE6KRKUgVQEVr2Pifub8Z7trCZrobKjvhGIOTI\n```\n\nYou can read more about obtaining this token in the [Authorization](#section/Authorization) section\n',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://link.test.enode.io/oauth2/auth',
      scopes: {
        all: 'Read and write all resources',
        'charger:charge_state': 'Read charger charge state',
        'charger:information': 'Read charger information',
        charging_location: "Read & write user's charging locations",
        'control:charger:charging': 'Control charger charging',
        'control:vehicle:charging': 'Control vehicle charging',
        'vehicle:charge_state': 'Read vehicle charge state',
        'vehicle:information': 'Read vehicle information',
        'vehicle:location': 'Read vehicle location',
        'vehicle:odometer': 'Read vehicle odometer',
        'vehicle:smart_charging_policy': 'Read & write vehicle smart charging policy',
      },
      tokenUrl: 'https://link.test.enode.io/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getChargersRoute = createRoute({
  method: 'get',
  path: '/chargers',
  tags: ['Chargers'],
  summary: 'List Chargers',
  operationId: 'getChargers',
  request: {
    query: z.object({
      'field[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['chargeState', 'location'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional array of Charger fields that should be included in the response, for example: `?field[]=information&field[]=chargeState` \n\nBy default, no optional fields are included and only the Charger ID will be returned. Response time will generally be slower the more fields you request.',
            explode: true,
            in: 'query',
            name: 'field[]',
            schema: { items: { enum: ['chargeState', 'location'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                chargeState: z
                  .object({
                    chargeRate: z
                      .number()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        description:
                          'The current charge rate in kW.\n\nThis property is only available when the charger is actively charging a vehicle, and is `null` any other time.',
                        example: 40.1,
                      }),
                    isCharging: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Current charging status', example: false }),
                    isPluggedIn: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether the charger has a vehicle plugged into it (regardless of whether that vehicle is actually charging)',
                        example: true,
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                id: z.string().exactOptional().openapi({ description: 'Charger ID' }),
                information: z
                  .object({
                    brand: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Charger brand', example: 'Easee' }),
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Charger ID',
                        example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                      }),
                    model: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Charger model', example: 'Home' }),
                    year: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Charger production year', example: 2020 }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Descriptive information about the Charger',
                    required: [],
                  }),
                isReachable: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Is the charger currently reachable?' }),
                lastSeen: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description: 'The last time the charger was successfully communicated with',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  security: [
    { UserAccessToken: ['all'] },
    { UserAccessToken: ['charger:charge_state'] },
    { UserAccessToken: ['charger:information'] },
  ],
})

export const getChargersChargerIdRoute = createRoute({
  method: 'get',
  path: '/chargers/{chargerId}',
  tags: ['Chargers'],
  summary: 'Get Charger',
  operationId: 'getCharger',
  request: {
    params: z.object({
      chargerId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Charger',
            in: 'path',
            name: 'chargerId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    query: z.object({
      'field[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['chargeState', 'location'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional array of Charger fields that should be included in the response, for example: `?field[]=information&field[]=chargeState` \n\nBy default, no optional fields are included and only the Charger ID will be returned. Response time will generally be slower the more fields you request.',
            explode: true,
            in: 'query',
            name: 'field[]',
            schema: { items: { enum: ['chargeState', 'location'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              chargeState: z
                .object({
                  chargeRate: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        'The current charge rate in kW.\n\nThis property is only available when the charger is actively charging a vehicle, and is `null` any other time.',
                      example: 40.1,
                    }),
                  isCharging: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Current charging status', example: false }),
                  isPluggedIn: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether the charger has a vehicle plugged into it (regardless of whether that vehicle is actually charging)',
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'Charger ID' }),
              information: z
                .object({
                  brand: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Charger brand', example: 'Easee' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Charger ID',
                      example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                    }),
                  model: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Charger model', example: 'Home' }),
                  year: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Charger production year', example: 2020 }),
                })
                .exactOptional()
                .openapi({
                  description: 'Descriptive information about the Charger',
                  required: [],
                }),
              isReachable: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Is the charger currently reachable?' }),
              lastSeen: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'The last time the charger was successfully communicated with',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [
    { UserAccessToken: ['all'] },
    { UserAccessToken: ['charger:charge_state'] },
    { UserAccessToken: ['charger:information'] },
  ],
})

export const postChargersChargerIdChargingRoute = createRoute({
  method: 'post',
  path: '/chargers/{chargerId}/charging',
  tags: ['Chargers'],
  summary: 'Control Charging',
  description: 'Instruct the charger to start or stop charging',
  operationId: 'controlChargerCharging',
  request: {
    params: z.object({
      chargerId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Charger',
            in: 'path',
            name: 'chargerId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .enum(['START', 'STOP'])
                .openapi({ description: 'Charging action to perform', example: 'START' }),
            })
            .openapi({ required: ['action'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['control:charger:charging'] }],
})

export const getChargingLocationsRoute = createRoute({
  method: 'get',
  path: '/charging-locations',
  tags: ['Charging Locations'],
  summary: 'List Charging Locations',
  description: 'Returns a list of Charging Locations registered to the User',
  operationId: 'getCharginglocations',
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z
                  .uuid()
                  .openapi({
                    description: 'Charging Location ID',
                    example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                    readOnly: true,
                  }),
                latitude: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
                longitude: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'User-supplied name for the Charging Location',
                    example: 'Home',
                  }),
              })
              .openapi({ required: ['id'] }),
          ),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['charging_location'] }],
})

export const postChargingLocationsRoute = createRoute({
  method: 'post',
  path: '/charging-locations',
  tags: ['Charging Locations'],
  summary: 'Create Charging Location',
  operationId: 'postCharginglocations',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'Charging Location ID',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                  readOnly: true,
                }),
              latitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
              longitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User-supplied name for the Charging Location',
                  example: 'Home',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'Charging Location ID',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                  readOnly: true,
                }),
              latitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
              longitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User-supplied name for the Charging Location',
                  example: 'Home',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['charging_location'] }],
})

export const getChargingLocationsChargingLocationIdRoute = createRoute({
  method: 'get',
  path: '/charging-locations/{chargingLocationId}',
  tags: ['Charging Locations'],
  summary: 'Get Charging Location',
  operationId: 'getCharginglocationsCharginglocationid',
  request: {
    params: z.object({
      chargingLocationId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Charging Location',
            in: 'path',
            name: 'chargingLocationId',
            required: true,
            schema: { type: 'string' },
            'x-format': { guid: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'Charging Location ID',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                  readOnly: true,
                }),
              latitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
              longitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User-supplied name for the Charging Location',
                  example: 'Home',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['charging_location'] }],
})

export const putChargingLocationsChargingLocationIdRoute = createRoute({
  method: 'put',
  path: '/charging-locations/{chargingLocationId}',
  tags: ['Charging Locations'],
  summary: 'Update Charging Location',
  description: 'Updates a charging location with new configuration',
  operationId: 'putCharginglocationsCharginglocationid',
  request: {
    params: z.object({
      chargingLocationId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Charging Location',
            in: 'path',
            name: 'chargingLocationId',
            required: true,
            schema: { type: 'string' },
            'x-format': { guid: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'Charging Location ID',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                  readOnly: true,
                }),
              latitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
              longitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User-supplied name for the Charging Location',
                  example: 'Home',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'Charging Location ID',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                  readOnly: true,
                }),
              latitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
              longitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'User-supplied name for the Charging Location',
                  example: 'Home',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['charging_location'] }],
})

export const deleteChargingLocationsChargingLocationIdRoute = createRoute({
  method: 'delete',
  path: '/charging-locations/{chargingLocationId}',
  tags: ['Charging Locations'],
  summary: 'Delete Charging Location',
  description: 'Delete a Charging Location',
  operationId: 'deleteCharginglocationsCharginglocationid',
  request: {
    params: z.object({
      chargingLocationId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Charging Location',
            in: 'path',
            name: 'chargingLocationId',
            required: true,
            schema: { type: 'string' },
            'x-format': { guid: true },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['charging_location'] }],
})

export const getHealthReadyRoute = createRoute({
  method: 'get',
  path: '/health/ready',
  tags: ['Service Health'],
  summary: 'Check Service Readiness',
  description:
    'Gets the combined health status of the service and all functionalities and dependencies.',
  operationId: 'getHealthReady',
  responses: {
    204: { description: 'All functionalities are operating nominally', content: {} },
    503: {
      description: 'At least one functionality of the system is not operating nominally',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              description: 'At least one functionality of the system is not operating nominally',
            }),
        },
      },
    },
  },
})

export const getHealthVendorsRoute = createRoute({
  method: 'get',
  path: '/health/vendors',
  tags: ['Service Health'],
  summary: 'Check Available Vendors',
  description: 'List the supported vendors and their current status.',
  operationId: 'getHealthVendors',
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  displayName: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Displayable name of the Vendor', example: 'Tesla' }),
                  status: z
                    .enum(['READY', 'ELEVATED_ERROR_RATE', 'OUTAGE'])
                    .exactOptional()
                    .openapi({ description: 'Ready-state of the Vendor', example: 'READY' }),
                  vendor: z
                    .enum(['TESLA', 'BMW', 'AUDI', 'VOLKSWAGEN', 'HYUNDAI', 'PEUGEOT', 'NISSAN'])
                    .exactOptional()
                    .openapi({ description: 'Vendor ID', example: 'TESLA' }),
                })
                .openapi({ description: 'Vendor status and metadata', required: [] }),
            )
            .openapi({
              example: [
                { displayName: 'Tesla', status: 'READY', vendor: 'TESLA' },
                { displayName: 'BMW', status: 'READY', vendor: 'BMW' },
                { displayName: 'Audi', status: 'READY', vendor: 'AUDI' },
              ],
            }),
        },
      },
    },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Me'],
  summary: 'Get My User',
  description:
    'Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.',
  operationId: 'getMe',
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().min(1).exactOptional().openapi({ example: '123456789-ABc' }),
              linkedVendors: z
                .array(
                  z
                    .object({
                      isValid: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether the provided credentials are currently valid. A `false` value here indicates that a credential has become invalidated, and [Link User](#operation/postUsersUseridLink) should be used to get new credentials from this user.',
                        }),
                      vendor: z
                        .enum([
                          'TESLA',
                          'BMW',
                          'AUDI',
                          'VOLKSWAGEN',
                          'HYUNDAI',
                          'PEUGEOT',
                          'NISSAN',
                        ])
                        .exactOptional()
                        .openapi({ description: 'Vendor ID', example: 'TESLA' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: [] }],
})

export const deleteMeVendorsVendorRoute = createRoute({
  method: 'delete',
  path: '/me/vendors/{vendor}',
  tags: ['Me'],
  summary: 'Disconnect Vendor',
  description:
    "Disconnect a single Vendor from the User's account.\n\nAll stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.",
  operationId: 'disconnectVendor',
  request: {
    params: z.object({
      vendor: z
        .enum(['TESLA', 'BMW', 'AUDI', 'VOLKSWAGEN', 'HYUNDAI', 'PEUGEOT', 'NISSAN'])
        .openapi({
          param: {
            description: 'Vendor to be unlinked',
            in: 'path',
            name: 'vendor',
            required: true,
            schema: {
              description: 'Vendor ID',
              enum: ['TESLA', 'BMW', 'AUDI', 'VOLKSWAGEN', 'HYUNDAI', 'PEUGEOT', 'NISSAN'],
              example: 'TESLA',
              type: 'string',
            },
          },
          description: 'Vendor ID',
          example: 'TESLA',
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ UserAccessToken: [] }],
})

export const getStatisticsChargingRoute = createRoute({
  method: 'get',
  path: '/statistics/charging',
  tags: ['Statistics'],
  summary: 'Get User Charging Statistics',
  description:
    'Returns a normalized timeseries of statistics about power consumption and price for the User.',
  operationId: 'getStatisticsCharging',
  request: {
    query: z.object({
      resolution: z
        .enum(['HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR'])
        .default('DAY')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The unit of time the data will be cut into before aggregate statistics are applied. For instance if you choose DAY, then each item in the returned array will cover 1 day.',
            in: 'query',
            name: 'resolution',
            schema: {
              default: 'DAY',
              enum: ['HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR'],
              type: 'string',
            },
            required: false,
          },
        }),
      startDate: z.iso
        .date()
        .openapi({
          param: {
            description: 'Earliest date to include in the response',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Latest date to include in the response (defaults to current date/time)',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      vehicleId: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter statistics to only include this vehicle',
            in: 'query',
            name: 'vehicleId',
            schema: { minLength: 1, type: 'string' },
            required: false,
          },
        }),
      chargingLocationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter statistics to only include this charging location',
            in: 'query',
            name: 'chargingLocationId',
            schema: { type: 'string' },
            'x-format': { guid: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  costSum: z
                    .number()
                    .openapi({ description: 'Total cost in <CURRENCY>', example: 3.14 }),
                  date: z.iso
                    .date()
                    .openapi({
                      description: 'The start date of this sample within the timeseries',
                    }),
                  kw: z
                    .object({
                      max: z.number().openapi({ example: 78 }),
                      mean: z.number().openapi({ example: 61 }),
                      min: z.number().openapi({ example: 0 }),
                    })
                    .openapi({
                      description: 'Aggregate statistics for charge rate in kW',
                      required: ['min', 'max', 'mean'],
                    }),
                  kwhSum: z
                    .number()
                    .openapi({ description: 'Total power consumption in kWh', example: 120 }),
                  price: z
                    .object({
                      max: z.number().openapi({ example: 78 }),
                      mean: z.number().openapi({ example: 61 }),
                      min: z.number().openapi({ example: 0 }),
                    })
                    .openapi({
                      description: 'Aggregate statistics for power price (<CURRENCY> per kWh)',
                      required: ['min', 'max', 'mean'],
                    }),
                })
                .openapi({ required: ['kw', 'kwhSum', 'price', 'costSum', 'date'] }),
            )
            .openapi({
              example: [
                {
                  costSum: 3.14,
                  date: '2021-01-19T09:37:36.845Z',
                  kw: { max: 78, mean: 61, min: 0 },
                  kwhSum: 120,
                  price: { max: 14.4, mean: 14.1, min: 13.8 },
                },
              ],
            }),
        },
      },
    },
  },
  security: [{ UserAccessToken: [] }],
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}',
  tags: ['User Management'],
  summary: 'Unlink User',
  description:
    'Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens',
  operationId: 'deleteUsersUserid',
  request: {
    params: z.object({
      userId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the User',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ ClientAccessToken: [] }],
})

export const deleteUsersUserIdAuthorizationRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}/authorization',
  tags: ['User Management'],
  summary: 'Deauthorize User',
  description:
    "Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.\n\nAll other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.\n\nNo webhook events will be generated for a deauthorized user.",
  operationId: 'deleteUsersUseridAuthorization',
  request: {
    params: z.object({
      userId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the User',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ ClientAccessToken: [] }],
})

export const postUsersUserIdLinkRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/link',
  tags: ['User Management'],
  summary: 'Link User',
  description:
    'Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.',
  operationId: 'postUsersUseridLink',
  request: {
    params: z.object({
      userId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the User',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              forceLanguage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "BCP47 language code - Force the Link UI to prefer the specified language. If omitted, the UI will default to the user's browser default language.",
                  example: 'nb-NO',
                }),
              linkMultiple: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Allow multiple car vendors to be linked during a single Link session. Automatically disabled if `vendor` is set.',
                }),
              userImage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Full URL to an image that the user would recognize as being their own. This URL is only stored for the duration of the Link session, and is displayed to the user to reduce the effectiveness of phishing attacks.',
                  example: 'https://cdn.website.example/user/x/profile.jpg',
                }),
              userName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The User's first name, full name, or other identifier that the user would recognize as being their own. This name is only stored for the duration of the Link session, and is displayed to the user to reduce the effectiveness of phishing attacks.",
                  example: 'Ola',
                }),
              vendor: z
                .enum(['TESLA', 'BMW', 'AUDI', 'VOLKSWAGEN', 'HYUNDAI', 'PEUGEOT', 'NISSAN'])
                .exactOptional()
                .openapi({
                  description:
                    'Automatically skip to the credential input screen for this vendor, skipping the Vendor selection menu.',
                  example: 'TESLA',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              linkState: z
                .string()
                .exactOptional()
                .openapi({ example: 'ZjE2MzMxMGFiYmU4MzcxOTU1ZmRjMTU5NGU2ZmE4YTU3NjViMzIwY2YzNG' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ ClientAccessToken: [] }],
})

export const getVehiclesRoute = createRoute({
  method: 'get',
  path: '/vehicles',
  tags: ['Vehicles'],
  summary: 'List Vehicles',
  operationId: 'getVehicles',
  request: {
    query: z.object({
      'field[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
              z.any(),
            ).openapi({
              description:
                'An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location` \n\nBy default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.',
              explode: true,
              in: 'query',
              name: 'field[]',
              schema: {
                items: {
                  enum: [
                    'smartChargingPolicy',
                    'chargeState',
                    'location',
                    'information',
                    'odometer',
                  ],
                  type: 'string',
                },
                type: 'array',
              },
            }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location` \n\nBy default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.',
            explode: true,
            in: 'query',
            name: 'field[]',
            schema: {
              items: {
                description:
                  'An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location` \n\nBy default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.',
                explode: true,
                in: 'query',
                name: 'field[]',
                schema: {
                  items: {
                    enum: [
                      'smartChargingPolicy',
                      'chargeState',
                      'location',
                      'information',
                      'odometer',
                    ],
                    type: 'string',
                  },
                  type: 'array',
                },
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                chargeState: z
                  .object({
                    batteryCapacity: z
                      .number()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        description:
                          "Vehicle's maximum physical battery capacity in kWh. This number slowly decreases/degrades over time.",
                        example: 73.21,
                      }),
                    batteryLevel: z
                      .number()
                      .min(0)
                      .max(100)
                      .exactOptional()
                      .openapi({ description: 'Remaining battery in percent', example: '38' }),
                    chargeLimit: z
                      .number()
                      .min(0)
                      .max(100)
                      .exactOptional()
                      .openapi({
                        description: 'Charge limit, as a percent of `batteryCapacity`.',
                        example: 80,
                      }),
                    chargeRate: z
                      .number()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        description:
                          'The current charge rate in kW.\n\nThis property is only available when the vehicle is charging, and is `null` any other time.',
                        example: 40.1,
                      }),
                    chargeTimeRemaining: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'Estimated time until the current charging intent is completed, in minutes.\n\nThis property is only available when the vehicle is charging, and is `null` any other time.',
                        example: 319,
                      }),
                    isCharging: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Current charging status of the vehicle',
                        example: false,
                      }),
                    isChargingReasons: z
                      .array(z.union([z.custom<{ override: true }>(), z.literal('DEFAULT')]))
                      .exactOptional()
                      .openapi({
                        description:
                          'Array of string constants that explain why the car is or is not charging. May contain multiple values.\n\n**Any:**\n- DEFAULT - the car is not being controlled by Enode\n\n**Not Charging:**\n- NOT_PLUGGED_IN - because the car is not plugged into a charger\n- FULLY_CHARGED - because the car is fully charged\n- MANUALLY_STOPPED - because the car has been manually commanded to stop charging\n- SMART_CHARGING_DELAY - because Smart Charging has identified an opportunity to delay charging until prices are lower\n\n**Charging:**\n- MANUALLY_STARTED - because the car has been manually commanded to start charging\n- SMART_CHARGING_ACTIVE - because Smart Charging has identified that this is an optimal time to charge\n- SMART_CHARGING_DEADLINE - because, regardless of price, charging must be active to meet the configured deadline',
                        example: ['SMART_CHARGING_DELAY'],
                      }),
                    isPluggedIn: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether the vehicle is connected to a charging box (regardless of whether it is actually charging)',
                        example: true,
                      }),
                    range: z
                      .number()
                      .min(0)
                      .exactOptional()
                      .openapi({ description: 'Estimated remaining kilometers', example: '127.5' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                chargingLocationId: z
                  .string()
                  .openapi({
                    description:
                      'Id of the charging location the vehicle is currently positioned at (if any)',
                    example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                    'x-format': { guid: true },
                  }),
                id: z.string().openapi({ description: 'Vehicle ID' }),
                information: z
                  .object({
                    brand: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Vehicle brand', example: 'Tesla' }),
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Vehicle ID',
                        example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                      }),
                    model: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Vehicle model', example: 'Model S P85' }),
                    year: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Vehicle production year', example: 2020 }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Descriptive information about the Vehicle',
                    required: [],
                  }),
                isReachable: z
                  .boolean()
                  .openapi({ description: 'Is the vehicle currently reachable?' }),
                lastSeen: z.iso
                  .date()
                  .openapi({
                    description: 'The last time vehicle was successfully communicated with',
                  }),
                location: z
                  .object({
                    lastUpdated: z.iso
                      .date()
                      .exactOptional()
                      .openapi({
                        description: 'ISO8601 UTC timestamp of last received location',
                        example: '2020-04-07T17:04:26Z',
                      }),
                    latitude: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
                    longitude: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
                  })
                  .exactOptional()
                  .openapi({
                    description: "Vehicle's GPS coordinates with timestamp",
                    required: [],
                  }),
                odometer: z
                  .object({
                    distance: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Odometer in kilometers', example: 24650 }),
                    lastUpdated: z.iso
                      .date()
                      .exactOptional()
                      .openapi({
                        description: 'ISO8601 UTC timestamp of last received odometer update',
                        example: '2020-01-07T16:21:76Z',
                      }),
                  })
                  .exactOptional()
                  .openapi({ description: "Vehicle's odometer with timestamp", required: [] }),
                smartChargingPolicy: z
                  .object({
                    deadline: z
                      .string()
                      .regex(/\d{2}:\d{2}/)
                      .exactOptional()
                      .openapi({
                        description:
                          'The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC',
                        example: '08:00',
                      }),
                    isEnabled: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          "When enabled, this vehicle's charging status may be controlled by Smart Charging.",
                        example: true,
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['id', 'lastSeen', 'isReachable', 'chargingLocationId'] }),
          ),
        },
      },
    },
  },
  security: [
    { UserAccessToken: ['all'] },
    { UserAccessToken: ['vehicle:location'] },
    { UserAccessToken: ['vehicle:odometer'] },
    { UserAccessToken: ['vehicle:information'] },
    { UserAccessToken: ['vehicle:charge_state'] },
    { UserAccessToken: ['vehicle:smart_charging_policy'] },
  ],
})

export const getVehiclesVehicleIdRoute = createRoute({
  method: 'get',
  path: '/vehicles/{vehicleId}',
  tags: ['Vehicles'],
  summary: 'Get Vehicle',
  operationId: 'getVehiclesVehicleid',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    query: z.object({
      'field[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum(['smartChargingPolicy', 'chargeState', 'location', 'information', 'odometer']),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location` \n\nBy default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.',
            explode: true,
            in: 'query',
            name: 'field[]',
            schema: {
              items: {
                enum: ['smartChargingPolicy', 'chargeState', 'location', 'information', 'odometer'],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              chargeState: z
                .object({
                  batteryCapacity: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        "Vehicle's maximum physical battery capacity in kWh. This number slowly decreases/degrades over time.",
                      example: 73.21,
                    }),
                  batteryLevel: z
                    .number()
                    .min(0)
                    .max(100)
                    .exactOptional()
                    .openapi({ description: 'Remaining battery in percent', example: '38' }),
                  chargeLimit: z
                    .number()
                    .min(0)
                    .max(100)
                    .exactOptional()
                    .openapi({
                      description: 'Charge limit, as a percent of `batteryCapacity`.',
                      example: 80,
                    }),
                  chargeRate: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        'The current charge rate in kW.\n\nThis property is only available when the vehicle is charging, and is `null` any other time.',
                      example: 40.1,
                    }),
                  chargeTimeRemaining: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'Estimated time until the current charging intent is completed, in minutes.\n\nThis property is only available when the vehicle is charging, and is `null` any other time.',
                      example: 319,
                    }),
                  isCharging: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Current charging status of the vehicle',
                      example: false,
                    }),
                  isChargingReasons: z
                    .array(z.union([z.custom<{ override: true }>(), z.literal('DEFAULT')]))
                    .exactOptional()
                    .openapi({
                      description:
                        'Array of string constants that explain why the car is or is not charging. May contain multiple values.\n\n**Any:**\n- DEFAULT - the car is not being controlled by Enode\n\n**Not Charging:**\n- NOT_PLUGGED_IN - because the car is not plugged into a charger\n- FULLY_CHARGED - because the car is fully charged\n- MANUALLY_STOPPED - because the car has been manually commanded to stop charging\n- SMART_CHARGING_DELAY - because Smart Charging has identified an opportunity to delay charging until prices are lower\n\n**Charging:**\n- MANUALLY_STARTED - because the car has been manually commanded to start charging\n- SMART_CHARGING_ACTIVE - because Smart Charging has identified that this is an optimal time to charge\n- SMART_CHARGING_DEADLINE - because, regardless of price, charging must be active to meet the configured deadline',
                      example: ['SMART_CHARGING_DELAY'],
                    }),
                  isPluggedIn: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates whether the vehicle is connected to a charging box (regardless of whether it is actually charging)',
                      example: true,
                    }),
                  range: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({ description: 'Estimated remaining kilometers', example: '127.5' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              chargingLocationId: z
                .string()
                .openapi({
                  description:
                    'Id of the charging location the vehicle is currently positioned at (if any)',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                  'x-format': { guid: true },
                }),
              id: z.string().openapi({ description: 'Vehicle ID' }),
              information: z
                .object({
                  brand: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Vehicle brand', example: 'Tesla' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Vehicle ID',
                      example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                    }),
                  model: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Vehicle model', example: 'Model S P85' }),
                  year: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Vehicle production year', example: 2020 }),
                })
                .exactOptional()
                .openapi({
                  description: 'Descriptive information about the Vehicle',
                  required: [],
                }),
              isReachable: z
                .boolean()
                .openapi({ description: 'Is the vehicle currently reachable?' }),
              lastSeen: z.iso
                .date()
                .openapi({
                  description: 'The last time vehicle was successfully communicated with',
                }),
              location: z
                .object({
                  lastUpdated: z.iso
                    .date()
                    .exactOptional()
                    .openapi({
                      description: 'ISO8601 UTC timestamp of last received location',
                      example: '2020-04-07T17:04:26Z',
                    }),
                  latitude: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
                  longitude: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
                })
                .exactOptional()
                .openapi({ description: "Vehicle's GPS coordinates with timestamp", required: [] }),
              odometer: z
                .object({
                  distance: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Odometer in kilometers', example: 24650 }),
                  lastUpdated: z.iso
                    .date()
                    .exactOptional()
                    .openapi({
                      description: 'ISO8601 UTC timestamp of last received odometer update',
                      example: '2020-01-07T16:21:76Z',
                    }),
                })
                .exactOptional()
                .openapi({ description: "Vehicle's odometer with timestamp", required: [] }),
              smartChargingPolicy: z
                .object({
                  deadline: z
                    .string()
                    .regex(/\d{2}:\d{2}/)
                    .exactOptional()
                    .openapi({
                      description:
                        'The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC',
                      example: '08:00',
                    }),
                  isEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "When enabled, this vehicle's charging status may be controlled by Smart Charging.",
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['id', 'lastSeen', 'isReachable', 'chargingLocationId'] }),
        },
      },
    },
  },
  security: [
    { UserAccessToken: ['all'] },
    { UserAccessToken: ['vehicle:location'] },
    { UserAccessToken: ['vehicle:odometer'] },
    { UserAccessToken: ['vehicle:information'] },
    { UserAccessToken: ['vehicle:charge_state'] },
    { UserAccessToken: ['vehicle:smart_charging_policy'] },
  ],
})

export const getVehiclesVehicleIdChargeStateRoute = createRoute({
  method: 'get',
  path: '/vehicles/{vehicleId}/charge-state',
  tags: ['Vehicles'],
  summary: 'Get Vehicle Charge State',
  operationId: 'getVehicleChargestate',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              batteryCapacity: z
                .number()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "Vehicle's maximum physical battery capacity in kWh. This number slowly decreases/degrades over time.",
                  example: 73.21,
                }),
              batteryLevel: z
                .number()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Remaining battery in percent', example: '38' }),
              chargeLimit: z
                .number()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'Charge limit, as a percent of `batteryCapacity`.',
                  example: 80,
                }),
              chargeRate: z
                .number()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The current charge rate in kW.\n\nThis property is only available when the vehicle is charging, and is `null` any other time.',
                  example: 40.1,
                }),
              chargeTimeRemaining: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Estimated time until the current charging intent is completed, in minutes.\n\nThis property is only available when the vehicle is charging, and is `null` any other time.',
                  example: 319,
                }),
              isCharging: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Current charging status of the vehicle', example: false }),
              isChargingReasons: z
                .array(z.union([z.custom<{ override: true }>(), z.literal('DEFAULT')]))
                .exactOptional()
                .openapi({
                  description:
                    'Array of string constants that explain why the car is or is not charging. May contain multiple values.\n\n**Any:**\n- DEFAULT - the car is not being controlled by Enode\n\n**Not Charging:**\n- NOT_PLUGGED_IN - because the car is not plugged into a charger\n- FULLY_CHARGED - because the car is fully charged\n- MANUALLY_STOPPED - because the car has been manually commanded to stop charging\n- SMART_CHARGING_DELAY - because Smart Charging has identified an opportunity to delay charging until prices are lower\n\n**Charging:**\n- MANUALLY_STARTED - because the car has been manually commanded to start charging\n- SMART_CHARGING_ACTIVE - because Smart Charging has identified that this is an optimal time to charge\n- SMART_CHARGING_DEADLINE - because, regardless of price, charging must be active to meet the configured deadline',
                  example: ['SMART_CHARGING_DELAY'],
                }),
              isPluggedIn: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the vehicle is connected to a charging box (regardless of whether it is actually charging)',
                  example: true,
                }),
              range: z
                .number()
                .min(0)
                .exactOptional()
                .openapi({ description: 'Estimated remaining kilometers', example: '127.5' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['vehicle:charge_state'] }],
})

export const postVehiclesVehicleIdChargingRoute = createRoute({
  method: 'post',
  path: '/vehicles/{vehicleId}/charging',
  tags: ['Vehicles'],
  summary: 'Start / Stop Charging',
  description:
    'Instruct the vehicle to start or stop charging. \n\n#### Precedence over smart charging\nIf the vehicle is at a charging location where smart charging is activated:\n- a request to `start` charging will override smart charging and charging will stay on until fully charged. \n- a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.\n\nThe smart charging settings are not altered by these actions.',
  operationId: 'postVehiclesVehicleidCharging',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['control:vehicle:charging'] }],
})

export const getVehiclesVehicleIdInformationRoute = createRoute({
  method: 'get',
  path: '/vehicles/{vehicleId}/information',
  tags: ['Vehicles'],
  summary: 'Get Vehicle Information',
  operationId: 'getVehiclesVehicleidInformation',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Descriptive information about the Vehicle',
      content: {
        'application/json': {
          schema: z
            .object({
              brand: z
                .string()
                .exactOptional()
                .openapi({ description: 'Vehicle brand', example: 'Tesla' }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Vehicle ID',
                  example: '8d90101b-3f2f-462a-bbb4-1ed320d33bbe',
                }),
              model: z
                .string()
                .exactOptional()
                .openapi({ description: 'Vehicle model', example: 'Model S P85' }),
              year: z
                .int()
                .exactOptional()
                .openapi({ description: 'Vehicle production year', example: 2020 }),
            })
            .openapi({ description: 'Descriptive information about the Vehicle', required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['vehicle:information'] }],
})

export const getVehiclesVehicleIdLocationRoute = createRoute({
  method: 'get',
  path: '/vehicles/{vehicleId}/location',
  tags: ['Vehicles'],
  summary: 'Get Vehicle Location',
  operationId: 'getVehiclesVehicleidLocation',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Vehicle's GPS coordinates with timestamp",
      content: {
        'application/json': {
          schema: z
            .object({
              lastUpdated: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'ISO8601 UTC timestamp of last received location',
                  example: '2020-04-07T17:04:26Z',
                }),
              latitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Latitude in degrees', example: 59.911491 }),
              longitude: z
                .number()
                .exactOptional()
                .openapi({ description: 'Longitude in degrees', example: 10.757933 }),
            })
            .openapi({ description: "Vehicle's GPS coordinates with timestamp", required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['vehicle:location'] }],
})

export const getVehiclesVehicleIdOdometerRoute = createRoute({
  method: 'get',
  path: '/vehicles/{vehicleId}/odometer',
  tags: ['Vehicles'],
  summary: 'Get Vehicle Odometer',
  operationId: 'getVehiclesVehicleidOdometer',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Vehicle's odometer with timestamp",
      content: {
        'application/json': {
          schema: z
            .object({
              distance: z
                .number()
                .exactOptional()
                .openapi({ description: 'Odometer in kilometers', example: 24650 }),
              lastUpdated: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'ISO8601 UTC timestamp of last received odometer update',
                  example: '2020-01-07T16:21:76Z',
                }),
            })
            .openapi({ description: "Vehicle's odometer with timestamp", required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['vehicle:odometer'] }],
})

export const getVehiclesVehicleIdSmartChargingPolicyRoute = createRoute({
  method: 'get',
  path: '/vehicles/{vehicleId}/smart-charging-policy',
  tags: ['Vehicles'],
  summary: 'Get Vehicle Smart Charging Policy',
  operationId: 'getVehiclesVehicleidSmartchargingpolicy',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              deadline: z
                .string()
                .regex(/\d{2}:\d{2}/)
                .exactOptional()
                .openapi({
                  description:
                    'The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC',
                  example: '08:00',
                }),
              isEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When enabled, this vehicle's charging status may be controlled by Smart Charging.",
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['vehicle:smart_charging_policy'] }],
})

export const putVehiclesVehicleIdSmartChargingPolicyRoute = createRoute({
  method: 'put',
  path: '/vehicles/{vehicleId}/smart-charging-policy',
  tags: ['Vehicles'],
  summary: 'Update Vehicle Smart Charging Policy',
  description: 'Updates the Smart Charging settings for a vehicle',
  operationId: 'putVehiclesVehicleidSmartchargingpolicy',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deadline: z
                .string()
                .regex(/\d{2}:\d{2}/)
                .exactOptional()
                .openapi({
                  description:
                    'The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC',
                  example: '08:00',
                }),
              isEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When enabled, this vehicle's charging status may be controlled by Smart Charging.",
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              deadline: z
                .string()
                .regex(/\d{2}:\d{2}/)
                .exactOptional()
                .openapi({
                  description:
                    'The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC',
                  example: '08:00',
                }),
              isEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When enabled, this vehicle's charging status may be controlled by Smart Charging.",
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ UserAccessToken: ['all'] }, { UserAccessToken: ['vehicle:smart_charging_policy'] }],
})

export const postVehiclesVehicleIdWatchRoute = createRoute({
  method: 'post',
  path: '/vehicles/{vehicleId}/watch',
  tags: ['Vehicles'],
  summary: 'Start Watching Vehicle',
  description:
    "Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.\n\nAny data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)\n\nThe specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.\n",
  operationId: 'postVehiclesVehicleidWatch',
  request: {
    params: z.object({
      vehicleId: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'ID of the Vehicle',
            in: 'path',
            name: 'vehicleId',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              properties: z
                .enum([
                  'BATTERY_LEVEL',
                  'RANGE',
                  'IS_PLUGGED_IN',
                  'IS_CHARGING',
                  'IS_CHARGING_REASONS',
                  'LOCATION',
                ])
                .exactOptional()
                .openapi({
                  description: 'Array of vehicle properties to watch',
                  example: ['LOCATION', 'BATTERY_LEVEL'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              properties: z
                .enum([
                  'BATTERY_LEVEL',
                  'RANGE',
                  'IS_PLUGGED_IN',
                  'IS_CHARGING',
                  'IS_CHARGING_REASONS',
                  'LOCATION',
                ])
                .exactOptional()
                .openapi({
                  description: 'Array of vehicle properties to watch',
                  example: ['LOCATION', 'BATTERY_LEVEL'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [
    { UserAccessToken: ['all'] },
    { UserAccessToken: ['vehicle:location'] },
    { UserAccessToken: ['vehicle:charge_state'] },
  ],
})

export const putWebhooksFirehoseRoute = createRoute({
  method: 'put',
  path: '/webhooks/firehose',
  tags: ['Webhooks 🧪'],
  summary: 'Update Firehose Webhook',
  operationId: 'putWebhooksFirehose',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cryptographically secure secret, generated and provided by your client',
                  example: '0Kvs1tAUQ69FOMBiWlt5XJSrruXMhWDiVbyrWaNm',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The HTTPS url to which Enode should POST the event payload when a watched property changes',
                  example: 'https://brainpower.co/enode-webhooks/firehose',
                  'x-format': { uri: true },
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'No Content', content: {} } },
  security: [{ ClientAccessToken: [] }],
})

export const postWebhooksFirehoseTestRoute = createRoute({
  method: 'post',
  path: '/webhooks/firehose/test',
  tags: ['Webhooks 🧪'],
  summary: 'Test Firehose Webhook',
  description: 'Trigger a test payload to be sent to your configured Firehose Webhook url.',
  operationId: 'postWebhooksFirehoseTest',
  responses: {
    default: { description: 'Successful', content: { 'application/json': { schema: z.string() } } },
  },
  security: [{ ClientAccessToken: [] }],
})
