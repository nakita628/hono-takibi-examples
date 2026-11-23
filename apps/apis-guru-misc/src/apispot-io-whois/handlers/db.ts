import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbRoute } from '../routes'

export const getDbRouteHandler: RouteHandler<typeof getDbRoute> = async (c) => {
  throw new Error('Not implemented')
}
