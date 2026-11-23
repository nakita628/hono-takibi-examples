import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetVerifiedAccessGroupPolicyRoute,
  postActionGetVerifiedAccessGroupPolicyRoute,
} from '../routes'

export const getActionGetVerifiedAccessGroupPolicyRouteHandler: RouteHandler<
  typeof getActionGetVerifiedAccessGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetVerifiedAccessGroupPolicyRouteHandler: RouteHandler<
  typeof postActionGetVerifiedAccessGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
