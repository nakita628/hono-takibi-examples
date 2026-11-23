import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmResizeRoute } from '../routes'

export const putVmResizeRouteHandler: RouteHandler<typeof putVmResizeRoute> = async (c) => {
  throw new Error('Not implemented')
}
