import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateQRCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const generateQrCodeHandler = app.openapi(postGenerateQRCodeRoute, (c) => {
  throw new Error('Not implemented')
})
