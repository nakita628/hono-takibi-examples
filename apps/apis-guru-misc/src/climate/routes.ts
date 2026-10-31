import { createRoute, z } from '@hono/zod-openapi'

const ApplicationActivitySummarySchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the application activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    fieldIds: z
      .array(z.string())
      .openapi({ description: 'Array of field ids associated the application activity.' }),
    id: z.uuid().openapi({ description: 'The id of an application activity.' }),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size in bytes of the raw application activity file.',
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the application activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
  })
  .openapi({
    required: ['id', 'startTime', 'endTime', 'createdAt', 'updatedAt', 'length', 'fieldIds'],
  })
  .openapi('ApplicationActivitySummary')

const ApplicationActivitiesSchema = z
  .object({ results: z.array(ApplicationActivitySummarySchema) })
  .openapi({ description: 'A batch of application activities', required: ['results'] })
  .openapi('ApplicationActivities')

const BinaryDataSchema = z
  .file()
  .openapi({ type: 'string', format: 'binary', description: 'Binary contents' })
  .openapi('BinaryData')

const ApplicationActivityContentsSchema = z
  .object({ body: BinaryDataSchema })
  .openapi({ required: ['body'] })
  .openapi('ApplicationActivityContents')

const AreaSchema = z
  .object({ q: z.float32(), u: z.string() })
  .openapi({
    description: 'Area with units. Units are always "hectare".',
    example: { q: 1, u: 'hectare' },
    required: ['q', 'u'],
  })
  .openapi('Area')

const BinarySchema = z.file().openapi({ type: 'string', format: 'binary' }).openapi('Binary')

const GeometrySchema = z
  .object({ coordinates: z.array(z.string()), type: z.enum(['Point', 'Polygon', 'MultiPolygon']) })
  .openapi({
    description: 'GeoJSON',
    example: { coordinates: [0, 0], type: 'Point' },
    required: ['type', 'coordinates'],
  })
  .openapi('Geometry')

const PointSchema = z
  .object({ coordinates: z.array(z.float32()), type: z.string() })
  .openapi({
    example: { coordinates: [-122.2, 38.1], type: 'Point' },
    required: ['coordinates', 'type'],
  })
  .openapi('Point')

const BoundaryPropertiesSchema = z
  .object({ area: AreaSchema, centroid: PointSchema })
  .openapi({ description: 'Properties map.', required: ['area', 'centroid'] })
  .openapi('BoundaryProperties')

const BoundarySchema = z
  .object({
    geometry: GeometrySchema,
    id: z.uuid(),
    properties: BoundaryPropertiesSchema,
    type: z.literal('Feature'),
  })
  .openapi({
    description: 'Arbitrary boundary.  GeoJSON Feature.',
    required: ['id', 'type', 'geometry', 'properties'],
  })
  .openapi('Boundary')

const BoundariesSchema = z
  .object({ features: z.array(BoundarySchema), type: z.literal('FeatureCollection') })
  .openapi({ description: 'A batch of boundary results', required: ['type', 'features'] })
  .openapi('Boundaries')

const BoundariesQuerySchema = z
  .object({
    ids: z.array(z.uuid().openapi({ description: 'Unique identifier for the boundary.' })),
  })
  .openapi({ required: ['ids'] })
  .openapi('BoundariesQuery')

const BoundaryUploadSchema = z
  .object({ geometry: GeometrySchema })
  .openapi({ description: 'Arbitrary boundary in a geometry map', required: ['geometry'] })
  .openapi('BoundaryUpload')

const CreatedExportSchema = z
  .object({ id: z.uuid().openapi({ description: 'Unique identifier for the export.' }) })
  .openapi({ required: ['id'] })
  .openapi('CreatedExport')

const CreatedUploadSchema = z
  .uuid()
  .openapi({ description: 'Successfully created upload request' })
  .openapi('CreatedUpload')

const EmptySchema = z.object({}).openapi('Empty')

const ErrorSchema = z
  .object({
    error: z
      .object({
        code: z.string(),
        id: z.uuid(),
        message: z.string().openapi({ description: 'Description of the error encountered.' }),
      })
      .exactOptional()
      .openapi({ required: ['id', 'code', 'message'] }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ExportSchema = z
  .object({
    contentType: z
      .enum(['application/vnd.climate.acrsi.geojson', 'application/vnd.climate.harvest.geojson'])
      .openapi({
        description:
          'Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).',
      }),
    definition: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "Additional specifications for a client's data export request, dependent on the content type.",
      }),
  })
  .openapi({ description: 'Client request to export data from a user.', required: ['contentType'] })
  .openapi('Export')

const ExportContentsSchema = z
  .object({ body: BinaryDataSchema })
  .openapi({ required: ['body'] })
  .openapi('ExportContents')

const ExportStatusSchema = z
  .object({
    checksum: z
      .string()
      .exactOptional()
      .openapi({ description: "Base64 encoded MD5 hash of the export's contents." }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message indicating reason for validation failure.' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "Size of the export's contents in bytes.",
      }),
    status: z
      .enum(['PROCESSING', 'INVALID', 'EXPIRED', 'COMPLETED', 'NO_DATA'])
      .openapi({
        description:
          'Current status of the export request:\n  * `PROCESSING` - Export request has been received by Climate and is being processed.\n  * `INVALID` - Export request has failed validity check.\n  * `EXPIRED` - Export contents have expired, and are no longer available for retrieval.\n  * `COMPLETED` - The export request has been successfully processed, and its contents are available for retrieval.\n  * `NO_DATA` - The export request completed successfully but generated no data.\n',
      }),
    xNextToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Token which may be used when executing an identical export in\nthe future, but which only wants export data which was not\npreviously exported.\nAssume a given field export request matches 12 fields today. And\ntomorrow it matches 15 fields. By passing the xNextToken in the\ndefinition section of tomorrow's field export request, only the\n3 additional fields would be exported. Note, all other parameters\npassed in the definition section must be identical to the original\nrequest.\n",
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('ExportStatus')

const FarmOrganizationSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Unique identifier for a farm organization.' }),
    name: z.string().openapi({ description: 'Name of the farm organization.' }),
    type: z.literal('farm').openapi({ description: 'Type of the farm organization.' }),
  })
  .openapi({
    description: 'Logical representation of a farm organization with a name and type.',
    example: { id: '00000000-0000-0000-0000-000000000000', name: 'Back Forty', type: 'farm' },
    required: ['id', 'name', 'type'],
  })
  .openapi('FarmOrganization')

const ParentSchema = z
  .object({
    id: z
      .uuid()
      .openapi({ description: 'Unique identifier for the parent of a farm organization.' }),
    type: z.literal('farm').openapi({ description: 'Type of the parent of a farm organization.' }),
  })
  .openapi({
    description: 'A minimal set of attributes regarding the parent of a farm organization.',
    required: ['id', 'type'],
  })
  .openapi('Parent')

