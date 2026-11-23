import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertImageRoute } from '../routes'

const app = new OpenAPIHono()

export const convertImageHandler = app.openapi(postConvertImageRoute, (c) => {
  throw new Error('Not implemented')
})
