import { createRoute, z } from '@hono/zod-openapi'

const APParamsSchema = z
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
        '(Optional) The Ap-index provides a daily average level for geomagnetic activity F107, F107A, AP effects can be neglected below 80 km. If unspecified, the average of values in the 24 hours preceding the date-time  are automatically calculated from data provided by GFZ German Research Centre  for Geosciences.\n',
      in: 'query',
      name: 'ap',
      required: false,
      schema: { example: 30, type: 'number' },
    },
    example: 30,
  })

const AltitudeParamsSchema = z
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
      description: 'Altitude in (km)',
      in: 'query',
      name: 'altitude',
      required: true,
      schema: { example: 300, type: 'number' },
    },
    example: 300,
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
      description: 'Day in DD format',
      in: 'query',
      name: 'day',
      required: true,
      schema: { example: 23, type: 'integer' },
    },
    example: 23,
  })

const F107ParamsSchema = z
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
        '(Optional) Daily F10.7 cm radio flux for previous day (SFU). F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.\n',
      in: 'query',
      name: 'f107',
      required: false,
      schema: { example: 120, type: 'number' },
    },
    example: 120,
  })

const F107AParamsSchema = z
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
        '(Optional) 81 day average of F10.7 flux (SFU) centered on the specified day. F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.\n',
      in: 'query',
      name: 'f107a',
      required: false,
      schema: { example: 120, type: 'number' },
    },
    example: 120,
  })

const GeodeticLatitudeParamsSchema = z
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
      description: 'GeodeticLatitude (deg) -90 to 90 deg',
      in: 'query',
      name: 'geodetic_latitude',
      required: true,
      schema: { example: 42, type: 'number' },
    },
    example: 42,
  })

const GeodeticLongitudeParamsSchema = z
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
      description: 'GeodeticLongitude (deg) 0 to 360 deg',
      in: 'query',
      name: 'geodetic_longitude',
      required: true,
      schema: { example: 42, type: 'number' },
    },
    example: 42,
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
      description: 'UTC Hour of the day in 24 hour format',
      in: 'query',
      name: 'hour',
      required: true,
      schema: { example: 15, type: 'integer' },
    },
    example: 15,
  })

const LatitudeParamsSchema = z
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
      description: 'Latitude (deg) -90 to 90 deg',
      in: 'query',
      name: 'latitude',
      required: true,
      schema: { example: 42, type: 'number' },
    },
    example: 42,
  })

const LongitudeParamsSchema = z
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
      description: 'Longitude (deg) 0 to 360 deg or -180 to 180 deg',
      in: 'query',
      name: 'longitude',
      required: true,
      schema: { example: 42, type: 'number' },
    },
    example: 42,
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
      description: 'Minute of the given hour',
      in: 'query',
      name: 'minute',
      required: true,
      schema: { example: 10, type: 'integer' },
    },
    example: 10,
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
      description: 'Month in MM format',
      in: 'query',
      name: 'month',
      required: true,
      schema: { example: 5, type: 'integer' },
    },
    example: 5,
  })

const UTCParamsSchema = z
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
      description: 'Coordinated Universal Time (hrs)',
      in: 'query',
      name: 'utc',
      required: true,
      schema: { example: 2, type: 'number' },
    },
    example: 2,
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
      description: 'Year in YYYY format',
      in: 'query',
      name: 'year',
      required: true,
      schema: { example: 2020, type: 'integer' },
    },
    example: 2020,
  })

export const getJb2008Route = createRoute({
  method: 'get',
  path: '/jb2008',
  tags: ['jb2008'],
  summary: 'Compute atmospheric density and temperatures\n',
  description: 'under given conditions.\n',
  operationId: 'app.api.endpoints.JB2008.sample_atmosphere',
  request: {
    query: z.object({
      year: YearParamsSchema,
      month: MonthParamsSchema,
      day: DayParamsSchema,
      altitude: AltitudeParamsSchema,
      geodetic_latitude: GeodeticLatitudeParamsSchema,
      geodetic_longitude: GeodeticLongitudeParamsSchema,
      utc: UTCParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful atmospheric density calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              at_alt_temp: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              exospheric_temp: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              total_mass_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            at_alt_temp: { units: 'K', value: 667.005615234375 },
            exospheric_temp: { units: 'K', value: 666.522705078125 },
            total_mass_density: { units: 'kg/m3', value: 5.201439105817496e-12 },
          },
        },
      },
    },
  },
})

