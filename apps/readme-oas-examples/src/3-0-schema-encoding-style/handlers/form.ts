import type { RouteHandler } from '@hono/zod-openapi'
import type { putFormPrimitiveRoute } from '../routes'

export const putFormPrimitiveRouteHandler: RouteHandler<typeof putFormPrimitiveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
