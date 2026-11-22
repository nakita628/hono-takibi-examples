import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadStickerFileRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadStickerFileHandler = app.openapi(postUploadStickerFileRoute, (c) => {
  throw new Error('Not implemented')
})
