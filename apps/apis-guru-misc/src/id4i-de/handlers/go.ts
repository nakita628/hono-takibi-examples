import type { RouteHandler } from '@hono/zod-openapi'
import type { getGoGuidRoute } from '../routes'

export const getGoGuidRouteHandler: RouteHandler<typeof getGoGuidRoute> = async (c) => {
  throw new Error('Not implemented')
}
