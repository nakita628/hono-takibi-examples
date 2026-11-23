import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrossBorderInvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const crossBorderInvoicesHandler = app.openapi(postCrossBorderInvoicesRoute, (c) => {
  throw new Error('Not implemented')
})
