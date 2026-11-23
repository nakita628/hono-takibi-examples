import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelRoute } from '../routes'

export const postCancelRouteHandler: RouteHandler<typeof postCancelRoute> = async (c) => {
  throw new Error('Not implemented')
}
