import type { RouteHandler } from '@hono/zod-openapi'
import type { postJSONtoCSVRoute } from '../routes'

export const postJSONtoCSVRouteHandler: RouteHandler<typeof postJSONtoCSVRoute> = async (c) => {
  throw new Error('Not implemented')
}
