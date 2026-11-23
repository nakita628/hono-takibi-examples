import type { RouteHandler } from '@hono/zod-openapi'
import type { getForecastSubmissions202609EventsRoute } from '../routes'

export const getForecastSubmissions202609EventsRouteHandler: RouteHandler<
  typeof getForecastSubmissions202609EventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
