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
} from './routes'
import {
  getV4BoundariesBoundaryIdRouteHandler,
  getV4ExportsExportIdContentsRouteHandler,
  getV4ExportsExportIdStatusRouteHandler,
  getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRouteHandler,
  getV4FieldsAllRouteHandler,
  getV4FieldsFieldIdRouteHandler,
  getV4FieldsRouteHandler,
  getV4LayersAsAppliedActivityIdContentsRouteHandler,
  getV4LayersAsAppliedRouteHandler,
  getV4LayersAsHarvestedActivityIdContentsRouteHandler,
  getV4LayersAsHarvestedRouteHandler,
  getV4LayersAsPlantedActivityIdContentsRouteHandler,
  getV4LayersAsPlantedRouteHandler,
  getV4LayersScoutingObservationsRouteHandler,
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRouteHandler,
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRouteHandler,
  getV4LayersScoutingObservationsScoutingObservationIdRouteHandler,
  getV4OperationsAllRouteHandler,
  getV4ResourceOwnersResourceOwnerIdRouteHandler,
  getV4UploadsUploadIdStatusRouteHandler,
  postV4BoundariesQueryRouteHandler,
  postV4BoundariesRouteHandler,
  postV4ExportsRouteHandler,
  postV4UploadsRouteHandler,
  postV4UploadsStatusQueryRouteHandler,
  putV4UploadsUploadIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV4BoundariesRoute, postV4BoundariesRouteHandler)
  .openapi(postV4BoundariesQueryRoute, postV4BoundariesQueryRouteHandler)
  .openapi(getV4BoundariesBoundaryIdRoute, getV4BoundariesBoundaryIdRouteHandler)
  .openapi(postV4ExportsRoute, postV4ExportsRouteHandler)
  .openapi(getV4ExportsExportIdContentsRoute, getV4ExportsExportIdContentsRouteHandler)
  .openapi(getV4ExportsExportIdStatusRoute, getV4ExportsExportIdStatusRouteHandler)
  .openapi(
    getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRoute,
    getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRouteHandler,
  )
  .openapi(getV4FieldsRoute, getV4FieldsRouteHandler)
  .openapi(getV4FieldsAllRoute, getV4FieldsAllRouteHandler)
  .openapi(getV4FieldsFieldIdRoute, getV4FieldsFieldIdRouteHandler)
  .openapi(getV4LayersAsAppliedRoute, getV4LayersAsAppliedRouteHandler)
  .openapi(
    getV4LayersAsAppliedActivityIdContentsRoute,
    getV4LayersAsAppliedActivityIdContentsRouteHandler,
  )
  .openapi(getV4LayersAsHarvestedRoute, getV4LayersAsHarvestedRouteHandler)
  .openapi(
    getV4LayersAsHarvestedActivityIdContentsRoute,
    getV4LayersAsHarvestedActivityIdContentsRouteHandler,
  )
  .openapi(getV4LayersAsPlantedRoute, getV4LayersAsPlantedRouteHandler)
  .openapi(
    getV4LayersAsPlantedActivityIdContentsRoute,
    getV4LayersAsPlantedActivityIdContentsRouteHandler,
  )
  .openapi(getV4LayersScoutingObservationsRoute, getV4LayersScoutingObservationsRouteHandler)
  .openapi(
    getV4LayersScoutingObservationsScoutingObservationIdRoute,
    getV4LayersScoutingObservationsScoutingObservationIdRouteHandler,
  )
  .openapi(
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRoute,
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRouteHandler,
  )
  .openapi(
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRoute,
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRouteHandler,
  )
  .openapi(getV4OperationsAllRoute, getV4OperationsAllRouteHandler)
  .openapi(getV4ResourceOwnersResourceOwnerIdRoute, getV4ResourceOwnersResourceOwnerIdRouteHandler)
  .openapi(postV4UploadsRoute, postV4UploadsRouteHandler)
  .openapi(postV4UploadsStatusQueryRoute, postV4UploadsStatusQueryRouteHandler)
  .openapi(putV4UploadsUploadIdRoute, putV4UploadsUploadIdRouteHandler)
  .openapi(getV4UploadsUploadIdStatusRoute, getV4UploadsUploadIdStatusRouteHandler)

export default app
