import type { RouteHandler } from '@hono/zod-openapi'
import type { putUpdateImagePipelineRoute } from '../routes'

export const putUpdateImagePipelineRouteHandler: RouteHandler<
  typeof putUpdateImagePipelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
