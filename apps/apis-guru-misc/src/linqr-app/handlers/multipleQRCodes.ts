import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchQrcodeRoute } from '../routes'

const app = new OpenAPIHono()

export const multipleQRCodesHandler = app.openapi(postBatchQrcodeRoute, (c) => {
  throw new Error('Not implemented')
})
