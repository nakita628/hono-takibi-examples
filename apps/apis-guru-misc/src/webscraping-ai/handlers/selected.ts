import { OpenAPIHono } from '@hono/zod-openapi'
import { getSelectedRoute } from '../routes'

const app = new OpenAPIHono()

export const selectedHandler = app.openapi(getSelectedRoute, (c) => {
  throw new Error('Not implemented')
})
