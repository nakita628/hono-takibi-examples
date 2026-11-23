import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmShutdownRoute } from '../routes'

export const putVmShutdownRouteHandler: RouteHandler<typeof putVmShutdownRoute> = async (c) => {
  throw new Error('Not implemented')
}
