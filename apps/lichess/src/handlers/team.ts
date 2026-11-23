import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeamUpdatesRoute,
  getTeamUpdatesTeamIdRoute,
  postTeamTeamIdJoinRoute,
  postTeamTeamIdPmAllRoute,
  postTeamTeamIdQuitRoute,
} from '../routes'

export const postTeamTeamIdJoinRouteHandler: RouteHandler<typeof postTeamTeamIdJoinRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTeamTeamIdQuitRouteHandler: RouteHandler<typeof postTeamTeamIdQuitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamUpdatesRouteHandler: RouteHandler<typeof getTeamUpdatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamUpdatesTeamIdRouteHandler: RouteHandler<
  typeof getTeamUpdatesTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamTeamIdPmAllRouteHandler: RouteHandler<
  typeof postTeamTeamIdPmAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}
