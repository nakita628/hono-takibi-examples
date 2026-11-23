import { OpenAPIHono } from '@hono/zod-openapi'
import { getQrCodeAnalyticsRoute } from '../routes'

const app = new OpenAPIHono()

export const qrCodeAnalyticsHandler = app.openapi(getQrCodeAnalyticsRoute, (c) => {
  throw new Error('Not implemented')
})
