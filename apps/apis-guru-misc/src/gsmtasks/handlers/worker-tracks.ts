import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkerTracksIndexRoute } from '../routes'

export const getWorkerTracksIndexRouteHandler: RouteHandler<
  typeof getWorkerTracksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