const FieldSchema = z
  .object({
    boundaryId: z
      .uuid()
      .openapi({ description: "Unique identifier for the current Field's Boundary." }),
    id: z.uuid().openapi({ description: 'Unique identifier for a Field.' }),
    name: z.string().openapi({ description: 'Name of the Field.' }),
    parent: ParentSchema,
    resourceOwnerId: z
      .uuid()
      .openapi({ description: 'Unique identifier of the resource owner that owns the Field.' }),
  })
  .openapi({
    description:
      'Logical representation of a Field with a name.  Spatial attributes of the Field are provided in the Boundary.',
    example: {
      boundaryId: '00000000-0000-0000-0000-000000000000',
      id: '00000000-0000-0000-0000-000000000000',
      name: 'Back Forty',
      parent: { id: '00000000-0000-0000-0000-000000000000', type: 'farm' },
      resourceOwnerId: '00000000-0000-0000-0000-000000000000',
    },
    required: ['id', 'name', 'boundaryId', 'resourceOwnerId', 'parent'],
  })
  .openapi('Field')

const FieldsSchema = z
  .object({ results: z.array(FieldSchema) })
  .openapi({ description: 'A batch of field results', required: ['results'] })
  .openapi('Fields')

const HarvestActivitySummarySchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the harvest activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    fieldIds: z
      .array(z.string())
      .openapi({ description: 'Array of field ids associated the harvest activity.' }),
    id: z.uuid().openapi({ description: 'The id of a harvest activity.' }),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size in bytes of the raw harvest activity file.',
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the harvest activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
  })
  .openapi({
    required: ['id', 'startTime', 'endTime', 'createdAt', 'updatedAt', 'length', 'fieldIds'],
  })
  .openapi('HarvestActivitySummary')

const HarvestActivitiesSchema = z
  .object({ results: z.array(HarvestActivitySummarySchema) })
  .openapi({ description: 'A batch of harvest activities', required: ['results'] })
  .openapi('HarvestActivities')

const HarvestActivityContentsSchema = z
  .object({ body: BinaryDataSchema })
  .openapi({ required: ['body'] })
  .openapi('HarvestActivityContents')

const MetadataSchema = z.looseObject({}).openapi('Metadata')

const OperationSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Unique identifier for the operation.' }),
    name: z.string().openapi({ description: 'Name of the operation.' }),
    resourceOwnerId: z
      .uuid()
      .openapi({ description: 'Unique identifier of the resource owner that owns the Operation.' }),
  })
  .openapi({
    description: 'Logical representation of an operation with a name and resource owner.',
    example: {
      id: '00000000-0000-0000-0000-000000000000',
      name: 'Back Forty',
      resourceOwnerId: '00000000-0000-0000-0000-000000000000',
    },
    required: ['id', 'name', 'resourceOwnerId'],
  })
  .openapi('Operation')

const OperationsSchema = z
  .object({ results: z.array(OperationSchema) })
  .openapi({ description: 'A batch of operation results.', required: ['results'] })
  .openapi('Operations')

const PlantingActivitySummarySchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the planting activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    fieldIds: z
      .array(z.string())
      .openapi({ description: 'Array of field ids associated the planting activity.' }),
    id: z.uuid().openapi({ description: 'The id of a planting activity.' }),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size in bytes of the raw planting activity file.',
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the planting activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
  })
  .openapi({
    required: ['id', 'startTime', 'endTime', 'createdAt', 'updatedAt', 'length', 'fieldIds'],
  })
  .openapi('PlantingActivitySummary')

const PlantingActivitiesSchema = z
  .object({ results: z.array(PlantingActivitySummarySchema) })
  .openapi({ description: 'A batch of planting activities', required: ['results'] })
  .openapi('PlantingActivities')

const PlantingActivityContentsSchema = z
  .object({ body: BinaryDataSchema })
  .openapi({ required: ['body'] })
  .openapi('PlantingActivityContents')

const ResourceOwnerSchema = z
  .object({ email: z.string(), id: z.uuid(), name: z.string() })
  .openapi({ required: ['id', 'name', 'email'] })
  .openapi('ResourceOwner')

const ScoutingTagSchema = z
  .object({ code: z.string() })
  .openapi({ required: ['code'] })
  .openapi('ScoutingTag')

