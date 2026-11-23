import type { RouteHandler } from '@hono/zod-openapi'
import type { putStartImagePipelineExecutionRoute } from '../routes'

export const putStartImagePipelineExecutionRouteHandler: RouteHandler<
  typeof putStartImagePipelineExecutionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
