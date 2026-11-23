import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopicTopicNameRoute } from '../routes'

export const getTopicTopicNameRouteHandler: RouteHandler<typeof getTopicTopicNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
