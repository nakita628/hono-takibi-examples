import type { RouteHandler } from '@hono/zod-openapi'
import type { getProtectionRoute } from '../routes'

export const getProtectionRouteHandler: RouteHandler<typeof getProtectionRoute> = async (c) => {
  throw new Error('Not implemented')
}
