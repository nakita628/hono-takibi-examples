import type { RouteHandler } from '@hono/zod-openapi'
import type { getGzipRoute } from '../routes'

export const getGzipRouteHandler: RouteHandler<typeof getGzipRoute> = async (c) => {
  throw new Error('Not implemented')
}
