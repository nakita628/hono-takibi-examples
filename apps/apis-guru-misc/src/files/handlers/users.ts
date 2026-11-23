import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersIdRoute,
  getUsersIdRoute,
  getUsersRoute,
  getUsersUserIdApiKeysRoute,
  getUsersUserIdCipherUsesRoute,
  getUsersUserIdGroupsRoute,
  getUsersUserIdPermissionsRoute,
  getUsersUserIdPublicKeysRoute,
  patchUsersIdRoute,
  postUsersId2faResetRoute,
  postUsersIdResendWelcomeEmailRoute,
  postUsersIdUnlockRoute,
  postUsersRoute,
  postUsersUserIdApiKeysRoute,
  postUsersUserIdPublicKeysRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersIdRouteHandler: RouteHandler<typeof deleteUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdRouteHandler: RouteHandler<typeof getUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersIdRouteHandler: RouteHandler<typeof patchUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersId2faResetRouteHandler: RouteHandler<
  typeof postUsersId2faResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersIdResendWelcomeEmailRouteHandler: RouteHandler<
  typeof postUsersIdResendWelcomeEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersIdUnlockRouteHandler: RouteHandler<typeof postUsersIdUnlockRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdApiKeysRouteHandler: RouteHandler<
  typeof getUsersUserIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdApiKeysRouteHandler: RouteHandler<
  typeof postUsersUserIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdCipherUsesRouteHandler: RouteHandler<
  typeof getUsersUserIdCipherUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdGroupsRouteHandler: RouteHandler<
  typeof getUsersUserIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdPermissionsRouteHandler: RouteHandler<
  typeof getUsersUserIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdPublicKeysRouteHandler: RouteHandler<
  typeof getUsersUserIdPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdPublicKeysRouteHandler: RouteHandler<
  typeof postUsersUserIdPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
