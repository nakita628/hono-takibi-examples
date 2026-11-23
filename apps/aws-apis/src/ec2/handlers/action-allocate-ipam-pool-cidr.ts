import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAllocateIpamPoolCidrRoute,
  postActionAllocateIpamPoolCidrRoute,
} from '../routes'

export const getActionAllocateIpamPoolCidrRouteHandler: RouteHandler<
  typeof getActionAllocateIpamPoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAllocateIpamPoolCidrRouteHandler: RouteHandler<
  typeof postActionAllocateIpamPoolCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
