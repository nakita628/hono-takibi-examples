import type { RouteHandler } from '@hono/zod-openapi'
import type { postProduceRoute } from '../routes'

export const postProduceRouteHandler: RouteHandler<typeof postProduceRoute> = async (c) => {
  throw new Error('Not implemented')
}
