import type { RouteHandler } from '@hono/zod-openapi'
import type { getUrlInfoRoute } from '../routes'

export const getUrlInfoRouteHandler: RouteHandler<typeof getUrlInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
