import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListDomainsRoute, postActionListDomainsRoute } from '../routes'

export const getActionListDomainsRouteHandler: RouteHandler<
  typeof getActionListDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListDomainsRouteHandler: RouteHandler<
  typeof postActionListDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
