import type { RouteHandler } from '@hono/zod-openapi'
import type { postSimCardOrderPreviewRoute } from '../routes'

export const postSimCardOrderPreviewRouteHandler: RouteHandler<
  typeof postSimCardOrderPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
