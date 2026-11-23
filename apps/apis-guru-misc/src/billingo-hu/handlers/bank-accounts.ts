import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBankAccountsIdRoute,
  getBankAccountsIdRoute,
  getBankAccountsRoute,
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

export const deleteBankAccountsIdRouteHandler: RouteHandler<
  typeof deleteBankAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBankAccountsIdRouteHandler: RouteHandler<typeof getBankAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBankAccountsIdRouteHandler: RouteHandler<typeof putBankAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
