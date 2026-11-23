import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertAreaRoute } from '../routes'

export const postConvertAreaRouteHandler: RouteHandler<typeof postConvertAreaRoute> = async (c) => {
  throw new Error('Not implemented')
}
