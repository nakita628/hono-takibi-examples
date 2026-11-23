import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmRestoreRoute } from '../routes'

export const putVmRestoreRouteHandler: RouteHandler<typeof putVmRestoreRoute> = async (c) => {
  throw new Error('Not implemented')
}
