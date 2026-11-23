import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubmitRoute } from '../routes'

export const postSubmitRouteHandler: RouteHandler<typeof postSubmitRoute> = async (c) => {
  throw new Error('Not implemented')
}
