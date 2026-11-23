import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamDestroyRoute,
  getTeamInfoRoute,
  getTeamInvitesRoute,
  getTeamMembersTeamIdRoute,
  getTeamRoute,
  getTeamSettingsRoute,
  getTeamSubTeamsTeamIdRoute,
  postTeamCreateRoute,
  postTeamRemoveMemberRoute,
  postTeamSettingsRoute,
  putTeamAddMemberRoute,
  putTeamRoute,
} from '../routes'

export const putTeamAddMemberRouteHandler: RouteHandler<typeof putTeamAddMemberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTeamCreateRouteHandler: RouteHandler<typeof postTeamCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamDestroyRouteHandler: RouteHandler<typeof deleteTeamDestroyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamRouteHandler: RouteHandler<typeof getTeamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamRouteHandler: RouteHandler<typeof putTeamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamInfoRouteHandler: RouteHandler<typeof getTeamInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamInvitesRouteHandler: RouteHandler<typeof getTeamInvitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamMembersTeamIdRouteHandler: RouteHandler<
  typeof getTeamMembersTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamRemoveMemberRouteHandler: RouteHandler<
  typeof postTeamRemoveMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamSettingsRouteHandler: RouteHandler<typeof getTeamSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamSettingsRouteHandler: RouteHandler<typeof postTeamSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamSubTeamsTeamIdRouteHandler: RouteHandler<
  typeof getTeamSubTeamsTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
