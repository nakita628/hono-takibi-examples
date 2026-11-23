import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatPostEphemeralRoute } from '../routes'

export const postChatPostEphemeralRouteHandler: RouteHandler<
  typeof postChatPostEphemeralRoute
> = async (c) => {
  throw new Error('Not implemented')
}
