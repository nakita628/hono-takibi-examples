import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBankAccountsIdRoute,
  getBankAccountsRoute,
  patchBankAccountsIdRoute,
  postBankAccountsIdDeactivationRoute,
  postBankAccountsRoute,
  putBankAccountsIdRoute,
} from '../routes'

export const getBankAccountsRouteHandler: RouteHandler<typeof getBankAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBankAccountsRouteHandler: RouteHandler<typeof postBankAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBankAccountsIdRouteHandler: RouteHandler<typeof getBankAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchBankAccountsIdRouteHandler: RouteHandler<
  typeof patchBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBankAccountsIdRouteHandler: RouteHandler<typeof putBankAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBankAccountsIdDeactivationRouteHandler: RouteHandler<
  typeof postBankAccountsIdDeactivationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
