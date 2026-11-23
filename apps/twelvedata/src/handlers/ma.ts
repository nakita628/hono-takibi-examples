import type { RouteHandler } from '@hono/zod-openapi'
import type { getMaRoute } from '../routes'

export const getMaRouteHandler: RouteHandler<typeof getMaRoute> = async (c) => {
  throw new Error('Not implemented')
}
