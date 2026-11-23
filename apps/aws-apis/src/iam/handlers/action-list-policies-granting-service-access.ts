import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListPoliciesGrantingServiceAccessRoute,
  postActionListPoliciesGrantingServiceAccessRoute,
} from '../routes'

export const getActionListPoliciesGrantingServiceAccessRouteHandler: RouteHandler<
  typeof getActionListPoliciesGrantingServiceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPoliciesGrantingServiceAccessRouteHandler: RouteHandler<
  typeof postActionListPoliciesGrantingServiceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
