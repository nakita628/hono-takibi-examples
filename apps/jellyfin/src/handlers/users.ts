import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersConfigurationRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
  postUsersNewRoute,
  postUsersPasswordRoute,
  postUsersRoute,
  postUsersUserIdPolicyRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserIdRouteHandler: RouteHandler<typeof deleteUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdPolicyRouteHandler: RouteHandler<
  typeof postUsersUserIdPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersAuthenticateByNameRouteHandler: RouteHandler<
  typeof postUsersAuthenticateByNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersAuthenticateWithQuickConnectRouteHandler: RouteHandler<
  typeof postUsersAuthenticateWithQuickConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersConfigurationRouteHandler: RouteHandler<
  typeof postUsersConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersForgotPasswordRouteHandler: RouteHandler<
  typeof postUsersForgotPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersForgotPasswordPinRouteHandler: RouteHandler<
  typeof postUsersForgotPasswordPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersNewRouteHandler: RouteHandler<typeof postUsersNewRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersPasswordRouteHandler: RouteHandler<typeof postUsersPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersPublicRouteHandler: RouteHandler<typeof getUsersPublicRoute> = async (c) => {
  throw new Error('Not implemented')
}
