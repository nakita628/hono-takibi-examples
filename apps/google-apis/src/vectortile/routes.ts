import { createRoute, z } from '@hono/zod-openapi'

const BasemapZOrderSchema = z
  .object({
    zGrade: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The second most significant component of the ordering of a component to be rendered onto the basemap.',
      }),
    zPlane: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The most significant component of the ordering of a component to be rendered onto the basemap.',
      }),
    zWithinGrade: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The least significant component of the ordering of a component to be rendered onto the basemap.',
      }),
  })
  .openapi({
    description:
      'Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade.',
    required: [],
  })
  .openapi('BasemapZOrder')

const Vertex2DListSchema = z
  .object({
    xOffsets: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of x-offsets in local tile coordinates.' }),
    yOffsets: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of y-offsets in local tile coordinates.' }),
  })
  .openapi({
    description:
      '2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)].',
    required: [],
  })
  .openapi('Vertex2DList')

const AreaSchema = z
  .object({
    basemapZOrder: BasemapZOrderSchema.exactOptional().openapi({
      description:
        'The z-order of this geometry when rendered on a flat basemap. Geometry with a lower z-order should be rendered beneath geometry with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting. Unlike Area.z_order this can be used to compare with Line.basemap_z_order, and in fact may yield more accurate rendering (where a line may be rendered beneath an area).',
    }),
    hasExternalEdges: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the polygon is not entirely internal to the feature that it belongs to: that is, some of the edges are bordering another feature.',
      }),
    internalEdges: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'When has_external_edges is true, the polygon has some edges that border another feature. This field indicates the internal edges that do not border another feature. Each value is an index into the vertices array, and denotes the start vertex of the internal edge (the next vertex in the boundary loop is the end of the edge). If the selected vertex is the last vertex in the boundary loop, then the edge between that vertex and the starting vertex of the loop is internal. This field may be used for styling. For example, building parapets could be placed only on the external edges of a building polygon, or water could be lighter colored near the external edges of a body of water. If has_external_edges is false, all edges are internal and this field will be empty.',
      }),
    loopBreaks: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Identifies the boundary loops of the polygon. Only set for INDEXED_TRIANGLE polygons. Each value is an index into the vertices array indicating the beginning of a loop. For instance, values of [2, 5] would indicate loop_data contained 3 loops with indices 0-1, 2-4, and 5-end. This may be used in conjunction with the internal_edges field for styling polygon boundaries. Note that an edge may be on a polygon boundary but still internal to the feature. For example, a feature split across multiple tiles will have an internal polygon boundary edge along the edge of the tile.',
      }),
    triangleIndices: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'When the polygon encoding is of type INDEXED_TRIANGLES, this contains the indices of the triangle vertices in the vertex_offsets field. There are 3 vertex indices per triangle.',
      }),
    type: z
      .enum(['TRIANGLE_FAN', 'INDEXED_TRIANGLES', 'TRIANGLE_STRIP'])
      .exactOptional()
      .openapi({ description: 'The polygon encoding type used for this area.' }),
    vertexOffsets: Vertex2DListSchema.exactOptional().openapi({
      description: 'The vertices present in the polygon defining the area.',
    }),
    zOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The z-ordering of this area. Areas with a lower z-order should be rendered beneath areas with a higher z-order. This z-ordering does not imply anything about the altitude of the line relative to the ground, but it can be used to prevent z-fighting during rendering on the client. This z-ordering can only be used to compare areas, and cannot be compared with the z_order field in the Line message. The z-order may be negative or zero. Prefer Area.basemap_z_order.',
      }),
  })
  .openapi({
    description:
      'Represents an area. Used to represent regions such as water, parks, etc. Next ID: 10',
    required: [],
  })
  .openapi('Area')

const ExtrudedAreaSchema = z
  .object({
    area: AreaSchema.exactOptional().openapi({
      description: 'The area representing the footprint of the extruded area.',
    }),
    maxZ: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The z-value in local tile coordinates where the extruded area ends.',
      }),
    minZ: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The z-value in local tile coordinates where the extruded area begins. This is non-zero for extruded areas that begin off the ground. For example, a building with a skybridge may have an extruded area component with a non-zero min_z.',
      }),
  })
  .openapi({
    description:
      'Represents a height-extruded area: a 3D prism with a constant X-Y plane cross section. Used to represent extruded buildings. A single building may consist of several extruded areas. The min_z and max_z fields are scaled to the size of the tile. An extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on.',
    required: [],
  })
  .openapi('ExtrudedArea')

