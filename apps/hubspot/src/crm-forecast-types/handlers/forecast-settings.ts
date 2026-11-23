import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getForecastSettings202609ForecastTypesForecastTypeIdRoute,
  getForecastSettings202609ForecastTypesRoute,
} from '../routes'

export const getForecastSettings202609ForecastTypesRouteHandler: RouteHandler<
  typeof getForecastSettings202609ForecastTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getForecastSettings202609ForecastTypesForecastTypeIdRouteHandler: RouteHandler<
  typeof getForecastSettings202609ForecastTypesForecastTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
