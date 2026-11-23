import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessageCommentReactionsIdRoute,
  getMessageCommentReactionsIdRoute,
  getMessageCommentReactionsRoute,
  postMessageCommentReactionsRoute,
} from '../routes'

export const getMessageCommentReactionsRouteHandler: RouteHandler<
  typeof getMessageCommentReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessageCommentReactionsRouteHandler: RouteHandler<
  typeof postMessageCommentReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessageCommentReactionsIdRouteHandler: RouteHandler<
  typeof deleteMessageCommentReactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessageCommentReactionsIdRouteHandler: RouteHandler<
  typeof getMessageCommentReactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
