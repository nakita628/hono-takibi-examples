import { createRoute, z } from '@hono/zod-openapi'

const ApikeySecurityScheme = { in: 'header', name: 'apikey', type: 'apiKey' }

export const getAddressesOutputFormatRoute = createRoute({
  method: 'get',
  path: '/addresses.{outputFormat}',
  tags: ['sites', 'intersections'],
  summary: 'Geocode an address',
  description:
    'Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      addressString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Civic or intersection address as a single string. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#addressString target="_blank">addressString</a>',
            example: '525 Superior Street, Victoria, BC',
            in: 'query',
            name: 'addressString',
            required: false,
            schema: { type: 'string' },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      interpolation: z
        .enum(['adaptive', 'linear', 'none'])
        .default('adaptive')
        .exactOptional()
        .openapi({
          param: {
            description:
              'accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>',
            in: 'query',
            name: 'interpolation',
            required: false,
            schema: { default: 'adaptive', enum: ['adaptive', 'linear', 'none'], type: 'string' },
          },
        }),
      echo: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include unmatched address details such as site name in results.',
            in: 'query',
            name: 'echo',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      autoComplete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.',
            in: 'query',
            name: 'autoComplete',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      minScore: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#minScore target="_blank">minScore</a>',
            in: 'query',
            name: 'minScore',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      matchPrecision: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecision target="_blank">matchPrecision</a>',
            in: 'query',
            name: 'matchPrecision',
            required: false,
            schema: { type: 'string' },
          },
        }),
      matchPrecisionNot: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>',
            in: 'query',
            name: 'matchPrecisionNot',
            required: false,
            schema: { type: 'string' },
          },
        }),
      siteName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#siteName target="_blank">siteName</a>',
            in: 'query',
            name: 'siteName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      unitDesignator: z
        .enum([
          'APT',
          'BLDG',
          'BSMT',
          'FLR',
          'LOBBY',
          'LWR',
          'PAD',
          'PH',
          'REAR',
          'RM',
          'SIDE',
          'SITE',
          'SUITE',
          'TH',
          'UNIT',
          'UPPR',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>',
            in: 'query',
            name: 'unitDesignator',
            required: false,
            schema: {
              enum: [
                'APT',
                'BLDG',
                'BSMT',
                'FLR',
                'LOBBY',
                'LWR',
                'PAD',
                'PH',
                'REAR',
                'RM',
                'SIDE',
                'SITE',
                'SUITE',
                'TH',
                'UNIT',
                'UPPR',
              ],
              type: 'string',
            },
          },
        }),
      unitNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of the unit, suite, or apartment within a house or building.',
            in: 'query',
            name: 'unitNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      unitNumberSuffix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A letter that follows the unit number as in Unit 1A or Suite 302B.',
            in: 'query',
            name: 'unitNumberSuffix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      civicNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumber target="_blank">civicNumber</a>',
            in: 'query',
            name: 'civicNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      civicNumberSuffix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>',
            in: 'query',
            name: 'civicNumberSuffix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      streetName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetName target="_blank">streetName</a>',
            in: 'query',
            name: 'streetName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      streetType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetType target="_blank">streetType</a>',
            in: 'query',
            name: 'streetType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      streetDirection: z
        .enum(['N', 'S', 'E', 'W', 'O', 'NE', 'NO', 'NW', 'SE', 'SO', 'SW'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>',
            in: 'query',
            name: 'streetDirection',
            required: false,
            schema: {
              enum: ['N', 'S', 'E', 'W', 'O', 'NE', 'NO', 'NW', 'SE', 'SO', 'SW'],
              type: 'string',
            },
          },
        }),
      streetQualifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: the Bridge in Johnson St Bridge. The qualifier of a street name. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetQualifier target="_blank">streetQualifier</a>',
            in: 'query',
            name: 'streetQualifier',
            required: false,
            schema: { type: 'string' },
          },
        }),
      localityName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#localityName target="_blank">localityName</a>',
            in: 'query',
            name: 'localityName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      provinceCode: z
        .string()
        .default('BC')
        .exactOptional()
        .openapi({
          param: {
            description: 'The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.',
            in: 'query',
            name: 'provinceCode',
            required: false,
            schema: { default: 'BC', type: 'string' },
          },
        }),
      localities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo',
            in: 'query',
            name: 'localities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notLocalities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of localities to exclude from the search.',
            in: 'query',
            name: 'notLocalities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bbox: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>',
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { type: 'string' },
          },
        }),
      centre: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#centre target='_blank'>centre</a>",
            in: 'query',
            name: 'centre',
            required: false,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'number' },
          },
        }),
      extrapolate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#extrapolate target="_blank">extrapolate</a>',
            in: 'query',
            name: 'extrapolate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      parcelPoint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#parcelPoint target="_blank">parcelPoint</a>',
            in: 'query',
            name: 'parcelPoint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of matching sites or intersections and their physical locations. See <a href=\'https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#resource-representations-in-http-responses\' target="_blank">addresses response</a>',
    },
  },
})

