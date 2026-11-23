import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountNameValidationRoute } from '../routes'

export const postAccountNameValidationRouteHandler: RouteHandler<
  typeof postAccountNameValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
