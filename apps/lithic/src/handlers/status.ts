import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1StatusRoute } from '../routes'

export const getV1StatusRouteHandler: RouteHandler<typeof getV1StatusRoute> = async (c) => {
  throw new Error('Not implemented')
}
