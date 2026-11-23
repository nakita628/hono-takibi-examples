import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateHashRoute } from '../routes'

const app = new OpenAPIHono()

export const generateHashHandler = app.openapi(postGenerateHashRoute, (c) => {
  throw new Error('Not implemented')
})
