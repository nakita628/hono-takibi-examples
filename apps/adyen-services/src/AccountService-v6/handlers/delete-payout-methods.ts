import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeletePayoutMethodsRoute } from '../routes'

export const postDeletePayoutMethodsRouteHandler: RouteHandler<
  typeof postDeletePayoutMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
