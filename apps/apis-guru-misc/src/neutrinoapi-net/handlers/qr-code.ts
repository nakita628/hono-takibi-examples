import { OpenAPIHono } from '@hono/zod-openapi'
import { postQrCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const qrCodeHandler = app.openapi(postQrCodeRoute, (c) => {
  throw new Error('Not implemented')
})
