import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteJobsNameRoute,
  getJobsNameJobRunRunIdRoute,
  getJobsNameJobRunsRoute,
  getJobsNameRoute,
  getJobsRoute,
  postJobsNameJobRunRunIdStopJobRunRoute,
  postJobsNameStartJobRunRoute,
} from '../routes'

export const deleteJobsNameRouteHandler: RouteHandler<typeof deleteJobsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsNameRouteHandler: RouteHandler<typeof getJobsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsNameJobRunRunIdRouteHandler: RouteHandler<
  typeof getJobsNameJobRunRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsNameJobRunsRouteHandler: RouteHandler<typeof getJobsNameJobRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsNameStartJobRunRouteHandler: RouteHandler<
  typeof postJobsNameStartJobRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsNameJobRunRunIdStopJobRunRouteHandler: RouteHandler<
  typeof postJobsNameJobRunRunIdStopJobRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
