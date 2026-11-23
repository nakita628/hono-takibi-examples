import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutFeedbackRoute } from '../routes'

export const postPutFeedbackRouteHandler: RouteHandler<typeof postPutFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
