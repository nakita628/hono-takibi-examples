import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrackingSnippetRoute } from '../routes'

export const getTrackingSnippetRouteHandler: RouteHandler<typeof getTrackingSnippetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
