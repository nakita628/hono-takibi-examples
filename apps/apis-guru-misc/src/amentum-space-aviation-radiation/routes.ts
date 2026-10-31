import { createRoute, z } from '@hono/zod-openapi'

export const getCari7AmbientDoseRoute = createRoute({
  method: 'get',
  path: '/cari7/ambient_dose',
  tags: ['cari7'],
  summary:
    'The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.\n',
  description:
    'The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields. \nUse this endpoint if you are comparing model predictions to measurements.\n',
  operationId: 'app.api_cari7.endpoints.CARI7.ambient_dose',
  request: {
    query: z.object({
      altitude: z
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
              'Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).',
            in: 'query',
            name: 'altitude',
            required: true,
            schema: { example: 11, type: 'number' },
          },
          example: 11,
        }),
      latitude: z
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
            description: 'Latitude. -90 (S) to 90 (N).',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      longitude: z
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
            description: 'Longitude. -180 (W) to 180 (E).',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 12, type: 'integer' },
          },
          example: 12,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      utc: z
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
            description: 'Hour in 24 hour time.',
            in: 'query',
            name: 'utc',
            required: true,
            schema: { example: 3, type: 'integer' },
          },
          example: 3,
        }),
      particle: z
        .enum([
          'total',
          'neutron',
          'photon',
          'e-',
          'e+',
          'mu-',
          'mu+',
          'proton',
          'pi-',
          'pi+',
          'deuteron',
          'triton',
          'helion',
          'alpha',
          'Li',
          'Be',
          'B',
          'C',
          'N',
          'O',
          'F',
          'Ne',
          'Na',
          'Mg',
          'Al',
          'Si',
          'P',
          'S',
          'Cl',
          'Ar',
          'K',
          'Ca',
          'Sc',
          'Ti',
          'V',
          'Cr',
          'Mn',
          'Fe',
        ])
        .openapi({
          param: {
            description:
              "The particle type as a string. Specifying 'total' returns the dose for all particle types.\n",
            in: 'query',
            name: 'particle',
            required: true,
            schema: {
              enum: [
                'total',
                'neutron',
                'photon',
                'e-',
                'e+',
                'mu-',
                'mu+',
                'proton',
                'pi-',
                'pi+',
                'deuteron',
                'triton',
                'helion',
                'alpha',
                'Li',
                'Be',
                'B',
                'C',
                'N',
                'O',
                'F',
                'Ne',
                'Na',
                'Mg',
                'Al',
                'Si',
                'P',
                'S',
                'Cl',
                'Ar',
                'K',
                'Ca',
                'Sc',
                'Ti',
                'V',
                'Cr',
                'Mn',
                'Fe',
              ],
              example: 'total',
              type: 'string',
            },
          },
          example: 'total',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful dose calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              'dose rate': z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { 'dose rate': { units: 'uSv/hr', value: 2.322303291477743 } },
              required: [],
            }),
        },
      },
    },
  },
})

