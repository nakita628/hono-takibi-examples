import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTelephonyDeviceInfosRoute,
  getTelephonyTelephonyConversationIdJournalRoute,
  getTelephonyTelephonyConversationIdRoute,
} from '../routes'

export const getTelephonyDeviceInfosRouteHandler: RouteHandler<
  typeof getTelephonyDeviceInfosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTelephonyTelephonyConversationIdRouteHandler: RouteHandler<
  typeof getTelephonyTelephonyConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTelephonyTelephonyConversationIdJournalRouteHandler: RouteHandler<
  typeof getTelephonyTelephonyConversationIdJournalRoute
> = async (c) => {
  throw new Error('Not implemented')
}
