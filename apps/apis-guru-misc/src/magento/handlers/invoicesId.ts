import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1InvoicesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesIdHandler = app.openapi(getV1InvoicesIdRoute, (c) => {
  throw new Error('Not implemented')
})
