import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmResizeDiskRoute } from '../routes'

export const putVmResizeDiskRouteHandler: RouteHandler<typeof putVmResizeDiskRoute> = async (c) => {
  throw new Error('Not implemented')
}
