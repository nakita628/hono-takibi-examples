import { createRoute, z } from '@hono/zod-openapi'

const GoogleMapsPlayablelocationsV3ImpressionSchema = z
  .object({
    gameObjectType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For example, 1=monster location, 2=powerup location.',
      }),
    impressionType: z
      .enum(['IMPRESSION_TYPE_UNSPECIFIED', 'PRESENTED', 'INTERACTED'])
      .exactOptional()
      .openapi({ description: 'Required. The type of impression event.' }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the playable location.' }),
  })
  .openapi({ description: 'Encapsulates impression event details.', required: [] })
  .openapi('GoogleMapsPlayablelocationsV3Impression')

const GoogleMapsUnityClientInfoSchema = z
  .object({
    apiClient: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API client name and version. For example, the SDK calling the API. The exact format is up to the client.',
      }),
    applicationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Application ID, such as the package name on Android and the bundle identifier on iOS platforms.',
      }),
    applicationVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Application version number, such as "1.2.3". The exact format is application-dependent.',
      }),
    deviceModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Device model as reported by the device. The exact format is platform-dependent.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    operatingSystem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.',
      }),
    operatingSystemBuild: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS.',
      }),
    platform: z
      .enum([
        'PLATFORM_UNSPECIFIED',
        'EDITOR',
        'MAC_OS',
        'WINDOWS',
        'LINUX',
        'ANDROID',
        'IOS',
        'WEB_GL',
      ])
      .exactOptional()
      .openapi({ description: 'Platform where the application is running.' }),
  })
  .openapi({ description: 'Client information.', required: [] })
  .openapi('GoogleMapsUnityClientInfo')

const GoogleMapsPlayablelocationsV3LogImpressionsRequestSchema = z
  .object({
    clientInfo: GoogleMapsUnityClientInfoSchema.exactOptional().openapi({
      description:
        'Required. Information about the client device. For example, device model and operating system.',
    }),
    impressions: z
      .array(GoogleMapsPlayablelocationsV3ImpressionSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Impression event details. The maximum number of impression reports that you can log at once is 50.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed.',
      }),
  })
  .openapi({ description: 'A request for logging impressions.', required: [] })
  .openapi('GoogleMapsPlayablelocationsV3LogImpressionsRequest')

const GoogleMapsPlayablelocationsV3LogImpressionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'A response for the LogImpressions method. This method returns no data upon success.',
  })
  .openapi('GoogleMapsPlayablelocationsV3LogImpressionsResponse')

const GoogleMapsPlayablelocationsV3PlayerReportSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the playable location.' }),
    reasonDetails: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A free-form description detailing why the playable location is considered bad.',
      }),
    reasons: z
      .array(
        z.enum([
          'BAD_LOCATION_REASON_UNSPECIFIED',
          'OTHER',
          'NOT_PEDESTRIAN_ACCESSIBLE',
          'NOT_OPEN_TO_PUBLIC',
          'PERMANENTLY_CLOSED',
          'TEMPORARILY_INACCESSIBLE',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Required. One or more reasons why this playable location is considered bad.',
      }),
  })
  .openapi({
    description:
      'A report submitted by a player about a playable location that is considered inappropriate for use in the game.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3PlayerReport')

const GoogleMapsPlayablelocationsV3LogPlayerReportsRequestSchema = z
  .object({
    clientInfo: GoogleMapsUnityClientInfoSchema.exactOptional().openapi({
      description:
        'Required. Information about the client device (for example, device model and operating system).',
    }),
    playerReports: z
      .array(GoogleMapsPlayablelocationsV3PlayerReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Player reports. The maximum number of player reports that you can log at once is 50.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed.',
      }),
  })
  .openapi({
    description: "A request for logging your player's bad location reports.",
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3LogPlayerReportsRequest')

const GoogleMapsPlayablelocationsV3LogPlayerReportsResponseSchema = z
  .object({})
  .openapi({
    description:
      'A response for the LogPlayerReports method. This method returns no data upon success.',
  })
  .openapi('GoogleMapsPlayablelocationsV3LogPlayerReportsResponse')

const GoogleMapsPlayablelocationsV3SampleAreaFilterSchema = z
  .object({
    s2CellId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python)',
      }),
  })
  .openapi({ description: 'Specifies the area to search for playable locations.', required: [] })
  .openapi('GoogleMapsPlayablelocationsV3SampleAreaFilter')

