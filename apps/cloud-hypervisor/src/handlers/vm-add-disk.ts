import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddDiskRoute } from '../routes'

export const putVmAddDiskRouteHandler: RouteHandler<typeof putVmAddDiskRoute> = async (c) => {
  throw new Error('Not implemented')
}
