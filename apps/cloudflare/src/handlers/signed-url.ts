import type { RouteHandler } from '@hono/zod-openapi'
import type { getSignedUrlRoute } from '../routes'

export const getSignedUrlRouteHandler: RouteHandler<typeof getSignedUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}
