import type { RouteHandler } from '@hono/zod-openapi'
import type { postForwardRoute } from '../routes'

export const postForwardRouteHandler: RouteHandler<typeof postForwardRoute> = async (c) => {
  throw new Error('Not implemented')
}
