import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListAttachedRolePoliciesRoute,
  postActionListAttachedRolePoliciesRoute,
} from '../routes'

export const getActionListAttachedRolePoliciesRouteHandler: RouteHandler<
  typeof getActionListAttachedRolePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAttachedRolePoliciesRouteHandler: RouteHandler<
  typeof postActionListAttachedRolePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
