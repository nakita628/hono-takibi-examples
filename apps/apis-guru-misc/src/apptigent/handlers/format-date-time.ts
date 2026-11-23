import type { RouteHandler } from '@hono/zod-openapi'
import type { postFormatDateTimeRoute } from '../routes'

export const postFormatDateTimeRouteHandler: RouteHandler<typeof postFormatDateTimeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
