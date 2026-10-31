import { createRoute, z } from '@hono/zod-openapi'

type Componentsh0Type = {
  components?: Componentsh0Type[]
  describtion?: string
  mutlityplier?: string
  per?: number
  sum?: number
}

const TransactionsSchema = z
  .object({
    cashier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pretty print of counter signing party', example: 'Miller' }),
    timeStamp: z
      .int()
      .exactOptional()
      .openapi({ description: 'Cross signed timestamp of transaction', example: 1606777200000 }),
    txid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique hash of this transaction as provided by counter signing party',
        example: '722d30b2-b46f-4ed4-a8cd-16d262180d37',
      }),
    txtype: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Type of transaction per cashier implementation and schema',
        example: 'bank.incGSB',
      }),
    value: z
      .int()
      .exactOptional()
      .openapi({ description: 'Amount covered by transaction', example: 1337 }),
  })
  .openapi({ required: [] })
  .openapi('Transactions')

const BalanceSchema = z
  .object({
    balance: z
      .int()
      .exactOptional()
      .openapi({ description: 'Sum owned - sum due by account', example: 20 }),
    haben: z.int().exactOptional().openapi({ description: 'Sum owned by account', example: 20 }),
    soll: z.int().exactOptional().openapi({ description: 'Sum due by account', example: 20 }),
    txs: z.array(TransactionsSchema).exactOptional(),
    variation: z
      .enum(['gsb', 'erzeugung', 'eigenstrom', 'co2', 'baeume'])
      .exactOptional()
      .openapi({ description: 'Type of subbalance (sub account)' }),
  })
  .openapi({ required: [] })
  .openapi('Balance')

const DispatchLocationSchema = z
  .object({
    energy: z
      .number()
      .exactOptional()
      .openapi({ description: 'Percentage of energy', example: 0.2345677 }),
    location: z
      .object({})
      .exactOptional()
      .openapi({ description: 'GeoJSON encoded location of target or source of green energy.' }),
  })
  .openapi({ required: [] })
  .openapi('DispatchLocation')

const ForecastItemSchema = z
  .object({
    co2_g_oekostrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'CO2 footprint in Gramm per kwh (only Green Power)', example: 23 }),
    energyprice: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Local/regional energyprice modification (cent per kWh or euro per MWh).',
        example: -0.219,
      }),
    epochtime: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamps in Seconds', example: 1609293600 }),
    gsi: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Actual GreenPowerIndex for given Timestamp (between 0-100)',
        example: 43,
      }),
    scaled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if scaling is in operation to predict values' }),
    sci: z
      .int()
      .exactOptional()
      .openapi({ description: 'Subindex just for Solar Energy', example: 43 }),
    timeStamp: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp in Standard Milliseconds', example: 1609293600000 }),
  })
  .openapi({ required: [] })
  .openapi('ForecastItem')

const MarketDataSchema = z
  .object({
    end_timestamp: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp in Standard Milliseconds', example: 1609293600000 }),
    marketprice: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Actual Marketprice for regional green power in EUR per MWh',
        example: 43,
      }),
    start_timestamp: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp in Standard Milliseconds', example: 1609293600000 }),
  })
  .openapi({ required: [] })
  .openapi('MarketData')

const Tariffh0Schema = z
  .object({
    ap: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Energy price in cent per kwh. (Arbeitspreis) including all taxes and fees.',
        example: 22.12,
      }),
    gp: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Base price in euro per montah (Grundpreis) including all taxes and fees.',
        example: 7.5,
      }),
  })
  .openapi({ required: [] })
  .openapi('Tariffh0')

