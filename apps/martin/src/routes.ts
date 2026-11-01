import { createRoute, z } from '@hono/zod-openapi'

const FontFormatSchema = z
  .enum(['otf', 'ttf', 'ttc'])
  .openapi({
    description:
      'Source font file container format.\n\nThe string serialization (serde and `strum`) is the lowercase file\nextension, so [`FontFormat::VARIANTS`] doubles as the list of recognised\nfont extensions and [`str::parse`] maps an extension back to a variant.',
  })
  .openapi('FontFormat')

const StyleKindSchema = z
  .enum(['vector', 'raster', 'hybrid'])
  .openapi({ description: 'What kind of layers a `MapLibre` style draws.' })
  .openapi('StyleKind')

const CatalogSchema = z
  .object({
    fonts: z.record(
      z.string(),
      z
        .object({
          end: z.int().min(0).openapi({ description: 'Last Unicode codepoint available.' }),
          family: z.string().openapi({ description: 'Font family name (e.g., "Arial").' }),
          format: z
            .xor([
              FontFormatSchema.openapi({ description: 'Source font file container format.' }),
              z.null().nullable(),
            ])
            .exactOptional(),
          glyphs: z.int32().min(0).openapi({ description: 'Total number of glyphs in this font.' }),
          last_modified_at: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({ description: "Timestamp of the source font file's last modification." }),
          start: z.int().min(0).openapi({ description: 'First Unicode codepoint available.' }),
          style: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Font style (e.g., "Bold", "Italic").\n\nNone for regular style.',
            }),
        })
        .openapi({
          description: 'Font metadata including family, style, glyph count, and Unicode range.',
          required: ['family', 'glyphs', 'start', 'end'],
        }),
    ),
    settings: z
      .object({
        rendering: z
          .boolean()
          .openapi({ description: 'Whether server-side style rendering endpoints are enabled.' }),
      })
      .openapi({ description: 'Server-wide capability flags', required: ['rendering'] }),
    sprites: z.record(
      z.string(),
      z
        .object({
          images: z.array(z.string()).openapi({ description: 'Available sprite image names.' }),
          last_modified_at: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({ description: "Timestamp of the spritesheet's last modification." }),
          size_in_bytes: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64().min(1n),
            )
            .exactOptional()
            .openapi({
              type: 'integer',
              format: 'int64',
              minimum: 1,
              description: 'Total size of the spritesheet in bytes.',
            }),
        })
        .openapi({ description: 'Sprite source metadata.', required: ['images'] }),
    ),
    styles: z.record(
      z.string(),
      z
        .object({
          colors: z
            .array(z.string())
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Distinct colors referenced by the style, for preview swatches.',
            }),
          last_modified_at: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({ description: "Timestamp of the style file's last modification." }),
          layer_count: z
            .int32()
            .min(0)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Number of layers declared in the style JSON.' }),
          path: z.string().openapi({ description: 'Path to the style JSON file.' }),
          type: z
            .xor([
              StyleKindSchema.openapi({ description: 'What kind of layers the style draws.' }),
              z.null().nullable(),
            ])
            .exactOptional(),
          version_hash: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Hash identifying the current style revision.' }),
        })
        .openapi({ description: 'Style metadata.', required: ['path'] }),
    ),
    tiles: z.record(
      z.string(),
      z
        .object({
          attribution: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Attribution text for the data source' }),
          content_encoding: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Optional content encoding (e.g., "gzip", "deflate")' }),
          content_type: z
            .string()
            .openapi({
              description:
                'MIME type for the tile data (e.g., "application/x-protobuf", "image/png")',
            }),
          description: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Description of the tile source content' }),
          last_modified_at: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({ description: "Timestamp of the underlying source's last modification." }),
          layer_count: z
            .int32()
            .min(0)
            .nullable()
            .exactOptional()
            .openapi({ description: 'Number of vector layers declared by this source.' }),
          name: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Human-readable name for the tile source' }),
          tile_grid: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Tile grid the source is served in, when it is not the default Web Mercator grid',
            }),
        })
        .openapi({
          description:
            'Metadata for a tile source in the catalog.\n\nContains information needed to properly serve tiles from a source,\nincluding HTTP headers and human-readable metadata.',
          required: ['content_type'],
        }),
    ),
  })
  .openapi({ required: ['tiles', 'sprites', 'fonts', 'styles', 'settings'] })
  .openapi('Catalog')

const SpatialExtentSchema = z
  .object({
    bbox: z.array(z.array(z.float64())),
    crs: z.string(),
    storageCrsBbox: z
      .array(z.array(z.float64()))
      .nullable()
      .exactOptional()
      .openapi({ description: "`bbox` in the CRS of the collection's grid, in its axis order." }),
  })
  .openapi({
    description:
      "The bounding box of a collection or the dataset, in longitude and latitude and in the CRS of a collection's grid.",
    required: ['bbox', 'crs'],
  })
  .openapi('SpatialExtent')

