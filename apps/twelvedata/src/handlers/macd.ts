import type { RouteHandler } from '@hono/zod-openapi'
import type { getMacdRoute } from '../routes'

export const getMacdRouteHandler: RouteHandler<typeof getMacdRoute> = async (c) => {
  throw new Error('Not implemented')
}
