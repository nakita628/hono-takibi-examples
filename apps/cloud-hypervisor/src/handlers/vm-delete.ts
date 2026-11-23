import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmDeleteRoute } from '../routes'

export const putVmDeleteRouteHandler: RouteHandler<typeof putVmDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
