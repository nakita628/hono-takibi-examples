import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ParentRoute } from '../routes'

const app = new OpenAPIHono()

export const scansHandler = app.openapi(getV1ParentRoute, (c) => {
  throw new Error('Not implemented')
})
