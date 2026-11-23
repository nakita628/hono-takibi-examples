import type { RouteHandler } from '@hono/zod-openapi'
import type { postWriteRoute } from '../routes'

export const postWriteRouteHandler: RouteHandler<typeof postWriteRoute> = async (c) => {
  throw new Error('Not implemented')
}
