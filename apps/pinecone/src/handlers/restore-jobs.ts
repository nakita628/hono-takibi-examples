import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestoreJobsJobIdRoute, getRestoreJobsRoute } from '../routes'

export const getRestoreJobsRouteHandler: RouteHandler<typeof getRestoreJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestoreJobsJobIdRouteHandler: RouteHandler<
  typeof getRestoreJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
