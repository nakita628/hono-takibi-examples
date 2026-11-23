import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmNmiRoute } from '../routes'

export const putVmNmiRouteHandler: RouteHandler<typeof putVmNmiRoute> = async (c) => {
  throw new Error('Not implemented')
}