const GoogleMapsPlayablelocationsV3SampleSpacingOptionsSchema = z
  .object({
    minSpacingMeters: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10 meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If spacing=250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3. Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From->To. * X->X: 400m * Y->X, Y->Y: unspecified. * Z->X, Z->Y, Z->Z: 200m.',
      }),
    pointType: z
      .enum(['POINT_TYPE_UNSPECIFIED', 'CENTER_POINT', 'SNAPPED_POINT'])
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is `CENTER_POINT`. If a snapped point is not available for a playable location, its center-point is used instead. Set this to the point type used in your game.',
      }),
  })
  .openapi({
    description: 'A set of options that specifies the separation between playable locations.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3SampleSpacingOptions')

const GoogleMapsPlayablelocationsV3SampleFilterSchema = z
  .object({
    includedTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want.',
      }),
    maxLocationCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned.',
      }),
    spacing: GoogleMapsPlayablelocationsV3SampleSpacingOptionsSchema.exactOptional().openapi({
      description:
        'A set of options that control the spacing between playable locations. By default the minimum distance between locations is 200m.',
    }),
  })
  .openapi({
    description: 'Specifies the filters to use when searching for playable locations.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3SampleFilter')

const GoogleMapsPlayablelocationsV3SampleCriterionSchema = z
  .object({
    fieldsToReturn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your query will be.',
      }),
    filter: GoogleMapsPlayablelocationsV3SampleFilterSchema.exactOptional().openapi({
      description:
        'Specifies filtering options, and specifies what will be included in the result set.',
    }),
    gameObjectType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example, 1=monster location, 2=powerup location. The response contains a map.',
      }),
  })
  .openapi({
    description: 'Encapsulates a filter criterion for searching for a set of playable locations.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3SampleCriterion')

const GoogleTypeLatLngSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
      }),
  })
  .openapi({
    description:
      'An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.',
    required: [],
  })
  .openapi('GoogleTypeLatLng')

const GoogleMapsPlayablelocationsV3SamplePlayableLocationSchema = z
  .object({
    centerPoint: GoogleTypeLatLngSchema.exactOptional().openapi({
      description:
        'Required. The latitude and longitude associated with the center of the playable location. By default, the set of playable locations returned from SamplePlayableLocations use center-point coordinates.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of this playable location.' }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A [place ID] (https://developers.google.com/places/place-id)' }),
    plusCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'A [plus code] (http://openlocationcode.com)' }),
    snappedPoint: GoogleTypeLatLngSchema.exactOptional().openapi({
      description:
        "The playable location's coordinates, snapped to the sidewalk of the nearest road, if a nearby road exists.",
    }),
    types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information might not be available for all playable locations.',
      }),
  })
  .openapi({
    description: 'A geographical point suitable for placing game objects in location-based games.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3SamplePlayableLocation')

const GoogleMapsPlayablelocationsV3SamplePlayableLocationListSchema = z
  .object({
    locations: z
      .array(GoogleMapsPlayablelocationsV3SamplePlayableLocationSchema)
      .exactOptional()
      .openapi({ description: 'A list of playable locations for this game object type.' }),
  })
  .openapi({
    description: 'A list of PlayableLocation objects that satisfies a single Criterion.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3SamplePlayableLocationList')

const GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequestSchema = z
  .object({
    areaFilter: GoogleMapsPlayablelocationsV3SampleAreaFilterSchema.exactOptional().openapi({
      description: 'Required. Specifies the area to search within for playable locations.',
    }),
    criteria: z
      .array(GoogleMapsPlayablelocationsV3SampleCriterionSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations.',
      }),
  })
  .openapi({
    description:
      ' Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more "criteria" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world.',
    required: [],
  })
  .openapi('GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest')

const GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponseSchema = z
  .object({
    locationsPerGameObjectType: z
      .record(z.string(), GoogleMapsPlayablelocationsV3SamplePlayableLocationListSchema)
      .exactOptional()
      .openapi({
        description:
          'Each PlayableLocation object corresponds to a game_object_type specified in the request.',
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently).',
      }),
  })
  .openapi({ description: ' Response for the SamplePlayableLocations method.', required: [] })
  .openapi('GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse')

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

export const postV3LogImpressionsRoute = createRoute({
  method: 'post',
  path: '/v3:logImpressions',
  tags: ['v3'],
  description:
    'Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.',
  operationId: 'playablelocations.logImpressions',
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
    body: {
      content: {
        'application/json': { schema: GoogleMapsPlayablelocationsV3LogImpressionsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleMapsPlayablelocationsV3LogImpressionsResponseSchema },
      },
    },
  },
})

export const postV3LogPlayerReportsRoute = createRoute({
  method: 'post',
  path: '/v3:logPlayerReports',
  tags: ['v3'],
  description:
    'Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.',
  operationId: 'playablelocations.logPlayerReports',
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
    body: {
      content: {
        'application/json': { schema: GoogleMapsPlayablelocationsV3LogPlayerReportsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleMapsPlayablelocationsV3LogPlayerReportsResponseSchema },
      },
    },
  },
})

export const postV3SamplePlayableLocationsRoute = createRoute({
  method: 'post',
  path: '/v3:samplePlayableLocations',
  tags: ['v3'],
  description:
    'Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.',
  operationId: 'playablelocations.samplePlayableLocations',
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
    body: {
      content: {
        'application/json': {
          schema: GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponseSchema,
        },
      },
    },
  },
})
