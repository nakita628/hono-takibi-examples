import type { RouteHandler } from '@hono/zod-openapi'
import type { getSendClientsMessageRoute, postSendClientsMessageRoute } from '../routes'

export const getSendClientsMessageRouteHandler: RouteHandler<
  typeof getSendClientsMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendClientsMessageRouteHandler: RouteHandler<
  typeof postSendClientsMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
