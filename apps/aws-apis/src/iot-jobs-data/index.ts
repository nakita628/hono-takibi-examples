import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThingsThingNameJobsJobIdRoute,
  getThingsThingNameJobsRoute,
  postThingsThingNameJobsJobIdRoute,
  putThingsThingNameJobsNextRoute,
} from './routes'
import {
  getThingsThingNameJobsJobIdRouteHandler,
  getThingsThingNameJobsRouteHandler,
  postThingsThingNameJobsJobIdRouteHandler,
  putThingsThingNameJobsNextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getThingsThingNameJobsJobIdRoute, getThingsThingNameJobsJobIdRouteHandler)
  .openapi(postThingsThingNameJobsJobIdRoute, postThingsThingNameJobsJobIdRouteHandler)
  .openapi(getThingsThingNameJobsRoute, getThingsThingNameJobsRouteHandler)
  .openapi(putThingsThingNameJobsNextRoute, putThingsThingNameJobsNextRouteHandler)

export default app
