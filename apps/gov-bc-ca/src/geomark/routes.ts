import { createRoute, z } from '@hono/zod-openapi'

export const postGeomarksCopyRoute = createRoute({
  method: 'post',
  path: '/geomarks/copy',
  tags: ['create'],
  summary:
    'Create a new geomark by copying the geometries from one or more existing geomarks from the current server.',
  description:
    'The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks',
  request: {
    query: z.object({
      geomarkUrl: z
        .string()
        .openapi({
          param: {
            description: 'One or more geomark URLs or identifiers to create the new geomark from.',
            example:
              'https://apps.gov.bc.ca/pub/geomark/geomarks/gm-abcdefghijklmnopqrstuv0bcislands',
            in: 'query',
            name: 'geomarkUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resultFormat: z
        .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The file format the geomark info resource should be returned using.',
            example: 'json',
            in: 'query',
            name: 'resultFormat',
            required: false,
            schema: {
              enum: ['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'],
              type: 'string',
            },
          },
        }),
      allowOverlap: z
        .stringbool()
        .pipe(z.union([z.literal(false), z.literal(true)]))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Select this option to allow overlapping geometries',
            in: 'query',
            name: 'allowOverlap',
            required: false,
            schema: { default: false, enum: [false, true], type: 'boolean' },
          },
        }),
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The callback function a JSON result format would be wrapped in to support Ajax requests.',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      redirectUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.',
            in: 'query',
            name: 'redirectUrl',
            required: false,
            schema: { type: 'string' },
          },
        }),
      failureRedirectUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.',
            in: 'query',
            name: 'failureRedirectUrl',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bufferMetres: z
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
              'The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.',
            in: 'query',
            name: 'bufferMetres',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      bufferJoin: z
        .enum(['ROUND', 'MITRE', 'BEVEL'])
        .default('ROUND')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.',
            in: 'query',
            name: 'bufferJoin',
            required: false,
            schema: { default: 'ROUND', enum: ['ROUND', 'MITRE', 'BEVEL'], type: 'string' },
          },
        }),
      bufferCap: z
        .enum(['ROUND', 'SQUARE', 'FLAT'])
        .default('ROUND')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.',
            in: 'query',
            name: 'bufferCap',
            required: false,
            schema: { default: 'ROUND', enum: ['ROUND', 'SQUARE', 'FLAT'], type: 'string' },
          },
        }),
      bufferMitreLimit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.',
            in: 'query',
            name: 'bufferMitreLimit',
            required: false,
            schema: { default: 5, type: 'integer' },
          },
        }),
      bufferSegments: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(8)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.',
            in: 'query',
            name: 'bufferSegments',
            required: false,
            schema: { default: 8, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'If the geomark was created via a web service call.' },
    302: {
      description:
        'If the geomark was created and a redirectUrl was specified then the response will redirect to the redirectUrl with the query string parameters geomarkId and geomarkUrl of the created geomark.\n\nAdditional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)',
    },
    400: {
      description:
        "**Couldn't create Geomark.**\n\nPossible reasons:\n\n* No Polygon, Multi-Polygon, or folder(set) of Polygons provided.\n* A point or line was provided without a buffer width.\n\nAdditional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)",
    },
    500: { description: '**Internal Server Error**' },
  },
})

