import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVirtualBankAccountsRoute,
  getVirtualBankAccountsVirtualBankAccountIdRoute,
  postVirtualBankAccountsCreateUsingPermanentTokenRoute,
  postVirtualBankAccountsRoute,
  postVirtualBankAccountsVirtualBankAccountIdDeleteLocalRoute,
  postVirtualBankAccountsVirtualBankAccountIdDeleteRoute,
} from '../routes'

export const postVirtualBankAccountsVirtualBankAccountIdDeleteLocalRouteHandler: RouteHandler<
  typeof postVirtualBankAccountsVirtualBankAccountIdDeleteLocalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVirtualBankAccountsVirtualBankAccountIdDeleteRouteHandler: RouteHandler<
  typeof postVirtualBankAccountsVirtualBankAccountIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVirtualBankAccountsRouteHandler: RouteHandler<
  typeof getVirtualBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVirtualBankAccountsRouteHandler: RouteHandler<
  typeof postVirtualBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVirtualBankAccountsVirtualBankAccountIdRouteHandler: RouteHandler<
  typeof getVirtualBankAccountsVirtualBankAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVirtualBankAccountsCreateUsingPermanentTokenRouteHandler: RouteHandler<
  typeof postVirtualBankAccountsCreateUsingPermanentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
