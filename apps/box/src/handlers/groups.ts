import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsGroupIdRoute,
  getGroupsGroupIdCollaborationsRoute,
  getGroupsGroupIdMembershipsRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  postGroupsRoute,
  postGroupsTerminateSessionsRoute,
  putGroupsGroupIdRoute,
} from '../routes'

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsRouteHandler: RouteHandler<typeof postGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsTerminateSessionsRouteHandler: RouteHandler<
  typeof postGroupsTerminateSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdRouteHandler: RouteHandler<typeof getGroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putGroupsGroupIdRouteHandler: RouteHandler<typeof putGroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdMembershipsRouteHandler: RouteHandler<
  typeof getGroupsGroupIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdCollaborationsRouteHandler: RouteHandler<
  typeof getGroupsGroupIdCollaborationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
