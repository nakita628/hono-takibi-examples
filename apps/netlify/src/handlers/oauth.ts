import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthTicketsTicketIdRoute,
  postOauthTicketsRoute,
  postOauthTicketsTicketIdExchangeRoute,
} from '../routes'

export const postOauthTicketsRouteHandler: RouteHandler<typeof postOauthTicketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauthTicketsTicketIdRouteHandler: RouteHandler<
  typeof getOauthTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTicketsTicketIdExchangeRouteHandler: RouteHandler<
  typeof postOauthTicketsTicketIdExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
