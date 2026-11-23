import type { RouteHandler } from '@hono/zod-openapi'
import type { getInflectionsRoute } from '../routes'

export const getInflectionsRouteHandler: RouteHandler<typeof getInflectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
