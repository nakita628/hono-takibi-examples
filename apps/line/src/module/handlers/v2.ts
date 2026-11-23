import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2BotListRoute,
  postV2BotChannelDetachRoute,
  postV2BotChatChatIdControlAcquireRoute,
  postV2BotChatChatIdControlReleaseRoute,
} from '../routes'

export const postV2BotChannelDetachRouteHandler: RouteHandler<
  typeof postV2BotChannelDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BotChatChatIdControlAcquireRouteHandler: RouteHandler<
  typeof postV2BotChatChatIdControlAcquireRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BotChatChatIdControlReleaseRouteHandler: RouteHandler<
  typeof postV2BotChatChatIdControlReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BotListRouteHandler: RouteHandler<typeof getV2BotListRoute> = async (c) => {
  throw new Error('Not implemented')
}
