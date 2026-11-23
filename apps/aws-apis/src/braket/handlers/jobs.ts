import type { RouteHandler } from '@hono/zod-openapi'
import type { postJobsRoute } from '../routes'

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}
