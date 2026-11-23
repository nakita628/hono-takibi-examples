import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateServiceAccessPoliciesRoute,
  postActionUpdateServiceAccessPoliciesRoute,
} from '../routes'

export const getActionUpdateServiceAccessPoliciesRouteHandler: RouteHandler<
  typeof getActionUpdateServiceAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateServiceAccessPoliciesRouteHandler: RouteHandler<
  typeof postActionUpdateServiceAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