export const postGeomarksNewRoute = createRoute({
  method: 'post',
  path: '/geomarks/new',
  tags: ['create'],
  summary: 'Create a new geomark',
  description: "Create a new geomark from the geometries read from the 'body' parameter or file.",
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              allowOverlap: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.union([z.literal(false), z.literal(true)]),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When multiple=true select this option to allow overlapping geometries',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The binary or character content representing the geometry or geometries',
                }),
              bufferCap: z
                .enum(['ROUND', 'SQUARE', 'FLAT'])
                .default('ROUND')
                .exactOptional()
                .openapi({
                  description:
                    'If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.',
                }),
              bufferJoin: z
                .enum(['ROUND', 'MITRE', 'BEVEL'])
                .default('ROUND')
                .exactOptional()
                .openapi({
                  description:
                    'If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.',
                }),
              bufferMetres: z
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
                  description:
                    'The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.',
                }),
              bufferMitreLimit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(5)
                .exactOptional()
                .openapi({
                  description:
                    'If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.',
                }),
              bufferSegments: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(8)
                .exactOptional()
                .openapi({
                  description:
                    'If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.',
                }),
              callback: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The callback function a JSON result format would be wrapped in to support Ajax requests.',
                }),
              failureRedirectUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.',
                }),
              format: z
                .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
                .exactOptional()
                .openapi({ description: 'The file format name extension of the input geometry.' }),
              multiple: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.union([z.literal(false), z.literal(true)]),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Boolean flag indicating if multiple geometries are to be used for the geomark (true) or only a single geometry from the first geometry (false).',
                }),
              redirectUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.',
                }),
              resultFormat: z
                .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
                .exactOptional()
                .openapi({
                  description:
                    'The file format the geomark info resource should be returned using.',
                }),
              srid: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([
                    z.literal(4326),
                    z.literal(3005),
                    z.literal(3857),
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
                  description:
                    'The srid of the coordinate system the input geometries are in. If the file includes a coordinate system definition that will be used.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'If the geomark was created via a web service call.' },
    302: {
      description:
        'If the geomark was created and a redirectUrl was specified then the response will redirect to the redirectUrl with the query string parameters geomarkId and geomarkUrl of the created geomark.\n\nAdditional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)',
    },
    400: {
      description:
        "**Couldn't create Geomark.**\n\nPossible reasons:\n\n* No Polygon, Multi-Polygon, or folder(set) of Polygons provided.\n* A point or line was provided without a buffer width.\n\nAdditional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)",
    },
    500: { description: '**Internal Server Error**' },
  },
})

