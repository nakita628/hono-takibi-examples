import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChatRoute,
  optionsChatRegisterRoute,
  postChatMessagevisibilityRoute,
  postChatRegisterRoute,
  postChatUsersSetenabledRoute,
} from '../routes'

export const getChatRouteHandler: RouteHandler<typeof getChatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatRegisterRouteHandler: RouteHandler<typeof postChatRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsChatRegisterRouteHandler: RouteHandler<
  typeof optionsChatRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatMessagevisibilityRouteHandler: RouteHandler<
  typeof postChatMessagevisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatUsersSetenabledRouteHandler: RouteHandler<
  typeof postChatUsersSetenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
