import type { RouteHandler } from '@hono/zod-openapi'
import type { postQrCodeRoute } from '../routes'

export const postQrCodeRouteHandler: RouteHandler<typeof postQrCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
