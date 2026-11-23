import type { RouteHandler } from '@hono/zod-openapi'
import type { postWorkerCmdCheckconstraintsRoute } from '../routes'

export const postWorkerCmdCheckconstraintsRouteHandler: RouteHandler<
  typeof postWorkerCmdCheckconstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
