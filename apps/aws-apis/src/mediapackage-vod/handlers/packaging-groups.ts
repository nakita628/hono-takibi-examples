import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePackagingGroupsIdRoute,
  getPackagingGroupsIdRoute,
  getPackagingGroupsRoute,
  postPackagingGroupsRoute,
  putPackagingGroupsIdConfigureLogsRoute,
  putPackagingGroupsIdRoute,
} from '../routes'

export const putPackagingGroupsIdConfigureLogsRouteHandler: RouteHandler<
  typeof putPackagingGroupsIdConfigureLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPackagingGroupsRouteHandler: RouteHandler<
  typeof postPackagingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPackagingGroupsRouteHandler: RouteHandler<typeof getPackagingGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePackagingGroupsIdRouteHandler: RouteHandler<
  typeof deletePackagingGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPackagingGroupsIdRouteHandler: RouteHandler<
  typeof getPackagingGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPackagingGroupsIdRouteHandler: RouteHandler<
  typeof putPackagingGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
