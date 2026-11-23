import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetClipRoute } from '../routes'

export const postGetClipRouteHandler: RouteHandler<typeof postGetClipRoute> = async (c) => {
  throw new Error('Not implemented')
}
