import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteEndpointRoute, postActionDeleteEndpointRoute } from '../routes'

export const getActionDeleteEndpointRouteHandler: RouteHandler<
  typeof getActionDeleteEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteEndpointRouteHandler: RouteHandler<
  typeof postActionDeleteEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
