import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameFetchStaticIpsRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentConnectionProfilesRoute,
  getV1ParentObjectsRoute,
  getV1ParentPrivateConnectionsRoute,
  getV1ParentRoutesRoute,
  getV1ParentStreamsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ObjectStartBackfillJobRoute,
  postV1ObjectStopBackfillJobRoute,
  postV1ParentConnectionProfilesDiscoverRoute,
  postV1ParentConnectionProfilesRoute,
  postV1ParentObjectsLookupRoute,
  postV1ParentPrivateConnectionsRoute,
  postV1ParentRoutesRoute,
  postV1ParentStreamsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameFetchStaticIpsRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentConnectionProfilesRouteHandler,
  getV1ParentObjectsRouteHandler,
  getV1ParentPrivateConnectionsRouteHandler,
  getV1ParentRoutesRouteHandler,
  getV1ParentStreamsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ObjectStartBackfillJobRouteHandler,
  postV1ObjectStopBackfillJobRouteHandler,
  postV1ParentConnectionProfilesDiscoverRouteHandler,
  postV1ParentConnectionProfilesRouteHandler,
  postV1ParentObjectsLookupRouteHandler,
  postV1ParentPrivateConnectionsRouteHandler,
  postV1ParentRoutesRouteHandler,
  postV1ParentStreamsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1NameFetchStaticIpsRoute, getV1NameFetchStaticIpsRouteHandler)
  .openapi(postV1ObjectStartBackfillJobRoute, postV1ObjectStartBackfillJobRouteHandler)
  .openapi(postV1ObjectStopBackfillJobRoute, postV1ObjectStopBackfillJobRouteHandler)
  .openapi(getV1ParentConnectionProfilesRoute, getV1ParentConnectionProfilesRouteHandler)
  .openapi(postV1ParentConnectionProfilesRoute, postV1ParentConnectionProfilesRouteHandler)
  .openapi(
    postV1ParentConnectionProfilesDiscoverRoute,
    postV1ParentConnectionProfilesDiscoverRouteHandler,
  )
  .openapi(getV1ParentObjectsRoute, getV1ParentObjectsRouteHandler)
  .openapi(postV1ParentObjectsLookupRoute, postV1ParentObjectsLookupRouteHandler)
  .openapi(getV1ParentPrivateConnectionsRoute, getV1ParentPrivateConnectionsRouteHandler)
  .openapi(postV1ParentPrivateConnectionsRoute, postV1ParentPrivateConnectionsRouteHandler)
  .openapi(getV1ParentRoutesRoute, getV1ParentRoutesRouteHandler)
  .openapi(postV1ParentRoutesRoute, postV1ParentRoutesRouteHandler)
  .openapi(getV1ParentStreamsRoute, getV1ParentStreamsRouteHandler)
  .openapi(postV1ParentStreamsRoute, postV1ParentStreamsRouteHandler)

export default app
