import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionWithdrawByoipCidrRoute, postActionWithdrawByoipCidrRoute } from '../routes'

export const getActionWithdrawByoipCidrRouteHandler: RouteHandler<
  typeof getActionWithdrawByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionWithdrawByoipCidrRouteHandler: RouteHandler<
  typeof postActionWithdrawByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
