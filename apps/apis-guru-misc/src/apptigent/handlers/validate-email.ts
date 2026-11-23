import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateEmailRoute } from '../routes'

export const postValidateEmailRouteHandler: RouteHandler<typeof postValidateEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
