import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeprovisionPublicIpv4PoolCidrRoute,
  postActionDeprovisionPublicIpv4PoolCidrRoute,
} from '../routes'

export const getActionDeprovisionPublicIpv4PoolCidrRouteHandler: RouteHandler<
  typeof getActionDeprovisionPublicIpv4PoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeprovisionPublicIpv4PoolCidrRouteHandler: RouteHandler<
  typeof postActionDeprovisionPublicIpv4PoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
