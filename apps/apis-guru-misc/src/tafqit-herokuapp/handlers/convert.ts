import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertRoute } from '../routes'

export const postConvertRouteHandler: RouteHandler<typeof postConvertRoute> = async (c) => {
  throw new Error('Not implemented')
}
