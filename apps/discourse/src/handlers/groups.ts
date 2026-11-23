import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsIdMembersJsonRoute,
  getGroupsByIdIdJsonRoute,
  getGroupsNameJsonRoute,
  getGroupsNameMembersJsonRoute,
  putGroupsIdJsonRoute,
  putGroupsIdMembersJsonRoute,
} from '../routes'

export const getGroupsNameJsonRouteHandler: RouteHandler<typeof getGroupsNameJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putGroupsIdJsonRouteHandler: RouteHandler<typeof putGroupsIdJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsByIdIdJsonRouteHandler: RouteHandler<
  typeof getGroupsByIdIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsNameMembersJsonRouteHandler: RouteHandler<
  typeof getGroupsNameMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsIdMembersJsonRouteHandler: RouteHandler<
  typeof putGroupsIdMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsIdMembersJsonRouteHandler: RouteHandler<
  typeof deleteGroupsIdMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
