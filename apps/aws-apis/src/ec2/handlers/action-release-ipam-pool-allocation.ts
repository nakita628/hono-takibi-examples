import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionReleaseIpamPoolAllocationRoute,
  postActionReleaseIpamPoolAllocationRoute,
} from '../routes'

export const getActionReleaseIpamPoolAllocationRouteHandler: RouteHandler<
  typeof getActionReleaseIpamPoolAllocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReleaseIpamPoolAllocationRouteHandler: RouteHandler<
  typeof postActionReleaseIpamPoolAllocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
