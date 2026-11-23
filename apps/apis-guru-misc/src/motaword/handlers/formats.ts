import type { RouteHandler } from '@hono/zod-openapi'
import type { getFormatsRoute } from '../routes'

export const getFormatsRouteHandler: RouteHandler<typeof getFormatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