const ExtentSchema = z
  .object({ spatial: SpatialExtentSchema })
  .openapi({
    description: "Where a collection's or the dataset's data lies.",
    required: ['spatial'],
  })
  .openapi('Extent')

const LinkSchema = z
  .object({
    href: z.string(),
    rel: z.string(),
    templated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether `href` is a URI template.' }),
    title: z.string(),
    type: z.string(),
  })
  .openapi({
    description: 'A link from one OGC API resource to another.',
    required: ['href', 'rel', 'type', 'title'],
  })
  .openapi('Link')

const CollectionSchema = z
  .object({
    crs: z
      .array(z.string())
      .openapi({ description: 'The CRSs the collection is served in, only the CRS of its grid.' }),
    description: z.string().nullable().exactOptional(),
    extent: ExtentSchema,
    id: z.string(),
    links: z.array(LinkSchema),
    storageCrs: z.string().openapi({ description: "The CRS of the collection's grid." }),
    title: z.string(),
  })
  .openapi({
    description: 'A tile source as an OGC API collection.',
    required: ['id', 'title', 'extent', 'crs', 'storageCrs', 'links'],
  })
  .openapi('Collection')

const CollectionsSchema = z
  .object({ collections: z.array(CollectionSchema), links: z.array(LinkSchema) })
  .openapi({
    description: 'The collections the OGC API serves.',
    required: ['collections', 'links'],
  })
  .openapi('Collections')

const ConformanceSchema = z
  .object({ conformsTo: z.array(z.string()) })
  .openapi({ description: 'The conformance declaration of the OGC API.', required: ['conformsTo'] })
  .openapi('Conformance')

const DataTypeSchema = z
  .enum(['map', 'vector'])
  .openapi({ description: "What a source's tiles hold, in the terms of OGC API - Tiles." })
  .openapi('DataType')

const FeatureCollectionTagSchema = z
  .literal('FeatureCollection')
  .openapi({
    description:
      '`"FeatureCollection"` discriminator for the top-level body. A unit enum so\nany other `type` (a bare `Feature`, `Geometry`, or garbage) fails to\ndeserialize with a clear serde error.',
  })
  .openapi('FeatureCollectionTag')

const FeatureTagSchema = z
  .literal('Feature')
  .openapi({ description: '`"Feature"` discriminator for each member of the collection.' })
  .openapi('FeatureTag')

const LandingPageSchema = z
  .object({
    description: z.string(),
    extent: ExtentSchema.openapi({ description: 'Where the data of all collections lies.' }),
    links: z.array(LinkSchema),
    title: z.string(),
  })
  .openapi({
    description: 'The entry point of the OGC API.',
    required: ['title', 'description', 'extent', 'links'],
  })
  .openapi('LandingPage')

const LayerSchema = z
  .object({
    dataType: DataTypeSchema,
    id: z.string(),
    maxTileMatrix: z.string().nullable().exactOptional(),
    minTileMatrix: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'A layer of a vector tileset.', required: ['id', 'dataType'] })
  .openapi('Layer')

const StaticOverlayPropertiesSchema = z
  .object({
    'circle-color': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'CSS color for `Point` geometries.', example: '#285DAA' }),
    'circle-opacity': z.float32().nullable().exactOptional(),
    'circle-radius': z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Radius in pixels at the rendered scale.', example: 8 }),
    'circle-stroke-color': z.string().nullable().exactOptional(),
    'circle-stroke-opacity': z.float32().nullable().exactOptional(),
    'circle-stroke-width': z.float32().nullable().exactOptional(),
    'fill-color': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'CSS color for `Polygon` fills.', example: '#95BEFA' }),
    'fill-opacity': z.float32().nullable().exactOptional(),
    'fill-outline-color': z.string().nullable().exactOptional(),
    'line-cap': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'One of `butt`, `round`, `square`.', example: 'round' }),
    'line-color': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'CSS color for `LineString` geometries (and `Polygon` outlines).',
        example: '#285DAA',
      }),
    'line-join': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'One of `miter`, `bevel`, `round`.', example: 'round' }),
    'line-opacity': z.float32().nullable().exactOptional(),
    'line-width': z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line width in pixels at the rendered scale.', example: 2 }),
  })
  .openapi({
    description:
      "Wire shape of a feature's `properties`, keyed by canonical `MapLibre`\npaint/layout names. Colors arrive as strings and are parsed in [`TryFrom`];\nenums and numbers are validated by serde. Unknown keys (`id`, `name`,\n`title`, …) are ignored.",
    required: [],
  })
  .openapi('StaticOverlayProperties')

