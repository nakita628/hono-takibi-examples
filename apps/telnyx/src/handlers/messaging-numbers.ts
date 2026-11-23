import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessagingNumbersBulkUpdatesOrderIdRoute,
  postMessagingNumbersBulkUpdatesRoute,
} from '../routes'

export const postMessagingNumbersBulkUpdatesRouteHandler: RouteHandler<
  typeof postMessagingNumbersBulkUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingNumbersBulkUpdatesOrderIdRouteHandler: RouteHandler<
  typeof getMessagingNumbersBulkUpdatesOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
