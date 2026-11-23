import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteQueryJobsJobIdRoute,
  getQueryJobsJobIdRoute,
  getQueryJobsRoute,
  postQueryJobsRoute,
} from '../routes'

export const getQueryJobsRouteHandler: RouteHandler<typeof getQueryJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryJobsRouteHandler: RouteHandler<typeof postQueryJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQueryJobsJobIdRouteHandler: RouteHandler<
  typeof deleteQueryJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryJobsJobIdRouteHandler: RouteHandler<typeof getQueryJobsJobIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