export const getCari7EffectiveDoseRoute = createRoute({
  method: 'get',
  path: '/cari7/effective_dose',
  tags: ['cari7'],
  summary:
    'The effective dose rate calculated for a single particle type, or accumulated over all particle types.\n',
  description:
    'Effective Dose is a radiation protection quantity defined by the International Commission on\n Radiological Protection (ICRP) and represents the stochastic health\n risk to the human body at low levels of radiation.\nIt accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.\nUse this endpoint if you need to estimate radiation exposures of personnel.\n',
  operationId: 'app.api_cari7.endpoints.CARI7.effective_dose',
  request: {
    query: z.object({
      altitude: z
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
              'Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).',
            in: 'query',
            name: 'altitude',
            required: true,
            schema: { example: 11, type: 'number' },
          },
          example: 11,
        }),
      latitude: z
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
            description: 'Latitude. -90 (S) to 90 (N).',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      longitude: z
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
            description: 'Longitude. -180 (W) to 180 (E).',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 12, type: 'integer' },
          },
          example: 12,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      utc: z
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
            description: 'Hour in 24 hour time.',
            in: 'query',
            name: 'utc',
            required: true,
            schema: { example: 3, type: 'integer' },
          },
          example: 3,
        }),
      particle: z
        .enum([
          'total',
          'neutron',
          'photon',
          'e-',
          'e+',
          'mu-',
          'mu+',
          'proton',
          'pi-',
          'pi+',
          'deuteron',
          'triton',
          'helion',
          'alpha',
          'Li',
          'Be',
          'B',
          'C',
          'N',
          'O',
          'F',
          'Ne',
          'Na',
          'Mg',
          'Al',
          'Si',
          'P',
          'S',
          'Cl',
          'Ar',
          'K',
          'Ca',
          'Sc',
          'Ti',
          'V',
          'Cr',
          'Mn',
          'Fe',
        ])
        .openapi({
          param: {
            description:
              "The particle type as a string. Specifying 'total' returns the dose for all particle types.\n",
            in: 'query',
            name: 'particle',
            required: true,
            schema: {
              enum: [
                'total',
                'neutron',
                'photon',
                'e-',
                'e+',
                'mu-',
                'mu+',
                'proton',
                'pi-',
                'pi+',
                'deuteron',
                'triton',
                'helion',
                'alpha',
                'Li',
                'Be',
                'B',
                'C',
                'N',
                'O',
                'F',
                'Ne',
                'Na',
                'Mg',
                'Al',
                'Si',
                'P',
                'S',
                'Cl',
                'Ar',
                'K',
                'Ca',
                'Sc',
                'Ti',
                'V',
                'Cr',
                'Mn',
                'Fe',
              ],
              example: 'total',
              type: 'string',
            },
          },
          example: 'total',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful dose calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              'dose rate': z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { 'dose rate': { units: 'uSv/hr', value: 2.1532952875056712 } },
              required: [],
            }),
        },
      },
    },
  },
})

export const getParmaAmbientDoseRoute = createRoute({
  method: 'get',
  path: '/parma/ambient_dose',
  tags: ['parma'],
  summary:
    'The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.\n',
  description:
    'The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields. \nUse this endpoint if you are comparing model predictions to measurements.\n',
  operationId: 'app.api_parma.endpoints.PARMA.ambient_dose',
  request: {
    query: z.object({
      altitude: z
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
            description:
              'Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).',
            in: 'query',
            name: 'altitude',
            required: false,
            schema: { example: 11, type: 'number' },
          },
          example: 11,
        }),
      atmospheric_depth: z
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
            description:
              'Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.\n',
            in: 'query',
            name: 'atmospheric_depth',
            required: false,
            schema: { example: 0.92, type: 'number' },
          },
          example: 0.92,
        }),
      latitude: z
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
            description: 'Latitude. -90 (S) to 90 (N).',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      longitude: z
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
            description: 'Longitude. -180 (W) to 180 (E).',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 12, type: 'integer' },
          },
          example: 12,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      particle: z
        .enum(['total', 'e-', 'e+', 'mu+', 'mu-', 'gamma', 'neutron', 'proton', 'alpha'])
        .openapi({
          param: {
            description:
              "The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.\n",
            in: 'query',
            name: 'particle',
            required: true,
            schema: {
              enum: ['total', 'e-', 'e+', 'mu+', 'mu-', 'gamma', 'neutron', 'proton', 'alpha'],
              example: 'proton',
              type: 'string',
            },
          },
          example: 'proton',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful dose read operation',
      content: {
        'application/json': {
          schema: z
            .object({
              'dose rate': z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { 'dose rate': { units: 'uSv/hr', value: 0.26835067168474125 } },
              required: [],
            }),
        },
      },
    },
  },
})

