import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetFeedbackRoute } from '../routes'

export const postGetFeedbackRouteHandler: RouteHandler<typeof postGetFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
