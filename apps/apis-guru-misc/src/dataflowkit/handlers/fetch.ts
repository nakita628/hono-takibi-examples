import type { RouteHandler } from '@hono/zod-openapi'
import type { postFetchRoute } from '../routes'

export const postFetchRouteHandler: RouteHandler<typeof postFetchRoute> = async (c) => {
  throw new Error('Not implemented')
}
