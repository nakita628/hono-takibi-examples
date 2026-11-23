import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyIpamResourceCidrRoute,
  postActionModifyIpamResourceCidrRoute,
} from '../routes'

export const getActionModifyIpamResourceCidrRouteHandler: RouteHandler<
  typeof getActionModifyIpamResourceCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIpamResourceCidrRouteHandler: RouteHandler<
  typeof postActionModifyIpamResourceCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
