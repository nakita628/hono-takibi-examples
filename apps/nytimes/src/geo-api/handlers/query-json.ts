import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryJsonRoute } from '../routes'

export const getQueryJsonRouteHandler: RouteHandler<typeof getQueryJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