const StaticOverlayFeatureSchema = z
  .object({
    geometry: z
      .any()
      .exactOptional()
      .openapi({
        description:
          '`GeoJSON` geometry. `Point`/`MultiPoint` -> circle layer;\n`LineString`/`MultiLineString` -> line layer;\n`Polygon`/`MultiPolygon` -> fill (and optionally outline-line) layer.\n`GeometryCollection` and `null` are silently skipped.',
      }),
    properties: z
      .xor([
        StaticOverlayPropertiesSchema.openapi({
          description: 'Styling for this feature. All fields optional; unknown fields ignored.',
        }),
        z.null().nullable(),
      ])
      .exactOptional(),
    type: FeatureTagSchema.openapi({
      description: '`GeoJSON` type discriminator. Must be `"Feature"`.',
    }),
  })
  .openapi({
    description:
      'Wire shape of one `GeoJSON` `Feature`. A `null`/missing geometry is kept as\n`None` and skipped at apply time.',
    required: ['type'],
  })
  .openapi('StaticOverlayFeature')

const StaticStyleOverlaySchema = z
  .object({
    features: z
      .array(StaticOverlayFeatureSchema)
      .openapi({ description: 'Features to overlay on the rendered base map, in draw order.' }),
    type: FeatureCollectionTagSchema.openapi({
      description: '`GeoJSON` type discriminator. Must be `"FeatureCollection"`.',
    }),
  })
  .openapi({
    description:
      'Wire shape of the top-level body: a `GeoJSON` `FeatureCollection`. Doubles as\nthe `OpenAPI` request-body schema.',
    required: ['type', 'features'],
  })
  .openapi('StaticStyleOverlay')