const LineSchema = z
  .object({
    basemapZOrder: BasemapZOrderSchema.exactOptional().openapi({
      description:
        'The z-order of this geometry when rendered on a flat basemap. Geometry with a lower z-order should be rendered beneath geometry with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting. Unlike Line.z_order this can be used to compare with Area.basemap_z_order, and in fact may yield more accurate rendering (where a line may be rendered beneath an area).',
    }),
    vertexOffsets: Vertex2DListSchema.exactOptional().openapi({
      description: 'The vertices present in the polyline.',
    }),
    zOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The z-order of the line. Lines with a lower z-order should be rendered beneath lines with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting during rendering on the client. In general, larger and more important road features will have a higher z-order line associated with them. This z-ordering can only be used to compare lines, and cannot be compared with the z_order field in the Area message. The z-order may be negative or zero. Prefer Line.basemap_z_order.',
      }),
  })
  .openapi({
    description:
      'Represents a 2D polyline. Used to represent segments such as roads, train tracks, etc.',
    required: [],
  })
  .openapi('Line')

const TriangleStripSchema = z
  .object({
    vertexIndices: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Index into the vertex_offset array representing the next vertex in the triangle strip.',
      }),
  })
  .openapi({
    description:
      'Represents a strip of triangles. Each triangle uses the last edge of the previous one. The following diagram shows an example of a triangle strip, with each vertex labeled with its index in the vertex_index array. (1)-----(3) / \\ / \\ / \\ / \\ / \\ / \\ (0)-----(2)-----(4) Vertices may be in either clockwise or counter-clockwise order.',
    required: [],
  })
  .openapi('TriangleStrip')

const Vertex3DListSchema = z
  .object({
    xOffsets: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of x-offsets in local tile coordinates.' }),
    yOffsets: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of y-offsets in local tile coordinates.' }),
    zOffsets: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of z-offsets in local tile coordinates.' }),
  })
  .openapi({
    description:
      '3D vertex list used for modeled volumes. Each entry represents an offset from the previous one in local tile coordinates. The first coordinate is offset from (0, 0, 0).',
    required: [],
  })
  .openapi('Vertex3DList')

const ModeledVolumeSchema = z
  .object({
    strips: z
      .array(TriangleStripSchema)
      .exactOptional()
      .openapi({ description: 'The triangle strips present in this mesh.' }),
    vertexOffsets: Vertex3DListSchema.exactOptional().openapi({
      description: 'The vertices present in the mesh defining the modeled volume.',
    }),
  })
  .openapi({
    description: 'Represents a modeled volume in 3D space. Used to represent 3D buildings.',
    required: [],
  })
  .openapi('ModeledVolume')

const GeometrySchema = z
  .object({
    areas: z
      .array(AreaSchema)
      .exactOptional()
      .openapi({ description: 'The areas present in this geometry.' }),
    extrudedAreas: z
      .array(ExtrudedAreaSchema)
      .exactOptional()
      .openapi({
        description:
          'The extruded areas present in this geometry. Not populated if modeled_volumes are included in this geometry unless always_include_building_footprints is set in GetFeatureTileRequest, in which case the client should decide which (extruded areas or modeled volumes) should be used (they should not be rendered together).',
      }),
    lines: z
      .array(LineSchema)
      .exactOptional()
      .openapi({ description: 'The lines present in this geometry.' }),
    modeledVolumes: z
      .array(ModeledVolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'The modeled volumes present in this geometry. Not populated unless enable_modeled_volumes has been set in GetFeatureTileRequest.',
      }),
  })
  .openapi({
    description:
      'Represents the geometry of a feature, that is, the shape that it has on the map. The local tile coordinate system has the origin at the north-west (upper-left) corner of the tile, and is scaled to 4096 units across each edge. The height (Z) axis has the same scale factor: an extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. There is no clipping boundary, so it is possible that some coordinates will lie outside the tile boundaries.',
    required: [],
  })
  .openapi('Geometry')

