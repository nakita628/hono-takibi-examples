import type { RouteHandler } from '@hono/zod-openapi'
import type { getWhoamiRoute } from '../routes'

export const getWhoamiRouteHandler: RouteHandler<typeof getWhoamiRoute> = async (c) => {
  throw new Error('Not implemented')
}
