import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiShaRoute } from '../routes'

export const getOpenapiShaRouteHandler: RouteHandler<typeof getOpenapiShaRoute> = async (c) => {
  throw new Error('Not implemented')
}
