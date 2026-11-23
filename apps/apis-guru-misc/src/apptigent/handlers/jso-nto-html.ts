import type { RouteHandler } from '@hono/zod-openapi'
import type { postJSONtoHTMLRoute } from '../routes'

export const postJSONtoHTMLRouteHandler: RouteHandler<typeof postJSONtoHTMLRoute> = async (c) => {
  throw new Error('Not implemented')
}
