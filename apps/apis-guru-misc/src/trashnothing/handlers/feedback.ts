import type { RouteHandler } from '@hono/zod-openapi'
import type { postFeedbackRoute } from '../routes'

export const postFeedbackRouteHandler: RouteHandler<typeof postFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
