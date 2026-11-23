import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeliveryIssuesRoute, postDeliveryIssuesRoute } from '../routes'

export const getDeliveryIssuesRouteHandler: RouteHandler<typeof getDeliveryIssuesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDeliveryIssuesRouteHandler: RouteHandler<typeof postDeliveryIssuesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
