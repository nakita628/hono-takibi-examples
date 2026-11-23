import type { RouteHandler } from '@hono/zod-openapi'
import type { getChecksumShaRoute } from '../routes'

export const getChecksumShaRouteHandler: RouteHandler<typeof getChecksumShaRoute> = async (c) => {
  throw new Error('Not implemented')
}
