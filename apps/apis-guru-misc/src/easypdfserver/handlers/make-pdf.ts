import type { RouteHandler } from '@hono/zod-openapi'
import type { postMakePdfRoute } from '../routes'

export const postMakePdfRouteHandler: RouteHandler<typeof postMakePdfRoute> = async (c) => {
  throw new Error('Not implemented')
}
