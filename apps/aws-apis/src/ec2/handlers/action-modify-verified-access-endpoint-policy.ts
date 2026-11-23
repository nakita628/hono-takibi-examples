import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVerifiedAccessEndpointPolicyRoute,
  postActionModifyVerifiedAccessEndpointPolicyRoute,
} from '../routes'

export const getActionModifyVerifiedAccessEndpointPolicyRouteHandler: RouteHandler<
  typeof getActionModifyVerifiedAccessEndpointPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVerifiedAccessEndpointPolicyRouteHandler: RouteHandler<
  typeof postActionModifyVerifiedAccessEndpointPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
