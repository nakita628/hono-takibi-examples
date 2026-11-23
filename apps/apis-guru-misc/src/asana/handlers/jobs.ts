import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsJobGidRoute } from '../routes'

export const getJobsJobGidRouteHandler: RouteHandler<typeof getJobsJobGidRoute> = async (c) => {
  throw new Error('Not implemented')
}
