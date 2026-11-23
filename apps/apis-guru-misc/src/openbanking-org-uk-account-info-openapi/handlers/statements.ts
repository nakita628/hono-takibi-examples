import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatementsRoute } from '../routes'

export const getStatementsRouteHandler: RouteHandler<typeof getStatementsRoute> = async (c) => {
  throw new Error('Not implemented')
}
