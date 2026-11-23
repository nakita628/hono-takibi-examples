import type { RouteHandler } from '@hono/zod-openapi'
import type { getConnzRoute } from '../routes'

export const getConnzRouteHandler: RouteHandler<typeof getConnzRoute> = async (c) => {
  throw new Error('Not implemented')
}
