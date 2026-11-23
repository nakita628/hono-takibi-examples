import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelsRoute } from '../routes'

export const postCancelsRouteHandler: RouteHandler<typeof postCancelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
