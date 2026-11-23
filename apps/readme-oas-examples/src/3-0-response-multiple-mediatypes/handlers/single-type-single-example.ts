import type { RouteHandler } from '@hono/zod-openapi'
import type { getSingleTypeSingleExampleRoute } from '../routes'

export const getSingleTypeSingleExampleRouteHandler: RouteHandler<
  typeof getSingleTypeSingleExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
