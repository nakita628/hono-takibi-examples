import type { RouteHandler } from '@hono/zod-openapi'
import type { getCmsDomains202609DomainIdRoute, getCmsDomains202609Route } from '../routes'

export const getCmsDomains202609RouteHandler: RouteHandler<
  typeof getCmsDomains202609Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCmsDomains202609DomainIdRouteHandler: RouteHandler<
  typeof getCmsDomains202609DomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
