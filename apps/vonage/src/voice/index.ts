import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUuidStreamRoute,
  deleteUuidTalkRoute,
  getRoute,
  getUuidRoute,
  postRoute,
  putUuidDtmfRoute,
  putUuidRoute,
  putUuidStreamRoute,
  putUuidTalkRoute,
} from './routes'
import {
  deleteUuidStreamRouteHandler,
  deleteUuidTalkRouteHandler,
  getRouteHandler,
  getUuidRouteHandler,
  postRouteHandler,
  putUuidDtmfRouteHandler,
  putUuidRouteHandler,
  putUuidStreamRouteHandler,
  putUuidTalkRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(getUuidRoute, getUuidRouteHandler)
  .openapi(putUuidRoute, putUuidRouteHandler)
  .openapi(putUuidDtmfRoute, putUuidDtmfRouteHandler)
  .openapi(deleteUuidStreamRoute, deleteUuidStreamRouteHandler)
  .openapi(putUuidStreamRoute, putUuidStreamRouteHandler)
  .openapi(deleteUuidTalkRoute, deleteUuidTalkRouteHandler)
  .openapi(putUuidTalkRoute, putUuidTalkRouteHandler)

export default app
