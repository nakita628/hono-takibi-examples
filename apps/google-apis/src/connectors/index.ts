import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentActionsRoute,
  getV2ParentEntitiesRoute,
  getV2ParentEntityTypesRoute,
  patchV2NameRoute,
  postV2ConnectionExecuteSqlQueryRoute,
  postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute,
  postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute,
  postV2NameExecuteRoute,
  postV2ParentEntitiesRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameRouteHandler,
  getV2ParentActionsRouteHandler,
  getV2ParentEntitiesRouteHandler,
  getV2ParentEntityTypesRouteHandler,
  patchV2NameRouteHandler,
  postV2ConnectionExecuteSqlQueryRouteHandler,
  postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRouteHandler,
  postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRouteHandler,
  postV2NameExecuteRouteHandler,
  postV2ParentEntitiesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2ConnectionExecuteSqlQueryRoute, postV2ConnectionExecuteSqlQueryRouteHandler)
  .openapi(
    postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute,
    postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRouteHandler,
  )
  .openapi(
    postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute,
    postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRouteHandler,
  )
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(postV2NameExecuteRoute, postV2NameExecuteRouteHandler)
  .openapi(getV2ParentActionsRoute, getV2ParentActionsRouteHandler)
  .openapi(getV2ParentEntitiesRoute, getV2ParentEntitiesRouteHandler)
  .openapi(postV2ParentEntitiesRoute, postV2ParentEntitiesRouteHandler)
  .openapi(getV2ParentEntityTypesRoute, getV2ParentEntityTypesRouteHandler)

export default app
