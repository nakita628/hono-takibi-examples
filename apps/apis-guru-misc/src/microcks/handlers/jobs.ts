import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteJobsIdRoute,
  getJobsCountRoute,
  getJobsIdRoute,
  getJobsRoute,
  postJobsIdRoute,
  postJobsRoute,
  putJobsIdActivateRoute,
  putJobsIdStartRoute,
  putJobsIdStopRoute,
} from '../routes'

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsCountRouteHandler: RouteHandler<typeof getJobsCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteJobsIdRouteHandler: RouteHandler<typeof deleteJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsIdRouteHandler: RouteHandler<typeof getJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsIdRouteHandler: RouteHandler<typeof postJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsIdActivateRouteHandler: RouteHandler<typeof putJobsIdActivateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putJobsIdStartRouteHandler: RouteHandler<typeof putJobsIdStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsIdStopRouteHandler: RouteHandler<typeof putJobsIdStopRoute> = async (c) => {
  throw new Error('Not implemented')
}
