import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingTopLevelArrayRoute,
  postAnythingTopLevelObjectSimpleRoute,
  postMultischemaOfEverythingRoute,
  postTopLevelObjectOfEverythingRoute,
  putAnythingTopLevelArrayRoute,
} from './routes'
import {
  postAnythingTopLevelArrayRouteHandler,
  postAnythingTopLevelObjectSimpleRouteHandler,
  postMultischemaOfEverythingRouteHandler,
  postTopLevelObjectOfEverythingRouteHandler,
  putAnythingTopLevelArrayRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnythingTopLevelArrayRoute, postAnythingTopLevelArrayRouteHandler)
  .openapi(putAnythingTopLevelArrayRoute, putAnythingTopLevelArrayRouteHandler)
  .openapi(postAnythingTopLevelObjectSimpleRoute, postAnythingTopLevelObjectSimpleRouteHandler)
  .openapi(postTopLevelObjectOfEverythingRoute, postTopLevelObjectOfEverythingRouteHandler)
  .openapi(postMultischemaOfEverythingRoute, postMultischemaOfEverythingRouteHandler)

export default app
