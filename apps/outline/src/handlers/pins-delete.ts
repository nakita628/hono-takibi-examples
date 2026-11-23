import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsDeleteRoute } from '../routes'

export const postPinsDeleteRouteHandler: RouteHandler<typeof postPinsDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