const Componentsh0Schema: z.ZodType<Componentsh0Type> = z
  .lazy(() =>
    z
      .object({
        components: z
          .array(Componentsh0Schema)
          .exactOptional()
          .openapi({ description: 'Sub components of this price' }),
        describtion: z
          .string()
          .exactOptional()
          .openapi({ description: 'What is this price component about', example: 'Grundgebühr' }),
        mutlityplier: z
          .string()
          .exactOptional()
          .openapi({ description: 'Frequency/dependency of component', example: 'month' }),
        per: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Single unit price multiyplier is based on', example: 0.012 }),
        sum: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Total sum in Euro for this price component.', example: 22.12 }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Componentsh0')

const EaseeChargerSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Given ID by easee api', example: 'EH780684' }),
    lastSession: z
      .string()
      .exactOptional()
      .openapi({ description: 'lastSession Info as given by easee API' }),
    name: z.string().exactOptional().openapi({ description: 'Name set for charger' }),
  })
  .openapi({ required: [] })
  .openapi('EaseeCharger')

const OmmetersSchema = z
  .object({
    currentScalingFactor: z
      .int()
      .exactOptional()
      .openapi({ description: 'Factor imposed on metered current by a transducer' }),
    loadProfileType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Metering load profile type associated with the meter' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Basic address information for geo coding' }),
    manufacturerId: z.string().exactOptional().openapi({ description: 'DLMS manufacturerId' }),
    measurementType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Physical quantity being measured by the meter' }),
    meta: z
      .string()
      .exactOptional()
      .openapi({ description: 'Statistical metadata for this household' }),
    meterId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'identifier to be used in other methods like readings or activities.',
        example:
          'gAAAAABgsYVSfcCjJZV5w2wGBTzOXCihY7dMaDyypwcbJzAELvxeCDaXiy65H2QwtY-7usSOfoqEIomTJjQb1yyIXZfFnTY2pmLgIu_DVw1rjppFte56yWBD5Fgrmbh2KyOkMNUr8zxO',
      }),
    scalingFactor: z
      .int()
      .exactOptional()
      .openapi({ description: 'Factor imposed on metered current AND voltage by a transducer' }),
    type: z.string().exactOptional().openapi({ description: 'Device type of the meter' }),
    voltageScalingFactor: z
      .int()
      .exactOptional()
      .openapi({ description: 'Factor imposed on metered voltage by a transducer' }),
  })
  .openapi({ required: [] })
  .openapi('Ommeters')

export const getAlternativeEaseeLastSessionsRoute = createRoute({
  method: 'get',
  path: '/alternative/easee/lastSessions',
  tags: ['easee'],
  summary: 'Returns lastSession info for all easee wallboxes (chargers) given user has access to.',
  description: 'Refer to easee.cloud API for details.\n',
  operationId: 'easeeSessions',
  request: {
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Username as used on easy.cloud',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Password as used on easy.cloud',
            in: 'query',
            name: 'password',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(EaseeChargerSchema) } },
    },
  },
})

export const getAlternativeOcppLastSessionsRoute = createRoute({
  method: 'get',
  path: '/alternative/ocpp/lastSessions',
  tags: ['OCPP'],
  summary: 'Last Session Info',
  description:
    'Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).\nLast session Info of managed EV charging stations connected to the correnty ecosystem.\n',
  operationId: 'ocppSessions',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(EaseeChargerSchema) } },
    },
  },
})

export const getAlternativeOpenmeterActivitiesRoute = createRoute({
  method: 'get',
  path: '/alternative/openmeter/activities',
  tags: ['OpenMETER'],
  summary:
    'Public shared smart meters installed in Germany and available for subservices and exploration.',
  description:
    'Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.\n',
  operationId: 'omActivities',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(OmmetersSchema) } },
    },
  },
})

export const getAlternativeOpenmeterMetersRoute = createRoute({
  method: 'get',
  path: '/alternative/openmeter/meters',
  tags: ['OpenMETER'],
  summary:
    'Public shared smart meters installed in Germany and available for subservices and exploration.',
  description:
    'Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.\n',
  operationId: 'omMeters',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(OmmetersSchema) } },
    },
  },
})

export const getAlternativeOpenmeterReadingsRoute = createRoute({
  method: 'get',
  path: '/alternative/openmeter/readings',
  tags: ['OpenMETER'],
  summary:
    'Public shared smart meters installed in Germany and available for subservices and exploration.',
  description:
    'Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.\n',
  operationId: 'omReadings',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(OmmetersSchema) } },
    },
  },
})

