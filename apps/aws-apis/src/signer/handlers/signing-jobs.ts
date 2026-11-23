import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSigningJobsJobIdRoute,
  getSigningJobsRoute,
  postSigningJobsRoute,
  putSigningJobsJobIdRevokeRoute,
} from '../routes'

export const getSigningJobsJobIdRouteHandler: RouteHandler<
  typeof getSigningJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigningJobsRouteHandler: RouteHandler<typeof getSigningJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSigningJobsRouteHandler: RouteHandler<typeof postSigningJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSigningJobsJobIdRevokeRouteHandler: RouteHandler<
  typeof putSigningJobsJobIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
