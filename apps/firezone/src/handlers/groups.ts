import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsIdRoute,
  getGroupsGroupIdMembershipsRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  patchGroupsGroupIdMembershipsRoute,
  patchGroupsIdRoute,
  postGroupsRoute,
  putGroupsGroupIdMembershipsRoute,
  putGroupsIdRoute,
} from '../routes'

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsRouteHandler: RouteHandler<typeof postGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdMembershipsRouteHandler: RouteHandler<
  typeof getGroupsGroupIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGroupsGroupIdMembershipsRouteHandler: RouteHandler<
  typeof patchGroupsGroupIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsGroupIdMembershipsRouteHandler: RouteHandler<
  typeof putGroupsGroupIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsIdRouteHandler: RouteHandler<typeof deleteGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsIdRouteHandler: RouteHandler<typeof getGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGroupsIdRouteHandler: RouteHandler<typeof patchGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsIdRouteHandler: RouteHandler<typeof putGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
