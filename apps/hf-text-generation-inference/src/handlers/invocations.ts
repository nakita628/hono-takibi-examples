import type { RouteHandler } from '@hono/zod-openapi'
import type { postInvocationsRoute } from '../routes'

export const postInvocationsRouteHandler: RouteHandler<typeof postInvocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
