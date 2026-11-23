import { OpenAPIHono } from '@hono/zod-openapi'
import { putProductImageUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productImageUpdateJsonHandler = app.openapi(putProductImageUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
