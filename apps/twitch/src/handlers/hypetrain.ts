import type { RouteHandler } from '@hono/zod-openapi'
import type { getHypetrainStatusRoute } from '../routes'

export const getHypetrainStatusRouteHandler: RouteHandler<typeof getHypetrainStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
