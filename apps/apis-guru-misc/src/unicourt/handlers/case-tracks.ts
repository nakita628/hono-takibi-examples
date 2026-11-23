import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseTracksRoute } from '../routes'

export const getCaseTracksRouteHandler: RouteHandler<typeof getCaseTracksRoute> = async (c) => {
  throw new Error('Not implemented')
}
