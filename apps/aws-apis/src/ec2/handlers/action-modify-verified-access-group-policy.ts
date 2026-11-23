import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVerifiedAccessGroupPolicyRoute,
  postActionModifyVerifiedAccessGroupPolicyRoute,
} from '../routes'

export const getActionModifyVerifiedAccessGroupPolicyRouteHandler: RouteHandler<
  typeof getActionModifyVerifiedAccessGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVerifiedAccessGroupPolicyRouteHandler: RouteHandler<
  typeof postActionModifyVerifiedAccessGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
