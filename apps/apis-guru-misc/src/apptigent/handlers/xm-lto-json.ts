import type { RouteHandler } from '@hono/zod-openapi'
import type { postXMLtoJSONRoute } from '../routes'

export const postXMLtoJSONRouteHandler: RouteHandler<typeof postXMLtoJSONRoute> = async (c) => {
  throw new Error('Not implemented')
}
