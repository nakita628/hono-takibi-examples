import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetChatHeadRoute, postGetChatHeadRoute } from '../routes'

export const getGetChatHeadRouteHandler: RouteHandler<typeof getGetChatHeadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetChatHeadRouteHandler: RouteHandler<typeof postGetChatHeadRoute> = async (c) => {
  throw new Error('Not implemented')
}
