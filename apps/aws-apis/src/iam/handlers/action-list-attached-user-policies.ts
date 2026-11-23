import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListAttachedUserPoliciesRoute,
  postActionListAttachedUserPoliciesRoute,
} from '../routes'

export const getActionListAttachedUserPoliciesRouteHandler: RouteHandler<
  typeof getActionListAttachedUserPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAttachedUserPoliciesRouteHandler: RouteHandler<
  typeof postActionListAttachedUserPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
