import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeprovisionByoipCidrRoute,
  postActionDeprovisionByoipCidrRoute,
} from '../routes'

export const getActionDeprovisionByoipCidrRouteHandler: RouteHandler<
  typeof getActionDeprovisionByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeprovisionByoipCidrRouteHandler: RouteHandler<
  typeof postActionDeprovisionByoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