export const getGsiBestHourRoute = createRoute({
  method: 'get',
  path: '/gsi/bestHour',
  tags: ['GreenPowerIndex (GrünstromIndex)', 'SmartHome'],
  summary: 'Get best hour (with most regional green energy) in a given timeframe.',
  description:
    'Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).\n',
  operationId: 'gsiBesthour',
  request: {
    query: z.object({
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zipcode (Postleitzahl) of a city in Germany.',
            in: 'query',
            name: 'zip',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Any valid Stromkonto account (address).',
            in: 'query',
            name: 'key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timeframe: z
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
            description: 'Number of hours to check (default 24 hours from now).',
            in: 'query',
            name: 'timeframe',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      hours: z
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
            description: 'How many hours in row do you need the device turned on?',
            in: 'query',
            name: 'hours',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .boolean()
            .openapi({ description: 'true if device should be turned on now. false if not.' }),
        },
      },
    },
  },
})

export const getGsiDispatchRoute = createRoute({
  method: 'get',
  path: '/gsi/dispatch',
  tags: ['GreenPowerIndex (GrünstromIndex)', 'Dispatch (Green Energy Distribution API)'],
  summary: 'Dispatch (Green Energy Distribution Schedule)',
  description:
    'Dispatch of green energy has two aspects to consider:\n  - Availability of gerneration facility (depends on weather and installed capacity)\n  - Demand of energy\nUsing the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).\n',
  operationId: 'gsiDispatch',
  request: {
    query: z.object({
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zipcode (Postleitzahl) of a city in Germany.',
            in: 'query',
            name: 'zip',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Any valid Stromkonto account (address).',
            in: 'query',
            name: 'key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              avg_distance_km: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Averaged geospatial distance in kilometers between energy generation and usage at requested location.',
                }),
              dispatch_from: z
                .array(DispatchLocationSchema)
                .exactOptional()
                .openapi({
                  description: 'List of current sources of green energy (into requested location)',
                }),
              dispatch_target: z
                .array(DispatchLocationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'List of current targets of green energy (out of requested location)',
                }),
              postmix: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Green Energy Mix after dispatch of given city' }),
              premix: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Green Energy Mix prior to dispatch of given city' }),
              timeframe: z
                .object({
                  end: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Ending time of window evaluated for this request/dispatches.',
                    }),
                  start: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Starting time of window evaluated in order to get dispatches',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Evaluated timeframe for this request', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGsiMarketdataRoute = createRoute({
  method: 'get',
  path: '/gsi/marketdata',
  tags: ['GreenPowerIndex (GrünstromIndex)'],
  summary: 'Marketdata',
  description:
    'Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.\n',
  operationId: 'gsiMarketdata',
  request: {
    query: z.object({
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zipcode (Postleitzahl) of a city in Germany.',
            in: 'query',
            name: 'zip',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(MarketDataSchema)
                .exactOptional()
                .openapi({ description: 'Energyprice for the upcomming hours' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGsiPredictionRoute = createRoute({
  method: 'get',
  path: '/gsi/prediction',
  tags: ['GreenPowerIndex (GrünstromIndex)'],
  summary: 'Prediction',
  description:
    'Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.\n',
  operationId: 'gsiPrediction',
  request: {
    query: z.object({
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zipcode (Postleitzahl) of a city in Germany.',
            in: 'query',
            name: 'zip',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Any valid Stromkonto account (address).',
            in: 'query',
            name: 'key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              forecast: z
                .array(ForecastItemSchema)
                .exactOptional()
                .openapi({ description: 'Prediction for the upcomming hours' }),
              location: z
                .object({
                  city: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Pretty Print city name' }),
                  zip: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Zipcode (Postleitzahl)' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Standarized location info sourced for prediction',
                  required: [],
                }),
              matrix: z
                .object({
                  h0: z
                    .object({
                      avg_1: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'device should run in 1 hour' }),
                      avg_2: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'device should run in 2 hours' }),
                      avg_3: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'device should run in 3 hour' }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Indicates number of hours a device should run',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Device switching recommendation.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMeteringReadingRoute = createRoute({
  method: 'get',
  path: '/metering/reading',
  tags: ['Metering (Decorator)'],
  summary: 'Meter Reading',
  description: 'Retrieves a metered reading using account (Stromkonto).\n',
  operationId: 'meteringGet',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Account/Address (Stromkonto) to retrieve reading for.',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              '1.8.0': z
                .int()
                .exactOptional()
                .openapi({ description: 'Reading as provided as input in Wh' }),
              '1.8.1': z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Green energy calculated using Green Power Index (GrünstromIndex) in Wh',
                }),
              '1.8.2': z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Grey energy calculated using Green Power Index (GrünstromIndex) in Wh',
                }),
              _processingTime: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Time this reading got imported into consensus (e.q. signed timestamp).',
                }),
              account: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Stromkonto/Metering address allocated (this is not the MELOID!)',
                }),
              co2_g_oekostrom: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)',
                }),
              co2_g_standard: z
                .int()
                .exactOptional()
                .openapi({ description: 'CO2 Emission of metered energy in a standard mix' }),
              credits: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'Update credits this meter has. Gets refilled automtically to prevent too frequent updates',
                }),
              timeStamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'API Consensus time this reading was fully received' }),
              ttl: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Time to Live for this reader. If no update is provided it gets decommissioned.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postMeteringReadingRoute = createRoute({
  method: 'post',
  path: '/metering/reading',
  tags: ['Metering (Decorator)'],
  summary: 'Meter Reading',
  description:
    'Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).\n',
  operationId: 'meteringPost',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              '1.8.0': z
                .int()
                .exactOptional()
                .openapi({ description: 'Meter Reading (prefered in Wh)' }),
              account: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Stromkonto account (address) associated with this metering.',
                }),
              energy: z.int().exactOptional().openapi({ description: 'Alias for 1.8.0' }),
              secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Some private password you might choose on first update. However you need to use the same secret on every further posts.',
                }),
              value: z.int().exactOptional().openapi({ description: 'Alias for 1.8.0' }),
              zip: z
                .string()
                .exactOptional()
                .openapi({ description: 'Zipcode (Postleitzahl) of metered location' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              '1.8.0': z
                .int()
                .exactOptional()
                .openapi({ description: 'Reading as provided as input in Wh' }),
              '1.8.1': z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Green energy calculated using Green Power Index (GrünstromIndex) in Wh',
                }),
              '1.8.2': z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Grey energy calculated using Green Power Index (GrünstromIndex) in Wh',
                }),
              _processingTime: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Time this reading got imported into consensus (e.q. signed timestamp).',
                }),
              account: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Stromkonto/Metering address allocated (this is not the MELOID!)',
                }),
              co2_g_oekostrom: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)',
                }),
              co2_g_standard: z
                .int()
                .exactOptional()
                .openapi({ description: 'CO2 Emission of metered energy in a standard mix' }),
              timeStamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'API Consensus time this reading was fully received' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postQuittungCommitRoute = createRoute({
  method: 'post',
  path: '/quittung/commit',
  tags: ['Strom-Quittung'],
  summary:
    'Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare',
  description:
    'Uses collected fields or provided fields to create a final receipt (Strom-Quittung).\n',
  operationId: 'quittungComit',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ account: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              description:
                'Unique ID of a receipt. It might be used via https://api.corrently.io/v2.0/quittung/pdf?token= to retrieve a PDF version of receipt or via   https://corrently.de/service/quittung.html?token= to get online version.',
            }),
        },
      },
    },
  },
})