export const getNrlmsise00Route = createRoute({
  method: 'get',
  path: '/nrlmsise00',
  tags: ['nrlmsise00'],
  summary: 'Compute atmospheric composition, density, and temperatures\n',
  description: 'at specified conditions.\n',
  operationId: 'app.api.endpoints.NRLMSISE00.sample_atmosphere',
  request: {
    query: z.object({
      year: YearParamsSchema,
      month: MonthParamsSchema,
      day: DayParamsSchema,
      altitude: AltitudeParamsSchema,
      geodetic_latitude: GeodeticLatitudeParamsSchema,
      geodetic_longitude: GeodeticLongitudeParamsSchema,
      utc: UTCParamsSchema,
      f107a: F107AParamsSchema,
      f107: F107ParamsSchema,
      ap: APParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful atmospheric density calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              Ar_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              H_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              He_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              N2_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              N_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              O2_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              O_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              anomalous_O_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              ap: z
                .object({ value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              at_alt_temp: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              exospheric_temp: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              f107: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              f107a: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              total_mass_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            Ar_density: { units: '/m3', value: 345221344 },
            H_density: { units: '/m3', value: 846266302464 },
            He_density: { units: '/m3', value: 14137357762560 },
            N2_density: { units: '/m3', value: 7370196910080 },
            N_density: { units: '/m3', value: 424038367232 },
            O2_density: { units: '/m3', value: 285386670080 },
            O_density: { units: '/m3', value: 160525593870336 },
            anomalous_O_density: { units: '/m3', value: 2940371.25 },
            ap: { value: 3 },
            at_alt_temp: { units: 'K', value: 590.3972778320312 },
            exospheric_temp: { units: 'K', value: 590.4319458007812 },
            f107: { units: 'sfu', value: 70 },
            f107a: { units: 'sfu', value: 69.35802469135803 },
            total_mass_density: { units: 'kg/m3', value: 4.7264410267533474e-12 },
          },
        },
      },
    },
  },
})

export const getWamIpeRoute = createRoute({
  method: 'get',
  path: '/wam-ipe',
  tags: ['wam-ipe'],
  summary: 'Forecast winds, ion and molecular densities, and temperatures in the atmosphere\n',
  description:
    'at a given position and time on 42-48 hour forecast horizon (10 minute resolution). NOTE: latitudes outside the interval (-90,90) are clipped to the endpoints; longitudes outside (0,360) are wrapped.   \n',
  operationId: 'app.api_wfs.endpoints.WFS.get_values',
  request: {
    query: z.object({
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      altitude: AltitudeParamsSchema,
      year: YearParamsSchema,
      month: MonthParamsSchema,
      day: DayParamsSchema,
      hour: HourParamsSchema,
      minute: MinuteParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful wam-ipe calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              N2_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ description: 'Molecular nitrogen density in (/m3).\n', required: [] }),
              O2_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ description: 'Moleculary oxygen density in (/m3).\n', required: [] }),
              O_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ description: 'Oxygen atomic density in (/m3).\n', required: [] }),
              eastward_wind_neutral: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'Easterly component of neutral wind velocity in (m/s).\n',
                  required: [],
                }),
              northward_wind_neutral: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'Northerly component of neutral wind velocity in (m/s).\n',
                  required: [],
                }),
              point: z
                .object({
                  altitude: z.number().exactOptional(),
                  latitude: z.number().exactOptional(),
                  longitude: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The given point in the request.', required: [] }),
              temp_neutral: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ description: 'Temperature of the atmosphere in (K).\n', required: [] }),
              total_mass_density: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({ description: 'Total mass density (kg/m3).\n', required: [] }),
              upward_wind_neutral: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'Upward component of neutral wind velocity in (m/s).\n',
                  required: [],
                }),
            })
            .openapi({
              example: {
                N2_density: { units: '/m3', value: 1.8508440362185578e25 },
                O2_density: { units: '/m3', value: 5.005040353829904e24 },
                O_density: { units: '/m3', value: 4279507561218048 },
                eastward_wind_neutral: { units: 'm/s', value: 0.15444904565811157 },
                northward_wind_neutral: { units: 'm/s', value: -9.831161499023438 },
                point: { altitude: 327.6, latitude: 30, longitude: 348 },
                temp_neutral: { units: 'K', value: 296.2078 },
                total_mass_density: { units: 'kg/m3', value: 4.124548465486878e-11 },
                upward_wind_neutral: { units: 'm/s', value: -0.00033221824560314417 },
              },
              required: [],
            }),
        },
      },
    },
  },
})
