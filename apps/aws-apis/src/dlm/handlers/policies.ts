import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePoliciesPolicyIdIndexRoute,
  getPoliciesPolicyIdIndexRoute,
  getPoliciesRoute,
  patchPoliciesPolicyIdRoute,
  postPoliciesRoute,
} from '../routes'

export const postPoliciesRouteHandler: RouteHandler<typeof postPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRouteHandler: RouteHandler<typeof getPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesPolicyIdIndexRouteHandler: RouteHandler<
  typeof deletePoliciesPolicyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPolicyIdIndexRouteHandler: RouteHandler<
  typeof getPoliciesPolicyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
