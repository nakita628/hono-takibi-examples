import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeywordRoute } from '../routes'

export const getKeywordRouteHandler: RouteHandler<typeof getKeywordRoute> = async (c) => {
  throw new Error('Not implemented')
}
