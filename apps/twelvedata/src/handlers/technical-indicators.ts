import type { RouteHandler } from '@hono/zod-openapi'
import type { getTechnicalIndicatorsRoute } from '../routes'

export const getTechnicalIndicatorsRouteHandler: RouteHandler<
  typeof getTechnicalIndicatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
