import { OpenAPIHono } from '@hono/zod-openapi'
import { getCeilRoute } from '../routes'

const app = new OpenAPIHono()

export const ceilHandler = app.openapi(getCeilRoute, (c) => {
  throw new Error('Not implemented')
})
