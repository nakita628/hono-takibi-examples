import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersTotpDeleteUserIdRoute,
  postUsersInitiatePasswordResetUserIdFirstTimeResetRoute,
} from '../routes'

export const postUsersInitiatePasswordResetUserIdFirstTimeResetRouteHandler: RouteHandler<
  typeof postUsersInitiatePasswordResetUserIdFirstTimeResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersTotpDeleteUserIdRouteHandler: RouteHandler<
  typeof deleteUsersTotpDeleteUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
