import type { RouteHandler } from '@hono/zod-openapi'
import type { getWhatsappStatisticsEventsRoute, postWhatsappSendMessageRoute } from '../routes'

export const postWhatsappSendMessageRouteHandler: RouteHandler<
  typeof postWhatsappSendMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWhatsappStatisticsEventsRouteHandler: RouteHandler<
  typeof getWhatsappStatisticsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
