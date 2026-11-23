import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1WebfontsRoute } from '../routes'

export const getV1WebfontsRouteHandler: RouteHandler<typeof getV1WebfontsRoute> = async (c) => {
  throw new Error('Not implemented')
}
