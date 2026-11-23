import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateQRCodeRoute } from '../routes'

export const postGenerateQRCodeRouteHandler: RouteHandler<typeof postGenerateQRCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
