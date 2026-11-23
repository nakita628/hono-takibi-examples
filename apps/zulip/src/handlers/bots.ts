import type { RouteHandler } from '@hono/zod-openapi'
import type { getBotsBotIdApiKeyRoute, postBotsBotIdApiKeyRegenerateRoute } from '../routes'

export const getBotsBotIdApiKeyRouteHandler: RouteHandler<typeof getBotsBotIdApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBotsBotIdApiKeyRegenerateRouteHandler: RouteHandler<
  typeof postBotsBotIdApiKeyRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
