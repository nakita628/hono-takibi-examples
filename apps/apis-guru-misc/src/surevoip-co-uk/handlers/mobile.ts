import type { RouteHandler } from '@hono/zod-openapi'
import type { getMobileRoute } from '../routes'

export const getMobileRouteHandler: RouteHandler<typeof getMobileRoute> = async (c) => {
  throw new Error('Not implemented')
}
