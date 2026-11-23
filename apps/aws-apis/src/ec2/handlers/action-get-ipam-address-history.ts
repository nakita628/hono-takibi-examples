import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIpamAddressHistoryRoute,
  postActionGetIpamAddressHistoryRoute,
} from '../routes'

export const getActionGetIpamAddressHistoryRouteHandler: RouteHandler<
  typeof getActionGetIpamAddressHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIpamAddressHistoryRouteHandler: RouteHandler<
  typeof postActionGetIpamAddressHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
