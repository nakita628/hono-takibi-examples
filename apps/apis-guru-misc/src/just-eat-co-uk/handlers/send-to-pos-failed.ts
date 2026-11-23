import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendToPosFailedRoute } from '../routes'

export const postSendToPosFailedRouteHandler: RouteHandler<
  typeof postSendToPosFailedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
