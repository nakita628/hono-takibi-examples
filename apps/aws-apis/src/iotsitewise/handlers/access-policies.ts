import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccessPoliciesAccessPolicyIdRoute,
  getAccessPoliciesAccessPolicyIdRoute,
  getAccessPoliciesRoute,
  postAccessPoliciesRoute,
  putAccessPoliciesAccessPolicyIdRoute,
} from '../routes'

export const postAccessPoliciesRouteHandler: RouteHandler<typeof postAccessPoliciesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccessPoliciesRouteHandler: RouteHandler<typeof getAccessPoliciesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAccessPoliciesAccessPolicyIdRouteHandler: RouteHandler<
  typeof deleteAccessPoliciesAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessPoliciesAccessPolicyIdRouteHandler: RouteHandler<
  typeof getAccessPoliciesAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccessPoliciesAccessPolicyIdRouteHandler: RouteHandler<
  typeof putAccessPoliciesAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
