import type { RouteHandler } from '@hono/zod-openapi'
import type { getProfileRoute } from '../routes'

export const getProfileRouteHandler: RouteHandler<typeof getProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}
