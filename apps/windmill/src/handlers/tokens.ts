import type { RouteHandler } from '@hono/zod-openapi'
import type { getTokensListScopesRoute } from '../routes'

export const getTokensListScopesRouteHandler: RouteHandler<
  typeof getTokensListScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
