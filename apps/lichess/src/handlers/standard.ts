import type { RouteHandler } from '@hono/zod-openapi'
import type { getStandardRoute } from '../routes'

export const getStandardRouteHandler: RouteHandler<typeof getStandardRoute> = async (c) => {
  throw new Error('Not implemented')
}
