import type { RouteHandler } from '@hono/zod-openapi'
import type { getTemplatesRoute } from '../routes'

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
