import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postConversationsConversationIdOfferRoute,
  postConversationsIdOfferRoute,
} from '../routes'

export const postConversationsConversationIdOfferRouteHandler: RouteHandler<
  typeof postConversationsConversationIdOfferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsIdOfferRouteHandler: RouteHandler<
  typeof postConversationsIdOfferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
