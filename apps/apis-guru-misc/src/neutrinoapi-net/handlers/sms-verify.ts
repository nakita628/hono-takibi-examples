import type { RouteHandler } from '@hono/zod-openapi'
import type { postSmsVerifyRoute } from '../routes'

export const postSmsVerifyRouteHandler: RouteHandler<typeof postSmsVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
