import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsIdMembersJsonRoute,
  getGroupsIdJsonRoute,
  getGroupsIdMembersJsonRoute,
  putGroupsIdJsonRoute,
  putGroupsIdMembersJsonRoute,
} from '../routes'

export const getGroupsIdJsonRouteHandler: RouteHandler<typeof getGroupsIdJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsIdJsonRouteHandler: RouteHandler<typeof putGroupsIdJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsIdMembersJsonRouteHandler: RouteHandler<
  typeof deleteGroupsIdMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsIdMembersJsonRouteHandler: RouteHandler<
  typeof getGroupsIdMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsIdMembersJsonRouteHandler: RouteHandler<
  typeof putGroupsIdMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
