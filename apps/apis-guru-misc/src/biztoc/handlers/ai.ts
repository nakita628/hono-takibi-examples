import type { RouteHandler } from '@hono/zod-openapi'
import type { getAiNewsRoute } from '../routes'

export const getAiNewsRouteHandler: RouteHandler<typeof getAiNewsRoute> = async (c) => {
  throw new Error('Not implemented')
}
