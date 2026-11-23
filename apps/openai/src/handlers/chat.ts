import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChatCompletionsCompletionIdRoute,
  getChatCompletionsCompletionIdMessagesRoute,
  getChatCompletionsCompletionIdRoute,
  getChatCompletionsRoute,
  postChatCompletionsCompletionIdRoute,
  postChatCompletionsRoute,
} from '../routes'

export const getChatCompletionsRouteHandler: RouteHandler<typeof getChatCompletionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postChatCompletionsRouteHandler: RouteHandler<
  typeof postChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatCompletionsCompletionIdRouteHandler: RouteHandler<
  typeof getChatCompletionsCompletionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatCompletionsCompletionIdRouteHandler: RouteHandler<
  typeof postChatCompletionsCompletionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatCompletionsCompletionIdRouteHandler: RouteHandler<
  typeof deleteChatCompletionsCompletionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatCompletionsCompletionIdMessagesRouteHandler: RouteHandler<
  typeof getChatCompletionsCompletionIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