export const getGeomarksGeomarkIdFileFormatExtensionRoute = createRoute({
  method: 'get',
  path: '/geomarks/{geomarkId}.{fileFormatExtension}',
  tags: ['info'],
  summary: 'Get information about a particular geomark',
  description:
    'The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.',
  request: {
    params: z.object({
      geomarkId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the geomark.',
            example: 'gm-abcdefghijklmnopqrstuv0bcislands',
            in: 'path',
            name: 'geomarkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileFormatExtension: z
        .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
        .openapi({
          param: {
            description: 'The file format name extension used to represent the geomark download.',
            example: 'json',
            in: 'path',
            name: 'fileFormatExtension',
            required: true,
            schema: {
              enum: ['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      srid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(3005),
            z.literal(3857),
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
            description: 'The srid of the coordinate system the geometry should be converted to.',
            in: 'query',
            name: 'srid',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).',
    },
    404: {
      description:
        '**The geomark <geomarkId> could not be found.**\n\nCheck for extra characters on the end of the URL. The geomark may have expired and been deleted.',
    },
    500: { description: '**Internal Server Error**' },
  },
})

export const getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute = createRoute({
  method: 'get',
  path: '/geomarks/{geomarkId}/boundingBox.{fileFormatExtension}',
  tags: ['boundingBox'],
  summary: 'Gets the bounding box of the geomark',
  description:
    'The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks',
  request: {
    params: z.object({
      geomarkId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the geomark',
            example: 'gm-abcdefghijklmnopqrstuv0bcislands',
            in: 'path',
            name: 'geomarkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileFormatExtension: z
        .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
        .openapi({
          param: {
            description: 'The file format name extension used to represent the geomark download.',
            example: 'json',
            in: 'path',
            name: 'fileFormatExtension',
            required: true,
            schema: {
              enum: ['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      srid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(3005),
            z.literal(3857),
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
            description: 'The srid of the coordinate system the geometry should be converted to.',
            in: 'query',
            name: 'srid',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).',
    },
    400: {
      description:
        '**Coordinate system with srid = <srid> is not supported.**\n\nCheck the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).',
    },
    404: {
      description:
        '**The geomark <geomarkId> could not be found.**\n\nCheck for extra characters on the end of the URL. The geomark may have expired and been deleted.',
    },
    500: { description: '**Internal Server Error**' },
  },
})

export const getGeomarksGeomarkIdFeatureFileFormatExtensionRoute = createRoute({
  method: 'get',
  path: '/geomarks/{geomarkId}/feature.{fileFormatExtension}',
  tags: ['feature'],
  summary: 'Get the feature and attribution of the geomark',
  description:
    'The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.',
  request: {
    params: z.object({
      geomarkId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the geomark',
            example: 'gm-abcdefghijklmnopqrstuv0bcislands',
            in: 'path',
            name: 'geomarkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileFormatExtension: z
        .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
        .openapi({
          param: {
            description: 'The file format name extension used to represent the geomark download.',
            example: 'json',
            in: 'path',
            name: 'fileFormatExtension',
            required: true,
            schema: {
              enum: ['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      srid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(3005),
            z.literal(3857),
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
            description: 'The srid of the coordinate system the geometry should be converted to.',
            in: 'query',
            name: 'srid',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).',
    },
    400: {
      description:
        '**Coordinate system with srid = <srid> is not supported.**\n\nCheck the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).',
    },
    404: {
      description:
        '**The geomark <geomarkId> could not be found.**\n\nCheck for extra characters on the end of the URL. The geomark may have expired and been deleted.',
    },
    500: { description: '**Internal Server Error**' },
  },
})

export const getGeomarksGeomarkIdPartsFileFormatExtensionRoute = createRoute({
  method: 'get',
  path: '/geomarks/{geomarkId}/parts.{fileFormatExtension}',
  tags: ['parts'],
  summary: 'Get the individual geometries within a multi-part geometry',
  description:
    "The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.",
  request: {
    params: z.object({
      geomarkId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the geomark',
            example: 'gm-abcdefghijklmnopqrstuv0bcislands',
            in: 'path',
            name: 'geomarkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileFormatExtension: z
        .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
        .openapi({
          param: {
            description: 'The file format name extension used to represent the geomark download.',
            example: 'json',
            in: 'path',
            name: 'fileFormatExtension',
            required: true,
            schema: {
              enum: ['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      srid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(3005),
            z.literal(3857),
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
            description: 'The srid of the coordinate system the geometry should be converted to.',
            in: 'query',
            name: 'srid',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).',
    },
    400: {
      description:
        '**Coordinate system with srid = <srid> is not supported.**\n\nCheck the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).',
    },
    404: {
      description:
        '**The geomark <geomarkId> could not be found.**\n\nCheck for extra characters on the end of the URL. The geomark may have expired and been deleted.',
    },
    500: { description: '**Internal Server Error**' },
  },
})

export const getGeomarksGeomarkIdPointFileFormatExtensionRoute = createRoute({
  method: 'get',
  path: '/geomarks/{geomarkId}/point.{fileFormatExtension}',
  tags: ['point'],
  summary: 'Gets a single spatial point representative of the geomark.',
  description:
    'The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.',
  request: {
    params: z.object({
      geomarkId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the geomark.',
            example: 'gm-abcdefghijklmnopqrstuv0bcislands',
            in: 'path',
            name: 'geomarkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileFormatExtension: z
        .enum(['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'])
        .openapi({
          param: {
            description: 'The file format name extension used to represent the geomark download.',
            example: 'json',
            in: 'path',
            name: 'fileFormatExtension',
            required: true,
            schema: {
              enum: ['json', 'xml', 'kml', 'kmz', 'shp', 'shpz', 'geojson', 'gml', 'gpkg', 'wkt'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      srid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(3005),
            z.literal(3857),
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
            description: 'The srid of the coordinate system the geometry should be converted to.',
            in: 'query',
            name: 'srid',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).',
    },
    400: {
      description:
        '**Coordinate system with srid = <srid> is not supported.**\n\nCheck the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).',
    },
    404: {
      description:
        '**The geomark <geomarkId> could not be found.**\n\nCheck for extra characters on the end of the URL. The geomark may have expired and been deleted.',
    },
    500: { description: '**Internal Server Error**' },
  },
})
