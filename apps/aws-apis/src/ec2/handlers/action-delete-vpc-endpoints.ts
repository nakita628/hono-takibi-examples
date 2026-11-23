import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteVpcEndpointsRoute, postActionDeleteVpcEndpointsRoute } from '../routes'

export const getActionDeleteVpcEndpointsRouteHandler: RouteHandler<
  typeof getActionDeleteVpcEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVpcEndpointsRouteHandler: RouteHandler<
  typeof postActionDeleteVpcEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
