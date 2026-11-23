import type { RouteHandler } from '@hono/zod-openapi'
import type { getUltoscRoute } from '../routes'

export const getUltoscRouteHandler: RouteHandler<typeof getUltoscRoute> = async (c) => {
  throw new Error('Not implemented')
}
