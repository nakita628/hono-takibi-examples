import type { RouteHandler } from '@hono/zod-openapi'
import type { getMaxindexRoute } from '../routes'

export const getMaxindexRouteHandler: RouteHandler<typeof getMaxindexRoute> = async (c) => {
  throw new Error('Not implemented')
}
