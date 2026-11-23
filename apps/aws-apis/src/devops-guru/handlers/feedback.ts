import type { RouteHandler } from '@hono/zod-openapi'
import type { postFeedbackRoute, putFeedbackRoute } from '../routes'

export const postFeedbackRouteHandler: RouteHandler<typeof postFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeedbackRouteHandler: RouteHandler<typeof putFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
