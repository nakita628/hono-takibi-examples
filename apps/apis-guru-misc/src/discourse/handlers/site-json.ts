import type { RouteHandler } from '@hono/zod-openapi'
import type { getSiteJsonRoute } from '../routes'

export const getSiteJsonRouteHandler: RouteHandler<typeof getSiteJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
