import type { RouteHandler } from '@hono/zod-openapi'
import type { getSamsungPreviewRoute } from '../routes'

export const getSamsungPreviewRouteHandler: RouteHandler<typeof getSamsungPreviewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
