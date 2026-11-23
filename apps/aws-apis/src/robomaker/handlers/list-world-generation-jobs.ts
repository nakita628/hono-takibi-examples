import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWorldGenerationJobsRoute } from '../routes'

export const postListWorldGenerationJobsRouteHandler: RouteHandler<
  typeof postListWorldGenerationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
