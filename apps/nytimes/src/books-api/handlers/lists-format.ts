import type { RouteHandler } from '@hono/zod-openapi'
import type { getListsFormatRoute } from '../routes'

export const getListsFormatRouteHandler: RouteHandler<typeof getListsFormatRoute> = async (c) => {
  throw new Error('Not implemented')
}
