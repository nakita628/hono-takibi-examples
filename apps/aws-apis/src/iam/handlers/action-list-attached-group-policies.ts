import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListAttachedGroupPoliciesRoute,
  postActionListAttachedGroupPoliciesRoute,
} from '../routes'

export const getActionListAttachedGroupPoliciesRouteHandler: RouteHandler<
  typeof getActionListAttachedGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAttachedGroupPoliciesRouteHandler: RouteHandler<
  typeof postActionListAttachedGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
