import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationActivitiesRoute,
  getOrganizationInvitedUsersRoute,
  getOrganizationUserEmailPermissionsRoute,
  postOrganizationUserInvitationSendRoute,
  postOrganizationUserUpdatePermissionsRoute,
  putOrganizationUserInvitationActionEmailRoute,
  putOrganizationUserInvitationRevokeEmailRoute,
} from '../routes'

export const getOrganizationActivitiesRouteHandler: RouteHandler<
  typeof getOrganizationActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationInvitedUsersRouteHandler: RouteHandler<
  typeof getOrganizationInvitedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationUserInvitationRevokeEmailRouteHandler: RouteHandler<
  typeof putOrganizationUserInvitationRevokeEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationUserInvitationSendRouteHandler: RouteHandler<
  typeof postOrganizationUserInvitationSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationUserInvitationActionEmailRouteHandler: RouteHandler<
  typeof putOrganizationUserInvitationActionEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationUserUpdatePermissionsRouteHandler: RouteHandler<
  typeof postOrganizationUserUpdatePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUserEmailPermissionsRouteHandler: RouteHandler<
  typeof getOrganizationUserEmailPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
