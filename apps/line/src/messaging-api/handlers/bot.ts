import type { RouteHandler } from '@hono/zod-openapi'
import type { postBotPnpPushRoute } from '../routes'

export const postBotPnpPushRouteHandler: RouteHandler<typeof postBotPnpPushRoute> = async (c) => {
  throw new Error('Not implemented')
}
