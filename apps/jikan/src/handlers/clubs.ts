import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClubsIdMembersRoute,
  getClubsIdRelationsRoute,
  getClubsIdRoute,
  getClubsIdStaffRoute,
  getClubsRoute,
} from '../routes'

export const getClubsIdRouteHandler: RouteHandler<typeof getClubsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClubsIdMembersRouteHandler: RouteHandler<typeof getClubsIdMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClubsIdStaffRouteHandler: RouteHandler<typeof getClubsIdStaffRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClubsIdRelationsRouteHandler: RouteHandler<
  typeof getClubsIdRelationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClubsRouteHandler: RouteHandler<typeof getClubsRoute> = async (c) => {
  throw new Error('Not implemented')
}
