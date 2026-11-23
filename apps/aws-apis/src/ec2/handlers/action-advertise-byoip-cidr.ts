import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAdvertiseByoipCidrRoute, postActionAdvertiseByoipCidrRoute } from '../routes'

export const getActionAdvertiseByoipCidrRouteHandler: RouteHandler<
  typeof getActionAdvertiseByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAdvertiseByoipCidrRouteHandler: RouteHandler<
  typeof postActionAdvertiseByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
