import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiRoute } from '../routes'

export const getOpenapiRouteHandler: RouteHandler<typeof getOpenapiRoute> = async (c) => {
  throw new Error('Not implemented')
}
