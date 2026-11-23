import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTaxFormRoute } from '../routes'

const app = new OpenAPIHono()

export const getTaxFormHandler = app.openapi(postGetTaxFormRoute, (c) => {
  throw new Error('Not implemented')
})
