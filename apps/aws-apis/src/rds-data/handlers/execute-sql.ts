import type { RouteHandler } from '@hono/zod-openapi'
import type { postExecuteSqlRoute } from '../routes'

export const postExecuteSqlRouteHandler: RouteHandler<typeof postExecuteSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}
