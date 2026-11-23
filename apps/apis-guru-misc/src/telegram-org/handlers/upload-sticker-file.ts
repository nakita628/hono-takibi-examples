import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadStickerFileRoute } from '../routes'

export const postUploadStickerFileRouteHandler: RouteHandler<
  typeof postUploadStickerFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
