import type { RouteHandler } from '@hono/zod-openapi'
import type { patchNestedOneOfObjectWithNestedOneOfRoute } from '../routes'

export const patchNestedOneOfObjectWithNestedOneOfRouteHandler: RouteHandler<
  typeof patchNestedOneOfObjectWithNestedOneOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}
