import { OpenAPIHono } from '@hono/zod-openapi'
import { postServerErrorRoute } from '../routes'

const app = new OpenAPIHono()

export const serverErrorHandler = app.openapi(postServerErrorRoute, (c) => {
  throw new Error('Not implemented')
})
