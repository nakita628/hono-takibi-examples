import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2SizesRoute } from '../routes'

export const getV2SizesRouteHandler: RouteHandler<typeof getV2SizesRoute> = async (c) => {
  throw new Error('Not implemented')
}
