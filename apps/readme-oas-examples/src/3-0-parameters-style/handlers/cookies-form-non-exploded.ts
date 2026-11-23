import type { RouteHandler } from '@hono/zod-openapi'
import type { getCookiesFormNonExplodedRoute } from '../routes'

export const getCookiesFormNonExplodedRouteHandler: RouteHandler<
  typeof getCookiesFormNonExplodedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
