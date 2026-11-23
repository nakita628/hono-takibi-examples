import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateKanaRoute } from '../routes'

export const postValidateKanaRouteHandler: RouteHandler<typeof postValidateKanaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
