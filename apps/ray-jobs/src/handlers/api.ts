import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiJobsSubmissionIdRoute,
  getApiJobsRoute,
  getApiJobsSubmissionIdLogsRoute,
  getApiJobsSubmissionIdLogsTailRoute,
  getApiJobsSubmissionIdRoute,
  getApiVersionRoute,
  postApiJobsRoute,
  postApiJobsSubmissionIdStopRoute,
} from '../routes'

export const getApiVersionRouteHandler: RouteHandler<typeof getApiVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsRouteHandler: RouteHandler<typeof postApiJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsRouteHandler: RouteHandler<typeof getApiJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsSubmissionIdRouteHandler: RouteHandler<
  typeof getApiJobsSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiJobsSubmissionIdRouteHandler: RouteHandler<
  typeof deleteApiJobsSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsSubmissionIdStopRouteHandler: RouteHandler<
  typeof postApiJobsSubmissionIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsSubmissionIdLogsRouteHandler: RouteHandler<
  typeof getApiJobsSubmissionIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsSubmissionIdLogsTailRouteHandler: RouteHandler<
  typeof getApiJobsSubmissionIdLogsTailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
