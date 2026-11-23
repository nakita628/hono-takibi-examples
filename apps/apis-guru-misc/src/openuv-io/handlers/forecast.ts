import type { RouteHandler } from '@hono/zod-openapi'
import type { getForecastRoute } from '../routes'

export const getForecastRouteHandler: RouteHandler<typeof getForecastRoute> = async (c) => {
  throw new Error('Not implemented')
}
