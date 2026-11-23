import type { RouteHandler } from '@hono/zod-openapi'
import type { postSpeedInsightsToggleRoute } from '../routes'

export const postSpeedInsightsToggleRouteHandler: RouteHandler<
  typeof postSpeedInsightsToggleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
