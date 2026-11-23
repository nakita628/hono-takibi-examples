import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertCaseRoute } from '../routes'

export const postConvertCaseRouteHandler: RouteHandler<typeof postConvertCaseRoute> = async (c) => {
  throw new Error('Not implemented')
}