const ScoutingObservationSchema = z
  .object({
    endTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    fieldIds: z
      .array(z.string())
      .openapi({ description: 'Array of field ids associated with this observation.' }),
    id: z.uuid().openapi({ description: 'The id of a scouting observation.' }),
    location: GeometrySchema.openapi({
      description: 'Where the scouting observation occurred.  GeoJson in WGS84.',
    }),
    locationDisplayColor: z
      .enum(['#307af7', '#38d753', '#b037e4', '#ef3e3e', '#f7ec41', '#ff8439', '#808080'])
      .openapi({
        description:
          'Color of scouting pin assigned in the Climate FieldView app.\nLimited in the Ux to a set of RGB values.\n* #307af7\n* #38d753\n* #b037e4\n* #ef3e3e\n* #f7ec41\n* #ff8439\n* #808080\n',
      }),
    note: z
      .string()
      .openapi({
        description: 'The text of the scouting observation. Maximum of 4000 characters.',
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    status: z
      .enum(['ACTIVE', 'DELETED'])
      .openapi({
        description: 'The status of the scouting observation For example : ACTIVE, DELETED',
      }),
    tags: z
      .array(ScoutingTagSchema)
      .openapi({
        description:
          'For example, ROCK_STONE, PONDING_WET, HAIL Maximum 20 tags allowed, 40 characters per tag.',
      }),
    timespan: z.enum(['PERMANENT', 'SEASONAL']).openapi({ description: 'Permanent or seasonal' }),
    title: z
      .string()
      .openapi({
        description:
          'The title or summary of the scouting observation. 40 Characters long, no emojis, and leading and trailing whitespace will be trimmed.',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
  })
  .openapi({
    required: [
      'id',
      'title',
      'note',
      'location',
      'startTime',
      'endTime',
      'updatedAt',
      'fieldIds',
      'tags',
      'timespan',
      'locationDisplayColor',
      'status',
    ],
  })
  .openapi('ScoutingObservation')

const ScoutingObservationAttachmentSchema = z
  .object({
    contentType: z
      .string()
      .openapi({ description: 'The content type of the attachment, e.g. image/png.' }),
    id: z.uuid().openapi({ description: 'id of the attachment' }),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of bytes in the attachment.',
      }),
    status: z
      .enum(['ACTIVE', 'DELETED'])
      .openapi({ description: 'The status of the attachment. For example : ACTIVE, DELETED' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the attachment was last updated.\nTime in ISO 8601 format with UTC timezone, 3 fractional seconds.\n(https://tools.ietf.org/html/rfc3339)\n',
      }),
  })
  .openapi({ required: ['id', 'updatedAt', 'contentType', 'length', 'status'] })
  .openapi('ScoutingObservationAttachment')

const ScoutingObservationAttachmentContentsSchema = z
  .object({ body: BinaryDataSchema })
  .openapi({ required: ['body'] })
  .openapi('ScoutingObservationAttachmentContents')

const ScoutingObservationAttachmentsSchema = z
  .object({ results: z.array(ScoutingObservationAttachmentSchema) })
  .openapi({ description: 'A batch of scouting attachments', required: ['results'] })
  .openapi('ScoutingObservationAttachments')

const ScoutingObservationSummarySchema = z
  .object({
    endTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    id: z.uuid().openapi({ description: 'The id of a scouting observation.' }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).',
      }),
  })
  .openapi({ required: ['id', 'startTime', 'endTime', 'updatedAt'] })
  .openapi('ScoutingObservationSummary')

const ScoutingObservationsSchema = z
  .object({ results: z.array(ScoutingObservationSummarySchema) })
  .openapi({ description: 'A batch of scouting observations', required: ['results'] })
  .openapi('ScoutingObservations')

const UploadSchema = z
  .object({
    contentType: z
      .enum([
        'image/vnd.climate.thermal.geotiff',
        'image/vnd.climate.ndvi.geotiff',
        'image/vnd.climate.rgb.geotiff',
        'image/vnd.climate.rgb-nir.geotiff',
        'image/vnd.climate.rgb-cir.geotiff',
        'image/vnd.climate.waterstress.geotiff',
        'image/vnd.climate.elevation.geotiff',
        'image/vnd.climate.raw.geotiff',
        'application/vnd.climate.field.geojson',
        'application/vnd.climate.rx.planting.shp',
        'application/vnd.climate.prescription.zones.shp',
        'application/vnd.climate.modus.xml',
        'application/vnd.climate.stand-count.geojson',
        'application/vnd.climate.weed-count.geojson',
        'application/vnd.climate.as-applied.zip',
        'application/vnd.climate.as-planted.zip',
        'application/vnd.climate.as-harvested.zip',
      ])
      .openapi({
        description:
          'Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)',
      }),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Content size in bytes' }),
    md5: z.string().openapi({ description: 'Base64 encoded md5 hash of the content' }),
    metadata: MetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Client request to upload data for a user.',
    required: ['contentType', 'md5', 'length'],
  })
  .openapi('Upload')

const UploadStatusSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Unique identifier for the upload.' }),
    status: z
      .enum(['UPLOADING', 'INVALID', 'PENDING', 'INBOX', 'DECLINED', 'IMPORTING', 'SUCCESS'])
      .openapi({
        description:
          'Current status of the upload:\n  * `UPLOADING` - Uploading has started, parts are still coming in.\n  * `INVALID` - Upload has failed validity check.\n  * `PENDING` - Upload has been received by Climate and is being processed.\n  * `INBOX` - The upload is awaiting user acceptance in their Data Inbox.\n  * `DECLINED` - The user has declined the upload in their Data Inbox.\n  * `IMPORTING` - The user has accepted the upload and it is being imported into their account.\n  * `SUCCESS` - The upload has been successfully imported.\n',
      }),
  })
  .openapi({ required: ['id', 'status'] })
  .openapi('UploadStatus')

const UploadStatusQuerySchema = z
  .object({ ids: z.array(z.uuid().openapi({ description: 'Unique identifier for the upload.' })) })
  .openapi({ required: ['ids'] })
  .openapi('UploadStatusQuery')

const UploadStatusesSchema = z
  .object({ results: z.array(UploadStatusSchema) })
  .openapi({ required: ['results'] })
  .openapi('UploadStatuses')

const UploadedBoundaryIdSchema = z
  .object({ id: z.uuid() })
  .openapi({
    description: 'Unique identifier of a successfully uploaded boundary',
    required: ['id'],
  })
  .openapi('UploadedBoundaryId')

const _200Response = {
  description: 'OK',
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _204Response = {
  description: 'No Content',
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _304Response = {
  description: 'Not Modified',
  content: { 'application/json': { schema: EmptySchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'A token which may be used to poll for updates.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A token which may be used to poll for updates.',
          param: { required: false },
        }),
    },
  }),
}

const _400Response = {
  description: 'Bad Input',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _401Response = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _403Response = {
  description: 'Forbidden',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _404Response = {
  description: 'Not Found',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _409Response = {
  description: 'Conflict',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _410Response = {
  description: 'Gone',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _416Response = {
  description: 'Range Not Satisfiable',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _429Response = {
  description: 'Too Many Requests',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _500Response = {
  description: 'Internal Server Error',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const _503Response = {
  description: 'Server Busy',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'Number of seconds to wait before retrying the request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'Number of seconds to wait before retrying the request.',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchApplicationActivitiesOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: ApplicationActivitiesSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to poll for updates.',
      schema: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to poll for updates.', param: { required: false } }),
    },
  }),
}

const FetchApplicationActivitiesPartialResponse = {
  description: 'Partial Result',
  content: { 'application/json': { schema: ApplicationActivitiesSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to fetch next batch of results.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Token used to fetch next batch of results.',
          param: { required: false },
        }),
    },
  }),
}

const FetchApplicationActivityOkResponse = {
  description: 'OK',
  content: { 'application/octet-stream': { schema: ApplicationActivityContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request',
          param: { required: false },
        }),
    },
  }),
}

const FetchApplicationActivityPartialResponse = {
  description: 'Partial Result',
  content: { 'application/octet-stream': { schema: ApplicationActivityContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchBoundariesOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: BoundariesSchema } },
}

const FetchBoundaryByIdOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: BoundarySchema } },
}

const FetchExportContentsByIdPartialResponse = {
  description: 'Partial Result',
  content: { 'application/octet-stream': { schema: ExportContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242879/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242879/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchExportStatusByIdOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: ExportStatusSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchFarmOrganizationByTypeAndIdOkResponse = {
  description: 'Returns the requested farm organization.',
  content: { 'application/json': { schema: FarmOrganizationSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false } }),
    },
  }),
}

const FetchFieldByIdOkResponse = {
  description: 'Returns the requested Field.',
  content: { 'application/json': { schema: FieldSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false } }),
    },
  }),
}

const FetchFieldsOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: FieldsSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to poll for updates.',
      schema: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to poll for updates.', param: { required: false } }),
    },
  }),
}

const FetchFieldsPartialResponse = {
  description: 'Partial Result',
  content: { 'application/json': { schema: FieldsSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to fetch next batch of results.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Token used to fetch next batch of results.',
          param: { required: false },
        }),
    },
  }),
}

const FetchHarvestActivitiesOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: HarvestActivitiesSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to poll for updates.',
      schema: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to poll for updates.', param: { required: false } }),
    },
  }),
}

const FetchHarvestActivitiesPartialResponse = {
  description: 'Partial Result',
  content: { 'application/json': { schema: HarvestActivitiesSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to fetch next batch of results.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Token used to fetch next batch of results.',
          param: { required: false },
        }),
    },
  }),
}

const FetchHarvestActivityOkResponse = {
  description: 'OK',
  content: { 'application/octet-stream': { schema: HarvestActivityContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request',
          param: { required: false },
        }),
    },
  }),
}

const FetchHarvestActivityPartialResponse = {
  description: 'Partial Result',
  content: { 'application/octet-stream': { schema: HarvestActivityContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchOperationsOkResponse = {
  description: 'Returns the requested operations.',
  content: { 'application/json': { schema: OperationsSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false } }),
    },
  }),
}

const FetchPlantingActivitiesOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: PlantingActivitiesSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to poll for updates.',
      schema: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to poll for updates.', param: { required: false } }),
    },
  }),
}

const FetchPlantingActivitiesPartialResponse = {
  description: 'Partial Result',
  content: { 'application/json': { schema: PlantingActivitiesSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to fetch next batch of results.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Token used to fetch next batch of results.',
          param: { required: false },
        }),
    },
  }),
}

const FetchPlantingActivityOkResponse = {
  description: 'OK',
  content: { 'application/octet-stream': { schema: PlantingActivityContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request',
          param: { required: false },
        }),
    },
  }),
}

const FetchPlantingActivityPartialResponse = {
  description: 'Partial Result',
  content: { 'application/octet-stream': { schema: PlantingActivityContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchResourceOwnerOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: ResourceOwnerSchema } },
}

const FetchScoutingObservationAttachmentContentsOkResponse = {
  description: 'OK',
  content: {
    'image/jpeg': { schema: ScoutingObservationAttachmentContentsSchema },
    'image/png': { schema: ScoutingObservationAttachmentContentsSchema },
  },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request',
          param: { required: false },
        }),
    },
  }),
}

const FetchScoutingObservationAttachmentContentsPartialResponse = {
  description: 'Partial Result',
  content: { 'image/jpeg': { schema: ScoutingObservationAttachmentContentsSchema } },
  headers: z.object({
    'Content-Range': {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
          param: { required: false },
        }),
    },
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const FetchScoutingObservationAttachmentsOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: ScoutingObservationAttachmentsSchema } },
}

const FetchScoutingObservationAttachmentsPartialResponse = {
  description: 'Partial Result',
  content: { 'application/json': { schema: ScoutingObservationAttachmentsSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to fetch next batch of results.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Token used to fetch next batch of results.',
          param: { required: false },
        }),
    },
  }),
}

const FetchScoutingObservationByIdOkResponse = {
  description: 'Returns the requested scouting observation.',
  content: { 'application/json': { schema: ScoutingObservationSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false } }),
    },
  }),
}

const FetchScoutingObservationsOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: ScoutingObservationsSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to poll for updates.',
      schema: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to poll for updates.', param: { required: false } }),
    },
  }),
}

const FetchScoutingObservationsPartialResponse = {
  description: 'Partial Result',
  content: { 'application/json': { schema: ScoutingObservationsSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
    'X-Next-Token': {
      description: 'Token used to fetch next batch of results.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Token used to fetch next batch of results.',
          param: { required: false },
        }),
    },
  }),
}

const FetchUploadStatusByIdOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: UploadStatusSchema } },
}

const FetchUploadStatusesOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: UploadStatusesSchema } },
}

const HealthzOkResponse = {
  description: '200 response',
  content: { 'application/json': { schema: EmptySchema } },
}

const PostExportOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: CreatedExportSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const PostUploadOkResponse = {
  description: 'Returns a new upload with ID used to PUT file contents.',
  content: { 'application/json': { schema: CreatedUploadSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false } }),
    },
  }),
}

const ReportConflictResponse = {
  description: 'Conflict (Report generation is still in progress)',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const ReportGoneResponse = {
  description: 'Gone (Report is expired)',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'X-Http-Request-Id': {
      description: 'Unique identifier assigned to the request.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Unique identifier assigned to the request.',
          param: { required: false },
        }),
    },
  }),
}

const UploadBoundaryOkResponse = {
  description: 'OK',
  content: { 'application/json': { schema: UploadedBoundaryIdSchema } },
}

const AcceptParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Must be either \\*/* or application/octet-stream,application/json',
      in: 'header',
      name: 'Accept',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApplicationActivityIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the Application Activity.',
      in: 'path',
      name: 'activityId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const BinaryContentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Must be `application/octet-stream`',
      in: 'header',
      name: 'Content-Type',
      required: true,
      schema: { type: 'string' },
    },
  })

const BoundaryIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the Boundary',
      in: 'path',
      name: 'boundaryId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ContentRangeParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).',
      in: 'header',
      name: 'Content-Range',
      required: true,
      schema: { type: 'string' },
    },
  })

const ExportIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of an Export.',
      in: 'path',
      name: 'exportId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const FarmOrganizationIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the farm organization.',
      in: 'path',
      name: 'farmOrganizationId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const FarmOrganizationTypeParamsSchema = z
  .literal('farm')
  .openapi({
    param: {
      description: 'Type of the farm organization.',
      in: 'path',
      name: 'farmOrganizationType',
      required: true,
      schema: { enum: ['farm'], type: 'string' },
    },
  })

const FieldIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the Field.',
      in: 'path',
      name: 'fieldId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const HarvestActivityIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the Harvest Activity.',
      in: 'path',
      name: 'activityId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const OccurredAfterParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.',
      in: 'query',
      name: 'occurredAfter',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const OccurredBeforeParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.',
      in: 'query',
      name: 'occurredBefore',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const OptionalFieldNamePrefixParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Optional prefix filter for field name. Must be at least 3 characters.',
      in: 'query',
      name: 'fieldName',
      required: false,
      schema: { type: 'string' },
    },
  })

const OptionalResourceOwnerIdParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.',
      in: 'query',
      name: 'resourceOwnerId',
      required: false,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const OptionalResourceOwnerIdListParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Optional comma-separated list of resource owner unique identifiers by which to filter results.',
      in: 'query',
      name: 'resourceOwnerId',
      required: false,
      schema: { type: 'string' },
    },
  })

const PlantingActivityIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the Planting Activity.',
      in: 'path',
      name: 'activityId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const RangeParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.',
      in: 'header',
      name: 'Range',
      required: true,
      schema: { type: 'string' },
    },
  })

const ResourceOwnerIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the resource owner.',
      in: 'path',
      name: 'resourceOwnerId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ScoutingObservationAttachmentIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the attachment.',
      in: 'path',
      name: 'attachmentId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ScoutingObservationIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of the Scouting Observation.',
      in: 'path',
      name: 'scoutingObservationId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const UpdatedAfterParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.',
      in: 'query',
      name: 'updatedAfter',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const UploadIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier of an Upload.',
      in: 'path',
      name: 'uploadId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const XLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.',
      in: 'header',
      name: 'X-Limit',
      required: false,
      schema: { format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
    },
  })

const XNextTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.',
      in: 'header',
      name: 'X-Next-Token',
      required: false,
      schema: { type: 'string' },
    },
  })

const XRecipientEmailParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Email address associated with a Climate account, used when to sending to another user.',
      in: 'header',
      name: 'X-Recipient-Email',
      required: false,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'API access key used to control throttling (429 responses).  This key is typically formatted:\n`partner-{name}-{uuid}`',
  in: 'header',
  name: 'X-Api-Key',
  type: 'apiKey',
}

const Oauth2AuthorizationCodeSecurityScheme = {
  description:
    'Log in with FieldView OAuth2 provider (Authorization Code Grant). Used to authorize the client (partner) and\nuser. The *access_token* is required to be provided in the `Authorization` header on all calls to the FieldView\nAPIs with the following format `Bearer $access_token`.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://climate.com/static/app-login/',
      scopes: {
        'asApplied:read': 'Required for retrieving as applied data',
        'asApplied:write': 'Required for uploading application data',
        'asHarvested:read': 'Required for retrieving harvest data',
        'asHarvested:write': 'Required for uploading harvest data',
        'asPlanted:read': 'Required for retrieving planting data',
        'asPlanted:write': 'Required for uploading planting data',
        'avroAgronomicData:read': 'Required for retrieving agronomic data',
        'boundaries:write': '*Originally missing*',
        'customerInsights:read': 'Required for retrieving customer insights metrics data',
        'diagnostics:read': 'Required for retrieving CNH machine diagnostic data',
        'exports:read': 'Required for requesting or retrieving exports',
        'farmOrganizations:read': 'Required for retrieving farm organization information',
        'fields:read': 'Required for retrieving field and boundary information',
        'fields:write': 'Required for uploading field boundaries',
        'imagery:write': 'Required for uploading imagery',
        'operations:read': 'Required for retrieving operation information',
        'plantingActivitySummary:read': 'Required for retrieving planting activity summary data',
        platform: '(DEPRECATED) Legacy scope used for some Platform APIs',
        'resourceOwners:read': 'Required for retrieving resource owner information',
        'rx:write': 'Required for uploading prescriptions',
        'scouting:read': "Required for retrieving user\\'s scouting information",
        'soil:write': 'Required for uploading soil sample results',
        'standCount:write': '*Originally missing*',
        'weedCount:write': '*Originally missing*',
      },
      tokenUrl: 'https://api.climate.com/api/oauth/token',
    },
  },
  type: 'oauth2',
}

export const postV4BoundariesRoute = createRoute({
  method: 'post',
  path: '/v4/boundaries',
  tags: ['Boundaries'],
  summary: 'Upload a boundary',
  description:
    'Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.\nThis is restricted to callers with **boundaries:write** scope.\nTo upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.',
  operationId: 'uploadBoundary',
  request: { body: { content: { 'application/json': { schema: BoundaryUploadSchema } } } },
  responses: {
    200: UploadBoundaryOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['boundaries:write'] }],
})

export const postV4BoundariesQueryRoute = createRoute({
  method: 'post',
  path: '/v4/boundaries/query',
  tags: ['Boundaries'],
  summary: 'Retrieve Boundaries in batch',
  description: 'Retrieve multiple **Boundaries** (up to 10 per request).',
  operationId: 'fetchBoundaries',
  request: { body: { content: { 'application/json': { schema: BoundariesQuerySchema } } } },
  responses: {
    200: FetchBoundariesOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['fields:read'] }],
})

export const getV4BoundariesBoundaryIdRoute = createRoute({
  method: 'get',
  path: '/v4/boundaries/{boundaryId}',
  tags: ['Boundaries'],
  summary: 'Retrieve a Boundary by ID',
  description: 'Retrieve a **Boundary** by ID.',
  operationId: 'fetchBoundaryById',
  request: { params: z.object({ boundaryId: BoundaryIdParamsSchema }) },
  responses: {
    200: FetchBoundaryByIdOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'fields:read'] }],
})

export const postV4ExportsRoute = createRoute({
  method: 'post',
  path: '/v4/exports',
  tags: ['Exports'],
  summary: 'Initiate a new export request.',
  description:
    'Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.\nThe following `contentTypes` may be requested:\n  * __application/vnd.climate.acrsi.geojson__ (Beta)\n     Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner\n     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).\n\n     The export request definition must contain the following properties:\n       * plantingStartDate\n       * plantingEndDate\n       * resourceOwnerId\n\n     Requires `exports:read` and `plantingActivitySummary:read` scope.\n  \n  * __application/vnd.climate.harvest.geojson__\n     Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner\n     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).\n\n     The export request definition must contain the following properties:\n       * harvestStartDate\n       * harvestEndDate\n       * resourceOwnerId\n\n     Requires `exports:read` and `plantingActivitySummary:read` scope.',
  operationId: 'postExport',
  request: { body: { content: { 'application/json': { schema: ExportSchema } } } },
  responses: {
    201: PostExportOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['exports:read'] }],
})

export const getV4ExportsExportIdContentsRoute = createRoute({
  method: 'get',
  path: '/v4/exports/{exportId}/contents',
  tags: ['Exports'],
  summary: 'Retrieve the binary contents of a processed export request.',
  description:
    'Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).',
  operationId: 'fetchExportContentsById',
  request: {
    headers: z.object({ Accept: AcceptParamsSchema, Range: RangeParamsSchema }),
    params: z.object({ exportId: ExportIdParamsSchema }),
  },
  responses: {
    204: _204Response,
    206: FetchExportContentsByIdPartialResponse,
    304: _304Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: ReportConflictResponse,
    410: ReportGoneResponse,
    416: _416Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['exports:read'] }],
})

export const getV4ExportsExportIdStatusRoute = createRoute({
  method: 'get',
  path: '/v4/exports/{exportId}/status',
  tags: ['Exports'],
  summary: 'Retrieve the status of an Export.',
  description: 'Check the status of an **Export** by ID.',
  operationId: 'fetchExportStatusById',
  request: { params: z.object({ exportId: ExportIdParamsSchema }) },
  responses: {
    200: FetchExportStatusByIdOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['exports:read'] }],
})

export const getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/v4/farmOrganizations/{farmOrganizationType}/{farmOrganizationId}',
  tags: ['FarmOrganizations'],
  summary: 'Retrieve a specific farm organization by organization type and ID',
  description: 'Retrieve a given **farm organization** by organization type and ID.',
  operationId: 'fetchFarmOrganizationByTypeAndId',
  request: {
    params: z.object({
      farmOrganizationType: FarmOrganizationTypeParamsSchema,
      farmOrganizationId: FarmOrganizationIdParamsSchema,
    }),
  },
  responses: {
    200: FetchFarmOrganizationByTypeAndIdOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['farmOrganizations:read'] }],
})

export const getV4FieldsRoute = createRoute({
  method: 'get',
  path: '/v4/fields',
  tags: ['Fields'],
  summary: 'Retrieve list of Fields',
  description:
    'Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.',
  operationId: 'fetchFields',
  request: {
    headers: z.object({ 'X-Next-Token': XNextTokenParamsSchema, 'X-Limit': XLimitParamsSchema }),
    query: z.object({ fieldName: OptionalFieldNamePrefixParamsSchema }),
  },
  responses: {
    200: FetchFieldsOkResponse,
    206: FetchFieldsPartialResponse,
    304: _304Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'fields:read'] }],
})

export const getV4FieldsAllRoute = createRoute({
  method: 'get',
  path: '/v4/fields/all',
  tags: ['Fields'],
  summary: 'Retrieve list of all Fields the user has access to.',
  description:
    'Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.\nA 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.',
  operationId: 'fetchAllFields',
  request: {
    headers: z.object({ 'X-Next-Token': XNextTokenParamsSchema, 'X-Limit': XLimitParamsSchema }),
    query: z.object({ fieldName: OptionalFieldNamePrefixParamsSchema }),
  },
  responses: {
    200: FetchFieldsOkResponse,
    206: FetchFieldsPartialResponse,
    304: _304Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'fields:read'] }],
})

export const getV4FieldsFieldIdRoute = createRoute({
  method: 'get',
  path: '/v4/fields/{fieldId}',
  tags: ['Fields'],
  summary: 'Retrieve a specific Field by ID',
  description: 'Retrieve a given **Field** by ID.',
  operationId: 'fetchFieldById',
  request: { params: z.object({ fieldId: FieldIdParamsSchema }) },
  responses: {
    200: FetchFieldByIdOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'fields:read'] }],
})

export const getV4LayersAsAppliedRoute = createRoute({
  method: 'get',
  path: '/v4/layers/asApplied',
  tags: ['Layers'],
  summary: 'Retrieve a list of application activities',
  description:
    'Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.',
  request: {
    headers: z.object({
      Accept: AcceptParamsSchema,
      'X-Next-Token': XNextTokenParamsSchema,
      'X-Limit': XLimitParamsSchema,
    }),
    query: z.object({
      resourceOwnerId: OptionalResourceOwnerIdParamsSchema,
      occurredAfter: OccurredAfterParamsSchema,
      occurredBefore: OccurredBeforeParamsSchema,
      updatedAfter: UpdatedAfterParamsSchema,
    }),
  },
  responses: {
    200: FetchApplicationActivitiesOkResponse,
    206: FetchApplicationActivitiesPartialResponse,
    304: _304Response,
    400: _400Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'asApplied:read'] }],
})

export const getV4LayersAsAppliedActivityIdContentsRoute = createRoute({
  method: 'get',
  path: '/v4/layers/asApplied/{activityId}/contents',
  tags: ['Layers'],
  summary: 'Retrieve the raw application activity',
  description:
    'Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.',
  request: {
    headers: z.object({ Accept: AcceptParamsSchema, Range: RangeParamsSchema }),
    params: z.object({ activityId: ApplicationActivityIdParamsSchema }),
  },
  responses: {
    200: FetchApplicationActivityOkResponse,
    206: FetchApplicationActivityPartialResponse,
    304: _304Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    416: _416Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['asApplied:read'] }],
})

export const getV4LayersAsHarvestedRoute = createRoute({
  method: 'get',
  path: '/v4/layers/asHarvested',
  tags: ['Layers'],
  summary: 'Retrieve a list of harvest activities',
  description:
    'Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.',
  request: {
    headers: z.object({
      Accept: AcceptParamsSchema,
      'X-Next-Token': XNextTokenParamsSchema,
      'X-Limit': XLimitParamsSchema,
    }),
    query: z.object({
      resourceOwnerId: OptionalResourceOwnerIdParamsSchema,
      occurredAfter: OccurredAfterParamsSchema,
      occurredBefore: OccurredBeforeParamsSchema,
      updatedAfter: UpdatedAfterParamsSchema,
    }),
  },
  responses: {
    200: FetchHarvestActivitiesOkResponse,
    206: FetchHarvestActivitiesPartialResponse,
    304: _304Response,
    400: _400Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'asHarvested:read'] }],
})

export const getV4LayersAsHarvestedActivityIdContentsRoute = createRoute({
  method: 'get',
  path: '/v4/layers/asHarvested/{activityId}/contents',
  tags: ['Layers'],
  summary: 'Retrieve the raw harvest activity',
  description:
    'Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.',
  request: {
    headers: z.object({ Accept: AcceptParamsSchema, Range: RangeParamsSchema }),
    params: z.object({ activityId: HarvestActivityIdParamsSchema }),
  },
  responses: {
    200: FetchHarvestActivityOkResponse,
    206: FetchHarvestActivityPartialResponse,
    304: _304Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    416: _416Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['asHarvested:read'] }],
})

export const getV4LayersAsPlantedRoute = createRoute({
  method: 'get',
  path: '/v4/layers/asPlanted',
  tags: ['Layers'],
  summary: 'Retrieve a list of planting activities',
  description:
    'Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.',
  request: {
    headers: z.object({
      Accept: AcceptParamsSchema,
      'X-Next-Token': XNextTokenParamsSchema,
      'X-Limit': XLimitParamsSchema,
    }),
    query: z.object({
      resourceOwnerId: OptionalResourceOwnerIdParamsSchema,
      occurredAfter: OccurredAfterParamsSchema,
      occurredBefore: OccurredBeforeParamsSchema,
      updatedAfter: UpdatedAfterParamsSchema,
    }),
  },
  responses: {
    200: FetchPlantingActivitiesOkResponse,
    206: FetchPlantingActivitiesPartialResponse,
    304: _304Response,
    400: _400Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'asPlanted:read'] }],
})

export const getV4LayersAsPlantedActivityIdContentsRoute = createRoute({
  method: 'get',
  path: '/v4/layers/asPlanted/{activityId}/contents',
  tags: ['Layers'],
  summary: 'Retrieve the raw planting activity',
  description:
    'Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.',
  request: {
    headers: z.object({ Accept: AcceptParamsSchema, Range: RangeParamsSchema }),
    params: z.object({ activityId: PlantingActivityIdParamsSchema }),
  },
  responses: {
    200: FetchPlantingActivityOkResponse,
    206: FetchPlantingActivityPartialResponse,
    304: _304Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    416: _416Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['asPlanted:read'] }],
})

export const getV4LayersScoutingObservationsRoute = createRoute({
  method: 'get',
  path: '/v4/layers/scoutingObservations',
  tags: ['Layers'],
  summary: 'Retrieve a list of scouting observations',
  description:
    'Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.',
  request: {
    headers: z.object({ 'X-Next-Token': XNextTokenParamsSchema, 'X-Limit': XLimitParamsSchema }),
    query: z.object({
      occurredAfter: OccurredAfterParamsSchema,
      occurredBefore: OccurredBeforeParamsSchema,
    }),
  },
  responses: {
    200: FetchScoutingObservationsOkResponse,
    206: FetchScoutingObservationsPartialResponse,
    304: _304Response,
    400: _400Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'scouting:read'] }],
})

export const getV4LayersScoutingObservationsScoutingObservationIdRoute = createRoute({
  method: 'get',
  path: '/v4/layers/scoutingObservations/{scoutingObservationId}',
  tags: ['Layers'],
  summary: 'Retrieve individual scouting observation',
  description:
    'Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.',
  request: { params: z.object({ scoutingObservationId: ScoutingObservationIdParamsSchema }) },
  responses: {
    200: FetchScoutingObservationByIdOkResponse,
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'scouting:read'] }],
})

export const getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/v4/layers/scoutingObservations/{scoutingObservationId}/attachments',
  tags: ['Layers'],
  summary: 'Retrieve attachments associated with a given scouting observation.',
  description:
    'Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.',
  request: {
    params: z.object({ scoutingObservationId: ScoutingObservationIdParamsSchema }),
    headers: z.object({ 'X-Next-Token': XNextTokenParamsSchema, 'X-Limit': XLimitParamsSchema }),
  },
  responses: {
    200: FetchScoutingObservationAttachmentsOkResponse,
    206: FetchScoutingObservationAttachmentsPartialResponse,
    304: _304Response,
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'scouting:read'] }],
})

export const getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRoute =
  createRoute({
    method: 'get',
    path: '/v4/layers/scoutingObservations/{scoutingObservationId}/attachments/{attachmentId}/contents',
    tags: ['Layers'],
    summary: 'Retrieve the binary contents of a scouting observation’s attachment.',
    description:
      'Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).',
    request: {
      headers: z.object({ Accept: AcceptParamsSchema, Range: RangeParamsSchema }),
      params: z.object({
        scoutingObservationId: ScoutingObservationIdParamsSchema,
        attachmentId: ScoutingObservationAttachmentIdParamsSchema,
      }),
    },
    responses: {
      200: FetchScoutingObservationAttachmentContentsOkResponse,
      206: FetchScoutingObservationAttachmentContentsPartialResponse,
      400: _400Response,
      401: _401Response,
      403: _403Response,
      404: _404Response,
      416: _416Response,
      500: _500Response,
      503: _503Response,
    },
    security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'scouting:read'] }],
  })

export const getV4OperationsAllRoute = createRoute({
  method: 'get',
  path: '/v4/operations/all',
  tags: ['Operations'],
  summary: 'Retrieve the operations accessible to a a given user.',
  description:
    'Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.',
  operationId: 'fetchOperations',
  request: { query: z.object({ resourceOwnerId: OptionalResourceOwnerIdListParamsSchema }) },
  responses: {
    200: FetchOperationsOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['operations:read'] }],
})

export const getV4ResourceOwnersResourceOwnerIdRoute = createRoute({
  method: 'get',
  path: '/v4/resourceOwners/{resourceOwnerId}',
  tags: ['ResourceOwners'],
  summary: 'Retrieve a resource owner by ID',
  description: 'Retrieve a resource owner for the given `resourceOwnerId`.',
  operationId: 'getResourceOwner',
  request: { params: z.object({ resourceOwnerId: ResourceOwnerIdParamsSchema }) },
  responses: {
    200: FetchResourceOwnerOkResponse,
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ api_key: [] }, { oauth2_authorization_code: ['platform', 'resourceOwners:read'] }],
})

export const postV4UploadsRoute = createRoute({
  method: 'post',
  path: '/v4/uploads',
  tags: ['Uploads'],
  summary: 'Initiate a new upload',
  description:
    "Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.\nThe following `contentTypes` may be uploaded:\n    <details><summary>__image/vnd.climate.thermal.geotiff__</summary>\n\n    Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.\n\n    The following metadata entries are required to be embedded in the geotiff:\n      * acquisitionStartDate - ISO8601 date\n      * acquisitionEndDate - ISO8601 date\n      * isCalibrated - boolean\n\n    The following metadata entries are optional:\n      * sourceId - uuid referencing the asset in the partner's system\n      * fieldId - uuid referencing a field in the Climate system\n      * boundaryId - uuid referencing a boundary in the Climate system\n      * brandId - uuid referencing a partner's branding in the Climate system\n      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.\n\n    Requires either imagery:write or platform scope.\n  </details>\n  <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>\n\n    Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.\n\n    The following metadata entries are required to be embedded in the geotiff:\n      * acquisitionStartDate - ISO8601 date\n      * acquisitionEndDate - ISO8601 date\n\n    The following metadata entries are optional:\n      * sourceId - uuid referencing the asset in the partner's system\n      * fieldId - uuid referencing a field in the Climate system\n      * boundaryId - uuid referencing a boundary in the Climate system\n      * brandId - uuid referencing a partner's branding in the Climate system\n      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.\n\n    Requires either imagery:write or platform scope.\n  </details>\n  <details><summary> __image/vnd.climate.rgb.geotiff__</summary>\n\n    Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.\n\n    The following metadata entries are required to be embedded in the geotiff:\n      * acquisitionStartDate - ISO8601 date\n      * acquisitionEndDate - ISO8601 date\n      * isCalibrated - boolean\n\n    The following metadata entries are optional:\n      * sourceId - uuid referencing the asset in the partner's system\n      * fieldId - uuid referencing a field in the Climate system\n      * boundaryId - uuid referencing a boundary in the Climate system\n      * brandId - uuid referencing a partner's branding in the Climate system\n      * reflectanceComputeMethod - either TOA or GROUND\n      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.\n\n    Requires either imagery:write or platform scope.\n  </details>\n  <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>\n\n    Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.\n\n    The following metadata entries are required to be embedded in the geotiff:\n      * acquisitionStartDate - ISO8601 date\n      * acquisitionEndDate - ISO8601 date\n      * isCalibrated - boolean\n\n    The following metadata entries are optional:\n      * sourceId - uuid referencing the asset in the partner's system\n      * fieldId - uuid referencing a field in the Climate system\n      * boundaryId - uuid referencing a boundary in the Climate system\n      * brandId - uuid referencing a partner's branding in the Climate system\n      * reflectanceComputeMethod - either TOA or GROUND\n      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.\n\n    Requires either imagery:write or platform scope.\n  </details>\n  <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>\n\n    Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.\n\n    The following metadata entries are required to be embedded in the geotiff:\n      * acquisitionStartDate - ISO8601 date\n      * acquisitionEndDate - ISO8601 date\n      * isCalibrated - boolean\n\n    The following metadata entries are optional:\n      * sourceId - uuid referencing the asset in the partner's system\n      * fieldId - uuid referencing a field in the Climate system\n      * boundaryId - uuid referencing a boundary in the Climate system\n      * brandId - uuid referencing a partner's branding in the Climate system\n      * reflectanceComputeMethod - either TOA or GROUND\n      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.\n\n    Requires either imagery:write or platform scope.\n  </details>\n  <details><summary> __application/vnd.climate.rx.planting.shp__</summary>\n\n    Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:\n      * .shp\n      * .shx\n      * .dbf\n\n    All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.\n\n    Requires either rx:write or platform scope.\n  </details>\n  <details><summary> __application/vnd.climate.prescription.zones.shp__</summary>\n\n    Allows for the upload of a zones prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:\n      * .shp\n      * .shx\n      * .dbf\n\n    All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.\n\n    The following metadata entries are required:\n      * fieldId - field identifier for prescription zones.\n    \n    Requires either rxZones:write or platform scope.\n  </details>\n  <details><summary> __application/vnd.climate.modus.xml__</summary>\n\n    Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.\n\n    The following elements are required to be present in the modus file.\n      * EventCode - Max length of 64 bytes\n      * EventDate - Must be in ISO8601\n      * SoilSample - Has a maxOccurs of 20k\n      * Depth - Has a maxOccurs of 50\n      * LabName - Must be non-empty.\n      * StartingDepth - 0 to 36 inclusive, default 0\n      * EndingDepth - 1 - 36 inclusive, default 1\n      * ColumnDepth\n      * DepthUnit - must be inches\n      * Geometry - point in wgs84\n    \n    Requires the soil:write scope.\n   </details>\n   <details><summary> __application/vnd.climate.stand-count.geojson__</summary>\n\n    Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).\n\n    Each feature in the collection must contain the following entry in its properties section:\n      * StandPPA - A count of the number of plants per acre:\n\n    Additionally, the type field of each feature's geometry field must be:\n      * Point\n\n    Requires `imagery:write` scope.\n   </details>\n   <details><summary> __application/vnd.climate.weed-count.geojson__</summary>\n\n    Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).\n\n    Each feature in the collection must contain the following entry in its properties section:\n      * StandPPA - A count of the number of plants per acre:\n\n    Additionally, the type field of each feature's geometry field must be:\n      * Point\n\n    Requires `imagery:write` scope.\n   </details>\n   <details><summary> __application/vnd.climate.as-applied.zip__</summary>\n\n    Allows for the upload of a valid application data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).\n\n    The following metadata entries are required:\n      * fileName - name of the file being uploaded.\n\n    The following metadata entries are optional:\n      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.\n\n    Requires `asApplied:write` scope.\n   </details>\n   <details><summary> __application/vnd.climate.as-planted.zip__</summary>\n\n    Allows for the upload of a valid planting data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).\n\n    The following metadata entries are required:\n      * fileName - name of the file being uploaded.\n\n    The following metadata entries are optional:\n      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.\n\n    Requires `asPlanted:write` scope.\n   </details>\n   <details><summary> __application/vnd.climate.as-harvested.zip__</summary>\n\n    Allows for the upload of a valid harvest data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).\n\n    The following metadata entries are required:\n      * fileName - name of the file being uploaded.\n\n    The following metadata entries are optional:\n      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.\n\n    Requires `asHarvested:write` scope.\n   </details>",
  operationId: 'postUpload',
  request: {
    headers: z.object({ 'X-Recipient-Email': XRecipientEmailParamsSchema }),
    body: { content: { 'application/json': { schema: UploadSchema } } },
  },
  responses: {
    201: PostUploadOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [
    { api_key: [] },
    {
      oauth2_authorization_code: [
        'platform',
        'fields:write',
        'imagery:write',
        'rx:write',
        'standCount:write',
        'weedCount:write',
        'asApplied:write',
        'asPlanted:write',
        'asHarvested:write',
      ],
    },
  ],
})

export const postV4UploadsStatusQueryRoute = createRoute({
  method: 'post',
  path: '/v4/uploads/status/query',
  tags: ['Uploads'],
  summary: 'Retrieve Upload statuses in batch',
  description: 'Check the status of multiple **Uploads** (up to 100 per request).',
  operationId: 'fetchUploadStatuses',
  request: { body: { content: { 'application/json': { schema: UploadStatusQuerySchema } } } },
  responses: {
    200: FetchUploadStatusesOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [
    { api_key: [] },
    {
      oauth2_authorization_code: [
        'platform',
        'fields:write',
        'imagery:write',
        'rx:write',
        'asApplied:write',
        'asPlanted:write',
        'asHarvested:write',
      ],
    },
  ],
})

export const putV4UploadsUploadIdRoute = createRoute({
  method: 'put',
  path: '/v4/uploads/{uploadId}',
  tags: ['Uploads'],
  summary: 'Chunked upload of data',
  description: 'Send chunked data for an **Upload**.',
  operationId: 'chunkedUpload',
  request: {
    headers: z.object({
      'Content-Range': ContentRangeParamsSchema,
      'Content-Type': BinaryContentTypeParamsSchema,
    }),
    params: z.object({ uploadId: UploadIdParamsSchema }),
  },
  responses: {
    204: _204Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [
    { api_key: [] },
    {
      oauth2_authorization_code: [
        'platform',
        'fields:write',
        'imagery:write',
        'rx:write',
        'soil:write',
        'asApplied:write',
        'asPlanted:write',
        'asHarvested:write',
      ],
    },
  ],
})

export const getV4UploadsUploadIdStatusRoute = createRoute({
  method: 'get',
  path: '/v4/uploads/{uploadId}/status',
  tags: ['Uploads'],
  summary: 'Retrieve Upload status',
  description: 'Check the status of an **Upload** by ID.',
  operationId: 'fetchUploadStatusById',
  request: { params: z.object({ uploadId: UploadIdParamsSchema }) },
  responses: {
    200: FetchUploadStatusByIdOkResponse,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [
    { api_key: [] },
    {
      oauth2_authorization_code: [
        'platform',
        'fields:write',
        'imagery:write',
        'rx:write',
        'asApplied:write',
        'asPlanted:write',
        'asHarvested:write',
      ],
    },
  ],
})
