import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebInsightsToggleRoute } from '../routes'

export const postWebInsightsToggleRouteHandler: RouteHandler<
  typeof postWebInsightsToggleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
