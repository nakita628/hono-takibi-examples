import type { RouteHandler } from '@hono/zod-openapi'
import type { getZenRoute } from '../routes'

export const getZenRouteHandler: RouteHandler<typeof getZenRoute> = async (c) => {
  throw new Error('Not implemented')
}
