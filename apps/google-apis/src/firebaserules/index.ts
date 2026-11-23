import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameGetExecutableRoute,
  getV1NameReleasesRoute,
  getV1NameRoute,
  getV1NameRulesetsRoute,
  patchV1NameRoute,
  postV1NameReleasesRoute,
  postV1NameRulesetsRoute,
  postV1NameTestRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameGetExecutableRouteHandler,
  getV1NameReleasesRouteHandler,
  getV1NameRouteHandler,
  getV1NameRulesetsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameReleasesRouteHandler,
  postV1NameRulesetsRouteHandler,
  postV1NameTestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameReleasesRoute, getV1NameReleasesRouteHandler)
  .openapi(postV1NameReleasesRoute, postV1NameReleasesRouteHandler)
  .openapi(getV1NameRulesetsRoute, getV1NameRulesetsRouteHandler)
  .openapi(postV1NameRulesetsRoute, postV1NameRulesetsRouteHandler)
  .openapi(getV1NameGetExecutableRoute, getV1NameGetExecutableRouteHandler)
  .openapi(postV1NameTestRoute, postV1NameTestRouteHandler)

export default app
