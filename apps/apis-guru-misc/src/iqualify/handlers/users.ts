import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersAllProgressRoute,
  getUsersUserEmailBadgesRoute,
  getUsersUserEmailOfferingsOfferingIdProgressRoute,
  getUsersUserEmailOfferingsRoute,
  getUsersUserEmailProgressRoute,
  getUsersUserEmailRoute,
  patchUsersUserEmailRoute,
  patchUsersUserEmailTransferRoute,
  postUsersRoute,
  postUsersUserEmailInviteEmailRoute,
  postUsersUserEmailOfferingsRoute,
  postUsersUserEmailPermissionsPermissionNameRoute,
  putUsersUserEmailSuspendRoute,
} from '../routes'

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersAllProgressRouteHandler: RouteHandler<
  typeof getUsersAllProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserEmailRouteHandler: RouteHandler<typeof getUsersUserEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchUsersUserEmailRouteHandler: RouteHandler<
  typeof patchUsersUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserEmailBadgesRouteHandler: RouteHandler<
  typeof getUsersUserEmailBadgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserEmailInviteEmailRouteHandler: RouteHandler<
  typeof postUsersUserEmailInviteEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserEmailOfferingsRouteHandler: RouteHandler<
  typeof getUsersUserEmailOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserEmailOfferingsRouteHandler: RouteHandler<
  typeof postUsersUserEmailOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserEmailOfferingsOfferingIdProgressRouteHandler: RouteHandler<
  typeof getUsersUserEmailOfferingsOfferingIdProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserEmailPermissionsPermissionNameRouteHandler: RouteHandler<
  typeof postUsersUserEmailPermissionsPermissionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserEmailProgressRouteHandler: RouteHandler<
  typeof getUsersUserEmailProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserEmailSuspendRouteHandler: RouteHandler<
  typeof putUsersUserEmailSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersUserEmailTransferRouteHandler: RouteHandler<
  typeof patchUsersUserEmailTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
