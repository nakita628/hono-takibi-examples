import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountStatementsAccountStatementIdRoute,
  getAccountStatementsRoute,
} from '../routes'

export const getAccountStatementsRouteHandler: RouteHandler<
  typeof getAccountStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountStatementsAccountStatementIdRouteHandler: RouteHandler<
  typeof getAccountStatementsAccountStatementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