const RelationSchema = z
  .object({
    relatedFeatureIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Zero-based index to look up the related feature from the list of features in the tile.',
      }),
    relationType: z
      .enum(['RELATION_TYPE_UNSPECIFIED', 'OCCUPIES', 'PRIMARILY_OCCUPIED_BY'])
      .exactOptional()
      .openapi({ description: 'Relation type between the origin feature to the related feature.' }),
  })
  .openapi({
    description:
      'Represents a relation to another feature in the tile. For example, a building might be occupied by a given POI. The related feature can be retrieved using the related feature index.',
    required: [],
  })
  .openapi('Relation')

const RoadInfoSchema = z
  .object({
    isPrivate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Road has signage discouraging or prohibiting use by the general public. E.g., roads with signs that say "Private", or "No trespassing."',
      }),
  })
  .openapi({ description: 'Extra metadata relating to roads.', required: [] })
  .openapi('RoadInfo')

const SegmentInfoSchema = z
  .object({
    roadInfo: RoadInfoSchema.exactOptional().openapi({
      description: 'Metadata for features with the ROAD FeatureType.',
    }),
  })
  .openapi({ description: 'Extra metadata relating to segments.', required: [] })
  .openapi('SegmentInfo')

const FeatureSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The localized name of this feature. Currently only returned for roads.',
      }),
    geometry: GeometrySchema.exactOptional().openapi({
      description:
        'The geometry of this feature, representing the space that it occupies in the world.',
    }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Place ID of this feature, suitable for use in Places API details requests.',
      }),
    relations: z
      .array(RelationSchema)
      .exactOptional()
      .openapi({ description: 'Relations to other features.' }),
    segmentInfo: SegmentInfoSchema.exactOptional().openapi({
      description: 'Metadata for features with the SEGMENT FeatureType.',
    }),
    type: z
      .enum([
        'FEATURE_TYPE_UNSPECIFIED',
        'STRUCTURE',
        'BAR',
        'BANK',
        'LODGING',
        'CAFE',
        'RESTAURANT',
        'EVENT_VENUE',
        'TOURIST_DESTINATION',
        'SHOPPING',
        'SCHOOL',
        'SEGMENT',
        'ROAD',
        'LOCAL_ROAD',
        'ARTERIAL_ROAD',
        'HIGHWAY',
        'CONTROLLED_ACCESS_HIGHWAY',
        'FOOTPATH',
        'RAIL',
        'FERRY',
        'REGION',
        'PARK',
        'BEACH',
        'FOREST',
        'POLITICAL',
        'ADMINISTRATIVE_AREA1',
        'LOCALITY',
        'SUBLOCALITY',
        'WATER',
      ])
      .exactOptional()
      .openapi({ description: 'The type of this feature.' }),
  })
  .openapi({ description: 'A feature representing a single geographic entity.', required: [] })
  .openapi('Feature')

const TileCoordinatesSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'Required. The x coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Required. The y coordinate.' }),
    zoom: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The Google Maps API zoom level.' }),
  })
  .openapi({
    description:
      'Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness.',
    required: [],
  })
  .openapi('TileCoordinates')

const ProviderInfoSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Attribution string for this provider. This string is not localized.',
      }),
  })
  .openapi({
    description:
      'Information about the data providers that should be included in the attribution string shown by the client.',
    required: [],
  })
  .openapi('ProviderInfo')

const FeatureTileSchema = z
  .object({
    coordinates: TileCoordinatesSchema.exactOptional().openapi({
      description: 'The global tile coordinates that uniquely identify this tile.',
    }),
    features: z
      .array(FeatureSchema)
      .exactOptional()
      .openapi({ description: 'Features present on this map tile.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Resource name of the tile. The tile resource name is prefixed by its collection ID `tiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `tiles/@1,2,3z`.",
      }),
    providers: z
      .array(ProviderInfoSchema)
      .exactOptional()
      .openapi({ description: 'Data providers for the data contained in this tile.' }),
    status: z
      .enum(['STATUS_OK', 'STATUS_OK_DATA_UNCHANGED'])
      .exactOptional()
      .openapi({ description: 'Tile response status code to support tile caching.' }),
    versionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque value, usually less than 30 characters, that contains version info about this tile and the data that was used to generate it. The client should store this value in its tile cache and pass it back to the API in the client_tile_version_id field of subsequent tile requests in order to enable the API to detect when the new tile would be the same as the one the client already has in its cache. Also see STATUS_OK_DATA_UNCHANGED.',
      }),
  })
  .openapi({
    description:
      'A tile containing information about the map features located in the region it covers.',
    required: [],
  })
  .openapi('FeatureTile')

