import type { RouteHandler } from '@hono/zod-openapi'
import type { getFlagsRoute } from '../routes'

export const getFlagsRouteHandler: RouteHandler<typeof getFlagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
