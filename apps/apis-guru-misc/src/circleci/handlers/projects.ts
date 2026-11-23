import type { RouteHandler } from '@hono/zod-openapi'
import type { getProjectsRoute } from '../routes'

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}
