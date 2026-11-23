import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtmlRoute } from '../routes'

export const getHtmlRouteHandler: RouteHandler<typeof getHtmlRoute> = async (c) => {
  throw new Error('Not implemented')
}
