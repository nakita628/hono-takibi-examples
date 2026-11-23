import type { RouteHandler } from '@hono/zod-openapi'
import type { getCciRoute } from '../routes'

export const getCciRouteHandler: RouteHandler<typeof getCciRoute> = async (c) => {
  throw new Error('Not implemented')
}
