import type { RouteHandler } from '@hono/zod-openapi'
import type { postJSONtoXMLRoute } from '../routes'

export const postJSONtoXMLRouteHandler: RouteHandler<typeof postJSONtoXMLRoute> = async (c) => {
  throw new Error('Not implemented')
}
