import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatementsRoute,
  getStatementsStatementIdRoute,
  postStatementsRoute,
} from '../routes'

export const getStatementsRouteHandler: RouteHandler<typeof getStatementsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStatementsRouteHandler: RouteHandler<typeof postStatementsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatementsStatementIdRouteHandler: RouteHandler<
  typeof getStatementsStatementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
