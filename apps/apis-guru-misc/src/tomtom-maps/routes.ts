import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getMapVersionNumberCopyrightsFormatRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/copyrights.{format}',
  tags: ['Copyrights'],
  summary: 'Copyrights whole world',
  description:
    'The Copyrights API returns copyright information for\nthe Maps API Raster Tile Service in JSON, JSONP, or XML format.\nThis call returns copyright information for the whole world.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      format: z
        .enum(['json', 'jsonp', 'xml'])
        .default('xml')
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['json', 'jsonp', 'xml'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the jsonp callback method. Only used when format is jsonp',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    304: { description: '<b>Not Modified</b>' },
    400: {
      description:
        '<b>Malformed request</b>: malformed syntax. Possible causes include:\n  - requested syntax is not available',
    },
    403: { description: '<b>Forbidden</b>: Supplied API key is not valid for this request' },
    410: { description: '<b>Gone</b>: Request for unsupported format' },
    500: {
      description:
        '<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights\nAPI service',
    },
  },
})

export const getMapVersionNumberCopyrightsCaptionFormatRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/copyrights/caption.{format}',
  tags: ['Copyrights'],
  summary: 'Captions',
  description: 'This API returns copyright captions for the map service.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1.',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      format: z
        .enum(['json', 'jsonp', 'xml'])
        .default('xml')
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['json', 'jsonp', 'xml'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the jsonp callback method. Only used when format is jsonp',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    304: { description: '<b>Not Modified</b>' },
    400: {
      description:
        '<b>Malformed request</b>: malformed syntax. Possible causes include:\n  - requested syntax is not available',
    },
    403: { description: '<b>Forbidden</b>: Supplied API key is not valid for this request' },
    410: { description: '<b>Gone</b>: Request for unsupported format' },
    500: {
      description:
        '<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights\nAPI service',
    },
  },
})

export const getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}',
  tags: ['Copyrights'],
  summary: 'Copyrights bounding box',
  description:
    'The Copyrights API returns copyright information for\nthe Maps API Raster Tile Service in JSON, JSONP, or XML format.\nThis call returns copyright information for a specific bounding box.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      format: z
        .enum(['json', 'jsonp', 'xml'])
        .default('xml')
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['json', 'jsonp', 'xml'], type: 'string' },
          },
        }),
      minLon: z
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
              'Minimum longitude coordinate of bounding box defined in terms of latitude/longitude.',
            example: -179.1506,
            in: 'path',
            name: 'minLon',
            required: true,
            schema: { type: 'number' },
          },
        }),
      minLat: z
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
              'Minimum latitude coordinate of bounding box defined in terms of latitude/longitude.',
            example: 18.9117,
            in: 'path',
            name: 'minLat',
            required: true,
            schema: { type: 'number' },
          },
        }),
      maxLon: z
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
              'Maximum longitude coordinate of bounding box defined in terms of latitude/longitude.',
            example: -66.9406,
            in: 'path',
            name: 'maxLon',
            required: true,
            schema: { type: 'number' },
          },
        }),
      maxLat: z
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
              'Maximum latitude coordinate of bounding box defined in terms of latitude/longitude.',
            example: 71.441,
            in: 'path',
            name: 'maxLat',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the jsonp callback method. Only used when format is jsonp.',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    304: { description: '<b>Not Modified</b>' },
    400: {
      description:
        '<b>Malformed request</b>: malformed syntax. Possible causes include:\n  - requested syntax is not available',
    },
    401: {
      description:
        '<b>Bad request</b>: Parameters out of range. Possible causes include:\n  - minLon n is out of range [-180,180]: the requested minimum longitude coordinate is out of possible range\n  - minLat n is out of range [-90,90]: the requested minimum latitude coordinate is out of possible range\n  - maxLon n is out of range [-180,180]: the requested maximum longitude coordinate is out of possible range\n  - maxLat n is out of range [-90,90]: the requested minimum latitude coordinate is out of possible range',
    },
    403: { description: '<b>Forbidden</b>: Supplied API key is not valid for this request' },
    410: { description: '<b>Gone</b>: Request for unsupported format' },
    500: {
      description:
        '<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights\nAPI service',
    },
  },
})

