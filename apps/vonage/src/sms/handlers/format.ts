import type { RouteHandler } from '@hono/zod-openapi'
import type { postFormatRoute } from '../routes'

export const postFormatRouteHandler: RouteHandler<typeof postFormatRoute> = async (c) => {
  throw new Error('Not implemented')
}
