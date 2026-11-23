import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmSnapshotRoute } from '../routes'

export const putVmSnapshotRouteHandler: RouteHandler<typeof putVmSnapshotRoute> = async (c) => {
  throw new Error('Not implemented')
}
