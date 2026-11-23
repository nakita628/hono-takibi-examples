import type { RouteHandler } from '@hono/zod-openapi'
import type { postCashoutsRoute } from '../routes'

export const postCashoutsRouteHandler: RouteHandler<typeof postCashoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}
