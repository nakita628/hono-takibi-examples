import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmRemoveDeviceRoute } from '../routes'

export const putVmRemoveDeviceRouteHandler: RouteHandler<typeof putVmRemoveDeviceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
