import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  patchUsersUserIdRoute,
  postUsersMeChangePasswordRoute,
  postUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersMeChangePasswordRouteHandler: RouteHandler<
  typeof postUsersMeChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserIdRouteHandler: RouteHandler<typeof deleteUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersUserIdRouteHandler: RouteHandler<typeof patchUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
