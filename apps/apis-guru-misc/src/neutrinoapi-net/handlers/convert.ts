import type { RouteHandler } from '@hono/zod-openapi'
import type { getConvertRoute } from '../routes'

export const getConvertRouteHandler: RouteHandler<typeof getConvertRoute> = async (c) => {
  throw new Error('Not implemented')
}
