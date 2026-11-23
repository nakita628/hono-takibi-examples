import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIpamPoolAllocationsRoute,
  postActionGetIpamPoolAllocationsRoute,
} from '../routes'

export const getActionGetIpamPoolAllocationsRouteHandler: RouteHandler<
  typeof getActionGetIpamPoolAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIpamPoolAllocationsRouteHandler: RouteHandler<
  typeof postActionGetIpamPoolAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
