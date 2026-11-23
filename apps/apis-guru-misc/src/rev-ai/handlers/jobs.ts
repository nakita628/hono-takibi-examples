import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteJobsIdRoute,
  getJobsIdCaptionsRoute,
  getJobsIdRoute,
  getJobsIdTranscriptRoute,
  getJobsRoute,
  postJobsRoute,
} from '../routes'

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteJobsIdRouteHandler: RouteHandler<typeof deleteJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsIdRouteHandler: RouteHandler<typeof getJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsIdCaptionsRouteHandler: RouteHandler<typeof getJobsIdCaptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJobsIdTranscriptRouteHandler: RouteHandler<
  typeof getJobsIdTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
