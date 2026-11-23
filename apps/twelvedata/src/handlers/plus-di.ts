import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlusDiRoute } from '../routes'

export const getPlusDiRouteHandler: RouteHandler<typeof getPlusDiRoute> = async (c) => {
  throw new Error('Not implemented')
}
