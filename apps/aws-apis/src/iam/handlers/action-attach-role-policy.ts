import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAttachRolePolicyRoute, postActionAttachRolePolicyRoute } from '../routes'

export const getActionAttachRolePolicyRouteHandler: RouteHandler<
  typeof getActionAttachRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachRolePolicyRouteHandler: RouteHandler<
  typeof postActionAttachRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
