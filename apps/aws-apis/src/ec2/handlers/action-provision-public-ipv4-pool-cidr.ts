import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionProvisionPublicIpv4PoolCidrRoute,
  postActionProvisionPublicIpv4PoolCidrRoute,
} from '../routes'

export const getActionProvisionPublicIpv4PoolCidrRouteHandler: RouteHandler<
  typeof getActionProvisionPublicIpv4PoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionProvisionPublicIpv4PoolCidrRouteHandler: RouteHandler<
  typeof postActionProvisionPublicIpv4PoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
