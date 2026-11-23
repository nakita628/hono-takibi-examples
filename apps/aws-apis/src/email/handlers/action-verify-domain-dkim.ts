import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionVerifyDomainDkimRoute, postActionVerifyDomainDkimRoute } from '../routes'

export const getActionVerifyDomainDkimRouteHandler: RouteHandler<
  typeof getActionVerifyDomainDkimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionVerifyDomainDkimRouteHandler: RouteHandler<
  typeof postActionVerifyDomainDkimRoute
> = async (c) => {
  throw new Error('Not implemented')
}