export const getIntersectionsNearOutputFormatRoute = createRoute({
  method: 'get',
  path: '/intersections/near.{outputFormat}',
  tags: ['intersections'],
  summary: 'Find intersections near to a geographic point',
  description: 'Represents intersections near a given point',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description:
              "The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.",
            example: '-122.377,50.121',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: true,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      minDegree: z
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
              'The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.',
            in: 'query',
            name: 'minDegree',
            required: false,
            schema: { default: 2, type: 'integer' },
          },
        }),
      maxDegree: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.',
            in: 'query',
            name: 'maxDegree',
            required: false,
            schema: { default: 100, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of selected intersections near a given point. Each intersection is in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>',
    },
  },
})

export const getIntersectionsNearestOutputFormatRoute = createRoute({
  method: 'get',
  path: '/intersections/nearest.{outputFormat}',
  tags: ['intersections'],
  summary: 'Find nearest intersection to a geographic point',
  description: 'Represents the closest intersection to a given point',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description:
              "Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.",
            example: '-122.377,50.121',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      minDegree: z
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
              'The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.',
            in: 'query',
            name: 'minDegree',
            required: false,
            schema: { default: 2, type: 'integer' },
          },
        }),
      maxDegree: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.',
            in: 'query',
            name: 'maxDegree',
            required: false,
            schema: { default: 100, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The nearest intersection in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>',
    },
  },
})

export const getIntersectionsWithinOutputFormatRoute = createRoute({
  method: 'get',
  path: '/intersections/within.{outputFormat}',
  tags: ['intersections'],
  summary: 'Find intersections in a geographic area',
  description: 'Represents all intersections within a given area',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      bbox: z
        .string()
        .openapi({
          param: {
            description:
              'A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>',
            example: '-119.51,49.48,-119.53,49.50',
            in: 'query',
            name: 'bbox',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 200, type: 'integer' },
          },
        }),
      minDegree: z
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
              'The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.',
            in: 'query',
            name: 'minDegree',
            required: false,
            schema: { default: 2, type: 'integer' },
          },
        }),
      maxDegree: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.',
            in: 'query',
            name: 'maxDegree',
            required: false,
            schema: { default: 100, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of selected intersections within the given area. Each intersection is in Each intersection is in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>',
    },
  },
})

