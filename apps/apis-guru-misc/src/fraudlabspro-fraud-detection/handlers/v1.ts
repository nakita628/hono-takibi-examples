import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1OrderFeedbackRoute, postV1OrderScreenRoute } from '../routes'

export const postV1OrderFeedbackRouteHandler: RouteHandler<
  typeof postV1OrderFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrderScreenRouteHandler: RouteHandler<typeof postV1OrderScreenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
