import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeEndpointAccessRoute,
  postActionRevokeEndpointAccessRoute,
} from '../routes'

export const getActionRevokeEndpointAccessRouteHandler: RouteHandler<
  typeof getActionRevokeEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeEndpointAccessRouteHandler: RouteHandler<
  typeof postActionRevokeEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
