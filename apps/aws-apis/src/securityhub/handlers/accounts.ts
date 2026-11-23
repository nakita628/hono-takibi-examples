import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsRoute,
  getAccountsRoute,
  patchAccountsRoute,
  postAccountsRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsRouteHandler: RouteHandler<typeof deleteAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountsRouteHandler: RouteHandler<typeof patchAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}
