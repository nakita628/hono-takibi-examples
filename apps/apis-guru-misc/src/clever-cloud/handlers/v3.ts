import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV3LogsAppIdDrainsIdOrUrlRoute,
  getV3LogsAppIdDrainsIdOrUrlRoute,
  getV3LogsAppIdDrainsRoute,
  getV3LogsAppIdLogsChunkedRoute,
  getV3LogsAppIdLogsSocketRoute,
  getV3LogsAppIdRoute,
  postV3LogsAppIdDrainsRoute,
} from '../routes'

export const getV3LogsAppIdRouteHandler: RouteHandler<typeof getV3LogsAppIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3LogsAppIdDrainsRouteHandler: RouteHandler<
  typeof getV3LogsAppIdDrainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3LogsAppIdDrainsRouteHandler: RouteHandler<
  typeof postV3LogsAppIdDrainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV3LogsAppIdDrainsIdOrUrlRouteHandler: RouteHandler<
  typeof deleteV3LogsAppIdDrainsIdOrUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3LogsAppIdDrainsIdOrUrlRouteHandler: RouteHandler<
  typeof getV3LogsAppIdDrainsIdOrUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3LogsAppIdLogsChunkedRouteHandler: RouteHandler<
  typeof getV3LogsAppIdLogsChunkedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3LogsAppIdLogsSocketRouteHandler: RouteHandler<
  typeof getV3LogsAppIdLogsSocketRoute
> = async (c) => {
  throw new Error('Not implemented')
}
