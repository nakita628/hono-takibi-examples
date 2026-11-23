import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamdrivesTeamDriveIdRoute,
  getTeamdrivesRoute,
  getTeamdrivesTeamDriveIdRoute,
  patchTeamdrivesTeamDriveIdRoute,
  postTeamdrivesRoute,
} from '../routes'

export const getTeamdrivesRouteHandler: RouteHandler<typeof getTeamdrivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamdrivesRouteHandler: RouteHandler<typeof postTeamdrivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamdrivesTeamDriveIdRouteHandler: RouteHandler<
  typeof deleteTeamdrivesTeamDriveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamdrivesTeamDriveIdRouteHandler: RouteHandler<
  typeof getTeamdrivesTeamDriveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamdrivesTeamDriveIdRouteHandler: RouteHandler<
  typeof patchTeamdrivesTeamDriveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
