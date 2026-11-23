import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateVpcEndpointRoute, postActionCreateVpcEndpointRoute } from '../routes'

export const getActionCreateVpcEndpointRouteHandler: RouteHandler<
  typeof getActionCreateVpcEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpcEndpointRouteHandler: RouteHandler<
  typeof postActionCreateVpcEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
