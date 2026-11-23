import type { RouteHandler } from '@hono/zod-openapi'
import type { getBankStatementsPlusStatementsRoute } from '../routes'

export const getBankStatementsPlusStatementsRouteHandler: RouteHandler<
  typeof getBankStatementsPlusStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
