import { createRoute, z } from '@hono/zod-openapi'

const FluxSchema = z
  .object({
    energies: z
      .object({ data: z.array(z.number()).exactOptional(), units: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Particle energies at which omnidirectional flux values are calculated, and their units.\n',
        required: [],
      }),
    flux: z
      .object({ data: z.array(z.number()).exactOptional(), units: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'Corresponding omnidirectional flux values, and their units.\n',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Flux')

const FluxAtEnergySchema = z
  .object({
    flux: z
      .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Particle flux value and units.\n', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('FluxAtEnergy')

const Coord1ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description:
        '<br>First coordinate value to specify position. <br><br> Ordering for GEI, GEO coords:X, Y, Z<br> Ordering for GDZ coords: Alt, Lat, Long<br>  Valid ranges for latitude: -90, 90<br>  Valid ranges for longitude: 0, 360<br> \n',
      in: 'query',
      name: 'coord1',
      required: true,
      schema: { example: 3216.6, type: 'number' },
    },
    example: 3216.6,
  })

const Coord2ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: '<br>Second coordinate value.',
      in: 'query',
      name: 'coord2',
      required: true,
      schema: { example: 35426, type: 'number' },
    },
    example: 35426,
  })

const Coord3ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: '<br>Third coordinate value.',
      in: 'query',
      name: 'coord3',
      required: true,
      schema: { example: 603.4, type: 'number' },
    },
    example: 603.4,
  })

const CoordSystemParamsSchema = z
  .enum(['GDZ', 'GEO', 'GEI'])
  .openapi({
    param: {
      description:
        '<br>Coordinate system to use:  <br><br> - Geodetic/WGS84 (GDZ) <br> - Geocentric Cartesian (GEO) <br> - Geocentric Earth Inertial (GEI) <br> See "Bhavnani, K. H., & Vancour, R. P. (1991).  Coordinate systems for space and geophysical applications"  for coord system definitions.\n',
      in: 'query',
      name: 'coord_sys',
      required: true,
      schema: { enum: ['GDZ', 'GEO', 'GEI'], example: 'GEI', type: 'string' },
    },
    example: 'GEI',
  })

const CoordUnitsParamsSchema = z
  .enum(['KM', 'RE'])
  .openapi({
    param: {
      description: '<br>Coordinate units to use: km (KM) or Earth Radii (RE)\n',
      in: 'query',
      name: 'coord_units',
      required: true,
      schema: { enum: ['KM', 'RE'], example: 'KM', type: 'string' },
    },
    example: 'KM',
  })

const DateParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: '<br>Decimal year (eg 1997.65)',
      in: 'query',
      name: 'date',
      required: true,
      schema: { type: 'number' },
    },
  })

const DayParamsSchema = z
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
      description: '<br>',
      in: 'query',
      name: 'day',
      required: true,
      schema: { example: 1, type: 'integer' },
    },
    example: 1,
  })

const EnergyParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: '<br>Particle energy in MeV/n<br> Valid range: [0, 10<sup>6</sup>] MeV/n<br> \n',
      in: 'query',
      name: 'energy',
      required: true,
      schema: { example: 100, type: 'number' },
    },
    example: 100,
  })

const HourParamsSchema = z
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
      description: '<br>',
      in: 'query',
      name: 'hour',
      required: true,
      schema: { example: '0', type: 'integer' },
    },
    example: '0',
  })

const MinuteParamsSchema = z
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
      description: '<br>',
      in: 'query',
      name: 'minute',
      required: true,
      schema: { example: '0', type: 'integer' },
    },
    example: '0',
  })

const ModelParamsSchema = z
  .enum(['AE9', 'AP9', 'SPME', 'SPMH', 'SPMHE', 'SPMO'])
  .openapi({
    param: {
      description:
        '<br>Which model to use: <br><br> - Energetic electrons (AE9) <br> - Energetic protons (AP9)  <br> - Space plasma model for electrons (SPME) <br> - for hydrogen (SPMH) <br> - for helium (SPMHE) <br> - for oxygen (SPMO) \n',
      in: 'query',
      name: 'model',
      required: true,
      schema: {
        enum: ['AE9', 'AP9', 'SPME', 'SPMH', 'SPMHE', 'SPMO'],
        example: 'AE9',
        type: 'string',
      },
    },
    example: 'AE9',
  })

const MonthParamsSchema = z
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
      description: '<br>',
      in: 'query',
      name: 'month',
      required: true,
      schema: { example: 1, type: 'integer' },
    },
    example: 1,
  })

const PercentileParamsSchema = z
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
      description: '<br>Integer percentile at which to calc flux (50 is the median value).\n',
      in: 'query',
      name: 'percentile',
      required: true,
      schema: { example: 50, type: 'integer' },
    },
    example: 50,
  })

