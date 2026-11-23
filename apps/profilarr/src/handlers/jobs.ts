import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsIdRoute } from '../routes'

export const getJobsIdRouteHandler: RouteHandler<typeof getJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
