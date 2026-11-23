import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetChatDescriptionRoute } from '../routes'

export const postSetChatDescriptionRouteHandler: RouteHandler<
  typeof postSetChatDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
