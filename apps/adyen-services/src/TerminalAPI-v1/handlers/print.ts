import { OpenAPIHono } from '@hono/zod-openapi'
import { postPrintRoute } from '../routes'

const app = new OpenAPIHono()

export const printHandler = app.openapi(postPrintRoute, (c) => {
  throw new Error('Not implemented')
})
