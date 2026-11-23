type Geometry = { coordinates: string[]; type: 'Point' | 'Polygon' | 'MultiPolygon' }
type BoundaryUpload = { geometry: Geometry }
type UploadedBoundaryId = { id: string }
type Error = { error?: { code: string; id: string; message: string } | undefined }
type BoundariesQuery = { ids: string[] }
type Area = { q: number; u: string }
type Point = { coordinates: number[]; type: string }
type BoundaryProperties = { area: Area; centroid: Point }
type Boundary = { geometry: Geometry; id: string; properties: BoundaryProperties; type: 'Feature' }
type Boundaries = { features: Boundary[]; type: 'FeatureCollection' }
type Export = {
  contentType: 'application/vnd.climate.acrsi.geojson' | 'application/vnd.climate.harvest.geojson'
  definition?: { [x: string]: unknown } | undefined
}
type CreatedExport = { id: string }
type BinaryData = File
type ExportContents = { body: BinaryData }
type Empty = { [x: string]: unknown }
type ExportStatus = {
  checksum?: string | undefined
  error?: string | undefined
  size?: bigint | undefined
  status: 'PROCESSING' | 'INVALID' | 'EXPIRED' | 'COMPLETED' | 'NO_DATA'
  xNextToken?: string | undefined
}
type FarmOrganization = { id: string; name: string; type: 'farm' }
type Parent = { id: string; type: 'farm' }
type Field = {
  boundaryId: string
  id: string
  name: string
  parent: Parent
  resourceOwnerId: string
}
type Fields = { results: Field[] }
type ApplicationActivitySummary = {
  createdAt: string
  endTime: string
  fieldIds: string[]
  id: string
  length: bigint
  startTime: string
  updatedAt: string
}
type ApplicationActivities = { results: ApplicationActivitySummary[] }
type ApplicationActivityContents = { body: BinaryData }
type HarvestActivitySummary = {
  createdAt: string
  endTime: string
  fieldIds: string[]
  id: string
  length: bigint
  startTime: string
  updatedAt: string
}
type HarvestActivities = { results: HarvestActivitySummary[] }
type HarvestActivityContents = { body: BinaryData }
type PlantingActivitySummary = {
  createdAt: string
  endTime: string
  fieldIds: string[]
  id: string
  length: bigint
  startTime: string
  updatedAt: string
}
type PlantingActivities = { results: PlantingActivitySummary[] }
type PlantingActivityContents = { body: BinaryData }
type ScoutingObservationSummary = {
  endTime: string
  id: string
  startTime: string
  updatedAt: string
}
type ScoutingObservations = { results: ScoutingObservationSummary[] }
type ScoutingTag = { code: string }
type ScoutingObservation = {
  endTime: string
  fieldIds: string[]
  id: string
  location: Geometry
  locationDisplayColor:
    | '#307af7'
    | '#38d753'
    | '#b037e4'
    | '#ef3e3e'
    | '#f7ec41'
    | '#ff8439'
    | '#808080'
  note: string
  startTime: string
  status: 'ACTIVE' | 'DELETED'
  tags: ScoutingTag[]
  timespan: 'PERMANENT' | 'SEASONAL'
  title: string
  updatedAt: string
}
type ScoutingObservationAttachment = {
  contentType: string
  id: string
  length: bigint
  status: 'ACTIVE' | 'DELETED'
  updatedAt: string
}
type ScoutingObservationAttachments = { results: ScoutingObservationAttachment[] }
type ScoutingObservationAttachmentContents = { body: BinaryData }
type Operation = { id: string; name: string; resourceOwnerId: string }
type Operations = { results: Operation[] }
type ResourceOwner = { email: string; id: string; name: string }
type Metadata = { [x: string]: unknown }
type Upload = {
  contentType:
    | 'image/vnd.climate.thermal.geotiff'
    | 'image/vnd.climate.ndvi.geotiff'
    | 'image/vnd.climate.rgb.geotiff'
    | 'image/vnd.climate.rgb-nir.geotiff'
    | 'image/vnd.climate.rgb-cir.geotiff'
    | 'image/vnd.climate.waterstress.geotiff'
    | 'image/vnd.climate.elevation.geotiff'
    | 'image/vnd.climate.raw.geotiff'
    | 'application/vnd.climate.field.geojson'
    | 'application/vnd.climate.rx.planting.shp'
    | 'application/vnd.climate.prescription.zones.shp'
    | 'application/vnd.climate.modus.xml'
    | 'application/vnd.climate.stand-count.geojson'
    | 'application/vnd.climate.weed-count.geojson'
    | 'application/vnd.climate.as-applied.zip'
    | 'application/vnd.climate.as-planted.zip'
    | 'application/vnd.climate.as-harvested.zip'
  length: bigint
  md5: string
  metadata?: Metadata | undefined
}
type CreatedUpload = string
type UploadStatusQuery = { ids: string[] }
type UploadStatus = {
  id: string
  status: 'UPLOADING' | 'INVALID' | 'PENDING' | 'INBOX' | 'DECLINED' | 'IMPORTING' | 'SUCCESS'
}
type UploadStatuses = { results: UploadStatus[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v4/boundaries': {
      $post:
        | {
            input: { json: BoundaryUpload }
            output: UploadedBoundaryId
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: BoundaryUpload }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v4/boundaries/query': {
      $post:
        | {
            input: { json: BoundariesQuery }
            output: Boundaries
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: BoundariesQuery }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v4/boundaries/:boundaryId': {
      $get:
        | {
            input: { param: { boundaryId: string } }
            output: Boundary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { boundaryId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/exports': {
      $post:
        | { input: { json: Export }; output: CreatedExport; outputFormat: 'json'; status: 201 }
        | { input: { json: Export }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Export }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Export }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: Export }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: Export }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: Export }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v4/exports/:exportId/contents': {
      $get:
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: ExportContents
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 416
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { exportId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/exports/:exportId/status': {
      $get:
        | {
            input: { param: { exportId: string } }
            output: ExportStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/farmOrganizations/:farmOrganizationType/:farmOrganizationId': {
      $get:
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: FarmOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { farmOrganizationType: 'farm'; farmOrganizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/fields': {
      $get:
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Fields
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Fields
            outputFormat: 'json'
            status: 206
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/fields/all': {
      $get:
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Fields
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Fields
            outputFormat: 'json'
            status: 206
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { fieldName?: string | undefined } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/fields/:fieldId': {
      $get:
        | {
            input: { param: { fieldId: string } }
            output: Field
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { fieldId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/layers/asApplied': {
      $get:
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: ApplicationActivities
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: ApplicationActivities
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v4/layers/asApplied/:activityId/contents': {
      $get:
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: ApplicationActivityContents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: ApplicationActivityContents
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 416
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/layers/asHarvested': {
      $get:
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: HarvestActivities
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: HarvestActivities
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v4/layers/asHarvested/:activityId/contents': {
      $get:
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: HarvestActivityContents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: HarvestActivityContents
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 416
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/layers/asPlanted': {
      $get:
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: PlantingActivities
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: PlantingActivities
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: {
              query: {
                resourceOwnerId?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                updatedAfter?: string | undefined
              }
            } & {
              header: {
                Accept: string
                'X-Next-Token'?: string | undefined
                'X-Limit'?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v4/layers/asPlanted/:activityId/contents': {
      $get:
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: PlantingActivityContents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: PlantingActivityContents
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 416
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { activityId: string } } & { header: { Accept: string; Range: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/layers/scoutingObservations': {
      $get:
        | {
            input: {
              query: { occurredAfter?: string | undefined; occurredBefore?: string | undefined }
            } & { header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined } }
            output: ScoutingObservations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { occurredAfter?: string | undefined; occurredBefore?: string | undefined }
            } & { header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined } }
            output: ScoutingObservations
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: { occurredAfter?: string | undefined; occurredBefore?: string | undefined }
            } & { header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined } }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: {
              query: { occurredAfter?: string | undefined; occurredBefore?: string | undefined }
            } & { header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v4/layers/scoutingObservations/:scoutingObservationId': {
      $get:
        | {
            input: { param: { scoutingObservationId: string } }
            output: ScoutingObservation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scoutingObservationId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scoutingObservationId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scoutingObservationId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments': {
      $get:
        | {
            input: { param: { scoutingObservationId: string } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: ScoutingObservationAttachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scoutingObservationId: string } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: ScoutingObservationAttachments
            outputFormat: 'json'
            status: 206
          }
        | {
            input: { param: { scoutingObservationId: string } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Empty
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { scoutingObservationId: string } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scoutingObservationId: string } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scoutingObservationId: string } } & {
              header: { 'X-Next-Token'?: string | undefined; 'X-Limit'?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments/:attachmentId/contents': {
      $get:
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: ScoutingObservationAttachmentContents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: ScoutingObservationAttachmentContents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: ScoutingObservationAttachmentContents
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 416
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { scoutingObservationId: string; attachmentId: string } } & {
              header: { Accept: string; Range: string }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/operations/all': {
      $get:
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Operations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { resourceOwnerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/resourceOwners/:resourceOwnerId': {
      $get:
        | {
            input: { param: { resourceOwnerId: string } }
            output: ResourceOwner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceOwnerId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceOwnerId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resourceOwnerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v4/uploads': {
      $post:
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: CreatedUpload
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Recipient-Email'?: string | undefined } } & { json: Upload }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/uploads/status/query': {
      $post:
        | {
            input: { json: UploadStatusQuery }
            output: UploadStatuses
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: UploadStatusQuery }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v4/uploads/:uploadId': {
      $put:
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { uploadId: string } } & {
              header: { 'Content-Range': string; 'Content-Type': string }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v4/uploads/:uploadId/status': {
      $get:
        | {
            input: { param: { uploadId: string } }
            output: UploadStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { uploadId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
