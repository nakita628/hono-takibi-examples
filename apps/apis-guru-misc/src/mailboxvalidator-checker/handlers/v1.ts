import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1EmailFreeRoute } from '../routes'

export const getV1EmailFreeRouteHandler: RouteHandler<typeof getV1EmailFreeRoute> = async (c) => {
  throw new Error('Not implemented')
}
