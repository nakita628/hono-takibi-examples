import type { RouteHandler } from '@hono/zod-openapi'
import type { getProcessesIndexRoute } from '../routes'

export const getProcessesIndexRouteHandler: RouteHandler<typeof getProcessesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
