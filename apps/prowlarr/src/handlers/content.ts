import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentPathRoute } from '../routes'

export const getContentPathRouteHandler: RouteHandler<typeof getContentPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
