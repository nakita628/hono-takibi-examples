import type { RouteHandler } from '@hono/zod-openapi'
import type { postInternalSubmitRoute } from '../routes'

export const postInternalSubmitRouteHandler: RouteHandler<typeof postInternalSubmitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
