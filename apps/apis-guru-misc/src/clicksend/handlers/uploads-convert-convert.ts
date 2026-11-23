import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadsConvertConvertRoute } from '../routes'

export const postUploadsConvertConvertRouteHandler: RouteHandler<
  typeof postUploadsConvertConvertRoute
> = async (c) => {
  throw new Error('Not implemented')
}
