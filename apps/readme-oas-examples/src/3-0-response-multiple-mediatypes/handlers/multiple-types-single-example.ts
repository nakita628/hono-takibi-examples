import type { RouteHandler } from '@hono/zod-openapi'
import type { postMultipleTypesSingleExampleRoute } from '../routes'

export const postMultipleTypesSingleExampleRouteHandler: RouteHandler<
  typeof postMultipleTypesSingleExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
