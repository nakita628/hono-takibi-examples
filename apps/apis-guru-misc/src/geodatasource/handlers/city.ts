import type { RouteHandler } from '@hono/zod-openapi'
import type { getCityRoute } from '../routes'

export const getCityRouteHandler: RouteHandler<typeof getCityRoute> = async (c) => {
  throw new Error('Not implemented')
}
