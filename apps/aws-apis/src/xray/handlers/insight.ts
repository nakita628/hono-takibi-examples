import type { RouteHandler } from '@hono/zod-openapi'
import type { postInsightRoute } from '../routes'

export const postInsightRouteHandler: RouteHandler<typeof postInsightRoute> = async (c) => {
  throw new Error('Not implemented')
}
