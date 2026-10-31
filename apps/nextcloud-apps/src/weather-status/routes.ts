import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({ weather_status: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }) })
  .openapi({ required: ['weather_status'] })
  .openapi('Capabilities')

const ForecastSchema = z
  .object({
    time: z.string(),
    data: z
      .object({
        instant: z
          .object({
            details: z
              .object({
                air_pressure_at_sea_level: z.number(),
                air_temperature: z.number(),
                cloud_area_fraction: z.number(),
                relative_humidity: z.number(),
                wind_from_direction: z.number(),
                wind_speed: z.number(),
              })
              .openapi({
                required: [
                  'air_pressure_at_sea_level',
                  'air_temperature',
                  'cloud_area_fraction',
                  'relative_humidity',
                  'wind_from_direction',
                  'wind_speed',
                ],
              }),
          })
          .openapi({ required: ['details'] }),
        next_12_hours: z
          .object({
            summary: z.object({ symbol_code: z.string() }).openapi({ required: ['symbol_code'] }),
            details: z
              .object({ precipitation_amount: z.number().exactOptional() })
              .openapi({ required: [] }),
          })
          .openapi({ required: ['summary', 'details'] }),
        next_1_hours: z
          .object({
            summary: z.object({ symbol_code: z.string() }).openapi({ required: ['symbol_code'] }),
            details: z
              .object({ precipitation_amount: z.number().exactOptional() })
              .openapi({ required: [] }),
          })
          .openapi({ required: ['summary', 'details'] }),
        next_6_hours: z
          .object({
            summary: z.object({ symbol_code: z.string() }).openapi({ required: ['symbol_code'] }),
            details: z
              .object({ precipitation_amount: z.number().exactOptional() })
              .openapi({ required: [] }),
          })
          .openapi({ required: ['summary', 'details'] }),
      })
      .openapi({ required: ['instant', 'next_12_hours', 'next_1_hours', 'next_6_hours'] }),
  })
  .openapi({ required: ['time', 'data'] })
  .openapi('Forecast')

const LocationSchema = z
  .object({
    lat: z.string().exactOptional(),
    lon: z.string().exactOptional(),
    address: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Location')

const ModeSchema = z
  .object({
    mode: z
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
  })
  .openapi({ required: ['mode'] })
  .openapi('Mode')

const LocationWithModeSchema = LocationSchema.and(ModeSchema).openapi('LocationWithMode')

const SuccessSchema = z
  .object({ success: z.boolean() })
  .openapi({ required: ['success'] })
  .openapi('Success')

const LocationWithSuccessSchema = LocationSchema.and(SuccessSchema).openapi('LocationWithSuccess')

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

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const putOcsV2PhpAppsWeatherStatusApiV1ModeRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/weather_status/api/v1/mode',
  tags: ['weather_status'],
  summary:
    'Change the weather status mode. There are currently 2 modes: - ask the browser - use the user defined address',
  operationId: 'weather_status-set-mode',
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
              mode: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64', description: 'New mode' }),
            })
            .openapi({ required: ['mode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Weather status mode updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: SuccessSchema })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/weather_status/api/v1/use-personal',
  tags: ['weather_status'],
  summary: 'Try to use the address set in user personal settings as weather location',
  operationId: 'weather_status-use-personal-address',
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
      description: 'Address updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: LocationWithSuccessSchema })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsWeatherStatusApiV1LocationRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/weather_status/api/v1/location',
  tags: ['weather_status'],
  summary: 'Get stored user location',
  operationId: 'weather_status-get-location',
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
      description: 'Location returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: LocationWithModeSchema })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsWeatherStatusApiV1LocationRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/weather_status/api/v1/location',
  tags: ['weather_status'],
  summary:
    'Set address and resolve it to get coordinates or directly set coordinates and get address with reverse geocoding',
  operationId: 'weather_status-set-location',
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
              address: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Any approximative or exact address' }),
              lat: z
                .float64()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Latitude in decimal degree format' }),
              lon: z
                .float64()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Longitude in decimal degree format' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Location updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: LocationWithSuccessSchema })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsWeatherStatusApiV1ForecastRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/weather_status/api/v1/forecast',
  tags: ['weather_status'],
  summary: 'Get forecast for current location',
  operationId: 'weather_status-get-forecast',
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
      description: 'Forecast returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.xor([
                    z.array(ForecastSchema),
                    z.object({ error: z.string() }).openapi({ required: ['error'] }),
                  ]),
                })
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
      description: 'Forecast not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: SuccessSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/weather_status/api/v1/favorites',
  tags: ['weather_status'],
  summary: 'Get favorites list',
  operationId: 'weather_status-get-favorites',
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
      description: 'Favorites returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(z.string()) })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/weather_status/api/v1/favorites',
  tags: ['weather_status'],
  summary: 'Set favorites list',
  operationId: 'weather_status-set-favorites',
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
              favorites: z.array(z.string()).openapi({ description: 'Favorite addresses' }),
            })
            .openapi({ required: ['favorites'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Favorites updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: SuccessSchema })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
