import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreatePublicIpv4PoolRoute,
  postActionCreatePublicIpv4PoolRoute,
} from '../routes'

export const getActionCreatePublicIpv4PoolRouteHandler: RouteHandler<
  typeof getActionCreatePublicIpv4PoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePublicIpv4PoolRouteHandler: RouteHandler<
  typeof postActionCreatePublicIpv4PoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
