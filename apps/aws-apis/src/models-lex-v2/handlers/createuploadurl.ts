import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateuploadurlIndexRoute } from '../routes'

export const postCreateuploadurlIndexRouteHandler: RouteHandler<
  typeof postCreateuploadurlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