const StyleDescriptionSchema = z
  .object({
    id: z.string(),
    links: z.array(LinkSchema),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({
    description: 'A style in the list, linking to its stylesheets.',
    required: ['id', 'links'],
  })
  .openapi('StyleDescription')

const StylesSchema = z
  .object({ links: z.array(LinkSchema), styles: z.array(StyleDescriptionSchema) })
  .openapi({ description: 'The styles the OGC API serves.', required: ['styles', 'links'] })
  .openapi('Styles')

const TileMatrixSchema = z
  .object({
    cellSize: z.float64(),
    id: z.string(),
    matrixHeight: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    matrixWidth: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    pointOfOrigin: z.array(z.float64()),
    scaleDenominator: z.float64(),
    tileHeight: z.int32().min(0),
    tileWidth: z.int32().min(0),
  })
  .openapi({
    description: 'One zoom level of a tile matrix set.',
    required: [
      'id',
      'scaleDenominator',
      'cellSize',
      'pointOfOrigin',
      'tileWidth',
      'tileHeight',
      'matrixWidth',
      'matrixHeight',
    ],
  })
  .openapi('TileMatrix')

const TileMatrixLimitsSchema = z
  .object({
    maxTileCol: z.int32().min(0),
    maxTileRow: z.int32().min(0),
    minTileCol: z.int32().min(0),
    minTileRow: z.int32().min(0),
    tileMatrix: z.string(),
  })
  .openapi({
    description: 'The tiles of one zoom that hold data.',
    required: ['tileMatrix', 'minTileRow', 'maxTileRow', 'minTileCol', 'maxTileCol'],
  })
  .openapi('TileMatrixLimits')

const TileMatrixSetSchema = z
  .object({
    crs: z.string(),
    id: z.string(),
    orderedAxes: z.array(z.string()),
    tileMatrices: z.array(TileMatrixSchema),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      'A tile matrix set in the JSON encoding of OGC Two Dimensional Tile Matrix Set 2.0.',
    required: ['id', 'crs', 'orderedAxes', 'tileMatrices'],
  })
  .openapi('TileMatrixSet')

const TileMatrixSetItemSchema = z
  .object({
    crs: z.string(),
    id: z.string(),
    links: z.array(LinkSchema),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({
    description: 'One tile matrix set in the list, linking to its definition.',
    required: ['id', 'crs', 'links'],
  })
  .openapi('TileMatrixSetItem')

const TileMatrixSetsSchema = z
  .object({ tileMatrixSets: z.array(TileMatrixSetItemSchema) })
  .openapi({
    description: 'The tile matrix sets the OGC API serves.',
    required: ['tileMatrixSets'],
  })
  .openapi('TileMatrixSets')

const TileSetSchema = z
  .object({
    crs: z.string(),
    dataType: DataTypeSchema,
    layers: z.array(LayerSchema).exactOptional(),
    links: z.array(LinkSchema),
    tileMatrixSetLimits: z.array(TileMatrixLimitsSchema),
    tileMatrixSetURI: z.string().nullable().exactOptional(),
    title: z.string(),
  })
  .openapi({
    description: 'The metadata of a tileset.',
    required: ['title', 'dataType', 'crs', 'tileMatrixSetLimits', 'links'],
  })
  .openapi('TileSet')

const TileSetItemSchema = z
  .object({
    crs: z.string(),
    dataType: DataTypeSchema,
    links: z.array(LinkSchema),
    tileMatrixSetURI: z.string().nullable().exactOptional(),
    title: z.string(),
  })
  .openapi({
    description: 'A tileset in a list, linking to its metadata.',
    required: ['title', 'dataType', 'crs', 'links'],
  })
  .openapi('TileSetItem')

const TileSetsSchema = z
  .object({ links: z.array(LinkSchema), tilesets: z.array(TileSetItemSchema) })
  .openapi({
    description: 'The tilesets of a collection, map or style.',
    required: ['tilesets', 'links'],
  })
  .openapi('TileSets')

export const getSourceIdsRoute = createRoute({
  method: 'get',
  path: '/{source_ids}',
  tags: ['crate::srv'],
  operationId: 'get_source_info',
  request: {
    params: z.object({
      source_ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source_ids', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'TileJSON 3.0.0 metadata for the requested source(s)', content: {} },
    404: { description: 'No matching source' },
  },
})

export const getSourceIdsZXYRoute = createRoute({
  method: 'get',
  path: '/{source_ids}/{z}/{x}/{y}',
  tags: ['crate::srv'],
  operationId: 'get_tile',
  request: {
    params: z.object({
      source_ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source_ids', required: true, schema: { type: 'string' } },
        }),
      z: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'z',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'x',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'y',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Encoded vector or raster tile' },
    204: { description: 'Source(s) returned an empty tile' },
    304: { description: 'ETag matched If-None-Match' },
    404: { description: 'No matching source' },
    406: { description: 'No supported tile format in Accept header' },
  },
})

export const deleteCacheSourceIdRoute = createRoute({
  method: 'delete',
  path: '/cache/{source_id}',
  tags: ['crate::srv'],
  operationId: 'purge_source',
  request: {
    params: z.object({
      source_id: z
        .string()
        .openapi({
          param: {
            description: 'Source ID',
            in: 'path',
            name: 'source_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The source's cached tiles are gone, or tile cacheing is disabled.",
      content: { 'text/plain': { schema: z.string() } },
    },
    404: { description: 'No such source' },
  },
})

export const getCatalogRoute = createRoute({
  method: 'get',
  path: '/catalog',
  tags: ['crate::srv'],
  operationId: 'get_catalog',
  responses: {
    200: {
      description: 'Catalog of all configured sources',
      content: { 'application/json': { schema: CatalogSchema } },
    },
  },
})

export const getFontFontstackStartEndRoute = createRoute({
  method: 'get',
  path: '/font/{fontstack}/{start}-{end}',
  tags: ['crate::srv'],
  operationId: 'get_font',
  request: {
    params: z.object({
      fontstack: z
        .string()
        .openapi({
          param: { in: 'path', name: 'fontstack', required: true, schema: { type: 'string' } },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      end: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'end',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Glyph PBF range', content: {} },
    400: { description: 'Invalid glyph range' },
    404: { description: 'No matching font' },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['crate::srv'],
  summary: 'Return 200 OK if healthy. Used for readiness and liveness probes.',
  operationId: 'get_health',
  responses: {
    200: { description: 'Service healthy', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getOgcRoute = createRoute({
  method: 'get',
  path: '/ogc',
  tags: ['crate::srv::ogcapi'],
  summary: 'The OGC API landing page, at `/ogc` and `/ogc/`.',
  operationId: 'getLandingPage',
  responses: {
    200: {
      description: 'OGC API landing page',
      content: { 'application/json': { schema: LandingPageSchema } },
    },
  },
})

export const getOgcApiRoute = createRoute({
  method: 'get',
  path: '/ogc/api',
  tags: ['crate::srv::ogcapi'],
  summary:
    "The OGC API part of Martin's `OpenAPI` 3.1 definition, as JSON or, for clients preferring HTML, as a page showing it.",
  operationId: 'getAPI',
  responses: {
    200: {
      description:
        'OpenAPI 3.1 definition of the OGC API paths this server answers, or an HTML page showing it',
      content: {},
    },
  },
})

export const getOgcCollectionsRoute = createRoute({
  method: 'get',
  path: '/ogc/collections',
  tags: ['crate::srv::ogcapi'],
  summary: 'Every tile source on a tile matrix set with an OGC definition, as a collection.',
  operationId: 'getCollectionsList',
  responses: {
    200: {
      description: 'Every tile source on a tile matrix set with an OGC definition',
      content: { 'application/json': { schema: CollectionsSchema } },
    },
  },
})

export const getOgcCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/ogc/collections/{collection_id}',
  tags: ['crate::srv::ogcapi'],
  summary: 'One collection.',
  operationId: 'getCollection',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID, the ID of a source',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection',
      content: { 'application/json': { schema: CollectionSchema } },
    },
    404: { description: 'No such collection' },
  },
})

export const getOgcCollectionsCollectionIdMapRoute = createRoute({
  method: 'get',
  path: '/ogc/collections/{collection_id}/map',
  tags: ['crate::srv::ogcapi'],
  summary: 'A raster collection rendered as a map.',
  operationId: 'ogc.collection.getMap',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID, the ID of a source',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Width of the map in pixels.',
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'int32', minimum: 0, type: ['integer', 'null'] },
          },
        }),
      height: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Height of the map in pixels.',
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'int32', minimum: 0, type: ['integer', 'null'] },
          },
        }),
      bbox: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Area to show as `minx,miny,maxx,maxy` in `bbox-crs`.',
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'bbox-crs': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'CRS of `bbox`, `CRS84` when not given.',
            in: 'query',
            name: 'bbox-crs',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      center: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Point to center the map on as `x,y` in `center-crs`.',
            in: 'query',
            name: 'center',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'center-crs': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'CRS of `center`, `CRS84` when not given.',
            in: 'query',
            name: 'center-crs',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'scale-denominator': z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Scale of the map.',
            in: 'query',
            name: 'scale-denominator',
            required: false,
            schema: { format: 'double', type: ['number', 'null'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Map of the collection', content: {} },
    400: { description: 'Invalid map parameters' },
    404: { description: "No such collection, or it can't be drawn as a map" },
    406: { description: 'No supported map format in Accept header' },
  },
})

export const getOgcCollectionsCollectionIdTilesRoute = createRoute({
  method: 'get',
  path: '/ogc/collections/{collection_id}/tiles',
  tags: ['crate::srv::ogcapi'],
  summary: 'The tilesets of one collection, one per tile matrix set it is served on.',
  operationId: 'ogc.collection.vector.getTileSetsList',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID, the ID of a source',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tilesets of the collection',
      content: { 'application/json': { schema: TileSetsSchema } },
    },
    404: { description: 'No such collection' },
  },
})

export const getOgcCollectionsCollectionIdTilesTileMatrixSetIdRoute = createRoute({
  method: 'get',
  path: '/ogc/collections/{collection_id}/tiles/{tile_matrix_set_id}',
  tags: ['crate::srv::ogcapi'],
  summary: 'The metadata of one tileset, with the template of its tile URLs.',
  operationId: 'ogc.collection.vector.getTileSet',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_id', required: true, schema: { type: 'string' } },
        }),
      tile_matrix_set_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'tile_matrix_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tileset metadata with the tile URL template',
      content: { 'application/json': { schema: TileSetSchema } },
    },
    404: { description: 'No such collection or tileset' },
  },
})

export const getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColRoute =
  createRoute({
    method: 'get',
    path: '/ogc/collections/{collection_id}/tiles/{tile_matrix_set_id}/{tile_matrix}/{tile_row}/{tile_col}',
    tags: ['crate::srv::ogcapi'],
    summary:
      'One tile of a collection, answered as the `/{source_ids}/{z}/{x}/{y}` route answers it.',
    operationId: 'ogc.collection.vector.getTile',
    request: {
      params: z.object({
        collection_id: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'collection_id',
              required: true,
              schema: { type: 'string' },
            },
          }),
        tile_matrix_set_id: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'tile_matrix_set_id',
              required: true,
              schema: { type: 'string' },
            },
          }),
        tile_matrix: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'tile_matrix',
              required: true,
              schema: { format: 'int32', minimum: 0, type: 'integer' },
            },
          }),
        tile_row: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'tile_row',
              required: true,
              schema: { format: 'int32', minimum: 0, type: 'integer' },
            },
          }),
        tile_col: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'tile_col',
              required: true,
              schema: { format: 'int32', minimum: 0, type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'Encoded vector or raster tile' },
      204: { description: 'Source returned an empty tile' },
      304: { description: 'ETag matched If-None-Match' },
      404: { description: 'No such collection, tileset or tile' },
      406: { description: 'No supported tile format in Accept header' },
    },
  })

