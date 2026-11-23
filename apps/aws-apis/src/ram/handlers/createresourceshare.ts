import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateresourceshareRoute } from '../routes'

export const postCreateresourceshareRouteHandler: RouteHandler<
  typeof postCreateresourceshareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
