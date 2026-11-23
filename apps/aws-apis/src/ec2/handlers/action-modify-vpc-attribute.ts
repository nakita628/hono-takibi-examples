import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyVpcAttributeRoute, postActionModifyVpcAttributeRoute } from '../routes'

export const getActionModifyVpcAttributeRouteHandler: RouteHandler<
  typeof getActionModifyVpcAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpcAttributeRouteHandler: RouteHandler<
  typeof postActionModifyVpcAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