export const getOgcConformanceRoute = createRoute({
  method: 'get',
  path: '/ogc/conformance',
  tags: ['crate::srv::ogcapi'],
  summary: 'The conformance classes the OGC API implements.',
  operationId: 'getConformance',
  responses: {
    200: {
      description: 'Conformance classes the OGC API implements',
      content: { 'application/json': { schema: ConformanceSchema } },
    },
  },
})

export const getOgcMapRoute = createRoute({
  method: 'get',
  path: '/ogc/map',
  tags: ['crate::srv::ogcapi'],
  summary:
    'The collections of the dataset drawn as one map, in the order `collections` names them.',
  operationId: 'ogc.dataset.getMap',
  request: {
    query: z.object({
      width: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Width of the map in pixels.',
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'int32', minimum: 0, type: ['integer', 'null'] },
          },
        }),
      height: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Height of the map in pixels.',
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'int32', minimum: 0, type: ['integer', 'null'] },
          },
        }),
      bbox: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Area to show as `minx,miny,maxx,maxy` in `bbox-crs`.',
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'bbox-crs': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'CRS of `bbox`, `CRS84` when not given.',
            in: 'query',
            name: 'bbox-crs',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      center: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Point to center the map on as `x,y` in `center-crs`.',
            in: 'query',
            name: 'center',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'center-crs': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'CRS of `center`, `CRS84` when not given.',
            in: 'query',
            name: 'center-crs',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'scale-denominator': z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Scale of the map.',
            in: 'query',
            name: 'scale-denominator',
            required: false,
            schema: { format: 'double', type: ['number', 'null'] },
          },
        }),
      collections: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-separated IDs or URLs of the collections to draw, all of them when not given; a repeated one is drawn once.',
            in: 'query',
            name: 'collections',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Map of the dataset', content: {} },
    400: { description: "Invalid map parameters, or a collection that can't be drawn" },
  },
})

