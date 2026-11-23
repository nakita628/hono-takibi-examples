import type { RouteHandler } from '@hono/zod-openapi'
import type { getBotsInfoRoute } from '../routes'

export const getBotsInfoRouteHandler: RouteHandler<typeof getBotsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
