import type { RouteHandler } from '@hono/zod-openapi'
import type { postWhatsappContactsRoute } from '../routes'

export const postWhatsappContactsRouteHandler: RouteHandler<
  typeof postWhatsappContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