export const getOgcMapTilesRoute = createRoute({
  method: 'get',
  path: '/ogc/map/tiles',
  tags: ['crate::srv::ogcapi'],
  summary: 'The map tilesets of all collections drawn together.',
  operationId: 'ogc.dataset.map.getTileSetsList',
  responses: {
    200: {
      description: 'Map tilesets of all collections drawn together',
      content: { 'application/json': { schema: TileSetsSchema } },
    },
  },
})

export const getOgcMapTilesTileMatrixSetIdRoute = createRoute({
  method: 'get',
  path: '/ogc/map/tiles/{tile_matrix_set_id}',
  tags: ['crate::srv::ogcapi'],
  summary: 'The map tileset of all collections drawn together, on `WebMercatorQuad`.',
  operationId: 'ogc.dataset.map.getTileSet',
  request: {
    params: z.object({
      tile_matrix_set_id: z
        .string()
        .openapi({
          param: {
            description: 'Tile matrix set ID, only `WebMercatorQuad`',
            in: 'path',
            name: 'tile_matrix_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Map tileset metadata with the tile URL template',
      content: { 'application/json': { schema: TileSetSchema } },
    },
    404: { description: 'No such tileset' },
  },
})

export const getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute = createRoute({
  method: 'get',
  path: '/ogc/map/tiles/{tile_matrix_set_id}/{tile_matrix}/{tile_row}/{tile_col}',
  tags: ['crate::srv::ogcapi'],
  summary: 'A map tile of all collections drawn together.',
  operationId: 'ogc.dataset.map.getTile',
  request: {
    params: z.object({
      tile_matrix_set_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'tile_matrix_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tile_matrix: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tile_matrix',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      tile_row: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tile_row',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      tile_col: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tile_col',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Map tile of all collections drawn together', content: {} },
    404: { description: 'No such tileset or tile' },
    406: { description: 'No supported image format in Accept header' },
  },
})

export const getOgcStylesRoute = createRoute({
  method: 'get',
  path: '/ogc/styles',
  tags: ['crate::srv::ogcapi'],
  summary: 'Every style Martin serves.',
  operationId: 'ogc.dataset.getStyles',
  responses: {
    200: {
      description: 'Every style Martin serves',
      content: { 'application/json': { schema: StylesSchema } },
    },
  },
})

export const getOgcStylesStyleIdRoute = createRoute({
  method: 'get',
  path: '/ogc/styles/{style_id}',
  tags: ['crate::srv'],
  description: 'Alias of `/style/{style_id}`, as OGC API - Styles.',
  operationId: 'ogc.dataset.getStyle',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'style_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'MapLibre Style Spec JSON document', content: {} },
    400: { description: 'Style file is malformed' },
    404: { description: 'No matching style' },
  },
})

export const getOgcStylesStyleIdMapRoute = createRoute({
  method: 'get',
  path: '/ogc/styles/{style_id}/map',
  tags: ['crate::srv::ogcapi'],
  summary: 'A style rendered as a map.',
  operationId: 'ogc.dataset.style.getMap',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            description: 'Style ID',
            in: 'path',
            name: 'style_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Width of the map in pixels.',
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'int32', minimum: 0, type: ['integer', 'null'] },
          },
        }),
      height: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Height of the map in pixels.',
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'int32', minimum: 0, type: ['integer', 'null'] },
          },
        }),
      bbox: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Area to show as `minx,miny,maxx,maxy` in `bbox-crs`.',
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'bbox-crs': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'CRS of `bbox`, `CRS84` when not given.',
            in: 'query',
            name: 'bbox-crs',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      center: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Point to center the map on as `x,y` in `center-crs`.',
            in: 'query',
            name: 'center',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'center-crs': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'CRS of `center`, `CRS84` when not given.',
            in: 'query',
            name: 'center-crs',
            required: false,
            schema: { type: ['string', 'null'] },
          },
        }),
      'scale-denominator': z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Scale of the map.',
            in: 'query',
            name: 'scale-denominator',
            required: false,
            schema: { format: 'double', type: ['number', 'null'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Map of the style', content: {} },
    400: { description: 'Invalid map parameters' },
    404: { description: 'No such style' },
    406: { description: 'No supported map format in Accept header' },
  },
})