const RowSchema = z
  .object({
    altitudeDiffs: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The difference between each successive pair of altitudes, from west to east. The first, westmost point, is just the altitude rather than a diff. The units are specified by the altitude_multiplier parameter above; the value in meters is given by altitude_multiplier * altitude_diffs[n]. The altitude row (in metres above sea level) can be reconstructed with: a[0] = altitude_diffs[0] * altitude_multiplier when n > 0, a[n] = a[n-1] + altitude_diffs[n-1] * altitude_multiplier.',
      }),
  })
  .openapi({
    description: 'A row of altitude points in the elevation grid, ordered from west to east.',
    required: [],
  })
  .openapi('Row')

const FirstDerivativeElevationGridSchema = z
  .object({
    altitudeMultiplier: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A multiplier applied to the altitude fields below to extract the actual altitudes in meters from the elevation grid.',
      }),
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description:
          'Rows of points containing altitude data making up the elevation grid. Each row is the same length. Rows are ordered from north to south. E.g: rows[0] is the north-most row, and rows[n] is the south-most row.',
      }),
  })
  .openapi({
    description:
      'A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs between them as integers at some requested level of precision to take advantage of integer packing. The actual altitude values a[] can be reconstructed using the scale and each row\'s first_altitude and altitude_diff fields. More details in go/elevation-encoding-options-for-enduro under "Recommended implementation".',
    required: [],
  })
  .openapi('FirstDerivativeElevationGrid')

const SecondDerivativeElevationGridSchema = z
  .object({
    altitudeMultiplier: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A multiplier applied to the elements in the encoded data to extract the actual altitudes in meters.',
      }),
    columnCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of columns included in the encoded elevation data (i.e. the horizontal resolution of the grid).',
      }),
    encodedData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A stream of elements each representing a point on the tile running across each row from left to right, top to bottom. There will be precisely horizontal_resolution * vertical_resolution elements in the stream. The elements are not the heights, rather the second order derivative of the values one would expect in a stream of height data. Each element is a varint with the following encoding: ------------------------------------------------------------------------| | Head Nibble | ------------------------------------------------------------------------| | Bit 0 | Bit 1 | Bits 2-3 | | Terminator| Sign (1=neg) | Least significant 2 bits of absolute error | ------------------------------------------------------------------------| | Tail Nibble #1 | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| | ... | Tail Nibble #n | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------|',
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of rows included in the encoded elevation data (i.e. the vertical resolution of the grid).',
      }),
  })
  .openapi({
    description:
      'A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.',
    required: [],
  })
  .openapi('SecondDerivativeElevationGrid')

