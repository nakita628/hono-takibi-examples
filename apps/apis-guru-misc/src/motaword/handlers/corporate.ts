import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCorporatePermissionsRoute,
  getCorporateRoute,
  getCorporateUserGroupsRoute,
  getCorporateUsersRoute,
  postCorporateUserGroupsRoute,
  postCorporateUsersRoute,
} from '../routes'

export const getCorporateRouteHandler: RouteHandler<typeof getCorporateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCorporatePermissionsRouteHandler: RouteHandler<
  typeof getCorporatePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCorporateUserGroupsRouteHandler: RouteHandler<
  typeof getCorporateUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCorporateUserGroupsRouteHandler: RouteHandler<
  typeof postCorporateUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCorporateUsersRouteHandler: RouteHandler<typeof getCorporateUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCorporateUsersRouteHandler: RouteHandler<typeof postCorporateUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
