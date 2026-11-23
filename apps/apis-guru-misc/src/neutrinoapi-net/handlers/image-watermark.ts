import { OpenAPIHono } from '@hono/zod-openapi'
import { postImageWatermarkRoute } from '../routes'

const app = new OpenAPIHono()

export const imageWatermarkHandler = app.openapi(postImageWatermarkRoute, (c) => {
  throw new Error('Not implemented')
})
