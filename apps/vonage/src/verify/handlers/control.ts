import { OpenAPIHono } from '@hono/zod-openapi'
import { postControlFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const controlHandler = app.openapi(postControlFormatRoute, (c) => {
  throw new Error('Not implemented')
})
