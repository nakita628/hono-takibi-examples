import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiJsonRoute } from '../routes'

export const getOpenapiJsonRouteHandler: RouteHandler<typeof getOpenapiJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
