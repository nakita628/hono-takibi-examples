import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1SystemoneRoute } from '../routes'

export const postV1SystemoneRouteHandler: RouteHandler<typeof postV1SystemoneRoute> = async (c) => {
  throw new Error('Not implemented')
}
