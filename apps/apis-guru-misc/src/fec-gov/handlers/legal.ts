import type { RouteHandler } from '@hono/zod-openapi'
import type { getLegalSearchIndexRoute } from '../routes'

export const getLegalSearchIndexRouteHandler: RouteHandler<
  typeof getLegalSearchIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
