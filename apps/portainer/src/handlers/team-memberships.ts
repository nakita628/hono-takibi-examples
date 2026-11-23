import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamMembershipsIdRoute,
  getTeamMembershipsRoute,
  postTeamMembershipsRoute,
  putTeamMembershipsIdRoute,
} from '../routes'

export const getTeamMembershipsRouteHandler: RouteHandler<typeof getTeamMembershipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTeamMembershipsRouteHandler: RouteHandler<
  typeof postTeamMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamMembershipsIdRouteHandler: RouteHandler<
  typeof deleteTeamMembershipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamMembershipsIdRouteHandler: RouteHandler<
  typeof putTeamMembershipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
