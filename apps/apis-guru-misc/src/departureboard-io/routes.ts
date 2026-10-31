import { createRoute, z } from '@hono/zod-openapi'

export const getGetArrivalsAndDeparturesByCRSCRSRoute = createRoute({
  method: 'get',
  path: '/getArrivalsAndDeparturesByCRS/{CRS}',
  tags: ['Departures & Arrivals'],
  summary:
    'getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.',
  operationId: 'getArrivalsAndDeparturesByCRS',
  request: {
    params: z.object({
      CRS: z
        .string()
        .length(3)
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) for the Station you wish to get departure and arrival information for, e.g. KGX for London Kings Cross.',
            explode: false,
            in: 'path',
            name: 'CRS',
            required: true,
            schema: { maxLength: 3, minLength: 3, type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            description:
              'The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.',
            explode: true,
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      numServices: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of arriving and departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services arriving to or departing from this station within the time window specified.',
            explode: true,
            in: 'query',
            name: 'numServices',
            required: false,
            schema: { default: 10, type: 'integer' },
            style: 'form',
          },
        }),
      timeOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-239).max(119),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeOffset',
            required: false,
            schema: { default: 0, maximum: 119, minimum: -239, type: 'integer' },
            style: 'form',
          },
        }),
      timeWindow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(120)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeWindow',
            required: false,
            schema: { default: 120, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      serviceDetails: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.',
            explode: true,
            in: 'query',
            name: 'serviceDetails',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
      filterStation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) code to filter the results by. When setting this you must also set the filterType parameter. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading) and filterType to from, will only show services arriving to London Paddington that stopped at Reading. Setting a filter for getArrivalsAndDeparturesByCRS is similar to performing a getArrivalsByCRS or getDeparturesByCRS lookup, with the appropriate filterStation parameter. However using the getArrivalsAndDeparturesByCRS endpoint shows more details for each of the returned services.',
            explode: true,
            in: 'query',
            name: 'filterStation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      filterType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines if the filterStation parameter should be applied for services arriving to, or leaving from the selected station. Required if filterStation is set.',
            explode: true,
            in: 'query',
            name: 'filterType',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '**OK**: The API Request was successful and returned data.' },
    400: {
      description:
        'Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.',
    },
    401: {
      description:
        '**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.',
    },
    429: {
      description:
        '**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.',
    },
    500: {
      description:
        '**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.',
    },
    503: {
      description:
        '**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.',
    },
  },
})

export const getGetArrivalsByCRSCRSRoute = createRoute({
  method: 'get',
  path: '/getArrivalsByCRS/{CRS}',
  tags: ['Departures & Arrivals'],
  summary:
    'getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.',
  operationId: 'getArrivalsByCRS',
  request: {
    params: z.object({
      CRS: z
        .string()
        .length(3)
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) for the Station you wish to get arrival information for, e.g. KGX for London Kings Cross.',
            explode: false,
            in: 'path',
            name: 'CRS',
            required: true,
            schema: { maxLength: 3, minLength: 3, type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            description:
              'The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.',
            explode: true,
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      numServices: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of arriving train services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running to this station within the time window specified.',
            explode: true,
            in: 'query',
            name: 'numServices',
            required: false,
            schema: { default: 10, type: 'integer' },
            style: 'form',
          },
        }),
      timeOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-239).max(119),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the arrival information by. For example, a value of 20 will not show services arriving within the next 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeOffset',
            required: false,
            schema: { default: 0, maximum: 119, minimum: -239, type: 'integer' },
            style: 'form',
          },
        }),
      timeWindow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(120)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window to show train services for in minutes. For example, a value of 60 will show services arriving to the station in the next 60 minutes.',
            explode: true,
            in: 'query',
            name: 'timeWindow',
            required: false,
            schema: { default: 120, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      serviceDetails: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.',
            explode: true,
            in: 'query',
            name: 'serviceDetails',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
      filterStation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services arriving to Paddington that stopped at Reading.',
            explode: true,
            in: 'query',
            name: 'filterStation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '**OK**: The API Request was successful and returned data.' },
    400: {
      description:
        'Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.',
    },
    401: {
      description:
        '**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.',
    },
    429: {
      description:
        '**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.',
    },
    500: {
      description:
        '**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.',
    },
    503: {
      description:
        '**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.',
    },
  },
})

