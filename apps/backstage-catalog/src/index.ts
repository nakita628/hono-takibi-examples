import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEntitiesByUidUidRoute,
  deleteLocationsIdRoute,
  getEntitiesByNameKindNamespaceNameAncestryRoute,
  getEntitiesByNameKindNamespaceNameRoute,
  getEntitiesByQueryRoute,
  getEntitiesByUidUidRoute,
  getEntitiesRoute,
  getEntityFacetsRoute,
  getLocationsByEntityKindNamespaceNameRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  postAnalyzeLocationRoute,
  postEntitiesByQueryRoute,
  postEntitiesByRefsRoute,
  postEntityFacetsRoute,
  postLocationsByQueryRoute,
  postLocationsRoute,
  postRefreshRoute,
  postValidateEntityRoute,
  putLocationsIdRoute,
} from './routes'
import {
  deleteEntitiesByUidUidRouteHandler,
  deleteLocationsIdRouteHandler,
  getEntitiesByNameKindNamespaceNameAncestryRouteHandler,
  getEntitiesByNameKindNamespaceNameRouteHandler,
  getEntitiesByQueryRouteHandler,
  getEntitiesByUidUidRouteHandler,
  getEntitiesRouteHandler,
  getEntityFacetsRouteHandler,
  getLocationsByEntityKindNamespaceNameRouteHandler,
  getLocationsIdRouteHandler,
  getLocationsRouteHandler,
  postAnalyzeLocationRouteHandler,
  postEntitiesByQueryRouteHandler,
  postEntitiesByRefsRouteHandler,
  postEntityFacetsRouteHandler,
  postLocationsByQueryRouteHandler,
  postLocationsRouteHandler,
  postRefreshRouteHandler,
  postValidateEntityRouteHandler,
  putLocationsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRefreshRoute, postRefreshRouteHandler)
  .openapi(getEntitiesRoute, getEntitiesRouteHandler)
  .openapi(getEntitiesByUidUidRoute, getEntitiesByUidUidRouteHandler)
  .openapi(deleteEntitiesByUidUidRoute, deleteEntitiesByUidUidRouteHandler)
  .openapi(getEntitiesByNameKindNamespaceNameRoute, getEntitiesByNameKindNamespaceNameRouteHandler)
  .openapi(
    getEntitiesByNameKindNamespaceNameAncestryRoute,
    getEntitiesByNameKindNamespaceNameAncestryRouteHandler,
  )
  .openapi(postEntitiesByRefsRoute, postEntitiesByRefsRouteHandler)
  .openapi(getEntitiesByQueryRoute, getEntitiesByQueryRouteHandler)
  .openapi(postEntitiesByQueryRoute, postEntitiesByQueryRouteHandler)
  .openapi(getEntityFacetsRoute, getEntityFacetsRouteHandler)
  .openapi(postEntityFacetsRoute, postEntityFacetsRouteHandler)
  .openapi(postLocationsRoute, postLocationsRouteHandler)
  .openapi(getLocationsRoute, getLocationsRouteHandler)
  .openapi(postLocationsByQueryRoute, postLocationsByQueryRouteHandler)
  .openapi(getLocationsIdRoute, getLocationsIdRouteHandler)
  .openapi(putLocationsIdRoute, putLocationsIdRouteHandler)
  .openapi(deleteLocationsIdRoute, deleteLocationsIdRouteHandler)
  .openapi(
    getLocationsByEntityKindNamespaceNameRoute,
    getLocationsByEntityKindNamespaceNameRouteHandler,
  )
  .openapi(postAnalyzeLocationRoute, postAnalyzeLocationRouteHandler)
  .openapi(postValidateEntityRoute, postValidateEntityRouteHandler)

export default app
