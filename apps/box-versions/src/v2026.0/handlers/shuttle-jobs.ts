import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShuttleJobsShuttleJobIdRoute,
  getShuttleJobsRoute,
  getShuttleJobsShuttleJobIdRoute,
  postShuttleJobsRoute,
  postShuttleJobsShuttleJobIdPrepareMigrationRoute,
  postShuttleJobsShuttleJobIdStartRoute,
  postShuttleJobsShuttleJobIdStopRoute,
  putShuttleJobsShuttleJobIdRoute,
} from '../routes'

export const getShuttleJobsRouteHandler: RouteHandler<typeof getShuttleJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postShuttleJobsRouteHandler: RouteHandler<typeof postShuttleJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShuttleJobsShuttleJobIdRouteHandler: RouteHandler<
  typeof getShuttleJobsShuttleJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShuttleJobsShuttleJobIdRouteHandler: RouteHandler<
  typeof putShuttleJobsShuttleJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteShuttleJobsShuttleJobIdRouteHandler: RouteHandler<
  typeof deleteShuttleJobsShuttleJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShuttleJobsShuttleJobIdStartRouteHandler: RouteHandler<
  typeof postShuttleJobsShuttleJobIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShuttleJobsShuttleJobIdStopRouteHandler: RouteHandler<
  typeof postShuttleJobsShuttleJobIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShuttleJobsShuttleJobIdPrepareMigrationRouteHandler: RouteHandler<
  typeof postShuttleJobsShuttleJobIdPrepareMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
