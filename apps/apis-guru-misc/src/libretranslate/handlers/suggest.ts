import type { RouteHandler } from '@hono/zod-openapi'
import type { postSuggestRoute } from '../routes'

export const postSuggestRouteHandler: RouteHandler<typeof postSuggestRoute> = async (c) => {
  throw new Error('Not implemented')
}
