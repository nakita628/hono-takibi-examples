import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountCopyIndexRoute } from '../routes'

export const getAccountCopyIndexRouteHandler: RouteHandler<
  typeof getAccountCopyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
