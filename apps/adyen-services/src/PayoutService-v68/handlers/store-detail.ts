import type { RouteHandler } from '@hono/zod-openapi'
import type { postStoreDetailRoute } from '../routes'

export const postStoreDetailRouteHandler: RouteHandler<typeof postStoreDetailRoute> = async (c) => {
  throw new Error('Not implemented')
}
