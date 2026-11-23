import type { RouteHandler } from '@hono/zod-openapi'
import type { postTraceSummariesRoute } from '../routes'

export const postTraceSummariesRouteHandler: RouteHandler<typeof postTraceSummariesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
