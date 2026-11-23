import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessagesIdReactionTypeRoute,
  deleteMessagesIdRoute,
  getMessagesIdReactionsRoute,
  getMessagesIdRoute,
  getMessagesParentIdRepliesRoute,
  postMessagesIdActionRoute,
  postMessagesIdCommitRoute,
  postMessagesIdReactionRoute,
  postMessagesIdRoute,
  postMessagesIdTranslateRoute,
  putMessagesIdRoute,
} from '../routes'

export const deleteMessagesIdRouteHandler: RouteHandler<typeof deleteMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMessagesIdRouteHandler: RouteHandler<typeof getMessagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesIdRouteHandler: RouteHandler<typeof postMessagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMessagesIdRouteHandler: RouteHandler<typeof putMessagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesIdActionRouteHandler: RouteHandler<
  typeof postMessagesIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesIdCommitRouteHandler: RouteHandler<
  typeof postMessagesIdCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesIdReactionRouteHandler: RouteHandler<
  typeof postMessagesIdReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessagesIdReactionTypeRouteHandler: RouteHandler<
  typeof deleteMessagesIdReactionTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesIdReactionsRouteHandler: RouteHandler<
  typeof getMessagesIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesIdTranslateRouteHandler: RouteHandler<
  typeof postMessagesIdTranslateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesParentIdRepliesRouteHandler: RouteHandler<
  typeof getMessagesParentIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
