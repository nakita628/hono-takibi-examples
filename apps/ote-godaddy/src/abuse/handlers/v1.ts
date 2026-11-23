import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1AbuseTicketsRoute,
  getV1AbuseTicketsTicketIdRoute,
  postV1AbuseTicketsRoute,
} from '../routes'

export const getV1AbuseTicketsRouteHandler: RouteHandler<typeof getV1AbuseTicketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AbuseTicketsRouteHandler: RouteHandler<typeof postV1AbuseTicketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AbuseTicketsTicketIdRouteHandler: RouteHandler<
  typeof getV1AbuseTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
