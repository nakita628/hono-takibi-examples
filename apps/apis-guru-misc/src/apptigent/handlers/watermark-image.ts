import { OpenAPIHono } from '@hono/zod-openapi'
import { postWatermarkImageRoute } from '../routes'

const app = new OpenAPIHono()

export const watermarkImageHandler = app.openapi(postWatermarkImageRoute, (c) => {
  throw new Error('Not implemented')
})