export const getOgcStylesStyleIdMapTilesRoute = createRoute({
  method: 'get',
  path: '/ogc/styles/{style_id}/map/tiles',
  tags: ['crate::srv::ogcapi'],
  summary: 'The map tilesets of a style.',
  operationId: 'ogc.dataset.style.map.getTileSetsList',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            description: 'Style ID',
            in: 'path',
            name: 'style_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Map tilesets of the style',
      content: { 'application/json': { schema: TileSetsSchema } },
    },
    404: { description: 'No such style' },
  },
})

export const getOgcStylesStyleIdMapTilesTileMatrixSetIdRoute = createRoute({
  method: 'get',
  path: '/ogc/styles/{style_id}/map/tiles/{tile_matrix_set_id}',
  tags: ['crate::srv::ogcapi'],
  summary: 'The map tileset of a style on `WebMercatorQuad`.',
  operationId: 'ogc.dataset.style.map.getTileSet',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            description: 'Style ID',
            in: 'path',
            name: 'style_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tile_matrix_set_id: z
        .string()
        .openapi({
          param: {
            description: 'Tile matrix set ID, only `WebMercatorQuad`',
            in: 'path',
            name: 'tile_matrix_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Map tileset metadata with the tile URL template',
      content: { 'application/json': { schema: TileSetSchema } },
    },
    404: { description: 'No such style or tileset' },
  },
})

export const getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute = createRoute({
  method: 'get',
  path: '/ogc/styles/{style_id}/map/tiles/{tile_matrix_set_id}/{tile_matrix}/{tile_row}/{tile_col}',
  tags: ['crate::srv::ogcapi'],
  summary: 'A map tile of a style.',
  operationId: 'ogc.dataset.style.map.getTile',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'style_id', required: true, schema: { type: 'string' } },
        }),
      tile_matrix_set_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'tile_matrix_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tile_matrix: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tile_matrix',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      tile_row: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tile_row',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      tile_col: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tile_col',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Map tile of the style', content: {} },
    404: { description: 'No such style, tileset or tile' },
    406: { description: 'No supported image format in Accept header' },
  },
})

export const getOgcTileMatrixSetsRoute = createRoute({
  method: 'get',
  path: '/ogc/tileMatrixSets',
  tags: ['crate::srv::ogcapi'],
  summary: 'The tile matrix sets of the served sources.',
  operationId: 'getTileMatrixSetsList',
  responses: {
    200: {
      description: 'Tile matrix sets of the served sources',
      content: { 'application/json': { schema: TileMatrixSetsSchema } },
    },
  },
})

