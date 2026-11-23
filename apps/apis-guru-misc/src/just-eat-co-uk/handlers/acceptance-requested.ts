import type { RouteHandler } from '@hono/zod-openapi'
import type { postAcceptanceRequestedRoute } from '../routes'

export const postAcceptanceRequestedRouteHandler: RouteHandler<
  typeof postAcceptanceRequestedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
