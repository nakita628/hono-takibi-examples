import type { RouteHandler } from '@hono/zod-openapi'
import type { postInitializeServiceRoute } from '../routes'

export const postInitializeServiceRouteHandler: RouteHandler<
  typeof postInitializeServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
