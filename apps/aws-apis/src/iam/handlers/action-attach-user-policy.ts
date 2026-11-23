import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAttachUserPolicyRoute, postActionAttachUserPolicyRoute } from '../routes'

export const getActionAttachUserPolicyRouteHandler: RouteHandler<
  typeof getActionAttachUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachUserPolicyRouteHandler: RouteHandler<
  typeof postActionAttachUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
