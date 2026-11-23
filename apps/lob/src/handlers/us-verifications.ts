import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsVerificationsRoute } from '../routes'

export const postUsVerificationsRouteHandler: RouteHandler<
  typeof postUsVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