export const getMapVersionNumberCopyrightsZoomXYFormatRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}',
  tags: ['Copyrights'],
  summary: 'Copyrights tile',
  description:
    'The Copyrights API returns copyright information for\nthe Maps API Raster Tile Service in JSON, JSONP, or XML format.\nThis call returns copyright information for the a specific map tile.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      format: z
        .enum(['json', 'jsonp', 'xml'])
        .default('xml')
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['json', 'jsonp', 'xml'], type: 'string' },
          },
        }),
      zoom: z
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
          ]),
        )
        .openapi({
          param: {
            description:
              'Zoom level of tile to be rendered. Only used for tile-level\ncopyright calls.',
            example: 0,
            in: 'path',
            name: 'zoom',
            required: true,
            schema: {
              enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
              type: 'integer',
            },
          },
        }),
      X: z
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
            description:
              'X coordinate of the tile on zoom grid. Only used for tile-level\ncopyright calls.',
            example: 0,
            in: 'path',
            name: 'X',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      Y: z
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
            description:
              'Y coordinate of the tile on zoom grid. Only used for tile-level\ncopyright calls.',
            example: 0,
            in: 'path',
            name: 'Y',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the jsonp callback method. Only used when format is jsonp.',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    304: { description: '<b>Not Modified</b>' },
    400: {
      description:
        '<b>Malformed request</b>: malformed syntax. Possible causes include:\n  - requested syntax is not available',
    },
    401: {
      description:
        '<b>Bad request</b>: Parameters out of range. Possible causes include:\n  - zoom n is out of range 0 <= zoom < 19: the requested zoom level is out of the possible range\n  - x n is out of range [0,m]: the requested x coordinate is out of the possible range (the value of m will vary depending on zoom level)\n  - y n is out of range [0,m]: the requested y coordinate is out of the possible range (the value of m will vary depending on zoom level)',
    },
    403: { description: '<b>Forbidden</b>: Supplied API key is not valid for this request' },
    410: { description: '<b>Gone</b>: Request for unsupported format' },
    500: {
      description:
        '<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights\nAPI service',
    },
  },
})

export const getMapVersionNumberStaticimageRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/staticimage',
  tags: ['Raster'],
  summary: 'Static Image',
  description:
    'The Static Image service renders a rectangular raster image\nin the style, size, and zoom level specified. The image can be requested\nusing either a center point plus width and height or a bounding box.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1.',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
    }),
    query: z.object({
      layer: z
        .enum(['basic', 'hybrid', 'labels'])
        .default('basic')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em>\nare intended for layering with other data and are only available in <em>png</em> format.',
            example: 'basic',
            in: 'query',
            name: 'layer',
            required: false,
            schema: { default: 'basic', enum: ['basic', 'hybrid', 'labels'], type: 'string' },
          },
        }),
      style: z
        .enum(['main', 'night'])
        .default('main')
        .exactOptional()
        .openapi({
          param: {
            description: 'Map style to be returned',
            example: 'main',
            in: 'query',
            name: 'style',
            required: false,
            schema: { default: 'main', enum: ['main', 'night'], type: 'string' },
          },
        }),
      format: z
        .enum(['png', 'jpg', 'jpeg'])
        .default('png')
        .exactOptional()
        .openapi({
          param: {
            description: 'Image format to be returned',
            example: 'png',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'png', enum: ['png', 'jpg', 'jpeg'], type: 'string' },
          },
        }),
      zoom: z
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
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'Zoom level of map image to be returned.',
            in: 'query',
            name: 'zoom',
            required: false,
            schema: {
              default: 12,
              enum: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ],
              type: 'integer',
            },
          },
        }),
      center: z
        .string()
        .regex(/^-*\d+\.*\d*, *-*\d+\.*\d*$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Coordinates for the center point of the image.\nMust be used with the <strong>width</strong> and\n<strong>height</strong> parameters; cannot be used with <strong>bbox</strong>.\nUses EPSG:3857 projection (functionally equivalent to EPSG:900910).',
            example: '4.899886, 52.379031',
            in: 'query',
            name: 'center',
            required: false,
            schema: { pattern: '^-*\\d+\\.*\\d*, *-*\\d+\\.*\\d*$', type: 'string' },
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(8192),
        )
        .default(512)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Width of the resulting image in pixels. Width must be a positive integer between 1 and 8192.',
            example: 512,
            in: 'query',
            name: 'width',
            required: false,
            schema: { default: 512, maximum: 8192, minimum: 1, type: 'integer' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(8192),
        )
        .default(512)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Height of the resulting image in pixels. Height must be a positive integer between 1 and 8192.',
            example: 512,
            in: 'query',
            name: 'height',
            required: false,
            schema: { default: 512, maximum: 8192, minimum: 1, type: 'integer' },
          },
        }),
      bbox: z
        .string()
        .regex(/^(-*\d+\.*\d*,){3}(-*\d+\.*\d*)$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Bounding box for the image, using EPSG:3857 projection (functionally equivalent to EPSG:900910).\nValues <strong>must</strong> be in the order of minLon, minLat, maxLon, maxLat.\nMaxLat must be greater than minLat. Longitude values can be on both sides of the 180th meridian.\nCannot be used with <strong>center</strong>, <strong>width</strong>, or <strong>height</strong> parameters.',
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { pattern: '^(-*\\d+\\.*\\d*,){3}(-*\\d+\\.*\\d*)$', type: 'string' },
          },
        }),
      view: z
        .enum(['Unified', 'IN'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.',
            example: 'Unified',
            in: 'query',
            name: 'view',
            required: false,
            schema: { enum: ['Unified', 'IN'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    400: {
      description:
        '<b>Bad Request</b>: Received by the interface, but there is an error\nin the request, such as:\n  - one or more of the required parameters is missing\n  - unsupported or unrecognized parameter value\n  - two or more mutually exclusive parameters are used in the same query (e.g. mixing center/width/height and bbox.)\n  - minimum latitude is greater than maximum latitude in a bbox call\n  - layer containing alpha channel is requested in format not supporting the alpha channel\nThis code is returned if the required parameters of the request were\nmalformed. A detailed exception explanation is returned in a\nresponse in form of Service Exception Report.',
    },
    403: {
      description:
        '<b>Forbidden</b>:\n  - supplied API key is not valid for the request\n  - the requested view is not available in the country where the request was sent from',
    },
    500: {
      description: '<b>Internal Server Error</b>: There is a problem with the Static Map\nService.',
    },
    503: { description: '<b>Service currently unavailable.</b>' },
  },
})

export const getMapVersionNumberTileLayerStyleZoomXYPbfRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf',
  tags: ['Vector'],
  summary: 'Tile',
  description:
    'The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      layer: z
        .enum(['basic', 'hybrid', 'labels'])
        .openapi({
          param: {
            description: 'Layer of tile to be rendered',
            example: 'basic',
            in: 'path',
            name: 'layer',
            required: true,
            schema: { enum: ['basic', 'hybrid', 'labels'], type: 'string' },
          },
        }),
      style: z
        .literal('main')
        .openapi({
          param: {
            description: 'Style of tile to be rendered',
            example: 'main',
            in: 'path',
            name: 'style',
            required: true,
            schema: { enum: ['main'], type: 'string' },
          },
        }),
      zoom: z
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
        .openapi({
          param: {
            description: 'Zoom level of tile to be rendered',
            example: 0,
            in: 'path',
            name: 'zoom',
            required: true,
            schema: {
              enum: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ],
              type: 'integer',
            },
          },
        }),
      X: z
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
            description: 'x coordinate of tile on zoom grid',
            example: 0,
            in: 'path',
            name: 'X',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      Y: z
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
            description: 'y coordinate of tile on zoom grid',
            example: 0,
            in: 'path',
            name: 'Y',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      view: z
        .enum(['Unified', 'IL', 'IN'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.',
            example: 'Unified',
            in: 'query',
            name: 'view',
            required: false,
            schema: { enum: ['Unified', 'IL', 'IN'], type: 'string' },
          },
        }),
      language: z
        .string()
        .default('NGT')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language to be used for labels in the response. The default is NGT: Neutral Ground Truth, which uses each place\'s local official language and script (where available). See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for a full list of options.',
            in: 'query',
            name: 'language',
            schema: { default: 'NGT', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    400: {
      description:
        '<b>Bad request</b>: Usually the result of malformed syntax:\n  - the given combination of layer, style, and query parameters is not supported\n  - zoom n is out of range 0 <= zoom <= 22: the requested zoom level is out of the possible range\n  - x n is out of range [0,m]: the requested x coordinate is out of the possible range (the value of m will vary depending on zoom level)\n  - y n is out of range [0,m]: the requested y coordinate is out of the possible range (the value of m will vary depending on zoom level)\n  - the requested view is not supported',
    },
    403: {
      description:
        '<b>Forbidden</b>: \n  - the supplied API key is not valid for this request\n  - the requested view is not available in your country',
    },
    500: {
      description:
        '<b>Internal Server Error</b>: There is a problem with the TomTom\nMaps API Vector Tile service',
    },
    503: { description: '<b>Service currently unavailable</b>.' },
  },
})

