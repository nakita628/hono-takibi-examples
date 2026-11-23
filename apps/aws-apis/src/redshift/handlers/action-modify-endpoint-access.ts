import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyEndpointAccessRoute,
  postActionModifyEndpointAccessRoute,
} from '../routes'

export const getActionModifyEndpointAccessRouteHandler: RouteHandler<
  typeof getActionModifyEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyEndpointAccessRouteHandler: RouteHandler<
  typeof postActionModifyEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
