import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdAuthorizationRoute,
  deleteUsersUserIdRoute,
  postUsersUserIdLinkRoute,
} from '../routes'

export const deleteUsersUserIdRouteHandler: RouteHandler<typeof deleteUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserIdAuthorizationRouteHandler: RouteHandler<
  typeof deleteUsersUserIdAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdLinkRouteHandler: RouteHandler<
  typeof postUsersUserIdLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
