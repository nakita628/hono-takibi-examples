import type { RouteHandler } from '@hono/zod-openapi'
import type { postPsd2FormatRoute } from '../routes'

export const postPsd2FormatRouteHandler: RouteHandler<typeof postPsd2FormatRoute> = async (c) => {
  throw new Error('Not implemented')
}
