import type { RouteHandler } from '@hono/zod-openapi'
import type { getSegmentsRoute } from '../routes'

export const getSegmentsRouteHandler: RouteHandler<typeof getSegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
