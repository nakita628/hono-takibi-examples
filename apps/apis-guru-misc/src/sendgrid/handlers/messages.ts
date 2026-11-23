import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessagesDownloadDownloadUuidRoute,
  getMessagesMsgIdRoute,
  getMessagesRoute,
  postMessagesDownloadRoute,
} from '../routes'

export const getMessagesRouteHandler: RouteHandler<typeof getMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesDownloadRouteHandler: RouteHandler<
  typeof postMessagesDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesDownloadDownloadUuidRouteHandler: RouteHandler<
  typeof getMessagesDownloadDownloadUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesMsgIdRouteHandler: RouteHandler<typeof getMessagesMsgIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
