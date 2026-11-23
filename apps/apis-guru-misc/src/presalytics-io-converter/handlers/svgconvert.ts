import type { RouteHandler } from '@hono/zod-openapi'
import type { postSvgconvertRoute } from '../routes'

export const postSvgconvertRouteHandler: RouteHandler<typeof postSvgconvertRoute> = async (c) => {
  throw new Error('Not implemented')
}
