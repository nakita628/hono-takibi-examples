import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResellerAccountsClientUserIdRoute,
  getResellerAccountsRoute,
  getResellerRoute,
  getResellerSubdomainRoute,
  postResellerAccountsPublicRoute,
  postResellerAccountsRoute,
  putResellerAccountsClientUserIdRoute,
  putResellerRoute,
  putResellerTransferCreditRoute,
} from '../routes'

export const getResellerRouteHandler: RouteHandler<typeof getResellerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putResellerRouteHandler: RouteHandler<typeof putResellerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getResellerAccountsRouteHandler: RouteHandler<
  typeof getResellerAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResellerAccountsRouteHandler: RouteHandler<
  typeof postResellerAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResellerAccountsPublicRouteHandler: RouteHandler<
  typeof postResellerAccountsPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResellerAccountsClientUserIdRouteHandler: RouteHandler<
  typeof getResellerAccountsClientUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putResellerAccountsClientUserIdRouteHandler: RouteHandler<
  typeof putResellerAccountsClientUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putResellerTransferCreditRouteHandler: RouteHandler<
  typeof putResellerTransferCreditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResellerSubdomainRouteHandler: RouteHandler<
  typeof getResellerSubdomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
