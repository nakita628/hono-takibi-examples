import type { RouteHandler } from '@hono/zod-openapi'
import type { getStreamHepRoute } from '../routes'

export const getStreamHepRouteHandler: RouteHandler<typeof getStreamHepRoute> = async (c) => {
  throw new Error('Not implemented')
}
