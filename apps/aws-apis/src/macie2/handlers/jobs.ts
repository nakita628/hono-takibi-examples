import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJobsJobIdRoute,
  patchJobsJobIdRoute,
  postJobsListRoute,
  postJobsRoute,
} from '../routes'

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdRouteHandler: RouteHandler<typeof getJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchJobsJobIdRouteHandler: RouteHandler<typeof patchJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsListRouteHandler: RouteHandler<typeof postJobsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
