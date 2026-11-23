import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteEndpointAccessRoute,
  postActionDeleteEndpointAccessRoute,
} from '../routes'

export const getActionDeleteEndpointAccessRouteHandler: RouteHandler<
  typeof getActionDeleteEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteEndpointAccessRouteHandler: RouteHandler<
  typeof postActionDeleteEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
