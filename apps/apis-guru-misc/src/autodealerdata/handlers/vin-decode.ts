import type { RouteHandler } from '@hono/zod-openapi'
import type { getVinDecodeRoute } from '../routes'

export const getVinDecodeRouteHandler: RouteHandler<typeof getVinDecodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
