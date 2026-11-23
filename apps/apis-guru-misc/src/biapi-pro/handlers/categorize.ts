import type { RouteHandler } from '@hono/zod-openapi'
import type { postCategorizeRoute } from '../routes'

export const postCategorizeRouteHandler: RouteHandler<typeof postCategorizeRoute> = async (c) => {
  throw new Error('Not implemented')
}
