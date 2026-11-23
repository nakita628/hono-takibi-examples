import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminMappingsRoute,
  deleteAdminMappingsStubMappingIdRoute,
  deleteAdminRequestsRequestIdRoute,
  deleteAdminRequestsRoute,
  getAdminMappingsRoute,
  getAdminMappingsStubMappingIdRoute,
  getAdminRecordingsStatusRoute,
  getAdminRequestsRequestIdRoute,
  getAdminRequestsRoute,
  getAdminRequestsUnmatchedNearMissesRoute,
  getAdminRequestsUnmatchedRoute,
  getAdminScenariosRoute,
  postAdminMappingsFindByMetadataRoute,
  postAdminMappingsImportRoute,
  postAdminMappingsRemoveByMetadataRoute,
  postAdminMappingsResetRoute,
  postAdminMappingsRoute,
  postAdminMappingsSaveRoute,
  postAdminNearMissesRequestPatternRoute,
  postAdminNearMissesRequestRoute,
  postAdminRecordingsSnapshotRoute,
  postAdminRecordingsStartRoute,
  postAdminRecordingsStopRoute,
  postAdminRequestsCountRoute,
  postAdminRequestsFindRoute,
  postAdminRequestsRemoveByMetadataRoute,
  postAdminRequestsRemoveRoute,
  postAdminRequestsResetRoute,
  postAdminResetRoute,
  postAdminScenariosResetRoute,
  postAdminSettingsRoute,
  postAdminShutdownRoute,
  putAdminMappingsStubMappingIdRoute,
} from './routes'
import {
  deleteAdminMappingsRouteHandler,
  deleteAdminMappingsStubMappingIdRouteHandler,
  deleteAdminRequestsRequestIdRouteHandler,
  deleteAdminRequestsRouteHandler,
  getAdminMappingsRouteHandler,
  getAdminMappingsStubMappingIdRouteHandler,
  getAdminRecordingsStatusRouteHandler,
  getAdminRequestsRequestIdRouteHandler,
  getAdminRequestsRouteHandler,
  getAdminRequestsUnmatchedNearMissesRouteHandler,
  getAdminRequestsUnmatchedRouteHandler,
  getAdminScenariosRouteHandler,
  postAdminMappingsFindByMetadataRouteHandler,
  postAdminMappingsImportRouteHandler,
  postAdminMappingsRemoveByMetadataRouteHandler,
  postAdminMappingsResetRouteHandler,
  postAdminMappingsRouteHandler,
  postAdminMappingsSaveRouteHandler,
  postAdminNearMissesRequestPatternRouteHandler,
  postAdminNearMissesRequestRouteHandler,
  postAdminRecordingsSnapshotRouteHandler,
  postAdminRecordingsStartRouteHandler,
  postAdminRecordingsStopRouteHandler,
  postAdminRequestsCountRouteHandler,
  postAdminRequestsFindRouteHandler,
  postAdminRequestsRemoveByMetadataRouteHandler,
  postAdminRequestsRemoveRouteHandler,
  postAdminRequestsResetRouteHandler,
  postAdminResetRouteHandler,
  postAdminScenariosResetRouteHandler,
  postAdminSettingsRouteHandler,
  postAdminShutdownRouteHandler,
  putAdminMappingsStubMappingIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAdminMappingsRoute, deleteAdminMappingsRouteHandler)
  .openapi(getAdminMappingsRoute, getAdminMappingsRouteHandler)
  .openapi(postAdminMappingsRoute, postAdminMappingsRouteHandler)
  .openapi(postAdminMappingsFindByMetadataRoute, postAdminMappingsFindByMetadataRouteHandler)
  .openapi(postAdminMappingsImportRoute, postAdminMappingsImportRouteHandler)
  .openapi(postAdminMappingsRemoveByMetadataRoute, postAdminMappingsRemoveByMetadataRouteHandler)
  .openapi(postAdminMappingsResetRoute, postAdminMappingsResetRouteHandler)
  .openapi(postAdminMappingsSaveRoute, postAdminMappingsSaveRouteHandler)
  .openapi(deleteAdminMappingsStubMappingIdRoute, deleteAdminMappingsStubMappingIdRouteHandler)
  .openapi(getAdminMappingsStubMappingIdRoute, getAdminMappingsStubMappingIdRouteHandler)
  .openapi(putAdminMappingsStubMappingIdRoute, putAdminMappingsStubMappingIdRouteHandler)
  .openapi(postAdminNearMissesRequestRoute, postAdminNearMissesRequestRouteHandler)
  .openapi(postAdminNearMissesRequestPatternRoute, postAdminNearMissesRequestPatternRouteHandler)
  .openapi(postAdminRecordingsSnapshotRoute, postAdminRecordingsSnapshotRouteHandler)
  .openapi(postAdminRecordingsStartRoute, postAdminRecordingsStartRouteHandler)
  .openapi(getAdminRecordingsStatusRoute, getAdminRecordingsStatusRouteHandler)
  .openapi(postAdminRecordingsStopRoute, postAdminRecordingsStopRouteHandler)
  .openapi(deleteAdminRequestsRoute, deleteAdminRequestsRouteHandler)
  .openapi(getAdminRequestsRoute, getAdminRequestsRouteHandler)
  .openapi(postAdminRequestsCountRoute, postAdminRequestsCountRouteHandler)
  .openapi(postAdminRequestsFindRoute, postAdminRequestsFindRouteHandler)
  .openapi(postAdminRequestsRemoveRoute, postAdminRequestsRemoveRouteHandler)
  .openapi(postAdminRequestsRemoveByMetadataRoute, postAdminRequestsRemoveByMetadataRouteHandler)
  .openapi(postAdminRequestsResetRoute, postAdminRequestsResetRouteHandler)
  .openapi(getAdminRequestsUnmatchedRoute, getAdminRequestsUnmatchedRouteHandler)
  .openapi(
    getAdminRequestsUnmatchedNearMissesRoute,
    getAdminRequestsUnmatchedNearMissesRouteHandler,
  )
  .openapi(deleteAdminRequestsRequestIdRoute, deleteAdminRequestsRequestIdRouteHandler)
  .openapi(getAdminRequestsRequestIdRoute, getAdminRequestsRequestIdRouteHandler)
  .openapi(postAdminResetRoute, postAdminResetRouteHandler)
  .openapi(getAdminScenariosRoute, getAdminScenariosRouteHandler)
  .openapi(postAdminScenariosResetRoute, postAdminScenariosResetRouteHandler)
  .openapi(postAdminSettingsRoute, postAdminSettingsRouteHandler)
  .openapi(postAdminShutdownRoute, postAdminShutdownRouteHandler)

export default app
