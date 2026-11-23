import type { RouteHandler } from '@hono/zod-openapi'
import type { getMedpriceRoute } from '../routes'

export const getMedpriceRouteHandler: RouteHandler<typeof getMedpriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
