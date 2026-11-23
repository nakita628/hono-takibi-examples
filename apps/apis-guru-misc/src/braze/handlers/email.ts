import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailHardBouncesRoute, getEmailUnsubscribesRoute } from '../routes'

export const getEmailHardBouncesRouteHandler: RouteHandler<
  typeof getEmailHardBouncesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailUnsubscribesRouteHandler: RouteHandler<
  typeof getEmailUnsubscribesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
