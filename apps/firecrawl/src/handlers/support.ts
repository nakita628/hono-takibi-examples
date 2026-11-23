import type { RouteHandler } from '@hono/zod-openapi'
import type { postSupportAskRoute } from '../routes'

export const postSupportAskRouteHandler: RouteHandler<typeof postSupportAskRoute> = async (c) => {
  throw new Error('Not implemented')
}
