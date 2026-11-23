import { OpenAPIHono } from '@hono/zod-openapi'
import { getBinRoute } from '../routes'

const app = new OpenAPIHono()

export const binHandler = app.openapi(getBinRoute, (c) => {
  throw new Error('Not implemented')
})
