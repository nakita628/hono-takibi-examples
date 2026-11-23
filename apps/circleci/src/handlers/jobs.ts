import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsJobIdRoute, postJobsJobIdCancelRoute } from '../routes'

export const postJobsJobIdCancelRouteHandler: RouteHandler<
  typeof postJobsJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdRouteHandler: RouteHandler<typeof getJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