export const getOgcTileMatrixSetsTileMatrixSetIdRoute = createRoute({
  method: 'get',
  path: '/ogc/tileMatrixSets/{tile_matrix_set_id}',
  tags: ['crate::srv::ogcapi'],
  summary: 'The definition of one tile matrix set.',
  operationId: 'getTileMatrixSet',
  request: {
    params: z.object({
      tile_matrix_set_id: z
        .string()
        .openapi({
          param: {
            description: 'Tile matrix set ID',
            in: 'path',
            name: 'tile_matrix_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tile matrix set definition',
      content: { 'application/json': { schema: TileMatrixSetSchema } },
    },
    404: { description: 'No served grid with this ID has an OGC definition' },
  },
})

export const getSdfSpriteSourceIdsJsonRoute = createRoute({
  method: 'get',
  path: '/sdf_sprite/{source_ids}.json',
  tags: ['crate::srv'],
  operationId: 'get_sprite_sdf_json',
  request: {
    params: z.object({
      source_ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source_ids', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'SDF sprite index JSON', content: {} },
    404: { description: 'No matching sprite source' },
  },
})

export const getSdfSpriteSourceIdsPngRoute = createRoute({
  method: 'get',
  path: '/sdf_sprite/{source_ids}.png',
  tags: ['crate::srv'],
  operationId: 'get_sprite_sdf_png',
  request: {
    params: z.object({
      source_ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source_ids', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Combined signed-distance-field sprite image', content: {} },
    404: { description: 'No matching sprite source' },
  },
})

export const getSpriteSourceIdsJsonRoute = createRoute({
  method: 'get',
  path: '/sprite/{source_ids}.json',
  tags: ['crate::srv'],
  operationId: 'get_sprite_json',
  request: {
    params: z.object({
      source_ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source_ids', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Sprite index JSON', content: {} },
    404: { description: 'No matching sprite source' },
  },
})

export const getSpriteSourceIdsPngRoute = createRoute({
  method: 'get',
  path: '/sprite/{source_ids}.png',
  tags: ['crate::srv'],
  operationId: 'get_sprite_png',
  request: {
    params: z.object({
      source_ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source_ids', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Combined sprite image', content: {} },
    404: { description: 'No matching sprite source' },
  },
})

export const getStyleStyleIdRoute = createRoute({
  method: 'get',
  path: '/style/{style_id}',
  tags: ['crate::srv'],
  operationId: 'get_style_json',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'style_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'MapLibre Style Spec JSON document', content: {} },
    400: { description: 'Style file is malformed' },
    404: { description: 'No matching style' },
  },
})

export const getStyleStyleIdZXYFormatRoute = createRoute({
  method: 'get',
  path: '/style/{style_id}/{z}/{x}/{y}.{format}',
  tags: ['crate::srv'],
  description:
    'Append `@{n}x` to `{y}` (`/style/{style_id}/{z}/{x}/{y}@2x.png`) to draw the tile at `n` times the pixels.',
  operationId: 'get_rendered_tile_style',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'style_id', required: true, schema: { type: 'string' } },
        }),
      z: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'z',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'x',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'y',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      format: z
        .enum(['png', 'jpg', 'webp'])
        .openapi({
          param: {
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              description: 'Image format requested in the URL.',
              enum: ['png', 'jpg', 'webp'],
              type: 'string',
            },
          },
          description: 'Image format requested in the URL.',
        }),
    }),
  },
  responses: {
    200: { description: 'Server-side rendered style tile (PNG/JPEG/WebP)' },
    400: { description: 'Invalid tile coordinates, or a pixel ratio not listed in `pixel_ratios`' },
    403: { description: 'Rendering is disabled' },
    404: { description: 'No matching style' },
    500: { description: 'Renderer or encoder failure' },
  },
})

export const getStyleStyleIdStaticCameraSizeFormatRoute = createRoute({
  method: 'get',
  path: '/style/{style_id}/static/{camera}/{size}.{format}',
  tags: ['crate::srv'],
  summary: 'Render a static map image at an arbitrary camera into `{size}.{format}`.',
  operationId: 'get_rendered_static_style',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'style_id', required: true, schema: { type: 'string' } },
        }),
      camera: z
        .string()
        .openapi({
          param: {
            description: '`lon,lat,zoom[@bearing[,pitch]]` or `minLon,minLat,maxLon,maxLat`.',
            in: 'path',
            name: 'camera',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .string()
        .openapi({
          param: {
            description: '`WIDTHxHEIGHT[@SCALEx]` - e.g. `800x600` or `400x300@2x`.',
            in: 'path',
            name: 'size',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['png', 'jpg', 'webp'])
        .openapi({
          param: {
            description:
              'Output encoding. `png`, `jpg`, or `webp` (canonical names only;\n`.jpeg` is redirected to `.jpg` via [`redirect_static_jpeg`]).',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              description: 'Image format requested in the URL.',
              enum: ['png', 'jpg', 'webp'],
              type: 'string',
            },
          },
          description: 'Image format requested in the URL.',
        }),
    }),
  },
  responses: {
    200: { description: 'Rendered static map image', content: {} },
    400: { description: 'Invalid params or size, or a pixel ratio not listed in `pixel_ratios`' },
    403: { description: 'Rendering is disabled' },
    404: { description: 'No matching style' },
    500: { description: 'Renderer or encoder failure' },
  },
})

export const postStyleStyleIdStaticCameraSizeFormatRoute = createRoute({
  method: 'post',
  path: '/style/{style_id}/static/{camera}/{size}.{format}',
  tags: ['crate::srv'],
  summary:
    'Render a static map image with optional vector overlays.\nSee [our documentation](https://maplibre.org/martin/sources-styles/) for\nthe supported overlay body -- a `GeoJSON` `FeatureCollection` with style\nproperties on each feature.',
  description: 'An empty or missing body renders the base map alone.',
  operationId: 'post_rendered_static_style',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'style_id', required: true, schema: { type: 'string' } },
        }),
      camera: z
        .string()
        .openapi({
          param: {
            description: '`lon,lat,zoom[@bearing[,pitch]]` or `minLon,minLat,maxLon,maxLat`.',
            in: 'path',
            name: 'camera',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .string()
        .openapi({
          param: {
            description: '`WIDTHxHEIGHT[@SCALEx]` - e.g. `800x600` or `400x300@2x`.',
            in: 'path',
            name: 'size',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['png', 'jpg', 'webp'])
        .openapi({
          param: {
            description:
              'Output encoding. `png`, `jpg`, or `webp` (canonical names only;\n`.jpeg` is redirected to `.jpg` via [`redirect_static_jpeg`]).',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              description: 'Image format requested in the URL.',
              enum: ['png', 'jpg', 'webp'],
              type: 'string',
            },
          },
          description: 'Image format requested in the URL.',
        }),
    }),
    body: {
      description:
        "GeoJSON FeatureCollection. Each feature's `properties` carries MapLibre canonical paint/layout property names (`circle-color`, `line-width`, `fill-color`, …). Unknown property keys are ignored.",
      content: { 'application/json': { schema: StaticStyleOverlaySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Rendered static map image', content: {} },
    400: { description: 'Invalid params, size, or overlay body' },
    403: { description: 'Rendering is disabled' },
    404: { description: 'No matching style' },
    500: { description: 'Renderer or encoder failure' },
  },
})
