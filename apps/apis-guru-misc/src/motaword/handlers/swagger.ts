import type { RouteHandler } from '@hono/zod-openapi'
import type { getSwaggerRoute } from '../routes'

export const getSwaggerRouteHandler: RouteHandler<typeof getSwaggerRoute> = async (c) => {
  throw new Error('Not implemented')
}
