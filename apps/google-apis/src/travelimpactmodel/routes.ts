import { createRoute, z } from '@hono/zod-openapi'

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const FlightSchema = z
  .object({
    departureDate: DateSchema.exactOptional().openapi({
      description:
        'Required. Date of the flight in the time zone of the origin airport. Must be a date in the present or future.',
    }),
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. IATA airport code for flight destination, e.g. "JFK".' }),
    flightNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Flight number, e.g. 324.' }),
    operatingCarrierCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. IATA carrier code, e.g. "AA".' }),
    origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. IATA airport code for flight origin, e.g. "LHR".' }),
  })
  .openapi({
    description:
      'All details related to a single request item for a direct flight emission estimates.',
    required: [],
  })
  .openapi('Flight')

const ComputeFlightEmissionsRequestSchema = z
  .object({
    flights: z
      .array(FlightSchema)
      .exactOptional()
      .openapi({ description: 'Required. Direct flights to return emission estimates for.' }),
  })
  .openapi({
    description: 'Input definition for the ComputeFlightEmissions request.',
    required: [],
  })
  .openapi('ComputeFlightEmissionsRequest')

const EmissionsGramsPerPaxSchema = z
  .object({
    business: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not.',
      }),
    economy: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not.',
      }),
    first: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not.',
      }),
    premiumEconomy: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not.',
      }),
  })
  .openapi({ description: 'Grouped emissions per seating class results.', required: [] })
  .openapi('EmissionsGramsPerPax')

const FlightWithEmissionsSchema = z
  .object({
    emissionsGramsPerPax: EmissionsGramsPerPaxSchema.exactOptional().openapi({
      description:
        'Optional. Per-passenger emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions.',
    }),
    flight: FlightSchema.exactOptional().openapi({
      description:
        'Required. Matches the flight identifiers in the request. Note: all IATA codes are capitalized.',
    }),
  })
  .openapi({ description: 'Direct flight with emission estimates.', required: [] })
  .openapi('FlightWithEmissions')

const ModelVersionSchema = z
  .object({
    dated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly.',
      }),
    major: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible',
      }),
    minor: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation.',
      }),
    patch: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation.',
      }),
  })
  .openapi({
    description:
      'Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.',
    required: [],
  })
  .openapi('ModelVersion')

const ComputeFlightEmissionsResponseSchema = z
  .object({
    flightEmissions: z
      .array(FlightWithEmissionsSchema)
      .exactOptional()
      .openapi({ description: 'List of flight legs with emission estimates.' }),
    modelVersion: ModelVersionSchema.exactOptional().openapi({
      description:
        'The model version under which emission estimates for all flights in this response were computed.',
    }),
  })
  .openapi({
    description: 'Output definition for the ComputeFlightEmissions response.',
    required: [],
  })
  .openapi('ComputeFlightEmissionsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

export const postV1FlightsComputeFlightEmissionsRoute = createRoute({
  method: 'post',
  path: '/v1/flights:computeFlightEmissions',
  tags: ['flights'],
  description:
    'Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.',
  operationId: 'travelimpactmodel.flights.computeFlightEmissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ComputeFlightEmissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ComputeFlightEmissionsResponseSchema } },
    },
  },
})
