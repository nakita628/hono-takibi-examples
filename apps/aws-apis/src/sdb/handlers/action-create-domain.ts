import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDomainRoute, postActionCreateDomainRoute } from '../routes'

export const getActionCreateDomainRouteHandler: RouteHandler<
  typeof getActionCreateDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDomainRouteHandler: RouteHandler<
  typeof postActionCreateDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
