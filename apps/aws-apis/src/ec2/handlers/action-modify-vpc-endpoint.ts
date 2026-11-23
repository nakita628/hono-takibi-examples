import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyVpcEndpointRoute, postActionModifyVpcEndpointRoute } from '../routes'

export const getActionModifyVpcEndpointRouteHandler: RouteHandler<
  typeof getActionModifyVpcEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpcEndpointRouteHandler: RouteHandler<
  typeof postActionModifyVpcEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
