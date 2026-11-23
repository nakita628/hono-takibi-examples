import type { RouteHandler } from '@hono/zod-openapi'
import type { getHelloRoute } from '../routes'

export const getHelloRouteHandler: RouteHandler<typeof getHelloRoute> = async (c) => {
  throw new Error('Not implemented')
}
