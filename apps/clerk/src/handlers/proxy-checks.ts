import type { RouteHandler } from '@hono/zod-openapi'
import type { postProxyChecksRoute } from '../routes'

export const postProxyChecksRouteHandler: RouteHandler<typeof postProxyChecksRoute> = async (c) => {
  throw new Error('Not implemented')
}
