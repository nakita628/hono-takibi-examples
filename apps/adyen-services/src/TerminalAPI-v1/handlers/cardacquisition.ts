import type { RouteHandler } from '@hono/zod-openapi'
import type { postCardacquisitionRoute } from '../routes'

export const postCardacquisitionRouteHandler: RouteHandler<
  typeof postCardacquisitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
