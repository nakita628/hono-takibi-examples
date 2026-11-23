import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReisezentrenIdRoute,
  getReisezentrenLocLatLonDistRoute,
  getReisezentrenLocLatLonRoute,
  getReisezentrenRoute,
} from './routes'
import {
  getReisezentrenIdRouteHandler,
  getReisezentrenLocLatLonDistRouteHandler,
  getReisezentrenLocLatLonRouteHandler,
  getReisezentrenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getReisezentrenRoute, getReisezentrenRouteHandler)
  .openapi(getReisezentrenLocLatLonRoute, getReisezentrenLocLatLonRouteHandler)
  .openapi(getReisezentrenLocLatLonDistRoute, getReisezentrenLocLatLonDistRouteHandler)
  .openapi(getReisezentrenIdRoute, getReisezentrenIdRouteHandler)

export default app
