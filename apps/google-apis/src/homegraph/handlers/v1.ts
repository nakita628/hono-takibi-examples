import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AgentUserIdRoute,
  postV1DevicesQueryRoute,
  postV1DevicesReportStateAndNotificationRoute,
  postV1DevicesRequestSyncRoute,
  postV1DevicesSyncRoute,
} from '../routes'

export const postV1DevicesQueryRouteHandler: RouteHandler<typeof postV1DevicesQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DevicesReportStateAndNotificationRouteHandler: RouteHandler<
  typeof postV1DevicesReportStateAndNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DevicesRequestSyncRouteHandler: RouteHandler<
  typeof postV1DevicesRequestSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DevicesSyncRouteHandler: RouteHandler<typeof postV1DevicesSyncRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AgentUserIdRouteHandler: RouteHandler<
  typeof deleteV1AgentUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