export const getIntersectionsIntersectionIDOutputFormatRoute = createRoute({
  method: 'get',
  path: '/intersections/{intersectionID}.{outputFormat}',
  tags: ['intersections'],
  summary: 'Get an intersection by its unique ID',
  description: 'Represents a individual intersection',
  request: {
    params: z.object({
      intersectionID: z
        .string()
        .openapi({
          param: {
            description: 'A unique intersection identifier',
            in: 'path',
            name: 'intersectionID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The Intersection with the requested intersectionID in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>',
    },
  },
})

export const getOccupantsAddressesOutputFormatRoute = createRoute({
  method: 'get',
  path: '/occupants/addresses.{outputFormat}',
  tags: ['occupants'],
  summary: 'Geocode an address and identify site occupants',
  description:
    'Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      addressString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Occupant name OR Occupant name ** address',
            example: 'Sir James Douglas Elementary',
            in: 'query',
            name: 'addressString',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: schools;courts;employment<br>A list of tags separated by semicolons.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      interpolation: z
        .enum(['adaptive', 'linear', 'none'])
        .default('adaptive')
        .exactOptional()
        .openapi({
          param: {
            description:
              'accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>',
            in: 'query',
            name: 'interpolation',
            required: false,
            schema: { default: 'adaptive', enum: ['adaptive', 'linear', 'none'], type: 'string' },
          },
        }),
      echo: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include unmatched address details such as site name in results.',
            in: 'query',
            name: 'echo',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      autoComplete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.',
            in: 'query',
            name: 'autoComplete',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      minScore: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#minScore target="_blank">minScore</a>',
            in: 'query',
            name: 'minScore',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      matchPrecision: z
        .string()
        .default('OCCUPANT')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecision target="_blank">matchPrecision</a>',
            in: 'query',
            name: 'matchPrecision',
            required: false,
            schema: { default: 'OCCUPANT', type: 'string' },
          },
        }),
      matchPrecisionNot: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>',
            in: 'query',
            name: 'matchPrecisionNot',
            required: false,
            schema: { type: 'string' },
          },
        }),
      siteName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#siteName target="_blank">siteName</a>',
            in: 'query',
            name: 'siteName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      unitDesignator: z
        .enum([
          'APT',
          'BLDG',
          'BSMT',
          'FLR',
          'LOBBY',
          'LWR',
          'PAD',
          'PH',
          'REAR',
          'RM',
          'SIDE',
          'SITE',
          'SUITE',
          'TH',
          'UNIT',
          'UPPR',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>',
            in: 'query',
            name: 'unitDesignator',
            required: false,
            schema: {
              enum: [
                'APT',
                'BLDG',
                'BSMT',
                'FLR',
                'LOBBY',
                'LWR',
                'PAD',
                'PH',
                'REAR',
                'RM',
                'SIDE',
                'SITE',
                'SUITE',
                'TH',
                'UNIT',
                'UPPR',
              ],
              type: 'string',
            },
          },
        }),
      unitNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of the unit, suite, or apartment within a house or building.',
            in: 'query',
            name: 'unitNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      unitNumberSuffix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A letter that follows the unit number as in Unit 1A or Suite 302B.',
            in: 'query',
            name: 'unitNumberSuffix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      civicNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumber target="_blank">civicNumber</a>',
            in: 'query',
            name: 'civicNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      civicNumberSuffix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>',
            in: 'query',
            name: 'civicNumberSuffix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      streetName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetName target="_blank">streetName</a>',
            in: 'query',
            name: 'streetName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      streetType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetType target="_blank">streetType</a>',
            in: 'query',
            name: 'streetType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      streetDirection: z
        .enum(['N', 'S', 'E', 'W', 'O', 'NE', 'NO', 'NW', 'SE', 'SO', 'SW'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>',
            in: 'query',
            name: 'streetDirection',
            required: false,
            schema: {
              enum: ['N', 'S', 'E', 'W', 'O', 'NE', 'NO', 'NW', 'SE', 'SO', 'SW'],
              type: 'string',
            },
          },
        }),
      streetQualifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The qualifier of a street name (e.g., the Bridge in Johnson St Bridge)',
            in: 'query',
            name: 'streetQualifier',
            required: false,
            schema: { type: 'string' },
          },
        }),
      localityName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>',
            in: 'query',
            name: 'localityName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      provinceCode: z
        .string()
        .default('BC')
        .exactOptional()
        .openapi({
          param: {
            description: 'The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.',
            in: 'query',
            name: 'provinceCode',
            required: false,
            schema: { default: 'BC', type: 'string' },
          },
        }),
      localities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo',
            in: 'query',
            name: 'localities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notLocalities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of localities to exclude from the search.',
            in: 'query',
            name: 'notLocalities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bbox: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>',
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { type: 'string' },
          },
        }),
      centre: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#centre target='_blank'>centre</a>",
            in: 'query',
            name: 'centre',
            required: false,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'number' },
          },
        }),
      extrapolate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#extrapolate target="_blank">extrapolate</a>',
            in: 'query',
            name: 'extrapolate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      parcelPoint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#parcelPoint target="_blank">parcelPoint</a>',
            in: 'query',
            name: 'parcelPoint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of matching occupants, sites, and their physical locations. Response document will contain one <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#about-query-representation" target="_blank">About Query Representation</a> and one <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a> for each matching occupant.',
    },
  },
})

