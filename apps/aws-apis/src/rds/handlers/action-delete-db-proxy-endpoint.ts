import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBProxyEndpointRoute,
  postActionDeleteDBProxyEndpointRoute,
} from '../routes'

export const getActionDeleteDBProxyEndpointRouteHandler: RouteHandler<
  typeof getActionDeleteDBProxyEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBProxyEndpointRouteHandler: RouteHandler<
  typeof postActionDeleteDBProxyEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
