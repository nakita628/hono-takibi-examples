import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBankAccountsBankIdRoute,
  getBankAccountsBankIdRoute,
  getBankAccountsRoute,
  postBankAccountsBankIdVerifyRoute,
  postBankAccountsRoute,
} from '../routes'

export const postBankAccountsBankIdVerifyRouteHandler: RouteHandler<
  typeof postBankAccountsBankIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBankAccountsBankIdRouteHandler: RouteHandler<
  typeof getBankAccountsBankIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBankAccountsBankIdRouteHandler: RouteHandler<
  typeof deleteBankAccountsBankIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBankAccountsRouteHandler: RouteHandler<typeof getBankAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBankAccountsRouteHandler: RouteHandler<typeof postBankAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
