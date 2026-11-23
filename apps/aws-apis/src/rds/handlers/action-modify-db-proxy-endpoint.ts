import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBProxyEndpointRoute,
  postActionModifyDBProxyEndpointRoute,
} from '../routes'

export const getActionModifyDBProxyEndpointRouteHandler: RouteHandler<
  typeof getActionModifyDBProxyEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBProxyEndpointRouteHandler: RouteHandler<
  typeof postActionModifyDBProxyEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
