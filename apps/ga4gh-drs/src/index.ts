import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getObjectsObjectIdAccessAccessIdRoute,
  getObjectsObjectIdRoute,
  getServiceInfoRoute,
  optionsObjectsObjectIdRoute,
  optionsObjectsRoute,
  postObjectsAccessRoute,
  postObjectsObjectIdAccessAccessIdRoute,
  postObjectsObjectIdRoute,
  postObjectsRoute,
} from './routes'
import {
  getObjectsObjectIdAccessAccessIdRouteHandler,
  getObjectsObjectIdRouteHandler,
  getServiceInfoRouteHandler,
  optionsObjectsObjectIdRouteHandler,
  optionsObjectsRouteHandler,
  postObjectsAccessRouteHandler,
  postObjectsObjectIdAccessAccessIdRouteHandler,
  postObjectsObjectIdRouteHandler,
  postObjectsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getServiceInfoRoute, getServiceInfoRouteHandler)
  .openapi(optionsObjectsObjectIdRoute, optionsObjectsObjectIdRouteHandler)
  .openapi(getObjectsObjectIdRoute, getObjectsObjectIdRouteHandler)
  .openapi(postObjectsObjectIdRoute, postObjectsObjectIdRouteHandler)
  .openapi(optionsObjectsRoute, optionsObjectsRouteHandler)
  .openapi(postObjectsRoute, postObjectsRouteHandler)
  .openapi(getObjectsObjectIdAccessAccessIdRoute, getObjectsObjectIdAccessAccessIdRouteHandler)
  .openapi(postObjectsObjectIdAccessAccessIdRoute, postObjectsObjectIdAccessAccessIdRouteHandler)
  .openapi(postObjectsAccessRoute, postObjectsAccessRouteHandler)

export default app
