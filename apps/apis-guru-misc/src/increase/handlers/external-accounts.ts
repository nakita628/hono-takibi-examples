import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExternalAccountsExternalAccountIdRoute,
  getExternalAccountsRoute,
  patchExternalAccountsExternalAccountIdRoute,
  postExternalAccountsRoute,
} from '../routes'

export const getExternalAccountsRouteHandler: RouteHandler<
  typeof getExternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExternalAccountsRouteHandler: RouteHandler<
  typeof postExternalAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExternalAccountsExternalAccountIdRouteHandler: RouteHandler<
  typeof getExternalAccountsExternalAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExternalAccountsExternalAccountIdRouteHandler: RouteHandler<
  typeof patchExternalAccountsExternalAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
