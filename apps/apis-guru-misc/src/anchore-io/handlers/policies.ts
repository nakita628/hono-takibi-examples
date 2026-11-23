import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePoliciesPolicyIdRoute,
  getPoliciesPolicyIdRoute,
  getPoliciesRoute,
  postPoliciesRoute,
  putPoliciesPolicyIdRoute,
} from '../routes'

export const getPoliciesRouteHandler: RouteHandler<typeof getPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesRouteHandler: RouteHandler<typeof postPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
