import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeamsTeamGidProjectsRoute,
  getTeamsTeamGidProjectTemplatesRoute,
  getTeamsTeamGidRoute,
  getTeamsTeamGidTeamMembershipsRoute,
  getTeamsTeamGidUsersRoute,
  postTeamsRoute,
  postTeamsTeamGidAddUserRoute,
  postTeamsTeamGidProjectsRoute,
  postTeamsTeamGidRemoveUserRoute,
  putTeamsRoute,
} from '../routes'

export const postTeamsRouteHandler: RouteHandler<typeof postTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamsRouteHandler: RouteHandler<typeof putTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamGidRouteHandler: RouteHandler<typeof getTeamsTeamGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamGidAddUserRouteHandler: RouteHandler<
  typeof postTeamsTeamGidAddUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamGidProjectTemplatesRouteHandler: RouteHandler<
  typeof getTeamsTeamGidProjectTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamGidProjectsRouteHandler: RouteHandler<
  typeof getTeamsTeamGidProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamGidProjectsRouteHandler: RouteHandler<
  typeof postTeamsTeamGidProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamGidRemoveUserRouteHandler: RouteHandler<
  typeof postTeamsTeamGidRemoveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamGidTeamMembershipsRouteHandler: RouteHandler<
  typeof getTeamsTeamGidTeamMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamGidUsersRouteHandler: RouteHandler<
  typeof getTeamsTeamGidUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
