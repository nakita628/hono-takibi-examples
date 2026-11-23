import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1NameRoute } from '../routes'

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}
