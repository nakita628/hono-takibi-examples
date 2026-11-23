import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTopicsPrivateMessagesSentUsernameJsonRoute,
  getTopicsPrivateMessagesUsernameJsonRoute,
} from '../routes'

export const getTopicsPrivateMessagesSentUsernameJsonRouteHandler: RouteHandler<
  typeof getTopicsPrivateMessagesSentUsernameJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsPrivateMessagesUsernameJsonRouteHandler: RouteHandler<
  typeof getTopicsPrivateMessagesUsernameJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
