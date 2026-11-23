import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListDomainNamesRoute, postActionListDomainNamesRoute } from '../routes'

export const getActionListDomainNamesRouteHandler: RouteHandler<
  typeof getActionListDomainNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListDomainNamesRouteHandler: RouteHandler<
  typeof postActionListDomainNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
