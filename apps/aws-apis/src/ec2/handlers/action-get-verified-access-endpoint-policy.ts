import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetVerifiedAccessEndpointPolicyRoute,
  postActionGetVerifiedAccessEndpointPolicyRoute,
} from '../routes'

export const getActionGetVerifiedAccessEndpointPolicyRouteHandler: RouteHandler<
  typeof getActionGetVerifiedAccessEndpointPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetVerifiedAccessEndpointPolicyRouteHandler: RouteHandler<
  typeof postActionGetVerifiedAccessEndpointPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
