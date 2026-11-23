import type { RouteHandler } from '@hono/zod-openapi'
import type { getSingleTypeMultipleExamplesRoute } from '../routes'

export const getSingleTypeMultipleExamplesRouteHandler: RouteHandler<
  typeof getSingleTypeMultipleExamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
