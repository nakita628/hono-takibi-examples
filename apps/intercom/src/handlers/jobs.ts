import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsStatusJobIdRoute } from '../routes'

export const getJobsStatusJobIdRouteHandler: RouteHandler<typeof getJobsStatusJobIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
