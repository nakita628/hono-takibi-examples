import type { RouteHandler } from '@hono/zod-openapi'
import type { getTicketStatesRoute } from '../routes'

export const getTicketStatesRouteHandler: RouteHandler<typeof getTicketStatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
