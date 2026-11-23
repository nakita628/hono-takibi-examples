import type { RouteHandler } from '@hono/zod-openapi'
import type { getUploadsPresignRoute } from '../routes'

export const getUploadsPresignRouteHandler: RouteHandler<typeof getUploadsPresignRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
