import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamsIdRoute,
  getTeamsIdMembershipsRoute,
  getTeamsIdRoute,
  getTeamsRoute,
  postTeamsRoute,
  putTeamsIdRoute,
} from '../routes'

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsRouteHandler: RouteHandler<typeof postTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsIdRouteHandler: RouteHandler<typeof deleteTeamsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsIdRouteHandler: RouteHandler<typeof getTeamsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamsIdRouteHandler: RouteHandler<typeof putTeamsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsIdMembershipsRouteHandler: RouteHandler<
  typeof getTeamsIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
