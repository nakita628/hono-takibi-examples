import type { RouteHandler } from '@hono/zod-openapi'
import type { getVmInfoRoute } from '../routes'

export const getVmInfoRouteHandler: RouteHandler<typeof getVmInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
