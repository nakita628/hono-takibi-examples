import type { RouteHandler } from '@hono/zod-openapi'
import type { getPageRoute } from '../routes'

export const getPageRouteHandler: RouteHandler<typeof getPageRoute> = async (c) => {
  throw new Error('Not implemented')
}
