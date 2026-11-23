import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeEndpointAccessRoute,
  postActionAuthorizeEndpointAccessRoute,
} from '../routes'

export const getActionAuthorizeEndpointAccessRouteHandler: RouteHandler<
  typeof getActionAuthorizeEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeEndpointAccessRouteHandler: RouteHandler<
  typeof postActionAuthorizeEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
