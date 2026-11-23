import type { RouteHandler } from '@hono/zod-openapi'
import type { getIndexExistsRoute } from '../routes'

export const getIndexExistsRouteHandler: RouteHandler<typeof getIndexExistsRoute> = async (c) => {
  throw new Error('Not implemented')
}