export const postQuittungCreateRoute = createRoute({
  method: 'post',
  path: '/quittung/create',
  tags: ['Strom-Quittung'],
  summary: 'Create a receipt for an energy delivery (only valid in Germany).',
  description:
    'Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.\n',
  operationId: 'quittungCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ email: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              description:
                "Token for this receipt. It might be extended as 'token' parameter to retrieve actual receipt [sample](https://corrently.de/service/quittung.html?token=0x3C4750bf93aa96e55A0d60be334B6b6E14DCe5bc)",
            }),
        },
      },
    },
  },
})

export const postQuittungPrepareRoute = createRoute({
  method: 'post',
  path: '/quittung/prepare',
  tags: ['Strom-Quittung'],
  summary: 'Allows to collect data with several requests (or a single) for a receipt.',
  description:
    'During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.\n',
  operationId: 'quittungPrepare',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ account: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({ description: 'All collected values for an account (eq. session).' }),
        },
      },
    },
  },
})

export const postQuittungTseRoute = createRoute({
  method: 'post',
  path: '/quittung/tse',
  tags: ['Strom-Quittung', 'TSE'],
  summary:
    'Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).',
  description:
    'Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.\n',
  operationId: 'quittungTSE',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quittung Identifier  (serialnumber generated during receipt generation process)',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .any()
                .exactOptional()
                .openapi({
                  description: 'JSON object that got signed by TSE.',
                  'x-schema': {
                    properties: {
                      algorithmus: {
                        description: 'Standard used for signing and hashing of input values',
                        example: 'RSA-SHA512',
                        type: 'string',
                      },
                      clientid: {
                        description: 'Digital Identity of transaction system.',
                        example: '1D2323CDEF',
                        type: 'string',
                      },
                      end: {
                        description:
                          'Finishing timestamp of signature process by TSE service in UTC ISO Format.',
                        example: '2021-07-12T18:43:05.582Z',
                        type: 'string',
                      },
                      serialnumber: {
                        description:
                          'Quittung Identifier  (serialnumber generated during receipt generation process)',
                        example: '0x29fB5aeE3Ca29f239E7f771280cf4e2fD3999DF3',
                        type: 'string',
                      },
                      signaturecnt: {
                        description: 'Sequential number of signed transactions by TSE service.',
                        example: 2,
                        type: 'integer',
                      },
                      start: {
                        description:
                          'Starting timestamp of signature process by TSE service in UTC ISO Format.',
                        example: '2021-07-12T18:43:05.582Z',
                        type: 'string',
                      },
                      timeformat: {
                        description: 'Format of Timestamp to aply to  KassenSichV regulation',
                        example: 'utcTime',
                        type: 'string',
                      },
                      txcnt: {
                        description: 'Sequential number of this transaction (requester)',
                        example: 1,
                        type: 'integer',
                      },
                    },
                    type: 'object',
                  },
                }),
              publickey: z.string().exactOptional().openapi({ description: 'Public Key of TSE' }),
              raw: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Datastring of JSON Object as it got used to create signature.',
                }),
              signature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Resulting signature by signing raw datastring using private key of TSE.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postQuittungTsedataRoute = createRoute({
  method: 'post',
  path: '/quittung/tsedata',
  tags: ['Strom-Quittung', 'TSE'],
  summary:
    'Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).',
  description: 'Allows to retrieve input string for a signing process.\n',
  operationId: 'quittungTSEData',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quittung Identifier  (serialnumber generated during receipt generation process)',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postQuittungTsesignatureRoute = createRoute({
  method: 'post',
  path: '/quittung/tsesignature',
  tags: ['Strom-Quittung', 'TSE'],
  summary:
    'Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).',
  description: 'Allows to retrieve digital signature for a given receipt.\n',
  operationId: 'quittungTSEsignature',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quittung Identifier  (serialnumber generated during receipt generation process)',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getQuittungZugferdRoute = createRoute({
  method: 'get',
  path: '/quittung/zugferd',
  tags: ['Strom-Quittung', 'TSE'],
  summary: 'Retrieve Zugferd XML for a given receipt (Strom-Quittung).',
  description: 'Allows to retrieve XML of the zugferd invoice.\n',
  operationId: 'quittungZugferd',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quittung Identifier  (serialnumber generated during receipt generation process)',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getStromkontoBalancesRoute = createRoute({
  method: 'get',
  path: '/stromkonto/balances',
  tags: ['Stromkonto (Ledger)'],
  summary: 'Balances',
  description:
    'Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).\n',
  operationId: 'stromkontoBalances',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ethereum style address referencing a valid account (AKA Stromkonto).',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BalanceSchema) } },
    },
  },
})

