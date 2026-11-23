import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendStickerRoute } from '../routes'

export const postSendStickerRouteHandler: RouteHandler<typeof postSendStickerRoute> = async (c) => {
  throw new Error('Not implemented')
}
