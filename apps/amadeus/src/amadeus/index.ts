import { OpenAPIHono } from '@hono/zod-openapi'
import { getShoppingFlightOffersRoute, postShoppingFlightOffersRoute } from './routes'
import {
  getShoppingFlightOffersRouteHandler,
  postShoppingFlightOffersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getShoppingFlightOffersRoute, getShoppingFlightOffersRouteHandler)
  .openapi(postShoppingFlightOffersRoute, postShoppingFlightOffersRouteHandler)

export default app
