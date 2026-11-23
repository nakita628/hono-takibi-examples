import type { RouteHandler } from '@hono/zod-openapi'
import type { postSmsRoute } from '../routes'

export const postSmsRouteHandler: RouteHandler<typeof postSmsRoute> = async (c) => {
  throw new Error('Not implemented')
}
