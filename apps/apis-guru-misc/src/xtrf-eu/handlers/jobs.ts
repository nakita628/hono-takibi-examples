import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJobsJobIdFilesFileIdRoute,
  getJobsJobIdFilesRoute,
  getJobsJobIdRoute,
  postJobsJobIdFilesOutputRoute,
  putJobsJobIdDatesRoute,
  putJobsJobIdInstructionsRoute,
  putJobsJobIdStatusRoute,
  putJobsJobIdVendorRoute,
} from '../routes'

export const getJobsJobIdRouteHandler: RouteHandler<typeof getJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsJobIdDatesRouteHandler: RouteHandler<typeof putJobsJobIdDatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdFilesRouteHandler: RouteHandler<typeof getJobsJobIdFilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postJobsJobIdFilesOutputRouteHandler: RouteHandler<
  typeof postJobsJobIdFilesOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdFilesFileIdRouteHandler: RouteHandler<
  typeof getJobsJobIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsJobIdInstructionsRouteHandler: RouteHandler<
  typeof putJobsJobIdInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsJobIdStatusRouteHandler: RouteHandler<typeof putJobsJobIdStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putJobsJobIdVendorRouteHandler: RouteHandler<typeof putJobsJobIdVendorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
