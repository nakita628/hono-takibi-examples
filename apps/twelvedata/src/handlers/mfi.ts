import type { RouteHandler } from '@hono/zod-openapi'
import type { getMfiRoute } from '../routes'

export const getMfiRouteHandler: RouteHandler<typeof getMfiRoute> = async (c) => {
  throw new Error('Not implemented')
}
