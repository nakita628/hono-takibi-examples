import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProviderAccountsProviderAccountIdRoute,
  getProviderAccountsProfileRoute,
  getProviderAccountsProviderAccountIdRoute,
  getProviderAccountsRoute,
  putProviderAccountsProviderAccountIdPreferencesRoute,
  putProviderAccountsRoute,
} from '../routes'

export const getProviderAccountsRouteHandler: RouteHandler<
  typeof getProviderAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProviderAccountsRouteHandler: RouteHandler<
  typeof putProviderAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProviderAccountsProfileRouteHandler: RouteHandler<
  typeof getProviderAccountsProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProviderAccountsProviderAccountIdRouteHandler: RouteHandler<
  typeof deleteProviderAccountsProviderAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProviderAccountsProviderAccountIdRouteHandler: RouteHandler<
  typeof getProviderAccountsProviderAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProviderAccountsProviderAccountIdPreferencesRouteHandler: RouteHandler<
  typeof putProviderAccountsProviderAccountIdPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
