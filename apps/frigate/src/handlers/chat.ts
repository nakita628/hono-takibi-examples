import type { RouteHandler } from '@hono/zod-openapi'
import type { getChatToolsRoute, postChatCompletionRoute, postChatExecuteRoute } from '../routes'

export const getChatToolsRouteHandler: RouteHandler<typeof getChatToolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatExecuteRouteHandler: RouteHandler<typeof postChatExecuteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatCompletionRouteHandler: RouteHandler<typeof postChatCompletionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
