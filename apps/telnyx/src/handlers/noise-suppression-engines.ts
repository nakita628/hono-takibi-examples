import type { RouteHandler } from '@hono/zod-openapi'
import type { getNoiseSuppressionEnginesRoute } from '../routes'

export const getNoiseSuppressionEnginesRouteHandler: RouteHandler<
  typeof getNoiseSuppressionEnginesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
