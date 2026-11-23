import type { RouteHandler } from '@hono/zod-openapi'
import type { getBrotliRoute } from '../routes'

export const getBrotliRouteHandler: RouteHandler<typeof getBrotliRoute> = async (c) => {
  throw new Error('Not implemented')
}
