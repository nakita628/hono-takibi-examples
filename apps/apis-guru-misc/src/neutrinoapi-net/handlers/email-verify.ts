import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailVerifyRoute } from '../routes'

export const getEmailVerifyRouteHandler: RouteHandler<typeof getEmailVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
