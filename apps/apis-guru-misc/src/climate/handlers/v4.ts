import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4BoundariesBoundaryIdRoute,
  getV4ExportsExportIdContentsRoute,
  getV4ExportsExportIdStatusRoute,
  getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRoute,
  getV4FieldsAllRoute,
  getV4FieldsFieldIdRoute,
  getV4FieldsRoute,
  getV4LayersAsAppliedActivityIdContentsRoute,
  getV4LayersAsAppliedRoute,
  getV4LayersAsHarvestedActivityIdContentsRoute,
  getV4LayersAsHarvestedRoute,
  getV4LayersAsPlantedActivityIdContentsRoute,
  getV4LayersAsPlantedRoute,
  getV4LayersScoutingObservationsRoute,
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRoute,
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRoute,
  getV4LayersScoutingObservationsScoutingObservationIdRoute,
  getV4OperationsAllRoute,
  getV4ResourceOwnersResourceOwnerIdRoute,
  getV4UploadsUploadIdStatusRoute,
  postV4BoundariesQueryRoute,
  postV4BoundariesRoute,
  postV4ExportsRoute,
  postV4UploadsRoute,
  postV4UploadsStatusQueryRoute,
  putV4UploadsUploadIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(postV4BoundariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4BoundariesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4BoundariesBoundaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ExportsExportIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ExportsExportIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4FieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4FieldsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4FieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsAppliedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsAppliedActivityIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsHarvestedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsHarvestedActivityIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsPlantedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsPlantedActivityIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersScoutingObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersScoutingObservationsScoutingObservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4OperationsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ResourceOwnersResourceOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UploadsStatusQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UploadsUploadIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
