import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsWdrsRoute } from '../routes'

const app = new OpenAPIHono()

export const wdrDetailReportsHandler = app.openapi(getReportsWdrsRoute, (c) => {
  throw new Error('Not implemented')
})
