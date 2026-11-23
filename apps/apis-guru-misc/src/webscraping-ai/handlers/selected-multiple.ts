import { OpenAPIHono } from '@hono/zod-openapi'
import { getSelectedMultipleRoute } from '../routes'

const app = new OpenAPIHono()

export const selectedMultipleHandler = app.openapi(getSelectedMultipleRoute, (c) => {
  throw new Error('Not implemented')
})
