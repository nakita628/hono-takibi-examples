import type { RouteHandler } from '@hono/zod-openapi'
import type { postIndexPhpOcmNotificationsRoute, postIndexPhpOcmSharesRoute } from '../routes'

export const postIndexPhpOcmSharesRouteHandler: RouteHandler<
  typeof postIndexPhpOcmSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexPhpOcmNotificationsRouteHandler: RouteHandler<
  typeof postIndexPhpOcmNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
