import type { RouteHandler } from '@hono/zod-openapi'
import type { getMajorProjectsRoute } from '../routes'

export const getMajorProjectsRouteHandler: RouteHandler<typeof getMajorProjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
