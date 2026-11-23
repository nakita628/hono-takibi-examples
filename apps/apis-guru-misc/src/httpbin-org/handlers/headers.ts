import type { RouteHandler } from '@hono/zod-openapi'
import type { getHeadersRoute } from '../routes'

export const getHeadersRouteHandler: RouteHandler<typeof getHeadersRoute> = async (c) => {
  throw new Error('Not implemented')
}
