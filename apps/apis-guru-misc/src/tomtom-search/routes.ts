import { createRoute, z } from '@hono/zod-openapi'

const _200Response = { description: 'OK: the search successfully returned zero or more results.' }

const _400Response = {
  description: 'Bad Request: one or more parameters were incorrectly specified.',
}

const _403Response = {
  description:
    'Forbidden: possible causes include:\n  - Service requires SSL\n  - Not authorized\n  - Rate or volume limit exceeded\n  - Unknown referer',
}

const _405Response = {
  description:
    'Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.',
}

const _404596Response = {
  description: 'Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.',
}

const _5xxResponse = {
  description: 'An error occurred while processing the request. Please try again later.',
}

const BtmRightParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.',
      example: '37.4,-122.55',
      in: 'query',
      name: 'btmRight',
      schema: { type: 'string' },
      required: false,
    },
  })

const CountryCodeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: '2 or 3 letter country code (e.g.: FR, ES).',
      example: 'NL',
      in: 'query',
      name: 'countryCode',
      required: true,
      schema: { type: 'string' },
    },
  })

const CountrySecondarySubdivisionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The county for the structured address.',
      in: 'query',
      name: 'countrySecondarySubdivision',
      schema: { type: 'string' },
      required: false,
    },
  })

const CountrySetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma separated string of country codes. This will limit the search to the specified countries.',
      example: 'FR',
      in: 'query',
      name: 'countrySet',
      schema: { type: 'string' },
      required: false,
    },
  })

const CountrySubdivisionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The state or province for the structured address.',
      in: 'query',
      name: 'countrySubdivision',
      schema: { type: 'string' },
      required: false,
    },
  })

const CountryTertiarySubdivisionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The named area for the structured address.',
      in: 'query',
      name: 'countryTertiarySubdivision',
      schema: { type: 'string' },
      required: false,
    },
  })

const CrossStreetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The cross street name for the structured address.',
      in: 'query',
      name: 'crossStreet',
      schema: { type: 'string' },
      required: false,
    },
  })

const ExtParamsSchema = z
  .enum(['json', 'jsonp', 'js', 'xml'])
  .openapi({
    param: {
      description: 'Expected response format.',
      example: 'xml',
      in: 'path',
      name: 'ext',
      required: true,
      schema: { enum: ['json', 'jsonp', 'js', 'xml'], type: 'string' },
    },
  })

const ExtendedPostalCodesForParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indexes for which extended postal codes should be included in the results. Available indexes are:\n  - <b>Addr</b> = Address ranges\n  - <b>Geo</b> = Geographies\n  - <b>PAD</b> = Point Addresses\n  - <b>POI</b> = Points of Interest\n  - <b>Str</b> = Streets\n  - <b>XStr</b> = Cross Streets (intersections)',
      in: 'query',
      name: 'extendedPostalCodesFor',
      schema: { type: 'string' },
      required: false,
    },
  })

const IdxSetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:\n  - <b>Addr</b> = Address range interpolation (when there is no PAD)\n  - <b>Geo</b> = Geographies\n  - <b>PAD</b> = Point Addresses\n  - <b>POI</b> = Points of interest\n  - <b>Str</b> = Streets\n  - <b>Xstr</b> = Cross Streets (intersections)',
      example: 'POI',
      in: 'query',
      name: 'idxSet',
      schema: { type: 'string' },
      required: false,
    },
  })

const LanguageParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.',
      in: 'query',
      name: 'language',
      schema: { type: 'string' },
      required: false,
    },
  })

const LatParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Latitude where results should be biased.\nNOTE: supplying a lat/lon without a radius will return search results biased to that point.',
      example: 37.337,
      in: 'query',
      name: 'lat',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'Maximum number of search results that will be returned.',
      in: 'query',
      name: 'limit',
      schema: { default: 10, maximum: 100, type: 'integer' },
      required: false,
    },
  })

const LonParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Longitude where results should be biased\nNOTE: supplying a lat/lon without a radius will return search results biased to that point.',
      example: -121.89,
      in: 'query',
      name: 'lon',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const MaxFuzzyLevelParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(4),
  )
  .default(2)
  .exactOptional()
  .openapi({
    param: {
      description: 'Maximum fuzziness level to be used.',
      in: 'query',
      name: 'maxFuzzyLevel',
      schema: { default: 2, maximum: 4, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const MinFuzzyLevelParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(4),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description: 'Minimum fuzziness level to be used.',
      in: 'query',
      name: 'minFuzzyLevel',
      schema: { default: 1, maximum: 4, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const MunicipalityParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The municipality (city/town) for the structured address.',
      example: 'Amsterdam',
      in: 'query',
      name: 'municipality',
      schema: { type: 'string' },
      required: false,
    },
  })

const MunicipalitySubdivisionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The municipality subdivision (sub/super city) for the structured address.',
      in: 'query',
      name: 'municipalitySubdivision',
      schema: { type: 'string' },
      required: false,
    },
  })

const OfsParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(1900),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Starting offset of the returned results within the full result set.',
      in: 'query',
      name: 'ofs',
      schema: { default: 0, maximum: 1900, type: 'integer' },
      required: false,
    },
  })

const PositionParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'This is specified as a comma separated string composed of lat., lon.',
      example: '37.8328,-122.27669',
      in: 'path',
      name: 'position',
      required: true,
      schema: { type: 'string' },
    },
  })

const PostalCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The zip code or postal code for the structured address.',
      in: 'query',
      name: 'postalCode',
      schema: { type: 'string' },
      required: false,
    },
  })

const RadiusParamsSchema = z
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
        'If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.',
      in: 'query',
      name: 'radius',
      schema: { type: 'integer' },
      required: false,
    },
  })

const RoutingTimeoutParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(4000)
  .exactOptional()
  .openapi({
    param: {
      description: 'Only return results that arrive from routing engine within this time limit.',
      in: 'query',
      name: 'routingTimeout',
      schema: { default: 4000, type: 'integer' },
      required: false,
    },
  })

const StoreResultParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      deprecated: true,
      description:
        'If the "storeResult" flag is set, the query will be interpreted as a stored geocode and will be billed according to the terms of use.',
      in: 'query',
      name: 'storeResult',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const StreetNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The street name for the structured address.',
      in: 'query',
      name: 'streetName',
      schema: { type: 'string' },
      required: false,
    },
  })

const StreetNumberParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The street number for the structured address.',
      in: 'query',
      name: 'streetNumber',
      schema: { type: 'string' },
      required: false,
    },
  })

const TopLeftParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.',
      example: '37.553,-122.453',
      in: 'query',
      name: 'topLeft',
      schema: { type: 'string' },
      required: false,
    },
  })

const TypeaheadParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.',
      in: 'query',
      name: 'typeahead',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const VersionNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.literal(2),
  )
  .openapi({
    param: {
      description: 'Service version number. The current value is 2.',
      in: 'path',
      name: 'versionNumber',
      required: true,
      schema: { enum: [2], type: 'integer' },
    },
  })

const ViewParamsSchema = z
  .enum(['Unified', 'IN', 'PK', 'IL', 'MA'])
  .default('Unified')
  .exactOptional()
  .openapi({
    param: {
      description: 'Geopolitical View.',
      in: 'query',
      name: 'view',
      required: false,
      schema: { default: 'Unified', enum: ['Unified', 'IN', 'PK', 'IL', 'MA'], type: 'string' },
    },
  })

const ApiKeySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getSearchVersionNumberAdditionalDataExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/additionalData.{ext}',
  tags: ['Additional Data'],
  summary: 'Additional Data',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      ext: z
        .literal('json')
        .openapi({
          param: {
            description: 'Expected response format.',
            in: 'path',
            name: 'ext',
            required: true,
            schema: { enum: ['json'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      geometries: z
        .string()
        .openapi({
          param: {
            description:
              'Comma separated list of geometry UUIDs, previously retrieved from an Search API request.',
            example: '00004631-3400-3c00-0000-0000673c4d2e,00004631-3400-3c00-0000-0000673c42fe',
            in: 'query',
            name: 'geometries',
            required: true,
            schema: { type: 'string' },
          },
        }),
      geometriesZoom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(0),
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(5),
            z.literal(6),
            z.literal(7),
            z.literal(8),
            z.literal(9),
            z.literal(10),
            z.literal(11),
            z.literal(12),
            z.literal(13),
            z.literal(14),
            z.literal(15),
            z.literal(16),
            z.literal(17),
            z.literal(18),
            z.literal(19),
            z.literal(20),
            z.literal(21),
            z.literal(22),
          ]),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the precision of the geometries.',
            in: 'query',
            name: 'geometriesZoom',
            schema: {
              enum: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ],
              type: 'integer',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK: additional data were retrieved and the body of the response contains requested data.',
    },
    400: {
      description:
        'Bad request: one or more parameters(i.e. geometries, ext) were incorrectly specified.',
    },
    403: {
      description:
        'Permission, capacity, or authentication issues:\n  - Forbidden\n  - Not authorized\n  - Account inactive\n  - Account over queries per second limit\n  - Account over rate limit\n  - Rate limit exceeded',
    },
    404: {
      description:
        'Not Found: the requested resource could not be found, but it may be available again in the future.',
    },
    405: { description: 'Method Not Allowed: the client used a HTTP method other than GET.' },
    408: { description: 'Request timeout.' },
    414: { description: 'Requested uri is too long.' },
    500: { description: 'An error occurred while processing the request. Please try again later.' },
    502: { description: 'Internal network connectivity issue.' },
    503: { description: 'Service currently unavailable.' },
    504: {
      description:
        'Internal network connectivity issue or a request that has taken too long to complete.',
    },
    596: { description: 'Service not found.' },
  },
})

export const getSearchVersionNumberCSCategoryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/cS/{category}.{ext}',
  tags: ['Search'],
  summary: 'Low Bandwith Category Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      category: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'category',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      lat: LatParamsSchema,
      lon: LonParamsSchema,
      radius: RadiusParamsSchema,
      topLeft: TopLeftParamsSchema,
      btmRight: BtmRightParamsSchema,
      language: LanguageParamsSchema,
      idxSet: IdxSetParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
  deprecated: true,
})

export const getSearchVersionNumberCategorySearchQueryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/categorySearch/{query}.{ext}',
  tags: ['Search'],
  summary: 'Category Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      lat: LatParamsSchema,
      lon: LonParamsSchema,
      radius: RadiusParamsSchema,
      topLeft: TopLeftParamsSchema,
      btmRight: BtmRightParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberGeocodeQueryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/geocode/{query}.{ext}',
  tags: ['Geocoding'],
  summary: 'Geocode',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: '4 north 2nd street san jose',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      storeResult: StoreResultParamsSchema,
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      lat: LatParamsSchema,
      lon: LonParamsSchema,
      radius: RadiusParamsSchema,
      topLeft: TopLeftParamsSchema,
      btmRight: BtmRightParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberGeometryFilterExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/geometryFilter.{ext}',
  tags: ['Filters'],
  summary: 'Geometry Filter',
  request: {
    params: z.object({ versionNumber: VersionNumberParamsSchema, ext: ExtParamsSchema }),
    query: z.object({
      geometryList: z
        .string()
        .openapi({
          param: {
            description:
              'List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.',
            example:
              '[{"type":"CIRCLE", "position":"40.80558, -73.96548", "radius":100}, {"type":"POLYGON", "vertices":["37.7524152343544, -122.43576049804686", "37.70660472542312, -122.43301391601562", "37.712059855877314, -122.36434936523438", "37.75350561243041, -122.37396240234374"]}]',
            in: 'query',
            name: 'geometryList',
            required: true,
            schema: { type: 'string' },
          },
        }),
      poiList: z
        .string()
        .openapi({
          param: {
            description:
              'List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.',
            example:
              '[{"poi":{"name":"S Restaurant Toms"},"address":{"freeformAddress":"2880 Broadway, New York, NY 10025"},"position":{"lat":40.80558,"lon":-73.96548}},{"poi":{"name":"Yasha Raman Corporation"},"address":{"freeformAddress":"940 Amsterdam Ave, New York, NY 10025"},"position":{"lat":40.80076,"lon":-73.96556}}]',
            in: 'query',
            name: 'poiList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const postSearchVersionNumberGeometryFilterExtRoute = createRoute({
  method: 'post',
  path: '/search/{versionNumber}/geometryFilter.{ext}',
  tags: ['Filters'],
  summary: 'Geometry Filter',
  request: {
    params: z.object({ versionNumber: VersionNumberParamsSchema, ext: ExtParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              geometryList: z
                .array(
                  z
                    .object({
                      position: z.string().exactOptional(),
                      radius: z.int().exactOptional(),
                      type: z.string().exactOptional(),
                      vertices: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              poiList: z
                .array(
                  z
                    .object({
                      address: z
                        .object({ freeformAddress: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      poi: z
                        .object({ name: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      position: z
                        .object({
                          lat: z.float32().exactOptional(),
                          lon: z.float32().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                geometryList: [
                  { position: '40.80558,-73.96548', radius: 100, type: 'CIRCLE' },
                  {
                    type: 'POLYGON',
                    vertices: [
                      '37.7524152343544,-122.43576049804686',
                      '37.70660472542312,-122.43301391601562',
                      '37.712059855877314,-122.36434936523438',
                      '37.75350561243041,-122.37396240234374',
                    ],
                  },
                ],
                poiList: [
                  {
                    address: { freeformAddress: '2880 Broadway, New York, NY 10025' },
                    poi: { name: "S Restaurant Tom's" },
                    position: { lat: 40.80558, lon: -73.96548 },
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberGeometrySearchQueryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/geometrySearch/{query}.{ext}',
  tags: ['Search'],
  summary: 'Geometry Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      geometryList: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.',
            example:
              '[{"type":"POLYGON", "vertices":["37.7524152343544, -122.43576049804686", "37.70660472542312, -122.43301391601562", "37.712059855877314, -122.36434936523438", "37.75350561243041, -122.37396240234374"]}, {"type":"CIRCLE", "position":"37.71205, -121.36434", "radius":6000}, {"type":"CIRCLE", "position":"37.31205, -121.36434", "radius":1000}]',
            in: 'query',
            name: 'geometryList',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: LimitParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      idxSet: IdxSetParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const postSearchVersionNumberGeometrySearchQueryExtRoute = createRoute({
  method: 'post',
  path: '/search/{versionNumber}/geometrySearch/{query}.{ext}',
  tags: ['Search'],
  summary: 'Geometry Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      idxSet: IdxSetParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              geometryList: z
                .array(
                  z
                    .object({
                      position: z.string().exactOptional(),
                      radius: z.int().exactOptional(),
                      type: z.string().exactOptional(),
                      vertices: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                geometryList: [
                  {
                    type: 'POLYGON',
                    vertices: [
                      '37.7524152343544,-122.43576049804686',
                      '37.70660472542312,-122.43301391601562',
                      '37.712059855877314,-122.36434936523438',
                      '37.75350561243041,-122.37396240234374',
                    ],
                  },
                  { position: '37.71205,-121.36434', radius: 6000, type: 'CIRCLE' },
                  { position: '37.31205,-121.36434', radius: 1000, type: 'CIRCLE' },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberNearbySearchExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/nearbySearch/.{ext}',
  tags: ['Search'],
  summary: 'Nearby Search',
  request: {
    params: z.object({ versionNumber: VersionNumberParamsSchema, ext: ExtParamsSchema }),
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description:
              'Latitude where results should be biased.\nNOTE: supplying a lat/lon without a radius will return search results biased to that point.',
            example: 37.337,
            in: 'query',
            name: 'lat',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description:
              'Longitude where results should be biased\nNOTE: supplying a lat/lon without a radius will return search results biased to that point.',
            example: -121.89,
            in: 'query',
            name: 'lon',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(50000),
        )
        .default(10000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If radius and position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.',
            in: 'query',
            name: 'radius',
            schema: { default: 10000, maximum: 50000, type: 'integer' },
            required: false,
          },
        }),
      topLeft: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.',
            example: '37.553,-122.453',
            in: 'query',
            name: 'topLeft',
            schema: { type: 'string' },
            required: false,
          },
        }),
      btmRight: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.',
            example: '37.4,-122.55',
            in: 'query',
            name: 'btmRight',
            schema: { type: 'string' },
            required: false,
          },
        }),
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      minFuzzyLevel: MinFuzzyLevelParamsSchema,
      maxFuzzyLevel: MaxFuzzyLevelParamsSchema,
      idxSet: IdxSetParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberPoiSearchQueryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/poiSearch/{query}.{ext}',
  tags: ['Search'],
  summary: 'Points of Interest Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      lat: LatParamsSchema,
      lon: LonParamsSchema,
      radius: RadiusParamsSchema,
      topLeft: TopLeftParamsSchema,
      btmRight: BtmRightParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}',
  tags: ['Reverse Geocoding'],
  summary: 'Cross Street lookup',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      position: PositionParamsSchema,
      ext: ExtParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of cross-streets to return.',
            in: 'query',
            name: 'limit',
            schema: { default: 1, maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      spatialKeys: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.',
            in: 'query',
            name: 'spatialKeys',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      heading: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)',
            in: 'query',
            name: 'heading',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum distance in meters from the specified position for the reverse geocoder to consider.',
            in: 'query',
            name: 'radius',
            schema: { default: 10000, type: 'integer' },
            required: false,
          },
        }),
      language: LanguageParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberReverseGeocodePositionExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/reverseGeocode/{position}.{ext}',
  tags: ['Reverse Geocoding'],
  summary: 'Reverse Geocode',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      position: PositionParamsSchema,
      ext: ExtParamsSchema,
    }),
    query: z.object({
      spatialKeys: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.',
            in: 'query',
            name: 'spatialKeys',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      returnSpeedLimit: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'To enable return of the posted speed limit (where available).',
            in: 'query',
            name: 'returnSpeedLimit',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      heading: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)',
            in: 'query',
            name: 'heading',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum distance in meters from the specified position for the reverse geocoder to consider.',
            in: 'query',
            name: 'radius',
            schema: { default: 10000, type: 'integer' },
            required: false,
          },
        }),
      number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If a number is sent in along with the request, the response may include the side of the street (Left/Right) and an offset position for that number.',
            in: 'query',
            name: 'number',
            schema: { type: 'string' },
            required: false,
          },
        }),
      returnRoadUse: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enables return of the road use array for reverse geocodes at street level.',
            in: 'query',
            name: 'returnRoadUse',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      roadUse: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts reverse geocodes to a certain type of road use. The road use array for reverse geocodes can be one or more of: ["LimitedAccess", "Arterial", "Terminal", "Ramp", "Rotary", "LocalStreet"].',
            in: 'query',
            name: 'roadUse',
            schema: { type: 'string' },
            required: false,
          },
        }),
      callback: z
        .string()
        .default('cb')
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the jsonp callback method.',
            in: 'query',
            name: 'callback',
            schema: { default: 'cb', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberRoutedFilterPositionHeadingExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}',
  tags: ['Filters'],
  summary: 'Routed Filter',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      position: PositionParamsSchema,
      heading: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description:
              'The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)',
            example: -15.6,
            in: 'path',
            name: 'heading',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      poiList: z
        .string()
        .openapi({
          param: {
            description:
              'List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.',
            example:
              '[{"poi":{"name":"Cleaire Advanced Emission Controls"},"address":{"freeformAddress":"7220 Trade St, San Diego, CA 92121"},"position":{"lat":"37.83274","lon":"-122.27631"}}]',
            in: 'query',
            name: 'poiList',
            required: true,
            schema: { type: 'string' },
          },
        }),
      routingTimeout: RoutingTimeoutParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
  deprecated: true,
})

export const postSearchVersionNumberRoutedFilterPositionHeadingExtRoute = createRoute({
  method: 'post',
  path: '/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}',
  tags: ['Filters'],
  summary: 'Routed Filter',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      position: PositionParamsSchema,
      heading: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description:
              'The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)',
            example: 90,
            in: 'path',
            name: 'heading',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({ routingTimeout: RoutingTimeoutParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              poiList: z
                .array(
                  z
                    .object({
                      address: z
                        .object({ freeformAddress: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      poi: z
                        .object({ name: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      position: z
                        .object({
                          lat: z.float32().exactOptional(),
                          lon: z.float32().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                poiList: [
                  {
                    address: { freeformAddress: '9500 Gilman Dr, San Diego, CA 92037' },
                    poi: { name: 'University of California San Diego' },
                    position: { lat: 32.87349, lon: -117.2378 },
                  },
                  {
                    address: { freeformAddress: '7220 Trade St, San Diego, CA 92121' },
                    poi: { name: 'Cleaire Advanced Emission Controls' },
                    position: { lat: 37.83274, lon: -122.27631 },
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
  deprecated: true,
})

export const getSearchVersionNumberRoutedSearchQueryPositionHeadingExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}',
  tags: ['Search'],
  summary: 'Routed Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'gas',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      position: PositionParamsSchema,
      heading: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description:
              'The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)',
            example: 90,
            in: 'path',
            name: 'heading',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      multiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Multiplies the limit by N to gather more candidate POIs, which will then be sorted by drive distance, returning only the top candidates according to the limit.',
            in: 'query',
            name: 'multiplier',
            schema: { default: 2, type: 'integer' },
            required: false,
          },
        }),
      routingTimeout: RoutingTimeoutParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      idxSet: IdxSetParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
  deprecated: true,
})

export const getSearchVersionNumberSQueryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/s/{query}.{ext}',
  tags: ['Search'],
  summary: 'Low bandwith Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      lat: LatParamsSchema,
      lon: LonParamsSchema,
      radius: RadiusParamsSchema,
      topLeft: TopLeftParamsSchema,
      btmRight: BtmRightParamsSchema,
      language: LanguageParamsSchema,
      idxSet: IdxSetParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
  deprecated: true,
})

export const getSearchVersionNumberSearchQueryExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/search/{query}.{ext}',
  tags: ['Search'],
  summary: 'Fuzzy Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description:
              'Query string. Must be properly URL encoded.\n\nTo perform a reverse geocode, the user can provide latitude and longitude coordinates directly in the query. More information can be found <a href="/search-api/search-api-documentation-search/fuzzy-search#AdditionalInfo">here</a>.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      typeahead: TypeaheadParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      countrySet: CountrySetParamsSchema,
      lat: LatParamsSchema,
      lon: LonParamsSchema,
      radius: RadiusParamsSchema,
      topLeft: TopLeftParamsSchema,
      btmRight: BtmRightParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
      minFuzzyLevel: MinFuzzyLevelParamsSchema,
      maxFuzzyLevel: MaxFuzzyLevelParamsSchema,
      idxSet: IdxSetParamsSchema,
      view: ViewParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const postSearchVersionNumberSearchAlongRouteQueryExtRoute = createRoute({
  method: 'post',
  path: '/search/{versionNumber}/searchAlongRoute/{query}.{ext}',
  tags: ['Search'],
  summary: 'Along Route Search',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query string. Must be properly URL encoded.',
            example: 'pizza',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ext: ExtParamsSchema,
    }),
    query: z.object({
      maxDetourTime: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(3600),
        )
        .openapi({
          param: {
            description: 'Maximum detour time',
            example: 1200,
            in: 'query',
            name: 'maxDetourTime',
            required: true,
            schema: { maximum: 3600, type: 'integer' },
          },
        }),
      limit: LimitParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              route: z
                .object({
                  points: z
                    .array(
                      z
                        .object({
                          lat: z.float32().exactOptional(),
                          lon: z.float32().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                route: {
                  points: [
                    { lat: 37.7524152343544, lon: -122.43576049804686 },
                    { lat: 37.70660472542312, lon: -122.43301391601562 },
                    { lat: 37.712059855877314, lon: -122.36434936523438 },
                    { lat: 37.75350561243041, lon: -122.37396240234374 },
                  ],
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})

export const getSearchVersionNumberStructuredGeocodeExtRoute = createRoute({
  method: 'get',
  path: '/search/{versionNumber}/structuredGeocode.{ext}',
  tags: ['Geocoding'],
  summary: 'Structured Geocode',
  request: {
    params: z.object({ versionNumber: VersionNumberParamsSchema, ext: ExtParamsSchema }),
    query: z.object({
      countryCode: CountryCodeParamsSchema,
      limit: LimitParamsSchema,
      ofs: OfsParamsSchema,
      streetNumber: StreetNumberParamsSchema,
      streetName: StreetNameParamsSchema,
      crossStreet: CrossStreetParamsSchema,
      municipality: MunicipalityParamsSchema,
      municipalitySubdivision: MunicipalitySubdivisionParamsSchema,
      countryTertiarySubdivision: CountryTertiarySubdivisionParamsSchema,
      countrySecondarySubdivision: CountrySecondarySubdivisionParamsSchema,
      countrySubdivision: CountrySubdivisionParamsSchema,
      postalCode: PostalCodeParamsSchema,
      language: LanguageParamsSchema,
      extendedPostalCodesFor: ExtendedPostalCodesForParamsSchema,
    }),
  },
  responses: {
    200: _200Response,
    400: _400Response,
    403: _403Response,
    405: _405Response,
    596: _404596Response,
    '5XX': _5xxResponse,
  },
})
