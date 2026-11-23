import type { RouteHandler } from '@hono/zod-openapi'
import type { getBasicFormatRoute } from '../routes'

export const getBasicFormatRouteHandler: RouteHandler<typeof getBasicFormatRoute> = async (c) => {
  throw new Error('Not implemented')
}
