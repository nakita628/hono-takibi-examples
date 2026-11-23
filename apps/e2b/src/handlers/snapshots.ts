import type { RouteHandler } from '@hono/zod-openapi'
import type { getSnapshotsRoute } from '../routes'

export const getSnapshotsRouteHandler: RouteHandler<typeof getSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}
