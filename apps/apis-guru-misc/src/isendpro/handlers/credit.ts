import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreditRoute } from '../routes'

export const getCreditRouteHandler: RouteHandler<typeof getCreditRoute> = async (c) => {
  throw new Error('Not implemented')
}
