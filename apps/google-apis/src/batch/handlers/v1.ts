import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentTasksRoute,
  postV1NameCancelRoute,
  postV1ParentJobsRoute,
  postV1ParentStateReportRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameLocationsRouteHandler: RouteHandler<typeof getV1NameLocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NameOperationsRouteHandler: RouteHandler<
  typeof getV1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentJobsRouteHandler: RouteHandler<typeof getV1ParentJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentJobsRouteHandler: RouteHandler<typeof postV1ParentJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentStateReportRouteHandler: RouteHandler<
  typeof postV1ParentStateReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentTasksRouteHandler: RouteHandler<typeof getV1ParentTasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
