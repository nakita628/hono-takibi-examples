import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMessagesRoute,
  getMessagesWhatsappStatusRoute,
  getMessagesStatusRoute,
} from '../routes'

export const postMessagesRouteHandler: RouteHandler<typeof postMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesWhatsappStatusRouteHandler: RouteHandler<
  typeof getMessagesWhatsappStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesStatusRouteHandler: RouteHandler<typeof getMessagesStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
