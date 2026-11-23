import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBProxyEndpointRoute,
  postActionCreateDBProxyEndpointRoute,
} from '../routes'

export const getActionCreateDBProxyEndpointRouteHandler: RouteHandler<
  typeof getActionCreateDBProxyEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBProxyEndpointRouteHandler: RouteHandler<
  typeof postActionCreateDBProxyEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
