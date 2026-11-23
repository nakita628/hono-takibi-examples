import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddUserDeviceRoute } from '../routes'

export const putVmAddUserDeviceRouteHandler: RouteHandler<typeof putVmAddUserDeviceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
