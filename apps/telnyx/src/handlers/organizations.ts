import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationsUsersIdRoute,
  getOrganizationsUsersRoute,
  getOrganizationsUsersUsersGroupsReportRoute,
  postOrganizationsUsersIdActionsRemoveRoute,
} from '../routes'

export const getOrganizationsUsersRouteHandler: RouteHandler<
  typeof getOrganizationsUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsUsersUsersGroupsReportRouteHandler: RouteHandler<
  typeof getOrganizationsUsersUsersGroupsReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsUsersIdRouteHandler: RouteHandler<
  typeof getOrganizationsUsersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsUsersIdActionsRemoveRouteHandler: RouteHandler<
  typeof postOrganizationsUsersIdActionsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
