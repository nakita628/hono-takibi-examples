import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAclPolicyPolicyNameRoute,
  deleteAclTokenTokenAccessorRoute,
  getAclPoliciesRoute,
  getAclPolicyPolicyNameRoute,
  getAclTokenRoute,
  getAclTokensRoute,
  getAclTokenTokenAccessorRoute,
  postAclBootstrapRoute,
  postAclPolicyPolicyNameRoute,
  postAclTokenOnetimeExchangeRoute,
  postAclTokenOnetimeRoute,
  postAclTokenTokenAccessorRoute,
} from '../routes'

export const postAclBootstrapRouteHandler: RouteHandler<typeof postAclBootstrapRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAclPoliciesRouteHandler: RouteHandler<typeof getAclPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAclPolicyPolicyNameRouteHandler: RouteHandler<
  typeof deleteAclPolicyPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAclPolicyPolicyNameRouteHandler: RouteHandler<
  typeof getAclPolicyPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAclPolicyPolicyNameRouteHandler: RouteHandler<
  typeof postAclPolicyPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAclTokenRouteHandler: RouteHandler<typeof getAclTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAclTokenTokenAccessorRouteHandler: RouteHandler<
  typeof deleteAclTokenTokenAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAclTokenTokenAccessorRouteHandler: RouteHandler<
  typeof getAclTokenTokenAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAclTokenTokenAccessorRouteHandler: RouteHandler<
  typeof postAclTokenTokenAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAclTokenOnetimeRouteHandler: RouteHandler<
  typeof postAclTokenOnetimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAclTokenOnetimeExchangeRouteHandler: RouteHandler<
  typeof postAclTokenOnetimeExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAclTokensRouteHandler: RouteHandler<typeof getAclTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}
