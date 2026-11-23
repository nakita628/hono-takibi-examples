import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateImagePipelineRoute } from '../routes'

export const putCreateImagePipelineRouteHandler: RouteHandler<
  typeof putCreateImagePipelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
