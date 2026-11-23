import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSupportTicketsRoute,
  getSupportTicketsTicketIdRepliesRoute,
  getSupportTicketsTicketIdRoute,
  postSupportTicketsRoute,
  postSupportTicketsTicketIdAttachmentsRoute,
  postSupportTicketsTicketIdCloseRoute,
  postSupportTicketsTicketIdRepliesRoute,
} from '../routes'

export const getSupportTicketsRouteHandler: RouteHandler<typeof getSupportTicketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSupportTicketsRouteHandler: RouteHandler<typeof postSupportTicketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSupportTicketsTicketIdRouteHandler: RouteHandler<
  typeof getSupportTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSupportTicketsTicketIdAttachmentsRouteHandler: RouteHandler<
  typeof postSupportTicketsTicketIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSupportTicketsTicketIdCloseRouteHandler: RouteHandler<
  typeof postSupportTicketsTicketIdCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSupportTicketsTicketIdRepliesRouteHandler: RouteHandler<
  typeof getSupportTicketsTicketIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSupportTicketsTicketIdRepliesRouteHandler: RouteHandler<
  typeof postSupportTicketsTicketIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
