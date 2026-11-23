import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameAnswersDeleteRoute,
  deleteV1NameRoute,
  getV1ParentAnswersRoute,
  getV1ParentRoute,
  patchV1NameRoute,
  postV1ParentAnswersUpsertRoute,
  postV1ParentRoute,
} from './routes'
import {
  deleteV1NameAnswersDeleteRouteHandler,
  deleteV1NameRouteHandler,
  getV1ParentAnswersRouteHandler,
  getV1ParentRouteHandler,
  patchV1NameRouteHandler,
  postV1ParentAnswersUpsertRouteHandler,
  postV1ParentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(deleteV1NameAnswersDeleteRoute, deleteV1NameAnswersDeleteRouteHandler)
  .openapi(getV1ParentRoute, getV1ParentRouteHandler)
  .openapi(postV1ParentRoute, postV1ParentRouteHandler)
  .openapi(getV1ParentAnswersRoute, getV1ParentAnswersRouteHandler)
  .openapi(postV1ParentAnswersUpsertRoute, postV1ParentAnswersUpsertRouteHandler)

export default app
