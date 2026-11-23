import type { RouteHandler } from '@hono/zod-openapi'
import type { getStreamBytesNRoute } from '../routes'

export const getStreamBytesNRouteHandler: RouteHandler<typeof getStreamBytesNRoute> = async (c) => {
  throw new Error('Not implemented')
}
