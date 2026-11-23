import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsSetPurposeRoute } from '../routes'

export const postConversationsSetPurposeRouteHandler: RouteHandler<
  typeof postConversationsSetPurposeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
