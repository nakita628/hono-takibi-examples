import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListAccountAliasesRoute, postActionListAccountAliasesRoute } from '../routes'

export const getActionListAccountAliasesRouteHandler: RouteHandler<
  typeof getActionListAccountAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAccountAliasesRouteHandler: RouteHandler<
  typeof postActionListAccountAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
