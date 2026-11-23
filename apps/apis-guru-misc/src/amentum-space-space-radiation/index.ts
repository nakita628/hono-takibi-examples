import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGcrFluxDlrRoute,
  getTrappedFluxMeanRoute,
  getTrappedFluxPercentileRoute,
} from './routes'
import {
  getGcrFluxDlrRouteHandler,
  getTrappedFluxMeanRouteHandler,
  getTrappedFluxPercentileRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGcrFluxDlrRoute, getGcrFluxDlrRouteHandler)
  .openapi(getTrappedFluxMeanRoute, getTrappedFluxMeanRouteHandler)
  .openapi(getTrappedFluxPercentileRoute, getTrappedFluxPercentileRouteHandler)

export default app
