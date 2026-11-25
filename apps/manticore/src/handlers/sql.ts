import type { RouteHandler } from '@hono/zod-openapi'
import type { postSqlRoute } from '../routes'

export const postSqlRouteHandler: RouteHandler<typeof postSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}
