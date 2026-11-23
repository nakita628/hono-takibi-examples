import type { RouteHandler } from '@hono/zod-openapi'
import type { getHardwareRoute } from '../routes'

export const getHardwareRouteHandler: RouteHandler<typeof getHardwareRoute> = async (c) => {
  throw new Error('Not implemented')
}
