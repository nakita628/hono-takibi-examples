import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteAccountAliasRoute, postActionDeleteAccountAliasRoute } from '../routes'

export const getActionDeleteAccountAliasRouteHandler: RouteHandler<
  typeof getActionDeleteAccountAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAccountAliasRouteHandler: RouteHandler<
  typeof postActionDeleteAccountAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}
