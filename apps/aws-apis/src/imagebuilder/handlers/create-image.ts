import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateImageRoute } from '../routes'

export const putCreateImageRouteHandler: RouteHandler<typeof putCreateImageRoute> = async (c) => {
  throw new Error('Not implemented')
}
