import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetAuthenticationResultRoute } from '../routes'

export const postGetAuthenticationResultRouteHandler: RouteHandler<
  typeof postGetAuthenticationResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
