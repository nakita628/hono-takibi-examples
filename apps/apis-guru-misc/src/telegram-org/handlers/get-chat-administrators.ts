import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetChatAdministratorsRoute } from '../routes'

export const postGetChatAdministratorsRouteHandler: RouteHandler<
  typeof postGetChatAdministratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