export const getOccupantsNearOutputFormatRoute = createRoute({
  method: 'get',
  path: '/occupants/near.{outputFormat}',
  tags: ['occupants'],
  summary: 'Find occupants of sites near to a geographic point',
  description: 'Represents occupants near a given point in order of closest to farthest',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description:
              "The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.",
            example: '-122.377,50.121',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: schools;courts;employment<br>A list of tags separated by semicolons.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of selected occupants that are near a given point in order of closest to farther. Each occupant is returned as a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>',
    },
  },
})

export const getOccupantsNearestOutputFormatRoute = createRoute({
  method: 'get',
  path: '/occupants/nearest.{outputFormat}',
  tags: ['occupants'],
  summary: 'Find occupants of the site nearest to a geographic point',
  description: 'Represents the closest occupant to a given point',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description:
              "The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.",
            example: '-122.377,50.121',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: schools;courts;employment<br>A list of tags separated by semicolons.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The nearest occupant in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>',
    },
  },
})

export const getOccupantsWithinOutputFormatRoute = createRoute({
  method: 'get',
  path: '/occupants/within.{outputFormat}',
  tags: ['occupants'],
  summary: 'Find occupants of sites in a geographic area',
  description: 'Represents all occupants within a given area',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      bbox: z
        .string()
        .openapi({
          param: {
            description:
              'A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>',
            example: '-123.14,49.28,-123.13,49.29',
            in: 'query',
            name: 'bbox',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Example: schools;courts;employment<br>A list of tags separated by semicolons.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 200, type: 'integer' },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of selected occupants within the given area. Each occupant is returned in a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>',
    },
  },
})

