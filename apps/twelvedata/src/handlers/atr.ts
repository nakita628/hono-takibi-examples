import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtrRoute } from '../routes'

const app = new OpenAPIHono()

export const atrHandler = app.openapi(getAtrRoute, (c) => {
  throw new Error('Not implemented')
})
