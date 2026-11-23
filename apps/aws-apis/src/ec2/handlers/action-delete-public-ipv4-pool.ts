import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeletePublicIpv4PoolRoute,
  postActionDeletePublicIpv4PoolRoute,
} from '../routes'

export const getActionDeletePublicIpv4PoolRouteHandler: RouteHandler<
  typeof getActionDeletePublicIpv4PoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePublicIpv4PoolRouteHandler: RouteHandler<
  typeof postActionDeletePublicIpv4PoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
