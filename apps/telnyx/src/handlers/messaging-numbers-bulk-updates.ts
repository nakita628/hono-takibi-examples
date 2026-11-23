import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessagingNumbersBulkUpdatesOrderId2Route,
  postMessagingNumbersBulkUpdates2Route,
} from '../routes'

export const postMessagingNumbersBulkUpdates2RouteHandler: RouteHandler<
  typeof postMessagingNumbersBulkUpdates2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingNumbersBulkUpdatesOrderId2RouteHandler: RouteHandler<
  typeof getMessagingNumbersBulkUpdatesOrderId2Route
> = async (c) => {
  throw new Error('Not implemented')
}
