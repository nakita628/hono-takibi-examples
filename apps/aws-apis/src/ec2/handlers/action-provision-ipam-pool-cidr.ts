import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionProvisionIpamPoolCidrRoute,
  postActionProvisionIpamPoolCidrRoute,
} from '../routes'

export const getActionProvisionIpamPoolCidrRouteHandler: RouteHandler<
  typeof getActionProvisionIpamPoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionProvisionIpamPoolCidrRouteHandler: RouteHandler<
  typeof postActionProvisionIpamPoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
