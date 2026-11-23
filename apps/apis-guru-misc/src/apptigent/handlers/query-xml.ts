import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueryXMLRoute } from '../routes'

export const postQueryXMLRouteHandler: RouteHandler<typeof postQueryXMLRoute> = async (c) => {
  throw new Error('Not implemented')
}
