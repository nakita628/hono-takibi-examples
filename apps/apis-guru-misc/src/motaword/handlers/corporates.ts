import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCorporatesAllRoute,
  getCorporatesCorporateIdPermissionsRoute,
  getCorporatesCorporateIdRoute,
  getCorporatesCorporateIdUserGroupsRoute,
  getCorporatesCorporateIdUsersRoute,
  postCorporatesCorporateIdUserGroupsRoute,
} from '../routes'

export const getCorporatesAllRouteHandler: RouteHandler<typeof getCorporatesAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCorporatesCorporateIdRouteHandler: RouteHandler<
  typeof getCorporatesCorporateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCorporatesCorporateIdPermissionsRouteHandler: RouteHandler<
  typeof getCorporatesCorporateIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCorporatesCorporateIdUserGroupsRouteHandler: RouteHandler<
  typeof getCorporatesCorporateIdUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCorporatesCorporateIdUserGroupsRouteHandler: RouteHandler<
  typeof postCorporatesCorporateIdUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCorporatesCorporateIdUsersRouteHandler: RouteHandler<
  typeof getCorporatesCorporateIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
