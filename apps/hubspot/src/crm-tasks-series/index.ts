import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmTaskSeries202609TaskIdRoute,
  getCrmTaskSeries202609TaskIdRoute,
  patchCrmTaskSeries202609TaskIdRoute,
  postCrmTaskSeries202609Route,
} from './routes'
import {
  deleteCrmTaskSeries202609TaskIdRouteHandler,
  getCrmTaskSeries202609TaskIdRouteHandler,
  patchCrmTaskSeries202609TaskIdRouteHandler,
  postCrmTaskSeries202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCrmTaskSeries202609Route, postCrmTaskSeries202609RouteHandler)
  .openapi(getCrmTaskSeries202609TaskIdRoute, getCrmTaskSeries202609TaskIdRouteHandler)
  .openapi(deleteCrmTaskSeries202609TaskIdRoute, deleteCrmTaskSeries202609TaskIdRouteHandler)
  .openapi(patchCrmTaskSeries202609TaskIdRoute, patchCrmTaskSeries202609TaskIdRouteHandler)

export default app
