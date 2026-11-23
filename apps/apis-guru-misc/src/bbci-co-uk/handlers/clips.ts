import type { RouteHandler } from '@hono/zod-openapi'
import type { getClipsPidRoute } from '../routes'

export const getClipsPidRouteHandler: RouteHandler<typeof getClipsPidRoute> = async (c) => {
  throw new Error('Not implemented')
}
