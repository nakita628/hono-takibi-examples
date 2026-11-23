import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicKeyRoute } from '../routes'

export const getPublicKeyRouteHandler: RouteHandler<typeof getPublicKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
