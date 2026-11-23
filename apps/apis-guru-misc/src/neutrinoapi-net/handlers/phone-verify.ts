import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhoneVerifyRoute } from '../routes'

export const postPhoneVerifyRouteHandler: RouteHandler<typeof postPhoneVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
