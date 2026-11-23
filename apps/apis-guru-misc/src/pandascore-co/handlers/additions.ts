import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdditionsRoute } from '../routes'

export const getAdditionsRouteHandler: RouteHandler<typeof getAdditionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
