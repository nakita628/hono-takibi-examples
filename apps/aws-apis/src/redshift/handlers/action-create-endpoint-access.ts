import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateEndpointAccessRoute,
  postActionCreateEndpointAccessRoute,
} from '../routes'

export const getActionCreateEndpointAccessRouteHandler: RouteHandler<
  typeof getActionCreateEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateEndpointAccessRouteHandler: RouteHandler<
  typeof postActionCreateEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
