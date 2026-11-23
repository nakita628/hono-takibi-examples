import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListIdentityPoliciesRoute,
  postActionListIdentityPoliciesRoute,
} from '../routes'

export const getActionListIdentityPoliciesRouteHandler: RouteHandler<
  typeof getActionListIdentityPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListIdentityPoliciesRouteHandler: RouteHandler<
  typeof postActionListIdentityPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
