import type { RouteHandler } from '@hono/zod-openapi'
import type { getVmCountersRoute } from '../routes'

export const getVmCountersRouteHandler: RouteHandler<typeof getVmCountersRoute> = async (c) => {
  throw new Error('Not implemented')
}
