import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchFormatRoute } from '../routes'

export const getSearchFormatRouteHandler: RouteHandler<typeof getSearchFormatRoute> = async (c) => {
  throw new Error('Not implemented')
}
