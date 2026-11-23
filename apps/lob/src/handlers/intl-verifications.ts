import type { RouteHandler } from '@hono/zod-openapi'
import type { postIntlVerificationsRoute } from '../routes'

export const postIntlVerificationsRouteHandler: RouteHandler<
  typeof postIntlVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
