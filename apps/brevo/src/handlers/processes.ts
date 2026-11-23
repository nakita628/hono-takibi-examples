import type { RouteHandler } from '@hono/zod-openapi'
import type { getProcessesProcessIdRoute, getProcessesRoute } from '../routes'

export const getProcessesRouteHandler: RouteHandler<typeof getProcessesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProcessesProcessIdRouteHandler: RouteHandler<
  typeof getProcessesProcessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
