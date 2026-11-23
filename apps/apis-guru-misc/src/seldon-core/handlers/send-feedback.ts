import type { RouteHandler } from '@hono/zod-openapi'
import type { getSendFeedbackRoute, postSendFeedbackRoute } from '../routes'

export const getSendFeedbackRouteHandler: RouteHandler<typeof getSendFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendFeedbackRouteHandler: RouteHandler<typeof postSendFeedbackRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
