import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiRoute } from '../routes'

export const getApiRouteHandler: RouteHandler<typeof getApiRoute> = async (c) => {
  throw new Error('Not implemented')
}
