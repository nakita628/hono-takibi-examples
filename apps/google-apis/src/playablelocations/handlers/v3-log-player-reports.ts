import type { RouteHandler } from '@hono/zod-openapi'
import type { postV3LogPlayerReportsRoute } from '../routes'

export const postV3LogPlayerReportsRouteHandler: RouteHandler<
  typeof postV3LogPlayerReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