const SecondParamsSchema = z
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
      description: '<br>',
      in: 'query',
      name: 'second',
      required: true,
      schema: { example: '0', type: 'integer' },
    },
    example: '0',
  })

const YearParamsSchema = z
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
      description: '<br>',
      in: 'query',
      name: 'year',
      required: true,
      schema: { example: 2017, type: 'integer' },
    },
    example: 2017,
  })

const ZParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: '<br>Particle atomic number',
      in: 'query',
      name: 'z',
      required: true,
      schema: { example: 6, type: 'number' },
    },
    example: 6,
  })

export const getGcrFluxDlrRoute = createRoute({
  method: 'get',
  path: '/gcr/flux_dlr',
  tags: ['gcr'],
  summary: 'Calculate particle flux \n',
  description: 'for the given energy, atomic number, and date.\n',
  operationId: 'app.api.endpoints.GCR.calculate_dlr_flux',
  request: {
    query: z.object({
      year: YearParamsSchema,
      month: MonthParamsSchema,
      day: DayParamsSchema,
      z: ZParamsSchema,
      energy: EnergyParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful flux calculation',
      content: {
        'application/json': {
          schema: FluxAtEnergySchema,
          example: { flux: { units: '/m^2/s/sr/(MeV/n)', value: 0.006709578488527858 } },
        },
      },
    },
  },
})

export const getTrappedFluxMeanRoute = createRoute({
  method: 'get',
  path: '/trapped/flux_mean',
  tags: ['trapped'],
  summary: 'Calculate mean particle flux\n',
  description: 'at given coordinates and date-time.\n',
  operationId: 'app.api.endpoints.TrappedRadiation.calculate_flux_mean',
  request: {
    query: z.object({
      model: ModelParamsSchema,
      coord_sys: CoordSystemParamsSchema,
      coord_units: CoordUnitsParamsSchema,
      coord1: Coord1ParamsSchema,
      coord2: Coord2ParamsSchema,
      coord3: Coord3ParamsSchema,
      year: YearParamsSchema,
      month: MonthParamsSchema,
      day: DayParamsSchema,
      hour: HourParamsSchema,
      minute: MinuteParamsSchema,
      second: SecondParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful flux calculation',
      content: {
        'application/json': {
          schema: FluxSchema,
          example: {
            energies: {
              data: [
                0.04, 0.07, 0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7,
                8.5, 10,
              ],
              units: 'MeV',
            },
            flux: {
              data: [
                854635898.3161561, 564685905.5669771, 178490117.91626602, 47643571.94054352,
                12254101.813260391, 4549350.837767644, 1803653.1511005901, 654692.4848865604,
                207898.83220077943, 64091.642036893325, 21119.72803543081, 7526.08326415376,
                2847.94993909225, 1117.8011168229402, 490.68560475708034, 269.114292404757,
                177.84563745629936, 128.22793816827138, 78.49896611035479, 43.74101815451732,
                30.335272788461896,
              ],
              units: '/cm^2/s/MeV',
            },
          },
        },
      },
    },
  },
})

export const getTrappedFluxPercentileRoute = createRoute({
  method: 'get',
  path: '/trapped/flux_percentile',
  tags: ['trapped'],
  summary: 'Calculate percentile particle flux\n',
  description: 'at given coordinates and date-time.\n',
  operationId: 'app.api.endpoints.TrappedRadiation.calculate_flux_percentile',
  request: {
    query: z.object({
      model: ModelParamsSchema,
      coord_sys: CoordSystemParamsSchema,
      coord_units: CoordUnitsParamsSchema,
      coord1: Coord1ParamsSchema,
      coord2: Coord2ParamsSchema,
      coord3: Coord3ParamsSchema,
      year: YearParamsSchema,
      month: MonthParamsSchema,
      day: DayParamsSchema,
      hour: HourParamsSchema,
      minute: MinuteParamsSchema,
      second: SecondParamsSchema,
      percentile: PercentileParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful flux calculation',
      content: {
        'application/json': {
          schema: FluxSchema,
          example: {
            energies: {
              data: [
                0.04, 0.07, 0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7,
                8.5, 10,
              ],
              units: 'MeV',
            },
            flux: {
              data: [
                448667784.4812672, 322139086.68134594, 116785893.33177781, 32665389.706181422,
                7991547.299112285, 2586068.6893010717, 839339.9184292991, 251004.07802610364,
                69547.20063526293, 19974.510921688125, 6379.793949894077, 2089.794228005704,
                779.5936616445822, 313.1551441702104, 141.5097428322324, 71.78622535090953,
                40.65088904584258, 25.06786549513947, 12.794710202598523, 5.620209093649994,
                3.319852121012902,
              ],
              units: '/cm^2/s/MeV',
            },
          },
        },
      },
    },
  },
})
