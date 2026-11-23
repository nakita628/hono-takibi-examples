import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmRebootRoute } from '../routes'

export const putVmRebootRouteHandler: RouteHandler<typeof putVmRebootRoute> = async (c) => {
  throw new Error('Not implemented')
}
