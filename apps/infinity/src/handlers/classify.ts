import type { RouteHandler } from '@hono/zod-openapi'
import type { postClassifyRoute } from '../routes'

export const postClassifyRouteHandler: RouteHandler<typeof postClassifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
