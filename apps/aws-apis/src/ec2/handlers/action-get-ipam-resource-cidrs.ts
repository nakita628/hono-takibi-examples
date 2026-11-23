import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIpamResourceCidrsRoute,
  postActionGetIpamResourceCidrsRoute,
} from '../routes'

export const getActionGetIpamResourceCidrsRouteHandler: RouteHandler<
  typeof getActionGetIpamResourceCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIpamResourceCidrsRouteHandler: RouteHandler<
  typeof postActionGetIpamResourceCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