export const getParmaDifferentialIntensityRoute = createRoute({
  method: 'get',
  path: '/parma/differential_intensity',
  tags: ['parma'],
  summary: 'The energy differential intensity of a particle at a given zenith angle.',
  description:
    'The differential intensity of a particle is a directional quantity that describes the number of particles per unit area, per unit solid angle, per unit energy, and per unit time. The API leverages the functionality of PARMA to calculate differential intensity distributions with energies in units of MeV and Intensity in units of /cm2/sr/MeV/s.\n',
  operationId: 'app.api_parma.endpoints.PARMA.differential_intensity',
  request: {
    query: z.object({
      altitude: z
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
            description:
              'Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).',
            in: 'query',
            name: 'altitude',
            required: false,
            schema: { example: 11, type: 'number' },
          },
          example: 11,
        }),
      atmospheric_depth: z
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
            description:
              'Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.\n',
            in: 'query',
            name: 'atmospheric_depth',
            required: false,
            schema: { example: 0.92, type: 'number' },
          },
          example: 0.92,
        }),
      latitude: z
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
            description: 'Latitude. -90 (S) to 90 (N).',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      longitude: z
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
            description: 'Longitude. -180 (W) to 180 (E).',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 12, type: 'integer' },
          },
          example: 12,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      particle: z
        .enum(['total', 'e-', 'e+', 'mu+', 'mu-', 'gamma', 'neutron', 'proton', 'alpha'])
        .openapi({
          param: {
            description:
              "The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.\n",
            in: 'query',
            name: 'particle',
            required: true,
            schema: {
              enum: ['total', 'e-', 'e+', 'mu+', 'mu-', 'gamma', 'neutron', 'proton', 'alpha'],
              example: 'proton',
              type: 'string',
            },
          },
          example: 'proton',
        }),
      angle: z
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
            description: 'Direction cosine. 1.0 is in the downward direction.',
            in: 'query',
            name: 'angle',
            required: true,
            schema: { example: 1, type: 'number' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful read of intensity operation',
      content: {
        'application/json': {
          schema: z
            .object({
              energies: z
                .object({
                  data: z.array(z.number()).exactOptional(),
                  units: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              intensities: z
                .object({
                  data: z.array(z.number()).exactOptional(),
                  units: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                energies: {
                  data: [
                    10.592537251772889, 11.885022274370186, 13.335214321633243, 14.96235656094434,
                    16.78804018122561, 18.836490894898017, 21.134890398366483, 23.71373705661657,
                    26.60725059798812, 29.853826189179625, 33.4965439157828, 37.583740428844465,
                    42.16965034285828, 47.31512589614811, 53.08844442309891, 59.56621435290114,
                    66.83439175686158, 74.98942093324571, 84.13951416451967, 94.40608762859253,
                    105.92537251772909, 118.85022274370202, 133.35214321633254, 149.62356560944343,
                    167.88040181225605, 188.36490894898, 211.34890398366454, 237.1373705661653,
                    266.0725059798806, 298.5382618917954, 334.9654391578269, 375.83740428844317,
                    421.69650342858097, 473.1512589614788, 530.8844442309862, 595.662143529008,
                    668.3439175686115, 749.894209332452, 841.3951416451905, 944.0608762859177,
                    1059.2537251772821, 1188.5022274370106, 1333.5214321633146, 1496.2356560944222,
                    1678.804018122547, 1883.6490894897847, 2113.4890398366283, 2371.3737056616337,
                    2660.725059798784, 2985.38261891793, 3349.6543915782418, 3758.374042884401,
                    4216.965034285775, 4731.512589614749, 5308.84444230982, 5956.621435290031,
                    6683.4391756860605, 7498.942093324459, 8413.951416451835, 9440.6087628591,
                    10592.537251772736, 11885.022274370007, 13335.214321633035, 14962.356560944098,
                    16788.04018122533, 18836.49089489769, 21134.890398366108, 23713.737056616137,
                    26607.250597987622, 29853.82618917905, 33496.543915782146, 37583.74042884371,
                    42169.65034285741, 47315.12589614711, 53088.44442309776, 59566.21435289981,
                    66834.39175686006, 74989.42093324398, 84139.51416451768, 94406.08762859023,
                  ],
                  units: 'MeV',
                },
                intensities: {
                  data: [
                    0.000015126557258481497, 0.00001599438328728434, 0.00001689468409778281,
                    0.00001782700110028125, 0.000018789989894315395, 0.000019781312921179226,
                    0.00002079773698769471, 0.000021835319990199245, 0.00002288931588809045,
                    0.000023953698331015904, 0.000025020740419725837, 0.00002608079723261754,
                    0.00002712202346190026, 0.000028129941429425255, 0.000029086999403906575,
                    0.000029972245159538348, 0.00003076112412042979, 0.00003142535794905927,
                    0.000031932955656189876, 0.000032248618858073125, 0.000032334985958519275,
                    0.000032155208240777106, 0.000031677197295996437, 0.000030879552903400744,
                    0.000029726220825502388, 0.000028234425803141926, 0.00002650516406182499,
                    0.000024602269634120444, 0.000022594819983033717, 0.000020552475431477016,
                    0.00001853662594721251, 0.000016596094572091987, 0.00001476576885147725,
                    0.000013067285256001253, 0.000011511187862538484, 0.000010100122716208363,
                    0.00000883240101591408, 0.000007703733932387032, 0.00000670576631351448,
                    0.000005822881145729626, 0.000005046340372076868, 0.000004369966582442526,
                    0.000003781202020752834, 0.0000032689518931964352, 0.0000028234311080639376,
                    0.000002436034648930342, 0.0000020992258398508115, 0.0000018064235849092022,
                    0.0000015518898432506667, 0.000001331051662285105, 0.0000011394488995132188,
                    9.726057340258263e-7, 8.265824310558272e-7, 6.998212586927555e-7,
                    5.894224376580005e-7, 4.93568138996158e-7, 4.116922090268701e-7,
                    3.460236317178158e-7, 3.037548828699797e-7, 2.9135185653116735e-7,
                    2.82520391784604e-7, 2.3785220594554244e-7, 1.7791153699257012e-7,
                    1.2924247345559558e-7, 9.48243126183575e-8, 7.043455232978242e-8,
                    5.2623996885656347e-8, 3.935459373084662e-8, 2.939334162588793e-8,
                    2.1909771678801793e-8, 1.6297871509147514e-8, 1.2099955678192665e-8,
                    8.967477745797399e-9, 6.635335072413951e-9, 4.902621621420823e-9,
                    3.6176621571186638e-9, 2.6663515657204105e-9, 1.963121398302903e-9,
                    1.4439864047128638e-9, 1.0612233263106733e-9,
                  ],
                  units: '/cm2/s/sr/MeV',
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getParmaEffectiveDoseRoute = createRoute({
  method: 'get',
  path: '/parma/effective_dose',
  tags: ['parma'],
  summary:
    'The effective dose rate calculated for a single particle type, or accumulated over all particle types.\n',
  description:
    'Effective dose is a radiation protection quantity defined by the International Commission on Radiological Protection (ICRP) and represents the stochastic health risk to the human body at low levels of radiation. It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.\nUse this endpoint if you need to estimate radiation exposures of personnel.\n',
  operationId: 'app.api_parma.endpoints.PARMA.effective_dose',
  request: {
    query: z.object({
      altitude: z
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
            description:
              'Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).',
            in: 'query',
            name: 'altitude',
            required: false,
            schema: { example: 11, type: 'number' },
          },
          example: 11,
        }),
      atmospheric_depth: z
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
            description:
              'Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.\n',
            in: 'query',
            name: 'atmospheric_depth',
            required: false,
            schema: { example: 0.92, type: 'number' },
          },
          example: 0.92,
        }),
      latitude: z
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
            description: 'Latitude. -90 (S) to 90 (N).',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      longitude: z
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
            description: 'Longitude. -180 (W) to 180 (E).',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { example: 30, type: 'number' },
          },
          example: 30,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 12, type: 'integer' },
          },
          example: 12,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
      particle: z
        .enum(['total', 'e-', 'e+', 'mu+', 'mu-', 'gamma', 'neutron', 'proton', 'alpha'])
        .openapi({
          param: {
            description:
              "The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.\n",
            in: 'query',
            name: 'particle',
            required: true,
            schema: {
              enum: ['total', 'e-', 'e+', 'mu+', 'mu-', 'gamma', 'neutron', 'proton', 'alpha'],
              example: 'proton',
              type: 'string',
            },
          },
          example: 'proton',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful dose read operation',
      content: {
        'application/json': {
          schema: z
            .object({
              'dose rate': z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { 'dose rate': { units: 'uSv/hr', value: 1.9456004308224644 } },
              required: [],
            }),
        },
      },
    },
  },
})

export const getRouteAmbientDoseRoute = createRoute({
  method: 'get',
  path: '/route/ambient_dose',
  tags: ['routedose'],
  summary: 'Calculate the ambient equivalent dose along a great circle flight route.\n',
  description:
    'The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.  <br> <br> Use this endpoint if you are comparing model predictions to measurements. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.\n',
  operationId: 'app.api_icaro.endpoints.ICARO.ambient_dose',
  request: {
    query: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description:
              'The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.',
            in: 'query',
            name: 'origin',
            required: true,
            schema: { example: 'YSSY', type: 'string' },
          },
          example: 'YSSY',
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description:
              'The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.',
            in: 'query',
            name: 'destination',
            required: true,
            schema: { example: '33.94250107,-118.4079971', type: 'string' },
          },
          example: '33.94250107,-118.4079971',
        }),
      altitude: z
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
            description: 'Altitude (in km). The minimum is 0 m, the maximum is 20 km.',
            in: 'query',
            name: 'altitude',
            required: false,
            schema: { example: 10.1, type: 'number' },
          },
          example: 10.1,
        }),
      duration: z
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
            description: 'The flight duration in hours. The minimum is 0, the maximum is 20 hrs.',
            in: 'query',
            name: 'duration',
            required: false,
            schema: { example: 5, type: 'number' },
          },
          example: 5,
        }),
      initial_altitude: z
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
            description: 'Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.',
            in: 'query',
            name: 'initial_altitude',
            required: false,
            schema: { example: 0, type: 'number' },
          },
          example: 0,
        }),
      cruising_altitudes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.',
            in: 'query',
            name: 'cruising_altitudes',
            required: false,
            schema: { example: [10, 15], items: { type: 'number' }, type: 'array' },
          },
          example: [10, 15],
        }),
      climb_times: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Climb times for each cruising altitude (hours).',
            in: 'query',
            name: 'climb_times',
            required: false,
            schema: { example: [0.1, 0.5], items: { type: 'number' }, type: 'array' },
          },
          example: [0.1, 0.5],
        }),
      cruising_times: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Cruising times at each cruising altitude (hours).',
            in: 'query',
            name: 'cruising_times',
            required: false,
            schema: { example: [1, 2], items: { type: 'number' }, type: 'array' },
          },
          example: [1, 2],
        }),
      descent_time: z
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
            description: 'Descent time from last cruising altitude to final altitude (hours).',
            in: 'query',
            name: 'descent_time',
            required: false,
            schema: { example: 0.5, type: 'number' },
          },
          example: 0.5,
        }),
      final_altitude: z
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
            description: 'Final altitude (in km).',
            in: 'query',
            name: 'final_altitude',
            required: false,
            schema: { example: 0, type: 'number' },
          },
          example: 0,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 5, type: 'integer' },
          },
          example: 5,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 21, type: 'integer' },
          },
          example: 21,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful dose calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              dose: z
                .object({
                  date: z.string().exactOptional(),
                  destination: z.string().exactOptional(),
                  origin: z.string().exactOptional(),
                  units: z.string().exactOptional(),
                  value: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                dose: {
                  date: '21/05/2019',
                  destination: '33.94250107,-118.4079971',
                  origin: 'YSSY',
                  units: 'uSv',
                  value: 10.911498908287665,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getRouteEffectiveDoseRoute = createRoute({
  method: 'get',
  path: '/route/effective_dose',
  tags: ['routedose'],
  summary: 'Calculate the total effective dose along a great circle flight route.\n',
  description:
    'Effective Dose is a radiation protection quantity defined by the International Commission on\n Radiological Protection (ICRP) and represents the stochastic health\n risk to the human body at low levels of radiation.\nIt accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation. <br> <br> Use this endpoint if you need to estimate radiation exposures of personnel. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.\n',
  operationId: 'app.api_icaro.endpoints.ICARO.effective_dose',
  request: {
    query: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description:
              'The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.',
            in: 'query',
            name: 'origin',
            required: true,
            schema: { example: 'YSSY', type: 'string' },
          },
          example: 'YSSY',
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description:
              'The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.',
            in: 'query',
            name: 'destination',
            required: true,
            schema: { example: '33.94250107,-118.4079971', type: 'string' },
          },
          example: '33.94250107,-118.4079971',
        }),
      altitude: z
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
            description: 'Altitude (in km). The minimum is 0 m, the maximum is 20 km.',
            in: 'query',
            name: 'altitude',
            required: false,
            schema: { example: 10.1, type: 'number' },
          },
          example: 10.1,
        }),
      duration: z
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
            description: 'The flight duration in hours. The minimum is 0, the maximum is 20 hrs.',
            in: 'query',
            name: 'duration',
            required: false,
            schema: { example: 5, type: 'number' },
          },
          example: 5,
        }),
      initial_altitude: z
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
            description: 'Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.',
            in: 'query',
            name: 'initial_altitude',
            required: false,
            schema: { example: 0, type: 'number' },
          },
          example: 0,
        }),
      cruising_altitudes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.',
            in: 'query',
            name: 'cruising_altitudes',
            required: false,
            schema: { example: [10, 15], items: { type: 'number' }, type: 'array' },
          },
          example: [10, 15],
        }),
      climb_times: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Climb times for each cruising altitude (hours).',
            in: 'query',
            name: 'climb_times',
            required: false,
            schema: { example: [0.1, 0.5], items: { type: 'number' }, type: 'array' },
          },
          example: [0.1, 0.5],
        }),
      cruising_times: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Cruising times at each cruising altitude (hours).',
            in: 'query',
            name: 'cruising_times',
            required: false,
            schema: { example: [1, 2], items: { type: 'number' }, type: 'array' },
          },
          example: [1, 2],
        }),
      descent_time: z
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
            description: 'Descent time from last cruising altitude to final altitude (hours).',
            in: 'query',
            name: 'descent_time',
            required: false,
            schema: { example: 0.5, type: 'number' },
          },
          example: 0.5,
        }),
      final_altitude: z
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
            description: 'Final altitude (in km).',
            in: 'query',
            name: 'final_altitude',
            required: false,
            schema: { example: 0, type: 'number' },
          },
          example: 0,
        }),
      year: z
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
            description: 'Year in YYYY.',
            in: 'query',
            name: 'year',
            required: true,
            schema: { example: 2019, type: 'integer' },
          },
          example: 2019,
        }),
      month: z
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
            description: 'Month in MM.',
            in: 'query',
            name: 'month',
            required: true,
            schema: { example: 5, type: 'integer' },
          },
          example: 5,
        }),
      day: z
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
            description: 'Day in DD.',
            in: 'query',
            name: 'day',
            required: true,
            schema: { example: 21, type: 'integer' },
          },
          example: 21,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful dose calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              dose: z
                .object({
                  date: z.string().exactOptional(),
                  destination: z.string().exactOptional(),
                  origin: z.string().exactOptional(),
                  units: z.string().exactOptional(),
                  value: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                dose: {
                  date: '21/05/2019',
                  destination: '33.94250107,-118.4079971',
                  origin: 'YSSY',
                  units: 'uSv',
                  value: 9.90406659800017,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})
