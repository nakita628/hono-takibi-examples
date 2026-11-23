import type { RouteHandler } from '@hono/zod-openapi'
import type { getJustListenRoute } from '../routes'

export const getJustListenRouteHandler: RouteHandler<typeof getJustListenRoute> = async (c) => {
  throw new Error('Not implemented')
}
