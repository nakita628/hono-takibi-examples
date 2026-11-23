import type { RouteHandler } from '@hono/zod-openapi'
import type { postXmltojsonRoute } from '../routes'

export const postXmltojsonRouteHandler: RouteHandler<typeof postXmltojsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
