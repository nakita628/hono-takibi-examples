import type { RouteHandler } from '@hono/zod-openapi'
import type { getChecksumJsonRoute } from '../routes'

export const getChecksumJsonRouteHandler: RouteHandler<typeof getChecksumJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
