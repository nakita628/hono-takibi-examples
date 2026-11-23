import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1IecIecRoute } from '../routes'

export const getV1IecIecRouteHandler: RouteHandler<typeof getV1IecIecRoute> = async (c) => {
  throw new Error('Not implemented')
}
