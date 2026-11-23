import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersLinkedAccountsProviderProviderUserIdRoute,
  getUsersAccountProvidersRoute,
  getUsersMeRoute,
  postUsersLinkedAccountsRoute,
  postUsersMfaSmsEnrollRoute,
} from '../routes'

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersAccountProvidersRouteHandler: RouteHandler<
  typeof getUsersAccountProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersLinkedAccountsRouteHandler: RouteHandler<
  typeof postUsersLinkedAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersLinkedAccountsProviderProviderUserIdRouteHandler: RouteHandler<
  typeof deleteUsersLinkedAccountsProviderProviderUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersMfaSmsEnrollRouteHandler: RouteHandler<
  typeof postUsersMfaSmsEnrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}
