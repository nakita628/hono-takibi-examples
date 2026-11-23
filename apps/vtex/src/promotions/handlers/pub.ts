import type { RouteHandler } from '@hono/zod-openapi'
import type { postPubBundlesRoute } from '../routes'

export const postPubBundlesRouteHandler: RouteHandler<typeof postPubBundlesRoute> = async (c) => {
  throw new Error('Not implemented')
}
