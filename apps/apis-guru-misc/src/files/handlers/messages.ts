import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessagesIdRoute,
  getMessagesIdRoute,
  getMessagesRoute,
  patchMessagesIdRoute,
  postMessagesRoute,
} from '../routes'

export const getMessagesRouteHandler: RouteHandler<typeof getMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesRouteHandler: RouteHandler<typeof postMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessagesIdRouteHandler: RouteHandler<typeof deleteMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMessagesIdRouteHandler: RouteHandler<typeof getMessagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMessagesIdRouteHandler: RouteHandler<typeof patchMessagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
