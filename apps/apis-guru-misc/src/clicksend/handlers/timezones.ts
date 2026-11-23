import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimezonesRoute } from '../routes'

export const getTimezonesRouteHandler: RouteHandler<typeof getTimezonesRoute> = async (c) => {
  throw new Error('Not implemented')
}
