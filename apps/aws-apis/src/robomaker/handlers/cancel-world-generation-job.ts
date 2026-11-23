import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelWorldGenerationJobRoute } from '../routes'

export const postCancelWorldGenerationJobRouteHandler: RouteHandler<
  typeof postCancelWorldGenerationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
