import type { RouteHandler } from '@hono/zod-openapi'
import type { patchWhatsappMessagesMessageIdRoute, postWhatsappMessagesRoute } from '../routes'

export const postWhatsappMessagesRouteHandler: RouteHandler<
  typeof postWhatsappMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWhatsappMessagesMessageIdRouteHandler: RouteHandler<
  typeof patchWhatsappMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
