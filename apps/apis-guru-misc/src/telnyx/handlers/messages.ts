import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessagesIdRoute,
  postMessagesLongCodeRoute,
  postMessagesNumberPoolRoute,
  postMessagesRoute,
  postMessagesShortCodeRoute,
} from '../routes'

export const postMessagesRouteHandler: RouteHandler<typeof postMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesLongCodeRouteHandler: RouteHandler<
  typeof postMessagesLongCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesNumberPoolRouteHandler: RouteHandler<
  typeof postMessagesNumberPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesShortCodeRouteHandler: RouteHandler<
  typeof postMessagesShortCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesIdRouteHandler: RouteHandler<typeof getMessagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
