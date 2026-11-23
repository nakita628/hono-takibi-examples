import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionMoveAddressToVpcRoute, postActionMoveAddressToVpcRoute } from '../routes'

export const getActionMoveAddressToVpcRouteHandler: RouteHandler<
  typeof getActionMoveAddressToVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionMoveAddressToVpcRouteHandler: RouteHandler<
  typeof postActionMoveAddressToVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}
