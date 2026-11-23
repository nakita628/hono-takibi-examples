import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteJobsJobIdRoute,
  getJobsJobIdJobDocumentRoute,
  getJobsJobIdRoute,
  getJobsJobIdThingsRoute,
  getJobsRoute,
  patchJobsJobIdRoute,
  postJobsJobIdTargetsRoute,
  putJobsJobIdCancelRoute,
  putJobsJobIdRoute,
} from '../routes'

export const postJobsJobIdTargetsRouteHandler: RouteHandler<
  typeof postJobsJobIdTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsJobIdCancelRouteHandler: RouteHandler<typeof putJobsJobIdCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putJobsJobIdRouteHandler: RouteHandler<typeof putJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteJobsJobIdRouteHandler: RouteHandler<typeof deleteJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdRouteHandler: RouteHandler<typeof getJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchJobsJobIdRouteHandler: RouteHandler<typeof patchJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdJobDocumentRouteHandler: RouteHandler<
  typeof getJobsJobIdJobDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdThingsRouteHandler: RouteHandler<typeof getJobsJobIdThingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}
