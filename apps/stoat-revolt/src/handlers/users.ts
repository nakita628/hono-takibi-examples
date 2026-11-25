import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersMeRoute,
  getUsersTargetRoute,
  patchUsersTargetRoute,
  getUsersTargetFlagsRoute,
  patchUsersMeUsernameRoute,
  getUsersTargetDefaultAvatarRoute,
  getUsersTargetProfileRoute,
  getUsersDmsRoute,
  getUsersTargetDmRoute,
  getUsersTargetMutualRoute,
  putUsersTargetFriendRoute,
  deleteUsersTargetFriendRoute,
  putUsersTargetBlockRoute,
  deleteUsersTargetBlockRoute,
  postUsersFriendRoute,
} from '../routes'

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersTargetRouteHandler: RouteHandler<typeof getUsersTargetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersTargetRouteHandler: RouteHandler<typeof patchUsersTargetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersTargetFlagsRouteHandler: RouteHandler<
  typeof getUsersTargetFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersMeUsernameRouteHandler: RouteHandler<
  typeof patchUsersMeUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersTargetDefaultAvatarRouteHandler: RouteHandler<
  typeof getUsersTargetDefaultAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersTargetProfileRouteHandler: RouteHandler<
  typeof getUsersTargetProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersDmsRouteHandler: RouteHandler<typeof getUsersDmsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersTargetDmRouteHandler: RouteHandler<typeof getUsersTargetDmRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersTargetMutualRouteHandler: RouteHandler<
  typeof getUsersTargetMutualRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersTargetFriendRouteHandler: RouteHandler<
  typeof putUsersTargetFriendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersTargetFriendRouteHandler: RouteHandler<
  typeof deleteUsersTargetFriendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersTargetBlockRouteHandler: RouteHandler<
  typeof putUsersTargetBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersTargetBlockRouteHandler: RouteHandler<
  typeof deleteUsersTargetBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersFriendRouteHandler: RouteHandler<typeof postUsersFriendRoute> = async (c) => {
  throw new Error('Not implemented')
}
