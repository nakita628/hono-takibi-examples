import { createRoute, z } from '@hono/zod-openapi'

export const getV10CompareStationStationNameIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/compareStation/{stationName}/',
  tags: ['ODWeather'],
  description: 'Get forecast and realtime information for known points<br/>None',
  operationId: 'compareStation',
  request: {
    params: z.object({
      stationName: z
        .string()
        .default('cnarenal')
        .openapi({
          param: {
            description:
              'Weather station to compare, values: cnareanl|rcnp | cmsap|boyaenderrocat|areopuertopalma | EWXXX',
            in: 'path',
            name: 'stationName',
            required: true,
            schema: { default: 'cnarenal', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetAemetStationStationNamePeriodIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getAemetStation/{stationName}/{period}/',
  tags: ['ODWeather'],
  description: 'Get data from the aemet stations<br/>None',
  operationId: 'getAemetStation',
  request: {
    params: z.object({
      stationName: z
        .string()
        .default('aeropuertopalma')
        .openapi({
          param: {
            description: 'station name currently: aeropuertopalma | caboblanco ',
            in: 'path',
            name: 'stationName',
            required: true,
            schema: { default: 'aeropuertopalma', type: 'string' },
          },
        }),
      period: z
        .string()
        .default('lastdata')
        .openapi({
          param: {
            description: 'Period of time to get the data. Options: lastdata lastday',
            in: 'path',
            name: 'period',
            required: true,
            schema: { default: 'lastdata', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetEasyWindEasywindIdIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getEasyWind/{easywindId}/',
  tags: ['ODWeather'],
  description: 'Get data from the easywind weather stations<br/>None',
  operationId: 'getEasywind',
  request: {
    params: z.object({
      easywindId: z
        .string()
        .default('EW013')
        .openapi({
          param: {
            description: "currently: 'EW013'|'EW008'",
            in: 'path',
            name: 'easywindId',
            required: true,
            schema: { default: 'EW013', type: 'string' },
          },
        }),
    }),
    query: z.object({
      period: z
        .string()
        .default('latestdata')
        .openapi({
          param: {
            description: 'Period of time to get the data latestdata|latesthour|latestday',
            in: 'query',
            name: 'period',
            required: true,
            schema: { default: 'latestdata', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetEventStationsEventIdIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getEventStations/{eventId}/',
  tags: ['ODWeather'],
  description: 'Get stations in an event<br/>None',
  operationId: 'getEventStations',
  request: {
    params: z.object({
      eventId: z
        .string()
        .default('trofeoprincesasofia')
        .openapi({
          param: {
            description: "currently: 'trofeoprincesasofia|palmavela'",
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { default: 'trofeoprincesasofia', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetForecastPointsYatchclubidLanguageLanguageRoute = createRoute({
  method: 'get',
  path: '/v1.0/getForecastPoints/{yatchclubid}/language/{language}',
  tags: ['ODWeather'],
  description: 'Get forecast points of a yatchclub<br/>None',
  operationId: 'getForecastPoints',
  request: {
    params: z.object({
      yatchclubid: z
        .string()
        .default('cnarenal')
        .openapi({
          param: {
            description: 'base URL for the the',
            in: 'path',
            name: 'yatchclubid',
            required: true,
            schema: { default: 'cnarenal', type: 'string' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: { in: 'path', name: 'language', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetForecastTimeSeriesLatitudeLongitudeIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getForecastTimeSeries/{latitude}/{longitude}/',
  tags: ['ODWeather'],
  description: 'Get timeseries forecast information<br/>None',
  operationId: 'getForecastTimeSeries',
  request: {
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(39.49)
        .openapi({
          param: {
            description: 'latitude for the forecast',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { default: 39.49, format: 'float', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(2.74)
        .openapi({
          param: {
            description: 'longitude for the forecast',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { default: 2.74, format: 'float', type: 'number' },
          },
        }),
    }),
    query: z.object({
      inittime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ',
            in: 'query',
            name: 'inittime',
            required: false,
            schema: { type: 'string' },
          },
        }),
      endtime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ',
            in: 'query',
            name: 'endtime',
            required: false,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'optional number of days in string. Will be added to init forecast date',
            in: 'query',
            name: 'days',
            required: false,
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'optional number of hours in string. Will be added to init forecast date',
            in: 'query',
            name: 'hours',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      weather: z
        .string()
        .openapi({
          param: {
            description:
              ' Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period',
            in: 'query',
            name: 'weather',
            required: true,
            schema: { type: 'string' },
          },
        }),
      wave: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' Comma separated values for the wave parameteres height,direction,period',
            in: 'query',
            name: 'wave',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entryid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Direct file I want to extract',
            in: 'query',
            name: 'entryid',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getForecastTimeSeriesWrf/{latitude}/{longitude}/',
  tags: ['ODWeather'],
  description: 'Get timeseries forecast information<br/>None',
  operationId: 'getForecastTimeSeriesWrf',
  request: {
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(39.49)
        .openapi({
          param: {
            description: 'latitude for the forecast',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { default: 39.49, format: 'float', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(2.74)
        .openapi({
          param: {
            description: 'longitude for the forecast',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { default: 2.74, format: 'float', type: 'number' },
          },
        }),
    }),
    query: z.object({
      inittime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ',
            in: 'query',
            name: 'inittime',
            required: false,
            schema: { type: 'string' },
          },
        }),
      endtime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ',
            in: 'query',
            name: 'endtime',
            required: false,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'optional number of days in string. Will be added to init forecast date',
            in: 'query',
            name: 'days',
            required: false,
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'optional number of hours in string. Will be added to init forecast date',
            in: 'query',
            name: 'hours',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      weather: z
        .string()
        .openapi({
          param: {
            description:
              ' Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period',
            in: 'query',
            name: 'weather',
            required: true,
            schema: { type: 'string' },
          },
        }),
      wave: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' Comma separated values for the wave parameteres height,direction,period',
            in: 'query',
            name: 'wave',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entryid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Direct file I want to extract',
            in: 'query',
            name: 'entryid',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetSocibWeatherStationStationNamePeriodIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getSocibWeatherStation/{stationName}/{period}/',
  tags: ['ODWeather'],
  description: 'Get data from the socib bahia de palma buoy<br/>None',
  operationId: 'getSocibWeatherStation',
  request: {
    params: z.object({
      stationName: z
        .string()
        .default('boyaenderrocat')
        .openapi({
          param: {
            description: 'station name currently: boyaenderrocat | playadepalma',
            in: 'path',
            name: 'stationName',
            required: true,
            schema: { default: 'boyaenderrocat', type: 'string' },
          },
        }),
      period: z
        .string()
        .default('lastdata')
        .openapi({
          param: {
            description: 'Period of time to get the data. Options: lastdata lasthour lastday',
            in: 'path',
            name: 'period',
            required: true,
            schema: { default: 'lastdata', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetWeatherDisplayStationNameIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getWeatherDisplay/{stationName}/',
  tags: ['ODWeather'],
  description: 'Get data from the weather display software<br/>None',
  operationId: 'getWeatherDisplay',
  request: {
    params: z.object({
      stationName: z
        .string()
        .default('cnarenal')
        .openapi({
          param: {
            description: "currently: 'cnarenal'|'campastilla' | 'cncg'",
            in: 'path',
            name: 'stationName',
            required: true,
            schema: { default: 'cnarenal', type: 'string' },
          },
        }),
    }),
    query: z.object({
      period: z
        .string()
        .default('latestdata')
        .openapi({
          param: {
            description: 'Period of time to get the data latestdata|latesthour|latestday|dailylog',
            in: 'query',
            name: 'period',
            required: true,
            schema: { default: 'latestdata', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV10GetWebCamsIndexRoute = createRoute({
  method: 'get',
  path: '/v1.0/getWebCams/',
  tags: ['ODWeather'],
  description: 'Get forecast and realtime information for known points<br/>None',
  operationId: 'getWebCams',
  responses: { 200: { description: 'No response was specified' } },
})
