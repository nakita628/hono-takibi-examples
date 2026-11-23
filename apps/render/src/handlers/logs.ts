import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLogsStreamsOwnerOwnerIdRoute,
  deleteLogsStreamsResourceResourceIdRoute,
  getLogsRoute,
  getLogsStreamsOwnerOwnerIdRoute,
  getLogsStreamsResourceResourceIdRoute,
  getLogsStreamsResourceRoute,
  getLogsSubscribeRoute,
  getLogsValuesRoute,
  putLogsStreamsOwnerOwnerIdRoute,
  putLogsStreamsResourceResourceIdRoute,
} from '../routes'

export const getLogsRouteHandler: RouteHandler<typeof getLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsSubscribeRouteHandler: RouteHandler<typeof getLogsSubscribeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLogsValuesRouteHandler: RouteHandler<typeof getLogsValuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsStreamsOwnerOwnerIdRouteHandler: RouteHandler<
  typeof getLogsStreamsOwnerOwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLogsStreamsOwnerOwnerIdRouteHandler: RouteHandler<
  typeof putLogsStreamsOwnerOwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLogsStreamsOwnerOwnerIdRouteHandler: RouteHandler<
  typeof deleteLogsStreamsOwnerOwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsStreamsResourceRouteHandler: RouteHandler<
  typeof getLogsStreamsResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsStreamsResourceResourceIdRouteHandler: RouteHandler<
  typeof getLogsStreamsResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLogsStreamsResourceResourceIdRouteHandler: RouteHandler<
  typeof putLogsStreamsResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLogsStreamsResourceResourceIdRouteHandler: RouteHandler<
  typeof deleteLogsStreamsResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
