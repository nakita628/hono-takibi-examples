import type { RouteHandler } from '@hono/zod-openapi'
import type { getListsIndexRoute } from '../routes'

export const getListsIndexRouteHandler: RouteHandler<typeof getListsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
