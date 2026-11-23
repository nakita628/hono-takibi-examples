import type { RouteHandler } from '@hono/zod-openapi'
import type { postResendRoute } from '../routes'

export const postResendRouteHandler: RouteHandler<typeof postResendRoute> = async (c) => {
  throw new Error('Not implemented')
}