export const getMapVersionNumberTileLayerStyleZoomXYFormatRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}',
  tags: ['Raster'],
  summary: 'Tile',
  description:
    'The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1.',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      layer: z
        .enum(['basic', 'hybrid', 'labels'])
        .openapi({
          param: {
            description:
              'Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.',
            example: 'basic',
            in: 'path',
            name: 'layer',
            required: true,
            schema: { enum: ['basic', 'hybrid', 'labels'], type: 'string' },
          },
        }),
      style: z
        .enum(['main', 'night'])
        .openapi({
          param: {
            description: 'Style of tile to be rendered',
            example: 'main',
            in: 'path',
            name: 'style',
            required: true,
            schema: { enum: ['main', 'night'], type: 'string' },
          },
        }),
      zoom: z
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
        .openapi({
          param: {
            description: 'Zoom level of tile to be rendered',
            example: 0,
            in: 'path',
            name: 'zoom',
            required: true,
            schema: {
              enum: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ],
              type: 'integer',
            },
          },
        }),
      X: z
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
            description: 'x coordinate of tile on zoom grid',
            example: 0,
            in: 'path',
            name: 'X',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      Y: z
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
            description: 'y coordinate of tile on zoom grid',
            example: 0,
            in: 'path',
            name: 'Y',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      format: z
        .enum(['jpg', 'png'])
        .openapi({
          param: {
            description: 'Format of the response.',
            example: 'png',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['jpg', 'png'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      tileSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(256), z.literal(512)]),
        )
        .default(256)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.',
            in: 'query',
            name: 'tileSize',
            required: false,
            schema: { default: 256, enum: [256, 512], type: 'integer' },
          },
        }),
      view: z
        .enum(['Unified', 'IN'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.',
            example: 'Unified',
            in: 'query',
            name: 'view',
            required: false,
            schema: { enum: ['Unified', 'IN'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    302: { description: '<b>Found</b>: URL redirection' },
    400: {
      description:
        '<b>Bad request</b>: Usually the result of malformed syntax:\n  - the given combination of layer, style, and query parameters is not supported\n  - zoom n is out of range 0 <= zoom < 19: the requested zoom level is out of the possible range\n  - x n is out of range [0,m]: the requested x coordinate is out of the possible range (the value of m will vary depending on zoom level)\n  - y n is out of range [0,m]: the requested y coordinate is out of the possible range (the value of m will vary depending on zoom level)\n  - the requested view is not supported',
    },
    403: {
      description:
        '<b>Forbidden</b>:\n  - the supplied API key is not valid for this request\n  - the requested view is not available in the country where the request was sent from',
    },
    410: { description: '<b>Gone</b>: Request for unsupported format' },
    500: {
      description:
        '<b>Internal Server Error</b>: There is a problem with the TomTom\nMaps API Raster Tile service',
    },
  },
})

export const getMapVersionNumberWmsIndexRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/wms/',
  tags: ['WMS / WMTS'],
  summary: 'GetMap',
  description:
    'The GetMap call implements the Web Map Service 1.1.1 standard\nto access TomTom raster map tiles. This service is described\nin the response to the GetCapabilities API call.',
  operationId: 'GetMap',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
    }),
    query: z.object({
      request: z
        .literal('GetMap')
        .openapi({
          param: {
            description: 'Request type',
            in: 'query',
            name: 'request',
            required: true,
            schema: { enum: ['GetMap'], type: 'string' },
          },
        }),
      srs: z
        .enum(['EPSG:3857', 'EPSG:4326'])
        .openapi({
          param: {
            description:
              'Projection used in describing the <b>bbox</b> EPSG:3857 is\nrecommended, particularly at higher zoom levels. (Note that\nEPSG:3857 is functionally equivalent to EPSG:900913/EPSG:3785)',
            example: 'EPSG:4326',
            in: 'query',
            name: 'srs',
            required: true,
            schema: { enum: ['EPSG:3857', 'EPSG:4326'], type: 'string' },
          },
        }),
      bbox: z
        .string()
        .regex(/^(-*\d+\.*\d*, *){3}(-*\d+\.*\d*)$/)
        .openapi({
          param: {
            description:
              'Bounding box in the projection stated in <b>srs</b>\n(minLon,minLat,maxLon,maxLat)',
            example: '-0.489,51.28,0.236,51.686',
            in: 'query',
            name: 'bbox',
            required: true,
            schema: { pattern: '^(-*\\d+\\.*\\d*, *){3}(-*\\d+\\.*\\d*)$', type: 'string' },
          },
        }),
      width: z
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
            description: 'Width of the resulting image, in pixels Maximum value is 2048',
            example: 512,
            in: 'query',
            name: 'width',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      height: z
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
            description: 'Height of the resulting image, in pixels Maximum value is 2048',
            example: 512,
            in: 'query',
            name: 'height',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      format: z
        .enum(['image/jpeg', 'image/png'])
        .openapi({
          param: {
            description: 'Image format to be returned',
            example: 'image/png',
            in: 'query',
            name: 'format',
            required: true,
            schema: { enum: ['image/jpeg', 'image/png'], type: 'string' },
          },
        }),
      layers: z
        .literal('basic')
        .openapi({
          param: {
            description: 'Map layers requested Currently only the basic layer is available',
            in: 'query',
            name: 'layers',
            required: true,
            schema: { enum: ['basic'], type: 'string' },
          },
        }),
      styles: z
        .literal('')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'Map styles to be returned. Currently, no styles are available. This\nparameter is present for forward compatibility; it must be used and\nleft blank.',
            in: 'query',
            name: 'styles',
            required: false,
            schema: { enum: [''], type: 'string' },
          },
        }),
      service: z
        .literal('WMS')
        .exactOptional()
        .openapi({
          param: {
            description: 'Service type',
            in: 'query',
            name: 'service',
            required: false,
            schema: { enum: ['WMS'], type: 'string' },
          },
        }),
      version: z
        .literal('1.1.1')
        .openapi({
          param: {
            description: 'WMS service version',
            in: 'query',
            name: 'version',
            required: true,
            schema: { enum: ['1.1.1'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    202: {
      description:
        '<b>Accepted</b>: Received by the interface, but there is a WMS exception in\nprocessing it. Possible causes include:\n  - one or more required parameters is missing\n  - unsupported or unrecognized parameter value\n  - malformed bounding box requested\n  - invalid map dimensions requested\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \nThis code is returned if the parameters of the request were malformed.\nThe response includes a detailed explanation in the Service Exception Report.',
    },
    401: { description: '<b>Unauthorized</b>: Supplied API key is not valid for the request' },
    500: {
      description: '<b>Internal Server Error</b>: There is a problem with the TomTom WMS\nservice',
    },
  },
})

export const getMapVersionNumberWmsIndex2Route = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/wms//',
  tags: ['WMS / WMTS'],
  summary: 'GetCapabilities',
  description:
    "The GetCapabilities call is part of TomTom's implementation of version 1.1.1\nthe Web Map Service (WMS). It provides descriptions of the other calls\nthat are available in the implementation.",
  operationId: 'GetCapabilities',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
    }),
    query: z.object({
      service: z
        .literal('WMS')
        .openapi({
          param: {
            in: 'query',
            name: 'service',
            required: true,
            schema: { enum: ['WMS'], type: 'string' },
          },
        }),
      request: z
        .literal('GetCapabilities')
        .openapi({
          param: {
            in: 'query',
            name: 'request',
            required: true,
            schema: { enum: ['GetCapabilities'], type: 'string' },
          },
        }),
      version: z
        .literal('1.1.1')
        .exactOptional()
        .openapi({
          param: {
            description: 'WMS service version',
            in: 'query',
            name: 'version',
            required: false,
            schema: { enum: ['1.1.1'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    202: {
      description:
        '<b>Accepted</b>: Received by the interface, but there is a WMS exception in\nprocessing it. Possible causes include:\n  - one or more required parameters is missing\n  - unsupported or unrecognized parameter value\n  - malformed bounding box requested\n  - invalid map dimensions requested\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \nThis code is returned if the parameters of the request were malformed.\nThe response includes a detailed explanation in the Service Exception Report.',
    },
    401: { description: '<b>Unauthorized</b>: Supplied API key is not valid for the request' },
    500: {
      description: '<b>Internal Server Error</b>: There is a problem with the TomTom WMS\nservice',
    },
  },
})

export const getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRoute = createRoute({
  method: 'get',
  path: '/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml',
  tags: ['WMS / WMTS'],
  summary: 'WMTS',
  description:
    'The WMTS GetCapabilities call implements version 1.0.0 of\nthe <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>\n(WMTS) standard. It returns metadata that allows compatible calling systems to construct\ncalls to TomTom\'s raster map tile service. See the\n<a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>\nfor more information on WMTS.',
  request: {
    params: z.object({
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            description: 'Version of the service to call. The current version is 1',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'Your API key for calling this service.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      wmtsVersion: z
        .literal('1.0.0')
        .openapi({
          param: {
            in: 'path',
            name: 'wmtsVersion',
            required: true,
            schema: { enum: ['1.0.0'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '<b>OK</b>' },
    400: { description: '<b>Bad request</b>: Probably malformed syntax' },
    401: { description: '<b>Unauthorized</b>: Supplied API key is not valid for this request' },
    500: {
      description: '<b>Internal Server Error</b>: There is a problem with the TomTom WMTS service',
    },
  },
  security: [],
})
