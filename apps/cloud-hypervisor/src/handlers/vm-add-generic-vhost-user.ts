import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddGenericVhostUserRoute } from '../routes'

export const putVmAddGenericVhostUserRouteHandler: RouteHandler<
  typeof putVmAddGenericVhostUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