export const getGetDeparturesByCRSCRSRoute = createRoute({
  method: 'get',
  path: '/getDeparturesByCRS/{CRS}',
  tags: ['Departures & Arrivals'],
  summary:
    'getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.',
  operationId: 'getDeparturesByCRS',
  request: {
    params: z.object({
      CRS: z
        .string()
        .length(3)
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.',
            explode: false,
            in: 'path',
            name: 'CRS',
            required: true,
            schema: { maxLength: 3, minLength: 3, type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            description:
              'The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.',
            explode: true,
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      numServices: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running from the selected station within the time window specified.',
            explode: true,
            in: 'query',
            name: 'numServices',
            required: false,
            schema: { default: 10, type: 'integer' },
            style: 'form',
          },
        }),
      timeOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-239).max(119),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the departure information by. For example, a value of 20 will not show services departing within the next 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeOffset',
            required: false,
            schema: { default: 0, maximum: 119, minimum: -239, type: 'integer' },
            style: 'form',
          },
        }),
      timeWindow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(120)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window to show services for in minutes. For example, a value of 60 will show services departing the station in the next 60 minutes.',
            explode: true,
            in: 'query',
            name: 'timeWindow',
            required: false,
            schema: { default: 120, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      serviceDetails: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.',
            explode: true,
            in: 'query',
            name: 'serviceDetails',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
      filterStation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services departing from Paddington that stop at Reading.',
            explode: true,
            in: 'query',
            name: 'filterStation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '**OK**: The API Request was successful and returned data.' },
    400: {
      description:
        'Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.',
    },
    401: {
      description:
        '**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.',
    },
    429: {
      description:
        '**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.',
    },
    500: {
      description:
        '**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.',
    },
    503: {
      description:
        '**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.',
    },
  },
})

export const getGetFastestDeparturesByCRSCRSRoute = createRoute({
  method: 'get',
  path: '/getFastestDeparturesByCRS/{CRS}',
  tags: ['Fastest and Next Departures'],
  summary:
    'getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.',
  operationId: 'getFastestDeparturesByCRS',
  request: {
    params: z.object({
      CRS: z
        .string()
        .length(3)
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.',
            explode: false,
            in: 'path',
            name: 'CRS',
            required: true,
            schema: { maxLength: 3, minLength: 3, type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            description:
              'The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.',
            explode: true,
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      filterList: z
        .string()
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) codes to show the fastest departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.',
            explode: true,
            in: 'query',
            name: 'filterList',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      timeOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-239).max(119),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the departure information by. For example, a value of 20 will show the fastest services departing after 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeOffset',
            required: false,
            schema: { default: 0, maximum: 119, minimum: -239, type: 'integer' },
            style: 'form',
          },
        }),
      timeWindow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(120)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window to show train services for in minutes. For example, a value of 60 will show the fastest services departing the station in the next 60 minutes.',
            explode: true,
            in: 'query',
            name: 'timeWindow',
            required: false,
            schema: { default: 120, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      serviceDetails: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.',
            explode: true,
            in: 'query',
            name: 'serviceDetails',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '**OK**: The API Request was successful and returned data.' },
    400: {
      description:
        'Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.',
    },
    401: {
      description:
        '**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.',
    },
    429: {
      description:
        '**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.',
    },
    500: {
      description:
        '**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.',
    },
    503: {
      description:
        '**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.',
    },
  },
})

export const getGetNextDeparturesByCRSCRSRoute = createRoute({
  method: 'get',
  path: '/getNextDeparturesByCRS/{CRS}',
  tags: ['Fastest and Next Departures'],
  summary:
    'getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.',
  operationId: 'getNextDeparturesByCRS',
  request: {
    params: z.object({
      CRS: z
        .string()
        .length(3)
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.',
            explode: false,
            in: 'path',
            name: 'CRS',
            required: true,
            schema: { maxLength: 3, minLength: 3, type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            description:
              'The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.',
            explode: true,
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      filterList: z
        .string()
        .openapi({
          param: {
            description:
              'The CRS (Computer Reservation System) codes to show departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.',
            explode: true,
            in: 'query',
            name: 'filterList',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      timeOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-239).max(119),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeOffset',
            required: false,
            schema: { default: 0, maximum: 119, minimum: -239, type: 'integer' },
            style: 'form',
          },
        }),
      timeWindow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(120)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.',
            explode: true,
            in: 'query',
            name: 'timeWindow',
            required: false,
            schema: { default: 120, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      serviceDetails: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.',
            explode: true,
            in: 'query',
            name: 'serviceDetails',
            required: false,
            schema: { default: true, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '**OK**: The API Request was successful and returned data.' },
    400: {
      description:
        'Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.',
    },
    401: {
      description:
        '**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.',
    },
    429: {
      description:
        '**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.',
    },
    500: {
      description:
        '**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.',
    },
    503: {
      description:
        '**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.',
    },
  },
})

export const getGetServiceDetailsByIDServiceIDRoute = createRoute({
  method: 'get',
  path: '/getServiceDetailsByID/{serviceID}',
  tags: ['Service Information'],
  summary:
    'getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.',
  operationId: 'getServiceDetailsByID',
  request: {
    params: z.object({
      serviceID: z
        .string()
        .openapi({
          param: {
            description:
              'The Service ID for the Train Service you wish to look up in the URL Safe format. For example "qsec4O8LW7k8ITcOt_ir4Q--".',
            explode: false,
            in: 'path',
            name: 'serviceID',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            description:
              'The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.',
            explode: true,
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '**OK**: The API Request was successful and returned data.' },
    400: {
      description:
        'Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.',
    },
    401: {
      description:
        '**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.',
    },
    429: {
      description:
        '**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.',
    },
    500: {
      description:
        '**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.',
    },
    503: {
      description:
        '**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.',
    },
  },
})
