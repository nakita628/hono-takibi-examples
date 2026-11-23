import type { RouteHandler } from '@hono/zod-openapi'
import type { getXmlRoute } from '../routes'

export const getXmlRouteHandler: RouteHandler<typeof getXmlRoute> = async (c) => {
  throw new Error('Not implemented')
}
