import type { RouteHandler } from '@hono/zod-openapi'
import type { getEtagEtagRoute } from '../routes'

export const getEtagEtagRouteHandler: RouteHandler<typeof getEtagEtagRoute> = async (c) => {
  throw new Error('Not implemented')
}
