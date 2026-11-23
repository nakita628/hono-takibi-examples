import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersRoute,
  getUsersUserIdDutyStatusRoute,
  getUsersUserIdImageRoute,
  getUsersUserIdRoute,
  getUsersUserIdSetupProgressRoute,
  postUsersUserIdCheckPermissionsRoute,
  postUsersUserIdImageRoute,
  postUsersUserIdPunchInAsManagerRoute,
  postUsersUserIdPunchInRoute,
  postUsersUserIdPunchOutRoute,
  putUsersUserIdChangePasswordRoute,
  putUsersUserIdProfileRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdChangePasswordRouteHandler: RouteHandler<
  typeof putUsersUserIdChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdCheckPermissionsRouteHandler: RouteHandler<
  typeof postUsersUserIdCheckPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdDutyStatusRouteHandler: RouteHandler<
  typeof getUsersUserIdDutyStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdImageRouteHandler: RouteHandler<
  typeof getUsersUserIdImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdImageRouteHandler: RouteHandler<
  typeof postUsersUserIdImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdProfileRouteHandler: RouteHandler<
  typeof putUsersUserIdProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdPunchInRouteHandler: RouteHandler<
  typeof postUsersUserIdPunchInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdPunchInAsManagerRouteHandler: RouteHandler<
  typeof postUsersUserIdPunchInAsManagerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdPunchOutRouteHandler: RouteHandler<
  typeof postUsersUserIdPunchOutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdSetupProgressRouteHandler: RouteHandler<
  typeof getUsersUserIdSetupProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
