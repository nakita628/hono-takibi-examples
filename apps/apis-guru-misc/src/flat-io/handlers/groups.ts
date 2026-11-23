import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGroupsGroupRoute,
  getGroupsGroupScoresRoute,
  getGroupsGroupUsersRoute,
} from '../routes'

export const getGroupsGroupRouteHandler: RouteHandler<typeof getGroupsGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupScoresRouteHandler: RouteHandler<
  typeof getGroupsGroupScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupUsersRouteHandler: RouteHandler<
  typeof getGroupsGroupUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
