import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddFsRoute } from '../routes'

export const putVmAddFsRouteHandler: RouteHandler<typeof putVmAddFsRoute> = async (c) => {
  throw new Error('Not implemented')
}
