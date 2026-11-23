import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeprovisionIpamPoolCidrRoute,
  postActionDeprovisionIpamPoolCidrRoute,
} from '../routes'

export const getActionDeprovisionIpamPoolCidrRouteHandler: RouteHandler<
  typeof getActionDeprovisionIpamPoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeprovisionIpamPoolCidrRouteHandler: RouteHandler<
  typeof postActionDeprovisionIpamPoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
