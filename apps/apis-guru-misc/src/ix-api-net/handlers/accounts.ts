import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsIdRoute,
  getAccountsIdRoute,
  getAccountsRoute,
  patchAccountsIdRoute,
  postAccountsRoute,
  putAccountsIdRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsIdRouteHandler: RouteHandler<typeof deleteAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccountsIdRouteHandler: RouteHandler<typeof getAccountsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountsIdRouteHandler: RouteHandler<typeof patchAccountsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsIdRouteHandler: RouteHandler<typeof putAccountsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
