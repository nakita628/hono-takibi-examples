import type { RouteHandler } from '@hono/zod-openapi'
import type { postTraceSegmentsRoute } from '../routes'

export const postTraceSegmentsRouteHandler: RouteHandler<typeof postTraceSegmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
