import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogoRoute } from '../routes'

export const getLogoRouteHandler: RouteHandler<typeof getLogoRoute> = async (c) => {
  throw new Error('Not implemented')
}
