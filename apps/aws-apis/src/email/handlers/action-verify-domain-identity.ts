import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionVerifyDomainIdentityRoute,
  postActionVerifyDomainIdentityRoute,
} from '../routes'

export const getActionVerifyDomainIdentityRouteHandler: RouteHandler<
  typeof getActionVerifyDomainIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionVerifyDomainIdentityRouteHandler: RouteHandler<
  typeof postActionVerifyDomainIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