const TerrainTileSchema = z
  .object({
    coordinates: TileCoordinatesSchema.exactOptional().openapi({
      description: 'The global tile coordinates that uniquely identify this tile.',
    }),
    firstDerivative: FirstDerivativeElevationGridSchema.exactOptional().openapi({
      description:
        'Terrain elevation data encoded as a FirstDerivativeElevationGrid. cs/symbol:FirstDerivativeElevationGrid.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Resource name of the tile. The tile resource name is prefixed by its collection ID `terrain/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terrain/@1,2,3z`.",
      }),
    secondDerivative: SecondDerivativeElevationGridSchema.exactOptional().openapi({
      description:
        'Terrain elevation data encoded as a SecondDerivativeElevationGrid. cs/symbol:SecondDerivativeElevationGrid. See go/byte-encoded-terrain for more details.',
    }),
  })
  .openapi({
    description: 'A tile containing information about the terrain located in the region it covers.',
    required: [],
  })
  .openapi('TerrainTile')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['terraintiles'],
  description: 'Gets a terrain tile by its tile resource name.',
  operationId: 'vectortile.terraintiles.get',
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
      altitudePrecisionCentimeters: z
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
              'The precision of terrain altitudes in centimeters. Possible values: between 1 (cm level precision) and 1,000,000 (10-kilometer level precision).',
            in: 'query',
            name: 'altitudePrecisionCentimeters',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'clientInfo.apiClient': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'API client name and version. For example, the SDK calling the API. The exact format is up to the client.',
            in: 'query',
            name: 'clientInfo.apiClient',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientInfo.applicationId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Application ID, such as the package name on Android and the bundle identifier on iOS platforms.',
            in: 'query',
            name: 'clientInfo.applicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientInfo.applicationVersion': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Application version number, such as "1.2.3". The exact format is application-dependent.',
            in: 'query',
            name: 'clientInfo.applicationVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientInfo.deviceModel': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Device model as reported by the device. The exact format is platform-dependent.',
            in: 'query',
            name: 'clientInfo.deviceModel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientInfo.operatingSystem': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.',
            in: 'query',
            name: 'clientInfo.operatingSystem',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientInfo.platform': z
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
        .openapi({
          param: {
            description: 'Platform where the application is running.',
            in: 'query',
            name: 'clientInfo.platform',
            schema: {
              enum: [
                'PLATFORM_UNSPECIFIED',
                'EDITOR',
                'MAC_OS',
                'WINDOWS',
                'LINUX',
                'ANDROID',
                'IOS',
                'WEB_GL',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      'clientInfo.userId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. A client-generated user ID. The ID should be generated and persisted during the first user session or whenever a pre-existing ID is not found. The exact format is up to the client. This must be non-empty in a GetFeatureTileRequest (whether via the header or GetFeatureTileRequest.client_info).',
            in: 'query',
            name: 'clientInfo.userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxElevationResolutionCells: z
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
              'The maximum allowed resolution for the returned elevation heightmap. Possible values: between 1 and 1024 (and not less than min_elevation_resolution_cells). Over-sized heightmaps will be non-uniformly down-sampled such that each edge is no longer than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 100px (width) * 30px (height) max_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)',
            in: 'query',
            name: 'maxElevationResolutionCells',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      minElevationResolutionCells: z
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
              ' api-linter: core::0131::request-unknown-fields=disabled aip.dev/not-precedent: Maintaining existing request parameter pattern. The minimum allowed resolution for the returned elevation heightmap. Possible values: between 0 and 1024 (and not more than max_elevation_resolution_cells). Zero is supported for backward compatibility. Under-sized heightmaps will be non-uniformly up-sampled such that each edge is no shorter than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 30px (width) * 10px (height) min_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)',
            in: 'query',
            name: 'minElevationResolutionCells',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      terrainFormats: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['TERRAIN_FORMAT_UNKNOWN', 'FIRST_DERIVATIVE', 'SECOND_DERIVATIVE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Terrain formats that the client understands.',
            explode: true,
            in: 'query',
            name: 'terrainFormats',
            schema: {
              items: {
                enum: ['TERRAIN_FORMAT_UNKNOWN', 'FIRST_DERIVATIVE', 'SECOND_DERIVATIVE'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      enableModeledVolumes: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag indicating whether 3D building models should be enabled. If this is set structures will be returned as 3D modeled volumes rather than 2.5D extruded areas where possible.',
            in: 'query',
            name: 'enableModeledVolumes',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enablePoliticalFeatures: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag indicating whether political features should be returned.',
            in: 'query',
            name: 'enablePoliticalFeatures',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enablePrivateRoads: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag indicating whether the returned tile will contain road features that are marked private. Private roads are indicated by the Feature.segment_info.road_info.is_private field.',
            in: 'query',
            name: 'enablePrivateRoads',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enableUnclippedBuildings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag indicating whether unclipped buildings should be returned. If this is set, building render ops will extend beyond the tile boundary. Buildings will only be returned on the tile that contains their centroid.',
            in: 'query',
            name: 'enableUnclippedBuildings',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The BCP-47 language code corresponding to the language in which the name was requested, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The Unicode country/region code (CLDR) of the location from which the request is coming from, such as "US" and "419". For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag.',
            in: 'query',
            name: 'regionCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. Resource name of the tile. The tile resource name is prefixed by its collection ID `terraintiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terraintiles/@1,2,3z`.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TerrainTileSchema } },
    },
  },
})
