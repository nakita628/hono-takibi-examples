import type { RouteHandler } from '@hono/zod-openapi'
import type { getLatestJsonRoute } from '../routes'

export const getLatestJsonRouteHandler: RouteHandler<typeof getLatestJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
