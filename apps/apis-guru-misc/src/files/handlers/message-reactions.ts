import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessageReactionsIdRoute,
  getMessageReactionsIdRoute,
  getMessageReactionsRoute,
  postMessageReactionsRoute,
} from '../routes'

export const getMessageReactionsRouteHandler: RouteHandler<
  typeof getMessageReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessageReactionsRouteHandler: RouteHandler<
  typeof postMessageReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessageReactionsIdRouteHandler: RouteHandler<
  typeof deleteMessageReactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessageReactionsIdRouteHandler: RouteHandler<
  typeof getMessageReactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
