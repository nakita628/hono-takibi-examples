import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameRoute,
  getV1ParentDataSourcesRoute,
  getV1ParentRunsRoute,
  getV1ParentTransferConfigsRoute,
  getV1ParentTransferLogsRoute,
  patchV1NameRoute,
  postV1NameCheckValidCredsRoute,
  postV1NameEnrollDataSourcesRoute,
  postV1ParentScheduleRunsRoute,
  postV1ParentStartManualRunsRoute,
  postV1ParentTransferConfigsRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameLocationsRouteHandler: RouteHandler<typeof getV1NameLocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameCheckValidCredsRouteHandler: RouteHandler<
  typeof postV1NameCheckValidCredsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameEnrollDataSourcesRouteHandler: RouteHandler<
  typeof postV1NameEnrollDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentDataSourcesRouteHandler: RouteHandler<
  typeof getV1ParentDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentRunsRouteHandler: RouteHandler<typeof getV1ParentRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentTransferConfigsRouteHandler: RouteHandler<
  typeof getV1ParentTransferConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentTransferConfigsRouteHandler: RouteHandler<
  typeof postV1ParentTransferConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentTransferLogsRouteHandler: RouteHandler<
  typeof getV1ParentTransferLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentScheduleRunsRouteHandler: RouteHandler<
  typeof postV1ParentScheduleRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentStartManualRunsRouteHandler: RouteHandler<
  typeof postV1ParentStartManualRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
