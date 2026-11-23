import type { RouteHandler } from '@hono/zod-openapi'
import type { getFaviconIcoRoute } from '../routes'

export const getFaviconIcoRouteHandler: RouteHandler<typeof getFaviconIcoRoute> = async (c) => {
  throw new Error('Not implemented')
}
