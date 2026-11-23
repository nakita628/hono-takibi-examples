import type { RouteHandler } from '@hono/zod-openapi'
import type { postVerifyEmailRoute } from '../routes'

export const postVerifyEmailRouteHandler: RouteHandler<typeof postVerifyEmailRoute> = async (c) => {
  throw new Error('Not implemented')
}
