import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSmsMessagesIdRoute,
  getSmsMessagesIdRoute,
  getSmsMessagesRoute,
  patchSmsMessagesIdRoute,
  postSmsMessagesRoute,
} from '../routes'

export const getSmsMessagesRouteHandler: RouteHandler<typeof getSmsMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSmsMessagesRouteHandler: RouteHandler<typeof postSmsMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSmsMessagesIdRouteHandler: RouteHandler<
  typeof deleteSmsMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSmsMessagesIdRouteHandler: RouteHandler<typeof getSmsMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSmsMessagesIdRouteHandler: RouteHandler<typeof patchSmsMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
