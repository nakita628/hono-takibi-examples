import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationListJobsActionListJobsRoute,
  postOperationListJobsActionListJobsRoute,
} from '../routes'

export const getOperationListJobsActionListJobsRouteHandler: RouteHandler<
  typeof getOperationListJobsActionListJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationListJobsActionListJobsRouteHandler: RouteHandler<
  typeof postOperationListJobsActionListJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
