import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionProvisionByoipCidrRoute, postActionProvisionByoipCidrRoute } from '../routes'

export const getActionProvisionByoipCidrRouteHandler: RouteHandler<
  typeof getActionProvisionByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionProvisionByoipCidrRouteHandler: RouteHandler<
  typeof postActionProvisionByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