export const getStromkontoChoicesRoute = createRoute({
  method: 'get',
  path: '/stromkonto/choices',
  tags: ['Stromkonto (Ledger)'],
  summary: 'Selectable Choices for customer',
  description: 'Signable choices (contract changes) for customer.\n',
  operationId: 'stromkontoChoices',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ethereum style address referencing a valid account alias (never use Stromkonto directly!).',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BalanceSchema) } },
    },
  },
})

export const postStromkontoLoginRoute = createRoute({
  method: 'post',
  path: '/stromkonto/login',
  tags: ['Stromkonto (Ledger)'],
  summary: 'Login (via Mail)',
  description:
    'Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.\n',
  operationId: 'stromkontoLogin',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ email: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['registered', 'unregistered'])
                .exactOptional()
                .openapi({
                  description:
                    'Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postStromkontoPrepareTransactionRoute = createRoute({
  method: 'post',
  path: '/stromkonto/prepareTransaction',
  tags: ['Stromkonto (Ledger)'],
  summary: 'Prepare Transaction',
  description:
    'Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.\n',
  operationId: 'prepareTransaction',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account: z
                .string()
                .exactOptional()
                .openapi({ description: 'Stromkonto account address of sender' }),
              signature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Signature per Stromkonto setting (might be simple email confirmation link)',
                }),
              to: z
                .string()
                .exactOptional()
                .openapi({ description: 'Stromkonto account address of reciever' }),
              value: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Amount to transfer (in Watthours for electricity, or pcs for trees)',
                }),
              variation: z
                .enum(['gsb', 'erzeugung', 'eigenstrom', 'co2', 'baeume'])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const postStromkontoRegisterRoute = createRoute({
  method: 'post',
  path: '/stromkonto/register',
  tags: ['Stromkonto (Ledger)'],
  summary: 'Register (new Stromkonto)',
  description:
    'Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.\n',
  operationId: 'stromkontoRegister',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional(),
              first_name: z.string().exactOptional(),
              last_name: z.string().exactOptional(),
              zipcode: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getTariffComponentsRoute = createRoute({
  method: 'get',
  path: '/tariff/components',
  tags: ['Tariff (Price API)'],
  summary: 'Energy Tariff price components',
  description:
    'Provides insides into the different cost components of energy for a private household.\nSample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300\n',
  operationId: 'tariffcomponents',
  request: {
    query: z.object({
      zipcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zipcode (Postzleitzahl) of a city in Germany.',
            in: 'query',
            name: 'zipcode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      kwha: z
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
            description: 'Total amount of energy in kilo-watt-hours per year. (sample 2100)',
            in: 'query',
            name: 'kwha',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      milliseconds: z
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
            description: 'If provided all results will be scaled to this timeframe',
            in: 'query',
            name: 'milliseconds',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      wh: z
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
              'If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.',
            in: 'query',
            name: 'wh',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: Componentsh0Schema } },
    },
  },
})

export const getTariffSlph0Route = createRoute({
  method: 'get',
  path: '/tariff/slph0',
  tags: ['Tariff (Price API)'],
  summary: 'Energy Tariff information',
  description:
    'Provides pricing data for private households with standard load profiles (Standardlastprofil H0).\n',
  operationId: 'tariffSLPH0',
  request: {
    query: z.object({
      zipcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zipcode (Postzleitzahl) of a city in Germany.',
            in: 'query',
            name: 'zipcode',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(Tariffh0Schema) } },
    },
  },
})

export const getWimStatusRoute = createRoute({
  method: 'get',
  path: '/wim/status',
  tags: ['WiM (Wechselprozesse im Messwesen Strom - Status API)'],
  summary: 'WiM Proess Informtion',
  description:
    'Access to status information of an existing metering change and allocation process.\n',
  operationId: 'wimstatus',
  request: {
    query: z.object({
      vid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'VID key of the process.',
            in: 'query',
            name: 'vid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              wim_started: z
                .int()
                .exactOptional()
                .openapi({ description: 'Starting time of process', example: 1615914297977 }),
              wim_status: z
                .string()
                .exactOptional()
                .openapi({ description: 'Latest Status', example: 'Erfolgreiche Prüfung' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
