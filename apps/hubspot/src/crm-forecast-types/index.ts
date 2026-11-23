import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getForecastSettings202609ForecastTypesForecastTypeIdRoute,
  getForecastSettings202609ForecastTypesRoute,
} from './routes'
import {
  getForecastSettings202609ForecastTypesForecastTypeIdRouteHandler,
  getForecastSettings202609ForecastTypesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getForecastSettings202609ForecastTypesRoute,
    getForecastSettings202609ForecastTypesRouteHandler,
  )
  .openapi(
    getForecastSettings202609ForecastTypesForecastTypeIdRoute,
    getForecastSettings202609ForecastTypesForecastTypeIdRouteHandler,
  )

export default app
