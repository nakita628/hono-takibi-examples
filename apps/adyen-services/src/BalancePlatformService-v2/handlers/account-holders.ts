import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountHoldersIdBalanceAccountsRoute,
  getAccountHoldersIdRoute,
  getAccountHoldersIdTaxFormsRoute,
  getAccountHoldersIdTaxFormSummaryRoute,
  getAccountHoldersIdTransactionRulesRoute,
  patchAccountHoldersIdRoute,
  postAccountHoldersRoute,
} from '../routes'

export const postAccountHoldersRouteHandler: RouteHandler<typeof postAccountHoldersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccountHoldersIdRouteHandler: RouteHandler<
  typeof getAccountHoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountHoldersIdRouteHandler: RouteHandler<
  typeof patchAccountHoldersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountHoldersIdBalanceAccountsRouteHandler: RouteHandler<
  typeof getAccountHoldersIdBalanceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountHoldersIdTaxFormsRouteHandler: RouteHandler<
  typeof getAccountHoldersIdTaxFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountHoldersIdTransactionRulesRouteHandler: RouteHandler<
  typeof getAccountHoldersIdTransactionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountHoldersIdTaxFormSummaryRouteHandler: RouteHandler<
  typeof getAccountHoldersIdTaxFormSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
