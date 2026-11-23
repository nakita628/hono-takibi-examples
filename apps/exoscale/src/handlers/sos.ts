import type { RouteHandler } from '@hono/zod-openapi'
import type { getSosBucketPresignedUrlRoute } from '../routes'

export const getSosBucketPresignedUrlRouteHandler: RouteHandler<
  typeof getSosBucketPresignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
