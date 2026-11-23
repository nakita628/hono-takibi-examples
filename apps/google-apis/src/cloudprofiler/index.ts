import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchV2NameRoute,
  postV2ParentProfilesCreateOfflineRoute,
  postV2ParentProfilesRoute,
} from './routes'
import {
  patchV2NameRouteHandler,
  postV2ParentProfilesCreateOfflineRouteHandler,
  postV2ParentProfilesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(postV2ParentProfilesRoute, postV2ParentProfilesRouteHandler)
  .openapi(postV2ParentProfilesCreateOfflineRoute, postV2ParentProfilesCreateOfflineRouteHandler)

export default app
