import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountsIdRoute,
  getAccountsRoute,
  patchAccountsIdRoute,
  putAccountsIdRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
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
