import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinusDmRoute } from '../routes'

const app = new OpenAPIHono()

export const minusDmHandler = app.openapi(getMinusDmRoute, (c) => {
  throw new Error('Not implemented')
})
