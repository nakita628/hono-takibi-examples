import type { RouteHandler } from '@hono/zod-openapi'
import type { postSerpRoute } from '../routes'

export const postSerpRouteHandler: RouteHandler<typeof postSerpRoute> = async (c) => {
  throw new Error('Not implemented')
}
