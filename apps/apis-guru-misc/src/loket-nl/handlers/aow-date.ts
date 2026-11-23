import type { RouteHandler } from '@hono/zod-openapi'
import type { getAowDateRoute } from '../routes'

export const getAowDateRouteHandler: RouteHandler<typeof getAowDateRoute> = async (c) => {
  throw new Error('Not implemented')
}
