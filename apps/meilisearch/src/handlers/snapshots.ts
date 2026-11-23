import type { RouteHandler } from '@hono/zod-openapi'
import type { postSnapshotsRoute } from '../routes'

export const postSnapshotsRouteHandler: RouteHandler<typeof postSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}
