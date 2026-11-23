import type { RouteHandler } from '@hono/zod-openapi'
import type { getFfprobeRoute, getFfprobeSnapshotRoute } from '../routes'

export const getFfprobeRouteHandler: RouteHandler<typeof getFfprobeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFfprobeSnapshotRouteHandler: RouteHandler<typeof getFfprobeSnapshotRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
