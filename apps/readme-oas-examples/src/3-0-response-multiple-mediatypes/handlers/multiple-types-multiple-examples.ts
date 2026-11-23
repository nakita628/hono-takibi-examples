import type { RouteHandler } from '@hono/zod-openapi'
import type { postMultipleTypesMultipleExamplesRoute } from '../routes'

export const postMultipleTypesMultipleExamplesRouteHandler: RouteHandler<
  typeof postMultipleTypesMultipleExamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
