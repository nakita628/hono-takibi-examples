import type { RouteHandler } from '@hono/zod-openapi'
import type { postWorkingLocationV1Route } from '../routes'

export const postWorkingLocationV1RouteHandler: RouteHandler<
  typeof postWorkingLocationV1Route
> = async (c) => {
  throw new Error('Not implemented')
}
