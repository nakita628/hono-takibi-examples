import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAttachGroupPolicyRoute, postActionAttachGroupPolicyRoute } from '../routes'

export const getActionAttachGroupPolicyRouteHandler: RouteHandler<
  typeof getActionAttachGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachGroupPolicyRouteHandler: RouteHandler<
  typeof postActionAttachGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
