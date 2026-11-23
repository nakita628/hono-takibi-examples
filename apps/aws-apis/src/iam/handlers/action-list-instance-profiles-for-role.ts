import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListInstanceProfilesForRoleRoute,
  postActionListInstanceProfilesForRoleRoute,
} from '../routes'

export const getActionListInstanceProfilesForRoleRouteHandler: RouteHandler<
  typeof getActionListInstanceProfilesForRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListInstanceProfilesForRoleRouteHandler: RouteHandler<
  typeof postActionListInstanceProfilesForRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
