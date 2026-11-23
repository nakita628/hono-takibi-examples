import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmBootRoute } from '../routes'

export const putVmBootRouteHandler: RouteHandler<typeof putVmBootRoute> = async (c) => {
  throw new Error('Not implemented')
}
