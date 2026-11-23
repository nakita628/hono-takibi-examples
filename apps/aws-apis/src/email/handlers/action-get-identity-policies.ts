import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIdentityPoliciesRoute,
  postActionGetIdentityPoliciesRoute,
} from '../routes'

export const getActionGetIdentityPoliciesRouteHandler: RouteHandler<
  typeof getActionGetIdentityPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIdentityPoliciesRouteHandler: RouteHandler<
  typeof postActionGetIdentityPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