export const getOccupantsOccupantIDOutputFormatRoute = createRoute({
  method: 'get',
  path: '/occupants/{occupantID}.{outputFormat}',
  tags: ['occupants'],
  summary: 'Get an occupant (of a site) by its unique ID',
  description: 'Represents an individual occupant',
  request: {
    params: z.object({
      occupantID: z
        .string()
        .openapi({
          param: {
            description: 'Occupant identifier',
            in: 'path',
            name: 'occupantID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The occupant with the requested occupantID in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>',
    },
  },
})

export const getParcelsPidsSiteIDOutputFormatRoute = createRoute({
  method: 'get',
  path: '/parcels/pids/{siteID}.{outputFormat}',
  tags: ['parcels'],
  summary: 'Get a comma-separated string of all pids for a given site',
  description: 'Represents all parcel identifiers associated with an individual site',
  request: {
    params: z.object({
      siteID: z
        .string()
        .openapi({
          param: {
            description: 'A unique, but not immutable, site identifier.',
            in: 'path',
            name: 'siteID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A comma-separated string containing all the parcel identifiers associated with the requested siteID',
    },
  },
})

export const getSitesNearOutputFormatRoute = createRoute({
  method: 'get',
  path: '/sites/near.{outputFormat}',
  tags: ['sites'],
  summary: 'Find sites near to a geographic point',
  description: 'Represents sites near a given point in the order of closest to farthest',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description:
              "The point (x,y) from which the nearby sites will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.",
            example: '-122.377,50.121',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      excludeUnits: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes sites that are units of a parent site',
            in: 'query',
            name: 'excludeUnits',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      onlyCivic: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes sites without a civic address',
            in: 'query',
            name: 'onlyCivic',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of selected sites that are near a given point in order of closest to farther. Each site in the response document is structured as a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>',
    },
  },
})

export const getSitesNearestOutputFormatRoute = createRoute({
  method: 'get',
  path: '/sites/nearest.{outputFormat}',
  tags: ['sites'],
  summary: 'Find the site nearest to a geographic point',
  description: 'Represents the site nearest a given point',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description:
              'Centre point of search. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#point target="_blank">point</a>',
            example: '-122.377,50.121',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxDistance: z
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
              'The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.',
            in: 'query',
            name: 'maxDistance',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      excludeUnits: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes sites that are units of a parent site',
            in: 'query',
            name: 'excludeUnits',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      onlyCivic: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes sites without a civic address',
            in: 'query',
            name: 'onlyCivic',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The nearest site in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>',
    },
  },
})

export const getSitesWithinOutputFormatRoute = createRoute({
  method: 'get',
  path: '/sites/within.{outputFormat}',
  tags: ['sites'],
  summary: 'Find sites in a geographic area',
  description: 'Represents sites within a given area',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      bbox: z
        .string()
        .openapi({
          param: {
            description:
              'A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>',
            example: '-119.51,49.48,-119.53,49.50',
            in: 'query',
            name: 'bbox',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to return.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      excludeUnits: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes sites that are units of a parent site',
            in: 'query',
            name: 'excludeUnits',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      onlyCivic: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes sites without a civic address',
            in: 'query',
            name: 'onlyCivic',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list of selected sites within a given area. Each site in the response document is structured as a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>',
    },
  },
})

export const getSitesSiteIDOutputFormatRoute = createRoute({
  method: 'get',
  path: '/sites/{siteID}.{outputFormat}',
  tags: ['sites'],
  summary: 'Get a site by its unique ID',
  description: 'Represents an individual site',
  request: {
    params: z.object({
      siteID: z
        .string()
        .openapi({
          param: {
            description: 'A unique, but not immutable, site identifier.',
            in: 'path',
            name: 'siteID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The site with the requested siteID in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>',
    },
  },
})

export const getSitesSiteIDSubsitesOutputFormatRoute = createRoute({
  method: 'get',
  path: '/sites/{siteID}/subsites.{outputFormat}',
  tags: ['sites'],
  summary: 'Represents all subsites of a given site',
  description: 'Represents all subsites of a given site',
  request: {
    params: z.object({
      siteID: z
        .string()
        .openapi({
          param: {
            description: 'A unique, but not immutable, site identifier.',
            in: 'path',
            name: 'siteID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputFormat: z
        .enum(['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'])
        .default('json')
        .openapi({
          param: {
            description:
              'Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. \n\nNote: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'geojson', 'xhtml', 'kml', 'gml', 'csv', 'shpz'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      locationDescriptor: z
        .enum([
          'any',
          'accessPoint',
          'frontDoorPoint',
          'parcelPoint',
          'rooftopPoint',
          'routingPoint',
        ])
        .default('any')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>',
            in: 'query',
            name: 'locationDescriptor',
            required: false,
            schema: {
              default: 'any',
              enum: [
                'any',
                'accessPoint',
                'frontDoorPoint',
                'parcelPoint',
                'rooftopPoint',
                'routingPoint',
              ],
              type: 'string',
            },
          },
        }),
      brief: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.',
            in: 'query',
            name: 'brief',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      setBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'setBack',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns all subsites of a given site in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>',
    },
  },
})
