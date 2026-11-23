import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateWorldGenerationJobRoute } from '../routes'

export const postCreateWorldGenerationJobRouteHandler: RouteHandler<
  typeof postCreateWorldGenerationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
