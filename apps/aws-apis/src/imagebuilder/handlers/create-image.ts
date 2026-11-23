import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const createImageHandler = app.openapi(putCreateImageRoute, (c) => {
  throw new Error('Not implemented')
})
