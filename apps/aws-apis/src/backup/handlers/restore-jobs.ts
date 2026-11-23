import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRestoreJobsIndexRoute,
  getRestoreJobsRestoreJobIdRoute,
  putRestoreJobsRoute,
} from '../routes'

export const getRestoreJobsRestoreJobIdRouteHandler: RouteHandler<
  typeof getRestoreJobsRestoreJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestoreJobsIndexRouteHandler: RouteHandler<
  typeof getRestoreJobsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestoreJobsRouteHandler: RouteHandler<typeof putRestoreJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}
