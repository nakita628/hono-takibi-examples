import type { RouteHandler } from '@hono/zod-openapi'
import type { getT3maRoute } from '../routes'

export const getT3maRouteHandler: RouteHandler<typeof getT3maRoute> = async (c) => {
  throw new Error('Not implemented')
}
