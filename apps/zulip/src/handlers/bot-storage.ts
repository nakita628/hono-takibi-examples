import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteBotStorageRoute, getBotStorageRoute, putBotStorageRoute } from '../routes'

export const getBotStorageRouteHandler: RouteHandler<typeof getBotStorageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBotStorageRouteHandler: RouteHandler<typeof putBotStorageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBotStorageRouteHandler: RouteHandler<typeof deleteBotStorageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
