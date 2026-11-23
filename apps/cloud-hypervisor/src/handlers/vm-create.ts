import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmCreateRoute } from '../routes'

export const putVmCreateRouteHandler: RouteHandler<typeof putVmCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}
