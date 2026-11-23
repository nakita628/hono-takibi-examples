import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDomainRoute, postActionDeleteDomainRoute } from '../routes'

export const getActionDeleteDomainRouteHandler: RouteHandler<
  typeof getActionDeleteDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDomainRouteHandler: RouteHandler<
  typeof postActionDeleteDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
