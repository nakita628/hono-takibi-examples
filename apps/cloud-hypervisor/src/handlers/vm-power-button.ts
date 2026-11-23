import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmPowerButtonRoute } from '../routes'

export const putVmPowerButtonRouteHandler: RouteHandler<typeof putVmPowerButtonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
