import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJobsIdKeyRoute,
  getJobsIdRoute,
  getJobsRoute,
  postJobsIdCancelRoute,
  postJobsIdPauseRoute,
  postJobsIdResubmitRoute,
  postJobsIdResumeRoute,
} from '../routes'

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsIdRouteHandler: RouteHandler<typeof getJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsIdCancelRouteHandler: RouteHandler<typeof postJobsIdCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postJobsIdPauseRouteHandler: RouteHandler<typeof postJobsIdPauseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsIdResubmitRouteHandler: RouteHandler<typeof postJobsIdResubmitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postJobsIdResumeRouteHandler: RouteHandler<typeof postJobsIdResumeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJobsIdKeyRouteHandler: RouteHandler<typeof getJobsIdKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
