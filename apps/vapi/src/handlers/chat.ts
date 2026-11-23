import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChatIdRoute,
  getChatIdRoute,
  getChatRoute,
  postChatResponsesRoute,
  postChatRoute,
} from '../routes'

export const getChatRouteHandler: RouteHandler<typeof getChatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatRouteHandler: RouteHandler<typeof postChatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatIdRouteHandler: RouteHandler<typeof getChatIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatIdRouteHandler: RouteHandler<typeof deleteChatIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatResponsesRouteHandler: RouteHandler<typeof postChatResponsesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
