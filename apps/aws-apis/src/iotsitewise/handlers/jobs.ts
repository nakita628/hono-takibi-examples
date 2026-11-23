import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsJobIdRoute, getJobsRoute, postJobsRoute } from '../routes'

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdRouteHandler: RouteHandler<typeof getJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
