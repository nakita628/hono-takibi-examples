import type { RouteHandler } from '@hono/zod-openapi'
import type { getTicketsTicketIdQrRoute, postTicketsRoute } from '../routes'

export const postTicketsRouteHandler: RouteHandler<typeof postTicketsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTicketsTicketIdQrRouteHandler: RouteHandler<
  typeof getTicketsTicketIdQrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
