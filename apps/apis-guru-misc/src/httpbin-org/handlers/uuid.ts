import type { RouteHandler } from '@hono/zod-openapi'
import type { getUuidRoute } from '../routes'

export const getUuidRouteHandler: RouteHandler<typeof getUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}
