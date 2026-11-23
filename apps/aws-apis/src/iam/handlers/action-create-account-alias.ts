import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateAccountAliasRoute, postActionCreateAccountAliasRoute } from '../routes'

export const getActionCreateAccountAliasRouteHandler: RouteHandler<
  typeof getActionCreateAccountAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateAccountAliasRouteHandler: RouteHandler<
  typeof postActionCreateAccountAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}
